import React from 'react';
import styles from './Contacts.module.css';

const Contacts = () => (
  <div className={styles.wrap}>
    <a href='mailto:ksuhablondo@gmail.com' className={styles.email_link}>
      ksuhablondo@gmail.com
    </a>
    <a href='tg://resolve?domain=ksu_burn' className={styles.phone_link}>
        +7(913)797-0104
    </a>
    <div className={styles.social_networks}>
      <a href='https://github.com/KsuBurn'><div className={styles.github}></div></a>
      <a href='https://vk.com/id162883352'><div className={styles.vkontakte}></div></a>
      <a href='https://www.instagram.com/ksu_burn/'><div className={styles.instagram}></div></a>
    </div>
  </div>
);
 
export default Contacts;