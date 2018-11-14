const path = require('path');
const dir = process.env.SCRIPT_HOME || '/data/SA/Script';
var k=path.resolve(__dirname,'./data');

module.exports.configure = [{
  template: `${k}/applications.vm`,
  fileName: 'applications.json',
  outputdir: `${dir}`,
  context: './context.js',
  output: `${dir}/applications.json`
},
{
  template: `${k}/entities.vm`,
  fileName: 'entities.json',
  outputdir: `${dir}`,
  context: './context.js',
  output: `${dir}/entities.json`

}, {
  template: `${k}/mastercurrencies.vm`,
  fileName: 'mastercurrencies.json',
  outputdir: `${dir}`,
  context: './context.js',
  output: `${dir}/mastercurrencies.json`
}, {
  template: `${k}/mastertimezones.vm`,
  fileName: 'mastertimezones.json',
  outputdir: `${dir}`,
  context: './context.js',
  output: `${dir}/mastertimezones.json`
},
{
  template: `${k}/menus.vm`,
  fileName: 'menus.json',
  outputdir: `${dir}`,
  context: './context.js',
  output: `${dir}/menus.json`
}, {
  template: `${k}/roles.vm`,
  fileName: 'roles.json',
  context: './context.js',
  outputdir: `${dir}`,
  output: `${dir}/roles.json`
},
{
  template: `${k}/supporteddateformats.vm`,
  fileName: 'supporteddateformats.json',
  context: './context.js',
  outputdir: `${dir}`,
  output: `${dir}/supporteddateformats.json`
},
{
  template: `${k}/lookups.vm`,
  fileName: 'lookups.json',
  outputdir: `${dir}`,
  context: './context.js',
  output: `${dir}/lookups.json`
},
{
  template: `${k}/swesetups.vm`,
  fileName: 'swesetups.json',
  context: './context.js',
  outputdir: `${dir}`,
  output: `${dir}/swesetups.json`
}
];