import { INCREMENT, DECREMENT } from './types';

const increaseValue = () => {
    return {
        type: INCREMENT,
    };
};

const decreaseValue = () => {
    return {
        type: DECREMENT,
    };
};

export { increaseValue, decreaseValue };
