import React from "react";
import Button from "./Button";
import cx from "classnames";
import styles from "./Form.module.css";

const Form: React.FC = () => {
  return (
    <form className={styles.form}>
      <div className={cx(styles.inputs, styles.formDiv)}>
        <div className={cx(styles.formDiv, styles.inputDivs)}>
          <label>Name</label>
          <input type="text" />
        </div>

        <div className={cx(styles.inputDivs, styles.email, styles.formDiv)}>
          <label>Email</label>
          <input type="email" />
        </div>
      </div>

      <div className={styles.formDiv}>
        <label>Message</label>
        <textarea rows={10}></textarea>
      </div>

      <Button className={styles.formButton}>SEND MESSAGE</Button>
    </form>
  );
};

export default Form;
