
import LocomotiveScroll from 'locomotive-scroll';


const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    mobile: true,
    
});
scroll.destroy();
scroll.init();
