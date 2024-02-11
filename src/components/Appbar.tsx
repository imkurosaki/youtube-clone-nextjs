import Searchbar from "./Searchbar";

export default function Appbar() {
    return <div className="flex justify-between py-4">
        <p>YouTube</p>
        <Searchbar />        
        <p>Sign in</p>
    </div>
}