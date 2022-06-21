import React, { useContext } from "react";
import { searchContext } from "../../App";
import styles from "./Search.module.scss";

const Search = () => {
  const { searchValue, setSearchValue } = useContext(searchContext);
  return (
    <div className={styles.root}>
      <input
        value={searchValue}
        className={styles.input}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <svg
          onClick={() => setSearchValue("")}
          className={styles.clear}
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
          <path d="M0 0h48v48h-48z" fill="none" />
        </svg>
      )}
    </div>
  );
};
export default Search;
