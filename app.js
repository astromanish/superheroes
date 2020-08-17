const cntr = document.querySelector("#cntr");

// console.log(cntr)

// let spr = [];

// console.log(spr[4]);


for( let i=1;i<700;i++)
{
    axios({
        method : "get",
        url : `https://superheroapi.com/api.php/1571164256420548/${i}/`,
        // headers: {
        //     "Content-Type":"application/x-www-form-urlencoded"
        // }


    })
    .then(res => showRes(res))
    .catch(err => console.log(err))

    const showRes = (res) => {

        // spr.push(res.data);
        console.log(res.data);

        const div = document.createElement("div");
        div.className = "col-lg-6 offset-lg-3 mb-3";
        const img = document.createElement("img");
        img.setAttribute("src",`${res.data.image.url}`);
        img.setAttribute("alt",`failed to load`);
        div.appendChild(img);
        cntr.appendChild(div);

        const div2 = document.createElement("div");
        div2.className = "jumbotron";
        const name = document.createElement("h2");
        name.appendChild(document.createTextNode(`${res.data.name}`));
        div2.appendChild(name);
        cntr.appendChild(div2);

        const div3 = document.createElement("div");
        div3.className = "progress";
        div3.setAttribute("style","height: 20px;")
        const div4 = document.createElement("div");
        div4.className = "progress-bar";
        div4.setAttribute("style",`width:${res.data.powerstats.combat}%`)
        const pwr1 = document.createElement("h6");
        pwr1.className = "properties";
        pwr1.appendChild(document.createTextNode("Combat"));

        div3.appendChild(div4);
        div2.appendChild(pwr1);
        div2.appendChild(div3);
        



        const div5 = document.createElement("div");
        div5.className = "progress";
        div5.setAttribute("style","height: 20px;")
        const div6 = document.createElement("div");
        div6.className = "progress-bar";
        div6.setAttribute("style",`width:${res.data.powerstats.power}%`)
        const pwr2 = document.createElement("h6");
        pwr2.className = "properties";
        pwr2.appendChild(document.createTextNode("Power"));

        div5.appendChild(div6);
        div2.appendChild(pwr2);
        div2.appendChild(div5);
        


        const div7 = document.createElement("div");
        div7.className = "progress";
        div7.setAttribute("style","height: 20px;")
        const div8 = document.createElement("div");
        div8.className = "progress-bar";
        div8.setAttribute("style",`width:${res.data.powerstats.speed}%`)
        const pwr3 = document.createElement("h6");
        pwr3.className = "properties";
        pwr3.appendChild(document.createTextNode("Speed"));
        
        div7.appendChild(div8);
        div2.appendChild(pwr3);
        div2.appendChild(div7);
        

    }
}

console.log(cntr);
    
// const id = spr.map((sam) => {
//     return sam.id;
// });


// console.log(id);
