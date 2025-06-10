const newman = require('newman');
require ('dotenv').config();

newman.run({
    collection: `https://api.postman.com/collections/45657327-33830019-0a3a-4c6e-a05d-e4958756e9d0?access_key=${process.env.pmatKey}`,
    //collection:require('./collection/dmoney-user-api-collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/reports.html',
        }
    }

}, function(err){
    if(err) {throw err;}
    console.log('collection run complete!');
})