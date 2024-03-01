import React from "react";
import ReactDOM from "react-dom";
import './styles.css';
import doc1 from './images/doc1.jpg';

const App = () => {

    const containerStyles = () => {
        return{width:1280,margin:'auto',border:'1px solid black', backgroundColor:"#EEE",borderRadius:8,padding:12,textAlign:'center'};
    }
    const docNames = {doc1:'Stefani Joanne Angelina Germanotta',doc2:'Larissa de Macedo Machado',doc3:'Andressa de Faveri Urach'}

    return(
        <div style={containerStyles()}>
            <h2>PROFISSIONAIS DE SAÚDE</h2>
            <div style={{margin: 8, border: '1px solid #DDD',borderRadius:8,padding:8,display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                <div className="profissional">
                    <img src={doc1}/>
                    <p>{docNames.doc1}</p>
                </div>
                <div className="profissional">
                    <img src={process.env.PUBLIC_URL+'doc2.jpeg'}/>
                    <p>{docNames.doc2}</p>
                </div>
                <div className="profissional">
                    <img src='https://s2-glamour.glbimg.com/knfR4Jw_ODBzTbR6DWExVBcj-b4=/0x0:726x726/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_ba3db981e6d14e54bb84be31c923b00c/internal_photos/bs/2021/M/8/s1oJ0ARrifVhmYvczDvg/2018-07-31-37585336-2113040362268629-5010288339597656064-n.jpg'/>
                    <p>{docNames.doc3}</p>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)