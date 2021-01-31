import { Search } from '../Components/Search/Search'
import  React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'


const BaseRouter = (props) => (
    <div className = 'container' style={{width :'100%'}}>
        <Router>
            <Switch>
                <Route path='/' component={Search}></Route>
            </Switch>
        </Router>
    </div>

)
export default BaseRouter;