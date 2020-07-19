
import {
  getFilterSets,
  postFilterSet,
  putFilterSet,
  deleteFilterSet
} from '../services/filtersets.api'

const FilterSetsMixin = {
  data: () => ({
    filterSets: []
  }),
  methods: {
    loadFilterSets (group) {
      getFilterSets(group).then(filterSets => {
        filterSets.forEach(filterSet => {
          this.filterSets.push(filterSet)
        })
      })
    },

    onCreateFilterSet (props) {
      postFilterSet(props.filterSet).then(filterSet => {
        this.filterSets.push(filterSet)
        props.done(filterSet)
      })
    },

    onUpdateFilterSet (props) {
      putFilterSet(props.filterSet).then(filterSet => {
        const idx = this.filterSets.findIndex(f => f.id === filterSet.id)
        this.filterSets[idx].name = filterSet.name
        props.done()
      })
    },

    onDeleteFilterSet (props) {
      deleteFilterSet(props.filterSet).then(response => {
        this.filterSets = this.filterSets.filter(f => !f.id || f.id !== props.filterSet.id)
        props.done()
      }, error => {
        console.log('error', error.response.data)
        props.error(error.response.data)
      })
    }
  }
}

export default FilterSetsMixin
