'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CourtTagSchema extends Schema {
  up () {
    this.create('court_tag', (table) => {
      table.increments()
      table
        .integer('court_id')
        .unsigned()
        .index('court_tag_id')
      table
        .integer('tag_id')
        .unsigned()
        .index('tag_court_id')
      table
        .foreign('court_id')
        .references('courts.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .foreign('tag_id')
        .references('tags.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('court_tag')
  }
}

module.exports = CourtTagSchema
