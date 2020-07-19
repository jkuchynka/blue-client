
const DataTable = {
  methods: {
    setupRequestParams (params, resolve, reject) {
      const sort = params.descending ? '-' + params.sortBy : params.sortBy
      let requestParams = {
        'page[number]': params.page,
        'page[size]': params.rowsPerPage,
        sort,
        'filter[like]': params.filter
      }
      params.filters.forEach(filter => {
        let operator
        switch (filter.operator) {
          case '=':
            operator = ''
            break
          case '*':
            operator = 'like'
            break
          case '>':
            operator = 'gt'
            break
          case '<':
            operator = 'lt'
            break
          case '!':
            operator = '!'
            break
        }
        let key
        switch (operator) {
          case '':
          case '!':
            key = `filter[${filter.field}${operator}]`
            break
          default:
            key = `filter[${filter.field}:${operator}]`
        }
        requestParams[key] = filter.value
      })

      return requestParams
    }
  }
}

export default DataTable
