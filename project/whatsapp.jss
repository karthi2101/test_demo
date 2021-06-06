 function validate() {
   var code = 91;
   var phonenumber = prompt("enter the phonenumber");
   if (phonenumber != "") {
      window.location.href =
        "https://api.whatsapp.com/send?phone=" + code + phonenumber;
     }
  }
   validate();
