import { useEffect } from "react";
import { Button, Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { fetchVacanies } from "../../../store/reducers/actionCreator";
// import { useDebounce } from "../../../hooks/useDebounce";
import { Pagination } from "@mantine/core";
import { Loader } from "@mantine/core";
import VacancyMainInfo from "../VacancyMainInfo/VacancyMainInfo";
import { getKeyword } from "../../../store/reducers/vacanciesSlice";

const VacanciesList = ({ page, setPage }: any) => {
  const totalVacanciesOnPage = 4;

  const dispatch = useAppDispatch();
  const {
    vacancies,
    isLoading,
    totalVacancies,
    catalogue,
    paymentFrom,
    paymentTo,
    keyword,
  } = useAppSelector((state) => state.vacanciesReducer);

  // const debounceOnChange = useDebounce((e: any) => {
  //   setSearchValue(e.target.value);
  // }, 500);

  const handleFetchingVacancies = () => {
    dispatch(
      fetchVacanies({
        keyword,
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
  }, [page, catalogue, paymentFrom, paymentTo]);

  return (
    <>
      <form
        className="vacanciesList__searchForm"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          // onChange={debounceOnChange}
          value={keyword}
          onChange={(e) => dispatch(getKeyword(e.target.value))}
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
