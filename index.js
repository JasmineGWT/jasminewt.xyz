var h = require('hyperscript')
var main = document.querySelector('main')
var showContence = require('./views/index')


var title = h('div.titleDiv', {}, h('h1.titleText', {}, 'jasminewt.xyz'))

var contence = showContence()
main.appendChild(title)
main.appendChild(contence)
