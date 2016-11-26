var express = require('express');
var compress = require('compression');

const PORT = process.env.PORT || 3000;

var app = express();

app.use(compress());
app.use(express.static('public'));

// this is used for the woopra user id
app.get('/getipaddress', function (req, res) {
  if ( app.get('env') === 'development' ) {
    res.send('false')
  } else {
    res.send(req.connection.remoteAddress);
  }
})

app.listen( PORT, function() {
  console.log('Server running on port ' + PORT);
});
