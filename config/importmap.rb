# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin "bgm", to: "bgm.js"
pin "MS", to: "MS.js"
pin "progress-bar", to:  "progress-bar.js"
pin "open-window", to: "open-window.js"
pin "change-page", to: "change-page.js"
pin_all_from "app/javascript/controllers", under: "controllers"
