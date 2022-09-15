
async function main (){
   try{
    
    row.innerHTML=""
    let inputstate=document.getElementById("brewery").value;
    console.log(inputstate);
    let urlroute =  `https://api.openbrewerydb.org/breweries?by_state=${inputstate}&per_page=`
    let data = await fetch(urlroute);
    let statedata= await data.json();
    console.log(statedata);
    
    for (i=0;i<statedata.length;i++)
    {   
        let column= document.createElement("div");
        column.setAttribute("class","col-3")

        let division= document.createElement("div");
        division.setAttribute("class","division");
        
        division.innerHTML=`<div class="card border-warning mb-3" style="max-width: 18rem;">
        <h5 class="card-header"><b>${statedata[i].id}</b></h5>
        <div class="card-body">
          <span class="card-title"><b>Brewary Type: </b>${statedata[i].brewery_type}</span>
          <p class="card-text"><b>Address: </B>${statedata[i].street},${statedata[i].city},${statedata[i].state}</p>
          <p><b>Ph No.</b>${statedata[i].phone}</P>
          <p>URL:${statedata[i].website_url}
        </div>
      </div>`
      column.append(division)  
      row.append(column);

    }
}
catch(error){
console.log(error);
}
}

var div = document.createElement("div");
div.style.textAlign="center";

var heading=document.createElement("h1");
heading.innerHTML="<i>BREWERY DATA</i>";

var div2 = document.createElement("div");
div2.setAttribute("id","div2");
div2.innerHTML=`Search State Name
<span style="color:grey"><i>(Ex: Indiana ,Oregon, New York,..)</span></i>`

var input =document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","brewery");

var search = document.createElement("button");
search.setAttribute("type","button");
search.setAttribute("id","search");
search.classList.add("btn","btn-warning")
search.addEventListener("click",main);
search.innerHTML="search"

var line = document.createElement("hr");
line.style.color="grey";
line.style.width="800px"

var box = document.createElement("div");
box.setAttribute("class","box");
box.innerHTML=""

var container = document.createElement("div");
container.setAttribute("class","container");

var row = document.createElement("div");
row.setAttribute("class","row");




// appending data 
container.append(row);
box.append(container);
div.append(heading,div2,input,search,line)

document.body.append(div,box);

