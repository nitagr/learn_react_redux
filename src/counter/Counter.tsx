import React, { FunctionComponent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCount, incrementByAmount, addAsync } from './counterSlice';
import styles from './counter.module.css';


export const Counter: FunctionComponent = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [ amount, setAmount ] =  useState('2');

    return (
        <div>
            <div className={styles.row}>
                <button
                className={styles.button}
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
                >
                +
                </button>

                <span className={styles.value}>{count}</span>

                <button
                className={styles.button}
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
                >
                -
                </button>
            </div>
         
         
            <div>
              <input type="text" value = {amount}
               className={styles.textbox}
               aria-label="Set increment amount"
               onChange = {(e) => setAmount(e.target.value)}/>

               <button
                className={styles.button}
                onClick = {() => dispatch(incrementByAmount(Number(amount)))}
               >
                Add amount
               </button>
               {' '}
               <button
                className={styles.button}
                onClick = {() => dispatch(addAsync(Number(amount)))}
               >
                Add Async
               </button>
            </div>
            <h4> Here Add amount is mocked as async</h4>
      </div>
    );
}

 