import HomeSlider from './HomeSlider'
import FamilyList from './FamilyList'
import ClientList from './ClientList'

export default function HomePage() {
    return (
        <>
            <HomeSlider />
            <FamilyList />
            <div className='px-4 mx-auto max-w-7xl'><ClientList /></div>
        </>
    )
}
