import express, { Request, Response } from 'express';
const app = express();
const PORT = 5001;
app.use(express.json());
app.post('/input', (req: Request, res: Response) => {
    const { numbers } = req.body;
    if (!numbers || !Array.isArray(numbers)){
        return res.status(400).json({ error: 'Invalid input data' });
    }
    res.json({ success: true, numbers });
});
app.listen(PORT, () => {
    console.log(`Input Microservice is running on port ${PORT}`);
});
