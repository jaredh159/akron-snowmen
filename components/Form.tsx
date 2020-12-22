import React from 'react';
import styles from './Form.module.css';

const Form: React.FC = () => {
  return (
    <form className={styles.form}>
      <h3>Get in touch</h3>
      <p>
        three fishers went sailing out into the west out into the west as the sun went
        down and each thought on the woman that loved him the best and the children stood
        watching them out of the time
      </p>

      <div className={styles.inputs}>
        <div className={styles.inputDivs}>
          <label>Name</label>
          <input type="text" />
        </div>

        <div className={styles.inputDivs} id={styles.email}>
          <label>Email</label>
          <input type="email" />
        </div>
      </div>

      <div>
        <label>Message</label>
        <textarea rows={10}></textarea>
      </div>

      <button>Sumbmit</button>
    </form>
  );
};

export default Form;
