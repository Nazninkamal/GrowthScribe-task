const express = require('express')
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const cors = require('cors');
require('dotenv').config();
const app = express()
const port = process.env.PORT || 5000;
;

//middelware
app.use(cors());
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.orb6q.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   console.log(`connect to the db`)
//   // perform actions on the collection object
//   client.close();
// });

async function run() {
  try {
    await client.connect();
    console.log('connected to the')
    const database = client.db("grouthScribe");
    const subscriberCollection = database.collection("subscribers");
   

    // get api
    app.get('/subscriber', async(req, res)=>{
      const cursor = subscriberCollection.find({});
      const subscriber = await cursor.toArray();
      res.send(subscriber);
    })

    //post api
    app.post('/subscriber', async(req, res)=>{
      const subscriber = req.body;
       console.log('hit the post api', subscriber);

       const result = await subscriberCollection.insertOne(subscriber);
       console.log(result);
       res.json(result)
    
      }) ;


  } 
  
  finally {
    // await client.close();
  }
}
run().catch(console.dir);



      

app.get('/', (req, res) => {
  res.send('grouthscribe app');
});

app.listen(port, () => {
  console.log('grouthscribe app on port',port)
})