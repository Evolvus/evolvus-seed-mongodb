const path = require('path');
const dir = process.env.SCRIPT_HOME || '/data/SA/Script';

module.exports.configure = [{
  template: './data/applications.vm',
  fileName: 'applications.json',
  outputdir: `${dir}`,
  context: './context.js',
  output: `${dir}/applications.json`
},
{
  template: './data/entities.vm',
  fileName: 'entites.json',
  outputdir: `${dir}`,
  context: './context.js',
  output: `${dir}/entities.json`

}, {
  template: './data/mastercurrencies.vm',
  fileName: 'mastercurrencies.json',
  outputdir: `${dir}`,
  context: './context.js',
  output: `${dir}/mastercurrencies.json`
}, {
  template: './data/mastertimezones.vm',
  fileName: 'mastertimezones.json',
  outputdir: `${dir}`,
  context: './context.js',
  output: `${dir}/mastertimezones.json`
},
{
  template: './data/menus.vm',
  fileName: 'menus.json',
  outputdir: `${dir}`,
  context: './context.js',
  output: `${dir}/menus.json`
}, {
  template: './data/roles.vm',
  fileName: 'roles.json',
  context: './context.js',
  outputdir: `${dir}`,
  output: `${dir}/roles.json`
},
{
  template: './data/supporteddateformats.vm',
  fileName: 'supporteddateformats.json',
  context: './context.js',
  outputdir: `${dir}`,
  output: `${dir}/supporteddateformats.json`
},
{
  template: './data/lookups.vm',
  fileName: 'lookups.json',
  outputdir: `${dir}`,
  context: './context.js',
  output: `${dir}/lookups.json`
},
{
  template: './data/swesetups.vm',
  fileName: 'swesetups.json',
  context: './context.js',
  outputdir: `${dir}`,
  output: `${dir}/swesetups.json`
}
];