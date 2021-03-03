import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../app/store';

interface counterState {
    value: number
}

export const initialState: counterState = {
    value:0
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value+=1
        },
        decrement: state => {
            state.value-=1
        },
        incrementByAmount: (state: counterState, action: PayloadAction< number >) => {
            state.value+= action.payload;
        }
    }

})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;