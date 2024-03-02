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
                <div className="card">
                    <div className="card card-header text-muted">22/04/2021</div>
                    <div className="card-body d-flex">
                        <div className="d-flex align-items-center">
                            <i className="fa-regular fa-hard-drive fa-2x fa-beat-fade"></i>
                        </div>
                        <div className="flex-grow-1 ms-1 border">
                            <h4 className="text-center">HD</h4>
                            <p className="text-center">HD 1TB</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <div className="card">
                    <div className="card card-header text-muted">22/04/2021</div>
                    <div className="card-body d-flex">
                        <div className="d-flex align-items-center">
                            <i className="fa-solid fa-memory fa-2x fa-beat-fade"></i>
                        </div>
                        <div className="flex-grow-1 ms-1 border">
                            <h4 className="text-center">RAM</h4>
                            <p className="text-center">Memória 16GB</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <div className="card">
                    <div className="card card-header text-muted">22/04/2021</div>
                    <div className="card-body d-flex">
                        <div className="d-flex align-items-center">
                        <i className="fa-solid fa-vial-circle-check fa-2x fa-beat-fade"></i>
                        </div>
                        <div className="flex-grow-1 ms-1 border">
                            <h4 className="text-center">Injeção</h4>
                            <p className="text-center">SQL injection</p>
                        </div>
                    </div>
                </div>            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <div className="card">
                    <div className="card card-header text-muted">22/04/2021</div>
                    <div className="card-body d-flex">
                        <div className="d-flex align-items-center">
                            <i className="fa-solid fa-terminal fa-2x fa-beat-fade"></i>
                        </div>
                        <div className="flex-grow-1 ms-1 border">
                            <h4 className="text-center">Terminal</h4>
                            <p className="text-center">Terminal</p>
                        </div>
                    </div>
                </div>            </div>
        </div>
    </div>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)