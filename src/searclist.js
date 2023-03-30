import SearchListItem from "./searchlistitem";

export default function SearchList({ data, searchInput, handleListItemClick }) {
  const list = data
    .filter((obj) => obj.name.toLowerCase().includes(searchInput))
    .map((obj) => {
      return (
        <div>
          <SearchListItem
            name={obj.name}
            searchInput={searchInput.trim().toLowerCase()}
            handleClick={handleListItemClick}
          />
        </div>
      );
    });
  return (
    <div className="searchListContainer">
      <div className="searchList">{list}</div>
    </div>
  );
}
