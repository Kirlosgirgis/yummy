let card = document.querySelector(".card")


class getapi {

    constructor() {


        let searchvalue = document.querySelector(".searchname").value
        this.getmealsearch(searchvalue)
        document.querySelector(".searchmeals").classList.remove("d-none")


        document.querySelector(".s").addEventListener("click", () => {
            document.querySelector(".search-inbuts").classList.remove("d-none")
            document.querySelector(".searchmeals").classList.remove("d-none")
            document.querySelector(".areameals").classList.add("d-none")
            document.querySelector(".ingredmeals").classList.add("d-none")
            document.querySelector(".categorymeals").classList.add("d-none")
            document.querySelector(".ingred-box").classList.add("d-none")
            document.querySelector(".area-box").classList.add("d-none")
            document.querySelector(".category-box").classList.add("d-none")
            document.querySelector(".categorymealscope").classList.add("d-none")
            document.querySelector(".details").classList.add("d-none")
            document.querySelector(".searchmeals").classList.add("d-none")
            document.querySelector(".contactform").classList.add("d-none")


            
            document.querySelector(".searchname").addEventListener("input", () => {
                 
 
                let searchvalue = document.querySelector(".searchname").value
                this.getmealsearch(searchvalue)
                document.querySelector(".searchmeals").classList.remove("d-none")



            })
            document.querySelector(".searchnamefirst").addEventListener("input", () => {
                 
 
                let searchvalue = document.querySelector(".searchnamefirst").value
                this.getmealsearch(searchvalue)
                document.querySelector(".searchmeals").classList.remove("d-none")



            })
         
            

            



        })



        document.querySelector(".c").addEventListener("click", () => {
            this.getcatmeals();
            document.querySelector(".areameals").classList.add("d-none")
            document.querySelector(".ingredmeals").classList.add("d-none")
            document.querySelector(".categorymeals").classList.remove("d-none")
            document.querySelector(".ingred-box").classList.add("d-none")
            document.querySelector(".area-box").classList.add("d-none")
            document.querySelector(".category-box").classList.remove("d-none")
            document.querySelector(".categorymealscope").classList.add("d-none")
            document.querySelector(".details").classList.add("d-none")
            document.querySelector(".searchmeals").classList.add("d-none")
            document.querySelector(".search-inbuts").classList.add("d-none")
            document.querySelector(".contactform").classList.add("d-none")



            





        })


        document.querySelector(".a").addEventListener("click", () => {
            this.getareameals();
            document.querySelector(".areameals").classList.remove("d-none")
            document.querySelector(".area-box").classList.remove("d-none")
            document.querySelector(".categorymeals").classList.add("d-none")
            document.querySelector(".ingredmeals").classList.add("d-none")
            document.querySelector(".ingred-box").classList.add("d-none")

            document.querySelector(".category-box").classList.add("d-none")
            document.querySelector(".areamealscope").classList.add("d-none")
            document.querySelector(".details").classList.add("d-none")
            document.querySelector(".contactform").classList.add("d-none")
            document.querySelector(".searchmeals").classList.add("d-none")
            document.querySelector(".search-inbuts").classList.add("d-none")







        })


        document.querySelector(".i").addEventListener("click", () => {
            this.getingredmeals();
            document.querySelector(".categorymeals").classList.add("d-none")
            document.querySelector(".areameals").classList.add("d-none")
            document.querySelector(".ingredmeals").classList.remove("d-none")
            document.querySelector(".category-box").classList.add("d-none")
            document.querySelector(".area-box").classList.add("d-none")
            document.querySelector(".ingred-box").classList.remove("d-none")
            document.querySelector(".ingredmealscope").classList.add("d-none")
            document.querySelector(".details").classList.add("d-none")
            document.querySelector(".contactform").classList.add("d-none")
            document.querySelector(".searchmeals").classList.add("d-none")
            document.querySelector(".search-inbuts").classList.add("d-none")








        })
        document.querySelector(".contact").addEventListener("click", () => {

            document.querySelector(".contactform").classList.remove("d-none")
            document.querySelector(".categorymeals").classList.add("d-none")
            document.querySelector(".areameals").classList.add("d-none")
            document.querySelector(".ingredmeals").classList.add("d-none")
            document.querySelector(".category-box").classList.add("d-none")
            document.querySelector(".area-box").classList.add("d-none")
            document.querySelector(".ingred-box").classList.add("d-none")
            document.querySelector(".details").classList.add("d-none")
            document.querySelector(".ingredmealscope").classList.add("d-none")
            document.querySelector(".categorymealscope").classList.add("d-none")
            document.querySelector(".areamealscope").classList.add("d-none")
            document.querySelector(".searchmeals").classList.add("d-none")
            document.querySelector(".search-inbuts").classList.add("d-none")





            




        })


    }


