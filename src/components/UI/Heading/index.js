const Heading = props => {
    const {
        secondary,
        tertiary,
        className: customClassName,
        children
    } = props;

    if(secondary) {
        let className = 'text-3.5xl leading-3.5 font-bold overflow-ellipsis whitespace-nowrap';

        if(customClassName) {
            className = `${className} ${customClassName}`;
        }

        return (
            <h2 className={className}>
                {children}
            </h2>
        );
    }

    if(tertiary) {
        let className = 'text-2xl leading-3.5 font-bold overflow-ellipsis whitespace-nowrap';

        if(customClassName) {
            className = `${className} ${customClassName}`;
        }

        return (
            <h3 className={className}>
                {children}
            </h3>
        );
    }

    return (
        <h1>
            {children}
        </h1>
    );
};

export default Heading;