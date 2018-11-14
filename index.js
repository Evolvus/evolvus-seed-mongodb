var debug = require("debug")("evolvus-seed-mongodb:index");
var fs = require('fs');
const fse = require('fs-extra');
var Engine = require('velocity').Engine;
var mongoSeed = require("mongo-seed");
var fileConfig = require("./fileConfig").configure;
var port = process.env.DB_PORT || 27017;
var host = process.env.DB_HOST || "localhost";
var name = process.env.DB_NAME || "TestSeed";
const dir = process.env.SCRIPT_HOME || '/data/SA/Script';

module.exports.seedMongo = (context) => {
    return new Promise((resolve, reject) => {
        try {
            debug(`Input parameter: ${JSON.stringify(context)}`);
            create(fileConfig, context, () => {
                mongoSeed.load(host, port, name, dir, "dir", function (err) {
                    if (err) {
                        debug(`Error seeding DB: ${err}`);
                        reject(err);
                    } else {
                        debug("Your SeedData Added SuccessFully");
                        resolve("Your SeedData Added SuccessFully");
                    }
                });
            });
        } catch (error) {
            debug(`Try-catch failed due to ${error}`);
            reject(error);
        }
    });
}

function create(files, context, callback) {
    files.forEach(file => {
        const outputdir = file.outputdir;
        // const finalDir = `${outputdir}/${file.mkpath}`;
        if (!fs.existsSync(outputdir)) {
            fs.mkdirSync(outputdir);
        }
        var engine = new Engine({
            "template": file.template,
            "output": `${dir}/${file.fileName}`
        });
        var result = engine.render(context);
    });
    callback();
}
