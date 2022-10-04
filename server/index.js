import express from 'express';
import bodyParsser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParsser.json({limit: "30mb", extended: true}))
app.use(bodyParsser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())