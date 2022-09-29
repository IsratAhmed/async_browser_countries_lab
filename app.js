const countries = document.querySelector("#countries");

const fetchAllCountries = async () => {

    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    const countriesData = jsonData.data;

    const countryNames = jsonData.map((country) => country.name.common);
    countryNames.forEach((countryNames) => {
        const nameLi = document.createElement("li");
        nameLi.textContent = countryNames;
        countries.appendChild(nameLi);
    })

}

fetchAllCountries()