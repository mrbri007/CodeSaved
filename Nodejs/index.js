const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // list everything inside a folder if it has
    // files folder read hone ke baad hi callback function execute hoga and return an array of files name
    fs.readdir('./files', (err, files) => {
        // console.log(files); 
        res.render('index', { files: files });
        // object ke form mai hum files ke data ko as a files name [or whatever name] hum bhej sakte haii to view ejs ko
        // we created two files names abc.txt and abcd.txt
    });
    // res.render('index');
});

// jab mai read more pe click karunga toh iss route pe redirect ho jaunga
// utf-8 : english mai read hogi otherwise hexadecimal code mai output aayega

// parameter pass hoga one by one 1. read hoga 2. parse hoga 3. callback function
app.get('/file/:filename', (req, res) => {
    fs.readFile(`./files/${req.params.filename}`,'utf-8', function(err, filedata) {
        //  console.log(filedata)
        // res.render("show")
        res.render("show", {filename:req.params.filename, filedata : filedata});
    })
});

app.get('/edit/:filename', (req, res) => {
        res.render('edit', {filename:req.params.filename})
    })

// form data sumbit hone par iss route pe aayega
app.post('/formData', (req, res) => {
    // "hello world kendall jenner".split(' ')
    // ['hello', 'world', 'kendall', 'jenner']
    // "hello world kendall jenner".split(' ').join()
    // 'hello,world,kendall,jenner'
    // "hello world kendall jenner".split(' ').join('')
    // 'helloworldkendalljenner'

    // files folder mai ek file banao jiska name should be the user input
    // fs.writeFile(file, data[, options], callback)
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function (err) {
        res.redirect('/')
    })
    // console.log(req.body); --> { title: 'Hello', details: 'This was amazing' }
})

// { previous: 'KendallJenner.txt', new: 'ana.txt' }
app.post('/edit', (req, res) => {
        // console.log(req.body) 
        // { previous: 'KendallJenner.txt', new: 'ana.txt' }

        fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}`, function(err){
            res.redirect('/') // agr error aaya toh ye print ho jayega
        })
    })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// BASIC STEUP
// npm init -y
// npm i express
// npm i -ejs
// npm i -g nodemon

// backend code - Hello world
// form [2] code
// static folder code with path file [public/js/css]
// ejs code - views [index.ejs]