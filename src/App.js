import { RecoilRoot, atom } from "recoil";
import ContentBlock from "./components/content/ContentBlock";
import Footer from "./components/nav/Footer";
import Navbar from "./components/nav/Navbar";

export const navigationState = atom({
    key: 'navigation',
    default: {
        main: 1,
        sub: 1
    }
})

function App() {
  return (
    <RecoilRoot>
        <div className="App h-screen bg-image">
            <Navbar/>
            <div className="max-w-6xl mx-auto">
                <ContentBlock/>
            </div>
            <Footer/>
        </div>
    </RecoilRoot>
  );
}

export default App;
