'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return {greeting: 'Hello world in JSON'}
})

Route.get('/index', 'IndexController.index')

// book
Route.get('book', 'BookController.index')
Route.get('book/:id', 'BookController.show').middleware(['findBook'])
Route.post('book', 'BookController.store')
Route.patch('book/:id', 'BookController.update').middleware(['findBook'])
Route.delete('book/:id', 'BookController.delete').middleware(['findBook'])

// author
Route.get('author', 'AuthorController.index')
Route.get('author/:id', 'AuthorController.show').middleware(['findAuthor'])
Route.post('author', 'AuthorController.store')
Route.patch('author/:id', 'AuthorController.update').middleware(['findAuthor'])
Route.delete('author/:id', 'AuthorController.delete').middleware(['findAuthor'])

// category
Route.get('category', 'CategoryController.index')
Route.get('category/:id', 'CategoryController.show').middleware(['findCategory'])
Route.post('category', 'CategoryController.store')
Route.patch('category/:id', 'CategoryController.update').middleware(['findCategory'])
Route.delete('category/:id', 'CategoryController.delete').middleware(['findCategory'])

// editorial
Route.get('editorial', 'EditorialController.index')
Route.get('editorial/:id', 'EditorialController.show').middleware(['findEditorial'])
Route.post('editorial', 'EditorialController.store')
Route.patch('editorial/:id', 'EditorialController.update').middleware(['findEditorial'])
Route.delete('editorial/:id', 'EditorialController.delete').middleware(['findEditorial'])
