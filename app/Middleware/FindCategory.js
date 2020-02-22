'use strict'
const Category = use('App/Models/Category')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class FindCategory {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request }, next) {
    const category = await Category.find(id)

    if (!category) {
      return response.status(404).json({
        message: 'category not found.',
        id
      })
    }

    request.body.category = category
    // call next to advance the request
    await next()
  }
}

module.exports = FindCategory
