import HomeSlider from "@/Components/HomeSlider"
import GuestLayout from "@/Layouts/GuestLayout"

const Home = () => {
    return (
        <>
            <HomeSlider />
        </>
    )
}

Home.layout = (page: JSX.Element) => <GuestLayout children={page} title="Inicio" />

export default Home
