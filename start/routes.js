'use strict';

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
const Route = use('Route');

Route.get('/', () => {
  return {greeting: 'Hello world in JSON'}
});

Route.get('/index', 'IndexController.index');

//api
Route.get('api', 'ApiController.index').middleware(['auth']);
Route.get('api/:id', 'ApiController.show').middleware(['auth']).middleware(['findApi']);
Route.post('api', 'ApiController.store').middleware(['auth']);
Route.patch('api/:id', 'ApiController.update').middleware(['auth']).middleware(['findApi']);
Route.delete('api/:id', 'ApiController.delete').middleware(['auth']).middleware(['findApi']);


//token
Route.get('token', 'TokenController.index').middleware(['auth']);
Route.get('token/show', 'TokenController.show').middleware(['auth']).middleware(['findToken']);
Route.post('user/login', 'TokenController.store').middleware(['login']);
Route.patch('token/update', 'TokenController.update').middleware(['auth']).middleware(['findToken']);
Route.delete('token/delete', 'TokenController.delete').middleware(['auth']).middleware(['findToken']);

// user
Route.get('user', 'UserController.index').middleware(['auth'])
Route.get('user/show', 'UserController.show').middleware(['auth']).middleware(['findUser']);
Route.post('user', 'UserController.store');
Route.patch('user/:id', 'UserController.update').middleware(['auth']).middleware(['findUser']);
Route.delete('user/:id', 'UserController.delete').middleware(['auth']).middleware(['findUser']);
Route.post('user/login', 'UserController.login').middleware(['login']);

// book
Route.get('book', 'BookController.index').middleware(['auth']);
Route.get('book/:id', 'BookController.show').middleware(['auth']).middleware(['findBook']);
Route.post('book', 'BookController.store').middleware(['auth']);
Route.patch('book/:id', 'BookController.update').middleware(['auth']).middleware(['findBook']);
Route.delete('book/:id', 'BookController.delete').middleware(['auth']).middleware(['findBook']);

// author
Route.get('author', 'AuthorController.index').middleware(['auth']);
Route.get('author/show', 'AuthorController.show').middleware(['auth']).middleware(['findAuthor']);
Route.post('author', 'AuthorController.store').middleware(['auth']);
Route.patch('author/:id', 'AuthorController.update').middleware(['auth']).middleware(['findAuthor']);
Route.delete('author/:id', 'AuthorController.delete').middleware(['auth']).middleware(['findAuthor']);

// category
Route.get('category', 'CategoryController.index').middleware(['auth']);
Route.get('category/:id', 'CategoryController.show').middleware(['auth']).middleware(['findCategory']);
Route.post('category', 'CategoryController.store').middleware(['auth']);
Route.patch('category/:id', 'CategoryController.update').middleware(['auth']).middleware(['findCategory']);
Route.delete('category/:id', 'CategoryController.delete').middleware(['auth']).middleware(['findCategory']);

// editorial
Route.get('editorial', 'EditorialController.index').middleware(['auth']);
Route.get('editorial/:id', 'EditorialController.show').middleware(['auth']).middleware([ 'findEditorial']);
Route.post('editorial', 'EditorialController.store').middleware(['auth']);
Route.patch('editorial/:id', 'EditorialController.update').middleware(['auth']).middleware([ 'findEditorial']);
Route.delete('editorial/:id', 'EditorialController.delete').middleware(['auth']).middleware([ 'findEditorial']);
