import SubNavbar from "./SubNavbar";

export default function Navbar() {
    return (<>
        <div className="h-16 sticky top-0 bg-blue-600 shadow-lg w-full">
            <div className="h-full max-w-6xl mx-auto">
                <ul className="space-x-12 h-full flex items-center text-xl">
                    <a className="cursor-pointer flex items-center font-semibold text-gray-300 hover:text-gray-100">HTML</a>
                    <a className="cursor-pointer flex items-center font-semibold text-gray-300 hover:text-gray-100">CSS</a>
                    <a className="cursor-pointer flex items-center font-semibold text-white italic">JavaScript</a>
                    <a className="cursor-pointer flex items-center font-semibold text-gray-300 hover:text-gray-100">Other</a>
                </ul>
            </div>
        </div>
        <SubNavbar/>
        </>
    )
}