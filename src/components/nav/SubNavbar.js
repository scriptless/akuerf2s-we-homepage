import { NavLink, useParams } from "react-router-dom";
import data from "../../navigation.json";

export default function SubNavbar() {

    const params = useParams();

    const main = data.filter((i) => i.id == params.main)
    const subs = main[0] ? main[0].subs : []
    const items = []

    for(let sub of subs) {
        const active = sub.id == params.sub

        items.push(
            <NavLink to={'/' + params.main + '/' + sub.id} key={sub.id} className={`mr-10 py-3 sm:py-4 cursor-pointer flex items-center font-semibold ${active ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}>
                {sub.title}
            </NavLink>
        )
    }

    return (<>
        {items.length > 0 &&
        <div className="h-auto sticky top-0 bg-gray-800 bg-opacity-40 firefox:bg-opacity-40 backdrop-filter backdrop-blur-sm shadow-lg border border-gray-800 w-full">
            <div className="h-full max-w-6xl mx-auto px-5">
                <ul className="h-full flex flex-wrap items-center text-md sm:text-lg">
                    {items}
                </ul>
            </div>
        </div>}
        </>
    )
}