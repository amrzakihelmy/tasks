// ======================
// Main Array
// ======================
let arrayOfUsers = [];
let currentIndex = -1;

// ======================
// CRUD Functions
// ======================

// Add User
function addUser(userObject) {
    arrayOfUsers.push(userObject);
}

// Delete User
function deleteUser(userIndex) {
    arrayOfUsers.splice(userIndex, 1);
    displayUsers();
}

// Enter Update Mode
function updateUser(userIndex) {

    currentIndex = userIndex;

    fname.value = arrayOfUsers[userIndex].firstName;
    lname.value = arrayOfUsers[userIndex].lastName;
    age.value = arrayOfUsers[userIndex].age;
    isGraduated.value = arrayOfUsers[userIndex].isGraduated.toString();

    btn.innerHTML = "Update User";
}

// ======================
// Display Function
// ======================

function displayUsers() {

    let table = "";

    let firstNameSearch = searchFirst.value.toLowerCase();
    let lastNameSearch = searchLast.value.toLowerCase();
    let graduatedFilter = graduationFilter.value;

    let visibleCount = 0;

    for (let i = 0; i < arrayOfUsers.length; i++) {

        let user = arrayOfUsers[i];

        if (!user.firstName.toLowerCase().includes(firstNameSearch))
            continue;

        if (!user.lastName.toLowerCase().includes(lastNameSearch))
            continue;

        if (
            graduatedFilter != "all" &&
            user.isGraduated.toString() != graduatedFilter
        )
            continue;

        visibleCount++;

        let stampClass = user.isGraduated ? "yes" : "no";
        let stampText = user.isGraduated ? "Yes" : "No";

        table += `
            <tr>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.age}</td>
                <td><span class="stamp ${stampClass}">${stampText}</span></td>

                <td>
                    <button class="btn-edit" onclick="updateUser(${i})">Edit</button>
                    <button class="btn-delete" onclick="deleteUser(${i})">Delete</button>
                </td>
            </tr>
        `;
    }

    if (visibleCount === 0) {
        table = `
            <tr class="empty-row">
                <td colspan="5">No records match — add a student above or adjust your filters.</td>
            </tr>
        `;
    }

    document.getElementById("tableBody").innerHTML = table;
}

// ======================
// Fetch Elements
// ======================

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const age = document.getElementById("age");
const isGraduated = document.getElementById("isGraduated");

const btn = document.getElementById("btn");

const searchFirst = document.getElementById("searchFirst");
const searchLast = document.getElementById("searchLast");
const graduationFilter = document.getElementById("graduationFilter");

// ======================
// Live Update
// ======================

function liveUpdate() {

    if (currentIndex == -1)
        return;

    arrayOfUsers[currentIndex].firstName = fname.value;
    arrayOfUsers[currentIndex].lastName = lname.value;
    arrayOfUsers[currentIndex].age = Number(age.value);
    arrayOfUsers[currentIndex].isGraduated =
        isGraduated.value === "true";

    displayUsers();
}

fname.addEventListener("input", liveUpdate);
lname.addEventListener("input", liveUpdate);
age.addEventListener("input", liveUpdate);
isGraduated.addEventListener("change", liveUpdate);

// ======================
// Search & Filter
// ======================

searchFirst.addEventListener("input", displayUsers);
searchLast.addEventListener("input", displayUsers);
graduationFilter.addEventListener("change", displayUsers);

// ======================
// Add / Update Button
// ======================

btn.addEventListener("click", () => {

    let user = {
        firstName: fname.value,
        lastName: lname.value,
        age: Number(age.value),
        isGraduated: isGraduated.value === "true"
    };

    if (currentIndex == -1) {

        addUser(user);

    } else {

        arrayOfUsers[currentIndex] = user;

        currentIndex = -1;

        btn.innerHTML = "Add User";
    }

    displayUsers();

    fname.value = "";
    lname.value = "";
    age.value = "";
    isGraduated.value = "true";
});

// Show the empty state on first load
displayUsers();
