const interface = require('./interface');
const file = require('./file');
const network = require('./network');
const openAbility = require('./openAbility');
const reportAnalytics = require('./reportAnalytics');
const storage = require('./storage');
const media = require('./media.js');
const equipment = require('./equipment.js');
module.exports = {
    ...interface,
    ...file,
    ...network,
    ...openAbility,
    ...reportAnalytics,
    ...storage,
    ...media,
    ...equipment
};