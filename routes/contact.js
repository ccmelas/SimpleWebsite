var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next) {
    res.render('contact', {title: 'Contact'});
});

router.post('/send', function(req, res, next) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'chiemelachinedum@gmail.com',
            pass: 'happyman4jesus'
        }
    });

    var mailOptions = {
        from: 'John Doe <johndoe@gmail.com>',
        to: 'chiemelachinedum@gmail.com',
        subject: 'Message From First Node Website',
        text: 'You have a new submission with the following details... \nName: ' + req.body.name + ' \nEmail: ' + req.body.email + '\nMessage: ' + req.body.message,
        html: '<p>You got a new submission with the following details...</p><ul><li>Name: '+ req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            console.log(error);
            res.redirect('/');
        } else {
            console.log('Message sent: ' + info.response);
            res.redirect('/');
        }
    });
});
module.exports = router;