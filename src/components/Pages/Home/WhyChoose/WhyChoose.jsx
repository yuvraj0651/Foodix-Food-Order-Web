import { MdFastfood } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import { FaHandHoldingWater } from "react-icons/fa";
import { LuChefHat } from "react-icons/lu";
import { GiPartyPopper } from "react-icons/gi";

const WhyChoose = () => {
    return (
        <>
            <div className="why-choose-section section-padding bg-slate-100 shadow-sm shadow-[#ccc] dark:bg-slate-600">
                <div className="why-choose__inner font-poppins lg:container mx-auto">
                    <h4 className='flex items-baseline gap-2 justify-center uppercase font-[500] pb-[0.5rem] text-[1rem] m-0 tracking-wide text-amber-500'><MdFastfood className='offer-icon text-[1.3rem]' /><span className='text-[0.9rem] lg:text-[0.95rem] font-[500] sm:text-[1rem]'>why choose us</span></h4>
                    <h2 className='offer-headingText text-center pb-[0.4rem] uppercase text-[1.2rem] sm:text-[1.2rem] md:text-[1.4rem] xxl:text-[2.3rem] xxl:leading-[2.8rem] md:leading-9 lg:text-[1.5rem] lg:font-[700] leading-[1.6rem] tracking-wide font-[600] m-0 dark:text-[#ccc]'>why we,re your best choice</h2>
                    <div className="why-choose-card-block mt-[0.85rem] grid sm:grid-cols-2 sm:gap-x-4 gap-y-3 md:grid-cols-2 md:gap-3 xxl:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 lg:gap-x-3">
                        <div className="why-choose-card dark:bg-slate-500 dark:border-slate-700 dark:shadow-slate-600">
                            <div className="icon">
                                <FaBowlFood className='choose-icon text-4xl text-red-600 dark:text-[#ccc]' />
                            </div>
                            <div className="content text-center pt-[0.6rem]">
                                <h4 className='m-0 capitalize sm:pb-2 lg:pb-[0.3rem] tracking-wide text-[1.2rem] font-[500] lg:text-[1.1rem] dark:text-[#ccc]'>hygienic food</h4>
                                <p className='m-0 tracking-wide font-[400] text-[0.9rem] dark:text-[#ccc]'>We are passionate about serving fresh, flavorful</p>
                            </div>
                        </div>
                        <div className="why-choose-card dark:bg-slate-500 dark:border-slate-700 dark:shadow-slate-600">
                            <div className="icon">
                                <FaHandHoldingWater className='choose-icon text-4xl text-red-600 dark:text-[#ccc]' />
                            </div>
                            <div className="content text-center pt-[0.6rem]">
                                <h4 className='m-0 capitalize pb-2 lg:pb-[0.3rem] tracking-wide text-[1.2rem] font-[500] lg:text-[1.1rem] dark:text-[#ccc]'>fresh environment</h4>
                                <p className='m-0 tracking-wide font-[400] text-[0.9rem] dark:text-[#ccc]'>We are passionate about serving fresh, flavorful</p>
                            </div>
                        </div>
                        <div className="why-choose-card dark:bg-slate-500 dark:border-slate-700 dark:shadow-slate-600">
                            <div className="icon">
                                <LuChefHat className='choose-icon text-4xl text-red-600 dark:text-[#ccc]' />
                            </div>
                            <div className="content text-center pt-[0.6rem]">
                                <h4 className='m-0 capitalize pb-2 lg:pb-[0.3rem] tracking-wide text-[1.2rem] font-[500] lg:text-[1.1rem] dark:text-[#ccc]'>skilled chefs</h4>
                                <p className='m-0 tracking-wide font-[400] text-[0.9rem] dark:text-[#ccc]'>We are passionate about serving fresh, flavorful</p>
                            </div>
                        </div>
                        <div className="why-choose-card dark:bg-slate-500 dark:border-slate-700 dark:shadow-slate-600">
                            <div className="icon">
                                <GiPartyPopper className='choose-icon text-4xl text-red-600 dark:text-[#ccc]' />
                            </div>
                            <div className="content text-center pt-[0.6rem]">
                                <h4 className='m-0 capitalize pb-2 lg:pb-[0.3rem] tracking-wide text-[1.2rem] font-[500] lg:text-[1.1rem] dark:text-[#ccc]'>events & party</h4>
                                <p className='m-0 tracking-wide font-[400] text-[0.9rem] dark:text-[#ccc]'>We are passionate about serving fresh, flavorful</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChoose