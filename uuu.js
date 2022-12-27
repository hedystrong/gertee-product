let allProducts = [];
let allCategory = [];
let menu = document.getElementById("menu")
let productElement = document.getElementById("products")
let searchTxt = document.getElementById("searchTxt")
let category = document.getElementById("category")
function fillcategory() {
let row = "";
    fetch ("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
        
        allProducts = [...data.products]
        allProducts.map(c => {
            if(!allCategory.includes(c.category)) {
                allCategory.push(c.category)
            }
            
        })
        console.log(allCategory);

        allCategory.map((categoryName) => {
            row += `<li class = "nav-item">
                        <a class = "nav-link" href="a">${categoryName}</a>
                        </li>`;
                        
        })

        menu.innerHTML = row;
        drawProductsHTML();
        // console.log(row);
       
    })
    .catch((error) => console.log(error))

       
}

fillcategory();

function drawProductsHTML(param) {
    let row = "";
    console.log(allProducts);

    let shineArr = [];
    if(param) {
        if(param.length == 0) {
            console.log("haisan utga bhgui bn");
        }else{
            shineArr = [...param]
        }
    }else{
        shineArr = [...allCategory]
    }

    (param ? param.length == 0 ? [] : param : allProducts).map(({id, title, description}, index) =>{
        row += `<div class = "card">
        <a href="./index.html ? image= '${allProducts.images}' & 
        title= '${allProducts.title}' ">${title}</a>
        </div>`;
        
    })
    productElement.innerHTML = row;
}
searchTxt.addEventListener("input", (even) => {
    console.log(even);
    let filteredData = allProducts.filter(c=> {return c.title.includes(even.target.value) == true})
    console.log(filteredData);
    drawProductsHTML(filteredData)
})