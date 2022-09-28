// console.log('%c HI', 'color: firebrick')

// document.addEventListener("DOMContentLoaded", () => {
//     loadImages();
//     loadBreeds();
// })

// function loadImages() {
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// fetch(imgUrl)
// .then(res => res.json())
// .then(data => {
//     data.message.forEach(image => addImage(image))
// })
// }

// function addImage(dogPicUrl) {
//     const container = document.querySelector('#dog-image-container')
//     const newImageEl = document.createElement("img")
//     newImageEl.src = dogPicUrl
//     container.appendChild(newImageEl)
// }


// function loadBreeds() {
//     const breedUrl = 'https://dog.ceo/api/breeds/list/all'
//     fetch(breedUrl)
//     .then(res => res.json())
//     .then(dogData => renderBreeds(dogData))
// }

// function renderBreeds(breeds) {
//     const ul = document.getElementById("dog-breeds")

//     for(breeds in breeds.message) {
//         const li = document.createElement("li")
//         li.textContent = breeds
//         ul.append(li)
//         li.addEventListener("click", e => {
//             li.style.color = "white"
//         })
//     }
// }



// document.addEventListener("DOMContentLoaded", () => {
//     const dogUrl = ("https://dog.ceo/api/breeds/image/random/4")
//     fetch(dogUrl)
//     .then(res => res.json())
//     .then(data => data.message.forEach(renderDogs))

//     function renderDogs(dogs) {
//         let img = document.createElement("img")
//         let dogImage = document.getElementById("dog-image-container")
//         img.src = dogs
//         dogImage.appendChild(img)
//         console.log(img)
//     }
// })


// document.addEventListener("DOMContentLoaded", () => {
//     const breedUrl = ("https://dog.ceo/api/breeds/list/all")
//     fetch(breedUrl)
//     .then(res => res.json())
//     .then(data => {
//         for(const key in data.message){
//             createList(key)
//         }
//         })

//     //console.log(data)
//     function createList(breeds) {
//         let li = document.createElement("li")
//         let ul = document.getElementById("dog-breeds")
//         li.textContent = breeds
//         li.addEventListener("click", (e) => {
//             li.style.backgroundColor = "green"
//         })
//         li.addEventListener("click", (e) => {
//             li.style.color = "red"
//         })

//         ul.appendChild(li)
//     }
// })


console.log('%c HI', 'color: firebrick')

// document.addEventListener("DOMContentLoaded", () => {
//     //loadImages(); 
//     //loadBreeds();
// })

// function loadImages() {
//     const imageUrl = "https://dog.ceo/api/breeds/image/random/4"
//     fetch(imageUrl)
//     .then(res => res.json())
//     .then(data => {
//         data.message.forEach(image => addImage(image))
//     })

//     function addImage()
// }



const imageUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener("DOMContentLoaded", loadPage)

function loadPage() {
    const dogImageContainer = document.getElementById("dog-image-container");
    const dogUl = document.getElementById("dog-breeds");

fetch(imageUrl)
    .then(res => res.json())
    .then(data => renderImages(data))

function renderImages(images) {

    //iterate through the array
    images.message.forEach((img) => {
    //create element
    const dogImage = document.createElement("img");
    //put picture in the element
    dogImage.src = img;
    //append the picture tot he container
    dogImageContainer.append(dogImage)
    console.log(img)
});
}
const breedUrl = "https://dog.ceo/api/breeds/list/all"
fetch(breedUrl)
.then(res => res.json())
.then(data => renderBreeds(data))

function renderBreeds(breeds) {

    //make a for in loop to iterate through the array "sido can be anything you want?"
    for (sido in breeds.message) {
        const newBreedListItem = document.createElement("li")
        newBreedListItem.textContent = breeds;
        dogUl.append(newBreedListItem)
        console.log(breeds)

        newBreedListItem.addEventListener("click", e => {
            newBreedListItem.style.color = "blue"
        })
}

}
}
