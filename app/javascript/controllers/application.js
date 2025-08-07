import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Stimulusのデバッグ設定など
application.debug = false
window.Stimulus = application

export { application }
