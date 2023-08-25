import './style.css';

const Scrollable = props => {
    const {
        className: customClassName,
        children
    } = props;

    let className = 'scrollable-inner bg-card';

    if(customClassName) {
        className = `${className} ${customClassName}`;
    }

    return (
        <div
            className="scrollable"
        >
            <div className={className}>
                {children}
            </div>
        </div>
    );
};

export default Scrollable;