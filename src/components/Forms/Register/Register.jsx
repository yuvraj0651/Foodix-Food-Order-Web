import  { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Breadcrumb from '../../UI/Breadcrumb/Breadcrumb';

const Register = () => {

    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        pass: "",
        Cpass: "",
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const [count , setCount] = useState(5);

    useEffect(() => {

        if(!success) return;
        if(count <= 0) return;

        const timer = setInterval(() => {
            setCount((prev) => prev - 1 );
        },1000);

        return () => clearInterval(timer);
    },[count , success])

    const inputRef = useRef(null);
    console.log(inputRef);

    useEffect(() => {
        inputRef.current.focus();
    },[])

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    }

    const validate = () => {
        const newErrors = {};
        if (!formData.fname.trim()) {
            newErrors.fname = "First name is required";
        } else if (formData.fname.length < 3) {
            newErrors.fname = "First name must be at least 3 characters";
            toast.error("First name must be at least 3 characters");
        }

        if (!formData.lname.trim()) {
            newErrors.lname = "Last name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!formData.pass.trim()) {
            newErrors.pass = "Password is required";
        } else if (formData.pass.length < 6) {
            newErrors.pass = "Password must be at least 6 characters";
        }

        if (!formData.Cpass.trim()) {
            newErrors.Cpass = "Confirm password is required";
        } else if (formData.pass !== formData.Cpass) {
            newErrors.Cpass = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            const res = await fetch("http://localhost:5002/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            if (res.ok) {
                toast.success("🎉 Registration Successful!");
                setSuccess(true);
                setFormData({
                    fname: "",
                    lname: "",
                    email: "",
                    pass: "",
                    Cpass: "",
                });
                setErrors({});
                setTimeout(() => {
                    navigate("/login");
                }, 5000);
            } else {
                toast.error("❌ Failed to register user!");
            }
        } catch (err) {
            console.log("error", err);
            toast.error("⚠️ Server not reachable. Is JSON server running?");
        }
    }

    return (
        <>
            <div className="register-page pt-[3.5rem] lg:pt-[4rem] font-montserrat">
                <Breadcrumb />
                <div className="register-page__inner section-padding">
                    <div className="register-page__headingText text-center">
                        <h4 className="heading uppercase tracking-wide font-[500] text-[1.4rem] dark:text-[#fff]">register now</h4>
                    </div>
                    <div className="register-page__form">
                        <form onSubmit={handleSubmit}>
                            <div className="register_form-group">
                                <label htmlFor="fname" className='input-label'>firstname:</label>
                                <input
                                    type="text"
                                    id='fname'
                                    className='input-box'
                                    name='fname'
                                    placeholder='enter your firstname...'
                                    value={formData.fname}
                                    onChange={handleChange}
                                    ref={inputRef}
                                />
                                {errors.fname && (<p className='font-[500] text-red-700 tracking-wide text-[0.8rem] pt-1'>{errors.fname}</p>)}
                            </div>
                            <div className="register_form-group">
                                <label htmlFor="lname" className='input-label'>lastname:</label>
                                <input
                                    type="text"
                                    id='lname'
                                    className='input-box'
                                    name='lname'
                                    placeholder='enter your lastname...'
                                    value={formData.lname}
                                    onChange={handleChange}
                                />
                                {errors.lname && (<p className='font-[500] text-red-700 tracking-wide text-[0.8rem] pt-1'>{errors.lname}</p>)}
                            </div>
                            <div className="register_form-group">
                                <label htmlFor="email" className='input-label'>email:</label>
                                <input
                                    type="email"
                                    id='email'
                                    className='input-box'
                                    name='email'
                                    placeholder='enter your email...'
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && (<p className='font-[500] text-red-700 tracking-wide text-[0.8rem] pt-1'>{errors.email}</p>)}
                            </div>
                            <div className="register_form-group">
                                <label htmlFor="pass" className='input-label'>password:</label>
                                <input
                                    type="password"
                                    id='pass'
                                    className='input-box'
                                    name='pass'
                                    placeholder='enter your password...'
                                    value={formData.pass}
                                    onChange={handleChange}
                                />
                                {errors.pass && (<p className='font-[500] text-red-700 tracking-wide text-[0.8rem] pt-1'>{errors.pass}</p>)}
                            </div>
                            <div className="register_form-group">
                                <label htmlFor="Cpass" className='input-label'>confirm password:</label>
                                <input
                                    type="password"
                                    id='Cpass'
                                    className='input-box'
                                    name='Cpass'
                                    placeholder='confirm your password...'
                                    value={formData.Cpass}
                                    onChange={handleChange}
                                />
                                {errors.Cpass && (<p className='font-[500] text-red-700 tracking-wide text-[0.8rem] pt-1'>{errors.Cpass}</p>)}
                            </div>
                            <div className="register-form__submit-block">
                                <button type="submit" className='border border-[#ccc] w-full py-[0.4rem] rounded-[7px] shadow-sm shadow-[#ccc] uppercase tracking-wide font-[500] bg-gradient-to-r from-amber-500 to-amber-700 to-red-700 text-[#fff] mt-3 hover:from-amber-500 hover:to-red-600 transition-all duration-500 dark:border-slate-600 dark:shadow-slate-600'>submit</button>
                            </div>
                            {success && <p className="mt-4 text-center text-green-700">{success}</p>}
                        </form>
                    </div>
                    {success && (
                        <p className='redirect-timer mt-2 capitalize tracking-wide font-[500] text-red-700 text-[0.9rem]'>** login first. redirecting you to login page: {count} seconds</p>
                    )}
                </div >
            </div >
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    )
}

export default Register