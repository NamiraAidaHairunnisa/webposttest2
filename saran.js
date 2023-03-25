function saveForm() {

    const nama = document.getElementById("Nama").value;
    const email = document.getElementById("email").value;
    const medsos = document.getElementById("medsos").value;
    const kuliner = document.querySelector('input[name = "jns"]:checked').value;
    const tempat = document.getElementById("tmpt").value;
    const foto = document.getElementById("gbr").value;
    const alamat = document.getElementById("almt").value;

    let jenismenu = [];
    let menu = document.getElementsByName("menu[]");
    for (let z = 0; z < menu.length; z++) {
        if (menu[z].checked == true) {
            jenismenu.push(menu[z].value);
        }
    }

    
    const form = { nama, email, medsos, kuliner, tempat, foto, alamat, jenismenu };

    let forms = JSON.parse(sessionStorage.getItem("forms")) || [];
    forms.push(form);

    // Save updated forms array to sessionStorage
    sessionStorage.setItem("forms", JSON.stringify(forms));


    

    alert("Saran Anda berhasil dikirim! Akan kami validasi dulu ya, Terima Kasih (Hasil Inputan bisa discroll ke bawah)");
    tampilkanData();
    
}

function tampilkanData() {
    const forms = JSON.parse(sessionStorage.getItem("forms")) || [];

    const hasil = document.getElementById("hasil");
    hasil.innerHTML = "<h2>>Berikut Saran yang Anda berikan:</h2>";

    for (let i = 0; i < forms.length; i++) {
        const data = forms[i];
    hasil.innerHTML = "<h2>Berikut Saran yang Anda berikan:</h2>";
    hasil.innerHTML += "<p>Nama: " + data.nama + "</p>";
    hasil.innerHTML += "<p>Email: " + data.email + "</p>";
    hasil.innerHTML += "<p>Media Sosial: " + data.medsos + "</p>";
    hasil.innerHTML += "<p>Jenis Kuliner: " + data.kuliner + "</p>";
    hasil.innerHTML += "<p>Jenis Menu: " + data.jenismenu + "</p>";
    hasil.innerHTML += "<p>Tempat: " + data.tempat + "</p>";
    hasil.innerHTML += "<p>Foto Tempat/Menu: " + data.foto + "</p>";
    hasil.innerHTML += "<p>Detail Tempat/Alamat: " + data.alamat + "</p>";
    
}
}
// form.addEventListener('submit', (event)=>{

    
//     event.preventDefault();
//     const nama = form.nama.value;
//     const email = form.email.value;
//     const medsos = form.medsos.value;
//     const kuliner = form.kuliner.value;
//     const tempat = form.tempat.value;
//     const foto = form.foto.value;
//     const alamat = form.alamat.value;

//     storeData(nama,email, medsos, kuliner, tempat, foto,alamat);


// alert("Saran Anda berhasil dikirim! Akan kami validasi dulu ya, Terima Kasih (Hasil Inputan bisa discroll ke bawah)");
// tampilkanData();
// });