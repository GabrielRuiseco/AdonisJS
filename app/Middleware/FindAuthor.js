'use strict'
const Author = use('App/Models/Author')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class FindAuthor {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request }, next) {
    const author = await Author.find(id)

    if (!author) {
      return response.status(404).json({
        message: 'Author not found.',
        id
      })
    }

    request.body.author = author

    await next()
  }
}

module.exports = FindAuthor
