export default function SubNavbar() {
    return (
        <div className="h-14 sticky top-0 bg-gray-800 bg-opacity-40 firefox:bg-opacity-40 backdrop-filter backdrop-blur-sm shadow-lg w-full">
            <div className="h-full max-w-6xl mx-auto">
                <ul className="space-x-12 h-full flex items-center text-lg">
                    <a className="cursor-pointer flex items-center font-semibold text-gray-400 hover:text-gray-300">Promise</a>
                    <a className="cursor-pointer flex items-center font-semibold text-gray-400 hover:text-gray-300">async</a>
                    <a className="cursor-pointer flex items-center font-semibold text-gray-400 hover:text-gray-300">fetch</a>
                    <a className="cursor-pointer flex items-center font-semibold text-white italic text-xl">callback</a>
                    <a className="cursor-pointer flex items-center font-semibold text-gray-400 hover:text-gray-300">class</a>
                    <a className="cursor-pointer flex items-center font-semibold text-gray-400 hover:text-gray-300">TypeScript</a>
                </ul>
            </div>
        </div>
    )
}