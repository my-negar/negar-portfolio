import { useState , useEffect } from "react";
import "./index.css" ;

function App() {

    const API_KEY = "d597439c538631645419d45ea4b2fbb2";


  const [city, setCity] = useState("Tehran");
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [hourly, setHourly] = useState([]);

  const [unit, setUnit] = useState("C");
useEffect(() =>{
  getWeather("Tehran");
}, []);

  // تبدیل دما
  const temperature = (temp) => {

    if(unit === "F"){
      return Math.round((temp * 9 / 5) + 32);
    }

    return Math.round(temp);

  };



  // گرفتن اطلاعات هوا
  const getWeather = async (cityName) => {

    try {

      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );


      const weatherData = await weatherRes.json();



      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${API_KEY}`
      );


      const forecastData = await forecastRes.json();



      setCity(weatherData.name);



      setWeather({

        temp: weatherData.main.temp,

        feels: weatherData.main.feels_like,

        condition: weatherData.weather[0].description,

        icon:
        `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,

        humidity: weatherData.main.humidity,

        wind: Math.round(weatherData.wind.speed * 3.6),

        pressure: weatherData.main.pressure,

        visibility:
        Math.round(weatherData.visibility / 1000)

      });



      setForecast(
        forecastData.list.filter((item,index)=>index % 8 === 0)
      );


      setHourly(
        forecastData.list.slice(0,6)
      );


    }

    catch(error){

      console.log("ERROR:" , error);

    }

  };



  // سرچ شهر
  const searchCity = () => {
console.log("search clicked" , search);
    if(search.trim() !== ""){
      getWeather(search);
    }

  };




  // موقعیت کاربر
  const useLocation = () => {


    navigator.geolocation.getCurrentPosition(

      async(position)=>{


        const lat = position.coords.latitude;
        const lon = position.coords.longitude;


        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        );


        const data = await res.json();


        getWeather(data.name);


      }

    );


  };


  return (
    <div className="container">
          {/* Sidebar */}
          <aside className="sidebar">

          <div className="logo">
            <h2>🌤 Weather</h2>
          </div>
  
  
          <nav>
            <ul>
              <li>🏠 Home</li>
              <li>📅 Forecast</li>
              <li>🗺 Map</li>
              <li>🤍 Favorites</li>
              <li>⚙ Settings</li>
            </ul>
          </nav>
  
  
          <div className="location">
  
            <p>
              📍 {city}
            </p>
  
            <button onClick={useLocation}>
              Use My Location
            </button>
  
          </div>
  
        </aside>
  
  
  
  
        {/* Main */}
        <main className="main">
  
  
          {/* Header */}
          <header className="header">
  
        
  
            <input
  
              type="text"
  
              placeholder="Search for city..."
  
              value={search}
  
              onChange={(e)=>setSearch(e.target.value)}
  
            />
  
  
            <button onClick={searchCity}>
              Search
            </button>
  
    
  
            <div className="header-right">
  
  
              <button
                onClick={()=>setUnit("C")}
              >
                °C
              </button>
  
  
  
              <button
                onClick={()=>setUnit("F")}
              >
                °F
              </button>
  
  
  
              <div className="profile">
                👤
              </div>
  
  
            </div>
  
  
          </header>
  
  
  
  
  
          {/* Top Section */}
          <section className="top-section">
  
  
  
            {/* Weather Card */}
            <div className="weather-card">
  
  
              <h2>
                📍 {city}, Iran
              </h2>
  
  
  
              {weather ? (
  
                <>
  
  
                  <img
                    src={weather.icon}
                    alt="weather"
                  />
  
  
                  <h1>
                    {temperature(weather.temp)}°{unit}
                  </h1>
  
  
  
                  <h3>
                    {weather.condition}
                  </h3>
  
  
  
                  <p>
                    Feels like {temperature(weather.feels)}°{unit}
                  </p>
  
  
                </>
  
              ) : (
  
                <h2>
                  Search a city
                </h2>
  
              )}
  
  
  
            </div>
  
  
  
  
  
            {/* Details */}
            <div className="details-grid">
  
  
              <div className="detail-card">
  
                <h4>
                  Humidity
                </h4>
  
                <p>
                  {weather ? weather.humidity : "--"}%
                </p>
  
              </div>
  
  
  
              <div className="detail-card">
  
                <h4>
                  Wind
                </h4>
  
                <p>
                  {weather ? weather.wind : "--"} km/h
                </p>
  
              </div>
  
  
  
  
              <div className="detail-card">
  
                <h4>
                  Pressure
                </h4>
  
                <p>
                  {weather ? weather.pressure : "--"} hPa
                </p>
  
              </div>
  
  
  
  
              <div className="detail-card">
  
                <h4>
                  Visibility
                </h4>
  
                <p>
                  {weather ? weather.visibility : "--"} km
                </p>
  
              </div>
  
  
  
  
              <div className="detail-card">
  
                <h4>
                  UV Index
                </h4>
  
                <p>
                  N/A
                </p>
  
              </div>
  
  
  
  
              <div className="detail-card">
  
                <h4>
                  Sunrise / Sunset
                </h4>
  
                <p>
                  --
                </p>
  
              </div>
  
  
  
            </div>
  
  
  
          </section>
                  {/* Forecast */}

        <section className="forecast">


{/* 5 Day Forecast */}

<div className="five-day">


  <h2>
    5-Day Forecast
  </h2>



  <div className="forecast-list">


    {forecast.map((day, index)=>(


      <div 
        className="forecast-item"
        key={index}
      >


        <h3>
          {
            new Date(day.dt_txt)
            .toLocaleDateString("en-US",
            {
              weekday:"short"
            })
          }
        </h3>



        <img

          src={
            `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`
          }

          alt="icon"

        />



        <p>
          {temperature(day.main.temp)}°{unit}
        </p>



        <span>
          {day.weather[0].description}
        </span>



      </div>


    ))}


  </div>


</div>






{/* Hourly Forecast */}

<div className="hourly">


  <h2>
    Hourly Forecast
  </h2>




  <div className="hourly-list">



    {hourly.map((hour,index)=>(


      <div

        className="hour-item"

        key={index}

      >



        <p>
          {
            new Date(hour.dt_txt)
            .getHours()
          }:00
        </p>



        <img

          src={
            `https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`
          }

          alt="weather"

        />



        <span>
          {temperature(hour.main.temp)}°
        </span>



      </div>


    ))}



  </div>



</div>



</section>







{/* Bottom Section */}

<section className="bottom-section">



<div className="favorite-cities">


  <h2>
    Favorite Cities
  </h2>



  <div className="cities">


    <div className="city-card">
      Tehran
    </div>


    <div className="city-card">
      Istanbul
    </div>


    <div className="city-card">
      Dubai
    </div>


    <div 
      className="city-card"
      onClick={()=>{
        setSearch("");
      }}
    >
      + Add City
    </div>



  </div>


</div>






<div className="weather-map">


  <h2>
    Weather Map
  </h2>



  <div className="map">

    🗺 Map Here

  </div>


</div>



</section>



</main>


</div>

);

}


export default App;