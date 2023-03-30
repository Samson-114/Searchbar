import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import SearchListItem from "./searchlistitem";
import DisplayCard from "./displaycard";
import SearchList from "./searclist";

function App() {
  const data = [
    {
      name: "Ivan",
      age: "18",
      job: "CEO",
    },
    {
      name: "Raymond",
      age: "28",
      job: "Software Engineer",
    },
    {
      name: "Chris",
      age: "19",
      job: "Driver",
    },
    {
      name: "Bob",
      age: "12",
      job: "Student",
    },
    {
      name: "Ada",
      age: "24",
      job: "Teacher",
    },
    {
      name: "David",
      age: "16",
      job: "Student",
    },
  ];

  const [searchInput, setSearchInput] = useState("");
  const [displayObj, setDisplayObj] = useState({ name: "", age: "", job: "" });
  const [isFocus, setIsFocus] = useState(false);

  const handleListItemClick = (name) => {
    // setDisplayObj(data.filter((obj) => obj.name === name));
    setDisplayObj(data.find((obj) => obj.name === name));
    setIsFocus(false);
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="searchBarContainer">
      <div className="inputField">
        <input
          type="text"
          onChange={handleChange}
          onFocus={() => setIsFocus(true)}
        />
      </div>
      {isFocus && (
        <SearchList
          data={data}
          searchInput={searchInput}
          handleListItemClick={handleListItemClick}
        />
      )}
      <DisplayCard displayObj={displayObj} />
    </div>
  );
}

export default App;
