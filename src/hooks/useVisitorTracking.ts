import { useState, useEffect } from 'react';

interface VisitorData {
  id: string;
  location: {
    country: string;
    region: string;
    city: string;
    timezone: string;
  };
  visitCount: number;
  firstVisit: string;
  lastVisit: string;
  userAgent: string;
  referrer: string;
}

interface VisitorStats {
  totalVisitors: number;
  totalVisits: number;
  visitorsByLocation: Record<string, number>;
  recentVisitors: VisitorData[];
}

const STORAGE_KEY = 'visitor_tracking_data';
// Admin password from environment variable (set VITE_ADMIN_PASSWORD in .env file)
// Fallback to a default password if environment variable is not available
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';

export function useVisitorTracking() {
  const [visitorData, setVisitorData] = useState<VisitorData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    trackVisitor();
  }, []);

  const trackVisitor = async () => {
    try {
      setIsLoading(true);
      
      // Get or create visitor ID
      let visitorId = localStorage.getItem('visitor_id');
      if (!visitorId) {
        visitorId = generateVisitorId();
        localStorage.setItem('visitor_id', visitorId);
      }

      // Get location data
      const location = await getLocationData();
      
      // Get visitor data from storage
      const storedData = getStoredVisitorData();
      const existingVisitor = storedData.find(v => v.id === visitorId);
      
      const now = new Date().toISOString();
      
      let visitor: VisitorData;
      if (existingVisitor) {
        // Update existing visitor
        visitor = {
          ...existingVisitor,
          visitCount: existingVisitor.visitCount + 1,
          lastVisit: now,
          location: location,
          userAgent: navigator.userAgent,
          referrer: document.referrer
        };
      } else {
        // Create new visitor
        visitor = {
          id: visitorId,
          location: location,
          visitCount: 1,
          firstVisit: now,
          lastVisit: now,
          userAgent: navigator.userAgent,
          referrer: document.referrer
        };
      }

      // Update stored data
      const updatedData = existingVisitor 
        ? storedData.map(v => v.id === visitorId ? visitor : v)
        : [...storedData, visitor];
      
      setStoredVisitorData(updatedData);
      setVisitorData(visitor);
      
    } catch (error) {
      console.error('Error tracking visitor:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getLocationData = async (): Promise<VisitorData['location']> => {
    try {
      // Try to get location from IP geolocation service
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      
      return {
        country: data.country_name || 'Unknown',
        region: data.region || 'Unknown',
        city: data.city || 'Unknown',
        timezone: data.timezone || 'Unknown'
      };
    } catch (error) {
      console.error('Error getting location:', error);
      return {
        country: 'Unknown',
        region: 'Unknown',
        city: 'Unknown',
        timezone: 'Unknown'
      };
    }
  };

  const generateVisitorId = (): string => {
    return 'visitor_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
  };

  const getStoredVisitorData = (): VisitorData[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error reading stored visitor data:', error);
      return [];
    }
  };

  const setStoredVisitorData = (data: VisitorData[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Error storing visitor data:', error);
    }
  };

  const getVisitorStats = (): VisitorStats => {
    const visitors = getStoredVisitorData();
    
    const totalVisitors = visitors.length;
    const totalVisits = visitors.reduce((sum, visitor) => sum + visitor.visitCount, 0);
    
    const visitorsByLocation: Record<string, number> = {};
    visitors.forEach(visitor => {
      const locationKey = `${visitor.location.city}, ${visitor.location.region}, ${visitor.location.country}`;
      visitorsByLocation[locationKey] = (visitorsByLocation[locationKey] || 0) + 1;
    });
    
    const recentVisitors = visitors
      .sort((a, b) => new Date(b.lastVisit).getTime() - new Date(a.lastVisit).getTime())
      .slice(0, 50); // Last 50 visitors
    
    return {
      totalVisitors,
      totalVisits,
      visitorsByLocation,
      recentVisitors
    };
  };

  const clearVisitorData = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('visitor_id');
    setVisitorData(null);
  };

  return {
    visitorData,
    isLoading,
    getVisitorStats,
    clearVisitorData,
    ADMIN_PASSWORD
  };
}
