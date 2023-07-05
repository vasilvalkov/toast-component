import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {
        toasts.map(({ variant, message, id, dismissFn }) => (
          <li className={styles.toastWrapper} key={id}>
            <Toast variant={variant} onDismiss={dismissFn}>{message}</Toast>
          </li>
        ))
      }
    </ol>
  );
}

export default ToastShelf;
