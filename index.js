//This is the object which will be used to store the data coming from API
//Object is used, So it will be easy for us to manipulate data with making ajax calls each time
const dataObj = {};

//This is this function used to load trending GIPHYs on page load
const getTrendingGiphy = () => {
        //This is the jQuery ajax method to make the api call
        const trendingGipies = $.get("http://api.giphy.com/v1/gifs/trending?api_key=WNcYnPn1M89NuefRy9nGv4JInl73xP0J");
        trendingGipies.done ( giphys => {
            //API data stored in the object declared above
            dataObj.trending = giphys.data;
            //Object is logged into console just to make sure it is coming and debug.
            //Go thorugh this to understand the API response
            console.log (dataObj.trending);

            //This function will iterate through each element of the API response
            //For each iteration it will insert the below html block in the DOM
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

//Function call
getTrendingGiphy();

//This is the function will be used to get the user's search query
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