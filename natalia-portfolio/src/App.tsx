import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <main className="   flex flex-col items-center pb-5 bg-black ">
        <Navbar />
      </main>
      <div
        className=" relative -z-10  bg-no-repeat lg:bg-[center_top_-30rem]  bg-cover min-h-screen "
        style={{
          backgroundImage: "url('src/images/background.jpg')",
        }}
      ></div>



    </>
  );
}

export default App;
