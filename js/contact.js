
// As stated before, document.ready waits until the page is loaded before the function runs
$(document).ready(function()
{
    // We declare our variables outside of the click-function so we can use them outside if we need to
    let emailAddress; 
    let telephoneNumber; 
    let homeAddress; 

    // Prompt, start
    // When the button with id="contactButton" is clicked, the function will be called
    $("#contactButton").click(function()
    {
        // We assign the variable with a prompt for the user to type in the phone-number
        telephoneNumber = prompt("Enter your phone-number: ");

        // To make sure the user types in the correct email-format that includes "@", and ".", we use a do-while-loop
        do
        {
            // Prompts the user at least one time
            emailAddress = prompt("Enter your email: "); 
            // If the adress does NOT include "@" or ".", we alert the user
            if(!emailAddress.includes("@") || !emailAddress.includes("."))
            {
                alert("Wrong email-data! Please enter correct email"); 
            }
            // Same condition. If the user is missing "@" or ".", this loop will run again
        } while(!emailAddress.includes("@") || !emailAddress.includes(".")); 

        // Lastly, we assign the variable 'homeAdress' with a final user-prompt
        homeAddress = prompt("Enter your home-adress: ");
        // Prompt, end
        

        // jQuery-selector, start

        // First we need to find the correct elements that we are going to insert the prompt-values to
        // The 'p' is for a paragraph-element
        // "text-muted" is the class for all 3 elements

        // There are more paragraphs in index.html with class= 'text-muted' so we have to narrow our choises to get correct elements
        // "contactDetails" is the id of the first div before we get to our paragraphs with class= text-muted
        // That is how we can get the correct elements 
        // "eq" is the specific index. We start at index 0 of the first match on <p> element below "contactDetails" with class= text-muted
        
        // "text" is for inserting a string to the elements 
        // Finally we need to use the variables that holds the prompts
        // We insert the string from the prompts to each correct element
        $("#contactDetails p.text-muted").eq(0).text(telephoneNumber);
        $("#contactDetails p.text-muted").eq(1).text(emailAddress); 
        $("#contactDetails p.text-muted").eq(2).text(homeAddress); 
        // jQuery-selector, end 

        // Finally we log the prompt-data to the console 
        // We log the data from each variable
        console.log("From: " + emailAddress); 
        console.log("Contact: " + telephoneNumber);
        console.log("Adress: " + homeAddress);
    }); 

}); 