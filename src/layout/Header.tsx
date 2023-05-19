import React from "react";
import "./style.css";
import logo from "../../public/Jobored.svg";
import "./style.css";
import NavMenu from "./common/NavMenu";
import { useHistory } from "react-router-dom";
import { Routes } from "../constants/Routes";

const Header = () => {
  const history = useHistory();
  return (
    <>
      <div className="header">
        <div className="header__container">
          <div
            onClick={() => history.push(Routes.VACANCIES)}
            className="hedaer__logo"
          >
            <img src={logo} alt="logo" />
            <h1>Jobored</h1>
          </div>
          <NavMenu></NavMenu>
        </div>
      </div>
    </>
  );
};

export default Header;
