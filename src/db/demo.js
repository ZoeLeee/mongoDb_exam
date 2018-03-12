const MongoClient=require('mongodb').MongoClient;
const assert=require('assert');

const Urls="mongodb://localhost:27017/cad";

MongoClient.connect(Urls,function(err,db){
  assert.equal(null,err);

  // //插入数据
  // db.collection("t1").insert({"name":"lz","age":27},(err,result)=>{
  //   assert.equal(err,null);
  //   console.log(result);
  // })
  console.log("connect cad");
  let cad=db.db("cad");
  cad.createCollection('user',(err,res)=>{
    assert.equal(err,null);
    console.log("创建集合 user");
  })
  // cad.collection('user').insert({name:"zoe",pwd:"123"},(err,res)=>{
  //   assert.equal(err,null);
  //   console.log("插入数据成功");
  // })
  db.close();
})