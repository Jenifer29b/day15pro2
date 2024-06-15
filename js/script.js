let submit = document.getElementById("submit");
submit.addEventListener("click", displaydetails);

let row = 1;
function displaydetails() {
    let firstname = document.getElementById("first-name").value;
    let lastname = document.getElementById("last-name").value;
    let pincode = document.getElementById("pincode").value;
    let gender= document.getElementById("gender").value;
    let address = document.getElementById("address").value;
    let seats = document.getElementById("seats").value;

    if(!firstname || !lastname || !pincode || !gender || !address || !seats){
        alert("Please fill all the fields");
        return;
    }

    var contents = document.getElementById("contents")

    let newrow = contents.insertRow(row)

    let cell1 = newrow.insertCell(0);
    let cell2 = newrow.insertCell(1);
    let cell3 = newrow.insertCell(2);
    let cell4 = newrow.insertCell(3);
    let cell5 = newrow.insertCell(4);
    let cell6 = newrow.insertCell(5);

    cell1.innerHTML = firstname;
    cell2.innerHTML = lastname;
    cell3.innerHTML = pincode;
    cell4.innerHTML = gender;
    cell5.innerHTML = address;
    cell6.innerHTML = seats;

    row++
}