'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Book extends Model {
  Author () {
    return this.hasOne('App/Models/Author')
  }
  Editorial () {
    return this.hasOne('App/Models/Editorial')
  }
  Category () {
    return this.hasMany('App/Models/Category')
  }
}

module.exports = Book
