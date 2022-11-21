// fetch(
//     "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=rain"
// ).then(function (response) {
//     return response.json()
// }).then(function (data) {
//     console.log(data);
// });

async function getRain(position) {
    console.log(position)

    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&daily=precipitation_sum&timezone=auto`
    );
    const data = await response.json();

    console.log(data);

    const image = document.querySelector("img");
    const text = document.querySelector("#text")
    const precipitation = data.daily.precipitation_sum[2];


    if (precipitation > 0) {
        // rain, do stuff
        image.src = "My project-2.png";
        text.innerHTML = "<h1>KURAKLÄDER <br>PÅ</br></h1>";
        document.body.style.background = "linear-gradient(45deg, #A1A1A1, #D7D7D7)"
    } else {
        // no rain, do stuff
        image.src = "My project-1.png";
        text.innerHTML = "<h1>SOLBRILLOR <br>PÅ</br></h1> ";
        document.body.style.background = "linear-gradient(45deg, orange, yellow)"
        image.style.marginLeft = "-50px"
    }
}



function getLocation() {
    navigator.geolocation.getCurrentPosition(getRain);
}

// Call function 
getLocation()