import express from 'express';
import { Request, Response } from 'express';
import path from "node:path";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../../public')));

app.get('*', (req: Request, res: Response) => {
    console.log('GET *', req.query);
    const file = path.join(__dirname, '../../public', 'index.html');
    res.sendFile(file);
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});