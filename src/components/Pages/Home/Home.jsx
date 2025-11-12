import Hero from '../../UI/Hero/Hero'
import Categories from './Categories/Categories'
import About from './About/About'
import Offers from './Offers/Offers'
import WhyChoose from './WhyChoose/WhyChoose'
import Gallery from './Gallery/Gallery'
import Menu from './Our-Menu/Menu'

const Home = () => {

    return (
        <>
            <Hero />
            <Categories />
            <Offers />
            <About />
            <Gallery />
            <WhyChoose />
            <Menu />
        </>
    )
}

export default Home