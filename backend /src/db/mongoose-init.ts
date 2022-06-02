import mongoose from "mongoose";
import config from "config";
import debug from "debug";
import fs from "fs";

// const error = debug('mongooseInit:error');
// const log = debug('mongooseInit:log');

// const dbConfig = config.get('MongoDB.Configurations') as {[key: string]: string};
// const uri = dbConfig.connection_str;
// //const uri = getUriFromDbConfig(dbConfig)
// mongoose.connect(uri, { useNewUrlParser: true});  // connect to db

// const db = mongoose.connection;

// db.on('error', (err) => {
//     error('connection error:', err);
//     console.error('connection error:', err);
// }).once('open', () => {
//     log('DB connection success!');
//     process.env.NODE_ENV != 'test' ? console.log('DB connection success!') : undefined;
// });

// function getUriFromDbConfig(dbConfig: {[key: string]: string}): string {
//     const {user, port, host, database} = dbConfig
//     let pass = dbConfig.password;
//     pass = (!pass || pass.length <= 0) ? '' : `:${pass}@`;
//     // const uri = `mongodb://${user}${pass}${host}:${port}/${database}`
//     const uri = `mongodb+srv://${user}${pass}${host}/${database}`
//     return uri;
// }
const dbURI =
  "mongodb+srv://dennis:12345@dennis-epicure.vr0ae.mongodb.net/epicure?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log(err));

let db = mongoose.connection;
db.once("open", async () => {
  db.collections;
  let collections = db.collections;
  for (const i in collections) {
    let res = collections[i].find();
    console.log(res.namespace.collection);
    // console.log("collection", );
    // fs.writeFile(
    //   `${res.namespace.collection}.json`,
    //   JSON.stringify(await res.toArray()),
    //   "utf8",
    //   function (err) {
    //     if (err) {
    //       console.log("An error occured while writing JSON Object to File.");
    //       return console.log(err);
    //     }

    //     console.log("JSON file has been saved.");
    //   }
    // );
  }
});
