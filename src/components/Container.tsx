import React from 'react'

interface Props {
    className?: string;
}

const Container: React.FC<React.PropsWithChildren<Props>> = ({ children, className }) => {
    return (
        <div
            className={`
                uniq-px-5 uniq-w-full uniq-max-w-7xl uniq-mx-auto
                ${className ?? ""}
            `}
        >
            {children}
        </div>
    )
}

export default Container
