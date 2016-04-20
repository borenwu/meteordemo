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
                    <a href={link.href}>{link.text}</a>>
                </li>
            )
        })

        return(
            <div>
                <div>
                    <ul>
                        {rows}
                    </ul>
                </div>
                <div>
                    <a href="/signout">Sign out</a>
                </div>
            </div>
        )
    }
}