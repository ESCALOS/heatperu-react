import CommoditySearchResults from "@/Components/CommoditySearchResults"
import GuestLayout from "@/Layouts/GuestLayout"
import { Commodity } from "@/types"
import HomePage from "@/Components/HomePage"

type Props = {
    commodities?: Commodity[]
}

const Home = ({ commodities }: Props) => {

    return (
        <>
            {commodities ? (
                <CommoditySearchResults commodities={commodities} />
            ) : (
                <HomePage />
            )}
        </>
    )
}

Home.layout = (page: JSX.Element) => <GuestLayout children={page} title="Inicio" />

export default Home
