const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');

const temp_real = document.getElementById('temp_real');
const temp_status = document.getElementById('temp_status');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    // console.log(cityVal);

    if(cityVal === ""){
        city_name.innerText = `Please write the city name`;
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f95e7efe7bccfa5540b5678c7726688c`;
            const response = await fetch(url);
            // console.log(response);

            const data = await response.json();
            // console.log(data);

            const arrData = [data];
            // console.log(arrData);

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;

            if(tempMood === "Clear"){
                tempMood.innerHTML = "<i class = 'fa fa-sun' style='color:#eccc68;></i>";
            }else if(tempMood === "Clouds"){
                tempMood.innerHTML = "<i class = 'fa fa-cloud' style='color:#f1f2f6;></i>";
            }else if(tempMood === "Rain"){
                tempMood.innerHTML = "<i class = 'fa fa-cloud-rain' style='color:#a4b0be;></i>";
            }else{
                tempMood.innerHTML = "<i class = 'fa fa-sun' style='color:#f1f2f6;></i>";
            }

        }catch{
            city_name.innerText = `Please write the correct city name`;
        }
    }
}

submitBtn.addEventListener('click', getInfo);