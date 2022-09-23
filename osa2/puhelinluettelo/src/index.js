import ReactDOM from 'react-dom'
import axios from 'axios'
import App from './App'

// Takaisinkutsufunktio ottaa vastauksen sisällä olevan datan muuttujaan ja tulostaa muistiinpanot konsoliin
axios
  .get('http://localhost:3001/persons')
  .then(response => {
    const persons = response.data
    console.log(persons)
  })

ReactDOM.render(
  <App />,
  document.getElementById('root')
)