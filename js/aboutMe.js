// Paragraph-text-function, start 

// First, we must find the relevant paragraph-elements
// To do that, we create a variable that stores the value that finds all elements that are paragraphs 
let correctParagraph = document.getElementsByTagName("p"); 

// We make another variable to store the value that finds all elements with classname: "aboutme"
let correctSpanElement = document.getElementsByClassName("aboutme"); 



// We declare the function that is going to change the text inside the paragraphs and 'student name'
function changeText()
{
    // There are several paragraphs in index.html, so we must find the correct paragraphs 
    // We use the variable that finds all the paragraph elements and iterate over every single paragraph
    for(let i = 0; i < correctParagraph.length; i++)
    {
        // The condition is if the text-content inside the paragraphs are "Something about me" we found the correct ones
        if (correctParagraph[i].textContent === "Something about me")
        {
            // Although indexing in JavaScript/html always start at 0, in this case we must start at index 1
            // This is because there are more paragraphs in index.html before the paragraphs with textContent: 'Something about me' 
            // The paragraph with index 0 will then be the one before our relevant paragraphs
            // That's why we have to start at index 1 and then index 2 so we can change the text in both relevant paragraphs 
            if(i === 1)
            {
                // If index is equal to one, we change the textContent inside the <p> element
                correctParagraph[i].textContent = "My hobbie and passion is Skijumping. It's scary, thrilling and extremely joyfull!";

                // In this part we change the background-color and font color
                // We do this inside of our for-loop and if-condition
                // This is so we dont have to make another for-loop and find our element again
                // This is an event-listener. In the event of a click, we run the function
                correctParagraph[i].addEventListener('click', function()
                {
                    // When (this) specific paragraph-text is clicked, we change bg and font-color 
                    this.style.backgroundColor = 'powderblue'; 
                    this.style.color = 'white'; 
                }); 
            }
            else if(i === 2)
            {
                // Else if index is equal to two, we change the textContent inside the second <p> element 
                correctParagraph[i].textContent = "I also play piano and compose my own music"; 

                // Since we have to add this click event to both paragraphs, we use the same function again
                // This is for the second paragraph-element with the second lines of text 
                correctParagraph[i].addEventListener('click', function()
                {
                    this.style.backgroundColor = 'powderblue'; 
                    this.style.color = 'white'; 
                }); 
            }
        }
    }


    // Once more, we iterate over every element with class = "aboutme"
    for(let i = 0; i < correctSpanElement.length; i++)
    {
        // Same procedure as the first for-loop but this time, we use .includes
        // Condition, if the textContent inside the <span> element includes the textContent inside our if-condition
        if(correctSpanElement[i].textContent.includes("student name")) 
        {
            // We change the text-content 
            correctSpanElement[i].textContent = "I am | Magnus Flodstrøm | - the code master"; 
        }
    }


}

// We call the function so it actually runs 
changeText(); 