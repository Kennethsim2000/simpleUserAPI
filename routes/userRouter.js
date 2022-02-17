const express=require('express');
const router=express.Router();
const bodyParser=require('body-parser');
var User=require('./model/user');

router.use(bodyParser.json());

router.route('/')
.get((req, res, next)=> {
    User.find({})
    .then((users)=>{
      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json(users);
    })
    .catch((err)=>{
      res.statusCode=500;
      res.setHeader('Content-Type','application/json');
      res.json({err:err});
    });
});

.post((req,res,next)=>{
    User.create(req.body)
    .then((user)=>{
        console.log('user created ', user);
        res.statusCode=200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
    }, (err)=>next(err))
    .catch((err)=>next(err));
})


.put((req,res,next)=>{
    res.statusCode=403;
    res.end('PUT operation not supported on /user');
})

.delete((req,res,next)=>{
    User.remove({})
   .then((resp)=>{
       res.statusCode=200;
       res.setHeader('Content-Type','application/json');
       res.json(resp);
   }, (err)=>next(err))
   .catch((err)=>next(err));
});

user.route('/:userId')
.get((req,res,next)=>{
    User.findById(req.params.userId)
    .then((user)=>{
        res.statusCode=200;
        res.setHeader('Content-Type', 'application/json');
        res.json(leader);
    },(err)=>next(err))
    .catch((err)=>next(err));
})

.post((req,res,next)=>{
    res.statusCode=403;
    res.end('POST operation not supported on /user/'+ req.params.userId);
})

.put((req,res,next)=>{
    User.findByIdAndUpdate(req.params.userId, {
        $set: req.body
    },{new: true})
    .then((user)=>{
        res.statusCode=200;
        res.setHeader('content-Type', 'application/json');
        res.json(user);
    }, (err)=>next(err))
    .catch((err)=>next(err));
})

.delete((req,res,next)=>{
    User.findByIdAndRemove(req.params.userId)
    .then((leader)=>{
        res.statusCode=200;
        res.setHeader('content-Type', 'application/json');
        res.json(user);
    }, (err)=>next(err))
    .catch((err)=>next(err));
});



module.exports=router;