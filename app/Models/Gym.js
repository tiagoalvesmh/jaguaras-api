'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Gym extends Model {
    city () {
        return this.belongsTo('App/Models/City')
    }

    courts () {
        return this.hasMany('App/Models/Court')
    }
}

module.exports = Gym
