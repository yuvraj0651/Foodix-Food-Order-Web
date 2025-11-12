import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Breadcrumb from "../../UI/Breadcrumb/Breadcrumb";

const ThankYou = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <>
            <div className="thank-you-page pt-[3.5rem] lg:pt-[4rem]">
                <Breadcrumb />
                <section className="section-padding flex flex-col justify-center items-center bg-gradient-to-br from-green-50 to-white font-montserrat">
                    <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-lg w-[90%]">
                        {/* Success Icon */}
                        <div className="flex justify-center mb-6">
                            <FaCheckCircle className="text-green-600 text-6xl animate-bounce" />
                        </div>

                        {/* Heading */}
                        <h1 className="text-2xl font-semibold text-gray-800 mb-3">
                            🎉 Thank You for Your Order!
                        </h1>

                        {/* Message */}
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Your order has been successfully placed.
                            We’re processing it and you’ll receive a confirmation email shortly.
                        </p>

                        {/* Order Summary */}
                        <div className="border border-gray-200 rounded-xl p-4 bg-gray-50 mb-6">
                            <p className="text-gray-700 font-medium">
                                <span className="text-gray-500">Order Number:</span> #SUW-{Math.floor(Math.random() * 10000)}
                            </p>
                            <p className="text-gray-700 font-medium mt-1">
                                <span className="text-gray-500">Estimated Delivery:</span> 3–5 Business Days
                            </p>
                        </div>

                        {/* Button */}
                        <button
                            onClick={() => navigate("/")}
                            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300"
                        >
                            Back to Home
                        </button>

                        {/* Auto Redirect Message */}
                        <p className="text-sm text-gray-500 mt-4">
                            You’ll be redirected to the homepage in 5 seconds...
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ThankYou;
