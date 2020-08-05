'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GymSchema extends Schema {
  up () {
    this.create('gyms', (table) => {
      table.increments()
      table
        .integer('city_id')
        .unsigned()
        .references('id')
        .inTable('cities')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('name').notNullable()
      table.string('street').notNullable()
      table.string('number').notNullable()
      table.string('district').notNullable()
      table.string('phone').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('gyms')
  }
}

module.exports = GymSchema
