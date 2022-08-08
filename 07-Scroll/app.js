/*======== set date ========= */
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

/*======== close Links ========= */
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function(){
    // linksContainer.classList.toggle('show-links')
    const containerHeit = linksContainer.getBoundingClientRect().height;
    const linksHeit = links.getBoundingClientRect().height;
    if(containerHeit == 0){
        linksContainer.style.height = `${linksHeit}px`;
    }else{
        linksContainer.style.height = 0;

    }
})

/*======== fixed navbar ========= */
const navBar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navBar.classList.add('fixed-nav')
    }else{
        navBar.classList.remove('fixed-nav')
    }
// set back to top link
    if(scrollHeight > 500){
        topLink.classList.add('show-link')
    }else{
        topLink.classList.remove('show-link');
    }
})

/*======== smooth scroll ========= */
/*we can scroll with id but it does not show the title which is hidden behind die "navfixed bar"
the second drawback with only id scrolling is with small screen, when by click the list open but it can not automatically 
close them. 
so now this JS code it can show the title and also close the "nav-toggle list" by only scrolling
*/

const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach(link => {
    link.addEventListener('click', (e) =>{
        // prevent default
        e.preventDefault();
    
    const id = e.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    // console.log(element)
        
    const navHeight = navBar.getBoundingClientRect().height
    const containerHeight = linksContainer.getBoundingClientRect().height
    const fixedNav = navBar.classList.contains('fixed-nav')
    // console.log(fixedNav)
    let position = element.offsetTop - navHeight

    if(!fixedNav){
        position = position - navHeight
    }
    if(navHeight > 82){
        position = position + containerHeight;
        console.log(containerHeight)
    }
    window.scrollTo({
        left:0,
        top: position,
    })
    // close
    linksContainer.style.height = 0
})
});
