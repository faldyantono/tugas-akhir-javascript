function buat_login() {
  var a = document.getElementById("X");
  a.parentElement.removeChild(a);

  var p = document.createElement("P");
  p.className = "tulisan_login";
  p.innerHTML = "Silahkan Login";

  var element = document.getElementsByTagName("div")[0];
  element.appendChild(p);

  var form = document.createElement("FORM");
  element.appendChild(form);

  var label = document.createElement("label");
  label.innerHTML = "Username";
  form.appendChild(label);

  var input_username = document.createElement("input");
  input_username.type = "text";
  input_username.name = "username";
  input_username.className = "form_login";
  input_username.placeholder = "Nama User..";
  form.appendChild(input_username);

  var label2 = document.createElement("label");
  label2.innerHTML = "Nomor Handphone";
  form.appendChild(label2);

  var input_Nohp = document.createElement("input");
  input_Nohp.type = "number";
  input_Nohp.name = "number"
  input_Nohp.className = "form_login"
  input_Nohp.placeholder = " Nomor Handphone.."
  form.appendChild(input_Nohp);

  var label3 = document.createElement("label");
  label3.innerHTML = "Username";
  form.appendChild(label3);

  var input_useremail = document.createElement("input");
  input_useremail.type = "text";
  input_username.name = "username";
  input_useremail.className = "form_login";
  input_useremail.placeholder = "Email atau Username..";
  form.appendChild(input_useremail);

  var label4 = document.createElement("label");
  label4.innerHTML = "Password";
  form.appendChild(label4);

  var input_password = document.createElement("input");
  input_password.type = "password";
  input_username.name = "Password";
  input_password.className = "form_login";
  input_password.placeholder = "Password..";
  form.appendChild(input_password);

  var tombol = document.createElement("input");
  tombol.type = "submit";
  tombol.className = "tombol_login";
  form.appendChild(tombol);
}