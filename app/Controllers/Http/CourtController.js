'use strict'

const Court = use('App/Models/Court')

class CourtController {

  async index ({ request, response, view }) {
    const court = Court.all()

    return court
  }


  async store ({ request, response }) {
    const data = request.only(["gym_id", "name", "price", "latitude", "longitude", "description"])

    const court = await Court.create(data)

    return court
  }


  async show ({ params, request, response, view }) {
    const court = await Court.findOrFail(params.id)
    
    return court
  }


  async update ({ params, request, response }) {
    const court = await Court.findOrFail(params.id)

    const data = request.only(["gym_id", "name", "price", "latitude", "longitude", "description"])

    court.merge(data)

    await court.save()

    return court
  }


  async destroy ({ params, request, response }) {
    const court = await Court.findOrFail(params.id)

    await court.delete()
  }
}

module.exports = CourtController