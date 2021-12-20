import { useRecoilState } from "recoil";
import { navigationState } from "../../App";
import data from "../../navigation.json";

export default function SubNavbar() {

    const [navState, setNavState] = useRecoilState(navigationState);
    const main = data.filter((i) => i.id === navState.main)
    const subs = main[0] ? main[0].subs : []
    const items = []

    for(let sub of subs) {
        const active = sub.id === navState.sub

        items.push(
            <a onClick={() => setNavState({ ...navState, sub: sub.id })} className={`mr-10 py-3 sm:py-4 cursor-pointer flex items-center font-semibold ${active ? 'text-white italic' : 'text-gray-400 hover:text-gray-300'}`}>
                {sub.title}
            </a>
        )
    }
    

    return (<>
        {items.length > 0 &&
        <div className="h-auto sticky top-0 bg-gray-800 bg-opacity-40 firefox:bg-opacity-40 backdrop-filter backdrop-blur-sm shadow-lg w-full">
            <div className="h-full max-w-6xl mx-auto px-5">
                <ul className="h-full flex flex-wrap items-center text-md sm:text-lg">
                    {items}
                </ul>
            </div>
        </div>}
        </>
    )
}