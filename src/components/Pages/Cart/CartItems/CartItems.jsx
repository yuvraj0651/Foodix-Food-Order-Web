import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { decreaseCartItemQuantity, increaseCartItemQuantity, removeFromCart } from "../../../redux/CartSlice";

const CartItems = ({ item , totalPrice }) => {

    const dispatch = useDispatch();

    const incrementQuantityHandler = (id) => {
        dispatch(increaseCartItemQuantity({ id }))
    };

    const decrementQuantityHandler = (id) => {
        dispatch(decreaseCartItemQuantity({ id }))
    };

    const removeItemHandler = (id) => {
        dispatch(removeFromCart({id}))
    }

    return (
        <>
            <tr className="item-card border border-[#222] rounded-[10px] overflow-auto">
                <td className="product-info flex items-center flex-col md:flex-row gap-3">
                    <div className="item-card-thumb w-[10rem]">
                        <img src={item.MenuProductImg} alt="cart-item-thumb" className='img-fluid object-cover' />
                    </div>
                    <div className="product-description">
                        <p className="thumb-title m-0 tracking-wide font-[500] text-[0.8rem] lg:text-[0.9rem]">{item.ProductTitle}</p>
                    </div>
                </td>
                <td>
                    <div className="item-price flex justify-center">
                        <span className="price font-[500] tracking-wide">${item.FoodPrice}</span>
                    </div>
                </td>
                <td>
                    <div className="item-quantity flex justify-center items-center gap-[0.7rem] pl-2">
                        <button
                            type="button"
                            className="item-increment cta-button shadow-sm shadow-[#ccc] bg-amber-500 text-[#fff]"
                            onClick={() => incrementQuantityHandler(item.id)}
                        >+</button>
                        <span className="quantity font-[500]">{item.quantity}</span>
                        <button 
                        type="button" 
                        className="item-decrement cta-button shadow-sm shadow-[#ccc] bg-amber-500 text-[#fff]"
                        onClick={() => decrementQuantityHandler(item.id)}
                        >-</button>
                    </div>
                </td>
                <td>
                    <div className="item-remove-block flex justify-center" onClick={() => removeItemHandler(item.id)}>
                        <FaTrashAlt className='bin-icon text-red-600 cursor-pointer' />
                    </div>
                </td>
            </tr>
        </>
    )
}

export default CartItems