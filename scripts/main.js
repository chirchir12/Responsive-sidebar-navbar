const navSlide = () => {
    const bugger = document.querySelector('.bugger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');
    
    
    bugger.addEventListener('click',()=> {
        //toggles nav
        nav.classList.toggle('nav-active');
        
        //animate 
    navlinks.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation='';
        }else{
        link.style.animation=`navlinkSlide 0.5s ease forwards ${index/7+0.4}s`;
            }
    });
    bugger.classList.toggle('toggle')
    });
    
};
navSlide();
