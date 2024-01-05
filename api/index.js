import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import conn from './db.js';
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));

app.get("/", (req, res) => {
conn.query(`SELECT text FROM text_product`, [], (err, result) => {
if(err){
console.log(err);
return res.json(err);
}
res.json(result);
});
})

app.listen(3001, () => console.log('vpereed'));
