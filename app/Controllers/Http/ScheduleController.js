'use strict'

const Schedule = use('App/Models/Schedule')

class ScheduleController {
  
  async index ({ request, response, view }) {
    const schedule = Schedule.all()

    return schedule
  }


  async store ({ request, response }) {
    const data = request.only(["match_id", "date", "start_time", "end_time", "fixed", "available"])

    const schedule = await Schedule.create(data)

    return schedule
  }


  async show ({ params, request, response, view }) {
    const schedule = await Schedule.findOrFail(params.id)

    return schedule
  }


  async update ({ params, request, response }) {
    const schedule = await Schedule.findOrFail(params.id)

    const data = request.only(["match_id", "date", "start_time", "end_time", "fixed", "available"])

    schedule.merge(data)

    await schedule.save()

    return schedule
  }


  async destroy ({ params, request, response }) {
    const schedule = await Schedule.findOrFail(params.id)

    await schedule.delete()
  }
}

module.exports = ScheduleController
