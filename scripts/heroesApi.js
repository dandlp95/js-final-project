
function searchHero() {
    let heroName = document.querySelector("#heroSearch").value;

    const eventsURL = "https://www.superheroapi.com/api.php/5104452189582185/search/" + heroName;
    fetch(eventsURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {

            document.querySelector(".superHeroInfo").textContent = "";
            heroes = jsonObject.results;

            heroes.forEach(hero => {
                console.log(hero);

                let heroContainer = document.createElement("section");

                let name = document.createElement("h2");
                let heroImg = document.createElement("img");

                let biographyInfo = document.createElement("div");
                let fullName = document.createElement("p");
                let aliases = document.createElement("p");
                let alignment = document.createElement("p");
                let firstAppearance = document.createElement("p");
                let birthplace = document.createElement("p");

                let appearance = document.createElement("div");
                let gender = document.createElement("p");
                let height = document.createElement("p");
                let hairColor = document.createElement("p");
                let weight = document.createElement("p");
                let race = document.createElement("p")

                let connections = document.createElement("div");
                let teams = document.createElement("p");
                let relatives = document.createElement("p");

                let work = document.createElement("p");

                let powerStats = document.createElement("div");
                let combat = document.createElement("p");
                let durability = document.createElement("p");
                let intelligence = document.createElement("p");
                let power = document.createElement("p");
                let speed = document.createElement("p");
                let strength = document.createElement("p");

                /* Name */
                name.textContent = hero["name"];
                name.setAttribute("class", "heroName")

                /* Image */
                heroImgSrc = hero["image"]["url"];
                heroImg.setAttribute("src", heroImgSrc);
                heroImg.setAttribute("alt", "Hero's image");
                heroImg.setAttribute("class", "heroImg")

                /*Biography*/
                fullName.textContent = "Full Name: " + hero.biography["full-name"];
                aliases.textContent = "Aliases: " + hero.biography["aliases"];
                alignment.textContent = "Alignment: " + hero.biography["alignment"];
                firstAppearance.textContent = "First Appearance: " + hero.biography["first-appearance"];
                birthplace.textContent = "Birthplace: " + hero.biography["place-of-birth"];


                biographyInfo.appendChild(fullName);
                biographyInfo.appendChild(aliases);
                biographyInfo.appendChild(alignment);
                biographyInfo.appendChild(firstAppearance);
                biographyInfo.appendChild(birthplace);

                biographyInfo.setAttribute("class", "bio")

                /*appearance*/
                gender.textContent = "Gender: " + hero.appearance["gender"];
                height.textContent = "Height: " + hero.appearance["height"][0];
                hairColor.textContent = "Hair Color: " + hero.appearance["hair-color"];
                weight.textContent = "Weight: " + hero.appearance["weight"][0];
                race.textContent = "Race: " + hero.appearance["race"];

                appearance.appendChild(gender);
                appearance.appendChild(height);
                appearance.appendChild(hairColor);
                appearance.appendChild(weight);
                appearance.appendChild(race);

                appearance.setAttribute("class", "appearance")

                /*Connections*/
                teams.textContent = "Teams: " + hero.connections["group-affiliation"];
                relatives.textContent = "Relatives: " + hero.connections["relatives"];

                connections.appendChild(teams);
                connections.appendChild(relatives);

                connections.setAttribute("class", "connections");

                /* Work */
                work.textContent = "Work: " + hero["work"]["occupation"];

                work.setAttribute("class", "work");

                /* Power stats */
                combat.textContent = "Combat: " + hero.powerstats["combat"];
                durability.textContent = "Durability: " + hero.powerstats["durability"];
                intelligence.textContent = "Intelligence: " + hero.powerstats["intelligence"];
                power.textContent = "Power: " + hero.powerstats["power"];
                speed.textContent = "Speed: " + hero.powerstats["speed"];
                strength.textContent = "Strength: " + hero.powerstats["strength"];

                powerStats.appendChild(combat);
                powerStats.appendChild(durability);
                powerStats.appendChild(intelligence);
                powerStats.appendChild(power);
                powerStats.appendChild(speed);
                powerStats.appendChild(strength);

                powerStats.setAttribute("class", "powerStats");

                heroContainer.appendChild(name);
                heroContainer.appendChild(heroImg);
                heroContainer.appendChild(biographyInfo);
                heroContainer.appendChild(appearance);
                heroContainer.appendChild(connections);
                heroContainer.appendChild(work);
                heroContainer.appendChild(powerStats);

                document.querySelector(".superHeroInfo").appendChild(heroContainer);

            })
        })}

document.querySelector('#submitSearch').addEventListener('click', searchHero);