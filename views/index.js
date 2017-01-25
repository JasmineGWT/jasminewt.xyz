var h = require('hyperscript')
var main = document.querySelector('main')
var morph = require('morphdom')
var showAboutMe = require('./aboutMe')
var aboutMeClicked = false
module.exports = function showContence() {

return h('div.contenceDiv', {},
h('div.aboutMe', {}, h('h2', {onclick: function () {
  var aboutMeClicked = true
  showAboutMe(aboutMeClicked)
}}, showAboutMe(aboutMeClicked))),
h('div.cv', {}, 'CV'),
h('div.projects', {}, 'Projects'),
h('div.contactMe', {}, 'Contact Me')
)

}

var aboutMe = showAboutMe()
main.appendChild(aboutMe)
