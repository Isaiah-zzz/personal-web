import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ArrowRight, Database, Globe, Zap } from 'lucide-react';

interface DataPacket {
  id: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  type: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  delay: number;
}

export function NetworkRequests() {
  const [packets, setPackets] = useState<DataPacket[]>([]);

  const apiEndpoints = [
    { endpoint: '/api/skills', type: 'GET' as const },
    { endpoint: '/api/projects', type: 'GET' as const },
    { endpoint: '/api/experience', type: 'GET' as const },
    { endpoint: '/api/contact', type: 'POST' as const },
    { endpoint: '/api/analytics', type: 'PUT' as const },
    { endpoint: '/api/user/profile', type: 'GET' as const },
  ];

  useEffect(() => {
    const generatePacket = () => {
      // Random positions across the screen
      const startX = Math.random() * (window.innerWidth - 100);
      const startY = Math.random() * (window.innerHeight - 100);
      const endX = Math.random() * (window.innerWidth - 100);
      const endY = Math.random() * (window.innerHeight - 100);
      
      const randomEndpoint = apiEndpoints[Math.floor(Math.random() * apiEndpoints.length)];
      
      const newPacket: DataPacket = {
        id: `packet-${Date.now()}-${Math.random()}`,
        startX,
        startY,
        endX,
        endY,
        type: randomEndpoint.type,
        endpoint: randomEndpoint.endpoint,
        delay: 0
      };

      setPackets(prev => [...prev, newPacket]);

      // Remove packet after animation completes
      setTimeout(() => {
        setPackets(prev => prev.filter(p => p.id !== newPacket.id));
      }, 3000);
    };

    // Generate packets periodically
    const interval = setInterval(() => {
      if (Math.random() > 0.85) { // 15% chance (reduced from 40%)
        generatePacket();
      }
    }, 5000); // Every 5 seconds (increased from 2 seconds)

    return () => clearInterval(interval);
  }, []);

  const getPacketColor = (type: string) => {
    switch (type) {
      case 'GET': return '#00ff88';
      case 'POST': return '#ff6b9d';
      case 'PUT': return '#00d4ff';
      case 'DELETE': return '#ff4757';
      default: return '#00ff88';
    }
  };

  const getPacketIcon = (type: string) => {
    switch (type) {
      case 'GET': return Database;
      case 'POST': return Zap;
      case 'PUT': return Globe;
      case 'DELETE': return ArrowRight;
      default: return Database;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {packets.map((packet) => {
        const IconComponent = getPacketIcon(packet.type);
        
        return (
          <motion.div
            key={packet.id}
            className="absolute"
            initial={{
              x: packet.startX,
              y: packet.startY,
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              x: packet.endX,
              y: packet.endY,
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1, 1, 0.5]
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              times: [0, 0.1, 0.9, 1]
            }}
          >
            {/* Data packet visualization */}
            <div className="relative">
              {/* Packet container */}
              <motion.div
                className="relative bg-background/80 backdrop-blur-sm border rounded-lg p-2 shadow-lg"
                style={{ borderColor: getPacketColor(packet.type) }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center gap-2">
                  <IconComponent 
                    className="w-4 h-4" 
                    style={{ color: getPacketColor(packet.type) }}
                  />
                  <div className="text-xs">
                    <div className="font-mono font-bold" style={{ color: getPacketColor(packet.type) }}>
                      {packet.type}
                    </div>
                    <div className="text-muted-foreground font-mono text-[10px]">
                      {packet.endpoint}
                    </div>
                  </div>
                </div>
                
                {/* Loading indicator */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 rounded-full"
                  style={{ backgroundColor: getPacketColor(packet.type) }}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </motion.div>
              
              {/* Trail effect */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
                style={{ backgroundColor: getPacketColor(packet.type) }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{ 
                  duration: 0.5, 
                  repeat: 4,
                  ease: "easeOut"
                }}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}