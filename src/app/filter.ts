// export class Filter {
//     top40 = false;
//     favorite = false;
//     specialty = "";
//     degree = [];
//     totalSize = 0;
//     FirstName = "";
// }

export class Filter {

    constructor(
        public name: String,
        public selected: Boolean,
        public count: Number,
        public category: String
    ) {}
    
    toggle(){
        this.selected = !this.selected;
    }

    deselect() {
        this.selected = false;
    }
}