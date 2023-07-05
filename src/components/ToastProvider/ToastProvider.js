import React from "react";
import useEscapeKey from '../../hooks/use-escape-key';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  const dismissAll = React.useCallback(() => setToasts([]), []);

  useEscapeKey(dismissAll);

  const value = React.useMemo(
    () => {
      const addToast = (message, variant) => {
        const id = crypto.randomUUID();
        const dismissFn = () => {
          setToasts(currentToasts => currentToasts.filter(t => t.id !== id))
        };

        setToasts([
          ...toasts,
          { message, variant, id, dismissFn },
        ]);
      };

      return { toasts, addToast, dismissAll };
    },
    [toasts, dismissAll]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
