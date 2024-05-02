const express=require('express');
const router=express.Router();
const server = express();
server.listen(8000);
server.use(router);

router.get('/',(req,res)=>{
    res.send("Data API endpoints")
})

router.get('/learnerdata',(req,res)=>{
    res.sendFile('data/sfl_product.learner_data.json',{root:__dirname});
})

router.get('/organizationdata',(req,res)=>{
    res.sendFile('data/sfl_product.organization_data.json',{root:__dirname});
})

router.get('/programdata',(req,res)=>{
    res.sendFile('data/sfl_product.program_data.json',{root:__dirname});
})

router.get('/reportdata',(req,res)=>{
    res.sendFile('data/sfl_product.report.json',{root:__dirname});
})

router.get('/sfladmindata',(req,res)=>{
    res.sendFile('data/sfl_product.sfl_admin_data.json',{root:__dirname});
})

router.get('/subadmindata',(req,res)=>{
    res.sendFile('data/sfl_product.sub_admin_data.json',{root:__dirname});
})

router.get('/superadmindata',(req,res)=>{
    res.sendFile('data/sfl_product.super_admin_data.json',{root:__dirname});
})

router.get('/report',(req,res)=>{
    res.sendFile('data/report_data.json',{root:__dirname});
})

