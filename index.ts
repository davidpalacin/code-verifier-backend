import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express();

const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
	res.send('Hello, world');
});

app.get('/hello', (req: Request, res: Response) => {
	res.send('Route GET: Hello');
});

app.listen(port, () => {
	console.log('Server listening on port ' + port);
});