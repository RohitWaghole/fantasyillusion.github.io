
// IMAGE GALLERY

const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1,2,19,4,5,6,7,8,9,10,11,12,13,14,15,16,3,17,20,21,22,23,24,25,18];
const selectedIndex = null;

imageIndexes.forEach(i =>{
    const image = document.createElement('img');
    image.src = `photos/${i}.png`;
    image.alt = `img`;
    image.classList.add('galleryImg');

    image.addEventListener('click',()=>{
        // popup stuff
        popup.style.transform = `translateY(0)`;
        selectedImage.src = `photos/${i}.png`;
        selectedImage.alt = `img`;

    })


    gallery.appendChild(image);
})

popup.addEventListener('click',()=>{
    popup.style.transform = `translateY(-100%)`;
    popup.src = '';
    popup.alt = '';
})
