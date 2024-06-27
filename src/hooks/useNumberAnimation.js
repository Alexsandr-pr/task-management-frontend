import { useState, useEffect } from 'react';

const useNumberAnimation = (targetCount, step = 1, duration = 500) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const totalSteps = Math.ceil(targetCount / step);
        const interval = duration / totalSteps;

        let currentCount = 0;
        const animationInterval = setInterval(() => {
            if (currentCount < targetCount) {
                currentCount += step;
                setCount(currentCount > targetCount ? targetCount : currentCount);
            } else {
                clearInterval(animationInterval);
            }
        }, interval);

        return () => clearInterval(animationInterval);
    }, [targetCount, step, duration]);

    return count;
};

export default useNumberAnimation;