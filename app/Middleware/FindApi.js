'use strict'
const Api = use('App/Models/Api')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class FindApi {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    const id=request.body.id;
    const api = await Api.find(id)

    if (!api) {
      return response.status(404).json({
        message: 'Api not found.',
        id
      })
    }

    request.body.api = api

    await next()
  }
}

module.exports = FindApi
