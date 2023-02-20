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

const row = table.insertRow();
const cellFirstName = row.insertCell(0);
const cellIdNumber = row.insertCell(1);
const cellJobTitle = row.inserctCell(2);
const cellAnnualSalary = row.insertCell(3);
const cellDeleteButton = row.inserctCell(4);
cellFirstName.innerHTML = firstName;
cellIdNumber.innerHTML = idNumber;
cellJobTitle.innerHTML = jobTitle;
cellAnnualSalary.innerHTML = annualSalary.tofixed(2);
cellDeleteButton.innerHTML = annualSalary.tofixed(2);
const deleteButton = cellDeleteButton.querySelector('.deleteButton');
deleteButton.addEventListener('click', function () {

    const index = employees.findIndex((employee) => employee.idNumber === idNumber);
    employees.splice(index, 1);

    table.deleteRow(row.rowIndex);

    updateMonthlyCost();
});