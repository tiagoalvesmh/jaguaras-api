'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CourtScheduleSchema extends Schema {
  up () {
    this.create('court_schedule', (table) => {
      table.increments()
      table
        .integer('court_id')
        .unsigned()
        .index('court_schedule_id')
      table
        .integer('schedule_id')
        .unsigned()
        .index('schedule_court_id')
      table
        .foreign('court_id')
        .references('courts.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .foreign('schedule_id')
        .references('schedules.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('court_schedule')
  }
}

module.exports = CourtScheduleSchema
