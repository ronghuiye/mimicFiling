const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
: (a, b) => -descendingComparator(a, b, orderBy);
}

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
  if (order !== 0) return order;
  return a[1] - b[1];
});
  return stabilizedThis.map((el) => el[0]);
}

const getReturnsWithCalendars = array => {
   return array.map(c => {
    let obj = {}
    obj.id = c.id
    obj.state = c.state
    obj.return = c.return
    obj.filingType = c.filingType
    obj.legalEntity = c.legalEntity
    obj.amount = obj.id * 1000
    return obj
})
}

module.exports = {
  getComparator,
  stableSort,
  getReturnsWithCalendars
}