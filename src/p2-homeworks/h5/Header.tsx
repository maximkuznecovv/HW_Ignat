import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";

function Header() {
    return (
        <div className={s.header}>
            {/*// add NavLink*/}
            <NavLink to={PATH.PRE_JUNIOR} className={s.link} activeClassName={s.active}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link} activeClassName={s.active}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.link} activeClassName={s.active}>junior+</NavLink>
            <div className={s.block}/>
            {/*<div className={s.block}>==</div>*/}
        </div>
    );
}

export default Header;
