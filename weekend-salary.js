console.log ("Hello World");

let employees = [];

const table = document.querySelector('table'); // Assigning table variable
const monthlyCost = document.getElementById('monthlyCost'); // Assigning monthly cost variable

const addButton = document.getElementById('addButton'); // Assigning addButton variable
addButton.addEventListener('click', addEmployee); // Button Click 


function addEmployee() { // function to store IDs into their variables. 
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const idNumber = document.getElementById('idNumber').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const annualSalary = parseFloat(document.getElementById('annualSalary').value); 

    if (!firstName || !lastName || !idNumber || !jobTitle || !annualSalary) { // Added this to ensure all fields were filled before submitting. Will alert user to fill all fields. 
        alert('Please fill out all fields.');
        return;
    }

    employees.push({ firstName, lastName, idNumber, jobTitle, annualSalary }); // Adds a new row to the table after every input from the user
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

    const annualSalaryFormatted = annualSalary.toLocaleString('en-US'); // Formatting to U.S. Currency
    cellAnnualSalary.innerHTML = '$' + annualSalaryFormatted;

    document.getElementById('firstName').value = ''; // Reseting input fields after employee is entered.
    document.getElementById('lastName').value = '';
    document.getElementById('idNumber').value = '';
    document.getElementById('jobTitle').value = '';
    document.getElementById('annualSalary').value = '';

    cellDeleteButton.innerHTML = '<button class="deleteButton" data-salary="' + annualSalary + '">Delete</button>'; // Delete Button for each salary
    const deleteButton = cellDeleteButton.querySelector('.deleteButton'); 
    deleteButton.addEventListener('click', function () {
    const index = employees.findIndex((employee) => employee.idNumber === idNumber); // Finding the employee by ID number when delete button is clicked. 
    employees.splice(index, 1);
    table.deleteRow(row.rowIndex);
    const salary = parseFloat(deleteButton.getAttribute('data-salary')); //Retrieves the annual salary
    const monthlySalary = salary / 12; //calculates monthly salary
    updateMonthlyCost(-monthlySalary); // Subtracts the deleted employee's monthly salary from total
    if (employees.length === 0) {// Sets to '0' if there are no employees left in the array
        updateMonthlyCost(0);
    }
});
     
updateMonthlyCost(annualSalary); //Updates the monthly cost when a new employee is added. 
    
// Added this to reset placeholder after every submission

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


function updateMonthlyCost() { // Function adds up all monthly salaries. 
    let totalMonthlyCost = 0;
    employees.forEach(function(employee) {
      const monthlySalary = employee.annualSalary / 12;
      totalMonthlyCost += monthlySalary;
    });
  
    const monthlyCostFormatted = totalMonthlyCost.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2}); //Formatting to U.S. Currency
    monthlyCost.innerHTML = monthlyCostFormatted;
  
    if (totalMonthlyCost > 20000) { // changes color to monthly cost if dollar amount goes above 20k a month
      monthlyCost.style.backgroundColor = 'red';
    } else {
      monthlyCost.style.backgroundColor = 'white';
    }
  }
  



