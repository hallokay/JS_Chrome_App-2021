const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";

function geoSuccess(position) {
  console.log(position);
  const lat = position.coords.latitude,
    lng = position.coords.longitude;
  console.log(lat, lng);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const weather = document.querySelector("#weather span:first-child"),
        city = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function geoError() {
  alert("위치를 찾을 수 없습니다. 날씨를 제공할 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
