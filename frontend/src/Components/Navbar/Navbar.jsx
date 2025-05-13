import React, { useContext, useState } from 'react'
import logo from '../Assets/logo1.png'
import cart_icon from '../Assets/cart_icon.png'
import { LuMenu } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "motion/react"
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Login } from '../../Pages/Login';
import { ShopContext } from '../../Contexts/ShopContext';

export const Navbar = () => {
    const menuItems = [
        { name: "Shop", path: "/" },
        { name: "Men", path: "/men" },
        { name: "Women", path: "/women" },
        { name: "Kids", path: "/kid" },
    ]

    const [isOpen, setIsOpen] = useState(false);
    const [menu, setMenu] = useState("Shop");
    const [loginbarOpen, setLoginbarOpen] = useState(false);
    const { cartItems } = useContext(ShopContext);

    const totalItems = Object.values(cartItems).reduce((acc, quantity) => acc + quantity, 0);


    return (
        <>
            <nav className="bg-white p-4 shadow-md">
                <div className='flex justify-between items-center h-full'>
                    {/* Left side: Logo and Title */}
                    <div className='md:hidden'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {!isOpen ? <LuMenu size={28} /> : <IoCloseCircleOutline size={28} />
                            }
                        </button>
                    </div>
                    <div className='flex items-center space-x-6'>
                        <img src={logo} alt="Logo" className='h-10' />
                        <h1 className='text-2xl font-bold'>WearNest</h1>
                    </div>
                    {/* Centered Navigation Links */}
                    <div className='hidden md:flex space-x-6 justify-center flex-1'>
                        {menuItems.map((item) => (
                            <Link key={item.name} to={item.path} onClick={() => {
                                setMenu(item.name)
                            }}>

                                {/* key={item.name}
                                    href={item.path}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setMenu(item.name);
                                    }}
                                    className={`text-black cursor-pointer ${menu === item.name ? 'font-bold' : 'font-semibold'
                                        }`}
                                > */}
                                <h1 className={` transition-all duration-300 ${menu === item.name ? '-translate-y-1 text-radios' : 'translate-y-0 text-gray-600'
                                    }`}>{item.name} </h1>
                                {menu === item.name && (
                                    <motion.hr
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        className={`h-0.5 border-0 bg-red-600 transition-all duration-300 ${menu === item.name ? '-translate-y-2' : 'translate-y-0'
                                            }`}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Right side: Login Button and Cart Icon */}
                    <div className='flex space-x-6 items-center mr:0 md:mr-10'>
                        <Button
                            variant="outlined"
                            href="#outlined-buttons"
                            sx={{
                                borderColor: "black",
                                color: "black",
                                ":hover": { borderColor: "black", backgroundColor: "#f5f5f5" }
                            }}
                            onClick={() => setLoginbarOpen(true)}
                        >
                            Login
                        </Button>
                        <div className='relative'>
                            <Link to="/cart">
                                <img src={cart_icon} alt="Cart" className='h-6 w-auto' />
                                <div className='flex absolute -mt-7 ml-4 bg-red-500 rounded-full w-4 text-xs justify-center items-center'>{totalItems}</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={`fixed md:hidden top-0 left-0 w-[70%] h-full max-w-xs bg-black z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                }`}>
                <div className=' flex justify-between px-4 py-4'>
                    <IoCloseCircleOutline size={28} onClick={() => setIsOpen(!isOpen)} className='bg-white rounded-lg' />
                </div>
                <div className='flex flex-col gap-6 justify-center items-center'>
                    {menuItems.map((item) => (
                        <Link key={item.name} to={item.path} onClick={() => {
                            setMenu(item.name)
                        }}>
                            <h1 className={` transition-all duration-300 text-gray-200 ${menu === item.name ? '-translate-y-1 text-radios' : 'translate-y-0 '
                                }`}>{item.name} </h1>
                            {menu === item.name && (
                                <motion.hr
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    className={`h-0.5 border-0  bg-red-600 transition-all duration-300 ${menu === item.name ? '-translate-y-2' : 'translate-y-0'
                                        }`}
                                />
                            )}
                        </Link>
                    ))}
                </div>
            </div>
            <Login isOpen={loginbarOpen} onClose={() => setLoginbarOpen(false)} />
        </>
    );
}
