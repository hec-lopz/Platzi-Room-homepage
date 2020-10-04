import Card from "./modules/Card.js"
import Slider from "./modules/Slider.js"
const header = document.querySelector("header");
const burger = header.querySelector('.burger-icon');
const close_btn = header.querySelector('.close-btn');
const nav =  header.querySelector(".nav-box");
const overlay = document.querySelector(".overlay");
const slider_controls = document.querySelector(".slider-btn");
const slider_backwards = slider_controls.querySelector(".backwards");
const slider_forward = slider_controls.querySelector(".forward");
const main_card = document.querySelector('.main-card')


const showNav = () => {
    nav.classList.add("active");
    overlay.classList.add("active")
}
const hideNav = () => {
    nav.classList.remove("active");
    overlay.classList.remove("active")
}


const cards_data = [
    {
        id: 1, 
        title: "Discover innovative ways to decorate",
        description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        imgs: {desktop: "./images/desktop-image-hero-1.jpg", mobile: "./images/mobile-image-hero-1.jpg"}
    },
    {
        id: 2, 
        title: "We are available all across the globe",
        description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        imgs: {desktop: "./images/desktop-image-hero-2.jpg", mobile: "./images/mobile-image-hero-2.jpg"}
    },
    {
        id: 3, 
        title: "Manufactured with the best materials",
        description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        imgs: {desktop: "./images/desktop-image-hero-3.jpg", mobile: "./images/mobile-image-hero-3.jpg"}
    }
];
const cards = cards_data.map(item => new Card(item, main_card))



const slider_config = {
    id_reader: main_card.dataset,
    items: cards,
    buttons: {backwards: slider_backwards, forward: slider_forward}
}
const new_slider = new Slider(slider_config);


burger.addEventListener("click", showNav)
close_btn.addEventListener("click", hideNav)
overlay.addEventListener("click", hideNav)

slider_backwards.addEventListener('click', () => new_slider.toggleShownItem(new_slider.subtract1))
slider_forward.addEventListener('click', () => new_slider.toggleShownItem(new_slider.add1))
document.addEventListener('keydown', (e) => {
    if(e.code === "ArrowLeft"){
        new_slider.toggleShownItem(new_slider.subtract1)
    } else if (e.code === "ArrowRight"){
        new_slider.toggleShownItem(new_slider.add1)
    }
})