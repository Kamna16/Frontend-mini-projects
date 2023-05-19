// const { async } = require("postcss-js");

const API_key = "be284507c8f7aa9153d863329c45f418";
function renderweatherinfo(data){
    let newpara = document.createElement('p');
    newpara.textContent = `${data?.main?.temp.tofixed(2)} `

    document.body.appendChild(newpara);
}

async function fetchweatherdetails(){
    // let latitude = 15.33;
    // let longitude = 74.0833;

    try{
        let city = "goa";
    

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);

    const data = await response.json();

    console.log("weather data -->", data);

    renderweatherinfo(data);
    }
    catch(err){
        console.log("error found", err);
    }
}

async function getCustomweatherDetails(){
    try{
        let lat = 15.6333;
        let lon = 18.3333;

        let result = await fetch(`https://api.openweathermap.org/data/2.5/    weather?lat=${lat}&lon=${lon}&appid=${API_key}`)

        // let data = await result.json();

        // renderweatherinfo(data);
    }
    catch(err){
        console.log("error found", err);
    }
    
}
function SwitchTab(clickedTab){
    apiErrorContainer.classList.remove("active");
}
