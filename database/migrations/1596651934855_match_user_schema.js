'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MatchUserSchema extends Schema {
  up () {
    this.create('match_user', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .index('user_match_id')
      table
        .integer('match_id')
        .unsigned()
        .index('match_user_id')
      table
        .foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
      table
        .foreign('match_id')
        .references('id')
        .inTable('matches')
        .onDelete('CASCADE')
      table.string('team')
      table.string('rating')
      table.boolean('miss')
      table.timestamps()
    })
  }

  down () {
    this.drop('match_user')
  }
}

module.exports = MatchUserSchema
