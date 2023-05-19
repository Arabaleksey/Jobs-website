import React, { ReactNode, useEffect, useState } from "react";
import { Button, Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { fetchVacanies } from "../../../store/reducers/actionCreator";
import { useDebounce } from "../../../hooks/useDebounce";
import { Pagination } from "@mantine/core";
import { Loader } from "@mantine/core";
import { useHistory } from "react-router-dom";
import VacancyMainInfo from "../VacancyMainInfo/VacancyMainInfo";

const VacanciesList = ({ page, setPage }: any) => {
  const router = useHistory();
  const totalVacanciesOnPage = 4;
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useAppDispatch();
  const {
    vacancies,
    isError,
    isLoading,
    totalVacancies,
    catalogue,
    paymentFrom,
    paymentTo,
  } = useAppSelector((state) => state.vacanciesReducer);

  const debounceOnChange = useDebounce((e: any) => {
    setSearchValue(e.target.value);
  }, 500);

  const handleFetchingVacancies = () => {
    dispatch(
      fetchVacanies({
        searchValue,
        page,
        totalVacanciesOnPage,
        catalogue,
        paymentFrom,
        paymentTo,
      })
    );
  };

  useEffect(() => {
    handleFetchingVacancies();
  }, [searchValue, page, catalogue, paymentFrom, paymentTo]);

  return (
    <>
      <form
        className="vacanciesList__searchForm"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          onChange={debounceOnChange}
          icon={<IconSearch />}
          placeholder="Введите название вакансии"
          data-elem="search-input"
        />
        <Button
          type="submit"
          data-elem="search-button"
          onClick={() => handleFetchingVacancies()}
        >
          Поиск
        </Button>
      </form>
      {vacancies.length === 0 && !isLoading && <h3>Вакансий не найдено</h3>}
      {isLoading && (
        <div className="vacanciesList__loader">
          <Loader />
        </div>
      )}
      <div className="vacanciesList__wrapper">
        {vacancies.map((vacancy: any) => (
          <VacancyMainInfo key={vacancy.id} vacancy={vacancy} />
        ))}
        <div className="vacancies__pagination">
          {vacancies.length !== 0 && totalVacancies > totalVacanciesOnPage && (
            <Pagination
              value={page}
              onChange={setPage}
              total={
                totalVacancies < 500
                  ? Math.ceil(totalVacancies / totalVacanciesOnPage)
                  : 500 / totalVacanciesOnPage
              }
            />
          )}
        </div>
      </div>
    </>
  );
};

export default VacanciesList;