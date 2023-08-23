const Button = props => {
    const {
        className: customClassName,
        children,
        hightlight,
        ...buttonProps
    } = props;

    let className = 'text-secondary hover:text-white transition ease-linear duration-200';

    if(hightlight) {
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