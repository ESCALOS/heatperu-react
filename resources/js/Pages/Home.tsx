import FamilyList from "@/Components/FamilyList"
import HomeSlider from "@/Components/HomeSlider"
import GuestLayout from "@/Layouts/GuestLayout"
import { Family } from "@/types"

type Props = {
    families: Family[]
}

const Home = ({ families }: Props) => {
    return (
        <>
            <HomeSlider />
            <FamilyList families={families} />
        </>
    )
}

Home.layout = (page: JSX.Element) => <GuestLayout children={page} title="Inicio" />

export default Home
