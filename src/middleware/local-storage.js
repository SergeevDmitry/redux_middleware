export function loadState(key = 'state') {
  try {
    const json = localStorage.getItem(key);

    if (json === null) {
      return undefined;
    } else {
      return JSON.parse(json);
    }
  } catch (e) {
    return undefined;
  }
}

export default key => store => next => action => {
  const result = next(action);

  try {
    const json = JSON.stringify(key ? store.getState()[key] : store.getState());
    localStorage.setItem(key || 'state', json);
  } catch (e) {
    console.error(e);
  }

  return result;
}
