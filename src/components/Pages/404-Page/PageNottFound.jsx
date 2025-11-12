import React from 'react';
import EarthImage from "../../../assets/page-not-found/earth-img.png";
import { Link } from 'react-router';

const PageNotFound = () => {
    return (
        <>
            <div className="page-not-found-page section-padding font-poppins bg-slate-200 dark:bg-slate-700">
                <div className="page-not-found__inner pt-[4rem] pb-[1.5rem]">
                    <div className="earth-picture w-[7rem] mx-auto md:w-[10rem] lg:w-[12rem] dark:grayscale-[0.5]">
                        <img src={EarthImage} alt="earth-image"  className='img-fluid'/>
                    </div>
                    <div className="page-not-found-content text-center">
                        <h1 className="page-not-found__title tracking-wider font-[700] text-[3.4rem] text-transparent m-0 md:text-[4.3rem] lg:text-[5rem] dark:text-[#ccc]">404</h1>
                        <div className="page-not-found-subtitle uppercase font-[800] tracking-wider text-[2rem] m-0 text-transparent md:text-[2.7rem] lg:text-[3rem] dark:text-[#ccc]">page not found</div>
                    </div>
                    <div className="page-not-found-details pt-3 pb-2">
                        <h4 className='tracking-wider capitalize leading-6 font-[500] text-[1rem] text-center dark:text-[#ccc]'>Oops! The page you’re looking for doesn’t exist or has been moved.</h4>
                        <p className='pt-1 text-center font-[500] tracking-wide dark:text-[#ccc]'>Go back to the homepage or check the URL again.</p>
                    </div>
                    <div className="go-to-home-button text-center md:pt-[1rem]">
                        <Link to="/" className="go-home tracking-wide capitalize font-[600] no-underline border border-[#ccc] px-3 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-sm shadow-[#ccc] rounded-[7px] hover:cursor-pointer">go back to homepage</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageNotFound