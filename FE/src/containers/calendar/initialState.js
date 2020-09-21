export const INIT_PAGE_STATE = {
  page: 0,
  rowsPerPage: 5,
  orderBy: 'id',
  order: 'asc',
  totalCount: 0
}

const init_state={
  calendarList:[],
  pageState: INIT_PAGE_STATE
}

export default init_state