import React from "react";
import { ToastContext } from '../ToastProvider';
import Button from '../Button';
import styles from './ToastForm.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastForm() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');
  const { addToast } = React.useContext(ToastContext);

  function createToast(e) {
    e.preventDefault();

    addToast(message, variant);
    setMessage('');
    setVariant('notice');
  }

  return (
    <form className={styles.controlsWrapper} onSubmit={createToast}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={e => setMessage(e.target.value)} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {
                VARIANT_OPTIONS.map(option => (
                  <label htmlFor={option} key={option}>
                    <input
                      id={option}
                      type="radio"
                      name="variant"
                      checked={option === variant}
                      value={option}
                      onChange={(e) => setVariant(e.target.value)} />
                    {option}
                  </label>
                ))
              }
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
  );
}

export default ToastForm;
