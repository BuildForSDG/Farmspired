const router = require('express').Router();

function routes() {
  router.post('/contactMessage', (req, res) => {
    res.json(req.body);
  });

  router.post('/askQuestion', (req, res) => {
    res.json(req.body);

  });
  return router;
}

module.exports = routes();
