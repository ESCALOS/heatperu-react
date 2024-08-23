import ApplicationLogo from "./ApplicationLogo";
import HeaderSearch from "./HeaderSearch";
import HeaderSocialMedia from "./HeaderSocialMedia";

export default function Header() {

    return (
        <div className='container grid items-center justify-center grid-cols-1 gap-4 bg-white lg:gap-12 lg:grid-cols-4'>
            <ApplicationLogo />
            <HeaderSearch />
            <HeaderSocialMedia />
        </div>
    )
}
