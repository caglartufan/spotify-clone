import { ReactComponent as AngleLeftIcon } from '../../assets/icons/angle-left.svg';
import { ReactComponent as AngleRightIcon } from '../../assets/icons/angle-right.svg';
import { ReactComponent as InstallIcon } from '../../assets/icons/install.svg';

import profilePicture from '../../assets/images/profile-picture.jfif';

import Card from '../../components/UI/Card';
import Scrollable from '../../components/UI/Scrollable';
import Button from '../../components/UI/Button';
import Icon from '../../components/UI/Icon';
import Link from '../../components/UI/Link';

const Main = props => {
    return (
        <Card className="flex flex-col overflow-hidden">
            <div className="flex-1 min-h-0">
                <Scrollable>
                    <div className="h-[332px] w-full absolute top-0 left-0 bg-gradient-to-b from-black/60 to-card transition-colors duration-1000" style={{ backgroundColor: 'rgb(224, 168, 40)' }}></div>
                    <header className="flex justify-between h-16 px-6 py-4 sticky top-0">
                        <div className="absolute"></div>
                        <div className="flex gap-x-2 disabled:opacity-60">
                            <Button className="!bg-black/70" rounded disabled>
                                <Icon component={AngleLeftIcon} />
                            </Button>
                            <Button className="!bg-black/70" rounded disabled>
                                <Icon component={AngleRightIcon} />
                            </Button>
                        </div>
                        <div className="flex gap-x-2">
                            <Link className="flex items-center gap-x-[5px] h-8 text-white px-4 py-1 bg-black/[.54] rounded-full cursor-pointer transition-none hover:scale-[1.04] active:bg-black/[.72] active:scale-100">
                                <Icon component={InstallIcon} />
                                <span className="text-sm font-bold leading-[22.4px]">
                                    Install App
                                </span>
                            </Link>
                            <Button className="p-1 bg-black/[.54] rounded-full cursor-pointer transition-none hover:scale-[1.04] active:bg-black/[.72] active:scale-100 active:opacity-70">
                                <img src={profilePicture} alt="n3pix" className="w-6 h-6 rounded-full" />
                            </Button>
                        </div>
                    </header>
                    <div className="relative z-10">
                        {Array.from(new Array(100)).map((e, i) => <p className="z-[1]">MAIN {i}</p>)}
                    </div>
                </Scrollable>
            </div>
        </Card>
    );
};

export default Main;