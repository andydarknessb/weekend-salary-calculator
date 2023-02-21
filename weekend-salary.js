console.log ("Hello World");

let employees = [];
let totalRow;

const table = document.querySelector('table');
const monthlyCost = document.getElementById('monthlyCost');

const addButton = document.getElementById('addButton');
addButton.addEventListener('click', addEmployee);

function addEmployee() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const idNumber = document.getElementById('idNumber').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const annualSalary = parseFloat(document.getElementById('annualSalary').value);

    if (!firstName || !lastName || !idNumber || !jobTitle || !annualSalary) {
        alert('Please fill out all fields.');
        return;
    }

    employees.push({ firstName, lastName, idNumber, jobTitle, annualSalary });

    const row = table.insertRow();
    const cellFirstName = row.insertCell(0);
    const cellLastName = row.insertCell(1);
    const cellIdNumber = row.insertCell(2);
    const cellJobTitle = row.insertCell(3);
    const cellAnnualSalary = row.insertCell(4);
    const cellDeleteButton = row.insertCell(5);
    cellFirstName.innerHTML = firstName;
    cellLastName.innerHTML = lastName;
    cellIdNumber.innerHTML = idNumber;
    cellJobTitle.innerHTML = jobTitle;

    const annualSalaryFormatted = annualSalary.toLocaleString('en-US');
    cellAnnualSalary.innerHTML = '$' + annualSalaryFormatted;

    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('idNumber').value = '';
    document.getElementById('jobTitle').value = '';
    document.getElementById('annualSalary').value = '';

    cellDeleteButton.innerHTML = '<button class="deleteButton" data-salary="' + annualSalary + '">Delete</button>';
    const deleteButton = cellDeleteButton.querySelector('.deleteButton');
    deleteButton.addEventListener('click', function () {
        const index = employees.findIndex((employee) => employee.idNumber === idNumber);
        employees.splice(index, 1);
        table.deleteRow(row.rowIndex);
        const salary = parseFloat(deleteButton.getAttribute('data-salary'));
        const monthlySalary = -(salary / 12);
        updateMonthlyCost(monthlySalary);
    });
    

    updateMonthlyCost();
    // show all placeholders
    document.getElementById('firstName').value = '';
    document.getElementById('firstName').placeholder = 'First Name';
    document.getElementById('lastName').value = '';
    document.getElementById('lastName').placeholder = 'Last Name';
    document.getElementById('idNumber').value = '';
    document.getElementById('idNumber').placeholder = 'ID Number';
    document.getElementById('jobTitle').value = '';
    document.getElementById('jobTitle').placeholder = 'Job Title';
    document.getElementById('annualSalary').value = '';
    document.getElementById('annualSalary').placeholder = 'Annual Salary';

}


function updateMonthlyCost(salaryToRemove = 0) {
    const totalSalary = employees.reduce(function(acc, cur) {
        return acc + cur.annualSalary;
    }, 0) - salaryToRemove;
    const monthlySalary = (totalSalary / 12).toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2});
    monthlyCost.innerHTML = monthlySalary;

    if (totalSalary > 240000) {
        monthlyCost.style.backgroundColor = 'red';
    } else {
        monthlyCost.style.backgroundColor = 'white';
    }
}


