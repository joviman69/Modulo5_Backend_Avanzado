"use strict";

const mongoose = require("mongoose");
const conn = require("../lib/connectMongoose");
const Anuncio = require("../models/Anuncio");

conn.once("open", () => {
  (async () => {
    try {
      await Anuncio.collection.drop();
      setTimeout(() => {
        conn.close();
      }, 2000);
    } catch (err1) {
      console.log("Error en drop", err1);
    }
  })().catch(err => console.log(err));
});
