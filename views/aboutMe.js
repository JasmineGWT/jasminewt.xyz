var h = require('hyperscript')

module.exports = function showAboutMe(i) {
  if (i === true) {
    return h('p', {}, 'My name is jasmine')
  } else {
    return h('h1', {}, 'About me')
  }
}
