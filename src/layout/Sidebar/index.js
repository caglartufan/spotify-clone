import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

import Card from '../../components/UI/Card';
import Link from '../../components/UI/Link';
import Icon from '../../components/UI/Icon';

import YourLibrary from './YourLibrary';

const Sidebar = props => {
    return (
        <div className="h-full flex">
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
                <YourLibrary />
            </nav>
            <div className="sidebar-resizer d-none"></div>
        </div>
    );
};

export default Sidebar;