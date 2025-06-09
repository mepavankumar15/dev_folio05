import Navbar from './components/navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Intro />
        <Projects />
        <Blogs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
