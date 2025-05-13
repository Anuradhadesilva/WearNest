import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
    const navigate = useNavigate();
    const [signData, setSignData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setSignData({ ...signData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (signData.password !== signData.confirmPassword) {
            alert('password do not match');
            return;
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="absolute lg:top-20 lg:left-20 top-20 left-5 text-sm text-gray-600">
                <span
                    onClick={() => navigate('/')}
                    className="cursor-pointer text-black hover:underline"
                >
                    Home
                </span>
                <span className="mx-2"> &gt; </span>
                <span>Create Account</span>
            </div>
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                {/* Breadcrumb */}


                <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={signData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={signData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={signData.password}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={signData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border rounded"
                        />
                    </div>
                    <div className='flex items-start gap-2'>
                        <input type="checkbox" id='terms' required className='mt-1 accent-black' />
                        <label htmlFor="terms" className="text-sm">
                            By registering, you agree to our
                            <a href="/terms" className='underline'> Terms & Conditions</a>
                            <a href="/privacy" className='underline'> Privacy and Cookie Policy</a>
                            , and to join our loyalty programme
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-4 rounded border border-transparent hover:bg-white hover:text-black hover:border-black transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};










