// number of students in the class
let students = Array.from({length: 36 }, (_, i) => i + 1);
let pickedStudents = [];

// displays the chosen stuent number.
document.getElementById("pick-button").addEventListener("click", function() {
    // displays "done" if no more students are available to pick
    if (students.length === 0) {
        document.getElementById("student-number").textContent = "Done";
        return;
    }
    
    // randomizes student numbers and picks one
    let randomIndex = Math.floor(Math.random() * students.length);
    let randomStudent = students[randomIndex];

    // displays the student chosen
    document.getElementById("student-number").textContent = randomStudent;
    
    students.splice(randomIndex, 1);
    pickedStudents.push(randomStudent);

    let pickedStudentsContainer = document.getElementById("picked-students");
    pickedStudentsContainer.innerHTML = "";

    let chosen = document.getElementById("picked-students").textContent = pickedStudents.join(", ");

    if ((chosen.length + 1) % 4 === 0) {
        pickedStudentsContainer.appendChild(document.getElementById("br"));
    };
});
