import { useCallback, useState } from 'react';

const ProgressBar = props => {
    const {
        initialProgressValue,
        progressVariable,
        currentValue,
        maxValue,
        className: customClassName,
        ...progressBarProps
    } = props;
    const [isClicked, setIsClicked] = useState(false);
    const [progressValue, setProgressValue] = useState(initialProgressValue);

    let className = `w-full h-1 rounded-sm bg-white/30 absolute top-1/2 -translate-y-1/2 before:block before:h-full before:w-[${progressVariable}] before:rounded-sm before:bg-white before:hover:bg-bright-accent after:hidden after:h-3 after:w-3 after:bg-white after:rounded-full after:absolute after:left-[${progressVariable}] after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:hover:block`;

    if(customClassName) {
        className = `${className} ${customClassName}`;
    }

    const changeProgressHandler = useCallback((event) => {
        if(!isClicked) {
            return;
        }

        const offsetX = event.nativeEvent.offsetX;
        console.log(offsetX);
    }, [isClicked]);

    return (
        <div
            className="flex-1 h-3 relative"
            style={{ [progressVariable]: progressValue }}
            {...progressBarProps}
        >
            <div className="w-full h-full">
                <div
                    className={className}
                    onMouseDown={() => setIsClicked(true)}
                    onMouseUp={() => setIsClicked(false)}
                    onMouseMove={changeProgressHandler}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;