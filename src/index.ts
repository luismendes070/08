// ChatGPT 
// src/index.ts
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import csurf from 'csurf';
import helmet from 'helmet';

const app = express();
app.use(cors());
app.use(csurf());
app.disable('x-powered-by');
app.use(helmet());

const port = 3000;

// Middleware to log requests
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
