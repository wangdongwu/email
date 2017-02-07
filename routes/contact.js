var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var marked = require('marked');

var juice = require('juice');
var fs=require("fs");
var data=fs.readFileSync("../email/public/javascripts/lib/github-markdown-css/github-markdown.css","utf-8");
data = '<style>'+data+'</style>';

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.post('/', function (req, res, next) {
    var transporter = nodemailer.createTransport({
        service: 'QQex',
        auth: {
            user: '',
            pass: ''
        }
    });




    var context = '<div class="markdown-body">'+marked(req.body.context)+'</div>';
    var allhtml = juice(data+context);

    var mailOptions = {
        from:  'xxx@qq.com', // sender address
        to: req.body.to, // list of receivers
        subject:  req.body.subject, // Subject line
        text: 'Hello world ?', // plaintext body
        html: allhtml // html body
    };

    transporter.sendMail(mailOptions, function (error, response) {
        res.setHeader('status',200);
    if (error) {
        res.json({
            success: false,
            msg: '失败'
        })
    }else {
        res.json({
            success: true,
            msg: '发送成功'
        })
    }
});
})
;

module.exports = router;
