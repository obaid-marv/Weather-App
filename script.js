const apiKey = 'fe7d538f8e1c34d2d748352ba50e54e4';



const weather = document.querySelector("#weather");
const search = document.querySelector("#search");
const form = document.querySelector("form");
const getwe = async(city) => {
    
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return showweather(data);
}

const showweather = (data) =>{
    weather.innerHTML =`
    <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="image here!!">
            </div>
            <div>
            <h2>${data.main.temp} C</h2>
            <h2 style="font-size: 1rem; text-transform: uppercase;">${data.weather[0].main}</h2>
    </div>
    
    `
}

form.addEventListener(
    "submit",
    function(event){
        
        getwe(search.value);
        
        event.preventDefault();

    }
)