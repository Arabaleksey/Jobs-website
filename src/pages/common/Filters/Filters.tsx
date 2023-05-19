import React, { useEffect, useState } from "react";
import { Button, NumberInput } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { Select } from "@mantine/core";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { fetchCatalogues } from "../../../store/reducers/actionCreator";
import {
  getCatalog,
  getPaymentFrom,
  getPaymentTo,
} from "../../../store/reducers/vacanciesSlice";

const Filters = ({ setPage }: any) => {
  const dispatch = useAppDispatch();
  const { catalogues, isError, isLoading } = useAppSelector(
    (state) => state.cataloguesReducer
  );

  const options = catalogues.map((catalogue: any) => {
    return { value: catalogue.key, label: `${catalogue.title}` };
  });

  const [catalogueValue, setcatalogueValue] = useState<any>(0);
  const [paymentFromValue, setpaymentFromValue] = useState<number | "">("");
  const [paymentToValue, setpaymentToValue] = useState<number | "">("");

  const handleFetchingVacancies = () => {
    dispatch(getCatalog(catalogueValue));
    {
      typeof paymentFromValue === "number" &&
        dispatch(getPaymentFrom(paymentFromValue));
    }
    {
      typeof paymentToValue === "number" &&
        dispatch(getPaymentTo(paymentToValue));
    }
    setPage(1);
  };

  const clearAllFilter = () => {
    dispatch(getCatalog(0));
    dispatch(getPaymentTo(0));
    dispatch(getPaymentFrom(0));
    setpaymentFromValue("");
    setpaymentToValue("");
    setcatalogueValue(0);
  };

  useEffect(() => {
    dispatch(fetchCatalogues());
  }, []);
  return (
    <div className="filters">
      <div className="filters__header">
        <h2>Фильтры</h2>
        <Button
          onClick={() => clearAllFilter()}
          rightIcon={<IconX />}
          variant="white"
        >
          Сбросить все
        </Button>
      </div>
      <form className="filters__form" onSubmit={(e) => e.preventDefault()}>
        <div>
          <p>Отрасль</p>
          <Select
            searchable
            placeholder="Выберите отрасль"
            value={catalogueValue}
            onChange={setcatalogueValue}
            data={options}
            data-elem="industry-select"
          />
        </div>
        <div className="filters__number-select">
          <p>Оклад</p>
          <NumberInput
            placeholder="От"
            value={paymentFromValue}
            onChange={setpaymentFromValue}
            withAsterisk
            min={0}
            max={100000000000000000000}
            step={500}
            stepHoldDelay={400}
            stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
            data-elem="salary-from-input"
          />
          <NumberInput
            placeholder="До"
            value={paymentToValue}
            onChange={setpaymentToValue}
            withAsterisk
            min={0}
            max={100000000000000000000}
            step={500}
            stepHoldDelay={400}
            stepHoldInterval={(t) => Math.max(1000 / t ** 2, 0.1)}
            data-elem="salary-to-input"
          />
        </div>
        <Button
          type="submit"
          onClick={() => handleFetchingVacancies()}
          data-elem="search-button"
        >
          Применить
        </Button>
      </form>
    </div>
  );
};

export default Filters;