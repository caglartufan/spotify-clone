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

import iHateYouILoveYouImage from '../../assets/images/i-hate-you-i-love-you.jfif';

import Button from '../../components/UI/Button';
import Icon from '../../components/UI/Icon';
import Link from '../../components/UI/Link';

const NowPlaying = props => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayModeHandler = useCallback(() => {
        setIsPlaying(prevState => !prevState);
    }, []);

    return (
        <div className="col-span-2">
            <footer className="flex px-2 pt-2">
                <div className="min-w-[11.25rem] w-[30%]">
                    <div className="flex items-center">
                        <div className="relative group rounded overflow-hidden">
                            <Link href="/playlist/daily-mix-4" block>
                                <img src={iHateYouILoveYouImage} alt="I Hate You I love You" className="h-14 w-14" />
                            </Link>
                            <Button className="flex justify-center items-center absolute top-[5px] right-[5px] !text-white bg-black/70 h-6 w-6 p-0 opacity-0 rounded-full group-hover:opacity-100 hover:bg-black/80 hover:scale-110 transition-none">
                                <Icon component={AngleUpIcon}/>
                            </Button>
                        </div>
                        <div className="flex flex-col mx-2 ps-1.5 pe-3">
                            <Link href="/album/i-hate-you-i-love-you" className="text-sm" underline>
                                I Hate You I Love You
                            </Link>
                            <Link href="/artist/dvrst" className="text-[.6875rem] !text-secondary hover:!text-white" underline>
                                DVRST
                            </Link>
                        </div>
                        <div>
                            <Button className="!text-bright-accent px-2 hover:scale-[1.04] active:!text-neutral-400 active:scale-100 active:opacity-70">
                                <Icon component={HeartFullIcon} />
                            </Button>
                            <Button className="px-2">
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
                        <div>
                            <div>
                                <div>
                                    0:17
                                </div>
                                <div>

                                </div>
                                <div>
                                    2:15
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-w-[11.25rem] w-[30%]">
3
                </div>
            </footer>
        </div>
    );
};

export default NowPlaying;