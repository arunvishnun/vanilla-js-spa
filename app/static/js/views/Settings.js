import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle = 'Settings'
    }

    async getHtml() {
        return `
            <h2>Settings</h2>
            <p>Admin setting configurations</p>
        `
    }


}