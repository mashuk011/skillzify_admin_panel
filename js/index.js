
//   --------------------------- our js code


const NavList =  document.querySelectorAll('.nav-li-box-main');

for(let i = 0; i < NavList.length; i++){
    NavList[i].addEventListener("click", function(){

        for(let j = 0; j < NavList.length; j++){

            NavList[j].classList.remove('navliactive');
        
    }


            NavList[i].classList.toggle('navliactive');

            
        
    })

    
    
}


// __________________________________________________

const courseDetBtn =  document.querySelectorAll('.coursetext');
const courseTable =  document.querySelector('.course-popup-det-comp');
const coursePopupcloseBtn =  document.querySelector('.close-popup-btn');


for(let k = 0; k < courseDetBtn.length; k++){

    courseDetBtn[k].addEventListener("click", function(){

        courseTable.classList.add('coursedetactive');
        console.log('====================================');
        console.log("hello World");
        console.log('====================================');
        
    })
    
}

coursePopupcloseBtn.addEventListener("click", function(){

    courseTable.classList.remove('coursedetactive');
    
})

// ____________________________________

const viewCourseBtn =  document.querySelectorAll('.view-text-btn');
const closeBtn =  document.querySelector('.close-popup-btn');
const coarseTable = document.querySelector('.course-popup-det-comp');

for(let i = 0; i < viewCourseBtn.length; i++){

    viewCourseBtn[i].addEventListener("click", function(){

        coarseTable.classList.add('coursedetactive')
        
    })
    
}

closeBtn.addEventListener("click", function(){

    courseTable.classList.remove('coursedetactive');
    
})


// ...........................................................

    


