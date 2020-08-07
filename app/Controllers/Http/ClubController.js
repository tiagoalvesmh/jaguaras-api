'use strict'

const Club = use('App/Models/Club')

class ClubController {

  async index ({ request, response, view }) {
    const club = await Club.all()

    return club
  }


  async store ({ request, response, auth }) {
    const {users, ...data} = request
      .only(["name", "logo", "color", "cash", "description", "users"])

    const club = await Club.create({founder_id: auth.user.id, ...data})

    if(users && users.length > 0){
      await club.users().attach(users)
      await club.load('users')
    }

    return club
  }


  async show ({ params, request, response, view }) {
    const club = await Club.findOrFail(params.id)

    return club
  }


  async update ({ params, request, response }) {
    const club = await Club.findOrFail(params.id)

    const {users, ...data} = request
      .only(["name", "logo", "color", "cash", "description", "users"])

    club.merge(data)

    await club.save()

    if(users && users.length > 0){
      await club.users().sync(users)
      await club.load('users')
    }

    return club
  }


  async destroy ({ params, request, response }) {
    const club = await Club.findOrFail(params.id)

    await club.delete()
  }
}

module.exports = ClubController
