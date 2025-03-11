const mongoose = require('mongoose')
const {schema, model} = mongoose
const Schema = mongoose.Schema

const dailyMetricSchema = new Schema({
    date: { type: String, required: true, unique: true }, // Ensure uniqueness for dates
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
    mute: { type: Number, default: 0 },
    
   
  });
  
  // Create the model
  const DailyMetric = model('DailyMetric', dailyMetricSchema);
  module.exports = DailyMetric;