import Breadcrumb from '../../UI/Breadcrumb/Breadcrumb';
import LoginPageImg from "../../../assets/login/login-forom-img.webp";
import { useContext, useEffect, useRef, useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'; 
import AuthContext from '../../context/Auth/AuthContext';

const Login = () => {

    const [LoginData, setLoginData] = useState({
        fname: "",   
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const userRef = useRef();

    useEffect(() => {
        userRef.current.focus();
    }, []);

    const handleLoginHandler = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...LoginData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const validate = () => {
            const newErrors = {};

            if (!LoginData.fname.trim()) {
                newErrors.fname = "First name is required";
            } else if (LoginData.fname.length < 2) {
                newErrors.fname = "First name must be at least 2 characters";
                toast.error("First name must be at least 2 characters");
            }

            if (!LoginData.email.trim()) {
                newErrors.email = "Email is required";
            } else if (!/\S+@\S+\.\S+/.test(LoginData.email)) {
                newErrors.email = "Invalid email format";
            }

            if (!LoginData.password.trim()) {
                newErrors.password = "Password is required";
            } else if (LoginData.password.length < 6) {
                newErrors.password = "Password must be at least 6 characters";
            }

            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
        };

        const isValid = validate();
        if (!isValid) {
            toast.error("Please fix the form errors before login!");
            return;
        }

        try {
            const emailQuery = encodeURIComponent(LoginData.email);
            const res = await fetch(`http://localhost:5002/users?email=${emailQuery}`);
            const users = await res.json();

            if (users.length === 0) {
                toast.error("No user found with this email!");
                return;
            }

            const user = users[0];

            if (user.fname.toLowerCase() !== LoginData.fname.toLowerCase()) {
                toast.error("First name doesn't match our records!");
                return;
            }

            if (user.pass !== LoginData.password) {
                toast.error("Incorrect password!");
                return;
            }

            login(user);
            toast.success("Login Successful!");
            setTimeout(() => navigate("/"), 2000);

        } catch (err) {
            console.error(err);
            toast.error("Server error — check if JSON server is running!");
        }
    };

    return (
        <>
            <div className="login-page pt-[3.5rem] lg:pt-[4rem] font-montserrat">
                <Breadcrumb />
                <div className="login-page__inner section-padding">
                    <h4 className="login-page__headingText text-center uppercase tracking-wide font-[500] text-[1.2rem] lg:text-[1.4rem]">login now</h4>

                    <div className="login-page__form-block grid md:grid-cols-2 md:items-center md:gap-x-2 lg:gap-x-4 mt-4 border border-[#ccc] shadow-sm shadow-[#ccc] bg-slate-50 py-7 lg:py-0 md:rounded-[10px]">
                        <div className="login-form pl-8 pr-3">
                            <h4 className='uppercase tracking-wide font-[500] mb-6 text-[1.1rem] lg:text-[1.3rem]'>login :-</h4>
                            <form onSubmit={handleLogin}>
                                <div className="login-form-group">
                                    <label htmlFor="fname" className='user-label'>First Name :</label>
                                    <input
                                        ref={userRef}
                                        type="text"
                                        name="fname"
                                        id="fname"
                                        placeholder='Enter your first name...'
                                        className='login-input'
                                        value={LoginData.fname}
                                        onChange={handleLoginHandler}
                                    />
                                    {errors.fname && (<p className='font-[500] text-red-700 tracking-wide text-[0.8rem] pt-1'>{errors.fname}</p>)}
                                </div>

                                <div className="login-form-group">
                                    <label htmlFor="email" className='user-label'>Email :</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder='Enter your email...'
                                        className='login-input'
                                        value={LoginData.email}
                                        onChange={handleLoginHandler}
                                    />
                                    {errors.email && (<p className='font-[500] text-red-700 tracking-wide text-[0.8rem] pt-1'>{errors.email}</p>)}
                                </div>

                                <div className="login-form-group">
                                    <label htmlFor="password" className='user-label'>Password :</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder='Enter your password...'
                                        className='login-input'
                                        value={LoginData.password}
                                        onChange={handleLoginHandler}
                                    />
                                    {errors.password && (<p className='font-[500] text-red-700 tracking-wide text-[0.8rem] pt-1'>{errors.password}</p>)}
                                </div>

                                <div className="login-form__submit-form">
                                    <button
                                        type="submit"
                                        className='border border-[#ccc] shadow-sm shadow-[#ccc] w-full mt-1 md:mt-4 py-2 tracking-wide font-[500] uppercase text-[0.8rem] lg:text-[0.9rem] bg-gradient-to-r from-amber-600 to-red-600 text-[#fff] rounded-[7px]'
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="login-form__picture-block hidden md:block">
                            <img src={LoginPageImg} alt="login-page-picture" className='img-fluid w-full object-cover md:rounded-br-[10px] md:rounded-tr-[10px]' />
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" autoClose={2000} />
        </>
    );
};

export default Login;
