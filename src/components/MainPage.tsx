import { Header } from './Header';
import { Hero } from './Hero';
import { About } from './About';
import { Experience } from './Experience';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { CodeBackground } from './CodeBackground';
import { GitCommitGraph } from './GitCommitGraph';
import { TerminalCursorTrail } from './TerminalCursorTrail';
import { LoadingProgressBars } from './LoadingProgressBars';
import { NetworkRequests } from './NetworkRequests';
import { ConsoleLogs } from './ConsoleLogs';

export function MainPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background and Base Animations */}
      <CodeBackground />
      <GitCommitGraph />
      <NetworkRequests />
      
      {/* Interactive Animations */}
      <TerminalCursorTrail />
      <LoadingProgressBars />
      <ConsoleLogs />
      
      {/* Main Content */}
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
