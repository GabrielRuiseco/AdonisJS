'use strict'
const Api = use('App/Models/Api')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with apis
 */
class ApiController {
  /**
   * Show a list of all apis.
   * GET apis
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({request, response, view}) {
    const apis = await Api.all()

    response.status(200).json({
      message: 'Here are your apis.',
      data: apis
    })
  }

  /**
   * Render a form to be used for creating a new api.
   * GET apis/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({request, response, view}) {
  }

  /**
   * Create/save a new api.
   * POST apis
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({request, response}) {
    const {name} = request.post()

    const api = await Api.create({name})

    response.status(201).json({
      message: 'succesfully created a new api',
      data: api
    })
  }

  /**
   * Display a single api.
   * GET apis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({request, response}) {
    response.status(200).json({
      message: 'Here is your api.',
      data: request.post().api
    })
  }

  /**
   * Render a form to update an existing api.
   * GET apis/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({params, request, response, view}) {
  }

  /**
   * Update api details.
   * PUT or PATCH apis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({request, response}) {
    const {name} = request.post()
    await api.save()

    response.status(200).json({
      message: 'Successfully updated this api.',
      data: api
    })
  }

  /**
   * Delete a api with id.
   * DELETE apis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async delete({request, response, params: {id}}) {
    const api = request.post().api

    await api.delete()

    response.status(200).json({
      message: 'Successfully deleted this api.',
      id
    })
  }
}

module.exports = ApiController
