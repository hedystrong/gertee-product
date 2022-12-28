let allProducts = [];
let allCategory = [];
let menu = document.getElementById("menu")
let productElement = document.getElementById("products")
let searchTxt = document.getElementById("searchTxt")
let category = document.getElementById("category")
let asideSort = document.getElementById("aside")
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
            row += `<div class = "nav-item">
                        <a class = "nav-link" href="a">${categoryName}</a>
                        </div>`;
                        
        })

        menu.innerHTML = row;
        asideSort.innerHTML += row;

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

    (param ? param.length == 0 ? [] : param : allProducts).map(({id, price, title, description,thumbnail}, index) =>{
        row += `<div class="col-md-3"> 
                    <div class="card">
                        <div class="littleImg ratio ratio-16x9">
                            <img src="${thumbnail}" class="card-img-top"  alt="...">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${price}$</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>`
       
        
    })
    productElement.innerHTML = row;
}
searchTxt.addEventListener("input", (even) => {
    console.log(even);
    let filteredData = allProducts.filter(c=> {return c.title.includes(even.target.value) == true})
    console.log(filteredData);
    drawProductsHTML(filteredData)
})