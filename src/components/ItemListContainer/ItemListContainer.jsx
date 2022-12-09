import "../ItemListContainer/ItemListContainer.css"
import { Link } from "react-router-dom";


export const ItemListContainer = ({ product }) => {
    const { id, title, image, precio } = product
    return (
        <>

            <div className="card " >
                <div >
                    <img src={image} className="card-img-top imagesList" alt="..."></img>
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <h5 className="text-danger">Precio: ${precio}</h5>
                        <div className='border text-center border-2 '>
                            <Link to={`/detalle/${id}`} className="btn btn-secondary my-1" > <i className="bi bi-eye-fill fs-5"></i></Link>
                            
                        </div>

                    </div>
                </div>

            </div>
        </>

    )
}
