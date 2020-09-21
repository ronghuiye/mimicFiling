import {connect} from 'react-redux'
import CalendarList from './components/CalendarList'
import {fetchCalendarList, createCalendar, deleteCalendar, setPageState} from './actions'

function mapStateToProps(state) {
  return {
    calendarList: state.calendarReducer.calendarList,
    pageState: state.calendarReducer.pageState
  }
}

const mapDispatchToProps = {
  fetchCalendarList,
  createCalendar,
  deleteCalendar,
  setPageState
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarList)