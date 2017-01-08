var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

//Comment 
  // router.post('/send', function(req, res, next){
  //   // var transporter = nodemailer.createTransport({
  //   //   service: 'Gmail',
  //   //   auth: {
  //   //       user: 'mohamedezz195@gmail.com',
  //   //       pass: 'AnyPassword'
  //   //   }
  //   // });

  //   // var mainOptions = {
  //   //     from    : 'mohamedezz195@gmail.com',
  //   //     to      : 'm.ezz@drupia.com',
  //   //     subject : 'Website Submission',
  //   //     text    : 'You have a new submission with the following details...Name: '+req.body.name+' Email: '+req.body.email+ ' Message: '+req.body.message,
  //   //     html    : '<p>You have a new submission with the following details...</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+ '</li><li>Message: '+req.body.message+'</li></ul>'
  //   // };

  //   // transporter.sendMail(mainOptions, function(err, info){
  //   //   if(err){
  //   //     console.log(err);
  //   //     res.redirect('/');
  //   //   } else{
  //   //     console.log('Message Sent: '+ info.response);
  //   //     res.redirect('/');
  //   //   }
  //   // });
  // });
//comment

router.post('/send', function(req, res, next){
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'mohamedezz195@gmail.com',
      pass: 'daliaismylove_956423'
    }
  });

  var mainOptions = {
    from    : 'John Doe <johndoe@outlook.com>',
    to      : 'm.ezz@drupia.com',
    subject : 'Website Submission',
    text    : 'You have a new submission with the following details...Name: '+req.body.name+' Email: '+req.body.email+ ' Message: '+req.body.message,
    html    : '<p>You have a new submission with the following details...</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+ '</li><li>Message: '+req.body.message+'</li></ul>'    
  };

  transporter.sendMail(mainOptions, function(error, info){
    if(error){
      console.log( error );
      res.redirect( '/' );
    }else{
      console.log( 'Message Sent: '+ info.response );
      res.redirect('/');
    }
  });
});
module.exports = router;
