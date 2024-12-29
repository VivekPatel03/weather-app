
const apiK="d9973e36531076d488a57d88be62c884"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchinput=document.querySelector('.search input')
const searchbtn=document.querySelector('.search button')


async function checkWeather(city){
    let response=await fetch(apiUrl +city+ `&appid=${apiK}`)

    var data= await response.json()
    console.log(data)

    document.querySelector('.city').innerHTML=data.name
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + "°C"
    document.querySelector('.humidity').innerHTML=data.main.humidity + "%"
    document.querySelector('.wind').innerHTML=data.wind.speed + "km/h"
}


searchbtn.addEventListener('click',()=>{
    checkWeather(searchinput.value)
})