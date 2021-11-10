/**
 * employees.js
 */

window.onload = fetchData;
function fetchData() {
    let postPromise = fetch('https://randomuser.me/api/?results=5');
    postPromise.then(response => response.json())
        .then(function (result) {
            console.log(result);
            let profileImageURL1 = result.results[0].picture.large;
            let firstName1 = result.results[0].name.first;
            let lastName1 = result.results[0].name.last;
            let phone1 = result.results[0].phone;
            let email1 = result.results[0].email;
            document.getElementById("img1").src = profileImageURL1;
            document.getElementById("name1").innerHTML = firstName1 + " " + lastName1;
            document.getElementById("phone1").innerHTML = "phone: " + phone1;
            document.getElementById("email1").innerHTML = email1;

            let profileImageURL2 = result.results[1].picture.large;
            let firstName2 = result.results[1].name.first;
            let lastName2 = result.results[1].name.last;
            let phone2 = result.results[1].phone;
            let email2 = result.results[1].email;
            document.getElementById("img2").src = profileImageURL2;
            document.getElementById("name2").innerHTML = firstName2 + " " + lastName2;
            document.getElementById("phone2").innerHTML = "phone: " + phone2;
            document.getElementById("email2").innerHTML = email2;

            let profileImageURL3 = result.results[2].picture.large;
            let firstName3 = result.results[2].name.first;
            let lastName3 = result.results[2].name.last;
            let phone3 = result.results[2].phone;
            let email3 = result.results[2].email;
            document.getElementById("img3").src = profileImageURL3;
            document.getElementById("name3").innerHTML = firstName3 + " " + lastName3;
            document.getElementById("phone3").innerHTML = "phone: " + phone3;
            document.getElementById("email3").innerHTML = email3;

            let profileImageURL4 = result.results[3].picture.large;
            let firstName4 = result.results[3].name.first;
            let lastName4 = result.results[3].name.last;
            let phone4 = result.results[3].phone;
            let email4 = result.results[3].email;
            document.getElementById("img4").src = profileImageURL4;
            document.getElementById("name4").innerHTML = firstName4 + " " + lastName4;
            document.getElementById("phone4").innerHTML = "phone: " + phone4;
            document.getElementById("email4").innerHTML = email4;

            let profileImageURL5 = result.results[4].picture.large;
            let firstName5 = result.results[4].name.first;
            let lastName5 = result.results[4].name.last;
            let phone5 = result.results[4].phone;
            let email5 = result.results[4].email;
            document.getElementById("img5").src = profileImageURL5;
            document.getElementById("name5").innerHTML = firstName5 + " " + lastName5;
            document.getElementById("phone5").innerHTML = "phone: " + phone5;
            document.getElementById("email5").innerHTML = email5;
        });
}

function refreshData() {
    fetchData();
}
