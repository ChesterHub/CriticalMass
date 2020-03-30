import React from 'react'
import {render} from 'react-dom'

import App from './components/App.jsx'
import {data} from './navigation.js'

render(<App data={data}/>, document.getElementById('main'))