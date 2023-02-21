console.log ("Hello World");


let employees = [];


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


  employees.push({ firstName, idNumber, jobTitle, annualSalary });

  const row = table.insertRow();
  const cellFirstName = row.insertCell(0);
  const cellIdNumber = row.insertCell(1);
  const cellJobTitle = row.insertCell(2);
  const cellAnnualSalary = row.insertCell(3);
  const cellDeleteButton = row.insertCell(4);
  cellFirstName.innerHTML = firstName;
  cellLastName.innerHTML = lastName;
  cellIdNumber.innerHTML = idNumber;
  cellJobTitle.innerHTML = jobTitle;
  cellAnnualSalary.innerHTML = annualSalary.toFixed(2);
  cellDeleteButton.innerHTML = '<button class="deleteButton">Delete</button>';
  const deleteButton = cellDeleteButton.querySelector('.deleteButton');
  deleteButton.addEventListener('click', function () {
   
    const index = employees.findIndex((employee) => employee.idNumber === idNumber);
    employees.splice(index, 1);
   
    table.deleteRow(row.rowIndex);
   
    updateMonthlyCost();
  });

 
  updateMonthlyCost();
}

function updateMonthlyCost() {
  const totalSalary = employees.reduce((total, employee) => total + employee.annualSalary, 0);
  const totalMonthlyCost = totalSalary / 12;
  monthlyCost.innerHTML = `$${totalMonthlyCost.toFixed(2)}`;
  if (totalMonthlyCost > 20000) {
    monthlyCost.style.backgroundColor = 'red';
  } else {
    monthlyCost.style.backgroundColor = '';
  }
}
