const name = document.querySelector("#name");
const email = document.querySelector("#email");
const nameWarning = document.querySelector(".nameWarning");
const emailWarning = document.querySelector(".emailWarning");
const messageWarning  = document.querySelector(".messageWarning");
const message  = document.querySelector("#message");
const subjectWarning  = document.querySelector(".subjectWarning");
const submit = document.querySelector("#submit");
const menuBtn = document.querySelector('.btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
let showMenu = false;
menuBtn.addEventListener('click',(e)=>{
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuBranding.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        //set menu state
        showMenu = true;

    }
    else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuBranding.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        
        //set menu state
        showMenu = false;
        
    }

});
//directing to mail after clicking
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    SwearWordBlocker();//calling the swear word blocker method
    
    subject.value = "";
    message.value = "";
    
 
});
//creating the function to direct it to the default email
function MailTo(){
    const subject = document.querySelector("#subject").value.trim(); //assigning the subject value of the subject input
    const message = document.querySelector("#message").value.trim(); //assigning the message the input value of message
    window.location.href = "mailto:akausha1@ualberta.ca?subject=" + subject + "&body=" + message ;
   
}
//creating the function to filter the input from the user
function SwearWordBlocker(){
    let swearWord = ["feldercarb", "frack", "skinjob", "vulgacarb"];//setting the bad words
    
        let i;
        let errors = false;
    //looping through the message to check if there is any bad word
    for(  i = 0  ; i < swearWord.length; i++ ){
        
        
        if( message.value.includes(swearWord[i])){
           
            
            
            errors = true ;
        } 
        
    }
    
    //If there is bad word then set the warning message
    if(errors === true){
        messageWarning.innerHTML = "*Please be professional this is not acceptable";
        
    }
    //If name/email/subject/message is not entered then display warning
    else if(name.value.trim() === "" || email.value.trim() === "" || subject.value.trim() ===""   ) {
       
        // If namel is missing then display the warning
       
        if(name.value.trim() === ""){
            nameWarning.innerHTML = "*Name can not be missing";

        }
        else{
            nameWarning.innerHTML = "";
            
        }
         // If email is missing then display the warning
    
        if (email.value.trim() === ""){
            emailWarning.innerHTML = "*Email can not be missing";

        }
        else{
            emailWarning.innerHTML = "";
           
        }
        // If subject is missing then display the warning
        if(subject.value.trim() === ""){
            subjectWarning.innerHTML = "*Subject can not be missing";
            
        }
        else{
            subjectWarning.innerHTML = "";
            
            
            
        }
        

        
    }
   
    else{
        name.value="";
        email.value="";
        nameWarning.innerHTML="";
        subjectWarning.innerHTML="";
        emailWarning.innerHTML="";
        messageWarning.innerHTML="";
        MailTo();
    }
    
    
    
}