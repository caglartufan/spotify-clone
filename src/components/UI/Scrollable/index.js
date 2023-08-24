import { useCallback, useRef } from 'react';

const Scrollable = props => {
    const {
        className: customClassName,
        children
    } = props;
    const scrollableRef = useRef();

    let className = 'scrollable-inner bg-card';

    if(customClassName) {
        className = `${className} ${customClassName}`;
    }

    const mouseOverHandler = useCallback(() => {
        // const classList = scrollableRef.current.classList;

        // if(classList.contains('scrollable--out')) {
        //     scrollableRef.current.classList.remove('scrollable--out');
        // }

        // scrollableRef.current.classList.add('scrollable--over');
    }, []);

    const mouseOutHandler = useCallback(() => {
        // const classList = scrollableRef.current.classList;

        // if(classList.contains('scrollable--over')) {
        //     scrollableRef.current.classList.remove('scrollable--over');
        // }

        // scrollableRef.current.classList.add('scrollable--out');
    }, []);

    return (
        <div
            className="scrollable"
            onMouseOver={mouseOverHandler}
            onMouseOut={mouseOutHandler}
            ref={scrollableRef}
        >
            <div className={className}>
                {children}
            </div>
        </div>
    );
};

export default Scrollable;