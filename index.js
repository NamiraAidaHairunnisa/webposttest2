const log = document.getElementById("login");
log.onclick = login;



function login(e) {
    e.preventDefault();
    
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;
    //const loc_Form = JSON.parse(sessionStorage.getItem("form"));
    // const loc_User = loc_Form[0].nama;
    // const loc_Password = loc_Form[0].pass;
    const form = { user, pass};

    let forms = JSON.parse(localStorage.getItem("forms")) || [];
    forms.push(form);

    // Save updated forms array to sessionStorage
    localStorage.setItem("forms", JSON.stringify(forms));

    const loc_User = localStorage.getItem("Nama");
    const loc_Password = localStorage.getItem("Password");

    if (loc_User == user && loc_Password == pass) {
        alert("Login Berhasil");
        window.location = "utama.html";
    } else if ("admin" == user && "123" == pass) {
        alert("Login Berhasil");
        window.location = "utama.html";
    } else {
      alert("Username atau Password Anda salah");
    }
}