const Heading = props => {
    const {
        secondary,
        tertiary,
        className: customClassName,
        children,
        ...headingProps
    } = props;

    if(secondary) {
        let className = 'text-3.5xl leading-none font-bold overflow-ellipsis whitespace-nowrap';

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
        return (
            <h3>
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