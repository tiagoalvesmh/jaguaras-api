'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class City extends Model {

    gyms () {
        return this.hasMany('App/Models/Gym')
    }
}

module.exports = City
