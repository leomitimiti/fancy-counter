import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ set, type, locked }) {
    const handleClick = (event) => {
        set(prev => {
            if (type === 'minus') {
                const newCount = prev - 1;
                return newCount < 0 ? 0 : newCount;
            } else {
                const newCount = prev + 1;
                return newCount > 5 ? 5 : newCount;
            }
        });

        event.currentTarget.blur();
    };

    return (
        <button disabled={locked} onClick={handleClick} className="count-btn">
            {
                type === 'minus'
                    ? <MinusIcon className="count-btn-icon" />
                    : <PlusIcon className="count-btn-icon" />
            }
        </button>
    );
}