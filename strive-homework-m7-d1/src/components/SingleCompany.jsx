import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { removeFromFavouritesAction } from '../redux/actions'

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  removeFromFavourites: (index) => {
    dispatch(removeFromFavouritesAction(index))
  },
})


const SingleCompany = ({idx, name, removeFromFavourites}) => {
    return(
        
        <div className="d-flex flex-column mr-2 p-2" style={{border: "1px solid grey", minHeight: "120px"}}>
            <Link to={`/${name}`}>
            <h4 style={{marginTop:"auto"}}>{name}</h4>
            </Link>
            <Button variant="danger" onClick={()=> {removeFromFavourites(idx)}} style={{marginTop:"auto"}}><i className="bi bi-trash3-fill" ></i></Button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCompany)