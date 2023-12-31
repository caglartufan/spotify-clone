import LibraryListItem from "./LibraryListItem";

const LibraryList = props => {
    const {
        items
    } = props;

    return (
        <ul>
            {items.map(
                item => <LibraryListItem item={item} key={item.type + '-' + item.title} />
            )}
        </ul>
    );
};

export default LibraryList;