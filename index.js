const figlet = require("figlet")
    , transWord = 'hello'
    , express = require('express')
    , app = express()
    , port = 3000;

// Post 방식으로 보낼 시, 아래 두 use 사용
app.use(express.json());                        // json으로 Parsing
app.use(express.urlencoded({
    extended: false 
}));

figlet(transWord, function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        
        return;
    }
    console.log(data);
});

// Ejs의 설정
app.set('view engine', 'ejs');                  // 뷰 엔진을 ejs로 사용
app.set('views', './views');                    // 경로 설정

// root
app.get('/', function (req, res) {
    res.render('index', { 
        title : 'view engine !!!'
    });
});

// Get
app.get('/get', (req, res) => {
    res.send(`ID : <span>${req.query.id}</span><br>PW : <span>${req.query.pwd}</span>`);
});

// Post
app.post('/post', (req, res) => {
    res.send(`ID : <span>${req.body.id}</span><br>PW : <span>${req.body.pwd}</span>`);
});

// app.listen(Port 번호)
app.listen(port, () => {
    console.log(`port :: ${port}`);
});