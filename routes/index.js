var express = require('express');
var router = express.Router();

var auto = [ ['1', 'Скания 1', 'Своободен', '15', 'Тимур'],
             ['2', 'Скания 2', 'В пути', '16', 'Эльдар'],
             ['3', 'Камаз тент 1', 'В пути', '9', 'Ренат'],
             ['4', 'Газель 1', 'В пути', '5', 'Джанмир'],
             ['5', 'Газель 2', 'Своободен', '6', 'Артур'],
             ['6', 'Портер 1', 'Своободен', '4', 'Ким'] ];
             
/* GET home page. */
router.get('/', function(req, res, next) {
  
  var n = (req.param('n'));
  if (!n) {
    res.render('index', { title: 'Автопарк', auto: auto });
  } else {
    res.render('autoshow', {title: 'Информация об авто', auto: auto, n: n });
  }
});

module.exports = router;
