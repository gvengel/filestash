import { createElement } from "../lib/skeleton/index.js";

import "../components/breadcrumb.js";

export default function(render) {
    const currentPath = decodeURIComponent(location.pathname).replace(new RegExp("/view"), "");
    const $page = createElement(`
        <div class="component_page_filespage">
            <div is="component-breadcrumb" path="${currentPath}" animateOut="test"></div>
            <div class="page_container">
                viewerpage - TODO
            </div>
        </div>
    `);
    render($page);
}
