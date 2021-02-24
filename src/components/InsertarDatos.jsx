import { Todos } from './Todos/Todos';
import { Activos } from './Activos/Activos';





export const InsertarDatos = () => {

    return (
        <div>
            <section>

                <div>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item waves-effect waves-light">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Todos</a>
                        </li>
                        <li className="nav-item waves-effect waves-light">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Activos</a>
                        </li>
                        <li className="nav-item waves-effect waves-light">
                            <a className="nav-link " id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade active show" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="container">
                            <h2>Insertar Datos</h2>
                        </div>
                                {
                                    <Todos />
                                }
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                {
                                    <Activos />
                                }
                        </div>
                        <div className="tab-pane fade " id="contact" role="tabpanel" aria-labelledby="contact-tab">Etsy mixtape wayfarers,
                                
                        </div>
                    </div>
                </div>
                </section>



                
        </div>
    )
}
