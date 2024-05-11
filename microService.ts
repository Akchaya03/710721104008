import express, { Request, Response } from 'express';
const app = express();
const PORT = 9876;
app.use(express.json());
app.post('/calculate', (req: Request, res: Response) => {
    const { numbers } = req.body;
    if (!numbers || !Array.isArray(numbers) || numbers.length === 0) {
        return res.status(400).json({ error: 'Invalid input data' });
    }
    const average = numbers.reduce((acc: number, curr: number) => acc + curr, 0) / numbers.length;
    res.json({ success: true, average });
});
app.listen(PORT, () => {
    console.log(`Calculation Microservice is running on port ${PORT}`);
});
