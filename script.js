//your JS code here. If required.
const form = document.querySelector("#book-form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const isbn = document.querySelector("#isbn");
const bookList = document.querySelector("#book-list");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${title.value}</td>
        <td>${author.value}</td>
        <td>${isbn.value}</td>
        <td>
            <button class="delete">X</button>
        </td>
    `;

    bookList.appendChild(row);

    // Clear input fields
    title.value = "";
    author.value = "";
    isbn.value = "";
});

// Delete book
bookList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
    }
});