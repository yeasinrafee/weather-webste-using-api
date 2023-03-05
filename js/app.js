
const API_KEY = `4346d0377a5c0ca13c095d33a3acfd16`;

const getData = city =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const displayTemperature = data =>{
    const temperature = document.getElementById('temperature');
    console.log(data);
    temperature.innerText = data.main.temp;
    document.getElementById('city').innerText = data.name;
    document.getElementById('condition').innerText = data.weather[0].main;
}

const passData = ()=>{
    const inputField = document.getElementById('input-field').value;
    getData(inputField);
}

document.getElementById('search').addEventListener('click', passData);