/**
 * app.js
 */

window.onload = function () {
    const p = document.createElement("p");
    p.innerHTML = "Enter the number of Employees below:";
    p.id = "inputMsg";
    document.getElementById("mainContainer").appendChild(p);

    const input = document.createElement("input");
    input.setAttribute("type", "number");
    input.id = "input"
    document.getElementById("mainContainer").appendChild(input);

    const button = document.createElement("button");
    button.innerText = "Get Employee List";
    button.id = "btn"
    document.getElementById("mainContainer").appendChild(button);

    const heading = document.createElement("h1");
    heading.innerText = "Employees List";
    document.getElementById("mainContainer").appendChild(heading);

    let div = document.createElement("div");
    div.innerHTML = "";
    div.id = "employeeDiv";
    document.getElementById("mainContainer").appendChild(div);

    button.addEventListener("click", function displayEmployees() {

        const input = document.getElementById("input");
        if (input.value <= 0) {
            alert("Fill out the above field with valid value");
            throw new Error("Fill out the above field with valid value");
        }

        const postObservable = rxjs.from(fetch(`https://randomuser.me/api/?results=${input.value}`)
            .then(resolve => resolve.json()));

        postObservable.subscribe(post => {
            // First, remove the nodes in employeeDiv
            document.getElementById("employeeDiv").innerHTML = "";
            for (let i = 0; i < post.results.length; i++) {

                div.style.borderTop = "1px solid grey";
                div.style.borderBottom = "1px solid grey";

                let leftDiv = document.createElement("div");
                div.appendChild(leftDiv);
                let firstName1 = post.results[i].name.first;
                let lastName1 = post.results[i].name.last;
                leftDiv.innerHTML = firstName1 + " " + lastName1;

                let rightDiv = document.createElement("div");
                div.appendChild(rightDiv);
                let p1 = document.createElement("p");
                p1.innerText = "Location";
                p1.style.fontWeight = "bold"
                rightDiv.appendChild(p1);

                let p2 = document.createElement("p");
                p2.innerHTML = post.results[i].location.street.number + " " + post.results[i].location.street.name;
                rightDiv.appendChild(p2);

                let p3 = document.createElement("p");
                let address = post.results[i].location.city + " " + post.results[i].location.state + " " +
                    post.results[i].location.country + " " + post.results[i].location.postcode;
                p3.innerHTML = address;
                rightDiv.appendChild(p3);

            }
        })
    })
}









