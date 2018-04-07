'use strict';

const cote = require('cote');

// cliente de pruebas del servicio de generación de thumbnails

const requester = new cote.Requester({ name: 'thumbnail generator client' });
const source = '../public/images/xiaomi.jpg';


  requester.send({
    type: 'resize', 
    source: source,
  }, res => {
     console.log(`thumbnail ${source} generation requested.`);
  });
