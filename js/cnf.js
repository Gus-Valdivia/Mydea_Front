let Plus_Logo = document.getElementById("Plus_L");
let Input_L = document.getElementById("logo_cnf");
let Most_Img = document.getElementById("Prev_Log");

let img_1_cnf = document.getElementById("Plus_i1");
let img_2_cnf = document.getElementById("Plus_i2");
let img_3_cnf = document.getElementById("Plus_i3");
let imginp1_cnf = document.getElementById("inp_img1_cnf");
let imginp2_cnf = document.getElementById("inp_img2_cnf");
let imginp3_cnf = document.getElementById("inp_img3_cnf");
let imgc1_cnf = document.getElementById("imagen1_neg");
let imgc2_cnf = document.getElementById("imagen2_neg");
let imgc3_cnf = document.getElementById("imagen3_neg");

let HorA_Lun = document.getElementById("Abierto_L");
let HorC_Lun = document.getElementById("Cerrado_L");

let HorA_Mar = document.getElementById("Abierto_M");
let HorC_Mar = document.getElementById("Cerrado_M");

let HorA_Mie = document.getElementById("Abierto_Mi");
let HorC_Mie = document.getElementById("Cerrado_Mi");

let HorA_Jue = document.getElementById("Abierto_J");
let HorC_Jue = document.getElementById("Cerrado_J");

let HorA_Vie = document.getElementById("Abierto_V");
let HorC_Vie = document.getElementById("Cerrado_V");

let HorA_Sab = document.getElementById("Abierto_S");
let HorC_Sab = document.getElementById("Cerrado_S");

let HorA_Dom = document.getElementById("Abierto_D");
let HorC_Dom = document.getElementById("Cerrado_D");

let Cerr_Lun = document.getElementById("cerr_lun");
let She_Lun = document.getElementById("she_lun");

let Cerr_Mar = document.getElementById("cerr_mar");
let She_Mar = document.getElementById("she_mar");

let Cerr_Mie = document.getElementById("cerr_mie");
let She_Mie = document.getElementById("she_mie");

let Cerr_Jue = document.getElementById("cerr_jue");
let She_Jue = document.getElementById("she_jue");

let Cerr_Vie = document.getElementById("cerr_vie");
let She_Vie = document.getElementById("she_vie");

let Cerr_Sab = document.getElementById("cerr_sab");
let She_Sab = document.getElementById("she_sab");

let Cerr_Dom = document.getElementById("cerr_dom");
let She_Dom = document.getElementById("she_dom");

let Form_Sub_Neg = document.getElementById("Datos_Negocio");
let Btn_AProduct = document.getElementById("Btn_AñadirP");
let Btn_DNProduct = document.getElementById("Btn_DtNg");
let Txt_tittle_cnf = document.getElementById("dt_txt_cnf");

document.addEventListener('DOMContentLoaded', function() {
  var radiosDias = document.querySelectorAll('.form-check-input');

  // Agregar un manejador de eventos de clic a cada radio con la clase 'radio-dias'
  radiosDias.forEach(function(radio) {
      radio.addEventListener('click', function() {
          mostrarDiv(this.id);
          console.log(this.id);
      });
  });
});

function mostrarDiv(diaSeleccionado) {
  // Ocultar todos los divs
  console.log(diaSeleccionado)
  var divs = document.getElementsByClassName('inpb_cnf');
  for (var i = 0; i < divs.length; i++) {
      divs[i].style.display = 'none';
  }

  // Mostrar el div correspondiente al día seleccionado
  var divMostrar = document.getElementById('h' + diaSeleccionado + '_cnf');
  console.log(divMostrar);
  if (divMostrar) {
      divMostrar.style.display = 'flex';
  }
}

/*Imagenes Carrusel*/

img_1_cnf.addEventListener("click", function () {
  imginp1_cnf.click();
});

function showPreviewImage1(event) {
  imgc1_cnf.style.display = "flex";
  img_1_cnf.style.position = "absolute";
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    imgc1_cnf.src = event.target.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}

