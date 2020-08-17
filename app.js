const cntr = document.querySelector("#cntr");

// console.log(cntr)

// let spr = [];

// console.log(spr[4]);


for( let i=1;i<2;i++)
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
        //console.log(res.data);

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

        // Superheroes properties //

        //Combat

        if(res.data.powerstats.combat === null)
        {
            
        }

        const div3 = document.createElement("div");
        div3.className = "progress";
        div3.setAttribute("style","height: 20px;")
        const div4 = document.createElement("div");
        if(res.data.powerstats.combat<33)
        {
            div4.className = "progress-bar bg-danger";
        }
        else{
            if(res.data.powerstats.combat>66)
            {
                div4.className = "progress-bar bg-success";
            }
            else{
                div4.className = "progress-bar";
            }
        }
        div4.setAttribute("style",`width:${res.data.powerstats.combat}%`)
        const pwr1 = document.createElement("h6");
        pwr1.className = "properties";
        pwr1.appendChild(document.createTextNode("Combat"));

        div3.appendChild(div4);
        div2.appendChild(pwr1);
        div2.appendChild(div3);
        

        // Power

        const div5 = document.createElement("div");
        div5.className = "progress";
        div5.setAttribute("style","height: 20px;")
        const div6 = document.createElement("div");
        if(res.data.powerstats.power<33)
        {
            div6.className = "progress-bar bg-danger";
        }
        else{
            if(res.data.powerstats.power>66)
            {
                div6.className = "progress-bar bg-success";
            }
            else{
                div6.className = "progress-bar";
            }
        }
        div6.setAttribute("style",`width:${res.data.powerstats.power}%`)
        const pwr2 = document.createElement("h6");
        pwr2.className = "properties";
        pwr2.appendChild(document.createTextNode("Power"));

        div5.appendChild(div6);
        div2.appendChild(pwr2);
        div2.appendChild(div5);
        
        //Speed

        const div7 = document.createElement("div");
        div7.className = "progress";
        div7.setAttribute("style","height: 20px;")
        const div8 = document.createElement("div");
        if(res.data.powerstats.speed<33)
        {
            div8.className = "progress-bar bg-danger";
        }
        else{
            if(res.data.powerstats.speed>66)
            {
                div8.className = "progress-bar bg-success";
            }
            else{
                div8.className = "progress-bar";
            }
        }
        div8.setAttribute("style",`width:${res.data.powerstats.speed}%`)
        const pwr3 = document.createElement("h6");
        pwr3.className = "properties";
        pwr3.appendChild(document.createTextNode("Speed"));
        
        div7.appendChild(div8);
        div2.appendChild(pwr3);
        div2.appendChild(div7);

        // Durability

        const div9 = document.createElement("div");
        div9.className = "progress";
        div9.setAttribute("style","height: 20px;")
        const div10 = document.createElement("div");
        if(res.data.powerstats.durability<33)
        {
            div10.className = "progress-bar bg-danger";
        }
        else{
            if(res.data.powerstats.durability>66)
            {
                div10.className = "progress-bar bg-success";
            }
            else{
                div10.className = "progress-bar";
            }
        }
        div10.setAttribute("style",`width:${res.data.powerstats.durability}%`)
        const pwr4 = document.createElement("h6");
        pwr4.className = "properties";
        pwr4.appendChild(document.createTextNode("Durability"));

        div9.appendChild(div10);
        div2.appendChild(pwr4);
        div2.appendChild(div9);
        

        // Intelligence

        const div11 = document.createElement("div");
        div11.className = "progress";
        div11.setAttribute("style","height: 20px;")
        const div12 = document.createElement("div");
        if(res.data.powerstats.intelligence<33)
        {
            div12.className = "progress-bar bg-danger";
        }
        else{
            if(res.data.powerstats.intelligence>66)
            {
                div12.className = "progress-bar bg-success";
            }
            else{
                div12.className = "progress-bar";
            }
        }
        div12.setAttribute("style",`width:${res.data.powerstats.intelligence}%`)
        const pwr5 = document.createElement("h6");
        pwr5.className = "properties";
        pwr5.appendChild(document.createTextNode("Intelligence"));

        div11.appendChild(div12);
        div2.appendChild(pwr5);
        div2.appendChild(div11);
        
        // Strength

        const div13 = document.createElement("div");
        div13.className = "progress";
        div13.setAttribute("style","height: 20px;")
        const div14 = document.createElement("div");
        if(res.data.powerstats.strength<33)
        {
            div14.className = "progress-bar bg-danger";
        }
        else{
            if(res.data.powerstats.strength>66)
            {
                div14.className = "progress-bar bg-success";
            }
            else{
                div14.className = "progress-bar";
            }
        }
        div14.setAttribute("style",`width:${res.data.powerstats.strength}%`)
        const pwr6 = document.createElement("h6");
        pwr6.className = "properties";
        pwr6.appendChild(document.createTextNode("Strength"));
        
        div13.appendChild(div14);
        div2.appendChild(pwr6);
        div2.appendChild(div13);
        

    }
}

//console.log(cntr);
    
// const id = spr.map((sam) => {
//     return sam.id;
// });


console.log(null<10);
