const PolicyInfo = require('../models/PolicyInfoModel');
const User = require('../models/UserModel');

exports.SearchByName = async (req, res) => {
    const user = await User.findOne({ firstname: req.params.name });
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const policies = await PolicyInfo.find({ userId: user._id });
    res.json(policies);
};

exports.Aggregate = async (req, res) => {
  const result = await PolicyInfo.aggregate([
    { $group: { _id: '$userId', total: { $sum: 1 } } }
  ]);
  res.json(result);
};