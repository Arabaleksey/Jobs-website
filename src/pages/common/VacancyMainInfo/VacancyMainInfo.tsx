import React from "react";
import { useHistory } from "react-router-dom";
import { Routes } from "../../../constants/Routes";
import ButtonForFavourites from "../ButtonsForFavourites/ButtonForFavourites";
import locationImg from "../../../../public/location.svg";
import dot from "../../../../public/dot.svg";

const VacancyMainInfo = ({ vacancy }: any) => {
  const router = useHistory();
  return (
    <>
      <div className="vacanciestList__block" key={vacancy.id}  data-elem={`vacancy-${vacancy.id}`}>
        <h3
          onClick={() => {
            router.push(`${Routes.VACANCY_INFO}/${vacancy.id}`);
          }}
          className="vacanciesList__profession"
        >
          {vacancy.profession}
        </h3>
        <div className="vacanciesList__salary-block">
          {vacancy.payment_to !== 0 && vacancy.payment_from !== 0 && (
            <>
              <p className="vacanciesList__salary vacanciesList__payment_from">
                з/п {vacancy.payment_from} {"-"} {vacancy.payment_to}{" "}
                {vacancy.currency}
              </p>
            </>
          )}
          {vacancy.payment_to === 0 && vacancy.payment_from !== 0 && (
            <>
              <p className="vacanciesList__salary vacanciesList__payment_from">
                з/п от {vacancy.payment_from} {vacancy.currency}
              </p>
            </>
          )}
          {vacancy.payment_to !== 0 && vacancy.payment_from === 0 && (
            <>
              <p className="vacanciesList__salary vacanciesList__payment_to">
                з/п до {vacancy.payment_to} {vacancy.currency}
              </p>
            </>
          )}
          {vacancy.payment_to === 0 && vacancy.payment_from === 0 && (
            <p className="vacanciesList__salary">з/п не указана</p>
          )}
          <img src={dot} alt="dot" />
          <p className="vacanciesList__work">{vacancy?.type_of_work?.title}</p>
        </div>
        <div className="vacanciesList__location">
          <img src={locationImg} alt="location" />
          <p className="vacanciesList__town">{vacancy?.town?.title}</p>
        </div>
        <ButtonForFavourites vacancy={vacancy} />
      </div>
    </>
  );
};

export default VacancyMainInfo;
