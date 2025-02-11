import Breadcrumb from "@/Components/Breadcrumb";
import { services } from "@/constants";
import Guest from "@/Layouts/GuestLayout";

type Service = {
    id: number;
    title: string;
    text: string;
};

function ServiceItem({ id, title, text }: Service) {
    return (
        <div className="grid items-center grid-cols-1 gap-4 px-4 py-4 rounded-md lg:grid-cols-2">
            <div
                className={`${
                    id % 2 === 0 ? "lg:order-2" : "lg:order-1"
                } bg-zinc-50 h-full flex flex-col justify-center p-6 md:p-12`}
            >
                <h2 className="mb-4 text-2xl font-black text-center text-zinc-900 md:mb-8 md:text-3xl lg:text-4xl">
                    {title}
                </h2>
                <p className="text-sm text-justify md:text-base text-zinc-500">
                    {text}
                </p>
            </div>
            <img
                src={`/images/services/${id}.jpeg`}
                alt={title}
                className={`object-cover h-full aspect-video rounded-md ${
                    id % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
            />
        </div>
    );
}

function Services() {
    return (
        <Guest title="Servicios">
            <Breadcrumb title="Servicios" imagePath="banner2.webp" />
            <div className="py-4 mx-auto space-y-4 max-w-7xl">
                {services.map((service) => (
                    <ServiceItem {...service} key={service.id} />
                ))}
            </div>
        </Guest>
    );
}

export default Services;
