import Breadcrumb from '../../../UI/Breadcrumb/Breadcrumb';
import { useParams } from 'react-router-dom';
import blogJson from "../../../API/blog.json";
import { useDispatch } from 'react-redux';
import { addToCart, decreaseCartItemQuantity, increaseCartItemQuantity } from '../../../redux/CartSlice';
import BnImage1 from "../../../../assets/menu-detail-banner/bn-img-1.png";
import BnImage2 from "../../../../assets/menu-detail-banner/bn-img-2.png";
import { Col, Row } from 'react-bootstrap';

const MenuDetail = () => {

    const { id } = useParams();
    console.log(id);

    const dispatch = useDispatch();

    const allMenus = [
        ...blogJson.BeefMenu,
        ...blogJson.GrilledMenu,
        ...blogJson.SizzlingMenu,
    ];

    const product = allMenus.find((item) => item.id === id);
    console.log(product);

    const addCartHandler = (product) => {
        dispatch(addToCart(product))
    }

    const incrementQuantityHandler = (id) => {
        dispatch(increaseCartItemQuantity({ id }))
    };

    const decrementQuantityHandler = (id) => {
        dispatch(decreaseCartItemQuantity({ id }))
    };

    if (!product) {
        return (
            <p className='text-center pt-[5rem] text-red-600 text-lg font-semibold'>
                Product Not Found 😢
            </p>
        )
    }

    return (
        <>
            <div className="menu-detail-page pt-[3rem] lg:pt-[4rem] font-montserrat">
                <Breadcrumb />
                <div className="menu-detail__inner section-padding">
                    <div className="product-details-block grid grid-cols-1 lg:items-center lg:grid-cols-2 lg:gap-x-7">
                        <div className="product-thumb">
                            <img src={product.MenuProductImg} alt="menu-detail-thumb" className='menu-thumb w-full object-cover rounded-[15px] shadow-sm' />
                        </div>
                        <div className="product-description mt-4 lg:mt-5">
                            <h4 className="product-title m-0 capitalize tracking-wide font-[600] leading-8 text-[1.6rem] dark:text-[#fff]">{product.ProductTitle}</h4>
                            <p className="product-subtitle py-2 font-[500] tracking-wide leading-[1.8rem] m-0 text-[1.1rem] dark:text-[#fff]">Plant-based dining is no longer a niche it's a movement. Chefs are pushing the boundaries of creativity.</p>

                            <div className="product-price my-3 flex items-end gap-x-2">
                                <span className="old-price text-[1.6rem] font-[500] tracking-wide text-red-700 dark:text-[#fff]">${product.FoodPrice}</span>
                                <span className="new-price line-through font-[500] tracking-wide text-[1.2rem] text-slate-600 dark:text-[#fff]">$45.25</span>
                            </div>

                            <div className="product-meta flex items-center gap-x-8">
                                <div className="product-quantity-block flex items-center gap-x-2">
                                    <button type="button" className="increase-qty qty-btn" onClick={() => incrementQuantityHandler(product.id)}>+</button>
                                    <span className="quantity">{product.quantity}</span>
                                    <button type="button" className="decrease-qty qty-btn" onClick={() => decrementQuantityHandler(product.id)}>-</button>
                                </div>

                                <div className="product-variations">
                                    <select name="variation" id="pro-var" className='border border-[#ccc] shadow-sm shadow-[#ccc] py-2 pl-[0.4rem] pr-4 bg-slate-900 text-[#fff] font-[400] tracking-wide text-[1rem] capitalize'>
                                        <option value="variations" hidden>select variation</option>
                                        <option value="small">small</option>
                                        <option value="medium">medium</option>
                                        <option value="large">large</option>
                                    </select>
                                </div>
                            </div>

                            <div className="product-add-block mt-8">
                                <button type="button" className="add_to_cart cta-button border border-[#ccc] shadow-sm shadow-[#ccc] py-2 px-[1.8rem] capitalize tracking-wide font-[500] bg-gradient-to-tr from-amber-600 to-red-600 text-[#fff] rounded-[7px]" onClick={() => addCartHandler(product)}>add to cart </button>
                            </div>
                        </div>
                    </div>
                    <div className="product-meta-description mt-7 grid grid-cols-1 gap-y-5 lg:gap-x-5 lg:grid-cols-2">
                        <div className="food-details-block">
                            <p className='m-0 font-[500] tracking-wide leading-6 text-justify text-[0.95rem] dark:text-[#fff]'>Indulge in a mouthwatering culinary delight with our Chicken Skewers paired with vibrant slices of sweet bell peppers. Tender pieces of succulent chicken are marinated to perfection, resulting in a flavorful and juicy experience.</p>
                            <div className="food-ingredient-block my-3">
                                <h4 className='capitalize tracking-wide font-[500] text-[1.2rem] dark:text-[#fff]'>ingredients:</h4>
                                <ul className='pl-0 m-0'>
                                    <li className='font-[500] tracking-wide leading-6 text-justify text-[0.95rem] dark:text-[#fff]'>Fresh chicken breast or thigh meat, cubed</li>
                                    <li className='font-[500] tracking-wide leading-6 text-justify text-[0.95rem] dark:text-[#fff]'>Assorted sweet bell peppers sliced into rings</li>
                                    <li className='font-[500] tracking-wide leading-6 text-justify text-[0.95rem] dark:text-[#fff]'>Marinade (your choice of herbs, spices, and seasonings)</li>
                                    <li className='font-[500] tracking-wide leading-6 text-justify text-[0.95rem] dark:text-[#fff]'>Olive oil</li>
                                    <li className='font-[500] tracking-wide leading-6 text-justify text-[0.95rem] dark:text-[#fff]'>Salt and pepper</li>
                                </ul>
                            </div>
                            <div className="food-preparations-block">
                                <h4 className='capitalize tracking-wide font-[500] text-[1.2rem] dark:text-[#fff]'>preparation:</h4>
                                <ul className='pl-0 m-0'>
                                    <li className='font-[500] tracking-wide leading-6 text-justify text-[0.95rem] dark:text-[#fff]'>Enjoy the skewers with a side of fresh salad or rice</li>
                                    <li className='font-[500] tracking-wide leading-6 text-justify text-[0.95rem] dark:text-[#fff]'>Drizzle with a zesty lemon or lime juice for an extra burst of flavor</li>
                                    <li className='font-[500] tracking-wide leading-6 text-justify text-[0.95rem] dark:text-[#fff]'>Pair with your favorite dipping sauce or chutney for added variety</li>
                                </ul>
                            </div>
                        </div>
                        <div className="food-details__banner-block grid gap-y-4 lg:gap-y-5">
                            <div className="food-banner-1 food-banner border border-[#ccc] bg-amber-500 shadow-sm shadow-[#ccc] pb-3 pl-5 rounded-[10px] cursor-pointer">
                                <Row>
                                    <Col xl={7} lg={7} md={7} sm={7} xs={7} >
                                        <div className="food-banner-details flex flex-col items-start justify-center h-full text-[#fff] mt-3">
                                            <span className='capitalize tracking-wide font-[500]'>Premium skewers</span>
                                            <h4 className='py-2 m-0 tracking-wide uppercase font-[600] text-[1.6rem]'>chicken skewers</h4>
                                            <p className='font-[500] leading-6 tracking-wide'>Savor the tantalizing taste of our expertly grilled chicken skewers, marinated.</p>
                                        </div>
                                    </Col>
                                    <Col xl={5} lg={5} md={5} sm={5} xs={5} >
                                        <div className="food-banner-picture">
                                            <img src={BnImage1} alt="bn-image" className='img-fluid' />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="food-banner-2 food-banner border border-[#ccc] bg-red-700 shadow-sm shadow-[#ccc] pb-3 pl-5 rounded-[10px] cursor-pointer">
                                <Row>
                                    <Col xl={7} lg={7} md={7} sm={7} xs={7} >
                                        <div className="food-banner-details flex flex-col items-start justify-center h-full text-[#fff] mt-3">
                                            <span className='capitalize tracking-wide font-[500]'>Premium wrap</span>
                                            <h4 className='py-2 m-0 tracking-wide uppercase font-[600] text-[1.6rem]'>chicken wrap</h4>
                                            <p className='font-[500] leading-6 tracking-wide'>Indulge in our savory chicken wrap, a delightful blend of tender grilled chicken.</p>
                                        </div>
                                    </Col>
                                    <Col xl={5} lg={5} md={5} sm={5} xs={5} >
                                        <div className="food-banner-picture">
                                            <img src={BnImage2} alt="bn-image" className='img-fluid' />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuDetail