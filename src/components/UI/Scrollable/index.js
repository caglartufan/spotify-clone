import { useState, useRef } from 'react';

import './style.css';

const Scrollable = props => {
    const {
        className: customClassName,
        children
    } = props;

    const scrollableAreaRef = useRef();
    const verticalScrollbarRef = useRef();
    const verticalScrollbarThumbRef = useRef();
    const [isHidden, setIsHidden] = useState(true);
    const [delayTimeout, setDelayTimeout] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState(0);
    const [lastDraggedDistance, setLastDraggedDistance] = useState(0);

    let className = 'scrollable-content';

    if(customClassName) {
        className = `${className} ${customClassName}`;
    }

    const showScrollbarHandler = () => {
        if(delayTimeout) {
            clearTimeout(delayTimeout);
        }

        const scrollableAreaClientHeight = scrollableAreaRef.current.clientHeight;
        const scrollableAreaScrollHeight = scrollableAreaRef.current.scrollHeight;
        const verticalScrollbarThumbHeight = (scrollableAreaClientHeight / scrollableAreaScrollHeight) * 100;
        verticalScrollbarThumbRef.current.style.height = verticalScrollbarThumbHeight + '%';

        setIsHidden(false);
    }

    const hideScrollbarHandler = () => {
        if(delayTimeout) {
            clearTimeout(delayTimeout);
        }

        const timeoutObject = setTimeout(() => {
            setIsHidden(true);
        }, 1000);

        setDelayTimeout(timeoutObject);
    };

    const scrollHandler = event => {
        const clientHeight = event.target.clientHeight;
        const scrollHeight = event.target.scrollHeight;
        const scrollTop = event.target.scrollTop;
        const scrolledPercentage = scrollTop / scrollHeight;
        const scrolledPercentageInPixels = clientHeight * scrolledPercentage;
        verticalScrollbarThumbRef.current.style.transform = `translateY(${scrolledPercentageInPixels}px)`;
    };

    const scrollbarDragStartHandler = event => {
        // Enable dragging
        setIsDragging(true);

        verticalScrollbarRef.current.setPointerCapture(event.pointerId);

        // Handle drag start
        const clientY = event.clientY;

        console.log(clientY);
        
        setDragStart(clientY);
    };

    const scrollbarDragEndHandler = event => {
        // Disable dragging
        setIsDragging(false);

        verticalScrollbarRef.current.releasePointerCapture(event.pointerId);

        setLastDraggedDistance(0);
    };

    const scrollbarDragHandler = event => {
        const clientY = event.clientY;

        if(!isDragging) {
            return;
        }

        const draggedDistance = clientY - dragStart;
        const currentTransform = verticalScrollbarThumbRef.current.style.transform;
        const scrollableAreaClientHeight = scrollableAreaRef.current.clientHeight;
        const verticalScrollbarThumbClientHeight = verticalScrollbarThumbRef.current.clientHeight;
        const min = 0;
        const max = scrollableAreaClientHeight - verticalScrollbarThumbClientHeight;
        
        let translateY = draggedDistance;

        if(currentTransform) {
            const translateYMatches = currentTransform.match(/translateY\((.*)px\)/);
            console.log(translateYMatches);
            translateY += parseFloat(translateYMatches?.[1]) - lastDraggedDistance;
        }

        if(translateY <= min) {
            translateY = min;
        } else if(translateY >= max) {
            translateY = max;
        }

        // console.log(draggedDistance, translateY);
        // const min = 0;
        // const max = scrollableAreaClientHeight - verticalScrollbarThumbClientHeight;

        // let translateY = clientY - (verticalScrollbarThumbClientHeight / 2);

        // if(translateY <= 0) {
        //     translateY = 0;
        // }
        // if(translateY >= max) {
        //     translateY = max;
        // }

        verticalScrollbarThumbRef.current.style.transform = `translateY(${translateY}px)`;
        setLastDraggedDistance(draggedDistance);

        // console.log(translateY);
    };

    return (
        <div
            className="scrollable"
            onMouseEnter={showScrollbarHandler}
            onMouseLeave={hideScrollbarHandler}
        >
            <div className="scrollable-padding">
                <div
                    className="scrollable-viewport"
                    onScroll={scrollHandler}
                    ref={scrollableAreaRef}
                >
                    <div className={className}>
                        {children}
                    </div>
                </div>
            </div>
            <div
                className={`scrollable-scrollbar scrollable-scrollbar--vertical ${isHidden && 'scrollable-scrollbar--hidden'}`}
                onPointerMove={scrollbarDragHandler}
                onPointerUp={scrollbarDragEndHandler}
                ref={verticalScrollbarRef}
            >
                <div className="scrollable-scrollbar__track">
                    <div
                        className="scrollable-scrollbar__thumb"
                        ref={verticalScrollbarThumbRef}
                        onPointerDown={scrollbarDragStartHandler}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Scrollable;