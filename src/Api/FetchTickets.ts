import { createAsyncThunk } from '@reduxjs/toolkit';
import { Iticket, TfetchTicketsError, IparamsFetch } from '../Types/Types';

export const fetchTickets = createAsyncThunk<Iticket[], IparamsFetch, { rejectValue: TfetchTicketsError }>(
    "tickets/fetchTickets",
    async ({ limit, companyP, companyR, companyS, transfers0, transfers1, transfers2, transfers3, sortPrice, sortDuratuon }: IparamsFetch, thunkApi) => { 

        const response = await fetch(`http://localhost:3000/tickets?_limit=${limit}&company=${companyP}&company=${companyR}&company=${companyS}&transfers=${transfers0}&transfers=${transfers1}&transfers=${transfers2}&transfers=${transfers3}&_sort=${sortPrice},${sortDuratuon}&_order=asc`);

        const data: Iticket[] = await response.json();

        if (response.status !== 200) {

            return thunkApi.rejectWithValue({  
                message: "Failed to fetch tickets."
            });
        }

        return data; 
    }
);


