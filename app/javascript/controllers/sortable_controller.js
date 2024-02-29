import { Controller } from "@hotwired/stimulus"
import Sortable from "sortablejs"

// Connects to data-controller="sortable"

// doc: https://sortablejs.github.io/Sortable/
// code: https://github.com/SortableJS/Sortable

export default class extends Controller {
  static target = ["goodList", "badList"]
  connect() {
    new Sortable.create(
      this.goodListTarget, 
      {
        group: {
            name: 'shared',
            pull: 'clone' // To clone: set pull to 'clone'
        },
        animation: 150
      }
    );
  }
}
