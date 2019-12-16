//RESPONSABLE DE LLAMAR A LOS DOS MÓDULOS
/* DEPENDENCIES */
import '../scss/colors.scss';
import $ from 'jquery';
import uuid from 'uuid';
import Cat from './module-a';
import './module-b';


const myCat = new Cat("Puchu", 11);

myCat.saySomthing("cuchiflu");

$("#btnAction").click(() => alert(`jQuery & uuId: ${uuid()}`));