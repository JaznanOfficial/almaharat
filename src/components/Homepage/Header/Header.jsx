import style from "./header.module.scss";
import HeaderTop from './HeaderTop';
import MainHeader from './MainHeader';
const Header = () => {
  return (
    <header id="header" className={`${style.headerSection}  top-0 left-0 w-full`} >
      <HeaderTop />
      <MainHeader />
    </header>
  )
}

export default Header