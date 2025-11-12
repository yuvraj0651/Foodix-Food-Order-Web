import { Col, Row } from 'react-bootstrap'
import Breadcrumb from '../../UI/Breadcrumb/Breadcrumb'
import { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../redux/CartSlice';
import { useDispatch } from 'react-redux';

const Checkout = () => {

    const [formData, setFormData] = useState({
        first: "",
        last: "",
        company: "",
        address: "",
        town: "",
        country: "",
        postcode: "",
        contact: "",
        order: ""
    });
    const [placeTimer, setPlaceTimer] = useState(null);
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {

        if (placeTimer <= 0 || placeTimer === null) return;

        const placeId = setInterval(() => {
            setPlaceTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(placeId);
    }, [placeTimer]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const inputRef = useRef();

    const navigate = useNavigate();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handlePlaceHandler = (e) => {
        e.preventDefault();

        const validate = () => {
            const newErrors = {};

            if (!formData.first.trim()) {
                newErrors.first = "First name is required";
            } else if (formData.first.trim().length < 3) {
                newErrors.first = "First name must be at least 3 characters";
            }

            if (!formData.last.trim()) {
                newErrors.last = "Last name is required";
            } else if (formData.last.trim().length < 3) {
                newErrors.last = "Last name must be at least 3 characters";
            }

            if (!formData.company.trim()) {
                newErrors.company = "Company name is required";
            }

            if (!formData.address.trim()) {
                newErrors.address = "Address is required";
            }

            if (!formData.town.trim()) {
                newErrors.town = "Town / City is required";
            }

            if (!formData.country.trim()) {
                newErrors.country = "Country name is required";
            }

            if (!formData.postcode.trim()) {
                newErrors.postcode = "Postcode is required";
            } else if (!/^\d{4,6}$/.test(formData.postcode)) {
                newErrors.postcode = "Postcode must be between 4 to 6 digits";
            }

            if (!formData.contact.trim()) {
                newErrors.contact = "Contact number is required";
            } else if (!/^[0-9]{10}$/.test(formData.contact)) {
                newErrors.contact = "Contact number must be 10 digits";
            }

            if (!formData.order.trim()) {
                newErrors.order = "Please enter some order notes";
            }

            return newErrors;
        }

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setPlaceTimer(5);
            toast.success("Form Submitted Successfully");
            let timer = setTimeout(() => {
                navigate("/");
            }, 5000);

            dispatch(clearCart());

            return () => clearTimeout(timer);
        }
    }

    return (
        <>
            <div className="checkout-page pt-[4rem] font-montserrat bg-slate-50">
                <Breadcrumb />
                <div className="checkout-page___inner section-padding">
                    <h4 className='tracking-wide font-[600] capitalize text-[1.2rem] mb-3'>billing details</h4>
                    <Row>
                        <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                            <div className="billing-form__block">
                                <form onSubmit={handlePlaceHandler}>
                                    <div className="billing-form__username grid lg:grid-cols-2 lg:gap-x-5">
                                        <div className="billing-field">
                                            <label htmlFor="first-name" className='billing-label'>first name :</label>
                                            <input ref={inputRef} type="text" name="first" id="first-name" placeholder='enter your firstname...' className='billing-input' value={formData.first} onChange={handleChange} />
                                            {errors.first && (
                                                <p className='font-[500] mb-1 text-[0.9rem] text-red-700'>{errors.first}</p>
                                            )}
                                        </div>
                                        <div className="billing-field">
                                            <label htmlFor="last-name" className='billing-label'>last name :</label>
                                            <input type="text" name="last" id="last-name" placeholder='enter your lastname...' className='billing-input' value={formData.last} onChange={handleChange} />
                                            {errors.last && (
                                                <p className='font-[500] mb-1 text-[0.9rem] text-red-700'>{errors.last}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="billing-field">
                                        <label htmlFor="company-name" className='billing-label'>company name :</label>
                                        <input type="text" name="company" id="company-name" placeholder='enter your company name...' className='billing-input' value={formData.company} onChange={handleChange} />
                                        {errors.company && (
                                            <p className='font-[500] mb-1 text-[0.9rem] text-red-700'>{errors.company}</p>
                                        )}
                                    </div>
                                    <div className="billing-field">
                                        <label htmlFor="address" className='billing-label'> address :</label>
                                        <textarea name="address" id="address" rows={4} placeholder='enter your address here...' value={formData.address} onChange={handleChange} />
                                        {errors.address && (
                                            <p className='font-[500] mb-1 text-[0.9rem] text-red-700'>{errors.address}</p>
                                        )}
                                    </div>
                                    <div className="billing-field">
                                        <label htmlFor="town-city" className='billing-label'>town/city :</label>
                                        <input type="text" name="town" id="town-city" placeholder='enter your town/city name...' className='billing-input' value={formData.town} onChange={handleChange} />
                                        {errors.town && (
                                            <p className='font-[500] mb-1 text-[0.9rem] text-red-700'>{errors.town}</p>
                                        )}
                                    </div>
                                    <div className="billing-country grid lg:grid-cols-2 lg:gap-x-5">
                                        <div className="billing-field">
                                            <label htmlFor="country" className='billing-label'> country :</label>
                                            <input type="text" name="country" id="country" placeholder='enter your country...' className='billing-input' value={formData.country} onChange={handleChange} />
                                            {errors.country && (
                                                <p className='font-[500] mb-1 text-[0.9rem] text-red-700'>{errors.country}</p>
                                            )}
                                        </div>
                                        <div className="billing-field">
                                            <label htmlFor="postcode" className='billing-label'>postcode/zip :</label>
                                            <input type="text" name="postcode" id="postcode" placeholder='enter your postal code...' className='billing-input' value={formData.postcode} onChange={handleChange} />
                                            {errors.postcode && (
                                                <p className='font-[500] mb-1 text-[0.9rem] text-red-700'>{errors.postcode}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="billing-field">
                                        <label htmlFor="contact" className='billing-label'>contact info :</label>
                                        <input type="tel" name="contact" id="contact" placeholder='enter your contact info...' className='billing-input' value={formData.contact} onChange={handleChange} />
                                        {errors.contact && (
                                            <p className='font-[500] mb-1 text-[0.9rem] text-red-700'>{errors.contact}</p>
                                        )}
                                    </div>
                                    <div className="billing-field">
                                        <label htmlFor="order" className='billing-label'> order notes :</label>
                                        <textarea name="order" id="order" rows={4} placeholder='notes about your order...' value={formData.order} onChange={handleChange} />
                                        {errors.order && (
                                            <p className='font-[500] mb-1 text-[0.9rem] text-red-700'>{errors.order}</p>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                            <div className="user-order__details-block">
                                <h4 className='capitalize tracking-wide font-[600] text-[1.2rem]'>your order :-</h4>
                                <div className="order-meta_block grid grid-cols-1 gap-y-4 lg:gap-y-6">
                                    <div className="order-details__block p-3">
                                        <table className="table table-responsive mb-0">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h4 className='m-0 capitalize tracking-wide text-[1rem]'>subtotal</h4>
                                                    </td>
                                                    <td>
                                                        <span className='flex justify-end tracking-wide font-[500]'>$220</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h4 className='m-0 capitalize tracking-wide text-[1rem]'>shopping fee</h4>
                                                    </td>
                                                    <td>
                                                        <span className='flex justify-end tracking-wide font-[500]'>$50</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h4 className='m-0 capitalize tracking-wide text-[1rem]'>order total</h4>
                                                    </td>
                                                    <td>
                                                        <span className='flex justify-end tracking-wide font-[500]'>$270</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="checkout-button__block mt-3">
                                            <button type="submit" className='border border-[#ccc] shadow-sm shadow-[#ccc] w-full py-2 capitalize rounded-[7px] tracking-wide font-[500] text-[0.9rem] text-[#fff] bg-red-700' onClick={handlePlaceHandler}>proceed to checkout</button>
                                        </div>
                                    </div>
                                    <div className="payment-method__block border border-[#ccc] bg-[#f7f1e1] px-3 py-4">
                                        <h4 className='font-[600] capitalize tracking-wide text-[1.1rem]'>payment method :-</h4>
                                        <div className="payment-group mb-2">
                                            <div className="cod-method flex items-center gap-x-1">
                                                <input type="radio" name="cod" id="cod" />
                                                <label htmlFor="cod" className='tracking-wide capitalize font-[500] text-[0.9rem]'>cash on delivery</label>
                                            </div>
                                            <div className="cod-meta-info mt-1">
                                                <p className='tracking-wide font-[500] leading-[1.4rem] text-[0.9rem]'>Pay with cash remains a simple and reliable choice, transcending the complexities of modern finance.</p>
                                            </div>
                                        </div>
                                        <div className="payment-group mb-3">
                                            <div className="cod-method flex items-center gap-x-1">
                                                <input type="radio" name="bank" id="bank" />
                                                <label htmlFor="cod" className='tracking-wide capitalize font-[500] text-[0.9rem]'>direct bank transfer</label>
                                            </div>
                                        </div>
                                        <div className="payment-group mb-4">
                                            <div className="cod-method flex items-center gap-x-1">
                                                <input type="radio" name="paypal" id="paypal" />
                                                <label htmlFor="cod" className='tracking-wide capitalize font-[500] text-[0.9rem]'>paypal</label>
                                            </div>
                                        </div>
                                        <div className="payment-terms">
                                            <p className='tracking-wide font-[500] leading-[1.4rem] text-[0.9rem]'>We will utilize your personal data to process your order, enhance your experience on our website, and for other purposes outlined in our privacy policy.</p>
                                        </div>
                                        <div className="checkout-button__block mt-4">
                                            <button type="submit" className='border border-[#ccc] shadow-sm shadow-[#ccc] w-full py-2 capitalize rounded-[7px] tracking-wide font-[500] text-[0.9rem] text-[#fff] bg-red-700' onClick={handlePlaceHandler}>place order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            {
                placeTimer > 0 && (
                    <div className="place-order__overlay flex items-center gap-3">
                        <div className="scroller border-[4px] w-[2.2rem] h-[2.2rem] border-t-red-700 rounded-full"></div>
                        <h4 className='capitalize tracking-wide font-montserrat font-[500] text-[1.1rem] m-0 text-red-700'>placing your order : {placeTimer} seconds</h4>
                    </div>
                )
            }
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    )
}

export default Checkout