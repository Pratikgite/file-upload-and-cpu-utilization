const schedule = require('node-schedule');
const Message = require('../models/MessageModel');

exports.MessageSchedule = async (req, res) => {
    const { message, day, time } = req.body;
    const now = new Date();
    const [hour, minute] = time.split(':').map(Number);
  
    // get IST time
    const istDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        day,
        hour,
        minute,
        0
    );

    schedule.scheduleJob(istDate, async () => {
        await Message.create({ message, createdAt: new Date() });
        console.log(`Message scheduled and saved at IST time: ${istDate}`);
    });
  
    res.json({
        msg: 'Scheduled',
        date: istDate.toString(),
    });
};