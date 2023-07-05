import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

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

      return { toasts, addToast };
    },
    [toasts]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
