const keyApi = "5ba96853b00f3258c8e7cb14e0a08260"
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lang=fr&units=metric&q=`

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const res = await fetch(apiUrl + city + `&appid=${keyApi}`)

    if (res.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {

        let data = await res.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "/images/icone_scatteredcloud.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "/images/icone_clair.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "/images/icone_showerrain.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "/images/icone_mist.png";
        }
        else if (data.weather[0].main == "Thunderstorm") {
            weatherIcon.src = "/images/icone_thunderstorm.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "/images/icone_rain.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "/images/icone_snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

checkWeather()