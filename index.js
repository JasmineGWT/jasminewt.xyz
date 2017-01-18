import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import { createStore } from 'redux'

import reducer from './reducer'

render(<App name='jasmine.xyz' />, document.querySelector('main'))
console.log('welcome to jasmine.xyz')
