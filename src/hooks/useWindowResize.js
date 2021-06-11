import { useEffect } from 'react';

export const useWindowResize = callBack => {
  useEffect(() => {
    window.addEventListener('resize', callBack);

    return () => window.removeEventListener('resize', callBack);
  }, [callBack]);
};