 // meals cat scope   **************************************


 validateUserInput() {
    const input = document.querySelector(".searchnamefirst").value;
    const regex = /^[a-zA-Z]$/;
    const result = regex.test(input);
    document.getElementById("result").textContent = result ? "Valid input" : "Invalid input";
}

 async getmealsearch(search="") {
    let searchapi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    let responcesearch = await searchapi.json()
    console.log(responcesearch.meals)
    this.displaysearchmeals(responcesearch.meals)

   
}





displaysearchmeals(datasearch) {
    let searchbox = ``
    datasearch.forEach(search => {



        searchbox += ` <div class="col-lg-3">
        <div class="card-search overflow-hidden m-3" data-id=${search.idMeal}  >
            <div class="img ">
                <img class=" w-100" src="${search.strMealThumb}" alt="">
            </div>
            <div class="layer w-100">
              <h2 class=" cathead text-center m-3">${search.strMeal}</h2>
            </div>
        </div>
     </div>`


        document.querySelector(".searchmeals").innerHTML = searchbox

        document.querySelectorAll(".card-search").forEach(card => {
            card.addEventListener('click',() =>{
                let mealId = card.getAttribute('data-id')
              this.getdetailsapi(mealId)
              document.querySelector(".details").classList.remove("d-none")
              document.querySelector(".search-inbuts").classList.add("d-none")
              document.querySelector(".searchmeals").classList.add("d-none")



    
    
    
            })
        })

       
    })






}





 

// end cat meal scope ______________-------------------------











    // get category meals    ********************************
    async getcatmeals() {
        let catapi = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        let responce = await catapi.json();
        this.displaycatmeals(responce.categories)
        document.querySelectorAll(".card-cat").forEach(card => {
            card.addEventListener('click', () => {
                const category = card.getAttribute('data-category')
                this.getmealscope(category)
                document.querySelector(".categorymeals").classList.add("d-none")
                document.querySelector(".categorymealscope").classList.remove("d-none")
            })
        })


    }

    displaycatmeals(data) {

        let catmeals = ``
        data.forEach(category => {



            catmeals += ` <div class="col-lg-3">
            <div class="card-cat overflow-hidden m-3" data-category= ${category.strCategory} >
                <div class="img ">
                    <img class=" w-100" src="${category.strCategoryThumb}" alt="">
                </div>
                <div class="layer w-100">
                  <h2 class=" cathead text-center m-3">${category.strCategory}</h2>
                  <p class=" cat-descrip text-center w-75 m-auto p-3">"${category.strCategoryDescription.slice(0, 100)}" </p>
                </div>
            </div>
         </div>`


            document.querySelector(".categorymeals").innerHTML = catmeals
        })

    }

    // end category meals _--------------------------------




    // meals cat scope   **************************************

    async getmealscope(cat) {
        let categoryapi = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
        let responceapi = await categoryapi.json()
        console.log(responceapi.meals)
        this.displaycatmealsscope(responceapi.meals)

        document.querySelectorAll(".card-cat-scope").forEach(card => {
            card.addEventListener('click',() =>{
                const mealId =card.getAttribute('data-id')
                this.getdetailsapi(mealId)
                document.querySelector(".categorymealscope").classList.add("d-none")
                document.querySelector(".details").classList.remove("d-none")



            })
        })
    }





