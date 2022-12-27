const students = [
    {name: "Bekmurod", group: "NT-79", success: true},
    {name: "Asliddin", group: "NT-77", success: true},
    {name: "Ahmadxon", group: "NT-70", success: false},
    {name: "Ibrohim", group: "NT-77", success: false},
    {name: "Xojiakbarxon", group: "NT-70", success: true},
    {name: "Abbos", group: "NT-79", success: true},
    {name: "Iroda", group: "NT-77", success: true},
    {name: "Abduraxim", group: "NT-70", success: false},
    {name: "Komiljon", group: "NT-79", success: false},
    {name: "Javlonbek", group: "NT-70", success: true},
    {name: "Muhammadrizo", group: "NT-79", success: true},
    {name: "Azizbek", group: "NT-79", success: false},
    {name: "Jahongir", group: "NT-71", success: false},
    {name: "Alisher", group: "NT-79", success: true},
    {name: "Jake", group: "NT-77", success: true},
    {name: "Kate", group: "NT-65", success: false},
    {name: "Sam", group: "NT-77", success: false},
    {name: "Phil", group: "NT-34", success: true},
    {name: "Ed", group: "NT-45", success: true},
    {name: "Tami", group: "NT-34", success: true},
    {name: "Mary", group: "NT-45", success: false},
    {name: "Becky", group: "NT-67", success: false},
    {name: "Joey", group: "NT-45", success: true},
    {name: "Jeff", group: "NT-34", success: true},
    {name: "Zack", group: "NT-79", success: false},
    {name: "Zack", group: "NT-71", success: false},
];

const studentsTbody = document.getElementById('student-table-tbody');

function added(fill){
    studentsTbody.innerHTML = ""
    fill.forEach(function (student, index) {
        const nameTr = document.createElement('tr');
        nameTr.addEventListener('click', (e) => {
            alert(student.name + " "+ student.group +" " + student.success)
        })

        const orderTh = document.createElement('th')
        orderTh.setAttribute('scope', 'row')
        orderTh.innerHTML = index + 1;

        const nameTd = document.createElement('td');
        nameTd.innerHTML = student.name;

        const groupTd = document.createElement('td');
        groupTd.innerHTML = student.group;

        const successTd = document.createElement('td');
        const result = document.createElement('span');
        result.classList.add('badge');

        if (student.success) {
            result.classList.add('bg-success')
            result.innerHTML = "O'tdi";
        } else  {
            result.classList.add('bg-danger');
            result.innerHTML = "Yiqildi";
        }
        successTd.append(result)

        nameTr.append(orderTh, nameTd, groupTd, successTd);

        studentsTbody.append(nameTr);
    })
}
added(students);

const filterStudents = document.getElementById('student-filter');

filterStudents.addEventListener('input', (e) => {
    const searchValue =  e.target.value;
    const filterStudent = students.filter(elem => elem.name.toLowerCase().includes(searchValue.toLowerCase()))
    added(filterStudent);
})

const groupFilter = document.getElementById('group-filter');
groupFilter.addEventListener("input", (e) => {
    const groupInputValue = e.target.value;
    const groupFilter = students.filter(groupElem => groupElem.group.toLowerCase().includes(groupInputValue.toLowerCase()))
    added(groupFilter)
})