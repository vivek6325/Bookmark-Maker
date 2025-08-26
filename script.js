// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let bookmarkForm = document.getElementById("bookmarkForm");

let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");

let submitBtn = document.getElementById("submitBtn");

let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");


let formData = {
    siteName: "Google",
    siteUrl: "https://www.google.com/"

}

siteNameInput.addEventListener("change", function(event) {
    formData.siteName = event.target.value;
});

siteUrlInput.addEventListener("change", function(event) {
    formData.siteUrl = event.target.value;
});

function validateRequest(formData) {
    let {
        siteName,
        siteUrl

    } = formData;
    let isValid = true;

    if (siteUrl === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }

    if (siteName === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
    return isValid;
}

function sendRequest(formData) {

    let option = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer b2d8461de1f1eac9ca5df728892265d23f55ebe156521d9ee866aa61132526e6"
        }
    };
    let bookmarksList = document.getElementById("bookmarksList");

    let newBookmark = document.createElement("li");
    newBookmark.classList.add("bookmark", "d-flex", "flex-column");

    let siteNameElement = document.createElement("p");
    siteNameElement.classList.add("site-name");
    siteNameElement.textContent = formData.siteName;

    let visitSiteElement = document.createElement("a");
    visitSiteElement.setAttribute("href", formData.siteUrl);
    visitSiteElement.setAttribute("target", "_blank");
    visitSiteElement.textContent = formData.siteUrlIn;

    newBookmark.appendChild(siteNameElement);
    newBookmark.appendChild(visitSiteElement);

    bookmarksList.appendChild(newBookmark);


}

bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateRequest(formData));
    sendRequest(formData);
});
