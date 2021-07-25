import React from 'react';
import cx from 'classnames';
import styles from './styles/Form.module.css';
import btnStyles from './styles/Button.module.css';

const Form: React.FC = () => {
  return (
    <form name="contact" className={styles.form} method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <div className={cx(styles.inputs, styles.formDiv)}>
        <div className={cx(styles.formDiv, styles.inputDivs)}>
          <label>Name</label>
          <input name="name" type="text" />
        </div>

        <div className={cx(styles.inputDivs, styles.email, styles.formDiv)}>
          <label>Email</label>
          <input name="email" type="email" />
        </div>
      </div>

      <div className={styles.formDiv}>
        <label>Message</label>
        <textarea name="message" rows={10}></textarea>
      </div>

      <button type="submit" className={cx(styles.formButton, btnStyles.btn)}>
        Send Message
      </button>
    </form>
  );
};

export default Form;
