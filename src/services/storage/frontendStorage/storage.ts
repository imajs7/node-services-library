function isFrontendApp() {
  return typeof window !== 'undefined';
}

function setLocalData<T>(key: string, value: T): void {
  if (isFrontendApp()) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

function getLocalData<T>(key: string): T | null {
  if (isFrontendApp()) {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  }
  return null;
}

function setSessionData<T>(key: string, value: T): void {
  if (isFrontendApp()) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
}

function getSessionData<T>(key: string): T | null {
  if (isFrontendApp()) {
    const storedData = sessionStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  }
  return null;
}

export {
  setLocalData,
  getLocalData,
  setSessionData,
  getSessionData
};
