import React from 'react'
import style from "./header.module.scss";
import HeaderTop from './HeaderTop';
const Header = () => {
  return (
    <section id="header-section" className={`${style.headerSection} absolute top-0 left-0 w-full`} >
      <HeaderTop />
    </section>
  )
}

export default Header