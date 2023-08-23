const Link = props => {
    const {
        active,
        className: customClassName,
        children,
        ...linkProps
    } = props;

    let className = 'text-secondary hover:text-white transition ease-linear duration-200';

    if(active) {
        className = 'text-white';
    }

    if(customClassName) {
        className = `${className} ${customClassName}`;
    }

    return (
        <a className={className} {...linkProps}>
            {children}
        </a>
    );
};

export default Link;