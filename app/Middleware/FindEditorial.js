'use strict'
const Editorial = use('App/Models/Editorial')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class FindEditorial {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    const id=request.body.id;
    const editorial = await Editorial.find(id)

    if (!editorial) {
      return response.status(404).json({
        message: 'editorial not found.',
        id
      })
    }

    request.body.editorial = editorial
    // call next to advance the request
    await next()
  }
}

module.exports = FindEditorial
