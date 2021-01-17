const addRecipe = async () =>{
    const recipeName = document.getElementById("recipenameshared")
    const image = document.getElementById("pictureLink")
    const ingredients = document.getElementById("recipeList")
    
    const options ={
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
            responseType: "json",
        },
        body: JSON.stringify({
            recipeName: recipeName.value,
             image: image.value,
             ingredients: ingredients.value,
           
        })
    } 

    const response = await fetch("https://chefsiaryserver.herokuapp.com/api/add/recipe", options);
    const resData = await response.json();
    console.log(resData);
}

const sharedform = document.getElementById("sharedform");
sharedform.addEventListener("submit",(event)=>{
    event.preventDefault();
    addRecipe();
    alert("Recipe Added.")
    window.location.replace('./sharedrecipe.html')
})