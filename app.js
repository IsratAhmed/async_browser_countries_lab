window.addEventListener("DOMContentLoaded", () => {
    //const section = document.getElementById("country");
    const button = document.querySelector("#country-button");

    const fetchCountry = async () => {

        const countryUrls = [];

        for(let name = 0; name < countryUrls.length() ; name++){
            countryUrls.push(`https://restcountries.com/v3.1/name/${name}`)
        }
        

        const namePromises = countryUrls.map( async (url) => {
            const response = await fetch(url);
            return response.json();
        })

        Promise.all( namePromises )
        .then((allResults) => {

            const countriesData = allResults.map( (result) => result.data ).flat();
            
            const countryNames = countriesData.map((name) => name.name);

            const countryUl = document.querySelector("ul");   
    
            countryNames.forEach((countryName) => {
                const nameLi = document.createElement("li");
                nameLi.textContent = countryName;
                countryUl.appendChild(nameLi);
            })

        })


    }
    button.addEventListener("click",fetchCountry);

})