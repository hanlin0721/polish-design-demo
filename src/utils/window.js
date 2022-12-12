import { useState, useEffect } from "react";

export function useWindowLoad() {
  const hasWindow = typeof window !== "undefined";
  const [isCompleted, setComplete] = useState(false);
  const [isWindowAnimReady, setAnimReady] = useState(false);

  useEffect(() => {
    const start = () => {
      setComplete(false);
    };
    const end = () => {
      setComplete(true);
    };
    if (document.readyState === "complete") {
      end();
    } else {
      window.addEventListener("DOMContentLoaded", start);
      window.addEventListener("load", end);
    }
    return () => {
      window.removeEventListener("DOMContentLoaded", start);
      window.removeEventListener("load", end);
    };
  }, [hasWindow]);

  useEffect(() => {
    if (isCompleted) {
      setTimeout(() => setAnimReady(true), 2000);
    }
  }, [isCompleted]);

  return [isCompleted, setComplete, isWindowAnimReady, setAnimReady];
}

export function useDeviceType(defaultValue) {
  const { width, height } = useWindowDimensions();
  const [device, setDevice] = useState(defaultValue);

  useEffect(() => {
    if (width >= 1366) {
      setDevice("desktop");
    } else if (width >= 768 && width <= height) {
      setDevice("pad");
    } else if (width >= 768 && width > height) {
      setDevice("desktop");
    } else {
      setDevice("mobile");
    }
  }, [width]);

  return [device, setDevice];
}

export const useWindowDimensions = () => {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
};

// Hook
export function useLocalStorage(initialValue, key) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

export function useAuth() {
  return useLocalStorage("none", "ntu_token");
}