import { useEffect } from 'react';

export const useScroll = (callback) => {
  useEffect(() => {
    const handleScroll = () => {
      callback();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [callback]);
};
