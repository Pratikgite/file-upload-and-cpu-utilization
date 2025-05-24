const { Worker } = require('worker_threads');

exports.Uploads = (req, res) => {
    const worker = new Worker('./workers/uploadWorker.js', {
        workerData: { filePath: req.file.path },
    });

    worker.on('message', msg => res.json({ status: 'done', msg }));
    worker.on('error', err => res.status(500).json({ error: err.message }));
};