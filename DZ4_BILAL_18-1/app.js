const btn = document.querySelector("#btn");


btn.addEventListener("click", () => {
    const reqest = new XMLHttpRequest (); 
    reqest.open("GET", "data.json");
    reqest.setRequestHeader("Content-type", "application/json");
    reqest.send();
    reqest.addEventListener("load", () => {
        console.log(JSON.parse(reqest.response));
        const data = JSON.parse(reqest.response);
        document.querySelector(".car").innerHTML = data.brand;
        document.querySelector(".model").innerHTML = data.model;
        document.querySelector(".year").innerHTML = data.year;      
    })
})

