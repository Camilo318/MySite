import React from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <main>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                </Switch>
            </main>
        </BrowserRouter>
        
    )
}

export default App