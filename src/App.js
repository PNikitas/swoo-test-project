import { useDispatch, Provider } from 'react-redux';
import { FcCounterWrapper, FcButton, FcCounter } from './components';
import { store, increaseValue, decreaseValue } from './store';

const App = () => {
    const dispatch = useDispatch();

    return (
        <FcCounterWrapper>
            <FcButton title='-1' onClick={() => dispatch(decreaseValue())} />
            <FcCounter />
            <FcButton title='+1' onClick={() => dispatch(increaseValue())} />
        </FcCounterWrapper>
    );
};

const WrappedApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default WrappedApp;
