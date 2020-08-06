'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Match extends Model {
    users () {
        return this.belongsToMany('App/Models/User')
    }

    court () {
        return this.belongsTo('App/Models/Court')
    }    
}

module.exports = Match
