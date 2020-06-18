/*var nombre="paolo";
var contrasenia="123";
if (nombre === "paolo") {
	document.write("<h2>login exitoso</h2>")
}
 	var typecard="tarjeta de david"
 switch(typecard){
 	case "tarjeta de david":
 	document.write("<h1>lo lograste esta es la tarjeta de david</h1>");
 	break;
 }
 let numero=10;
 document.write("<h1>lo lograste contemos hasta 10 numeros</h1>")
 while(numero>0){
 	document.write(numero+",");
 	numero=numero-1;
 }

 function respuesta(){
 	document.write("<h1>lograste crear la funcion</h1>")
 }
 respuesta();


   function encabezado(){
   	document.write
   	("<div> lograste crear un div</div>")
   	document.write("<h1>lograste la funcion encabezado</h1>")

    https://api.cloudinary.com/v1_1/dcjossohn/image/upload
    edyhdjtp
   }
*/
const imagePreview = document.getElementById('img_perfil');
const imageUploader = document.getElementById('img_subida');

const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/dcjossohn/image/upload`;
const CLOUDINARY_UPLOAD_PRESET = 'edyhdjtp';

imageUploader.addEventListener('change', async (e) => {
    // console.log(e);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    const res = await axios.post(
        CLOUDINARY_URL,
        formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        }
    );
    console.log(res);
    imagePreview.src = res.data.secure_url;
});
