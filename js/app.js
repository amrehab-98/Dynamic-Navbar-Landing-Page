/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
// adding navbar items for already existing sections.
const sections = document.querySelectorAll('section');
const main = document.querySelector('main');
const navList = document.querySelector('#navbar__list');
const addSection = document.querySelector('#addsection');

for(let i=1; i<=sections.length;i++) {
    const newNavItem = document.createElement('li');
    newNavItem.id='sec'+i;    
    newNavItem.innerHTML = `<a class="menu__link" href="#section${i}">Section ${i}</a>`;
    navList.appendChild(newNavItem);
}


// Add class 'active' to section and nav-bar item when near top of viewport
document.addEventListener('scroll', function() {
 
    const sections = document.querySelectorAll('section');
   
    for (const section of sections) {
  
        const bounding = section.getBoundingClientRect();
        const number = section.id.slice(7);
        const itemInView= document.querySelector('#sec'+number);
        if (bounding.top > -250 && bounding.top < 350) {
            
            section.classList.add('your-active-class');
            
            itemInView.classList.add('your-active-item');
        }
        else {
            section.classList.remove('your-active-class');
            itemInView.classList.remove('your-active-item');
        }
    }
});

// selections and initialization


let sectionCount = 5;

// when add section button is clicked.

addSection.addEventListener('click', function() {
    // create section, innerDiv , and content paragraphs.
    const section = document.createElement('section');
    const innerDiv = document.createElement('div');
    const p1= document.createElement('p');
    p1.textContent= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.'
    const p2= document.createElement('p');
    p2.textContent= 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.'

   
    // set id and data attributes for the section
    section.id= 'section'.concat(sectionCount);
    section.dataset.nav= 'section '.concat(sectionCount);
    // create heading
    const h = document.createElement('h2');
    // append it to section
    innerDiv.appendChild(h);
    innerDiv.appendChild(p1);
    innerDiv.appendChild(p2);
    section.appendChild(innerDiv);
    // set its text content
    h.textContent = 'Section '.concat(sectionCount);
    //add class to innerDiv
    const newNavItem = document.createElement('li');
    newNavItem.id='sec'+sectionCount;    
    newNavItem.innerHTML = `<a class="menu__link" href="#${section.id}">${h.textContent}</a>`;
    innerDiv.classList.add('landing__container');

    // append section to main tag
    main.appendChild(section);
    // append to navbar
    navList.appendChild(newNavItem);
    // increment section count
    sectionCount++;
});