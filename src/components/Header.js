import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="#banner" className="logo"><strong>Webreelance</strong></Link>
        <nav>
            {/*
            <ul>
                <li>
                    <a href="#services">サービスと料金</a>
                </li>
                <li>
                    <a href="#about">開発者</a>
                </li>
                <li>
                    <a href="#portfolio">制作実績</a>
                </li>
                <li>
                    <a href="#contact">お問い合わせ</a>
                </li>
            </ul>
            */}
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
