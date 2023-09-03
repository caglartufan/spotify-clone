import PlayListItem from "./PlayListItem";

const PlayLists = props => {
    const {
        items,
        onMouseEnterOnAnItem,
        onMouseLeaveFromAnItem
    } = props;

    return (
        <div className="grid grid-rows-2 grid-cols-3 gap-x-6 gap-y-4">
            {items.map(
                item => (
                    <PlayListItem
                        key={item.title}
                        item={item}
                        onMouseEnter={onMouseEnterOnAnItem}
                        onMouseLeave={onMouseLeaveFromAnItem}
                    />
                )
            )}
        </div>
    );
};

export default PlayLists;