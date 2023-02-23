import { useState, useRef, useEffect } from 'react';

function useInputFocus() {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const inputElement = inputRef.current;

    inputElement.addEventListener('focus', handleFocus);
    inputElement.addEventListener('blur', handleBlur);

    return () => {
      inputElement.removeEventListener('focus', handleFocus);
      inputElement.removeEventListener('blur', handleBlur);
    };
  }, []);

  return { inputRef, isFocused };
}

export default useInputFocus;