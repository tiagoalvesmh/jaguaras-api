'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CourtSchema extends Schema {
  up () {
    this.create('courts', (table) => {
      table.increments()
      table
        .integer('gym_id')
        .unsigned()
        .references('gyms.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('name', 60).unique()
      table.decimal('price').notNullable()
      table.decimal('latitude', 9, 6).notNullable()
      table.decimal('longitude', 9, 6).notNullable()
      table.string('description', 254).nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('courts')
  }
}

module.exports = CourtSchema
