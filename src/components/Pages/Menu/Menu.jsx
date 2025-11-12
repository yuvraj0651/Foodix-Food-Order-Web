import Breadcrumb from "../../UI/Breadcrumb/Breadcrumb";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { IoMdGitCompare } from "react-icons/io";
import blogJson from "../../API/blog.json";
import { FaStar } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";
import { addToWishlist } from "../../redux/WishlistSlice";
import { addToCompare } from "../../redux/ComapreSlice";
import { Link } from "react-router-dom";

const Menu = () => {

    const [activeTab, setActiveTab] = useState("beef");
    const dispatch = useDispatch();

    console.log(blogJson);

    const addCartHandler = (item) => {
        dispatch(addToCart(item));
    }

    const addWishlistHandler = (item) => {
        dispatch(addToWishlist(item));
    }

    const addToCompareHandler = (item) => {
        dispatch(addToCompare(item));
    }

    return (
        <>
            <div className="menu-page font-poppins content-padding md:!pt-[3.7rem] xxl:!pt-[3.7rem] lg:pt-[4rem]">
                <div className="menu-page__inner">
                    <Breadcrumb />
                    <div className="choose-menu-block section-padding bg-amber-50 pb-4 dark:bg-slate-700">
                        <div className="menu-info text-center">
                            <h4 className="menu-headingText uppercase font-[600] tracking-wide m-0 text-[#222] text-[1.3rem] dark:text-[#ccc]">choose menu</h4>
                            <p className="menu-subtitle m-0 tracking-wide text-[0.85rem] leading-[1.3rem] pt-[0.4rem] font-[500] dark:text-[#ccc]">Indulge in an array of meticulously crafted sushi rolls, artfully blending </p>
                        </div>
                        <div className="menu-tab-block mt-3 flex items-center justify-center gap-3 lg:gap-2 flex-wrap">
                            {
                                blogJson.menuTabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        type="button"
                                        id={tab.id}
                                        className={`nav-tab tab ${activeTab === tab.id ? "bg-red-700 text-white" : ""
                                            }`}
                                        onClick={() => setActiveTab(tab.id)}
                                        data-tab="beef"
                                    >
                                        {tab.label}
                                    </button>
                                ))
                            }
                        </div>
                        <div className="tab-contents mt-4 lg:mt-6">
                            {
                                activeTab === "beef" && (
                                    <div className="tab-content menu-card-block" id="beef">
                                        {
                                            blogJson.BeefMenu.map((item) => (
                                                <div className="menu_food-card" key={item.id}>
                                                    <div className="menu_food-card_cta-block hover:transition-all duration-300 absolute top-[2rem] left-[-2.5rem] flex flex-col gap-y-[0.4rem] invisible opacity-0">
                                                        <button className="food-card__wishlist-block cta-block border border-[#ddd] shadow-sm shadow-[#ddd] bg-slate-800 py-[0.6rem] px-[0.7rem]" onClick={() => addWishlistHandler(item)}>
                                                            <FaHeartCirclePlus className="heart-icon cta-icon text-white" />
                                                            <div className="wishlist-tooltip-block absolute top-[0.1rem] left-[3rem] flex items-center justify-center border border-slate-900 shadow-sm shadow-slate-800 bg-slate-900 py-1 px-3 rounded-[15px] opacity-0 invisible">
                                                                <div className="wishlist-badge"><span className="text-white font-[400] font-poppins tracking-wide capitalize text-[0.8rem] leading-4">wishlist</span></div>
                                                            </div>
                                                        </button>
                                                        <button className="food-card__compare-block cta-block border border-[#ddd] shadow-sm shadow-[#ddd] bg-slate-800 py-[0.6rem] px-[0.7rem]" onClick={() => addToCompareHandler(item)}>
                                                            <IoMdGitCompare className="compare-icon cta-icon text-white" />
                                                            <div className="wishlist-tooltip-block absolute top-[2.7rem] left-[3rem] flex items-center justify-center border border-slate-900 shadow-sm shadow-slate-800 bg-slate-900 py-1 px-3 rounded-[15px] opacity-0 invisible">
                                                                <div className="wishlist-badge"><span className="text-white font-[400] font-poppins tracking-wide capitalize text-[0.8rem] leading-4">compare</span></div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <div className="food-card-thumb">
                                                        <img src={item.MenuProductImg} alt="food-product-1" className="food-image img-fluid w-full object-cover" />
                                                    </div>
                                                    <div className="food-card-details border border-[#ccc] pt-4 pb-3 px-3 bg-[#fff]">
                                                        <div className="food-card__price-review flex items-center justify-between pb-[0.8rem] border-b border-[#ccc]">
                                                            <div className="food-card__price">
                                                                <span className="price text-[1.1rem] font-[600] tracking-wide text-red-700">${item.FoodPrice}</span>
                                                            </div>
                                                            <div className="food-card__reviews flex items-center gap-[0.15rem]">
                                                                <FaStar className="star-icon text-amber-500 text-[1.1rem]" />
                                                                <div className="rating-text font-[500] flex gap-[0.15rem]">
                                                                    <span>{item.Rating}</span>
                                                                    <span>({item.TotalConsumers})</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="food-card__description pt-3 pb-4">
                                                            <h4 className="m-0 capitalize tracking-wide font-[500] text-[1.2rem]">{item.ProductTitle}</h4>
                                                            <div className="food-card__list pt-3">
                                                                <ul className="feature-list pl-0 m-0">
                                                                    <li className="flex items-center gap-2 capitalize tracking-wide text-[0.9rem] mb-1"><FaRegCheckCircle className="text-red-700" />{item.ProductMeta1}</li>
                                                                    <li className="flex items-center gap-2 capitalize tracking-wide text-[0.9rem]"><FaRegCheckCircle className="text-red-700" />{item.ProductMeta2}</li>
                                                                </ul>
                                                            </div>
                                                            <div className="view-details__button-block mt-4 ml-1">
                                                                <Link to={`/menu/${item.id}`} className="no-underline capitalize border border-[#ccc] shadow-sm shadow-[#ccc] py-2 px-3 font-[600] bg-gradient-to-r from-amber-500 to-red-600 text-[#fff] text-[0.9rem] rounded-[7px]">view details</Link>
                                                            </div>
                                                        </div>
                                                        <div className="food-card__add-button border-t flex justify-center">
                                                            <button
                                                                type="button"
                                                                className="flex items-center justify-center mt-3 gap-[0.4rem] border flex-1 py-[0.7rem] shadow-sm shadow-[#ccc] rounded-[7px] bg-red-500 hover:bg-red-700 text-white transition-all duration-300"
                                                                onClick={() => addCartHandler(item)}
                                                            >
                                                                <FaCartFlatbed className="cart-icon" />
                                                                <span className="capitalize tracking-wide font-[500] text-[0.85rem]">{item.cardAddBtn}</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                            {
                                activeTab === "grilled" && (
                                    <div className="tab-content menu-card-block" id="beef">
                                        {
                                            blogJson.GrilledMenu.map((item) => (
                                                <div className="menu_food-card" key={item.id}>
                                                    <div className="food-card-thumb">
                                                        <img src={item.MenuProductImg} alt="food-product-1" className="food-image img-fluid w-full object-cover" />
                                                    </div>
                                                    <div className="food-card-details border border-[#ccc] pt-4 pb-3 px-3 bg-[#fff]">
                                                        <div className="food-card__price-review flex items-center justify-between pb-[0.8rem] border-b border-[#ccc]">
                                                            <div className="food-card__price">
                                                                <span className="price text-[1.1rem] font-[600] tracking-wide text-red-700">${item.FoodPrice}</span>
                                                            </div>
                                                            <div className="food-card__reviews flex items-center gap-[0.15rem]">
                                                                <FaStar className="star-icon text-amber-500 text-[1.1rem]" />
                                                                <div className="rating-text font-[500] flex gap-[0.15rem]">
                                                                    <span>{item.Rating}</span>
                                                                    <span>({item.TotalConsumers})</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="food-card__description pt-3 pb-4">
                                                            <h4 className="m-0 capitalize tracking-wide font-[500] text-[1.2rem]">{item.ProductTitle}</h4>
                                                            <div className="food-card__list pt-3">
                                                                <ul className="feature-list pl-0 m-0">
                                                                    <li className="flex items-center gap-2 capitalize tracking-wide text-[0.9rem] mb-1"><FaRegCheckCircle className="text-red-700" />{item.ProductMeta1}</li>
                                                                    <li className="flex items-center gap-2 capitalize tracking-wide text-[0.9rem]"><FaRegCheckCircle className="text-red-700" />{item.ProductMeta2}</li>
                                                                </ul>
                                                            </div>
                                                            <div className="view-details__button-block mt-4 ml-1">
                                                                <Link to={`/menu/${item.id}`} className="no-underline capitalize border border-[#ccc] shadow-sm shadow-[#ccc] py-2 px-3 font-[600] bg-gradient-to-r from-amber-500 to-red-600 text-[#fff] text-[0.9rem] rounded-[7px]">view details</Link>
                                                            </div>
                                                        </div>
                                                        <div className="food-card__add-button border-t flex justify-center">
                                                            <button type="button" onClick={() => addCartHandler(item)} className="flex items-center justify-center mt-3 gap-[0.4rem] border flex-1 py-[0.7rem] shadow-sm shadow-[#ccc] rounded-[7px] bg-red-500 hover:bg-red-700 text-white transition-all duration-300">
                                                                <FaCartFlatbed className="cart-icon" />
                                                                <span className="capitalize tracking-wide font-[500] text-[0.85rem]">{item.cardAddBtn}</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                            {
                                activeTab === "sizzling" && (
                                    <div className="tab-content menu-card-block" id="beef">
                                        {
                                            blogJson.SizzlingMenu.map((item) => (
                                                <div className="menu_food-card" key={item.id}>
                                                    <div className="food-card-thumb">
                                                        <img src={item.MenuProductImg} alt="food-product-1" className="food-image img-fluid w-full object-cover" />
                                                    </div>
                                                    <div className="food-card-details border border-[#ccc] pt-4 pb-3 px-3 bg-[#fff]">
                                                        <div className="food-card__price-review flex items-center justify-between pb-[0.8rem] border-b border-[#ccc]">
                                                            <div className="food-card__price">
                                                                <span className="price text-[1.1rem] font-[600] tracking-wide text-red-700">${item.FoodPrice}</span>
                                                            </div>
                                                            <div className="food-card__reviews flex items-center gap-[0.15rem]">
                                                                <FaStar className="star-icon text-amber-500 text-[1.1rem]" />
                                                                <div className="rating-text font-[500] flex gap-[0.15rem]">
                                                                    <span>{item.Rating}</span>
                                                                    <span>({item.TotalConsumers})</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="food-card__description pt-3 pb-4">
                                                            <h4 className="m-0 capitalize tracking-wide font-[500] text-[1.2rem]">{item.ProductTitle}</h4>
                                                            <div className="food-card__list pt-3">
                                                                <ul className="feature-list pl-0 m-0">
                                                                    <li className="flex items-center gap-2 capitalize tracking-wide text-[0.9rem] mb-1"><FaRegCheckCircle className="text-red-700" />{item.ProductMeta1}</li>
                                                                    <li className="flex items-center gap-2 capitalize tracking-wide text-[0.9rem]"><FaRegCheckCircle className="text-red-700" />{item.ProductMeta2}</li>
                                                                </ul>
                                                            </div>
                                                            <div className="view-details__button-block mt-4 ml-1">
                                                                <Link to={`/menu/${item.id}`} className="no-underline capitalize border border-[#ccc] shadow-sm shadow-[#ccc] py-2 px-3 font-[600] bg-gradient-to-r from-amber-500 to-red-600 text-[#fff] text-[0.9rem] rounded-[7px]">view details</Link>
                                                            </div>
                                                        </div>
                                                        <div className="food-card__add-button border-t flex justify-center">
                                                            <button type="button" onClick={() => addCartHandler(item)} className="flex items-center justify-center mt-3 gap-[0.4rem] border flex-1 py-[0.7rem] shadow-sm shadow-[#ccc] rounded-[7px] bg-red-500 hover:bg-red-700 text-white transition-all duration-300">
                                                                <FaCartFlatbed className="cart-icon" />
                                                                <span className="capitalize tracking-wide font-[500] text-[0.85rem]">{item.cardAddBtn}</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                            {
                                activeTab === "steak" && (
                                    <div className="tab-content menu-card-block" id="beef">
                                        {
                                            blogJson.GrilledMenu.map((item) => (
                                                <div className="menu_food-card" key={item.id}>
                                                    <div className="food-card-thumb">
                                                        <img src={item.MenuProductImg} alt="food-product-1" className="food-image img-fluid w-full object-cover" />
                                                    </div>
                                                    <div className="food-card-details border border-[#ccc] pt-4 pb-3 px-3 bg-[#fff]">
                                                        <div className="food-card__price-review flex items-center justify-between pb-[0.8rem] border-b border-[#ccc]">
                                                            <div className="food-card__price">
                                                                <span className="price text-[1.1rem] font-[600] tracking-wide text-red-700">${item.FoodPrice}</span>
                                                            </div>
                                                            <div className="food-card__reviews flex items-center gap-[0.15rem]">
                                                                <FaStar className="star-icon text-amber-500 text-[1.1rem]" />
                                                                <div className="rating-text font-[500] flex gap-[0.15rem]">
                                                                    <span>{item.Rating}</span>
                                                                    <span>({item.TotalConsumers})</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="food-card__description pt-3 pb-4">
                                                            <h4 className="m-0 capitalize tracking-wide font-[500] text-[1.2rem]">{item.ProductTitle}</h4>
                                                            <div className="food-card__list pt-3">
                                                                <ul className="feature-list pl-0 m-0">
                                                                    <li className="flex items-center gap-2 capitalize tracking-wide text-[0.9rem] mb-1"><FaRegCheckCircle className="text-red-700" />{item.ProductMeta1}</li>
                                                                    <li className="flex items-center gap-2 capitalize tracking-wide text-[0.9rem]"><FaRegCheckCircle className="text-red-700" />{item.ProductMeta2}</li>
                                                                </ul>
                                                            </div>
                                                            <div className="view-details__button-block mt-4 ml-1">
                                                                <Link to={`/menu/${item.id}`} className="no-underline capitalize border border-[#ccc] shadow-sm shadow-[#ccc] py-2 px-3 font-[600] bg-gradient-to-r from-amber-500 to-red-600 text-[#fff] text-[0.9rem] rounded-[7px]">view details</Link>
                                                            </div>
                                                        </div>
                                                        <div className="food-card__add-button border-t flex justify-center">
                                                            <button type="button" onClick={() => addCartHandler(item)} className="flex items-center justify-center mt-3 gap-[0.4rem] border flex-1 py-[0.7rem] shadow-sm shadow-[#ccc] rounded-[7px] bg-red-500 hover:bg-red-700 text-white transition-all duration-300">
                                                                <FaCartFlatbed className="cart-icon" />
                                                                <span className="capitalize tracking-wide font-[500] text-[0.85rem]">{item.cardAddBtn}</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                {/* <button type="button" className="text-[#fff] border border-[#ccc] shadow-sm shadow-[#ccc] py-1 px-2 rounded-[10px] bg-amber-700" onClick={() => dispatch(fetchProducts())}>fetch Products</button> */}
            </div>
        </>
    )
}

export default Menu