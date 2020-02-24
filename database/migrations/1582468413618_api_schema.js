'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ApiSchema extends Schema {
  up () {
    this.create('apis', (table) => {
      table.increments()
      table.string('name').notNullable().unique().default('MyApi')
      table.timestamps()
    })
  }

  down () {
    this.drop('apis')
  }
}

module.exports = ApiSchema
