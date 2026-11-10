
// Once again we wait for the html-document to be loaded before we run the function
$(document).ready(function()
{
    // We need to find all the <p> elements
    // Using jQuery, we select all <p> elements and assign $ and parentes with "p" inside, to the variable let paraElements 
    let paraElements = $("p"); 

    // We also need to find the specific toggleswitch-element
    // This element has id="accessToggle"
    // When the elements is found, we assign a function to it
    // This time, we use .change (not .click) because it's a toggle switch, so the switch-state will be 'changed' between ON/OFF
    // When switch is changed, we run the function
    $("#accessToggle").change(function()
    {
        // The function checks if (this) specific element is changed, we use .checked to say check! This switch is changed/ON 
        if(this.checked)
        {
            // We then increase all <p> elements to 120 % as referred to the task that requires an increase by 20 % in font-size
            paraElements.css("font-size", "120%"); 
        }
        else
        {
            // If the toggle is unchecked or changed back, the font-size will remain original size or go back to 100 % of original size
            paraElements.css("font-size", "100%");
        }
    }); 
}); 