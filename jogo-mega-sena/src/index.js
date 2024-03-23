import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    render(){
        return <div className="container mt2">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-8">
                    
                </div>
            </div>
        </div>
    }



}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)