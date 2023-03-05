// getting find button
const btn = document.querySelector(".find");

// getting input form 
const inputForm = document.querySelector(".input");

// gettting id from the respective elements
const feels_like = document.querySelector("#feels_like");
const city = document.querySelector("#city");
const humidity = document.querySelector("#humidity");
const min_temperature = document.querySelector("#min_temperature");
const max_temperature  = document.querySelector("#max_temperature");
const wind_speed = document.querySelector("#windSpeed");
const message = document.querySelector(".Message");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b9ea6c7652msh63442f5f90904ffp1259d6jsnae8fa964a483',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// for events
btn.addEventListener("click", () => {
    // to get the value without space
    let value = inputForm.value.trim();

    // for get request in api
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${value}`, options)
	.then(response => response.json())
	.then((data)=>{

        city.innerHTML = value;
        min_temperature.innerHTML = data.min_temp;
        max_temperature.innerHTML = data.max_temp;
        humidity.innerHTML = data.humidity;
        feels_like.innerHTML = data.feels_like;
        wind_speed.innerHTML = data.wind_speed;
        document.querySelector(".input").value = "";
    })
	.catch((err)=>{
        message.innerHTML = "Couldn't fetch data";
        console.log(err);
    });

})







