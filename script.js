(window.unload = function() {
    let addUser = document.getElementById("addUser"),
        inputUserAccount = document.getElementById("inputUserAccount"),
        dangerName = document.getElementById("dangerName"),
        inputName = document.getElementById("inputName"),
        inputPassword = document.getElementById("inputPassword"),
        dangerPassword = document.getElementById("dangerPassword"),
        inputConfirm = document.getElementById("inputConfirm"),
        dangerConfirm = document.getElementById("dangerConfirm");

    allEvents();

    function allEvents() {
        addUser.addEventListener("click", addUserFunction, false);
        dangerName.addEventListener("click", hideButtons, false);
        inputName.addEventListener("click", hideButtons, false);
        inputName.addEventListener("keypress", hideButtons, false);
        inputPassword.addEventListener("click", hideButtonPass, false);
        inputPassword.addEventListener("keypress", hideButtonPass, false);
        dangerPassword.addEventListener("click", hideButtonPass, false);
        inputConfirm.addEventListener("click", hideButtonConfirm, false);
        inputConfirm.addEventListener("keypress", hideButtonConfirm, false);
        dangerConfirm.addEventListener("click", hideButtonConfirm, false);
    }

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

        /* let param1 = document.getElementById("inputName").value;
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
         let param14 = document.getElementById("locationLongitude").value;*/

        //createNewUser(param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14);
        createNewUser({
            name: document.getElementById("inputName").value,
            inputUserType: document.getElementById("inputUserType").value,
            inputProfile: document.getElementById("inputProfile").value,
            inputLevel: document.getElementById("inputLevel").value,
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            inputPassword: document.getElementById("inputPassword").value,
            inputConfirm: document.getElementById("inputConfirm").value,
            inputEmail: document.getElementById("inputEmail").value,
            landPhone: document.getElementById("landPhone").value,
            mobilePhone: document.getElementById("mobilePhone").value,
            inputMap: document.getElementById("inputMap").value,
            locationLatitude: document.getElementById("locationLatitude").value,
            locationLongitude: document.getElementById("locationLongitude").value
        });
        //clearForm();
    }

    function checkRequiredFieldsOfNewUser(fieldFocus, fieldButton) {
        fieldButton.setAttribute("class", "btn-danger");
        fieldFocus.focus();
        console.log("HI");
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

    function createNewUser(newUser) {
        newUser = JSON.stringify(newUser);
        if (newUser.name == "") {
            console.log(newUser.name);
            checkRequiredFieldsOfNewUser(inputName, dangerName);
            return false;
        }
        console.log(newUser);
    }

})();