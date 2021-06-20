import React from 'react';

import styles from './ContactList.module.css';

const Contactlist = ({contactList, onDelete}) => {
    return (
     <ul className={styles.list}>
      {contactList.map(({ id, name, number }) => {
        return (
          <li className={styles.item} key={id}>
            {name}: {number}
            <button
              className={styles.btnDelete}
              type="button"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
)
}

export default Contactlist;