import { useSelector } from "react-redux";
import Counter from './style';

const FcCounter = () => {
    const counterState = useSelector(state => state.counterReducer.count);

    return (
        <Counter color='#8cd6bd'>
            {counterState}
        </Counter>
    );
};

export default FcCounter;
