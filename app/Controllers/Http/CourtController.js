'use strict'

const Court = use('App/Models/Court')

class CourtController {

  async index ({ request, response, view }) {
    const court = Court.all()

    return court
  }


  async store ({ request, response }) {
    const { schedules, tags, ...data } = request
      .only(["gym_id", "name", "price", "latitude", "longitude", "description", "schedules", "tags"])

    const court = await Court.create(data)

    if(schedules && schedules.length > 0){
      await court.schedules().attach(schedules)
      await court.load('schedules')
    }

    if (tags && tags.length > 0){
      await court.tags().attach(tags)
      await court.load('tags')
    }

    return court
  }


  async show ({ params, request, response, view }) {
    const court = await Court.findOrFail(params.id)
    
    return court
  }


  async update ({ params, request, response }) {
    const court = await Court.findOrFail(params.id)

    const { schedules, tags, ...data } = request
      .only(["gym_id", "name", "price", "latitude", "longitude", "description", "schedules", "tags"])

    court.merge(data)

    await court.save()

    if(schedules && schedules.length > 0){
      await court.schedules().detach()
      await court.schedules().attach(schedules)
      await court.load('schedules')
    }

    if (tags && tags.length > 0){
      await court.tags().detach()
      await court.tags().attach(tags)
      await court.load('tags')
    }

    return court
  }


  async destroy ({ params, request, response }) {
    const court = await Court.findOrFail(params.id)

    await court.delete()
  }
}

module.exports = CourtController
