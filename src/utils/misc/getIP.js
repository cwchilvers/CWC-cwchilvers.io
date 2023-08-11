module.exports = async (req) => {
    return await req.headers['x-forwarded-for'] || req.connection.remoteAddress;
}