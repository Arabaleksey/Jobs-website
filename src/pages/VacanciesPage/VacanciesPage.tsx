import { useState } from "react";
import "./style.css";

import Filters from "../common/Filters/Filters";
import VacanciesList from "../common/VacanciesList/VacanciesList";

const VanaciesPage = () => {
  const [page, setPage] = useState(1);
  return (
    <div className="vacancies">
      <div className="vacancies__container">
        <div className="vacancies__column-1">
          <Filters setPage={setPage}></Filters>
        </div>
        <div className="vacancies__column-2">
          <VacanciesList page={page} setPage={setPage}></VacanciesList>
        </div>
      </div>
    </div>
  );
};

export default VanaciesPage;
