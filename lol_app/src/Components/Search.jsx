import React from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <label>
      <input type="search" 
      placeholder="barra de busqueda" 
      value
      />
    </label>
  );
};

export default Search;
