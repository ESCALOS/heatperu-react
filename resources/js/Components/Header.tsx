import ApplicationLogo from "./ApplicationLogo";
import HeaderSearch from "./HeaderSearch";

export default function Header() {

    return (
        <div className='container flex flex-wrap items-center justify-center gap-4 bg-white lg:justify-between'>
            <ApplicationLogo />
            <HeaderSearch />
        </div>
    )
}
