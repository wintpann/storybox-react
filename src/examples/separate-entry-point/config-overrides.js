const path = require('path');

const rewireEntry = (config) => {
    config.entry = path.resolve(__dirname, 'src', 'storybox', 'index.js');
    return config;
};

module.exports = rewireEntry;