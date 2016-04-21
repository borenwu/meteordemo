import React,{Component} from 'react'
import ReactDOM from 'react-dom'


export default class Sidebar extends Component{

    getLinks(){
        return [
            {_id:1,text:'Main',href:'/mainpage'},
            {_id:2,text:'Order',href:'/order'},
            {_id:3,text:'Task',href:'/task'},
            {_id:4,text:'Statistics',href:'/stat'},
            {_id:5,text:'finance',href:'/finance'},
        ]
    }


    render(){

        let rows = this.getLinks().map(function(link){
            return(
                <li key={link._id}>
                    <i className="glyphicon glyphicon-search"></i>
                    <span><a href={link.href}>{link.text}</a></span>
                </li>
            )
        })

        return(
            <div className="primary-sidebar">
                <ul className="nav navbar-collapse collapse navbar-collapse-primary">
                    {rows}
                </ul>
            </div>
        )
    }
}