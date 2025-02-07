import {
    BiLogoFacebook,
    BiLogoInstagram,
    BiLogoLinkedin,
    BiLogoYoutube,
} from "react-icons/bi";

function HeaderSocialMedia() {
    const iconSize = 36;
    return (
        <ul className="flex justify-around gap-4 py-8">
            <li>
                <a
                    href="https://www.youtube.com/@HEATFACTORYSAC"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BiLogoYoutube
                        size={iconSize}
                        className="text-gray-900 hover:text-gray-700"
                    />
                </a>
            </li>
            <li>
                <a
                    href="https://www.facebook.com/heatfactoryperu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BiLogoFacebook
                        size={iconSize}
                        className="text-gray-900 hover:text-gray-700"
                    />
                </a>
            </li>
            <li>
                <a
                    href="https://www.instagram.com/calderas_quemadores_peru"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BiLogoInstagram
                        size={iconSize}
                        className="text-gray-900 hover:text-gray-700"
                    />
                </a>
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/company/heat-factory/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BiLogoLinkedin
                        size={iconSize}
                        className="text-gray-900 hover:text-gray-700"
                    />
                </a>
            </li>
        </ul>
    );
}

export default HeaderSocialMedia;
