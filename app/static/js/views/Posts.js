import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle = 'Posts'
    }

    async getHtml() {
        return `
            <h2>Posts</h2>
            <p> you are seeing all the posts</p>
        `
    }


}