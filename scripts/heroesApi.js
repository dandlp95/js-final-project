for (let i = 1; i < 731; i++) {
    const eventsURL = "https://www.superheroapi.com/api.php/5104452189582185/" + i;
    fetch(eventsURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            
            
            let superHeroInfo = document.createElement("div");
            let superHeroPic = document.createElement("img");
            let biography = document.createElement("div");


        })
}