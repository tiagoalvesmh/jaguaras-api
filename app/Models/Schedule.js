'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Schedule extends Model {
    matches () {
        return this.belongsTo('App/Models/Match')
    }

    courts () {
        return this.belongsToMany('App/Models/Court')
    }
}

module.exports = Schedule
