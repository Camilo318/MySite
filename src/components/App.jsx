import React from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import { HashRouter, Route, Switch} from 'react-router-dom'
import Footer from './Footer'

const App = () => {
    return (
        <HashRouter>
            
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
            </Switch>
            <Footer />
        </HashRouter>
        
    )
}

export default App