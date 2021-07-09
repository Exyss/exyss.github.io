//Set scroll button hide/show function 
toTop = document.getElementById("top-btn");

window.onscroll = () => {

    //document.body.scrollTop   --->    Safari
    //document.documentElement.scrollTop    -->     Other browsers
    saf_scrollbar = document.body.scrollTop;
    oth_scrollbar = document.documentElement.scrollTop;
    
    //Show only after scrolling down 100px
    if (saf_scrollbar > 100 || oth_scrollbar > 100) {
        toTop.style.display = "block";

        //add fade-in effect to button
        if(saf_scrollbar < 200 || oth_scrollbar < 200){

            //check if the browser is Safari
            if(saf_scrollbar > 0){
                toTop.style.opacity = 1-(200-saf_scrollbar)/100;
            }
            else{
                toTop.style.opacity = 1-(200-oth_scrollbar)/100;
            }
        }
    }
    else {
        toTop.style.display = "none";
    }
    
};

function goToTop(){
    gsap.to(window, {
        duration: 1.5,
        scrollTo: {
            y: 0
        },
        ease: "power2"
    });
}

function goToContacts(){
    gsap.to(window, {
        duration: 1.5,
        scrollTo: {
            y: "max"
        },
        ease: "power2"
    });
}