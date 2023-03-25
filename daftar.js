const daftar = document.getElementById("daftar");
daftar.onclick = regis;


function regis(e) {
    e.preventDefault();

    const nama = document.getElementById("daf_nama").value;
    const pass = document.getElementById("daf_pass").value;
    const bio = document.getElementById("daf_bio").value;
    //const gender = document.querySelector('input[name = "gend"]:checked').value;
    const dom = document.getElementById("daf_dom").value;
   // const fav = document.getElementById("daf_mkn").value;
    const foto = document.getElementById("daf_foto").value;
    // const loc_Form = JSON.parse(localStorage.getItem("form"));
    // const loc_nama = loc_Form[0].nama;
    // const loc_pass = loc_Form[0].pass;
    // let jenisfav = [];
    // let fav= document.getElementsByName("fav[]");
    // for (let z = 0; z < fav.length; z++) {
    //     if (fav[z].checked == true) {
    //         jenisfav.push(fav[z].value);
    //     }
    // }
    const form = { nama, pass,bio,dom,foto};

    let forms = JSON.parse(localStorage.getItem("forms")) || [];
    forms.push(form);

    // Save updated forms array to localStorage
    localStorage.setItem("forms", JSON.stringify(forms));
    localStorage.setItem("Nama", nama);
    localStorage.setItem("Password", pass);
    localStorage.setItem("Bio", bio);
   // localStorage.setItem("Gender", gender);
  //  localStorage.setItem("Jenis makanan favorit", jenisfav);
    localStorage.setItem("domisili", dom);
    localStorage.setItem("foto", foto);
    


    // if()
    if (nama != "" && pass!=""){
    alert("Registrasi Berhasil, Silahkan Login");
    window.location = "index.php";
    }else{
        alert('Anda harus mengisi data Username & Password!');
    }        
}