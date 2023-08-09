const home = async (req, res) => {
    try {
        const title = 'Home'; // Set your title here
        res.render('pages/home', { title }); // Render the 'home' view
    } catch (err) {
        res.status(500).json({ error: 'Failed to load page' });
    }
};

module.exports = home;
