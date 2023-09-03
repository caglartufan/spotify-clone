import { ReactComponent as PlayThinIcon } from '../../../assets/icons/play-thin.svg';
import { ReactComponent as PauseThinIcon } from '../../../assets/icons/pause-thin.svg';

import Icon from '../../UI/Icon';

const PlayListItem = props => {
    const {
        item,
        onMouseEnter,
        onMouseLeave
    } = props;

    const actionIcon = item.isPlaying
        ? PauseThinIcon
        : PlayThinIcon;

    let actionButtonClassName = 'p-3 !text-black bg-bright-accent rounded-full shadow-action-button transition-opacity duration-300 hover:bg-bright-accent hover:scale-[1.04] active:scale-100 active:bg-bright-accent-pressed';

    if(!item.isPlaying) {
        actionButtonClassName = `${actionButtonClassName} opacity-0 group-hover:opacity-100`;
    }

    return (
        <div
            className="group flex h-20 bg-white/10 rounded relative overflow-hidden transition-colors duration-300 cursor-pointer hover:bg-white/20"
            onMouseEnter={onMouseEnter.bind(null, item.themeColor)}
            onMouseLeave={onMouseLeave}
        >
            <div>
                <img src={item.coverImage} alt={item.title} className="h-20 w-20" />
            </div>
            <div className="flex-1 flex justify-between items-center px-4">
                <a href={`/${item.type.toLowerCase()}/${item.title}`} className="font-bold overflow-ellipsis overflow-hidden pointer-events-none">
                    {item.title}
                </a>
                <button className={actionButtonClassName}>
                    <Icon component={actionIcon} className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default PlayListItem;