'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ScheduleSchema extends Schema {
  up () {
    this.create('schedules', (table) => {
      table.increments()
      table
        .integer('match_id')
        .unsigned()
        .references('matches.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.date('date')
      table.time('start_time')
      table.time('end_time')
      table.boolean('fixed')
      table.boolean('available')
      table.timestamps()
    })
  }

  down () {
    this.drop('schedules')
  }
}

module.exports = ScheduleSchema
