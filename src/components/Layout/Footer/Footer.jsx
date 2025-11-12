import FooterLogo from "../../../assets/header/logo-white.png";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="footer-section text-white pt-[2.3rem] pb-[1rem] px-[1.5rem] lg:pt-[2.5rem] lg:pb-[1.3rem shadow-sm shadow-[#ccc] border-sm border-[#ccc]">
                <div className="footer-section__inner">
                    <div className="footer-section__top  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:gap-x-12 lg:grid-x-7">
                        <div className="footer-section__meta-block">
                            <div className="footer-logo w-[7.5rem]">
                                <img src={FooterLogo} alt="footer-logo" className='img-fluid' />
                            </div>
                            <div className="footer-meta-text font-poppins pt-[0.9rem] pb-4">
                                <p className="m-0 text-[0.85rem] leading-6 tracking-wide font-[500]">Discover culinary delights recipes and inspiration in our delightful food haven..</p>
                            </div>
                            <div className="footer-section__social flex items-center gap-8 sm:gap-9 mdgap-12 lg:gap-4 lg:mt-4">
                                <div className="facebook_social social-box" data-social="facebook" style={{"--accent-color":"blue"}}>
                                    <FaFacebook className='social-icon' />
                                </div>
                                <div className="twitter_social social-box" data-social="twitter" style={{"--accent-color":"#222"}}>
                                    <FaXTwitter className='social-icon' />
                                </div>
                                <div className="instagram_social social-box" data-social="instagram" style={{"--accent-color":"orange"}}>
                                    <FaInstagram className='social-icon' />
                                </div>
                                <div className="youtube_social social-box" data-social="youtube" style={{"--accent-color":"red"}}>
                                    <FaYoutube className='social-icon' />
                                </div>
                            </div>
                        </div>
                        <div className="footer-section__links-block pt-[2.3rem] pb-[1.5rem] lg:pt-[0.5rem] font-poppins">
                            <div className="footer-link-title">
                                <h4 className="link-heading uppercase font-[600] tracking-wide text-[1.1rem] pb-2">contact us</h4>
                                <ul className="address-link pl-0 m-0">
                                    <li className="tracking-wide text-[0.85rem]">1901 Thornridge Cir. Shiloh, Hawaii 81063</li>
                                    <li className="py-[0.4rem]">
                                        <a href="/" className="text-decoration-none text-white tracking-wide text-[0.85rem]">+88-344-667-999</a>
                                    </li>
                                    <li>
                                        <a href="/" className="text-decoration-none text-white tracking-wide text-[0.85rem]">order@foodix.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-section__links-block pt-[0.5rem] pb-[1rem] font-poppins">
                            <div className="footer-link-title">
                                <h4 className="link-heading uppercase font-[600] tracking-wide text-[1.1rem] pb-2">quick links</h4>
                                <ul className="address-link pl-0 m-0">
                                    <li className="tracking-wide text-[0.85rem]">
                                        <a href="/" className="capitalize text-[0.85rem] text-white text-decoration-none">Home</a>
                                    </li>
                                    <li className="pt-[0.2rem] pb-[0.2rem]">
                                        <a href="/" className="text-decoration-none capitalize text-white tracking-wide text-[0.85rem]">about us</a>
                                    </li>
                                    <li className="pt-[0.2rem] pb-[0.2rem]">
                                        <a href="/" className="text-decoration-none capitalize text-white tracking-wide text-[0.85rem]">services</a>
                                    </li>
                                    <li className="pt-[0.2rem] pb-[0.2rem]">
                                        <a href="/" className="text-decoration-none capitalize text-white tracking-wide text-[0.85rem]">our menu</a>
                                    </li>
                                    <li className="pt-[0.2rem] pb-[0.2rem]">
                                        <a href="/" className="text-decoration-none capitalize text-white tracking-wide text-[0.85rem]">gallery</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-section__links-block pt-[0.5rem] pb-[1rem] font-poppins">
                            <div className="footer-link-title">
                                <h4 className="link-heading uppercase font-[600] tracking-wide text-[1.1rem] pb-2">opening time</h4>
                                <ul className="address-link pl-0 m-0">
                                    <li className="tracking-wide text-[0.85rem]">
                                        <a href="/" className="capitalize text-[0.85rem] text-white text-decoration-none">monday: 10:00 am - 05:00 pm</a>
                                    </li>
                                    <li className="pt-[0.4rem] pb-[0.2rem]">
                                        <a href="/" className="text-decoration-none capitalize text-white tracking-wide text-[0.85rem]">tuesday: 10:20am - 05:30pm</a>
                                    </li>
                                    <li className="pt-[0.4rem] pb-[0.2rem]">
                                        <a href="/" className="text-decoration-none capitalize text-white tracking-wide text-[0.85rem]">wednesday: 10:30am - 05:50pm</a>
                                    </li>
                                    <li className="pt-[0.4rem] pb-[0.2rem]">
                                        <a href="/" className="text-decoration-none capitalize text-white tracking-wide text-[0.85rem]">thursday: 11:00am - 07:10pm</a>
                                    </li>
                                    <li className="pt-[0.4rem] pb-[0.2rem]">
                                        <a href="/" className="text-decoration-none capitalize text-white tracking-wide text-[0.85rem]">friday: closed</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer