export default function Footer() {
    return (
        <div className="w-full bg-gray-800 h-32 fixed bottom-0">
            <div className="h-full max-w-6xl mx-auto px-5 flex justify-between items-center">
                <ul className="space-x-12 flex items-center text-xl">
                    <a className="cursor-pointer flex items-center font-semibold text-gray-300 hover:text-gray-100">HTML</a>
                    <a className="cursor-pointer flex items-center font-semibold text-gray-300 hover:text-gray-100">CSS</a>
                    <a className="cursor-pointer flex items-center font-semibold text-white italic">JavaScript</a>
                    <a className="cursor-pointer flex items-center font-semibold text-gray-300 hover:text-gray-100">Other</a>
                </ul>
                <p className="text-gray-100 font-normal">Erstellt von akuerf2s in Web-Engineering WS21/22</p>
            </div>
        </div>
    )
}