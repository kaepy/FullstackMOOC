import ReactDOM from 'react-dom'
import axios from 'axios'
import App from './App'

axios
  .get('https://restcountries.com/v3.1/all')
  .then(response => {
    const all = response.data
    console.log(all)
  })

ReactDOM.render(
  <App />,
  document.getElementById('root')
)