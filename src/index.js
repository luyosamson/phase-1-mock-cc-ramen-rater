// write your code here
console.log('hi')

const baseUrl = 'http://localhost:3000'

const ramenMenu = document.querySelector('#ramen-menu')

fetch(`${baseUrl}/ramens`)
    .then(res => res.json())
    .then(ramenObjects => {
        console.log(ramenObjects)
        ramenObjects.forEach(ramen => renderRamen(ramen))
    }
)

function renderRamen(ramen) {
    // divs
    const newImage = document.createElement('img')
    
    // append the images to the menu
    ramenMenu.appendChild(newImage)

     // create new image tag
    newImage.src = ramen.image

    // add click event listener to img
    newImage.addEventListener('click', () => ramenClick(ramen))
}

function ramenClick(ramen) {
    // the div where the image will go to
    const container = document.querySelector('#ramen-detail')

    // where the image will be populated
    const imgPlaceholder = container.querySelector('.detail-image').src = ramen.image

    // target the h2 for the name
    const h2 = container.querySelector('.name').innerText = ramen.name

    // target the h3 for restaurant name
    const h3 = container.querySelector('.restaurant').innerText = ramen.restaurant

    // rating
    const rating = document.querySelector('#rating-display').innerText = ramen.rating

    // comment
    const comment = document.querySelector('#comment-display').innerText = ramen.comment
}

// form interactivity
const newRamenForm = document.querySelector('#new-ramen')
newRamenForm.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()

    // make a new ramen obj
    const newRamen = {}

    // grab all the other details: name, restaurant, image, rating and comment
    newRamenForm.name = e.target.name.value
    newRamenForm.restaurant = e.target.restaurant.value
    newRamenForm.image = e.target.image.value
    newRamenForm.comment = e.target['new-comment'].value

    // plug the data into the new ramen obj
    renderRamen(newRamenForm)

    // clear the form
    newRamenForm.reset()
}