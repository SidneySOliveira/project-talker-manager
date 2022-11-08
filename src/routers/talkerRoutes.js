const express = require('express');
const {
   nameValidation,
   ageValidation,
   talkValidation,
   watchedAtValidation,
   rateValidation,
 } = require('../middlewares/inputsValidation');
const tokenValidation = require('../middlewares/tokenValidation');

const {
   getTalkers,
   writeTalker,
   upTalker,
   delTalker,
   filterTalker,
 } = require('../utils/functions');

const router = express.Router();

router.get('/search', tokenValidation, async (req, res) => {
   const { q } = req.query;
   const filteredTalker = await filterTalker(q);
   res.status(200).json(filteredTalker);
});

router.get('/', async (req, res) => {
   const talkers = await getTalkers();
   res.status(200).json(talkers);
});

router.get('/:id', async (req, res) => {
   const id = Number(req.params.id);
   const talkers = await getTalkers();
   const talker = await talkers.find((t) => t.id === id);
   if (talker) {
      res.status(200).json(talker);
   } else {
      res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
   }
});

router.post('/',
tokenValidation, 
nameValidation,
ageValidation,
talkValidation,
watchedAtValidation,
rateValidation,
async (req, res) => {
   const talker = req.body;
   const registeredTalker = await writeTalker(talker);
   res.status(201).json(registeredTalker);
});

router.put('/:id',
tokenValidation, 
nameValidation,
ageValidation,
talkValidation,
watchedAtValidation,
rateValidation,
async (req, res) => {
   const id = Number(req.params.id);
   const newDates = req.body;
   const talkers = await getTalkers();
   const talker = talkers.find((t) => t.id === id);
   if (talker) {
      const updatedDatesTalker = { id, ...newDates };
      const updatedTalker = await upTalker(updatedDatesTalker);
      res.status(200).json(updatedTalker);
   } else {
      res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
   }
});

router.delete('/:id', tokenValidation, async (req, res) => {
   const id = Number(req.params.id);
   const talkers = await getTalkers();
   const talker = talkers.find((t) => t.id === id);
   if (talker) { 
      await delTalker(id);
      res.status(204).end();
   } else {
      res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
   }
});

module.exports = router;