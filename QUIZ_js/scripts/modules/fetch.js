const fetchData = (url, questionsArray) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => questionsArray.push(...data));
};

export default fetchData;
