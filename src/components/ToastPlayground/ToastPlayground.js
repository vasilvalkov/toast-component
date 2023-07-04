import React from 'react';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import Toast from '../Toast';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [ message, setMessage ] = React.useState('');
  const [ variant, setVariant ] = React.useState('');
  const [ showToast, setShowToast ] = React.useState(false);

  function toggleToastSHown() {
    setShowToast(!showToast);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {
        showToast && <Toast variant={variant} onDismiss={toggleToastSHown}>{message}</Toast>
      }

      <div className={styles.controlsWrapper}>
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
            <Button onClick={toggleToastSHown}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
