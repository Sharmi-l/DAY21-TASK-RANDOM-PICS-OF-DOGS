
//heading tag:
let heading = document.createElement("h1");
heading.innerText = "Random pictures of dogs"
heading.setAttribute("class","mainhead"); 
document.body.append(heading);

// Main div:

let MainDiv = document.createElement("div");
MainDiv.setAttribute("class","container");
document.body.append(MainDiv);

//Sub-div for cat:

let cat = document.createElement("div");
cat.setAttribute("id","cat");
cat.setAttribute("class","card");
MainDiv.append(cat);

//buttons:

let btnDiv = document.createElement("div");
btnDiv.setAttribute("class","btn");
document.body.append(btnDiv);


//cat-btn:

let cat_btn = document.createElement("btn");
cat_btn.setAttribute("id","cat_btn");
cat_btn.setAttribute("class","button");
cat_btn.innerText = "Click Me"
btnDiv.append(cat_btn);


// Function for fetch api:

const cat_card = document.getElementById("cat");
const cat_button  = document.getElementById("cat_btn");

cat_button.addEventListener('click', getRandomCat);


// Function for Cat:
function getRandomCat() {
    // fetch("https://aws.random.cat/meow")
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
        cat_card.innerHTML = 
            // `<img src ="${data.file}" />`
            `<img src ="${data.message}" />`
    })
}