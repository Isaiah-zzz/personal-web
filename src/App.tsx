import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CodeBackground } from './components/CodeBackground';
import { GitCommitGraph } from './components/GitCommitGraph';
import { TerminalCursorTrail } from './components/TerminalCursorTrail';
import { LoadingProgressBars } from './components/LoadingProgressBars';
import { NetworkRequests } from './components/NetworkRequests';
import { ConsoleLogs } from './components/ConsoleLogs';

export default function App() {
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