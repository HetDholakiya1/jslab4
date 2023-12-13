/* STEP 2: Bind the HEADER and the SECTION elements above to variables */
const header = document.querySelector("header");
const section = document.querySelector("section");

// STEP 3a: Create the asynchronous function populate()
async function populate() {
    // Introducing JavaScript Object Notation (JSON): https://json.org/
    // STEP 4b: Store the URL of a JSON file in a variable */
    const url = "https://hetdholakiya1.github.io/jslab4/i-scream.json";

    // STEP 5: Use the new URL to create a new request object
    const request = new Request(url);
    // STEP 6: Make a network request with the fetch() function, which returns a Response object
    const response = await fetch(request);
    // STEP 7: Capture the returned Response object and covert to a JSON object using json()
    const responseJson = await response.json();
    // STEP 8: Output the iScream JSON object to the console 
    console.log(responseJson);
    // STEP 9a: Invoke the populateHeader function here, then build it below
    populateHeader(responseJson);
    // STEP 10a: Invoke the showTopFlavors function here, then build it below
    showTopFlavors(responseJson);
}

// STEP 3b: Call the populate() function
populate();
/* STEP 9b: Build out the populateHeader() function */
function populateHeader(jsonData) {
    // Create the H1 element
    const h1 = document.createElement("h1"); // <h1></h1>
    const p = document.createElement("p");
    // Grab the company name from the JSON object and use it for the text node
    h1.textContent = jsonData.companyName; // <h1>I-Scream Company Inc.</h1>
    p.textContent = `${jsonData.headOffice} est. ${jsonData.established} - 
    ${(jsonData.active) ? "Active" : "Inactive"}`;
    // Inject the complete H1 element into the DOM, inside the HEADER
    header.appendChild(h1); // <header> <h1>I-Scream Company Inc.</h1> </header>
    header.appendChild(p);
}
/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavors(jsonData) {
    // STEP 10c: Bind the JSON topFlavors object to a var
    const topFlavors = jsonData.topFlavors;
    // STEP 10d: Loop through the topFlavors object
    for (let i = 0; i < topFlavors.length; i++) {
        console.log(topFlavors[i]);
        
        const article = document.createElement("article"); // <article></article>
        const h2 = document.createElement("h2"); // <h2></h2>
        const image = document.createElement("img"); // <img>
        const p1 = document.createElement("p"); // <p></p>
        const p2 = document.createElement("p"); // <p></p>
        const list = document.createElement("ul"); // <ul></ul>
       
        

        h2.textContent = topFlavors[i].name;
        p1.textContent = `Calories: ${topFlavors[i].calories}`;
        p2.textContent = `Type: ${topFlavors[i].type}`;
        image.setAttribute("src", topFlavors[i].image) 
        const ingredients = topFlavors[i].ingredients;
        for (let j = 0; j < ingredients.length; j++) {
            console.log(ingredients[j]);
            const listItem = document.createElement("li"); 
            listItem.textContent = ingredients[j];
            list.appendChild(listItem); 
          
        }

        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(list);
        article.appendChild(image);
        section.appendChild(article);
    }
}


