import { useState, useEffect } from "react";
import { RecoilRoot, atom, useRecoilState } from "recoil";
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
    const [navState, setNavState] = useRecoilState(navigationState);

    return (
        <div className="App h-screen bg-image">
            <Navbar/>
            <div className="max-w-6xl mx-auto">   
                <ContentBlock main={navState.main} sub={navState.sub}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
