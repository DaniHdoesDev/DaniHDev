const formInfo = document.getElementById("formInfo");

let hasJob = false;
if (hasJob) {
    // I have a job
   showMessage("Thank you for visiting, I am currently employed.");
} else {
    // I need a job
    showMessage("Please look around, I am currently looking for a position.");
}

let today = new Date("02/02/2022");
let dayOfWeek = today.getDay();
if (dayOfWeek === 0 || dayOfWeek === 6) {
    document.writeln("Since it is the weekend, I will respond on the following business day.");
}
function showMessage(message) {
    
    formInfo.innerHTML = "<p>" + message + "</p>";
}

function clearMEssage() {
    formInfo.innerHTML = "";
}

const conttactform = document.getElementById("contactForm");
contactform.addEventListener("submit", function (event) {
    event.preventDefault();
    const contact = new Contact();
    showMessage("Sending your message..."); 
});

const experiences = document.getElementsByClassName("experience");
for (let x = 0; x < experiences.length; x ++) {
    const item = experiences[x];
    item.addEventListener("mouseenter", function (event){
        event.target.style = "background-color: #000080;";
    });
    item.addEventListener("mouseleave", function (event){
        event.target.style = ""
    });
}










