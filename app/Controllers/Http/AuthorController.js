'use strict'
const Author = use('App/Models/Author')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with authors
 */
class AuthorController {
  /**
   * Show a list of all authors.
   * GET authors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({request, response, view}) {
    const authors = await Author.all()

    response.status(200).json({
      message: 'Here are your authors.',
      data: authors
    })
  }

  /**
   * Render a form to be used for creating a new author.
   * GET authors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({request, response, view}) {
  }

  /**
   * Create/save a new author.
   * POST authors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({request, response}) {
    const {name} = request.post()

    const author = await Author.create({name})

    response.status(201).json({
      message: 'succesfully created a new author',
      data: author
    })
  }

  /**
   * Display a single author.
   * GET authors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({request, response}) {
    response.status(200).json({
      message: 'Here is your author.',
      data: request.post().author
    })
  }

  /**
   * Render a form to update an existing author.
   * GET authors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({params, request, response, view}) {
  }

  /**
   * Update author details.
   * PUT or PATCH authors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({request, response}) {
    const {name} = request.post()
    await author.save()

    response.status(200).json({
      message: 'Successfully updated this author.',
      data: author
    })
  }

  /**
   * Delete a author with id.
   * DELETE authors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async delete({request, response, params: {id}}) {
    const author = request.post().author

    await author.delete()

    response.status(200).json({
      message: 'Successfully deleted this author.',
      id
    })
  }
}

module.exports = AuthorController
