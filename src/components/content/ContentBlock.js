import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { navigationState } from "../../App";
import data from "../../navigation.json";

export default function ContentBlock(props) {

    const [text, setText] = useState({
        loading: true,
        text: "",
        title: ""
    });
    
    useEffect(() => {
        setText({ ...text, title: "", text: "", loading: true })
        async function fetchData() {
            const title = await getTitle(props.main, props.sub)
            const textT = await getText(props.main, props.sub)
            setText({ ...text, text: textT, title, loading: false})
        }
        fetchData();
    }, [props]);


    async function getText(main, sub) {
        const text = await (await fetch("data/solutions/" + main + "/" + sub + ".html")).text()
        return text;
    }

    async function getTitle(main, sub) {
        const mainSection = data.filter((i) => i.id === main)
        const subs = mainSection[0] ? mainSection[0].subs : []
        const subSection = subs.filter((i) => i.id === sub)[0]
        const title = subSection ? subSection.title : ""
        return title;
    }

    return (
        <div className="bg-gray-800 bg-opacity-40 firefox:bg-opacity-40 backdrop-filter backdrop-blur-sm text-white text-lg p-5 my-12 rounded-lg border border-gray-800 shadow-lg">
            { !text.loading ? 
            <>
                <p className="text-2xl sm:text-3xl italic mb-5">
                    {text.title}
                </p>
                <div dangerouslySetInnerHTML={{__html: text.text}}>
                </div>
            </> 
            : (<p>Daten werden geladen...</p>)
            }

        </div>
    )
}