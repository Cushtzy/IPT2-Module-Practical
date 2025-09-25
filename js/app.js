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
});
