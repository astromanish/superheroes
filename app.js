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
        // console.log(res.data.image.url);

        const div = document.createElement("div");
        div.className = "col-sm-4 offset-sm-4";
        const img = document.createElement("img");
        img.setAttribute("src",`${res.data.image.url}`);
        div.appendChild(img);
        cntr.appendChild(div);
        

    }
}

console.log(cntr);
    
// const id = spr.map((sam) => {
//     return sam.id;
// });


// console.log(id);
