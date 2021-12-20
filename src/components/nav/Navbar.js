import SubNavbar from "./SubNavbar";

export default function Navbar() {
    return (<>
        <div className="h-16 sticky top-0 bg-blue-600 shadow-lg w-full">
            <div className="h-full max-w-6xl mx-auto flex justify-between items-center">
                <ul className="space-x-12 flex items-center text-xl">
                    <a className="cursor-pointer flex items-center font-semibold text-gray-300 hover:text-gray-100">HTML</a>
                    <a className="cursor-pointer flex items-center font-semibold text-gray-300 hover:text-gray-100">CSS</a>
                    <a className="cursor-pointer flex items-center font-semibold text-white italic">JavaScript</a>
                    <a className="cursor-pointer flex items-center font-semibold text-gray-300 hover:text-gray-100">Other</a>
                </ul>
                <p className="text-white">Solution-Navigator v1.0</p>
            </div>
        </div>
        <SubNavbar/>
        </>
    )
}