import axios from "axios";
import { IVacancy } from "../interfaces/VacancyInterface";
import { LOCAL_STORAGE_VALUES } from "../constants/LocalStorageValues";

export default class VacanciesService {
  static async getAllVacancies(
    keyword: string,
    page: any,
    totalVacanciesOnPage: any,
    catalogue: any,
    paymentFrom: any,
    paymentTo: any
  ) {
    const response = await axios.get<{
      more: boolean;
      subscription_active: boolean;
      subscription_id: number;
      total: number;
      objects: IVacancy[];
    }>(
      `https://proxy-server-for-jobs-website.vercel.app/2.0/vacancies/?published=1&keyword=${keyword}&page=${
        page - 1
      }&count=${totalVacanciesOnPage}&catalogues=${catalogue}&payment_from=${paymentFrom}&payment_to=${paymentTo}&no_agreement=${
        paymentFrom !== "" || paymentTo !== "" ? 1 : 0
      }`,
      {
        headers: {
          "x-secret-key": "GEU4nvd3rej*jeh.eqp",
          "X-Api-App-Id":
            "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
          Authorization: `Bearer ${localStorage.getItem(
            LOCAL_STORAGE_VALUES.ACCESS_TOKEN
          )}`,
        },
      }
    );
    return response.data;
  }

  static async getVacancyById(vacancyId: string) {
    const response = await axios.get<any>(
      `https://proxy-server-for-jobs-website.vercel.app/2.0/vacancies/${vacancyId}`,
      {
        headers: {
          "x-secret-key": "GEU4nvd3rej*jeh.eqp",
          "X-Api-App-Id":
            "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
        },
      }
    );
    if (vacancyId) {
      return response.data;
    }
  }
}
