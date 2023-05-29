const menuItems = document.querySelectorAll(".menu-item");



const messges = document.querySelector(".right .messeges");
const messges_count = document.querySelector(".messges-count");


const message_search= document.getElementById("message-search");
const messege = document.querySelectorAll(".right .messeges .message");



const messageSearch = () =>{
    const val = message_search.value.toLowerCase();
    messege.forEach(item =>{
        let name = item.querySelector("h6").textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            item.style.display="flex"
        }
        else{
            item.style.display="none"

        }
    })
}

message_search.addEventListener("keyup",messageSearch)



const removeActive = () => {
    menuItems.forEach(item => {
        item.classList.remove("active")

    })
}
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        removeActive();
        item.classList.add("active");

        if (item.id == "notifications") {
            document.querySelector(".notificatio-popup").style.display = "block"
            document.querySelector("#notifications .noti-count").style.display = "none";
        }
        else {
            document.querySelector(".notificatio-popup").style.display = "none";

        }
    })

});

messages.addEventListener("click",()=> {
    messges_count.style.display= "none"
    messges.style.boxShadow = "0 0 1rem var(--color-primary)";
    setTimeout(()=>{
        messges.style.boxShadow = "";

    },2000)
  
        messges.classList.add("shake-element");
        setTimeout(()=>{
            messges.classList.remove("shake-element");
    
        },1000)


})
