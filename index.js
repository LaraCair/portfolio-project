function setButtonBehavior(selector, event, callback) {
    const elem = document.querySelector(selector);
    elem.addEventListener(event, () => callback(selector));
}

function setRedirect(selector) {
    console.log(document.location)

    document.location = selector === '.mainPage' ?
     '/' : `/pages/${selector.replace(/\.|#/g, '')}.html`;
}
    
   
setButtonBehavior('.mainPage','clic',setRedirect);
setButtonBehavior('.projects','click',setRedirect);
setButtonBehavior('.contacts','click',setRedirect);