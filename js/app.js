$(document).ready(function () {
  function addStudent() {
    const id = $("#idNumber").val();
    const firstname = $("#firstName").val();
    const middlename = $("#middleName").val();
    const lastname = $("#lastName").val();

    const studentData = `
                <tr>
                    <td>${id}</td>
                    <td>${firstname}</td>
                    <td>${middlename}</td>
                    <td>${lastname}</td>
                </tr>
            `;

    $("#table-content").append(studentData);

    $("#idNumber").val(" ");
    $("#firstName").val(" ");
    $("#middleName").val(" ");
    $("#lastName").val(" ");
  }

  $("#addStudentButton").click(addStudent);

  
    function addSubject() {
        const code = $('#subjectCode').val().trim();
        const name = $('#subjectName').val().trim();
        const units = $('#units').val().trim();

        if (!code || !name || !units) {
            alert('Please fill in all fields.');
            return;
        }

        // Append new row to the table
        const newRow = `<tr><td>${code}</td><td>${name}</td><td>${units}</td></tr>`;
        $('#table-content').append(newRow);

        // Clear input fields
        $('#subjectCode').val('');
        $('#subjectName').val('');
        $('#units').val('');
    }

    // Attach event handler to button
    $('#addSubject').on('click', addSubject);
})


