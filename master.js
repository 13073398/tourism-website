
//Toogle contol
let themeControl=document.querySelector(".control");
let themeControlToogle=document.querySelector(".control .toogle");
let bodyScroll=document.body
let hero_section=document.querySelector(".hero_section ");
let Events=document.querySelector(".events")
let Events_articel_title=document.querySelector(".events .contaniner .title h2")
let upcoming=document.querySelector(".upcoming")
let upcoming_artice_title=document.querySelector(".upcoming .contaniner .article h2");
let About=document.querySelector(".about")
let About_article_title=document.querySelector(".about .text h2");
let contributors=document.querySelector(".contributors");
let contributors_article_title=document.querySelector(".contributors .section_title h2");
let contact_us=document.querySelector(".contact_us");
let contact_us_article_title=document.querySelector(".contact_us .title h2");
let menue_ul_items=document.querySelectorAll(".header .menue ul li");
let menue_ul_items_full=document.querySelectorAll(".header .nav ul li")

let events_section=document.querySelector(".events");
let explore_section=document.querySelector(".explore");
let upcoming_section=document.querySelector(".upcoming");
let about_section=document.querySelector(".about");
let contributors_section=document.querySelector(".contributors");
let contact_us_section=document.querySelector(".contact_us")
let section_arry=[events_section,explore_section,upcoming_section,about_section,contributors_section,contact_us_section,hero_section]



themeControl.onclick=function(){
    if(themeControlToogle.classList.contains("left")){
        //Light
        themeControlToogle.classList.add("right");
        themeControlToogle.classList.remove("left");
        bodyScroll.classList.add("scrollbar-custom-light");
        upcoming.classList.add("light");
        Events_articel_title.classList.add("light");
        Events.classList.add("light");
         upcoming_artice_title.classList.add("light");
         About.classList.add("light")
         About_article_title.classList.add("light");
         contributors.classList.add("light");
         contributors_article_title.classList.add("light");
        contact_us.classList.add("light");
        contact_us_article_title.classList.add("light")
        
        
    }else if(themeControlToogle.classList.contains("right")){
        //Dark
        themeControlToogle.classList.add("left");
        themeControlToogle.classList.remove("right")
        bodyScroll.classList.remove("scrollbar-custom-light")
        bodyScroll.classList.add("scrollbar-custom-dark")
        upcoming.classList.remove("light")
        upcoming_artice_title.classList.remove("light")
        Events.classList.remove("light")
        Events_articel_title.classList.remove("light")
        About.classList.remove("light")
        About_article_title.classList.remove("light");
        contributors.classList.remove("light")
        contributors_article_title.classList.remove("light");
        contact_us.classList.remove("light");
        contact_us_article_title.classList.remove("light")
    }
   
    
}
// start Menue in media Qurey

//open And close Menue in media Qurey
let menue_par=document.querySelector(".menue");
let menue_par_details=document.querySelector(".menue .menue_details");
menue_par.onclick=function(){
    if(menue_par_details.classList.contains("dis")){
        menue_par_details.classList.remove("dis")
    }else{
        menue_par_details.classList.add("dis")
}
}
//make actice class on selected item at open And close Menue in media Qurey
let menue_par_details_item=document.querySelectorAll(".menue .menue_details ul li");
menue_par_details_item.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        menue_par_details_item.forEach((ele)=>{
            ele.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
    })
})

// End Menue in media Qurey
//function to change scroll backgroun on load
window.onload=function(){
    bodyScroll.classList.add("scrollbar-custom-dark")
}

//Function to  make scroll on the section when i press on  header menue in media query
menue_ul_items.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        for(let i=0;i<section_arry.length;i++){
            if(section_arry[i].id===e.currentTarget.id){
                section_arry[i].scrollIntoView({behavior: 'smooth', block: 'start'})
                console.log(section_arry[i])
            }
        }
    })
})
//Function to  make scroll on the section when i press on  header menue in full screen
menue_ul_items_full.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        for(let i=0;i<section_arry.length;i++){
            if(section_arry[i].id===e.currentTarget.id){
                section_arry[i].scrollIntoView({behavior: 'smooth', block: 'start'})
                console.log(e.currentTarget.id)
            }
        }
    })
})

//Function to  put select class on nav element when i select it
menue_ul_items_full.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        menue_ul_items_full.forEach((ele)=>{
            ele.classList.remove("select")
        })
        e.currentTarget.classList.add("select")
    })
})
//put select class on nav menue within scroll  page 
//* to get Height of the  before element height
let hero_section_offset_height_before=hero_section.offsetTop;
let events_offset_height_before=Events.offsetTop;
let explore_offset_height_before=explore_section.offsetTop
let  upcoming_offest_height_before_area=upcoming.offsetTop;
let about_offest_height_before=About.offsetTop;
let contributors_offset_Height_before=contributors.offsetTop;
let contact_us_offset_Height_before=contact_us.offsetTop;

//*the height of the page  

this.onscroll=function(){
    let ScrollwindowHeight=this.pageYOffset;
    console.log( ScrollwindowHeight)
    if(ScrollwindowHeight>hero_section_offset_height_before){
        menue_ul_items_full.forEach((ele)=>{
            ele.classList.remove("select")
        })
        document.querySelector(".nav ul #hero").classList.add("select")
    }
    
    if(ScrollwindowHeight>events_offset_height_before ){
        menue_ul_items_full.forEach((ele)=>{
            ele.classList.remove("select")
        })
        document.querySelector(".nav ul #events").classList.add("select")
    }
    if(ScrollwindowHeight>explore_offset_height_before){
        menue_ul_items_full.forEach((ele)=>{
            ele.classList.remove("select")
        })
        document.querySelector(".nav ul #explore").classList.add("select")
       
    }
    
    if(ScrollwindowHeight>upcoming_offest_height_before_area){
        menue_ul_items_full.forEach((ele)=>{
            ele.classList.remove("select")
        })
        document.querySelector(".nav ul #upcoming").classList.add("select")
       
    }

    if(ScrollwindowHeight>about_offest_height_before){
        menue_ul_items_full.forEach((ele)=>{
            ele.classList.remove("select")
        })
        document.querySelector(".nav ul #about").classList.add("select")
       
    }

    if(ScrollwindowHeight>contributors_offset_Height_before){
        menue_ul_items_full.forEach((ele)=>{
            ele.classList.remove("select")
        })
        document.querySelector(".nav ul #contributors").classList.add("select")
       
    }

    if(ScrollwindowHeight>contact_us_offset_Height_before){
        menue_ul_items_full.forEach((ele)=>{
            ele.classList.remove("select")
        })
        document.querySelector(".nav ul #contact_us").classList.add("select")
       
    }

    

  
  
}

