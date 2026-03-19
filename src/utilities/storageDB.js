const getStoredData = () => {
  const storedAppsData = localStorage.getItem("app");

  if (storedAppsData) {
    const parsedData = JSON.parse(storedAppsData);
    return parsedData;
  } else {
    return [];
  }
};

const addToDB = (id) => {
  const storedData = getStoredData();
  if (storedData.includes(id)) {
    alert("already exists");
  } else {
    storedData.push(id)
    const stringy = JSON.stringify(storedData);
    localStorage.setItem("app", stringy);
  }
};

export {addToDB, getStoredData}