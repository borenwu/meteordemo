import React,{Component} from 'react'
import ReactDOM from 'react-dom'

export default class MainPage extends Component{

    render(){
        return(
            <div>
                <h1>This is main page</h1>
                <a href="/signout">Sign out</a>
            </div>
        )
    }
}