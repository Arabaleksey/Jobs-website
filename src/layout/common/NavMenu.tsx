import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../constants/Routes";


const NavMenu = () => {
  return (
    <>
      <nav className="header__nav">
        <ul className="header__nav-links">
          <li>
            <Link to={Routes.VACANCIES}>Поиск Вакансий</Link>
          </li>

          <li>
            <Link to={Routes.FAVOURITES}>Избранное</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;
