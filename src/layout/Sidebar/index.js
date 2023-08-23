import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as LibraryIcon } from '../../assets/icons/library.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import { ReactComponent as RightArrowIcon } from '../../assets/icons/right-arrow.svg';

import Card from '../../components/UI/Card';
import Link from '../../components/UI/Link';
import Button from '../../components/UI/Button';
import Icon from '../../components/UI/Icon';

const Sidebar = props => {
    return (
        <div className="flex">
            <nav className="flex-auto flex flex-col gap-y-2">
                <Card>
                    <ul className="py-2 px-3">
                        <li className="py-1 px-3">
                            <Link href="/" className="flex items-center gap-x-5 h-10" active>
                                <Icon component={HomeIcon} />
                                <span className="text-base font-bold">
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li className="py-1 px-3">
                            <Link href="/search" className="flex items-center gap-x-5 h-10">
                                <Icon component={SearchIcon} />
                                <span className="text-base font-bold">
                                    Search
                                </span>
                            </Link>
                        </li>
                    </ul>
                </Card>
                <Card className="flex-auto">
                    <div className="flex flex-col gap-y-4 px-4 py-2 shadow-standart">
                        <div className="flex items-center">
                            <div className="flex-1">
                                <Button className="flex items-center gap-x-3 h-10 py-1 px-2">
                                    <Icon  component={LibraryIcon} />
                                    <span className="text-base font-bold">
                                        Your Library
                                    </span>
                                </Button>
                            </div>
                            <div className="flex gap-x-2">
                                <Button hightlight>
                                    <Icon component={PlusIcon} />
                                </Button>
                                <Button hightlight>
                                    <Icon component={RightArrowIcon} />
                                </Button>
                            </div>
                        </div>
                        <div className="flex gap-x-2">
                            <Button className="text-white text-sm leading-6 font-medium px-3 py-1 rounded-4xl bg-tinted hover:bg-tinted-highlight">
                                Playlists
                            </Button>
                            <Button className="text-white text-sm leading-6 font-medium px-3 py-1 rounded-4xl bg-tinted hover:bg-tinted-highlight">
                                Artists
                            </Button>
                            <Button className="text-white text-sm leading-6 font-medium px-3 py-1 rounded-4xl bg-tinted hover:bg-tinted-highlight">
                                Albums
                            </Button>
                        </div>
                    </div>
                    <div>
                        list
                    </div>
                </Card>
            </nav>
            <div className="sidebar-resizer d-none"></div>
        </div>
    );
};

export default Sidebar;