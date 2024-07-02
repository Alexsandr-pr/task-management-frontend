

import sprite from "/public/sprite.svg"


const Icon = ({ id, size = 24, className = '' }) => {
    return (
        <svg className={`icon ${className}`} width={size} height={size}>
            <use href={sprite + id} />
        </svg>
    );
};

export default Icon;
