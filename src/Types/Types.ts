import { ReactNode } from "react";

export type TchildrenProps = {  
    children: ReactNode;
}

export interface Iticket { 
    id: number;
    from: string;
    to: string;
    company: string;
    price: number;
    currency: string;
    startTime: string;
    endTime: string;
    duration: number;
    date?: string;
    transfers: string;
}

export type Tcompany = { 
    company: string;
}

export interface IpropseTickets { 
    id: number;
    from: string;
    to: string;
    price: number;
    company: string;
    currency: string;
    startTime: string;
    endTime: string;
    duration: number;
    transfers: string;

}

export type TfetchTicketsError = {  
    message: string;
  };

  export type TtikcetsState = { 
    listTickets: Iticket[];
    error: string | null;
    status: "loading" | "idle";
    btnCheap: boolean;
    btnFast: boolean;
    btnOptimal: boolean;
    paramsFetch: IparamsFetch;
    displayFilterMenu: boolean;
  };

  export interface IparamsFetch {
    limit: number;
    companyP: string;
    companyR: string;
    companyS: string;
    transfers0: string; 
    transfers1: string;
    transfers2: string;
    transfers3: string;
    sortPrice: string;
    sortDuratuon: string;
  }
