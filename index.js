var h = require('hyperscript')
var main = document.querySelector('main')

var title = h('div.titleDiv', {}, h('h1.titleText', {}, 'jasminewt.xyz'))

var contence = h('div.contenceDiv', {},
h('div.aboutMe', {}, 'eyyy'),
h('div.cv', {}, 'heeeyyy'),
h('div.projects', {}),
h('div.contactMe', {})
)

main.appendChild(title)
main.appendChild(contence)
