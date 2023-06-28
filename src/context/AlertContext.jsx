import { createContext, useContext, useState, useEffect } from 'react';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState('');
  const [redirectPath, setRedirectPath] = useState('');

  const handleDismiss = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    if (showAlert) {
      const timeoutId = setTimeout(() => {
        handleDismiss();
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [showAlert]);

  return (
    <AlertContext.Provider
      value={{
        showAlert,
        setShowAlert,
        messageAlert,
        setMessageAlert,
        setRedirectPath,
        redirectPath,
        handleDismiss,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);