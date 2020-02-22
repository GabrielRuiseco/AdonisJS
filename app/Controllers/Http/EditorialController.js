'use strict'
const Editorial = use('App/Models/Editorial')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with editorials
 */
class EditorialController {
  /**
   * Show a list of all editorials.
   * GET editorials
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({request, response, view}) {
    const editorials = await Editorial.all()

    response.status(200).json({
      message: 'Here are your editorials.',
      data: editorials
    })
  }

  /**
   * Render a form to be used for creating a new editorial.
   * GET editorials/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({request, response, view}) {
  }

  /**
   * Create/save a new editorial.
   * POST editorials
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({request, response}) {
    const {name} = request.post()

    const editorial = await Editorial.create({name})

    response.status(201).json({
      message: 'succesfully created a new editorial',
      data: editorial
    })
  }

  /**
   * Display a single editorial.
   * GET editorials/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({request, response}) {
    response.status(200).json({
      message: 'Here is your editorial.',
      data: request.post().editorial
    })
  }

  /**
   * Render a form to update an existing editorial.
   * GET editorials/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({params, request, response, view}) {
  }

  /**
   * Update editorial details.
   * PUT or PATCH editorials/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({request, response}) {
    const {name} = request.post()
    await editorial.save()

    response.status(200).json({
      message: 'Successfully updated this editorial.',
      data: editorial
    })
  }

  /**
   * Delete a editorial with id.
   * DELETE editorials/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async delete({request, response, params: {id}}) {
    const editorial = request.post().editorial

    await editorial.delete()

    response.status(200).json({
      message: 'Successfully deleted this editorial.',
      id
    })
  }
}

module.exports = EditorialController
