import {connect} from 'react-redux'
import CalendarList from './components/CalendarList'
import {fetchCalendarList, createCalendar} from './actions'

function mapStateToProps(state) {
  return {
    calendarList: state.calendarReducer.calendarList
  }
}

const mapDispatchToProps = {
  fetchCalendarList,
  createCalendar
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarList)