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
            pull: 'clone', // To clone: set pull to 'clone'
            put: false // Do not allow items to be put into this list
        },
        animation: 150,
        onEnd: this.moveToBad
      }
    );
    new Sortable.create(
      this.badListTarget, 
      {
        group: {
            name: 'shared',
        },
        animation: 150,
        onEnd: this.moveToGood
      }
    );
  }
  moveToBad(event) {
    console.log(event);
    const form = event.item.querySelector("form");
    console.log(form, form.action);
    // form.submit()
    fetch(form.action, {
      method: "PATCH",
      headers: { "Accept": "application/json" },
      body: new FormData(form)
    })
      .then(r => r.json())
      .then(data => console.log(data))
  }
}
