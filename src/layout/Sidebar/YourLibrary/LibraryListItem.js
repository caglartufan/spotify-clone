import { ReactComponent as PinIcon } from '../../../assets/icons/pin.svg';

import Icon from '../../../components/UI/Icon';

const LibraryListItem = props => {
    const {
        item
    } = props;

    let description = '';

    if(item.category === 'Playlist') {
        if(item.songs) {
            description = `${item.songs} songs`;
        } else {
            description = item.creator;
        }
    }

    if(item.category === 'Album') {
        description = item.artist;
    }

    return (
        <li key={item.title}>
            <div className="flex gap-x-3 gap-y-2 min-h-[56px] rounded-md p-2 cursor-pointer hover:bg-highlight">
                <div className="h-12 w-12 shadow-library-cover rounded-sm overflow-hidden">
                    <img src={item.coverImage} alt={item.title} />
                </div>
                <div className="flex flex-col gap-y-0.5">
                    <p className="leading-[25.6px]">
                        {item.title}
                    </p>
                    <p className="text-secondary text-sm leading-[22.4px]">
                        {item.pinned && <Icon component={PinIcon} width={12} height={12} className="inline-flex me-2 text-bright-accent" />}
                        {item.category} {description && ` • ${description}`}
                    </p>
                </div>
            </div>
        </li>
    );
};

export default LibraryListItem;