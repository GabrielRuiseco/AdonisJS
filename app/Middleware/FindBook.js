'use strict'
const Book = use('App/Models/Book')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class FindBook {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    const id=request.body.id;
    const book = await Book.find(id)

    if (!book) {
      return response.status(404).json({
        message: 'Book not found.',
        id
      })
    }

    request.body.book = book
    // call next to advance the request
    await next()
  }
}

module.exports = FindBook
