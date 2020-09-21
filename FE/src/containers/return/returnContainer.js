import {connect} from 'react-redux'
import ReturnList from './components/ReturnList'
import { fetchReturnList, setYear, setMonth, setSelected } from './actions'

function mapStateToProps(state) {
  return {
    returnList: state.returnReducer.returnList,
    year: state.returnReducer.year,
    month: state.returnReducer.month,
    selected : state.returnReducer.selected
  }
}

const mapDispatchToProps = {
  fetchReturnList,
  setYear,
  setMonth,
  setSelected
}

export default connect(mapStateToProps, mapDispatchToProps)(ReturnList)