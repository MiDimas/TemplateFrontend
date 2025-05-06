import { memo } from 'react';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = memo(() => {
    const counterValue = useCounterValue();
    const { increment, decrement } = useCounterActions();
    const incrementHandler = () => {
        increment();
    };

    const decrementHandler = () => {
        decrement();
    };

    return (
        <div>
            <h3 data-testid="value-title">{counterValue}</h3>
            <button onClick={incrementHandler} data-testid="increment-btn">
                +
            </button>
            <button onClick={decrementHandler} data-testid="decrement-btn">
                -
            </button>
        </div>
    );
});
