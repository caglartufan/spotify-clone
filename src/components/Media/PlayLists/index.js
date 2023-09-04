import PlayListItem from "./PlayListItem";

const PlayLists = props => {
    const {
        items,
        onMouseEnterOnAnItem,
        onMouseLeaveFromAnItem,
        vertical,
    } = props;

    let className = 'grid grid-rows-2 grid-cols-3 gap-x-6 gap-y-4';

    if(vertical) {
        className = 'grid grid-rows-1 grid-cols-5 gap-x-6';
    }

    return (
        <div className={className}>
            {items.map(
                item => (
                    <PlayListItem
                        key={item.title}
                        item={item}
                        onMouseEnter={onMouseEnterOnAnItem}
                        onMouseLeave={onMouseLeaveFromAnItem}
                        vertical={vertical}
                    />
                )
            )}
        </div>
    );
};

export default PlayLists;