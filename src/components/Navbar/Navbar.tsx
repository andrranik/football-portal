import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IMenuItem } from "../../interfaces/models/ui-models/IMenuItem";
import "./Navbar.css";

export interface INavbarProps {
  menuItems: IMenuItem[];
}

const Navbar: React.FC<INavbarProps> = (props) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <header>
        <h1 className="navbar-logo">
            <Link to="/">
            Footballer
            </Link>
        </h1>
        <nav className="nav-links">
            <ul>
            {
                props.menuItems.map((item: IMenuItem, index: number) => {
                    return(
                        <li key={index}>
                        <a className={item.className + ' navbar-highliting'} href={item.url}>
                            {item.title}
                        </a>
                    </li>
                    )
                })
            }
            </ul>
        </nav>
        <div className="menu-icon" >
                <i className='fas fa-user-circle'></i>
                <i className={click ? "fas fa-times" : "fas fa-bars"} onClick={handleClick}/>
        </div>
    </header>
  );
};

export default Navbar;
