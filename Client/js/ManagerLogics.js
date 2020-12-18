userOperationsListeners();

function userOperationsListeners() {
    console.log("hi1");
    $("#submit-button").click(() => {
        console.log("hi2");
        const firstName = $("#inputFirstName").val();
        const lastName = $("#inputLastName").val();
        const password = $("#password").val();
        const email = $("#inputEmail").val();
        const projectName = $("project-name").val();
        if (password != undefined && firstName != undefined) {
            console.log("BLA");
            $("#show-button").css("display", "block");
        }
        console.log(firstName,lastName,password,email,projectName);
    });

}