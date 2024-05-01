import { useEffect, useState } from "react";
import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import ResetButton from "./ResetButton";
import Title from "./Title";
import CountButton from "./CountButton";

const Card = () => {
    const [count, setCount] = useState(0);
    const locked = count === 5 ? true : false;

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === 'Space') {
                const newCount = count + 1;
                if (newCount > 5) {
                    setCount(5);
                    return;
                }
                setCount(newCount);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [count]);

    return (
        <div className={`card ${locked ? 'card--limit' : ''}`}>
            <Title locked={locked} />
            <Count number={count} />
            <ResetButton set={setCount} />
            <ButtonContainer>
                <CountButton type="minus" set={setCount} locked={locked} />
                <CountButton type="plus" set={setCount} locked={locked} />
            </ButtonContainer>
        </div>
    );
};

export default Card;