    displaycatmealsscope(datacat) {
        let catmealscope = ``
        datacat.forEach(meal => {



            catmealscope += ` <div class="col-lg-3">
            <div class="card-cat-scope overflow-hidden m-3" data-id=${meal.idMeal}  >
                <div class="img ">
                    <img class=" w-100" src="${meal.strMealThumb}" alt="">
                </div>
                <div class="layer w-100">
                  <h2 class=" cathead text-center m-3">${meal.strMeal}</h2>
                </div>
            </div>
         </div>`


            document.querySelector(".categorymealscope").innerHTML = catmealscope

           
        })






    }

    // end cat meal scope ______________-------------------------















    // get area meals  ************************************
    async getareameals() {
        let areaapi = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        let responcearea = await areaapi.json();
        console.log(responcearea.meals)
        this.displayareameals(responcearea.meals)
        document.querySelectorAll(".area-card").forEach(areameal => {
            areameal.addEventListener('click', () => {
                const areapram = areameal.getAttribute('data-area')
                this.getareascope(areapram)
                document.querySelector(".areameals").classList.add("d-none")
                document.querySelector(".areamealscope").classList.remove("d-none")




            })
        })
    }

    displayareameals(areameal) {
        let areameals = ``
        areameal.forEach(area => {
            ;

            areameals += `  <div class="area-card col-sm-3" data-area=${area.strArea}>
            <div class="text-center"> <i class="text-white fa-solid fa-house-laptop fa-4x"></i></div>
            <h1 class="text-center text-white">${area.strArea}</h1>
         </div>`


            document.querySelector(".areameals").innerHTML = areameals

        }

        )

    }

    //end area meals-----------------------------------

    // get area scope meals*********************************


    async getareascope(area) {
        let areaapi = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
        let responcearea = await areaapi.json()
        console.log(responcearea)
        this.displayareascope(responcearea.meals)
    }





    displayareascope(dataarea) {
        let areamealscope = ``
        dataarea.forEach(areameal => {



            areamealscope += ` <div class="col-lg-3">
        <div class="card-area-scope overflow-hidden m-3" data-id=${areameal.idMeal} >
            <div class="img ">
                <img class=" w-100" src="${areameal.strMealThumb}" alt="">
            </div>
            <div class="layer w-100">
              <h2 class=" cathead text-center m-3">${areameal.strMeal}</h2>
            </div>
        </div>
     </div>`


            document.querySelector(".areamealscope").innerHTML = areamealscope

            document.querySelectorAll(".card-area-scope").forEach(card => {
                card.addEventListener('click',() =>{
                    const mealId =card.getAttribute('data-id')
                    this.getdetailsapi(mealId)
                    document.querySelector(".areamealscope").classList.add("d-none")
                    document.querySelector(".details").classList.remove("d-none")


                })
            })
        })






    }


    // end area scope meals -----------------------------------



    // get ingredmeals ********************************


    async getingredmeals() {
        let ingredapi = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        let responceingred = await ingredapi.json();
        console.log(responceingred.meals)
        this.displayingredmeals(responceingred.meals)

        document.querySelectorAll(".ingred-card").forEach(ingredmeal => {
            ingredmeal.addEventListener('click', () => {
                let ingred = ingredmeal.getAttribute('data-ingred')

                this.getingredscope(ingred)
                document.querySelector(".ingredmeals").classList.add("d-none")
                document.querySelector(".ingredmealscope").classList.remove("d-none")

            })
        })



    }

