import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Education from "./components/Education"
import Hobbies from './components/Hobbies';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Intro />
        <Projects />
        <Education />
        <Blogs />
        <Hobbies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
