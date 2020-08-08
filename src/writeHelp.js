const { fstat } = require("fs")

module.exports = async function(help, path) {
    return await fs.writeFile(path, help);
}