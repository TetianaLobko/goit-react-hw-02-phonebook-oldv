import React from "react";
import shortid from "shortid";
import styles from './Filter.module.css';

const id = shortid.generate();

const Filter = ({value, SearchContact }) => {
  return (
    <label htmlFor={id}>
          <p className={styles.title}>Find contact by name</p>
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={value}
        onChange={SearchContact}
        id={id}
       
      ></input>
    </label>
  );
};

export default Filter;
