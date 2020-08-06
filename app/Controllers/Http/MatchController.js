'use strict'

const Match = use('App/Models/Match')

class MatchController {
  
  async index ({ request, response, view }) {
    const match = Match
      .query()
      .with("users", builder => {
        builder.select(["nickname", "power"])
      })
      .fetch()

    return match
  }


  async store ({ request, auth, response }) {
    const {users, ...data} = request
      .only(["court_id", "title", "date", "start_time", "end_time", "open", "description", "users"])

    const match = await Match.create({owner_id: auth.user.id, ...data})

    if(users && users.length > 0){
      await match.users().attach(users)
      await match.load('users')
    }
    return match
  }


  async show ({ params, request, response, view }) {
    const match = await Match.findOrFail(params.id)

    await match.load('users')

    return match
  }


  async update ({ params, request, response }) {
    const match = await Match.findOrFail(params.id)

    const {users, ...data} = request.only(["court_id", "owner_id", "title", "date", "start_time", "end_time", "open", "description", "users"])

    match.merge(data)

    await match.save()

    if(users && users.length > 0){
      await match.users().sync(users)
      await match.load('users')
    }

    return match
  }

 
  async destroy ({ params, auth, request, response }) {
    const match = await Match.findOrFail(params.id)
    
    if(match.user_id != auth.user.id){
      return response.status(401)
    }

    await match.delete()
  }
}

module.exports = MatchController
