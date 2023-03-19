var express = require('express');
var router = express.Router();
const  {Doctor} = require ('../models');
const {log} = require("debug");
const  {Nomer} = require ('../models');
const  {Food} = require ('../models');
const  {Medic} = require ('../models');
const  {Tip} = require ('../models');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/bron', function(req, res, next) {
  res.render('bron', { title: 'Express' });
});
router.get('/docs', async function(req, res, next) {
  const doctors= await Doctor.findAll();
  console.log(doctors);
  res.render('docs', { title: 'Express', doctors });
});
router.get('/registr', function(req, res, next) {
  res.render('registr', { title: 'Express' });
});
router.get('/room', async function(req, res, next) {
  const nomers= await Nomer.findAll();
  console.log(nomers);
  res.render('room', { title: 'Express' , nomers});
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/food', async function(req, res, next) {
  const foods= await Food.findAll();
  console.log(foods);
  res.render('food', { title: 'Express', foods });
});
router.get('/medicine', async function(req, res, next) {
  const medics= await Medic.findAll();
  console.log(medics);
  res.render('medicine', { title: 'Express', medics });
});
router.get('/tip', async function(req, res, next) {
  const tips= await Tip.findAll();
  console.log(tips);
  res.render('tip', { title: 'Express', tips });
});
module.exports = router;
