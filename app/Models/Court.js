'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Court extends Model {
    gym () {
        return this.belongsTo('App/Models/Gym')
    }

    matches () {
        return this.hasMany('App/Models/Match')
    }

    schedules () {
        return this.belongsToMany('App/Models/Schedule')
    }

    tags () {
        return this.belongsToMany('App/Models/Tag')
    }
}

module.exports = Court
