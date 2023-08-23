const Icon = props => {
    const {
        className: customClassName,
        component: Component,
        ...iconProps
    } = props;

    let className = 'block fill-current';

    if(customClassName) {
        className = `${className} ${customClassName}`;
    }

    return <Component className={className} {...iconProps} />;
};

export default Icon;