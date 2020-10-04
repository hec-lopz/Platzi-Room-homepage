class Slider{
    constructor(config){
        this.id_reader = config.id_reader;
        this.items_array = config.items;
    }
    add1 = (n) => n + 1;
    subtract1 = (n) => n - 1;
    findItem = (arr, id) => arr.filter(el => Object.values(el).includes(id));
    toggleShownItem (math) {
        let id = parseInt(this.id_reader.id);
        let item;
        if( math(id) > this.items_array.length) {
            id = 1;
        } else if(math === this.subtract1 && id === 1) {
            id = this.items_array.length;
        } else {
            id = math(id);
        }
        item = this.findItem(this.items_array, id);
        debugger
        item[0].printData();
    }
}

export default Slider;