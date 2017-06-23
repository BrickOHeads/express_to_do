var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var html = '<form action="/" method="post">' +
           '<h1>My Todo list today</h1>' +
           '<input type="text" name="todo" placeholder="enter todo here.." />' +
           '<br>' +
           '<br>' +
           '<button type="submit">Submit</button>'
           '<br>' +
           '<br>' +
           '</form>';

app.get('/', function(req, res){

  res.send(html);
});

app.post('/', function(req, res){

    var todo = req.body.todo;
    var strike = req.body.strike;
    function crossedOut(strike) {
        if (document.getElementById(strike).checked===true) {
            // if box is checked, cross off text
            document.getElementById(strike).className = "checked-off";
        } else {
            // if box is unchecked, make text back to normal (not crossed off)
            document.getElementById(strike).className = "normal";
        }
    }
      html +=
      '<ul>' +
      '<input id="strike" class = "strike" type="checkbox"/>   ' + todo +

      '</ul>'
      var strike = req.body.strike;
      function crossedOut(strike) {
          if (document.getElementById(strike).checked===true) {
              // if box is checked, cross off text
              document.getElementById(strike).className = "checked-off";
          } else {
              // if box is unchecked, make text back to normal (not crossed off)
              document.getElementById(strike).className = "normal";
          }
      }
      res.send(html);
    // }
  });

app.listen(3000, function(){
  console.log('Started express application!')
});
