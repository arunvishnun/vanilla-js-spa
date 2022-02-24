import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";

const navigate = (url) => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes  = [
        { path: '/', view: Dashboard },
        { path: '/posts', view: Posts },
        { path: '/settings', view: Settings },
    ]

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
    
    // Set default route / in this case
    if(!match) {
        return {
            route: routes[0],
            isMatch: true
        }
    }
    const view = new match.route.view()
    document.querySelector('#app').innerHTML = await view.getHtml();
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigate(e.target.href);
        }
    })
    router()
})