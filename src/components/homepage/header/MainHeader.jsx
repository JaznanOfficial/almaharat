import { useState } from "react";
import style from "./header.module.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import { BiMenu, BiChevronRight } from "react-icons/bi";

const MainHeader = () => {
    const [fixedNavStatus, setFixedNavStatus] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 170) {
            setFixedNavStatus(true);
        } else {
            setFixedNavStatus(false);
        }
    });
    return (
        <section
            className={`${style.mainHeader} w-full pt-7 ${fixedNavStatus ? "fixed-nav" : ""
                } lg:pt-8 font-Montserrat`}
        >
            <div className="al__container mx-auto">
                <div className={`${style.mainHeaderWrapper} main-haader-wrapper`}>
                    <nav className=" flex items-center justify-between">
                        <div className={`${style.navLeft}`}>
                            <div className={`${style.navLogo}`}>
                                <img className="h-8  lg:h-8 xl:h-12 " src={logo} alt="" />
                            </div>
                        </div>
                        <div className={`${style.navMiddle} hidden lg:block`}>
                            <ul className="nav-menu flex items-center ">
                                <li>
                                    <NavLink
                                        to={""}
                                        className={`nav-link md:text-[16px] xl:text-[18px]`}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className={`${style.dropdown} relative`}>
                                    <NavLink
                                        to={"/courses"}
                                        className={`nav-link md:text-[16px] xl:text-[18px]`}
                                    >
                                        All Course
                                    </NavLink>

                                    <ul className={`${style.dropdownMenu} absolute bg-white py-[10px] border-t-[2px] border-dark top-full w-[225px] left-0`}>
                                        <li className="">
                                            <Link to={"/courses"} className="px-[20px] text-[16px] py-[7px] capitalize">Courses</Link>
                                        </li>
                                        <li className="">
                                            <Link to={"/courses"} className="px-[20px] text-[16px] py-[7px] capitalize">Course Details</Link>
                                        </li>

                                    </ul>
                                </li>
                                <li className={`${style.dropdown} relative`}>
                                    <NavLink
                                        to={"/pages"}
                                        className={`nav-link md:text-[16px] xl:text-[18px]`}
                                    >
                                        Pages
                                    </NavLink>

                                    <ul className={`${style.dropdownMenu} absolute bg-white py-[10px] border-t-[2px] border-dark top-full w-[225px] left-0`}>
                                        <li className="">
                                            <Link to={"/about"} className="px-[20px] text-[16px] py-[7px] capitalize">About</Link>
                                        </li>

                                        <li className="">
                                            <Link to={"/register"} className="px-[20px] text-[16px] py-[7px] capitalize">Register</Link>
                                        </li>
                                        <li className="">
                                            <Link to={"/login"} className="px-[20px] text-[16px] py-[7px] capitalize">Login</Link>
                                        </li>
                                        <li className="">
                                            <Link to={"/student"} className="px-[20px] text-[16px] py-[7px] capitalize">Student</Link>
                                        </li>
                                        <li className="">
                                            <Link to={"/reviews"} className="px-[20px] text-[16px] py-[7px] capitalize">Reviews</Link>
                                        </li>
                                        <li className="">
                                            <Link to={"/messages"} className="px-[20px] text-[16px] py-[7px] capitalize">Messages</Link>
                                        </li>
                                        <li className="">
                                            <Link to={"/faq"} className="px-[20px] text-[16px] py-[7px] capitalize">FAq</Link>
                                        </li>
                                        <li className="">
                                            <Link to={"/dashboard"} className="px-[20px] text-[16px] py-[7px] capitalize">Dashboard</Link>
                                        </li>


                                    </ul>
                                </li>
                                <li className={`${style.dropdown} relative`}>
                                    <NavLink
                                        to={"/blog"}
                                        className={`nav-link md:text-[16px] xl:text-[18px]`}
                                    >
                                        Blog
                                    </NavLink>

                                    <ul className={`${style.dropdownMenu} absolute bg-white py-[10px]  border-t-[2px] border-dark top-full w-[225px] left-0`}>
                                        <div className={`${style.dropdownSub} relative`}>
                                            <li className={` flex items-center w-full justify-between  group`}>
                                                <Link to={"/courses"} className="px-[20px] text-[16px] py-[7px] capitalize">Blog</Link>
                                                <BiChevronRight className="text-[24px] font-bold mr-[10px] group-hover:text-mintGreen text-dark" />


                                            </li>

                                            <ul className={`${style.subDropdownMenu} absolute bg-white py-[10px] border-t-[2px] border-dark left-full w-[225px] -top-[2px]`}>
                                                <li className="">
                                                    <Link to={"/courses"} className="px-[20px] text-[16px] py-[7px] capitalize">Blog 1</Link>
                                                </li>
                                                <li className="">
                                                    <Link to={"/courses"} className="px-[20px] text-[16px] py-[7px] capitalize">Blog 2</Link>
                                                </li>

                                            </ul>


                                        </div>
                                        <div className={`${style.dropdownSub}  relative`}>
                                            <li className={` flex items-center w-full justify-between  group`}>
                                                <Link to={"/courses"} className="px-[20px] text-[16px] py-[7px] capitalize">Blog Details</Link>
                                                <BiChevronRight className="text-[24px] font-bold mr-[10px] group-hover:text-mintGreen text-dark" />


                                            </li>

                                            <ul className={`${style.subDropdownMenu} absolute bg-white py-[10px] border-t-[2px] border-dark left-full w-[225px] -top-[2px]`}>
                                                <li className="">
                                                    <Link to={"/courses"} className="px-[20px] text-[16px] py-[7px] capitalize">Blog details 1</Link>
                                                </li>
                                                <li className="">
                                                    <Link to={"/courses"} className="px-[20px] text-[16px] py-[7px] capitalize">Blog details 2</Link>
                                                </li>

                                            </ul>


                                        </div>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/contact"}
                                        className={`nav-link md:text-[16px] xl:text-[18px]`}
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className={`${style.navRight} flex items-center`}>
                            <NavLink
                                to={"/signin"}
                                className={`${style.navRightLink} hidden lg:block md:text-[16px] xl:text-[18px]`}
                            >
                                Sign In
                            </NavLink>
                            <NavLink
                                to={"/signup"}
                                className={`${style.navRightButton} hidden ml-3 lg:block md:text-[16px] xl:text-[18px]`}
                            >
                                Sign Up
                            </NavLink>
                            <button className="text-dark lg:hidden text-[28px]">
                                <BiMenu />
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default MainHeader;
