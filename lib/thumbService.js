'use strict';

// Servicio de generación de Thumbnails

const cote = require('cote');
var Jimp = require("jimp");

const responder = new cote.Responder({ name: 'thumbnail generator responder'});

responder.on('resize', (req, done) => {
  
const source = req.source;
const filename = source.split('/').pop();
const targetPath =  '../public/images/thumbnails';

  Jimp.read(source).then(function (image) {
    image.resize(100, 100, Jimp.RESIZE_NEAREST_NEIGHBOR)  // resize 
         .write(`${targetPath}/${filename}`);      // save 


}).catch(function (err) {
    console.error(err);
});

  done(console.log(`thumb_${filename} saved.`));
});
