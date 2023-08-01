import styles from "../../centerblock/centerblock.module.scss";

import { useThemeContext } from "../../../context/theme";
import color from "../../../themes.module.css";

import { useSelector } from "react-redux";
import { useState } from "react";

import { ReactComponent as Search } from "../../../assets/img/icon/search.svg";
import { ReactComponent as SearchLight } from "../../../assets/img/icon/light/search-light.svg";

function Suggest({ props }) {
  const { theme } = useThemeContext();
  let getMusicData = useSelector((store) => store.track.trackData.MusicData);

  if (!getMusicData.length) {
    return <></>;
  }
  getMusicData = getMusicData.filter(
    (track) =>
      track.name.toLowerCase().includes(props) ||
      track.author.toLowerCase().includes(props)
  );
  return (
    <div className={styles.suggest}>
      {getMusicData.map((track) => (
        <span
          key={track.id}
          className={`${
            theme === "light" ? color.light__text : color.dark__text
          }`}
        >
          {`${track.author} - ${track.name} `}
        </span>
      ))}
    </div>
  );
}

function SearchInput() {
  const [handleSearch, setSearch] = useState("");
  const { theme } = useThemeContext();

  const searchFunc = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setSearch(inputValue);
    console.log(inputValue);
  };
  return (
    <div
      className={`${styles.centerblock__search} ${styles.search} ${
        theme === "light" ? color.light__border : color.dark__border
      } `}
    >
      {theme === "light" ? (
        <SearchLight className={styles.search__svg} />
      ) : (
        <Search className={styles.search__svg} />
      )}

      <input
        onInput={searchFunc}
        className={`${styles.search__text} ${
          theme === "light" ? color.light__text : color.dark__text
        }`}
        type="search"
        placeholder="Поиск"
        name="search"
      ></input>
      {handleSearch !== "" ? <Suggest props={handleSearch} /> : <></>}
    </div>
  );
}

export default SearchInput;
