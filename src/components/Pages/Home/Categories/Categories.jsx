import { GiHamburger } from "react-icons/gi";
import { GiSlicedBread } from "react-icons/gi";
import { GiHotMeal } from "react-icons/gi";

const Categories = () => {
    return (
        <>
            <div className="categories-section section-padding lg:!pt-4">
                <div className="categories-section__inner">
                    <div className="categories-top-section md:grid md:grid-cols-2 items-center justify-between">
                        <div className="section-heading text-center py-2 text-white border border-[#ccc]">
                            <h4 className='font-count-hill font-bold text-[1.2rem] m-0 tracking-wider leading-6'>our categories</h4>
                        </div>
                        <div className="see-more-button justify-center flex md:justify-end my-[0.7rem] font-poppins">
                            <button type="button" className='tracking-wide border px-3 bg-red-600 text-white rounded-lg capitalize text-[0.9rem] py-[0.5rem] font-[700] flex items-center gap-2 overflow-hidden'>
                                <div className="svg-wrapper">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path
                                            fill="currentColor"
                                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                        ></path>
                                    </svg>
                                </div>
                                <span>see more</span>
                            </button>
                        </div>
                    </div>
                    <div className="categories-bottom-section pt-2">
                        <div className="categories-card-block grid grid-cols-2 xxl:grid-cols-3 lg:grid-cols-4 gap-[0.8rem]">
                            <div className="category-card py-3 px-2 font-poppins shadow-sm shadow-[#ccc] flex flex-col items-center justify-center dark:border-slate-500 dark:text-[#ccc] dark:bg-slate-600">
                                <div className="category-picture mb-2">
                                    <GiHamburger className='card-icon text-3xl lg:text-4xl' />
                                </div>
                                <div className="category-content text-center">
                                    <h4 className='card-title m-0 capitalize tracking-wide font-medium text-[0.9em] lg:text-[1rem] pb-[0.1rem]'>delish burger</h4>
                                    <p className='category-amount m-0 text-[0.8rem] tracking-wide font-[500] lg:text-[1rem]'>25 items</p>
                                </div>
                                <button className="card-Btn mt-2 inline-flex items-center justify-center gap-[0.4rem] pr-2 hover:pr-[0rem] hover:gap-0 font-poppins">
                                    <span className="Icon-Container h-[23px] w-[23px] flex items-center justify-center rounded-[50px] transition-all duration-200">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            height="0.9em"
                                            className="icon text-[1.5rem] text-[#000]"
                                        >
                                            <path d="M10 17l5-5-5-5v10z" />
                                        </svg>
                                    </span>
                                    <p className="button-text text-white m-0 text-[0.8rem] font-normal tracking-wide capitalize transition-all duration-300">view details</p>
                                </button>
                            </div>
                            <div className="category-card py-3 px-2 font-poppins shadow-sm shadow-[#ccc] flex flex-col items-center justify-center dark:border-slate-500 dark:text-[#ccc] dark:bg-slate-600">
                                <div className="category-picture mb-2">
                                    <GiSlicedBread className='card-icon text-3xl lg:text-4xl' />
                                </div>
                                <div className="category-content text-center">
                                    <h4 className='card-title m-0 capitalize tracking-wide font-medium text-[0.9rem] pb-[0.1rem] lg:text-[1rem]'>sandwiches</h4>
                                    <p className='category-amount m-0 text-[0.8rem] tracking-wide font-[500] lg:text-[1rem]'>20 items</p>
                                </div>
                                <button className="card-Btn mt-2 inline-flex items-center justify-center gap-[0.4rem] pr-2 hover:pr-[0rem] hover:gap-0 font-poppins">
                                    <span className="Icon-Container h-[23px] w-[23px] flex items-center justify-center rounded-[50px] transition-all duration-200">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            height="0.9em"
                                            className="icon text-[1.5rem] dark:text-[#000]"
                                        >
                                            <path d="M10 17l5-5-5-5v10z" />
                                        </svg>
                                    </span>
                                    <p className="button-text text-white m-0 text-[0.8rem] font-normal tracking-wide capitalize transition-all duration-300">view details</p>
                                </button>
                            </div>
                            <div className="category-card py-3 px-2 font-poppins shadow-sm shadow-[#ccc] flex flex-col items-center justify-center dark:border-slate-500 dark:text-[#ccc] dark:bg-slate-600">
                                <div className="category-picture mb-2">
                                    <GiHotMeal className='card-icon text-3xl lg:text-4xl' />
                                </div>
                                <div className="category-content text-center">
                                    <h4 className='card-title m-0 capitalize tracking-wide font-medium text-[0.9rem] pb-[0.1rem]lg:text-[1rem]'>mexican cuisine</h4>
                                    <p className='category-amount m-0 text-[0.8rem] tracking-wide font-[500] lg:text-[1rem]'>30 items</p>
                                </div>
                                <button className="card-Btn mt-2 inline-flex items-center justify-center gap-[0.4rem] pr-2 hover:pr-[0rem] hover:gap-0 font-poppins">
                                    <span className="Icon-Container h-[23px] w-[23px] flex items-center justify-center rounded-[50px] transition-all duration-200">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            height="0.9em"
                                            className="icon text-[1.5rem] dark:text-[#000]"
                                        >
                                            <path d="M10 17l5-5-5-5v10z" />
                                        </svg>
                                    </span>
                                    <p className="button-text text-white m-0 text-[0.8rem] font-normal tracking-wide capitalize transition-all duration-300">view details</p>
                                </button>
                            </div>
                            <div className="category-card py-3 px-2 font-poppins shadow-sm shadow-[#ccc] flex flex-col items-center justify-center dark:border-slate-500 dark:text-[#ccc] dark:bg-slate-600">
                                <div className="category-picture mb-2">
                                    <GiHotMeal className='card-icon text-3xl lg:text-4xl' />
                                </div>
                                <div className="category-content text-center">
                                    <h4 className='card-title m-0 capitalize tracking-wide font-medium text-[0.9rem] pb-[0.1rem]lg:text-[1rem]'>italian cuisine</h4>
                                    <p className='category-amount m-0 text-[0.8rem] tracking-wide font-[500] lg:text-[1rem]'>19 items</p>
                                </div>
                                <button className="card-Btn mt-2 inline-flex items-center justify-center gap-[0.4rem] pr-2 hover:pr-[0rem] hover:gap-0 font-poppins">
                                    <span className="Icon-Container h-[23px] w-[23px] flex items-center justify-center rounded-[50px] transition-all duration-200">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            height="0.9em"
                                            className="icon text-[1.5rem] text-[#000]"
                                        >
                                            <path d="M10 17l5-5-5-5v10z" />
                                        </svg>
                                    </span>
                                    <p className="button-text text-white m-0 text-[0.8rem] font-normal tracking-wide capitalize transition-all duration-300">view details</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories