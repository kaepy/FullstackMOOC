import ReactDOM from 'react-dom/client'
import App from './App'

// ReactDOM ajetaan vain kerran sivunlatauksen yhteydessä.
//console.log("Debug: Index render start")
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
//console.log("Debug: Index render end ")