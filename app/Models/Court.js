'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Court extends Model {
    gym () {
        return this.belongsTo('App/Models/Gym')
    }

    matches () {

    }

    tags () {
        
    }
}

module.exports = Court
