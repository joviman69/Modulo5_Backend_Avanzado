'use strict';

// Servicio de generación de Thumbnails

const cote = require('cote');
var Jimp = require("jimp");

const responder = new cote.Responder({ name: 'thumbnail generator responder'});

responder.on('resize', (req, done) => {
  
const source = req.source;
const filename = source.split('/')[source.split('/').length-1];
const path = source.split('/').slice(0, source.split('/').length-1).join('/') + '/';


  Jimp.read(source).then(function (image) {
    image.resize(50, 50, Jimp.RESIZE_NEAREST_NEIGHBOR)  // resize 
         .write(`${path}/thumbnails/${filename}`);      // save 



}).catch(function (err) {
    console.error(err);
});

  done(console.log(`thumb_${filename} saved.`));
});
