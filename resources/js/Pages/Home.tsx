import CommoditySearchResults from "@/Components/CommoditySearchResults";
import GuestLayout from "@/Layouts/GuestLayout";
import { Commodity } from "@/types";
import HomePage from "@/Components/HomePage";

type Props = {
    commodities?: Commodity[];
};

const Home = ({ commodities }: Props) => {
    return (
        <GuestLayout title="Inicio">
            {commodities ? (
                <CommoditySearchResults commodities={commodities} />
            ) : (
                <HomePage />
            )}
        </GuestLayout>
    );
};

export default Home;
