import { BiEnvelope, BiLogoFacebook, BiLogoInstagram } from "react-icons/bi"
import { LuSmartphone } from "react-icons/lu";

export default function TopBar() {
    return (
        <div className="w-full text-gray-700 border-b border-gray-100 bg-neutral-100 dark:bg-gray-700 dark:text-white">
            <div className="flex flex-wrap items-center justify-center gap-2 px-4 py-3 mx-auto md:justify-between max-w-7xl sm:px-6">
                <div className="flex items-center justify-center gap-4">
                    <div className="flex flex-wrap items-center justify-center gap-1">
                        <LuSmartphone />
                        <a href="tel:961749562" className="text-sm">961-749-562</a>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-1">
                        <BiEnvelope />
                        <a href="mailto:ventas@heatperu.com" className="text-sm">ventas@heatperu.com</a>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <p className="text-sm">
                        Síganos
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-1">
                        <a href="https://www.facebook.com/heatfactoryperu" title="instagram" target="_blank"
                            rel="noopener noreferrer">
                            <BiLogoFacebook />
                        </a>
                        <a href="https://www.instagram.com/calderas_quemadores_peru" title="instagram" target="_blank"
                            rel="noopener noreferrer">
                            <BiLogoInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
