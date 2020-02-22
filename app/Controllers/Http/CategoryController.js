'use strict'
const Category = use('App/Models/Category')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with categories
 */
class CategoryController {
  /**
   * Show a list of all categories.
   * GET categories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({request, response, view}) {
    const categorys = await Category.all()

    response.status(200).json({
      message: 'Here are your categorys.',
      data: categorys
    })
  }

  /**
   * Render a form to be used for creating a new category.
   * GET categorys/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({request, response, view}) {
  }

  /**
   * Create/save a new category.
   * POST categorys
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({request, response}) {
    const {name} = request.post()

    const category = await Category.create({name})

    response.status(201).json({
      message: 'succesfully created a new category',
      data: category
    })
  }

  /**
   * Display a single category.
   * GET categorys/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({request, response}) {
    response.status(200).json({
      message: 'Here is your category.',
      data: request.post().category
    })
  }

  /**
   * Render a form to update an existing category.
   * GET categorys/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({params, request, response, view}) {
  }

  /**
   * Update category details.
   * PUT or PATCH categorys/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({request, response}) {
    const {name} = request.post()
    await category.save()

    response.status(200).json({
      message: 'Successfully updated this category.',
      data: category
    })
  }

  /**
   * Delete a category with id.
   * DELETE categorys/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async delete({request, response, params: {id}}) {
    const category = request.post().category

    await category.delete()

    response.status(200).json({
      message: 'Successfully deleted this category.',
      id
    })
  }
}

module.exports = CategoryController
