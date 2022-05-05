// Focus div based on nav button click

// Flip one coin and show coin image to match result when button clicked

// Flip multiple coins and show coin images in table as well as summary results
// Enter number and press button to activate coin flip series
// Create a data sender to sent POST request objects from FormData to send to the API using fetch()
async function sendFlips({ url, formData }) {
    // Extract the form data from the FormData object
        const plainFormData = Object.fromEntries(formData.entries());
    // Turn the FormData into JSON
        const formDataJson = JSON.stringify(plainFormData);
    // Show the console what is going to be sent in the API message body
        console.log(formDataJson);
    // Set up the request object for fetch()
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: formDataJson
        };
    // Send the request and wait for the response
        const response = await fetch(url, options);
    // Pass the response back to the event handler
        return response.json()
    }
// Guess a flip by clicking either heads or tails button
function homeNav() {
    document.getElementById("homenav").className = "active";
    document.getElementById("home").className = "active";
    document.getElementById("singlenav").className = "";
    document.getElementById("single").className = "hidden";
    document.getElementById("multinav").className = "";
    document.getElementById("multi").className = "hidden";
    document.getElementById("guessnav").className = "";
    document.getElementById("guesscoin").className = "hidden";
  }
  function singleNav() {
    document.getElementById("homenav").className = "";
    document.getElementById("home").className = "hidden";
    document.getElementById("singlenav").className = "active";
    document.getElementById("single").className = "active";
    document.getElementById("multinav").className = "";
    document.getElementById("multi").className = "hidden";
    document.getElementById("guessnav").className = "";
    document.getElementById("guesscoin").className = "hidden";
  }
  function multiNav() {
    document.getElementById("homenav").className = "";
    document.getElementById("home").className = "hidden";
    document.getElementById("singlenav").className = "";
    document.getElementById("single").className = "hidden";
    document.getElementById("multinav").className = "active";
    document.getElementById("multi").className = "active";
    document.getElementById("guessnav").className = "";
    document.getElementById("guesscoin").className = "hidden";
  }
  function guessNav() {
    document.getElementById("homenav").className = "";
    document.getElementById("home").className = "hidden";
    document.getElementById("singlenav").className = "";
    document.getElementById("single").className = "hidden";
    document.getElementById("multinav").className = "";
    document.getElementById("multi").className = "hidden";
    document.getElementById("guessnav").className = "active";
    document.getElementById("guesscoin").className = "active";
  } 