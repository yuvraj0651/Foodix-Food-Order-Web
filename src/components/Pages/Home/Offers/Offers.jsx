import { useEffect, useState } from "react";
import { MdFastfood } from "react-icons/md";
import BurgerImage from "../../../../assets/Home/offer/burger-img.png";

const Offers = () => {

    const targetDate = new Date("2026-01-01T00:00:00").getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                })
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (difference % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds })
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate])

    return (
        <>
            <div className="offers-section py-[4rem] sm:pt-[4rem] sm:pb-[1.5rem] md:pt-[1.5rem] bg-[#222] text-white">
                <div className="offers-section__inner grid sm:grid-cols-1 md:grid-cols-2 md:items-center lg:container lg:mx-auto">
                    <div className="offers-details-block font-poppins px-[1.5rem]">
                        <h4 className='flex items-baseline gap-2 justify-center lg:justify-start md:justify-start uppercase font-[500] text-[1rem] m-0 tracking-wide text-amber-500'><MdFastfood className='offer-icon text-[1.3rem]' /><span className='text-[0.9rem] lg:text-[0.95rem] font-[500] sm:text-[1rem]'>get 25% discount</span></h4>
                        <h2 className='offer-headingText text-left sm:text-center md:text-left lg:text-left xl:text-left 2xl:text-left pt-[0.7rem] uppercase text-[1.3rem] sm:text-[1.4rem] md:text-[1.7rem] xxl:text-[2.3rem] xxl:leading-[2.8rem] md:leading-9 lg:text-[2.6rem] lg:leading-[3.3rem] lg:font-[700] leading-7 tracking-wide font-[600] m-0'>today our special combo offers</h2>
                        <div className="countDown-timer-block flex items-center justify-center lg:justify-start md:justify-start gap-2 pt-4">
                            <div className="days timer-card">
                                <h4 className="count m-0 font-[500]">{timeLeft.days}</h4>
                                <p className="title m-0 capitalize text-[0.8rem]">days</p>
                            </div>
                            <div className="hours timer-card">
                                <h4 className="count m-0 font-[500]">{timeLeft.hours}</h4>
                                <p className="title m-0 capitalize text-[0.8rem]">hours</p>
                            </div>
                            <div className="minutes timer-card">
                                <h4 className="count m-0 font-[500]">{timeLeft.minutes}</h4>
                                <p className="title m-0 capitalize text-[0.8rem]">minutes</p>
                            </div>
                            <div className="seconds timer-card">
                                <h4 className="count m-0 font-[500]">{timeLeft.seconds}</h4>
                                <p className="title m-0 capitalize text-[0.8rem]">seconds</p>
                            </div>
                        </div>
                        <div className="read-more-button mt-[2rem] flex justify-center lg:justify-start md:justify-start">
                            <button type="button" className="border py-2 px-4 border-slate-600 rounded-[7px] bg-red-700 text-[1.0.9rem] font-[500] tracking-wide capitalize shadow-sm shadow-[#ccc]">read more</button>
                        </div>
                    </div>
                    <div className="offer-banner-picture mt-[1.7rem] sm:size-[30rem] mx-auto flex items-center justify-center flex-1 sm:mt-[0.5rem] md:size-[23rem] xxl:size-[28rem]">
                        <img src={BurgerImage} alt="burger-img" className="img-fluid w-full h-auto" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offers