import { ResetIcon } from "@radix-ui/react-icons";

const ResetButton = ({ set }) => {
    const handleClick = (event) => {
        set(0);
        event.currentTarget.blur();
    };
    return (
        <button onClick={handleClick} className="reset-btn"><ResetIcon className="reset-btn-icon" /></button>
    );
};

export default ResetButton;