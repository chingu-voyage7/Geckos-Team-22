const dataObj = {};

const getTrendingGiphy = () => {
        const trendingGipies = $.get("http://api.giphy.com/v1/gifs/trending?api_key=WNcYnPn1M89NuefRy9nGv4JInl73xP0J");
        trendingGipies.done ( gipies => {
            dataObj.trending = gipies.data;
            console.log (dataObj.trending);
            dataObj.trending.forEach(element => {
                let html = `
                    <div class="trending__item">
                        <img class="trending__item__image" src="${element.images.downsized_medium.url}" alt="">
                        <p class="trending__item__title">${element.title}</p>
                    </div>
                `;
                document.querySelector(".trending").insertAdjacentHTML ("beforeend", html);
            });
        });
};

getTrendingGiphy();

const getInput = () => {
    var searchStr = document.querySelector(".navigation__search__input").value;
    return searchStr;
};


/*
document.querySelector(".btn").addEventListener("click", function () {
    console.log ("Click event happened");
    var searchStr = document.querySelector(".searchInput").value;
    console.log(searchStr);

    var xhr = $.get(
        `https://api.giphy.com/v1/gifs/search?api_key=WNcYnPn1M89NuefRy9nGv4JInl73xP0J&q=${searchStr}&limit=15&offset=0&rating=G&lang=en`
    );
    xhr.done(function (giphyObj) {
        console.log (giphyObj);
        var giphyArr = giphyObj.data;
        var liString;

        giphyArr.forEach(element => {
            var imgElement = `<img class="giphyImg" src="${element.images.downsized_medium.url}">`
            var imgTitle = `<h4 class="giphyTitle">${element.title}</h4>`
            liString += `<div class="giphyElements">${imgElement}</div>`;
        });

        document.getElementById("slideContainer").insertAdjacentHTML ("afterend", liString) ;
    });
});
*/