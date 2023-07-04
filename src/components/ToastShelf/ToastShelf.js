import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts = [] }) {
  return (
    <ol className={styles.wrapper}>
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
