async function getData() {
    const word = document.getElementById("search").value.trim();
    // error if no word input
    if (!word) {
        alert("Please enter a word!");
        return;
    }

    var API_KEY = "0c7251f3-1c94-4d73-ba7b-18f2c9f06fc8"; 
    var URL = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${API_KEY}`;

    try {
        const response = await fetch(URL);
        // console.log(response)
        const data = await response.json();
        // console.log(data)

        // get results div
        const resultDiv = document.getElementById("result");
        // reset results
        resultDiv.innerHTML = ""; 

        // place data from json in variable
        // check if data is array & not empty
        if (Array.isArray(data) && data.length > 0 && data[0].shortdef) {
            // get word & definition
            const wordContent = `<div class="word">${word}</div>`;
            const definitionContent = `<div class="definition"><b>Definition:</b> ${data[0].shortdef.join(", ")}</div>`;
            // display results
            resultDiv.innerHTML = wordContent + definitionContent;
        } else {
            // else no results found
            resultDiv.innerHTML = `<p>No results found for "${word}".</p>`;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("result").innerHTML = "<p>Failed to fetch definition.</p>";
    }
}
