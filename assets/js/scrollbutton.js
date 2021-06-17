//Set scroll button hide/show function 
scrollbtn = document.getElementById("scrollbutton");

window.onscroll = () => {

    //document.body.scrollTop   --->    Safari
    //document.documentElement.scrollTop    -->     Other browsers
    saf_scrollbar = document.body.scrollTop;
    oth_scrollbar = document.documentElement.scrollTop;
    
    //Show only after scrolling down 100px
    if (saf_scrollbar > 100 || oth_scrollbar > 100) {
        scrollbtn.style.display = "block";

        //add fade-in effect to button
        if(saf_scrollbar < 200 || oth_scrollbar < 200){

            //check if the browser is Safari
            if(saf_scrollbar > 0){
                scrollbtn.style.opacity = 1-(200-saf_scrollbar)/100;
            }
            else{
                scrollbtn.style.opacity = 1-(200-oth_scrollbar)/100;
            }
        }
    }
    else {
        scrollbtn.style.display = "none";
    }
    
};

function goToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}