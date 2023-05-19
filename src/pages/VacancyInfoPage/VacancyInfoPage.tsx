import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchVacancyById } from "../../store/reducers/actionCreator";
import { Loader } from "@mantine/core";
import { TypographyStylesProvider } from "@mantine/core";
import "./style.css";
import VacancyMainInfo from "../common/VacancyMainInfo/VacancyMainInfo";

const VacancyInfoPage = () => {
  const params = useParams<{ id: string }>();
  const vacancyId = params.id;

  const dispatch = useAppDispatch();
  const { vacancy, isError, isLoading } = useAppSelector(
    (state) => state.vacancyInfoReducer
  );

  useEffect(() => {
    dispatch(
      fetchVacancyById({
        vacancyId,
      })
    );
  }, [vacancyId]);

  return (
    <div className="vacancyInfo">
      <div className="vacancyInfo__container">
        {isError ? (
          <h1>{isError}</h1>
        ) : (
          <>
            {" "}
            {isLoading ? (
              <Loader />
            ) : (
              <div className="vacancyInfo__info">
                <VacancyMainInfo vacancy={vacancy} />
                <TypographyStylesProvider>
                  <div
                    className="vacancyInfo__about"
                    dangerouslySetInnerHTML={{
                      __html: `${vacancy.vacancyRichText}`,
                    }}
                  />
                </TypographyStylesProvider>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default VacancyInfoPage;
