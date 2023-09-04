import { ReactComponent as PlayThinIcon } from '../../../assets/icons/play-thin.svg';
import { ReactComponent as PauseThinIcon } from '../../../assets/icons/pause-thin.svg';

import Icon from '../../UI/Icon';

const PlayListItem = props => {
    const {
        item,
        onMouseEnter,
        onMouseLeave,
        vertical
    } = props;

    let className = 'group flex rounded relative overflow-hidden transition-colors duration-300 cursor-pointer';

    if(vertical) {
        className = `${className} flex-col gap-y-4 p-4 bg-[#181818] hover:bg-[#282828]`;
    } else {
        className = `${className} h-20 bg-white/10 hover:bg-white/20`;
    }

    const classNameCoverImageContainer = vertical
        ? 'rounded overflow-hidden relative'
        : 'shadow-playlist-cover';

    const classNameCoverImage = vertical
        ? 'h-full w-full'
        : 'h-20 w-20';

    const classNameMetadataContainer = vertical
        ? 'flex-1 min-h-[62px]'
        : 'flex-1 flex justify-between items-center px-4';

    const actionIcon = item.isPlaying
        ? PauseThinIcon
        : PlayThinIcon;

    let classNameActionButton = 'p-3 !text-black bg-bright-accent rounded-full shadow-action-button transition-opacity-and-transform duration-300 hover:scale-[1.04] active:scale-100 active:bg-bright-accent-pressed';

    if(vertical) {
        classNameActionButton = `${classNameActionButton} absolute right-2 bottom-2`;
    }

    if(!item.isPlaying) {
        classNameActionButton = `${classNameActionButton} opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0`;
    }

    return (
        <div
            className={className}
            onMouseEnter={onMouseEnter?.bind(null, item.themeColor)}
            onMouseLeave={onMouseLeave}
        >
            <div className={classNameCoverImageContainer}>
                <img src={item.coverImage} alt={item.title} className={classNameCoverImage} />
                {vertical && (
                    <button className={classNameActionButton}>
                        <Icon component={actionIcon} className="w-6 h-6" />
                    </button>
                )}
            </div>
            <div className={classNameMetadataContainer}>
                <a
                    href={`/${item.type.toLowerCase()}/${item.title}`}
                    className={`block font-bold leading-[25.6px] overflow-ellipsis overflow-hidden pointer-events-none whitespace-nowrap ${vertical && 'pb-1'}`}
                >
                    {item.title}
                </a>
                {item.description && (
                    <p className="text-sm text-subdued line-clamp-2 mt-1 overflow-hidden text-ellipsis whitespace-normal">
                        {item.description}
                    </p>
                )}
                {!vertical && (
                    <button className={classNameActionButton}>
                        <Icon component={actionIcon} className="w-6 h-6" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default PlayListItem;