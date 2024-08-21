import { useId } from "react"
import { BiSearchAlt } from "react-icons/bi";


export default function Header() {
    const searchId = useId();

    return (
        <div className="flex items-center justify-around gap-2">
            <input type="search" id={searchId} className="w-full " />
            <button className="transition-colors bg-orange-400 hover:bg-orange-500">
                <BiSearchAlt />
            </button>
        </div>
    )
}
