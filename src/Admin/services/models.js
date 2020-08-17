
import { date } from 'quasar'
import to from 'to-case'

/**
 * Generate an array of items from a model's fields
 *
 * @param Model
 * @return array
 */
export function itemsFromModel (Model, excludeKeys = []) {
  let items = []
  const keys = Object.keys(Model).filter(key => !excludeKeys.find(excludeKey => excludeKey === key))
  keys.forEach(key => {
    let value = Model[key]
    // Convert dates from *_at fields
    if (key.match(/_at$/)) {
      if (date.isValid(value)) {
        value = date.formatDate(value, 'MM-DD-YYYY h:mm A')
      }
    }
    // Handle relation arrays
    if (Array.isArray(value)) {
      //
    }
    items.push({
      label: to.capital(key),
      value: value
    })
  })
  return items
}
