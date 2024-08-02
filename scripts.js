/* this block of code, grabs each nav option and its child, called option.*/
const op1 = document.querySelector('.navOp1');
const option1 = op1.querySelector('.option');
const op2 = document.querySelector('.navOp2');
const option2 = op2.querySelector('.option');
const op3 = document.querySelector('.navOp3');
const option3 = op3.querySelector('.option');
const op4 = document.querySelector('.navOp4');
const option4 = op4.querySelector('.option');
const op5 = document.querySelector('.navOp5');
const option5 = op5.querySelector('.option');
const op6 = document.querySelector('.navOp6');
const option6 = op6.querySelector('.option');
/* the sidebar functions almost the same as the dropdown. sideDrop is the parent and sidebar is the child*/
const sideDrop = document.querySelector('.withDropDown');
const sideBar = sideDrop.querySelector('.sideBar');

/* adds an event listener for each navoption(navOp..) and its child grabbed(option..). when your mouse enters the child div, 
the dropdown will not close unless you leave the parent div.*/

option1.addEventListener('mouseenter',showDropDown);
op1.addEventListener('mouseleave',hideDropDown);
option2.addEventListener('mouseenter',showDropDown);
op2.addEventListener('mouseleave',hideDropDown);
option3.addEventListener('mouseenter',showDropDown);
op3.addEventListener('mouseleave',hideDropDown);
option4.addEventListener('mouseenter',showDropDown);
op4.addEventListener('mouseleave',hideDropDown); 
option5.addEventListener('mouseenter',showDropDown);
op5.addEventListener('mouseleave',hideDropDown); 
option6.addEventListener('mouseenter',showDropDown);
op6.addEventListener('mouseleave',hideDropDown);
/* event listner for the only*/
sideDrop.addEventListener('mouseenter',showSideBar);
sideDrop.addEventListener('mouseleave',hideSideBar);

function showDropDown(){
    /* options 1-4 all have a dropdown. the if statement simply checks if the element hovered over has a dropdown*/
    if(this !== option5 & this !== option6 )
    {
        /*since the eventlistener only targets the child div (option..), i used .nextelementsibling 
         to grab the class dropdown div */
        let drop = this.nextElementSibling.nextElementSibling.nextElementSibling;
        /* below, begins to trigger transition*/
        drop.style.top='40px';
        drop.style.opacity = '1';
        drop.style.visibility = 'visible';
        drop.style.transition = 'top .2s ease,opacity .3s ease-in-out';
    }
    /* determines the width of the underline for that navOption */
    let underLine = this.nextElementSibling;
    const option = this;
    const wid = option.offsetWidth+28;
    underLine.style.width = wid + "px";
    underLine.style.pointerEvents = 'auto';
    underLine.style.opacity = '1';
}
function hideDropDown(){
    if(this !== op5 & this !== op6 ){
        let drop = this.querySelector('.dropDown');
        drop.style.top = '-10px';
        drop.style.opacity = '0';
        drop.style.visibility = 'hidden';
        drop.style.transition = 'top 0.2s ease-out,opacity 0.2s ease-out, visibility 0s 0.3s';
    }

    let underLine = this.querySelector('.underline');
    underLine.style.pointerEvents = 'none';
    underLine.style.opacity = 0;
}

function showSideBar(){
    sideBar.style.pointerEvents = 'auto';
    sideBar.style.left = '218px';
    sideBar.style.opacity = '1';
    sideBar.style.visibility = 'visible';
    sideBar.style.transition = 'left 0.3s,opacity 0.3s ease,visibility 0.1s ease';
}
function hideSideBar(){
    sideBar.style.left = '60px';
    sideBar.style.opacity = '0';
    sideBar.style.visibility = 'hidden';
    sideBar.style.transition = 'left 0.3s,opacity 0.3s ease,visibility 0.1s ease';
    sideBar.style.pointerEvents = 'none';
}

/* gets the div of each side image on the far right of the screen 
and then hides the parent of that div. (the block that appear when hovered) */
const sideImage1 = document.querySelector('.sideImage1');
const sideImageBlock = sideImage1.closest('.sideImageBlock');
sideImageBlock.style.visibility = 'hidden';
sideImage1.style.visibility = 'visible';
const sideImage2 = document.querySelector('.sideImage2');
const sideImageBlock2 = sideImage2.closest('.sideImageBlock2');
sideImageBlock2.style.visibility = 'hidden';
sideImage2.style.visibility = 'visible';
const sideImage3 = document.querySelector('.sideImage3');
const sideImageBlock3 = sideImage3.closest('.sideImageBlock3');
sideImageBlock3.style.visibility = 'hidden';
sideImage3.style.visibility = 'visible';

/* makes an event listner for all 3 social media links */
sideImage1.addEventListener('mouseenter',showSideBlock);
sideImage1.addEventListener('mouseleave',hideSideBlock);
sideImage2.addEventListener('mouseenter',showSideBlock);
sideImage2.addEventListener('mouseleave',hideSideBlock);
sideImage3.addEventListener('mouseenter',showSideBlock);
sideImage3.addEventListener('mouseleave',hideSideBlock);

function showSideBlock(){
    /* grabs whatever div was hovered over and its parent. */
    let sideImage = this;
    let sideImageBl = this.parentElement;
    sideImage.style.backgroundColor = 'white';

    /* In order to change the color of an image to the desired choice.
      I grab an image, that is orginally its iconic color, and then filter to white.
      once hovered over, I simply remove the filter attribute. */

    /* The if statement checks to see if the div hovered over is the pintrest one.
    since the pintrest logo has a slightly different structure to it, 
    the immediate circle surrouning the p is a diffrent color then the p.*/
    if(sideImage.classList.contains('sideImage3')){
        let pinImg = sideImage.querySelector('.pintrestLogo');
        let icon = pinImg.querySelector('img');
        pinImg.style.backgroundColor =  'rgb(189,8, 28)';
        icon.style.filter = 'brightness(0) invert(1)';
    }
    else{
        let theImg = sideImage.querySelector('img');
        theImg.style.filter = 'none';
    }

    sideImageBl.style.visibility = 'visible';
    sideImageBl.style.left = '93.5%';
    sideImageBl.style.transition = 'left 0.4s,visibility 0.2s ease';
}
function hideSideBlock(){
    const sideImage = this;
    const sideImageBl = this.parentElement;
    if(sideImage.classList.contains('sideImage3')){
        let pinImg = sideImage.querySelector('.pintrestLogo');
        pinImg.style.backgroundColor =  'white';
        let icon = pinImg.querySelector('img');
        icon.style.filter = 'none';
    }
    else{
        const theImg = sideImage.querySelector('img');
        theImg.style.filter = 'brightness(0) invert(1)';
    }
    
    sideImage.style.backgroundColor = 'rgb(201, 196, 196)';
    sideImageBl.style.visibility = 'hidden';
    sideImageBl.style.left = '99%';
    sideImageBl.style.transition = 'left 0.4s,visibility 0.2s ease';
}



