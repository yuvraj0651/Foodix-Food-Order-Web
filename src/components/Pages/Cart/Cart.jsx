import { useSelector } from 'react-redux'
import Breadcrumb from '../../UI/Breadcrumb/Breadcrumb'
import CartItems from './CartItems/CartItems'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router'

const Cart = () => {

    const totalCartItems = useSelector(state => state.cart.cartItems);
    console.log(totalCartItems);

    const totalPrice = totalCartItems.reduce((acc, item) => {
        return acc + (item.FoodPrice * item.quantity);
    }, 0);

    let shoppingFee = 50;

    const navigate = useNavigate();

    return (
        <>
            <div className="cart-page pt-[3.3rem] lg:pt-[4rem] font-montserrat">
                <Breadcrumb />
                <div className="cart-page__inner section-padding">
                    <div className="cart-page-top text-center mt-[0.3rem] mb-[0.5rem] lg:mb-[2rem]">
                        <h4 className="cart-headingText capitalize font-[500] tracking-wide m-0 text-[1.1rem] lg:text-[1.5rem] dark:text-[#fff]">shopping cart</h4>
                    </div>
                    <Row>
                        <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                            <div className="overflow-x-scroll">
                                <table className='table table-responsive cartItem-table'>
                                    <thead>
                                        <tr>
                                            <td className='lg:text-[1rem]'>Product</td>
                                            <td className='text-center lg:text-[1rem]'>Price</td>
                                            <td className='text-center lg:text-[1rem]'>Quantity</td>
                                            <td className='text-center lg:text-[1rem]'>Remove</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            totalCartItems.length === 0 ?
                                                (
                                                    <tr>
                                                        <td colSpan={4} className='text-center'>No items found in the cart</td>
                                                    </tr>) : (
                                                    totalCartItems.map(item => (
                                                        <CartItems key={item.id} item={item} />
                                                    ))
                                                )}
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                            <div className="cart-total-block mt-4 lg:mt-0 border border-[#ccc] shadow-sm shadow-[#ccc] pt-[1.1rem] flex flex-col items-center justify-center px-3 rounded-[5px] bg-[#f7f1e1] ">
                                <h4 className='total-headingText lg:text-[1rem] m-0 uppercase font-[600] tracking-wide'>cart total</h4>
                                <table className="table table-responsive">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h4 className='m-0 capitalize tracking-wide text-[1rem]'>subtotal</h4>
                                            </td>
                                            <td>
                                                <span className='flex justify-end tracking-wide font-[500]'>${totalPrice}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h4 className='m-0 capitalize tracking-wide text-[1rem]'>shopping fee</h4>
                                            </td>
                                            <td>
                                                <span className='flex justify-end tracking-wide font-[500]'>${shoppingFee}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h4 className='m-0 capitalize tracking-wide text-[1rem]'>order total</h4>
                                            </td>
                                            <td>
                                                <span className='flex justify-end tracking-wide font-[500]'>${totalPrice + shoppingFee}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="checkout-block">
                                <Link to="/checkout" >
                                    <button type="button" className="checkout-button border border-[#ccc] shadow-sm shadow-[#ccc] py-[0.6rem] w-full mt-[1.5rem] bg-gradient-to-r from-amber-400 to-red-600 text-[#fff] font-[500] capitalize tracking-wide" onClick={() => {
                                    }}>proceed to checkout</button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Cart