export class Filter {
    constructor(
        public name: String,
        public selected: Boolean,
        public count: Number,
        public category: String
    ) { }

    toggle() {
        this.selected = !this.selected;
    }

    deselect() {
        this.selected = false;
    }
}