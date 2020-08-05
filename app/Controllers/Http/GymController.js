'use strict'

const Gym = use('App/Models/Gym')

class GymController {

  async index ({ request, response, view }) {
    const gym = Gym.all()

    return gym
  }


  async store ({ request, response }) {
    const data = request.only(["city_id", "name", "street", "number", "district", "phone"])

    const gym = await Gym.create(data)

    return gym
  }


  async show ({ params, request, response, view }) {
    const gym = await Gym.findOrFail(params.id)

    await gym.load('matches')

    return gym
  }


  async update ({ params, request, response }) {
    const gym = await Gym.findOrFail(params.id)

    const data = request.only(["city_id", "name", "street", "number", "district", "phone"])

    gym.merge(data)

    await gym.save()

    return gym
  }

  
  async destroy ({ params, request, response }) {
    const gym = await Gym.findOrFail(params.id)

    await gym.delete()
  }
}

module.exports = GymController
