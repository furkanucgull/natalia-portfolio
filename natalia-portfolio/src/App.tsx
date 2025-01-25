import './App.css';
import HeroName from './components/HeroName';
import HeroPic from './components/HeroPic';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      {/* Header ve Navbar */}
      <header className="flex flex-col items-center ">
        <Navbar />
      </header>

      {/* Arka plan gradient */}
      <div className="relative min-h-screen w-full bg-gradient-to-r from-neutral-300 to-gray-500 overflow-hidden">
        {/* HeroName */}
        <section className="relative z-20">
          <HeroName />
        </section>

        {/* HeroPic */}
        <section className="relative z-20 mt-10">
          <HeroPic />
        </section>


      </div>
    </>
  );
}

export default App;
