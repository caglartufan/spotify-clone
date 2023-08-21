const Card = props => {
    const {
        className: customClassName,
        children,
        ...cardProps
    } = props;

    let className = 'bg-card rounded-lg';

    if(customClassName) {
        className = `${className} ${customClassName}`;
    }

    return (
        <div className={className} {...cardProps}>
            {props.children}
        </div>
    );
};

export default Card;