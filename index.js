function makeElement (tagName, content){
    let element = document.createElement(tagName);
    if (content) {
        element.innerHTML = content
    }
    return element

}

