import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { BiArrowToTop } from "react-icons/bi";

const ScrollToTop = () => {

    const {pathname}  = useLocation();

    const scrollTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    useEffect(() => {
        scrollTop();
    },[pathname])

    return (
        <button
            onClick={scrollTop}
            className='fixed right-4 bottom-4 bg-red-600 rounded-[10px] px-[0.7rem] py-[0.7rem] shadow-sm shadow-[#ccc] text-[#fff] z-[10]'
        >
            <BiArrowToTop className='text-[1.1rem]'/>
        </button>
    )
}

export default ScrollToTop
