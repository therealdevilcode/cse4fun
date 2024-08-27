const students = [
    { name: "DBMS", result: "TUESDAY 2ND&3RD PERIOD,WEDNESDAY 1ST PERIOD,THURSDAY 1ST PERIOD, FRIDAY 4TH PERIOD" },
    { name: "SE", result: "TUESDAY 3RD PERIOD,THURSDAY 4TH PERIOD, FRIDAY 2ND PERIOD" },
    { name: "DE", result: "SUPPLY FEE READY CHESKO BRO🥲 MANAM PASS AVVALEM" },
    { name: "ES", result: "GO STRIGHT AND TAKE LEFT LIBRARY VASTHADI NEAT GA BUNK KOTTU BRO🥲" },
    { name: "EDC", result: "MONDAY 4TH PERIOD,TUESDAY 5TH PRIOD,THURSDAY 2ND PERIOD," },
    { name: "labs", result: "monday morning python lab(people who have NAGA-DHOSAM THEY MAY AVOID) remaiuning meeku thelsu" },
    { name: "Dj", result: "owner of the website" },
    
];

// Function to search for student by name
function searchStudent() {
    const studentName = document.getElementById("studentName").value;
    const resultDiv = document.getElementById("result");

    const student = students.find(s => s.name.toLowerCase() === studentName.toLowerCase());

    if (student) {
        resultDiv.innerHTML = `Result for ${student.name}: ${student.result}`;
    } else {
        resultDiv.innerHTML = "NAKU THELVADHU BHAI";
    }
}