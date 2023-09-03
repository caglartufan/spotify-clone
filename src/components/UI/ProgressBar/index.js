import { useCallback, useEffect, useRef, useState } from 'react';

const ProgressBar = props => {
    const {
        minValue,
        maxValue,
        value,
        onProgressChange,
        className: customClassName,
        ...progressBarProps
    } = props;
    const progress = value || minValue;
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState(0);
    const progressBarRef = useRef();

    const percentage = progress / maxValue;
    const percentageAsUnit = (percentage * 100) + '%';

    let className = 'w-full h-1 rounded-sm bg-white/30 absolute top-1/2 -translate-y-1/2';

    if(customClassName) {
        className = `${className} ${customClassName}`;
    }

    const bulletDragStartHandler = (event) => {
        // Enable dragging bullet for future mouse movement while clicked on progress bar
        setIsDragging(true);

        progressBarRef.current.setPointerCapture(event.pointerId);

        // Handle progress change for clicked position on progress bar
        const clientX = event.clientX;
        const boundingClientX = progressBarRef.current.getClientRects()[0].x;
        const offsetX = clientX - boundingClientX;
        const clientWidth = progressBarRef.current.clientWidth;
        const clickedValue = Math.round((offsetX / clientWidth) * (maxValue - minValue));

        onProgressChange(clickedValue);
    };

    const bulletDragEndHandler = (event) => {
        // Disable dragging bullet
        setIsDragging(false);

        progressBarRef.current.releasePointerCapture(event.pointerId);
    };

    const bulletDragHandler = ({ clientX }) => {
        if(clientX === 0 || !isDragging) {
            return;
        }

        // Handle valid bullet dragging
        const draggedDistance = clientX - dragStart;
        const progressBarWidth = progressBarRef.current.clientWidth;
        const draggedDistanceRatioToProgressBarWidth = draggedDistance / progressBarWidth;
        const ratioAsProgressValue = draggedDistanceRatioToProgressBarWidth * (maxValue - minValue);
        const updatedProgress = Math.round(progress + ratioAsProgressValue);

        let newValue = updatedProgress;

        if(updatedProgress < minValue) {
            newValue = minValue;
        } else if(updatedProgress > maxValue) {
            newValue = maxValue;
        }

        onProgressChange(newValue);
    };

    useEffect(() => {
        const progressBarClientX = progressBarRef.current.getClientRects()[0].x;
        const progressBarClientWidth = progressBarRef.current.clientWidth;
        const currentBulletClientX = progressBarClientX + (percentage * progressBarClientWidth);

        setDragStart(currentBulletClientX);
    }, [percentage]);

    return (
        <div
            className="flex-1 h-3 relative"
            onPointerDown={bulletDragStartHandler}
            onPointerUp={bulletDragEndHandler}
            onPointerMove={bulletDragHandler}
            {...progressBarProps}
        >
            <div
                className="group w-full h-full"
            >
                <div
                    className={className}
                    ref={progressBarRef}
                >
                    <div
                        className="block h-full rounded-sm bg-white group-hover:bg-bright-accent"
                        style={{ width: percentageAsUnit }}
                    ></div>
                    <div
                        className="hidden h-3 w-3 bg-white rounded-full absolute top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:block"
                        style={{ left: percentageAsUnit }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;