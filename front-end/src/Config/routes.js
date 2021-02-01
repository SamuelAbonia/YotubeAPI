import { Search } from '../Components/Search/Search'
import { VideoList } from '../Components/VideoList/VideoList'
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
                <Route exact path='/' component={Search}></Route>
                <Route exact path='/videos/:query' component={VideoList}></Route>
            </Switch>
        </Router>
    </div>

)
export default BaseRouter;