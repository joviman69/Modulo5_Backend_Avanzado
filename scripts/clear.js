"use strict";

const mongoose = require("mongoose");
const conn = mongoose.connection;
const Anuncio = require("../models/Anuncio");
const fs = require("fs");

conn.once("open", () => {
  (async () => {
    try {
      await Anuncio.collection.drop();
    } catch (err1) {
      console.log("Error en drop", err1);
    }
  })().catch(err => console.log(err));
});
