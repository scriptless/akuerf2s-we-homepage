import ContentBlock from "./components/content/ContentBlock";
import Footer from "./components/nav/Footer";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <div className="App h-screen bg-image">
      <Navbar/>
      <div className="max-w-6xl mx-auto">
        <ContentBlock/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
