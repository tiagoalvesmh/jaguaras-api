'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tag extends Model {
    courts () {
        return this.belongsToMany('App/Models/Court')
    }

    clubs () {
        return this.belongsToMany('App/Models/Club')
    }
}

module.exports = Tag
