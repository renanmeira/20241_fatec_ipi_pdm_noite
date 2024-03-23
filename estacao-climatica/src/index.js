import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    //    window.navigator.geolocation.getCurrentPosition((position) =>{
    //        console.log(position)
    //    })
    // para mudar localização: ctrl + shift + P -> sensores
    state = {
        latitude: null,
        longitude: null,
        estacao: null,
        data: null,
        icone: null,
        mensagemDeErro: null
    }

    componentDidMount() {
        console.log('componentedidmout')
    }

    componentDidUpdate() {
        console.log('componentdidupdate')
    }

    componentWillUnmount() {
        console.log('componentwillunmount')
    }

    icones = {
        'Verão': 'sun',
        'Inverno': 'snowflake',
        'Outono': 'leaf',
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

    obterLocalizacao = () => {
        window.navigator.geolocation.getCurrentPosition(
            //localização com sucesso
            (posicao) => {
                const dataAtual = new Date()
                const estacaoClimatica = this.obterEstacao(dataAtual, posicao.coords.latitude);
                const icone = this.icones[estacaoClimatica]
                this.setState(
                    {
                        latitude: posicao.coords.latitude,
                        longitude: posicao.coords.longitude,
                        estacao: estacaoClimatica,
                        data: dataAtual,
                        icone: icone
                    }
                )
            }
        )
    }

    render() {
        return (
            <div className='container mt-2'>
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-8">
                        {/* um cartão do Bootstrap */}
                        <div className="card">
                            <div className="card-body">
                                <div
                                    className="d-flex align-items-center border rounded mb-2"
                                    style={{ height: '6rem' }}>
                                    {/* icone */}
                                    <i className={`fa-solid fa-5x fa-${this.state.icone}`}></i>
                                    <p className="w-75 ms-3 text-center fs-1">{this.state.estacao}</p>
                                </div>
                                <div>
                                    <p className="text-center">
                                        {
                                            this.state.latitude ?
                                                `Coordenadas: ${this.state.latitude, this.state.longitude}. Data: ${this.state.data}` :
                                                this.state.mensagemDeErro ?
                                                    `${this.state.mensagemDeErro}` :
                                                    `Clique no botão para saber a sua estação climática`
                                        }
                                    </p>
                                </div>
                                <button
                                    className="btn btn-outline-primary w-100 mt-2"
                                    onClick={() => this.obterLocalizacao()}>
                                    Qual a minha estação?
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)