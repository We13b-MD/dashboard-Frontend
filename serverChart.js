



const { Schema, model } = mongoose;
const dailyMetricSchema = new Schema({
  date: { type: Date, default: Date.now },
  imp: { type: Number, default: 0 },
  clicks: { type: Number, default: 0 },
  ctr: { type: Number, default: 0 },
  reach: { type: Number, default: 0 },
  spend: { type: Number, default: 0 },
  viewabilityRate: { type: Number, default: 0 },
  engagementRate: { type: Number, default: 0 },
  videoStart: { type: Number, default: 0 },
  firstQuartile: { type: Number, default: 0 },
  midpoint: { type: Number, default: 0 },
  thirdQuartile: { type: Number, default: 0 },
  completion: { type: Number, default: 0 },
  pause: { type: Number, default: 0 },
  unmute: { type: Number, default: 0 },
 
});

// Create the model
const DailyMetric = model('DailyMetric', dailyMetricSchema);

app.get('/data-by-date', async (req, res) => {
    try {
        const { date } = req.query; // Expect date in YYYY-MM-DD format

        // Convert the date string to a Date object
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);

        // Fetch data for the specified date
        const data = await DailyMetric.find({
            date: { $gte: startOfDay, $lte: endOfDay }
        });

        res.json(data);
    } catch (err) {
        console.error('Error fetching data by date:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});