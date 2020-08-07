'use strict'

const Tag = use('App/Models/Tag')

class TagController {

  async index ({ request, response, view }) {
    const tag = Tag.all()

    return tag
  }


  async store ({ request, response }) {
    const data = request.only(["sports", "color"])

    const tag = await Tag.create(data)

    return tag
  }


  async show ({ params, request, response, view }) {
    const tag = await Tag.findOrFail(params.id)

    return tag
  }


  async update ({ params, request, response }) {
    const tag = await Tag.findOrFail(params.id)

    const data = request.only(["sports", "color"])

    tag.merge(data)

    await tag.save()

    return tag

  }


  async destroy ({ params, request, response }) {
    const tag = await Tag.findOrFail(params.id)

    await tag.delete()
  }
}

module.exports = TagController
