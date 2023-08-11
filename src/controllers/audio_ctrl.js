const logRequest = require('../utils/console/logRequest')
const path = require('path');
const fs = require('fs');
const audioDirectory = path.join(__dirname, '..', 'audio');

async function serveAudio(req, res) {
    logRequest.start(req);
    
    const filename = req.params.filename;
    const audioPath = path.join(audioDirectory, filename);

    try {
        const stats = await fs.promises.stat(audioPath);

        const range = req.headers.range;
        if (!range) {
            res.status(400).send('Range header is required');
            logRequest.error(req, 'Range header is required');
            return;
        }

        const fileSize = stats.size;
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunkSize = end - start + 1;

        res.writeHead(206, {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunkSize,
            'Content-Type': 'audio/mpeg',
        });

        const stream = fs.createReadStream(audioPath, { start, end });
        stream.pipe(res);

        logRequest.success(req);
    } catch (err) {
        res.status(404).send('Audio file not found');
        logRequest.error(req, 'Audio file not found');
    }
}


module.exports = {
    serveAudio,
};
