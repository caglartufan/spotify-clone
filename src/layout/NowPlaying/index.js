import { useCallback, useState } from 'react';

import { ReactComponent as AngleUpIcon } from '../../assets/icons/angle-up.svg';
import { ReactComponent as HeartEmptyIcon } from '../../assets/icons/heart-empty.svg';
import { ReactComponent as HeartFullIcon } from '../../assets/icons/heart-full.svg';
import { ReactComponent as PictureInPictureIcon } from '../../assets/icons/picture-in-picture.svg';
import { ReactComponent as ShuffleIcon } from '../../assets/icons/shuffle.svg';
import { ReactComponent as PreviousIcon } from '../../assets/icons/previous.svg';
import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg';
import { ReactComponent as PauseIcon } from '../../assets/icons/pause.svg';
import { ReactComponent as NextIcon } from '../../assets/icons/next.svg';
import { ReactComponent as RepeatIcon } from '../../assets/icons/repeat.svg';
import { ReactComponent as NowPlayingViewIcon } from '../../assets/icons/now-playing-view.svg';
import { ReactComponent as LyricsIcon } from '../../assets/icons/lyrics.svg';
import { ReactComponent as QueueIcon } from '../../assets/icons/queue.svg';
import { ReactComponent as ConnectToDeviceIcon } from '../../assets/icons/connect-to-device.svg';
import { ReactComponent as VolumeOffIcon } from '../../assets/icons/volume-off.svg';
import { ReactComponent as VolumeLowIcon } from '../../assets/icons/volume-low.svg';
import { ReactComponent as VolumeMediumIcon } from '../../assets/icons/volume-medium.svg';
import { ReactComponent as VolumeHighIcon } from '../../assets/icons/volume-high.svg';
import { ReactComponent as FullScreenIcon } from '../../assets/icons/full-screen.svg';

import iHateYouILoveYouImage from '../../assets/images/i-hate-you-i-love-you.jfif';

import Button from '../../components/UI/Button';
import Icon from '../../components/UI/Icon';
import Link from '../../components/UI/Link';
import ProgressBar from '../../components/UI/ProgressBar';
import { formatSeconds } from '../../utils/helpers';

const NowPlaying = props => {
    const [isPlaying, setIsPlaying] = useState(false);

    const minPlaybackValue = 0;
    const maxPlaybackValue = 135;
    const [currentPlaybackValue, setCurrentPlaybackValue] = useState(minPlaybackValue);

    const minVolume = 0;
    const maxVolume = 100;
    const [currentVolume, setCurrentVolume] = useState(maxVolume);

    const togglePlayModeHandler = useCallback(() => {
        setIsPlaying(prevState => !prevState);
    }, []);

    const playbackProgressChangeHandler = useCallback((changedValue) => {
        setCurrentPlaybackValue(changedValue);
    }, []);

    const volumeProgressChangeHandler = useCallback((changedValue) => {
        setCurrentVolume(changedValue);
    }, []);

    let volumeIcon = VolumeHighIcon;

    if(currentVolume < 66) {
        volumeIcon = VolumeMediumIcon;
    }
    
    if(currentVolume < 33) {
        volumeIcon = VolumeLowIcon;
    }
    
    if(currentVolume === 0) {
        volumeIcon = VolumeOffIcon;
    }

    return (
        <div className="col-span-2">
            <footer className="flex px-2 pt-2">
                <div className="min-w-[11.25rem] w-[30%]">
                    <div className="flex items-center">
                        <div className="relative group rounded overflow-hidden">
                            <Link href="/playlist/daily-mix-4" block>
                                <img src={iHateYouILoveYouImage} alt="I Hate You I love You" className="h-14 w-14" />
                            </Link>
                            <Button className="flex justify-center items-center absolute top-[5px] right-[5px] !text-white bg-black/70 h-6 w-6 p-0 opacity-0 rounded-full cursor-default group-hover:opacity-100 hover:bg-black/80 hover:scale-110 transition-none">
                                <Icon component={AngleUpIcon}/>
                            </Button>
                        </div>
                        <div className="flex flex-col mx-2 ps-1.5 pe-3">
                            <Link href="/album/i-hate-you-i-love-you" className="text-sm" underline>
                                I Hate You I Love You
                            </Link>
                            <Link href="/artist/dvrst" className="text-2xs !text-secondary hover:!text-white" underline>
                                DVRST
                            </Link>
                        </div>
                        <div>
                            <Button className="!text-bright-accent px-2 hover:scale-[1.04] active:!text-neutral-400 active:scale-100 active:opacity-70">
                                <Icon component={HeartFullIcon} />
                            </Button>
                            <Button className="px-2 cursor-default">
                                <Icon component={PictureInPictureIcon} />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="max-w-[45rem] w-[40%]">
                    <div className="flex flex-col gap-y-2">
                        <div className="flex justify-center gap-x-4">
                            <div className="flex gap-x-2">
                                <Button className="flex justify-center items-center w-8 h-8 cursor-default">
                                    <Icon component={ShuffleIcon} />
                                </Button>
                                <Button className="flex justify-center items-center w-8 h-8 cursor-default">
                                    <Icon component={PreviousIcon} />
                                </Button>
                            </div>
                            <Button
                                className="flex justify-center items-center w-8 h-8 bg-white rounded-full !text-black cursor-default transition-none hover:scale-[1.06] active:scale-[0.99]"
                                onClick={togglePlayModeHandler}
                            >
                                {
                                    isPlaying
                                        ? <Icon component={PauseIcon} />
                                        : <Icon component={PlayIcon} />
                                }
                            </Button>
                            <div className="flex gap-x-2">
                                <Button className="flex justify-center items-center w-8 h-8 cursor-default">
                                    <Icon component={NextIcon} />
                                </Button>
                                <Button className="flex justify-center items-center w-8 h-8 cursor-default">
                                    <Icon component={RepeatIcon} />
                                </Button>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <div className="min-w-[40px] text-2xs text-secondary text-right">
                                {formatSeconds(currentPlaybackValue)}
                            </div>
                            <ProgressBar
                                minValue={minPlaybackValue}
                                maxValue={maxPlaybackValue}
                                initialValue={currentPlaybackValue}
                                onProgressChange={playbackProgressChangeHandler}
                            />
                            <div className="min-w-[40px] text-2xs text-secondary text-left">
                                {formatSeconds(maxPlaybackValue)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end items-center min-w-[11.25rem] w-[30%]">
                    <Button className="text-subdued px-2 active:opacity-70">
                        <Icon component={NowPlayingViewIcon} />
                    </Button>
                    <Button className="text-subdued px-2 active:opacity-70">
                        <Icon component={LyricsIcon} />
                    </Button>
                    <Button className="text-subdued px-2 active:opacity-70">
                        <Icon component={QueueIcon} />
                    </Button>
                    <Button className="text-subdued px-2 active:opacity-70 cursor-default">
                        <Icon component={ConnectToDeviceIcon} />
                    </Button>
                    <div className="flex items-center w-[125px] me-2">
                        <Button className="text-subdued px-2 active:opacity-70">
                            <Icon component={volumeIcon} />
                        </Button>
                        <ProgressBar
                            minValue={minVolume}
                            maxValue={maxVolume}
                            initialValue={currentVolume}
                            onProgressChange={volumeProgressChangeHandler}
                        />
                    </div>
                    <Button className="text-subdued px-2 active:opacity-70 cursor-default">
                        <Icon component={FullScreenIcon} />
                    </Button>
                </div>
            </footer>
        </div>
    );
};

export default NowPlaying;