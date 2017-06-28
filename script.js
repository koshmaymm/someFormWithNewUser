(window.unload = function() {
    let addUser = document.getElementById("addUser");
    addUser.addEventListener("click", addUserFunction, false);

    let inputUserAccount = document.getElementById("inputUserAccount");
    //inputUserAccount.addEventListener("click", hideButtons, false);

    let dangerName = document.getElementById("dangerName");
    dangerName.addEventListener("click", checkInputName, false);

    let inputName = document.getElementById("inputName");
    inputName.addEventListener("click", hideButtons, false);
    inputName.addEventListener("keypress", hideButtons, false);

    let inputPassword = document.getElementById("inputPassword");
    inputPassword.addEventListener("click", hideButtonPass, false);
    inputPassword.addEventListener("keypress", hideButtonPass, false);

    let dangerPassword = document.getElementById("dangerPassword");
    dangerPassword.addEventListener("click", hideButtonPass, false);

    let inputConfirm = document.getElementById("inputConfirm");
    inputConfirm.addEventListener("click", hideButtonConfirm, false);
    inputConfirm.addEventListener("keypress", hideButtonConfirm, false);

    let dangerConfirm = document.getElementById("dangerConfirm");
    dangerConfirm.addEventListener("click", hideButtonConfirm, false);


    /*let props = ['inputUserAccount', 'inputName', 'inputUserType', 'inputProfile', 'inputLevel', 'firstName',
        'lastName', 'inputPassword', 'inputConfirm', 'inputEmail', 'landPhone', 'mobilePhone',
        'inputMap', 'locationLatitude', 'locationLongitude'
    ];*/

    let propsData = [];
    let countParam = 1;

    function addUserFunction() {
        let param0 = inputUserAccount.value;
        if (param0 === "Add New") {
            getDataParam();
        } else {
            console.log(param0 + " was added in Account");
            clearForm();
        }
    }

    function getDataParam() {

        let param1 = document.getElementById("inputName").value;
        if (param1 == '') { checkRequiredFieldsOfNewUser(inputName, dangerName); return false; };


        let param2 = document.getElementById("inputUserType").value;

        let param3 = document.getElementById("inputProfile").value;

        let param4 = document.getElementById("inputLevel").value;

        let param5 = document.getElementById("firstName").value;

        let param6 = document.getElementById("lastName").value;

        let param7 = document.getElementById("inputPassword").value;
        if (param7 == '') { checkRequiredFieldsOfNewUser(inputPassword, dangerPassword); return false; };

        let param8 = document.getElementById("inputConfirm").value;
        if (param8 == '') { checkRequiredFieldsOfNewUser(inputConfirm, dangerConfirm); return false; };
        if (param8 !== param7) { checkRequiredFieldsOfNewUser(inputConfirm, dangerConfirm); return false; };

        let param9 = document.getElementById("inputEmail").value;

        let param10 = document.getElementById("landPhone").value;

        let param11 = document.getElementById("mobilePhone").value;

        let param12 = document.getElementById("inputMap").value;

        let param13 = document.getElementById("locationLatitude").value;
        let param14 = document.getElementById("locationLongitude").value;


        /*console.log("Name: " + param1);
        console.log("UserType: " + param2);
        console.log("Profile: " + param3);
        console.log("Level: " + param4);
        console.log("firstName: " + (param5 || undefined));
        console.log("lastName: " + (param6 || undefined));
        console.log("Password: " + param7);
        console.log("Confirm: " + param8);
        console.log("Email: " + (param9 || undefined));
        console.log("landPhone: " + (param10 || undefined));
        console.log("mobilePhone: " + (param11 || undefined));
        console.log("Map: " + param12);
        console.log("Latitude: " + param13);
        console.log("Longitude: " + param14);*/

        createNewUser(param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14);

        clearForm();
    }

    function checkRequiredFieldsOfNewUser(fieldFocus, fieldButton) {
        fieldButton.setAttribute("class", "democlass");
        fieldFocus.focus();
    }

    function checkInputName() {
        inputName.focus();
        dangerName.setAttribute("class", "hideButtons");
    }

    function clearForm() {
        hideButtons();
        hideButtonPass();
        hideButtonConfirm();
        console.log("<==================================>");
        inputUserAccount.value = "Add New";
        inputName.value = firstName.value = lastName.value = inputPassword.value = inputConfirm.value = inputEmail.value = landPhone.value = mobilePhone.value = "";
        inputUserType.value = "type1";
        inputProfile.value = "Client";
        inputLevel.value = "1";
        inputMap.value = "levelM0";
        locationLatitude.value = locationLongitude.value = "";
        console.log("form was cleared");
    }

    function hideButtons() {
        inputName.focus();
        dangerName.setAttribute("class", "hideButtons");
    }

    function hideButtonPass() {
        inputPassword.focus();
        dangerPassword.setAttribute("class", "hideButtons");
    }

    function hideButtonConfirm() {
        inputConfirm.focus();
        dangerConfirm.setAttribute("class", "hideButtons");
    }

    function createNewUser() {

        let newUser = {}
        newUser.name = arguments[0];
        newUser.type = arguments[1];
        newUser.profile = arguments[2];
        newUser.level = arguments[3];
        newUser.firstName = arguments[4];
        newUser.lastName = arguments[5];
        newUser.password = arguments[6];
        newUser.confirm = arguments[7];

        newUser.email = arguments[8];

        newUser.landPhone = arguments[9];
        newUser.mobilePhone = arguments[10];
        newUser.map = arguments[11];
        newUser.latitude = arguments[12];
        newUser.longitude = arguments[13];

        newUser = JSON.stringify(newUser);

        console.log(newUser);
    }

})();