import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import data from "../../navigation.json";

export default function ContentBlock() {

    let { main = 1, sub = 1 } = useParams();

    const [text, setText] = useState({
        loading: true,
        text: "",
        title: ""
    });
    
    useEffect(() => {
        async function fetchData() {
            const title = await getTitle(main, sub)
            const textT = await getText(main, sub)
            setText({ ...text, text: textT, title, loading: false})
        }

        setText({ ...text, title: "", text: "", loading: true })
        fetchData();
    }, [main, sub]);


    async function getText(mainParam, subParam) {
        const text = await (await fetch(process.env.PUBLIC_URL + "/data/solutions/" + mainParam + "/" + subParam + ".html")).text()
        console.log("get text: " + mainParam, subParam)
        return text;
    }

    async function getTitle(mainParam, subParam) {
        const mainSection = data.filter((i) => i.id == mainParam)
        const subs = mainSection[0] ? mainSection[0].subs : []
        const subSection = subs.filter((i) => i.id == subParam)[0]
        const title = subSection ? subSection.title : "Default Title"
        return title;
    }

    return (
        <div className="bg-gray-800 bg-opacity-40 firefox:bg-opacity-40 backdrop-filter backdrop-blur-md text-white text-lg px-5 py-7 my-12 rounded-lg border border-gray-800 shadow-lg">
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