'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClubSchema extends Schema {
  up () {
    this.create('clubs', (table) => {
      table.increments()
      table
        .integer('founder_id')
        .unsigned()
        .references('users.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('name').unique()
      table.string('logo')
      table.string('color')
      table.decimal('cash')
      table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('clubs')
  }
}

module.exports = ClubSchema
