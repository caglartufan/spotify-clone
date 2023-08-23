const Button = props => {
    const {
        className: customClassName,
        children,
        rounded,
        tinted,
        ...buttonProps
    } = props;

    let className = 'transition ease-linear duration-200';

    if(tinted) {
        className = `text-white text-sm leading-6 px-3 py-1 rounded-4xl bg-tinted hover:bg-tinted-highlight ${className}`;
    } else {
        className = `text-secondary hover:text-white ${className}`;
    }

    if(rounded) {
        className = `${className} rounded-full p-2 hover:bg-highlight`;
    }

    if(customClassName) {
        className = `${className} ${customClassName}`;
    }

    return (
        <button className={className} {...buttonProps}>
            {children}
        </button>
    );
};

export default Button;