// document.ready means that when the html-document has loaded all the basic structure, we run this JavaScript file
$(document).ready(function()
{
    // We use jQuery ($) and the id "liveToastBtn" and set a click-event on it
    $("#liveToastBtn").on("click", function() // This function will perform execute in the form of showing the live-toast-element
    {
        // We declare a variable that stores the id of the liveToast-element
        let toastElement = $("#liveToast"); 

        // Here we create another variable to activate the bootstrap function (let showToast)
        // We assign the variable a new bootstrap .Toast to say this is a 'toast' function
        // The id of toastElement is uniqe("#liveToast"). That's why it has index zero. It's the only element of that ID

        // One could think that is it really necerssary to say one unique element-id starts at index 0? 
        // After all, it's the only element with that unique id so it couldn't have any other index than 0? 
        // But a jQuery object is wrapping around one or several DOM-elements. It behaves like an array
        // It stores the actual html-elements as values
        // Bootstrap's Toast-constructor is not written in jQuery but regular JavaScript and expects a real DOM-element 
        // That's why we have to specify index 0. to access the actual DOM element that is "wrapped" inside the jQuery object
        let showToast = new bootstrap.Toast(toastElement[0]); 

        // Here we perform the visualisation of the toast 
        showToast.show(); 
    });
});

// As stated before, we wait untill the html-page has finished loading before we run the function
$(document).ready(function()
{
    // This is another click-event. If the button with id="boredBtn" 'I'm bored' is clicked, we run the function that sends the API request
    $("#boredBtn").on("click", function()
    {
        // Here $.ajax is starting an asynchronus http-request to the URL below
        $.ajax(
        {
            // If/when the browser gets a valid response, jQuery automatically calls the success function
            // The argument of the function, response, is the data from the server
            // This data is an object with several properties
            // Amongst those properties we have activity:  
            url: 'http://boredapi.restapi.co.za/',
            success: function(response)
            {
                // We log this response
                // In the console, we are adviced to 'balance something on our heads' or 'play charades with emoji cards' as random activities if we are bored
                console.log(response); 
            }
        })
    })
})