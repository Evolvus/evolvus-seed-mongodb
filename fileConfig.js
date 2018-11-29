const path = require('path');
const dir = process.env.SCRIPT_HOME || '/data/SA/Script';
var k = path.resolve(__dirname, './data');
var scriptsPath = process.env.SCRIPT_PATH || k;

module.exports.configure = [{
  template: `${scriptsPath}/applications.vm`,
  fileName: 'applications.json',
  outputdir: `${dir}`,
  context: './context.js',
  output: `${dir}/applications.json`
},
{
  template: `${scriptsPath}/entities.vm`,
  fileName: 'entities.json',
  outputdir: `${dir}`,
  context: './context.js',
  output: `${dir}/entities.json`

}, {
  template: `${scriptsPath}/mastercurrencies.vm`,
  fileName: 'mastercurrencies.json',
  outputdir: `${dir}`,
  context: './context.js',
  output: `${dir}/mastercurrencies.json`
}, {
  template: `${scriptsPath}/mastertimezones.vm`,
  fileName: 'mastertimezones.json',
  outputdir: `${dir}`,
  context: './context.js',
  output: `${dir}/mastertimezones.json`
},
{
  template: `${scriptsPath}/menus.vm`,
  fileName: 'menus.json',
  outputdir: `${dir}`,
  context: './context.js',
  output: `${dir}/menus.json`
}, {
  template: `${scriptsPath}/roles.vm`,
  fileName: 'roles.json',
  context: './context.js',
  outputdir: `${dir}`,
  output: `${dir}/roles.json`
},
{
  template: `${scriptsPath}/supporteddateformats.vm`,
  fileName: 'supporteddateformats.json',
  context: './context.js',
  outputdir: `${dir}`,
  output: `${dir}/supporteddateformats.json`
},
{
  template: `${scriptsPath}/lookups.vm`,
  fileName: 'lookups.json',
  outputdir: `${dir}`,
  context: './context.js',
  output: `${dir}/lookups.json`
},
{
  template: `${scriptsPath}/swesetups.vm`,
  fileName: 'swesetups.json',
  context: './context.js',
  outputdir: `${dir}`,
  output: `${dir}/swesetups.json`
}
];