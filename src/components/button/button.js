import Button from './style';

const FcButton = ({ title, onClick }) => {
    return (
        <Button onClick={onClick} bg="white" color="black" >
            {title}
        </Button>
    );
};

export default FcButton;
