const url="https://api.openweathermap.org/data/2.5/";
const key="7de70b6f2623ea4a8bd0177dcefeb5ad";
const searchBar=document.querySelector("#searchBar");




const setQuery=(e)=>{
    if(e.keyCode==`13`){
        getResult(searchBar.value);
    }
}

const getResult=(cityName)=>{
    let query=`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(response=>response.json()
    .then(displayResult))
    .catch(err=>console.log(err));
}

const displayResult=(result)=>{
    let city=document.querySelector(".city")
    city.innerText=`${result.name},${result.sys.country}`

    let temp=document.querySelector(".temp");
    temp.innerText=`${result.main.temp}°C`

    let desc=document.querySelector(".desc");
    desc.innerText=result.weather[0].description;

    let minmax=document.querySelector(".minmax")
    minmax.innerText=`${result.main.temp_min}°C / ${result.main.temp_max}°C`;

}

searchBar.addEventListener("keypress",setQuery);

