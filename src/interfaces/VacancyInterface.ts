export interface IVacancies {
  more: boolean;
  subscription_active: boolean;
  subscription_id: number;
  total: number;
  objects: IVacancy[];
}

export interface ITown {
  title: string;
}
export interface ITypeOfWork {
  title: string;
}

export interface IVacancy {
  id:string;
  profession: string;
  firm_name: string;
  town: ITown[];
  type_of_work: ITypeOfWork[];
  paymant_to?: string;
  paymant_from?: string;
  currency?: string;
  vacancyRichText: string;
}
