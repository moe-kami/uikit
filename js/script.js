window.onscroll= function stickyHeader() {
    if (window.scrollY >= 100) {
        // Sticky header
        document.getElementById("stickyHeader").classList.add("header-bg");
        // Scroll to top button
        document.getElementById("toTop").classList.add("show-button");
    }else{
        // Sticky header
        document.getElementById("stickyHeader").classList.remove("header-bg"); 
        // Scroll to top button
        document.getElementById("toTop").classList.remove("show-button");
    }
};