imginp1_cnf.addEventListener("change", showPreviewImage1);

img_2_cnf.addEventListener("click", function () {
  imginp2_cnf.click();
});

function showPreviewImage2(event) {
  imgc2_cnf.style.display = "flex";
  img_2_cnf.style.position = "absolute";
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    imgc2_cnf.src = event.target.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}

imginp2_cnf.addEventListener("change", showPreviewImage2);

img_3_cnf.addEventListener("click", function () {
  imginp3_cnf.click();
});

function showPreviewImage3(event) {
  imgc3_cnf.style.display = "flex";
  img_3_cnf.style.position = "absolute";
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    imgc3_cnf.src = event.target.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}

imginp3_cnf.addEventListener("change", showPreviewImage3);


/*LOGOTIPO*/
Plus_Logo.addEventListener("click", function () {
  Input_L.click();
});

function showPreviewImage(event) {
  Most_Img.style.display = "flex";
  Plus_Logo.style.position = "absolute";
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    Most_Img.src = event.target.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}

Input_L.addEventListener("change", showPreviewImage);

/*HORARIOS*/

Cerr_Lun.addEventListener("change", ()=>{
  if(Cerr_Lun.checked){
    HorA_Lun.disabled = true;
    HorC_Lun.disabled = true;
    She_Lun.disabled = true;
  }
  if(!Cerr_Lun.checked){
    HorA_Lun.disabled = false;
    HorC_Lun.disabled = false;
    She_Lun.disabled = false;
  }
});

Cerr_Mar.addEventListener("change", ()=>{
  if(Cerr_Mar.checked){
    HorA_Mar.disabled = true;
    HorC_Mar.disabled = true;
    She_Mar.disabled = true;
  }
  if(!Cerr_Mar.checked){
    HorA_Mar.disabled = false;
    HorC_Mar.disabled = false;
    She_Mar.disabled = false;
  }
});

Cerr_Mie.addEventListener("change", ()=>{
  if(Cerr_Mie.checked){
    HorA_Mie.disabled = true;
    HorC_Mie.disabled = true;
    She_Mie.disabled = true;
  }
  if(!Cerr_Mie.checked){
    HorA_Mie.disabled = false;
    HorC_Mie.disabled = false;
    She_Mie.disabled = false;
  }
});

Cerr_Jue.addEventListener("change", ()=>{
  if(Cerr_Jue.checked){
    HorA_Jue.disabled = true;
    HorC_Jue.disabled = true;
    She_Jue.disabled = true;
  }
  if(!Cerr_Jue.checked){
    HorA_Jue.disabled = false;
    HorC_Jue.disabled = false;
    She_Jue.disabled = false;
  }
});

Cerr_Vie.addEventListener("change", ()=>{
  if(Cerr_Vie.checked){
    HorA_Vie.disabled = true;
    HorC_Vie.disabled = true;
    She_Vie.disabled = true;
  }
  if(!Cerr_Vie.checked){
    HorA_Vie.disabled = false;
    HorC_Vie.disabled = false;
    She_Vie.disabled = false;
  }
});

Cerr_Sab.addEventListener("change", ()=>{
  if(Cerr_Sab.checked){
    HorA_Sab.disabled = true;
    HorC_Sab.disabled = true;
    She_Sab.disabled = true;
  }
  if(!Cerr_Sab.checked){
    HorA_Sab.disabled = false;
    HorC_Sab.disabled = false;
    She_Sab.disabled = false;
  }
});

Cerr_Dom.addEventListener("change", ()=>{
  if(Cerr_Dom.checked){
    HorA_Dom.disabled = true;
    HorC_Dom.disabled = true;
    She_Dom.disabled = true;
  }
  if(!Cerr_Dom.checked){
    HorA_Dom.disabled = false;
    HorC_Dom.disabled = false;
    She_Dom.disabled = false;
  }
});

