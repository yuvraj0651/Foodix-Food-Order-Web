import PizzaImage from "../../../assets/Home/hero/pizza-img.png";
import DiscountImage from "../../../assets/Home/hero/discount-img.png";

const Hero = () => {
    return (
        <>
            <div className="hero-section w-full">
                <div className="hero-section__inner w-full relative bg-[#030303] pt-[6.5rem] 2xl:pt-[8rem] 2xl:pb-[4.5rem] pb-[2.5rem] px-[2rem] md:px-[2.5rem] xxl:px-[3rem] xl:pt-[7rem] xl:pb-[5.5rem] flex items-center justify-center">
                    <div className="hero_bg"></div>
                    <div className="banner-content grid grid-cols-1 md:grid-cols-2 font-poppins items-center gap-16 md:gap-10">
                        <div className="banner-info">
                            <p className='banner-headline text-amber-500 uppercase font-medium tracking-wide text-[1.1rem] md:text-[1rem] m-0 xl:text-[1.2rem] 2xl:text-[1.25rem]'>hot for every sunday</p>
                            <h4 className='capitalize font-bold text-[#fff] tracking-wide text-[2rem] md:text-[2.2rem] xxl:text-[3rem] xl:text-[3.5rem] leading-[1.4] xxl:leading-[1.3] py-2 xxl:py-3 lg:text-[3.2rem] 2xl:text-[4rem]'>enjoy our <span className='text-red-700'>delicious</span> food</h4>
                            <p className='text-[#fff] md:text-[0.8rem] xxl:text-[0.85rem] text-wide font-[500] md:leading-6 leading-7 tracking-wide xl:text-[1.1rem] xl:leading-9 2xl:text-[1.1rem]'>Savor the taste of our delicious, expertly crafted dishes made with the finest ingredients, offering a perfect blend of flavors.</p>
                            <div className="banner-button-block pt-[0.8rem] xxl:pt-[1.5rem]">
                                <button type="button" className='bg-red-700 text-white font-medium uppercase tracking-wide py-2 px-4 shadow-sm shadow-[#ccc ] rounded-md cursor-pointer md:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem]'>order now</button>
                            </div>
                        </div>
                        <div className="banner-image size-[17em] md:size-[19rem] lg:size-[27rem] xxl:size-[24rem] xl:size-[28rem] 2xl:size-[32rem] relative mx-auto">
                            <div className="banner-discount absolute left-[-2.1rem] md:left-[-2rem] xxl:left-[-4rem] md:top-[0.8rem] xxl:top-[3.3rem]">
                                <img src={DiscountImage} alt="discount-image" className="img-fluid w-[6rem] md:w-[5.5rem] xxl:w-[7rem] 2xl:w-[8.5rem] animate-bounce animation-[7s_linear_infinite]" />
                            </div>
                            <img src={PizzaImage} alt="pizza-image" className='img-fluid pizza-img w-full h-auto' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero