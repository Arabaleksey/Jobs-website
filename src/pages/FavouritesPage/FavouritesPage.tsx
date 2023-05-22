import { useAppSelector } from "../../hooks/useAppSelector";
import "./style.css";
import { Routes } from "../../constants/Routes";
import { useHistory } from "react-router-dom";
import VacancyMainInfo from "../common/VacancyMainInfo/VacancyMainInfo";
import emptyPageImg from "../../../public/EmptyPage.png";
import { Button } from "@mantine/core";

const FavouritesPage = () => {
  const history = useHistory();
  const router = useHistory();
  const { favouriteVacancies } = useAppSelector(
    (state) => state.vacancyFavouriteReducer
  );
  return (
    <div className="favouriteVacancies">
      {favouriteVacancies.length === 0 && (
        <div className="favouriteVacancies__empty-page">
          <div className="favouriteVacancies__empty-container">
            <img src={emptyPageImg} alt="Нет избранных вакансий" />
            <h2>Упс, здесь еще ничего нет!</h2>
            <Button
              onClick={() => history.push(Routes.VACANCIES)}
              variant="light"
            >
              Поиск Вакансий
            </Button>
          </div>
        </div>
      )}
      <div className="favouriteVacancies__container">
        {favouriteVacancies.map((vacancy: any) => (
          <div key={vacancy.id} className="favouriteVacancies__wrapper">
            <VacancyMainInfo vacancy={vacancy} />
            <h3
              onClick={() => {
                router.push(`${Routes.VACANCIES}/${vacancy.id}`);
              }}
            ></h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritesPage;
