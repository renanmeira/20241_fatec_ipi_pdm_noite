import React from "react";
import ReactDOM from "react-dom";
import './styles.css'
//function f(){} declarar função antigamente
//const f = () => {} declarar função atualmente

const App1 = () => {
    return(
        //expressão JSX (Javascript Extension) um jeito fácil de escrever (componente funcional)
        <div>Me chamo <Aluno /> e estou cursando <Pdm /></div>
    );
}

const App2 = () => {
    return(
        <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
            <label htmlFor="nome" className="rotulo" style={{display: 'block', marginBottom: 4,}}>Nome:</label>
            <input type='text' id='nome' style={{paddingTop: 8, paddingBottom: 8, borderBlockStyle:'hidden', width:'100%', borderRadius:8}}></input>
            <button style={{}}>Enviar</button>
        </div>
    );
}

const Pdm = () => {
    return(
        <div>Programação dispositivos móveis</div>
    );
}

const Aluno = () => {
    return(
    <div>Renan Meira</div>
    );
}

ReactDOM.render(
    <App2 />,
    document.querySelector('#root')
)