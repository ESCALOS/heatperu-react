import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi'

function HeaderSocialMedia() {
    const iconSize = 42;
    return (
        <ul className='flex justify-around gap-4 py-8'>
            <li>
                <a href='https://www.facebook.com/heatfactoryperu' target="_blank" rel="noopener noreferrer">
                    <BiLogoFacebook size={iconSize} className='p-1.5 hover:scale-125 transition-all duration-300 ease-in rounded-full hover:text-primary-500 hover:bg-secondary-500' />
                </a>
            </li>
            <li>
                <a href='https://www.instagram.com/calderas_quemadores_peru' target="_blank" rel="noopener noreferrer">
                    <BiLogoInstagram size={iconSize} className='p-1.5 hover:scale-125 transition-all duration-300 ease-in rounded-full hover:text-primary-500 hover:bg-secondary-500' />
                </a>
            </li>
            <li>
                <a href='https://www.linkedin.com/company/heat-factory/' target="_blank" rel="noopener noreferrer">
                    <BiLogoLinkedin size={iconSize} className='p-1.5 hover:scale-125 transition-all duration-300 ease-in rounded-full hover:text-primary-500 hover:bg-secondary-500' />
                </a>
            </li>
        </ul>
    )
}

export default HeaderSocialMedia
