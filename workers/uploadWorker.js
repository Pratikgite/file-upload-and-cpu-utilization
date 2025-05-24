const { parentPort, workerData } = require('worker_threads');
const fs = require('fs');
const csv = require('csv-parser');
const mongoose = require('mongoose');
const Agent = require('../models/AgentModel');
const User = require('../models/UserModel');
const UserAccount = require('../models/UserAccountModel');
const PolicyCategory = require('../models/PolicyCategoryModel');
const PolicyCarrier = require('../models/PolicyCarrierModel');
const PolicyInfo = require('../models/PolicyInfoModel');

mongoose.connect('mongodb://localhost:27017/policyDB');

fs.createReadStream(workerData.filePath)
    .pipe(csv())
    .on('data', async (row) => {
        const agent = await Agent.findOneAndUpdate({ name: row.agent }, {}, { upsert: true, new: true });
        const user = await User.findOneAndUpdate({ email: row.email }, {
            firstname: row.firstname, 
            dob: row.dob, 
            address: row.address, 
            phone: row.phone,
            state: row.state, 
            zip: row.zip, 
            gender: row.gender, 
            userType: row.userType,
        }, { upsert: true, new: true });

        const account = await UserAccount.findOneAndUpdate({ name: row.account_name }, {}, { upsert: true, new: true });
        const category = await PolicyCategory.findOneAndUpdate({ name: row.category_name }, {}, { upsert: true, new: true });
        const carrier = await PolicyCarrier.findOneAndUpdate({ name: row.company_name }, {}, { upsert: true, new: true });

        await PolicyInfo.create({
            number: row.policy_number,
            startDate: row.policy_start_date,
            endDate: row.policy_end_date,
            categoryId: category._id,
            companyId: carrier._id,
            userId: user._id,
        });
    })
    .on('end', () => {
        parentPort.postMessage('Upload complete');
    });