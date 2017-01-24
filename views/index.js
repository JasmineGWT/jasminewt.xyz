var h = require('hyperscript')
var main = document.querySelector('main')
var morph = require('morphdom')
var showAboutMe = require('./aboutMe')
module.exports = function showContence() {

return h('div.contenceDiv', {},
h('div.aboutMe', {}, h('h2', {onclick: function () {
  var aboutMe = showAboutMe()
  main.appendChild(aboutMe)
}
 }, 'About Me')),
h('div.cv', {}, 'CV'),
h('div.projects', {}, 'Projects'),
h('div.contactMe', {}, 'Contact Me')
)

}
