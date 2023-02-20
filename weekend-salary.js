console.log ("Hello World");

let employees = [];

const table = document.querySelector('table');
const monthlyCost= document.getElementById('monthlyCost');


const addButton = document.getElementById('addButton');
addButton.addEventListener('click',addEmployee);

function addEmployee() {

    const firstName = doucment.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const idNumber = document.getElementById('idNumber').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const annualSalary = parseFloat(document.getElementById('annualSalary').value);
}

employees.push({ firstName, idNumber, jobTitle, annualSalary });

