let searchInputEt = document.getElementById("searchInput");
let searchResultsEt = document.getElementById("searchResults")
let spinnerEt = document.getElementById("spinner");

function creatAndappendSearch(result) {
    // creating result Title
    let resultContainer = document.createElement("div");
    resultContainer.classList.add("result-item");
    searchResultsEt.appendChild(resultContainer);
    // creating title Element
    let {
        link,
        title,
        description
    } = result
    let titleEt = document.createElement("a")
    titleEt.href = link
    titleEt.target = "_blank";
    titleEt.textContent = title
    titleEt.classList.add('result-title')
    resultContainer.appendChild(titleEt)
    // Creating break element
    let breakEl1 = document.createElement("br");
    resultContainer.appendChild(breakEl1);

    // creating url element

    let urlElemnt = document.createElement('a');
    urlElemnt.href = link
    urlElemnt.target = "_blank";
    urlElemnt.textContent = link
    urlElemnt.classList.add('result-url');
    resultContainer.appendChild(urlElemnt);

    // creating break element
    let breakEl2 = document.createElement('br');
    resultContainer.appendChild(breakEl2)

    // creating description
    let descriptionEt = document.createElement('p');
    descriptionEt.textContent = description
    descriptionEt.classList.add("link-description")
    resultContainer.appendChild(descriptionEt)



}


function displaySearch(searchResults) {
    spinnerEt.classList.toggle("d-none");
    for (let result of searchResults) {
        creatAndappendSearch(result);
    }
}





function wikiPediasearch(event) {
    if (event.key === "Enter") {
        spinnerEt.classList.toggle("d-none");
        searchResultsEt.textContent = ""

        let searchInputEm = searchInputEt.value

        let urlwiki = "https://apis.ccbp.in/wiki-search?search=" + searchInputEm;

        let options = {
            method: "GET"
        }
        fetch(urlwiki, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData
                displaySearch(search_results);
            })



    }
}

searchInputEt.addEventListener("keydown", wikiPediasearch)