class Card {
    constructor(data, visualizer){
        this.img = data.imgs;
        this.title = data.title;
        this.description = data.description;
        this.id = data.id
        this.visualizer = visualizer;
    }
    printData(){
        this.visualizer.querySelector("h1").innerHTML = this.title;
        this.visualizer.querySelector("p").innerHTML = this.description;
        this.visualizer.setAttribute("data-id", this.id);

        const imgs =  this.img;
        const array = Object.values(imgs);
        this.printImages(array);
        
    }
    printImages(img_array){
        const hero = document.querySelector(".hero")
        for (let i = 0;i < hero.children.length; i++){
            if(i < 2){
                hero.children[i].setAttribute("srcset", img_array[i]);
            } else {
                hero.children[i].setAttribute("src", img_array[1]);
            }
        }
    }
}

export default Card;
