import React from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import { HashRouter, Route, Switch} from 'react-router-dom'

const App = () => {
    return (
        <HashRouter>
            <main>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                </Switch>
            </main>
        </HashRouter>
        
    )
}

export default App