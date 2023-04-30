import style from "./header.module.scss"
import { Link } from 'react-router-dom'
import facebook from "../../../assets/icon/facebook.png"
import instagram from "../../../assets/icon/instagram.png"
import skype from "../../../assets/icon/skype.png"
import twitter from "../../../assets/icon/twitter.png"
const HeaderTop = () => {
    return (
        <section className={`${style.headerTop} font-Montserrat hidden lg:block  bg-dark pb-1.5`}>
            <div className="al__container mx-auto  text-white">
                <div className={`${style.headerTopWrapper} flex  items-center justify-between`}>
                    <div className={`${style.headerTopLeft}`}>
                        <p>All course 28% off for <Link to="#">Liberian people’s.</Link></p>
                    </div>
                    <div className={`${style.headerTopMiddle}`}>
                        <div className={`${style.headerTopInfo} flex`}>
                            <p>
                                <i className="fi fi-rr-phone-call"></i>
                                <a href="tel:9702621413">(970) 262-1413</a>
                            </p>
                            <p className='ml-[50px]'>
                                <i className="fi fi-rr-envelope-open"></i>
                                <a href="tel:9702621413">address@gmail.com</a>
                            </p>
                        </div>
                    </div>
                    <div className={`${style.headerTopRight}`}>
                        <div className={`${style.social}`}>
                            <ul className='flex items-center gap-4'>
                                <li>
                                    <a href="#" className='text-teal-50'>
                                        <img src={facebook} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='text-teal-50'>
                                        <img src={instagram} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='text-teal-50'>
                                        <img src={twitter} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='text-teal-50'>
                                        <img src={skype} alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeaderTop