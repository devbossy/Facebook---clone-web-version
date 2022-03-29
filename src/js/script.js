/**
     * @param {string} element
     */
 function openNav(element) {
    let content = document.querySelector(element).style.display;
    if(content == 'block')
        $(element).slideUp();
    else {
        $(element).slideDown();
    }
}

document.querySelector('.story-wrapper').addEventListener('scroll', () => {
    let scroll = document.querySelector('.story-wrapper').scrollLeft;
    if(scroll > 0) {
        $('#scrollLeft').show();
    } else {
        $('#scrollLeft').hide();
    }
    if(scroll >= 355) {
        $('#scrollRight').hide();
    } else {
        $('#scrollRight').show();
    }
});
/**
 * 
 * @param {string} element 
 * @param {string} to 
 */
function scrollElement(element, to = 'right') {
    if(to == 'right') {
        document.querySelector(element).scrollLeft += 60;
    }
    if(to == 'left') {
        document.querySelector(element).scrollLeft -= 60;
    }
}