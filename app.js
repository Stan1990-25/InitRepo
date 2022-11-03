const getNewsData = () => {
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-10-03&sortBy=publishedAt&apiKey=06cf13383be84a2eb62de50b1d7102b5", {
        method: 'GET'
    })
    .then(data => data.json())
    .then(data => console.log(data["articles"]));
}

getNewsData();