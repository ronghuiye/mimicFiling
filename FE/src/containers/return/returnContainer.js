import {connect} from 'react-redux'
import ReturnList from './components/ReturnList'
import { fetchReturnList, setYear, setMonth } from './actions'

function mapStateToProps(state) {
  return {
    returnList: state.returnReducer.returnList,
    year: state.returnReducer.year,
    month: state.returnReducer.month
  }
}

const mapDispatchToProps = {
  fetchReturnList,
  setYear,
  setMonth
}

export default connect(mapStateToProps, mapDispatchToProps)(ReturnList)