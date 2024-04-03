
document.addEventListener('DOMContentLoaded', startApp);
const gallery = document.querySelector('#gallery');

const getImages = images => new Promise(resolve => {
    resolve(images);

});

function startApp() {
    
    GetAllImage();

}

const GetAllImage = async() => {
    const key = 'u6ir3L_bapTG7aQvx21UtJMuskHOyH48oS1HwIglFvk';
    const url = `https://api.unsplash.com/photos/random?count=20&client_id=${key}`;

    try {
        const resp = await fetch(url);
        const res = await resp.json();
        const images = await getImages(res);
        showImage(images);
    } catch (error) {
        console.log(error);
    }
}


const showImage = images => {
    console.log(images);
    images.forEach(image => {
        const { alt_description, urls:{thumb} } = image

    const card = document.createElement('DIV');
        card.classList.add('card');

    const img = document.createElement('IMG');
        img.classList.add('card__image');
        img.src = `${thumb}`
        img.alt = `${alt_description}`;

    card.appendChild(img);
    gallery.appendChild(card);

    });

    
}
showImage();
