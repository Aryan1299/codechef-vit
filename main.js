var express = require('express')
var app = express()
var path = require('path')
const request = require('request')
var port = process.env.PORT || 3000

app.use(express.static("static"))

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index', {
    message: ""
  })
})

app.get('/index', (req, res) => {
  res.render('index', {
    message: ""
  })
})

app.get('/2015', function (req, res) {
  res.render('2015', {
    message: ""
  })
})

app.get('/2016', function (req, res) {
  res.render('2016', {
    message: ""
  })
})

app.get('/2017', function (req, res) {
  res.render('2017', {
    message: ""
  })
})

app.get('/2018', function (req, res) {
  res.render('2018', {
    message: ""
  })
})

app.get('/2019', function (req, res) {
  res.render('2019', {
    message: ""
  })
})

app.get('/upcoming', function (req, res) {
  res.render('upcoming', {
    message: ""
  })
})

app.get('/sponsor', function (req, res) {
  res.render('sponsor', {
    message: ""
  })
})

app.get('/leadership', function (req, res) {
  res.render('leadership', {
    message: ""
  })
})

app.get('/contact', function (req, res) {
  res.render('contact', {
    message: ""
  })
})

app.get('/about', function (req, res) {
  res.render('about', {
    message: ""
  })
})

// Error Messages

app.get(function (req, res) {
  res.status(400).render('error');
});

app.use(function (req, res) {
  res.status(400).render('error');
});

app.get(function (req, res) {
  res.status(403).render('error');
});

app.use(function (req, res) {
  res.status(403).render('error');
});

app.get(function (req, res) {
  res.status(502).render('error');
});

app.use(function (req, res) {
  res.status(502).render('error');
});

app.get(function (req, res) {
  res.status(503).render('error');
});

app.use(function (req, res) {
  res.status(503).render('error');
});

app.get(function (req, res) {
  res.status(504).render('error');
});

app.use(function (req, res) {
  res.status(504).render('error');
});

app.listen(port, () => {
  console.log('Server is running on http://localhost:3000')
})