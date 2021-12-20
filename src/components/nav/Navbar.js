import { useRecoilState } from "recoil";
import SubNavbar from "./SubNavbar";
import { navigationState } from "../../App";


function NavLink(index) {

    const [navState, setNavState] = useRecoilState(navigationState);
    const active = navState.main === index;

    return (
        <a 
        key={index}
        onClick={() => setNavState({ ...navState, main: index, sub: 1 })} 
        className={`py-1 my-1 sm:my-3 w-12 sm:w-14 cursor-pointer flex items-center justify-center font-semibold 
        ${active ? 'text-white bg-blue-700 rounded-full italic' : 'text-gray-300 hover:text-gray-100'}`}>{index}</a>
    )
}

export default function Navbar() {

    const linkItems = [];

    for(let i = 1; i <= 13; i++) {
        linkItems.push(NavLink(i))
    }

    return (<>
        <div className="h-auto sticky top-0 bg-blue-600 shadow-lg w-full">
            <div className="h-full max-w-6xl mx-auto px-5 flex flex-col-reverse lg:flex-row flex-wrap justify-between lg:items-center">
                <ul className="flex flex-wrap items-center text-lg mt-2 md:mt-0 md:text-xl py-3 lg:py-0">
                    {linkItems}
                </ul>
                <p className="text-gray-200 font-normal pt-3 lg:pt-0">Solution-Navigator v1.0</p>
            </div>
        </div>
        <SubNavbar/>
        </>
    )
}