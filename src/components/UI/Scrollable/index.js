import { useState, useRef } from 'react';

import './style.css';

let interval;

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
    const [isScrolling, setIsScrolling] = useState(false);
    const [dragStart, setDragStart] = useState(0);

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

    const viewportScrollHandler = event => {
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
        const layerY = event.layerY;
        
        setDragStart(layerY);
    };

    const scrollbarDragEndHandler = event => {
        // Disable dragging
        setIsDragging(false);

        verticalScrollbarRef.current.releasePointerCapture(event.pointerId);
    };

    const scrollbarDragHandler = event => {
        const layerY = event.nativeEvent.layerY;
        const movementY = event.movementY;
        const scrollableAreaClientHeight = scrollableAreaRef.current.clientHeight;
        const scrollableAreaScrollHeight = scrollableAreaRef.current.scrollHeight;
        const verticalScrollbarThumbClientHeight = verticalScrollbarThumbRef.current.clientHeight;
        const verticalScrollbarThumbHeightPercentage = verticalScrollbarThumbRef.current.style.height.match(/(.*)%/)[1] / 100;

        if(!isDragging || layerY < 0 || layerY > scrollableAreaClientHeight) {
            return;
        }

        const scrollTopIncrement = movementY * (verticalScrollbarThumbHeightPercentage / verticalScrollbarThumbClientHeight) * scrollableAreaScrollHeight;
        scrollableAreaRef.current.scrollTop += scrollTopIncrement;
    };

    const scrollToHandler = event => {
        const layerY = event.nativeEvent.layerY;
        const scrollableAreaClientHeight = scrollableAreaRef.current.clientHeight;
        const scrollableAreaScrollHeight = scrollableAreaRef.current.scrollHeight;
        const verticalScrollbarThumbClientHeight = verticalScrollbarThumbRef.current.clientHeight;
        const verticalScrollbarThumbHalfClientHeight = verticalScrollbarThumbClientHeight / 2;
        const verticalScrollbarThumbHeightPercentage = verticalScrollbarThumbRef.current.style.height.match(/(.*)%/)[1] / 100;

        if(event.target === verticalScrollbarThumbRef.current || layerY < 0 || layerY > scrollableAreaClientHeight) {
            return;
        }

        const min = verticalScrollbarThumbHalfClientHeight;
        const max = scrollableAreaClientHeight - (verticalScrollbarThumbHalfClientHeight);

        let translateY = layerY;

        if(translateY < min) {
            translateY = min;
        } else if(translateY > max) {
            translateY = max;
        }

        const newScrollTop = (translateY - verticalScrollbarThumbHalfClientHeight) * (verticalScrollbarThumbHeightPercentage / verticalScrollbarThumbClientHeight) * scrollableAreaScrollHeight;
        scrollableAreaRef.current.scrollTo({
            top: newScrollTop,
            left: 0,
            behavior: 'smooth'
        });

        setIsScrolling(true);
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
                    onScroll={viewportScrollHandler}
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
                <div
                    className="scrollable-scrollbar__track"
                    onPointerDown={scrollToHandler}
                >
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