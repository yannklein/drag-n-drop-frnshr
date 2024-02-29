import { Controller } from "@hotwired/stimulus"
import Sortable from "sortablejs"

// Connects to data-controller="sortable"

// doc: https://sortablejs.github.io/Sortable/
// code: https://github.com/SortableJS/Sortable

export default class extends Controller {
  static targets = ["goodList", "badList"]

  connect() {
    console.log(this.goodListTarget);
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
    new Sortable.create(
      this.badListTarget, 
      {
        group: {
            name: 'shared',
        },
        animation: 150
      }
    );
  }
}
