const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=4073b31f2e5c78ab6c7b41b1572d7ac6&q=";
const searchbox=document.querySelector(".search input");
const searchbut=document.querySelector(".search button");

async function weather(city){
    const api= await fetch(apiurl + city);
    var data=await api.json();
    console.log(data);
    document.querySelector(".citys").innerHTML=data.name;
    document.querySelector(".temps").innerHTML=Math.round(data.main.temp)+ '°C';
    document.querySelector(".humiditys").innerHTML=data.main.humidity + '%';
    document.querySelector(".winds").innerHTML=data.wind.speed + 'km/h';
}
searchbut.addEventListener("click",()=>{
    weather(searchbox.value);
})

