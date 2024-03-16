import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
//    window.navigator.geolocation.getCurrentPosition((position) =>{
//        console.log(position)
//    })

constructor(props){
    super(props)
    this.state ={
        latitude: null,
        longitude: null,
        estacao: null,
        data: null,
        icone: null
    }
}

icones = {
    'Verão': 'sun',
    'Inverno': 'snowflake',
    'Outono': 'canadian-maple-leaf',
    'Primavera': 'tree'
}

obterEstacao = (dataAtual, latitude) => {
    const anoAtual = dataAtual.getFullYear()
    //new Date(ano, mes, dia)
    //21/06
    const d1 = new Date(anoAtual, 5, 21)
    //24/09
    const d2 = new Date(anoAtual, 8, 24)
    //22/12
    const d3 = new Date(anoAtual, 11, 22)
    //21/03
    const d4 = new Date(anoAtual, 2, 21)
    //const sul = latitude < 0 ? true : false
    const sul = latitude < 0
    if (dataAtual >= d1 && dataAtual < d2)
        return sul ? 'Inverno' : 'Verão'
    if (dataAtual >= d2 && dataAtual < d3)
        return sul ? 'Primavera' : 'Outono'
    if (dataAtual >= d3 || dataAtual < d1)
        return sul ? 'Verão' : 'Inverno'
    return sul ? 'Outono' : 'Primavera'
}

obterLocalizacao = () =>{
    window.navigator.geolocation.getCurrentPosition(
        //localização com sucesso
        (posicao) => {
            let dataAtual = new Date()
            let estacao = this.obterEstacao(dataAtual, posicao.coords.latitude);
            let icone = this.icones[estacao]
            console.log(icone)
            this.setState(
                {
                    latitude: posicao.coords.latitude,
                    longitude: posicao.coords.longitude,
                    estacao: estacao,
                    data: dataAtual,
                    icone: icone
                }
            )
        }
    )
     
}

    render(){
    return <div>
        {this.state.estacao}
    </div>
}}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)