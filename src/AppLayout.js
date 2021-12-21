import ContentBlock from "./components/content/ContentBlock";
import Footer from "./components/nav/Footer";
import Navbar from "./components/nav/Navbar";

export default function AppLayout() {
    return (
        <div className="App min-h-screen bg-image">
                <Navbar/>
                <div className="max-w-6xl mx-auto pb-24">
                    <ContentBlock/>
                </div>
                <Footer/>
        </div>
    )
}