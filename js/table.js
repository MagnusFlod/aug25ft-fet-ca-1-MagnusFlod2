// Vanilla JavaScript part, start

// Here we make a variable and set the value to get a specific element from index.html
// We get the element by its identification which is 'personalTable'
// We have to make this variable as kind of a bookmark to find the first <tbody> element after the mark
let table = document.getElementById("personalTable"); 

// Here we make another variable 
// We set its value to select the very first <tbody> element in the section after we found the element with id="personalTable(the bookmark)
let tbody = table.querySelector("tbody"); 




// Here we use a for-loop to repeat the process of making 5 rows and cells 
for (let i = 0; i < 5; i++)
{
    // We create a variable and assign a value that creates a new row-element
    // This process is repeated 5 times
    newRow = document.createElement("tr");
    
    // We append new rows on tbody 5 times
    tbody.appendChild(newRow); 
    
    // id-start
    // We create a new variable and assign the value that creates a new cell-element 
    // This is for "Id-column"
    // Once again, 5 times
    let newCell1 = document.createElement("td"); 

    // Here we give the new cells some text
    // (i + 1) is the current index and we add one for each iteration
    // Start at index 0 + 1 = Row: 1
    // index 1 + 1 = Row: 2
    // index 2 + 1 = Row: 3 
    // And so forth 
    newCell1.textContent = "Row: " + (i + 1); 

    // We append a new cell to each row 5 times 
    newRow.appendChild(newCell1); 
    //id-end



    // Icon-start
    // We create new cell-elements for Icons
    let newCell2 = document.createElement("td"); 

    // We create a an Icon-variable to use later. Firstly we create the elements("i") for Icon
    let newIcon = document.createElement("i"); 

    // Here we create an array that stores different Icons
    let iconArray = ["bi-airplane", "bi-7-circle", "bi-airplane-engines-fill", "bi-alarm", "bi-airplane-fill"]; 

    // Here we assign the Icon-elements and add both class and the different Icons from the iconArray
    newIcon.classList.add("bi", iconArray[i]); 
    
    // newCell2.textContent = "test"; 
    
    // For each iteration, we assign the class and the Icon to the different cells-elements
    newCell2.appendChild(newIcon); 

    // We append the cells to the newRow
    newRow.appendChild(newCell2); 
    // Icon-end


    // Description-start
    // Once again, we make a variable for the cells in the 3rd column(Description)
    // In that variable we create new cell-elements 
    let newCell3 = document.createElement("td"); 

    // We make another array containing string-descriptions for the Icons 
    let descriptionArray = ["Plane", "Number 7", "4-engine plane", "Clock", "Bold-plane"]; 

    // For each iteration, we assign the different string-elements to the cells
    newCell3.textContent = descriptionArray[i]; 

    // We append the new cells to the new row
    newRow.appendChild(newCell3); 
    // Description-end



    // Info-start
    // Same procedyre. We make the variable for the cells in the 4th column
    let newCell4 = document.createElement("td"); 

    // We make another array of string-elements
    // These strings are information about my self
    let infoArray = ["I can drive a semi-truck", "I have been in a submarine, once", "I like storms", "I also like thunder", "And I like planes"]; 

    // We assign the different strings to the different cells on each iteration
    newCell4.textContent = infoArray[i]; 

    // New cells to the new row
    newRow.appendChild(newCell4); 
    // Info-end


    // Image-start
    // Here we create the final variable that will once again make new cell-elements
    let newCell5 = document.createElement("td"); 

    // We create an image element to store the pictures
    let newImage = document.createElement("img"); 

    // Here is an array of links to different images
    let imageArray = ["https://aeroreport.de/media/pages/good-to-know/boeing-737-wie-ein-einfacher-jet-die-luftfahrt-revolutionierte/kopf/af9f4e30aa-1752817403/adobestock_609501338_1200px-2000x.webp",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/RAF_Eurofighter_EF-2000_Typhoon_F2_Lofting-1.jpg/1200px-RAF_Eurofighter_EF-2000_Typhoon_F2_Lofting-1.jpg",
        "https://www.skiforbundet.no/globalassets/06-krets---medier/agder-og-rogaland/hopp-2023-2024/midtstua1.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/0/00/Midtstubakken_-_profile_-_2011-02-27_%28edit%29.jpg", 
        "https://g.acdn.no/obscura/API/dynamic/r1/ece5/tr_1200_1200_s_f/0000/avio/2023/6/16/16/NTB_G1c1HOJEaYk.jpg?chk=4970CF"
    ]

    // For each iteration we assign the link of the image inside the img element
    newImage.src = imageArray[i]; 

    // We assign the width of every image to 110px to match our table size
    newImage.width = 110; 

    // Here we append every img-elements into each new-cell element 
    newCell5.appendChild(newImage); 

    // One last time, we add the new cells to the final row 
    newRow.appendChild(newCell5); 
    // Image-end

}
// Vanilla JavaScript-part, end



// jQuery, start
// Here we make an onclick fucntion with jQuery
// If one of the image-elements are clicked, the function will run
$("img").on("click", function()
{
    // We make a variable and assign (this). When this spesific image-link is clicked
    // 'attr' is for attribute and the link is actually an attribute to the img-element 
    // 'src' is for source and this is what we actually click on
    let imageLink = $(this).attr("src"); 
    // Here is where things actually happen
    // We open a window with that spesific image ref(this)
    // The pathway is blank, so we open it in a new window or tab
    window.open(imageLink, "_blank"); 
})


// Here we make a hover function 
// When we hover over every <tr> element that has an oddnumbered index
// Two simple functions will run
$("tr:odd").hover(
    function()
    {
        // This spesific element that we hover over, will change it's font-color to blue
        // Mouse-enter. Bool-Hover = true
        $(this).css("color", "blue"); 
    },
    function()
    {
        // When we stop hovering over this spesific element, it changes it's font-color to back in black (\m/)
        // Mouse-leave. Bool-Hover = false
        $(this).css("color", "black"); 
    }
)
// jQuery, end 