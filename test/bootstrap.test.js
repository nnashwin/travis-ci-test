var sails = require('sails')

before(function (done) {
    this.timeout(10000)
    sails.lift({
        
    }, (err, server) => {
        if (err) {
            return done(err)
        }
        
        done(err, sails)
    })
})

after(function (done) {
    sails.lower(done)
})
