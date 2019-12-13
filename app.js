const express = require('express');
const ejs = require('ejs');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
/**
 * 这是数据库
 */
const Models = require('./models');

const app = express();

app.engine('html', ejs.__express);

/**
 * 模板引擎
 */
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(bodyParser.json());
/**
 * 路由
 */
app.get('/login', async (req, res) => {
  res.render('login.ejs', {
    username: 'username',
    password: 'password',
  });
});

/*app.post('/login', async (req, res) => {
  const {
    sid,
    sname,
  } = req.body;
  //const sid = req.body.sid;
  //const sname = req.body.sname;
  var sid = req.body.sid;
  var sname = req.body.sname;
  let model = {
    sid: sid,
    sname: sname,
  };
  const userInfo = await models.students.create(model);

  return res.send('success');
  //return res.send(sid);
  //return res.send(sname);

  //return res.render('login.ejs', userInfo);
});*/

app.post('/login', async (req, res) => {
  /*var saveUser = {
    sid: req.body.sid,
    sname: req.body.sname
  };*/
  const {
    sid,
    sname,
  } = req.body;
  /*const userInfo = await Models.students.create({
    sid,
    sname,
  });*/
  let result = Models.students.create({
    sid,
    sname
  });
  console.log(result);
  return res.render('login.ejs');
});
/*app.post('/login', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  res.send('Welcome ' + req.body.sid);
});*/
app.listen(3003);