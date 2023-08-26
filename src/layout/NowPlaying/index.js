import { ReactComponent as AngleUpIcon } from '../../assets/icons/angle-up.svg';

import iHateYouILoveYouImage from '../../assets/images/i-hate-you-i-love-you.jfif';

import Button from '../../components/UI/Button';
import Icon from '../../components/UI/Icon';
import Link from '../../components/UI/Link';

const NowPlaying = props => {
    return (
        <div className="col-span-2">
            <footer className="flex px-2 pt-2">
                <div className="min-w-[11.25rem] w-[30%]">
                    <div className="flex">
                        <div className="relative group rounded overflow-hidden">
                            <Link href="/playlist/daily-mix-4" block>
                                <img src={iHateYouILoveYouImage} alt="I Hate You I love You" className="h-14 w-14" />
                            </Link>
                            <Button className="flex justify-center items-center bg-black/70 h-6 w-6 absolute top-[5px] right-[5px] p-0 opacity-0 group-hover:opacity-100 hover:bg-black/80 hover:scale-110 transition-none" rounded>
                                <Icon component={AngleUpIcon}/>
                            </Button>
                        </div>
                        <div>
                            <Link href="/album/i-hate-you-i-love-you" className="text-sm" underline>
                                I Hate You I Love You
                            </Link>
                            <Link href="/artist/dvrst" underline>
                                DVRST
                            </Link>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div className="max-w-[45rem] w-[40%]">
2
                </div>
                <div className="min-w-[11.25rem] w-[30%]">
3
                </div>
            </footer>
        </div>
    );
};

export default NowPlaying;