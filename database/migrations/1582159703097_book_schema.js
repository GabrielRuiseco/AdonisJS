'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookSchema extends Schema {
  up () {
    this.create('books', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.integer('author').unsigned().notNullable()
      table.foreign('author').references('authors.id').onDelete('cascade')
      table.integer('editorial').unsigned().notNullable()
      table.foreign('editorial').references('editorials.id').onDelete('cascade')
      table.integer('category').unsigned().notNullable()
      table.foreign('category').references('categories.id').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('books')
  }
}

module.exports = BookSchema
