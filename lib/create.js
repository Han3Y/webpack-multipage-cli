const fs = require('fs')
const handlebars = require('handlebars')
const chalk = require('chalk')
const path = require('path')

module.exports = async (name) => {
    console.log('create', name);
    const lessPath = path.resolve(process.cwd(), './app/less/', `${name}.less`);
    const jsPath = path.resolve(process.cwd(), './app/js/', `${name}.js`);
    const htmlPath = path.resolve(process.cwd(), './app/html/', `${name}.html`);
    fs.writeFileSync(lessPath, '');
    const meta = {name};
    compile(meta, jsPath, path.resolve(__dirname, '../template/template.js.hbs') )
    compile(meta, htmlPath, path.resolve(__dirname, '../template/template.html.hbs') )
}

/**
 *
 * @param {*} meta
 * @param {*} filePath
 * @param {*} templatePath
 */
function compile(meta, filePath, templatePath) {
    if (fs.existsSync(templatePath)) {
        const content = fs.readFileSync(templatePath).toString()
        const result = handlebars.compile(content)(meta)
        fs.writeFileSync(filePath, result)
    }
    console.log(chalk.red(`🚀${filePath} 创建成功`))
}
