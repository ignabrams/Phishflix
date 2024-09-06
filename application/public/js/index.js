
let view = 'false';

function changeColor(){
    console.log(view);

    if(view == 'false'){
        console.log("changing colors");
        document.documentElement.style.setProperty('--primary--color', '#e50982');
        document.documentElement.style.setProperty('--switch--color', '#e50914'); 
        document.getElementById("netflixLogo").style.display = "block";
        document.getElementById("phishflixLogo").style.display = "none";  
        view = 'true';   
    }

    else{
        console.log("changing colors");
        document.documentElement.style.setProperty('--primary--color', '#e50914');
        document.documentElement.style.setProperty('--switch--color', '#e50982');
        document.getElementById("netflixLogo").style.display = "none";
        document.getElementById("phishflixLogo").style.display = "block";  
        view = 'false';    
    }
}   