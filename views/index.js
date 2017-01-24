var h = require('hyperscript')
var main = document.querySelector('main')
var morph = require('morphdom')

module.exports = function showContence() {

return h('div.contenceDiv', {},
h('div.aboutMe', {}, 'About Me'),
h('div.cv', {}, 'CV'),
h('div.projects', {}, 'Projects'),
h('div.contactMe', {}, 'Contact Me')
)

}
