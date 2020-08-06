'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MatchSchema extends Schema {
  up () {
    this.create('matches', (table) => {
      table.increments()
      table
        .integer('court_id')
        .unsigned()
        .references('courts.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('owner_id')
        .unsigned()
        .references('users.id')
        .onUpdate('CASCADE')
      table.string('title').notNullable()
      table.date('date')
      table.time('start_time')
      table.time('end_time')
      table.boolean('open')
      table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('matches')
  }
}

module.exports = MatchSchema
