import { useState } from "react";
import style from "./header.module.scss";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import { BiMenu } from "react-icons/bi";
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
            className={`${style.mainHeader} w-full pt-7 ${
                fixedNavStatus ? "fixed-nav" : ""
            } lg:pt-8 font-Montserrat`}
        >
            <div className="al__container mx-auto">
                <div className={`${style.mainHeaderWrapper} main-haader-wrapper`}>
                    <nav className=" flex items-center justify-between">
                        <div className={`${style.navLeft}`}>
                            <div className={`${style.navLogo}`}>
                                <img className="h-8 xl:h-auto" src={logo} alt="" />
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
                                <li>
                                    <NavLink
                                        to={"/courses"}
                                        className={`nav-link md:text-[16px] xl:text-[18px]`}
                                    >
                                        All Course
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/pages"}
                                        className={`nav-link md:text-[16px] xl:text-[18px]`}
                                    >
                                        Pages
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/blog"}
                                        className={`nav-link md:text-[16px] xl:text-[18px]`}
                                    >
                                        Blog
                                    </NavLink>
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
                                className={`${style.navRightButton} hidden lg:block md:text-[16px] xl:text-[18px]`}
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
