import React, { FunctionComponent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCount } from './counterSlice';
import styles from './counter.module.css';


export const Counter: FunctionComponent = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [ amount, setAmount ] =  useState('2');

    return (
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
    );
}

 