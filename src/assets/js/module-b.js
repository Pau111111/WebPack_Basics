//MODULO JAVASCRIPT QUE USE LIBRERIA JQUERY
import $ from 'jquery';
import uuid from 'uuid';

$("#btnAction").click(() => alert(`jQuery & uuId: ${uuid()}`));