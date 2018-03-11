const mongo=require('mongodb');
const assert=require('assert');

const MongoClient=mongo.MongoClient; //start server
const Urls="mongodb://localhost:27017/demo1";

MongoClient.connect(Urls,function(err,db){
  assert.equal(null,err);

  //插入数据
  db.collection("user").insert({"name":"lz","age":27,"pwd":"123"},(err,result)=>{
    assert.equal(err,null);
    console.log(result);
    db.close();
  })
})