    displayingredmeals(ingredcall) {
        let ingredmeals = ``
        ingredcall.forEach(ingredient => {
            ingredmeals += `  <div class="ingred-card  overflow-hidden  col-sm-3" data-ingred=${ingredient.strIngredient}  >
                    <div class="text-center"> <i class="text-white fa-solid fa-drumstick-bite fa-4x"></i></div>
                    <h1 class="text-center text-white">${ingredient.strIngredient.split(" ").slice(0, 2).join(" ")}</h1>
                    <p class="text-center text-white">${ingredient.strDescription.split(" ").slice(0, 20).join(" ")}</p>
                  </div>`



            document.querySelector(".ingredmeals").innerHTML = ingredmeals
        });




    }

    //end ingredmeals--------------------------------

    // get ingred scope meals *************************

    async getingredscope(ingred) {
        let ingredapi = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingred}`)
        let responceingred = await ingredapi.json()
        console.log(responceingred.meals)
        this.displayingredscope(responceingred.meals)

    }





    displayingredscope(dataingred) {
        let ingredmealscope = ``
        dataingred.forEach(ingredmeal => {



            ingredmealscope += ` <div class="col-lg-3">
        <div class="card-ingred-scope overflow-hidden m-3" data-id=${ingredmeal.idMeal}  >
            <div class="img ">
                <img class=" w-100" src="${ingredmeal.strMealThumb}" alt="">
            </div>
            <div class="layer w-100">
              <h2 class=" cathead text-center m-3">${ingredmeal.strMeal}</h2>
            </div>
        </div>
     </div>`


            document.querySelector(".ingredmealscope").innerHTML = ingredmealscope

            document.querySelectorAll(".card-ingred-scope").forEach(card => {
                card.addEventListener('click',() =>{
                    const mealId =card.getAttribute('data-id')
                    this.getdetailsapi(mealId)
                    document.querySelector(".ingredmealscope").classList.add("d-none")
                    document.querySelector(".details").classList.remove("d-none")

                })
            })
        })






    }

    // end ingred scope meals-----------------------------



    // get details api

    async getdetailsapi(mealId) {

        let detailsapi = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        let detailsresponse = await detailsapi.json()
        console.log(detailsresponse)
        this.displaydetails(detailsresponse)
    }
    // end details api 



    // display details

    displaydetails(data) {
        let kiro= data.meals[0]
        let res1= data.meals[0].strIngredient1
        let res2= data.meals[0].strIngredient2
        let res3= data.meals[0].strIngredient3
        let res4= data.meals[0].strIngredient4
        let tag1= data.meals[0].strMeasure1
        let tag2= data.meals[0].strMeasure2
        let tag3= data.meals[0].strMeasure3
        let tag4= data.meals[0].strMeasure4
        let tag5= data.meals[0].strMeasure5


        let cartona = `
    <div class="container detealsPage py-4">
    <div class="row ps-3">
        <div class="col-lg-4 text-white">
            <img src="${kiro.strMealThumb}" class="w-100 rounded-3" alt="">
            <h2 class="mt-1">${kiro.strMeal}</h2>
        </div>
        <div class="col-lg-8 text-white">
            <h2 class="fw-bold">Instructions</h2>
            <p>${kiro.strInstructions}</p>

            <p class="fs-3 fw-bold">Area : <span class="fw-medium">${kiro.strArea}</span></p>
            <p class="fs-3 fw-bold">Category : <span class="fw-medium">${kiro.strCategory}</span></p>
            <p class=" fs-3 fw-medium" >Recipes : ${res1}, ${res2} , ${res3} , ${res4}</p>
            
            
            

            <p class=" fs-3 fw-medium" >Tags : ${tag1}, ${tag2} , ${tag3} , ${tag4} ,${tag5} </p>
           
            <ul class="list-unstyled d-flex ingradSrc gap-2">
                <li class="scr"> <a href="${kiro.strSource}" target="_blank" class="text-decoration-none text-white">Source</a></li>
                <li class="yout"><a href="${kiro.strYoutube}" target="_blank" class="text-decoration-none text-white">Youtube</a></li>
            </ul>
        </div>
    </div>

</div>
        `;

        document.querySelector(".details").innerHTML = cartona
    }



    // end display details 



}
let Api = new getapi()




