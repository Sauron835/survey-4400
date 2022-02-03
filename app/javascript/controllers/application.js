import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
//= require jquery3
//= require popper
//= require bootstrap-sprockets
application.debug = false
window.Stimulus   = application

export { application }
