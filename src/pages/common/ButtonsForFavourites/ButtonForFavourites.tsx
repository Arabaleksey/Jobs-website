import React from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import {
  addToFavourites,
  deleteChekedVacancy,
} from "../../../store/reducers/favouriteSlice";
import { IconJewishStar, IconJewishStarFilled } from "@tabler/icons-react";
import deleteBtn from "../../../../public/Delete_btn.svg";
import saveBtn from "../../../../public/Save_btn.svg";

const ButtonForFavourites = ({ vacancy }: any) => {
  const dispatch = useAppDispatch();
  const { favouriteVacancies } = useAppSelector(
    (state) => state.vacancyFavouriteReducer
  );

  return (
    <>
      {!favouriteVacancies.find(
        (favouriteVacancy: any) => favouriteVacancy.id === vacancy.id
      ) ? (
        <div
          className="vacanciesList__star"
          onClick={() => dispatch(addToFavourites(vacancy))}
          data-elem={`vacancy-${vacancy.id}-shortlist-button`}
        >
          <img src={saveBtn} alt="Save vacancy" />
        </div>
      ) : (
        <div
          className="vacanciesList__star"
          onClick={() => dispatch(deleteChekedVacancy(vacancy))}
          data-elem={`vacancy-${vacancy.id}-shortlist-button`}
        >
          <img src={deleteBtn} alt="Delete vacancy" />
        </div>
      )}
    </>
  );
};

export default ButtonForFavourites;
