import Head from "next/head";
import { FunctionComponent } from "react";
import styles from "./SearchBar.module.css";

const SearchBar: FunctionComponent = () => {
  return (
    <div className={styles.bank_search}>
      <input className={styles.search_input} placeholder="Search" type="text" />
    </div>
  );
};

export default SearchBar;
