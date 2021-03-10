const themeSwitcher = document.querySelector('#themeSwitcher');

// use browser navigeter for get our current position(location)
navigator.geolocation.getCurrentPosition((position)=>{
    //console.log(position); // aapdi current location male

    // this sunset and sunries method is present in sun.js file
    let sunset = new Date().sunset(position.coords.latitude,position.coords.longitude);
    let sunrise = new Date().sunrise(position.coords.latitude,position.coords.longitude);
    // console.log(sunset);
    // console.log(sunrise);

    const isDay=(sunset,sunrise)=>{
        const nowHours = new Date().getHours();
        // console.log(nowHours,sunrise.getHours(),sunset.getHours());
        // console.log(sunset,sunrise);
        return nowHours >= sunrise.getHours() && nowHours < sunset.getHours();
    }

    // aatyreno time day 6 ke nahi te chack kare 
    if(isDay(sunset,sunrise)){
        setTheme('theme-light');
    }
    else{
        setTheme('theme-dark');
    }
})

const setTheme = (theme) =>{

    // select box ma kai select na karelu hoi to theme = theme-light kari devi default theme select kareli hoi to je value hoi te theme ma aavi jai
    theme = theme || 'theme-light';

    // document.documentElement // aanathi html element select thai 
    document.documentElement.className = theme;
    localStorage.setItem('theme',theme) // fari jayre website refrash karo to aa theme set karili aave te mate

    // theme = theme-light,theme-dark  // theme ni aa 2 value aatyare male 6 aahi 

    themeSwitcher.value = theme // select box ma je theam hoi te theme nu name select thai aave and te na option tag ma value aatribute ni value je themni value hoi te aave 
}

// page refrash  karo tayre koi default theme rakhavi pade te mate 
// page refrash karo te mate 
// localstorage ma theme alredy hoi to te set karo nahiter defualte set karo page refrash thai tayre 
const defaultTheme = localStorage.getItem('theme') || 'theme-light'
setTheme(defaultTheme);

themeSwitcher.addEventListener('change',(e)=>{
    //console.log(e.target.value); // select ma je value attribute hoi te male
    setTheme(e.target.value);
});

