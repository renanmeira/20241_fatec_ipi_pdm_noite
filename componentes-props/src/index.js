import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ReactDOM from "react-dom";

const App = () => {
    return <div className="container border mt-2">
        <div className="row">
            <div className="col-12">
                <h1 className="display-5 text-center">Seus pedidos</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <div className="bg-secondary">Caixa</div>
            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-3">
               <div className="bg-secondary">Caixa</div>
            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-3">
               <div className="bg-secondary">Caixa</div>
            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <div className="bg-secondary">Caixa</div>
            </div>
        </div>
    </div>
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)