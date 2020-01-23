//RESPONSABLE DE LLAMAR A LOS DOS MÓDULOS

// CSS
import '../assets/scss/main.scss';

//LIBRARIES
import $ from 'jquery';

//MODULES
import Cat from '../assets/js/module-a';
import '../assets/js/module-b';

//IMAGES
// import image1 from '../assets/img/gato-siames-playing.jpg';
// import image2 from '../assets/img/gato-siames.jpg';
// import image3 from '../assets/img/siames-tumbado.jpg';

const myCat = new Cat("Puchu", 11);
myCat.saySomthing("cuchiflu");

/*console.log(getUrl(image1));

$("#image1").attr("src", getUrl(image1));
$("#image2").attr("src", getUrl(image2));
$("#image3").attr("src", getUrl(image3));

//Function that parse URL to use compressed images
function getUrl (image) {
    var img = "" + image;
    var finalUrl = `assets${img.substring(2)}`;
    return finalUrl;
};*/