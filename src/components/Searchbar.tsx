export default function Searchbar() {
    return <div className="relative">
        <input type="text" placeholder="Search"
            className="bg-black border border-gray-400 rounded-full px-4 py-1 w-[10rem] sm:w-[20rem]" />
        <button className="absolute top-0 right-0 bg-gray-500 px-4 h-full rounded-r-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </button>
    </div>
}