import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import ErrorPage from "../../pages/ErrorPage.tsx/ErrorPage";
import { Routes } from "../../constants/Routes";
import VanaciesPage from "../../pages/VacanciesPage/VacanciesPage";
import ErrorPage from "../../pages/ErrorPage.tsx/ErrorPage";
import VacancyInfoPage from "../../pages/VacancyInfoPage/VacancyInfoPage";
import FavouritesPage from "../../pages/FavouritesPage/FavouritesPage";

const AppRouter = () => {
  return (
    <Switch>
      <Route path={Routes.VACANCIES}>
        <VanaciesPage></VanaciesPage>
      </Route>
      <Route exact path="/">
        <Redirect to={Routes.VACANCIES}></Redirect>
      </Route>
      <Route path={Routes.ERROR}>
        <ErrorPage></ErrorPage>
      </Route>
      <Route path={Routes.VACANCY_INFO_ID}>
        <VacancyInfoPage></VacancyInfoPage>
      </Route>
      <Route path={Routes.FAVOURITES}>
        <FavouritesPage></FavouritesPage>
      </Route>
      <Route path="*"><ErrorPage></ErrorPage></Route>
    </Switch>
  );
};

export default AppRouter;