She_Lun.addEventListener("change", ()=>{
  if(She_Lun.checked){
    HorA_Lun.disabled = true;
    HorC_Lun.disabled = true;
    Cerr_Lun.disabled = true;
  }
  if(!She_Lun.checked){
    HorA_Lun.disabled = false;
    HorC_Lun.disabled = false;
    Cerr_Lun.disabled = false;
  }
});

She_Mar.addEventListener("change", ()=>{
  if(She_Mar.checked){
    HorA_Mar.disabled = true;
    HorC_Mar.disabled = true;
    Cerr_Mar.disabled = true;
  }
  if(!She_Mar.checked){
    HorA_Mar.disabled = false;
    HorC_Mar.disabled = false;
    Cerr_Mar.disabled = false;
  }
});

She_Mie.addEventListener("change", ()=>{
  if(She_Mie.checked){
    HorA_Mie.disabled = true;
    HorC_Mie.disabled = true;
    Cerr_Mie.disabled = true;
  }
  if(!She_Mie.checked){
    HorA_Mie.disabled = false;
    HorC_Mie.disabled = false;
    Cerr_Mie.disabled = false;
  }
});

She_Jue.addEventListener("change", ()=>{
  if(She_Jue.checked){
    HorA_Jue.disabled = true;
    HorC_Jue.disabled = true;
    Cerr_Jue.disabled = true;
  }
  if(!She_Jue.checked){
    HorA_Jue.disabled = false;
    HorC_Jue.disabled = false;
    Cerr_Jue.disabled = false;
  }
});

She_Vie.addEventListener("change", ()=>{
  if(She_Vie.checked){
    HorA_Vie.disabled = true;
    HorC_Vie.disabled = true;
    Cerr_Vie.disabled = true;
  }
  if(!She_Vie.checked){
    HorA_Vie.disabled = false;
    HorC_Vie.disabled = false;
    Cerr_Vie.disabled = false;
  }
});

She_Sab.addEventListener("change", ()=>{
  if(She_Sab.checked){
    HorA_Sab.disabled = true;
    HorC_Sab.disabled = true;
    Cerr_Sab.disabled = true;
  }
  if(!She_Sab.checked){
    HorA_Sab.disabled = false;
    HorC_Sab.disabled = false;
    Cerr_Sab.disabled = false;
  }
});

She_Dom.addEventListener("change", ()=>{
  if(She_Dom.checked){
    HorA_Dom.disabled = true;
    HorC_Dom.disabled = true;
    Cerr_Dom.disabled = true;
  }
  if(!She_Dom.checked){
    HorA_Dom.disabled = false;
    HorC_Dom.disabled = false;
    Cerr_Dom.disabled = false;
  }
});

//Botón Datos del Negocio
Btn_DNProduct.addEventListener("click", ()=>{
  Form_Sub_Neg.style.display = "flex";
  Btn_DNProduct.classList.add("bg-dark");
  Btn_DNProduct.style.color = "#FFF";
  Btn_DNProduct.style.fontWeight = "bolder";
  Btn_AProduct.classList.remove("bg-dark");
  Btn_AProduct.classList.remove("text-white");
  Btn_AProduct.style.fontWeight = "400";
  Btn_AProduct.classList.add("btn_nav_cnf_btn2");
  Btn_AProduct.style.color = "#000";
  Txt_tittle_cnf.innerText = "Datos del Negocio";
});

//Botón Añadir Productos
Btn_AProduct.addEventListener("click", ()=>{
  Form_Sub_Neg.style.display = "none";
  Btn_AProduct.classList.add("bg-dark");
  Btn_AProduct.style.color = "#FFF";
  Btn_AProduct.style.fontWeight = "bolder";
  Btn_DNProduct.classList.remove("bg-dark");
  Btn_DNProduct.classList.remove("text-white");
  Btn_DNProduct.style.fontWeight = "400";
  Btn_DNProduct.classList.add("btn_nav_cnf_btn2");
  Btn_DNProduct.style.color = "#000";
  Txt_tittle_cnf.innerText = "Añadir Productos";
});