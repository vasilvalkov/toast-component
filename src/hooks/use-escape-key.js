import React from 'react';

function useEscapeKey(callbackFn) {
  React.useEffect(() => {
    function keydownHandler(event) {
      if (event.key === 'Escape') {
        callbackFn();
      }
    }

    window.addEventListener('keydown', keydownHandler);

    return () => window.removeEventListener('keydown', keydownHandler);
  }, [callbackFn]);
}

export default useEscapeKey;