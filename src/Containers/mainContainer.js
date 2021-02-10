import { connect } from 'react-redux'
import page from '../Pages/main'

function mapStateToProps(state){
    return {
    }
}

function mapDispatchToProps(dispatch){
    return{
    }
}

let func = connect( mapStateToProps, mapDispatchToProps);
const MainPage = func(page);

export default MainPage;