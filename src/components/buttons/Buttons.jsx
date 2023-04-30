import PropTypes from "prop-types";
import style from "./button.module.scss";

export const HeroBtn = ({ children }) => {
    return (
        <button
            className={`${style.button} after:bg-dark py-[18px] px-[36px] text-sm  md:py-[16px] md:text-lg md:px-[36px] font-Montserrat`}
        >
            {" "}
            <span>{children}</span>{" "}
        </button>
    );
};

HeroBtn.propTypes = {
    children: PropTypes.node.isRequired,
};
