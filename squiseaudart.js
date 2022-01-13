'use strict'

const express = require('express');
const { ArtModel } = require('./index.js')

const router = express.Router();

router.get('/art', read);
router.get('/art/:id', read);
router.post('/art', create);
// router.put('/art/:id', update);
router.delete('/art/:id', destroy);

async function read(req, res, next) {

  let { id } = req.params;
  let art;
  if(id) {
    art = await ArtModel.findOne({where: {id}});
  } else {
    art = await ArtModel.findAll();
  }
  res.status(200).json(art)
}

async function create(req, res, next) {
  let art = req.body
  let arts = await ArtModel.create(art);
  res.status(200).json(arts);
}

async function destroy(req, res, next) {
  let art = req.params;
  let arts = await ArtModel.destroy({where: art});
  res.status
}