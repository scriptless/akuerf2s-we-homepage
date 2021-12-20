import { useRecoilValue } from "recoil";
import { navigationState } from "../../App";
import data from "../../data/navigation.json";

export default function ContentBlock() {

    const navState = useRecoilValue(navigationState);
    const main = data.filter((i) => i.id === navState.main)
    const subs = main[0] ? main[0].subs : []
    let title = subs.filter((i) => i.id === navState.sub)[0]
    title = title ? title.title : ""

    return (
        <div className="bg-gray-800 bg-opacity-40 firefox:bg-opacity-40 backdrop-filter backdrop-blur-sm text-white text-lg p-5 my-12 rounded-lg border border-gray-800 shadow-lg">
            <p className="text-2xl sm:text-3xl italic mb-5">
                {title}
            </p>
        </div>
    )
}