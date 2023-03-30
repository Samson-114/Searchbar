export default function SearchListItem({ name, searchInput, handleClick }) {
  const start = name.toLowerCase().search(searchInput);

  return (
    <div className="listItemContainer">
      <div onClick={() => handleClick(name)}>
        {name.slice(0, start)}
        <span style={{ color: "red" }}>
          {name.slice(start, start + searchInput.length)}
        </span>
        {name.slice(start + searchInput.length)}
      </div>
    </div>
  );
}
