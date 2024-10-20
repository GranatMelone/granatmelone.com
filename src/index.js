const texts = [
    "Welcome to GranatMelone!",
    "Loading, please wait...",
    "Almost there...",
    "Get ready for something amazing!",
    "Thank you for your patience!",
    "Grabbing coffee... almost done!",
    "Having a small existential crisis, please hold!",
    "Almost there... but are any of us truly ready?",
    "Oops, seems like it's still loading!",
    "The next available operator will be with you shortly.",
    "Loading... but why?",
    "Loading... because you told me to.",
    "Loading... because I'm a computer and I have no choice.",
    "Pack your bags, we're going on a loading screen!",
    "Firing the intern responsible for this...",
];

let progressMultiplier = 1;
// Event listener for when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {

    // Function to change the progress bar value to a random number
    function changeProgress() {
        const progress = Math.floor(Math.random() * 100);
        document.getElementById("progress_bar").value=progress;
    }
    
    // Function to change the loading text to a random text from the texts array
    function changeText() {
        const randomText = texts[Math.floor(Math.random() * texts.length)];
        document.getElementById("loading_text").innerText = randomText;
    }

    // Function to update the site with new text and progress bar value
    function updateSite() {
        changeText();
        changeProgress();
    }
    
    
    updateSite(); // Change text immediately on load
    // Set random interval for updating
    function setRandomInterval() {
        const randomDelay = Math.random() * 10000;
        setTimeout(() => {
            updateSite();
            setRandomInterval();
        }, randomDelay);
    }

    // replace the skeleton with the button and text at random time
    setTimeout(() => {
        const skeletonDiv = document.getElementById("round_btn_skeleton");
        const button = document.createElement("button");
        button.id = "reload_button";
        button.className = "btn btn-secondary animate-pulse";
        button.innerText = "Loading...";
        skeletonDiv.parentNode.replaceChild(button, skeletonDiv);
        document.getElementById("reload_button").click();
        // Event listener for the reload button 
        document.getElementById("reload_button").addEventListener("click", () => {
            document.getElementById("progress_bar").className = "progress  progress-error w-56";
            document.getElementById("reload_button").innerText= "Going fast mode!";
            document.getElementById("reload_button").className= "btn btn-error animate-pulse";
            progressMultiplier = 4;
            setTimeout(() => {
                document.getElementById("progress_bar").className = "progress progress-secondary w-56";
                document.getElementById("reload_button").innerText= "Loading...";
                document.getElementById("reload_button").className= "btn btn-secondary animate-pulse";
                progressMultiplier = 1;
            }, 10000);
        });
        const skeletonTextDiv = document.getElementById("text_skeleton1");
        const text = document.createElement("p");
        text.id = "text1";
        text.innerText = "Please be patient!";
        text.class = "text-lg text-center text-secondary"; 
        skeletonTextDiv.parentNode.replaceChild(text, skeletonTextDiv);

    },Math.random() * 10000);

    //count up the progress bar value every second
    setInterval(() => {
        if (document.getElementById("progress_bar").value == 99) {
            document.getElementById("progress_bar").value = 0;
        }
        document.getElementById("progress_bar").value += 1*progressMultiplier;
    },1000)

    setRandomInterval();
});

// Event listeners for the accept and deny buttons
document.getElementById("deny_btn").addEventListener("click", () => {
    document.getElementById("deny_btn").className = "btn btn-error";
    document.getElementById("deny_btn").disabled = true;
    document.getElementById("alert").remove();
    texts.push("You dont care at all :c. Please wait...");

});

document.getElementById("accept_btn").addEventListener("click", () => {
    document.getElementById("accept_btn").className = "btn btn-success";
    document.getElementById("accept_btn").disabled = true;
    document.getElementById("alert").remove();
    texts.push("The Cookie Monster wants to be your friend! Please wait...");
});