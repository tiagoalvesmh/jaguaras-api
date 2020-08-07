'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Club extends Model {
    tags () {
        return this.belongsToMany('App/Models/Tag')
    }

    users () {
        return this.belongsToMany('App/Models/User')
    }
}

module.exports = Club
