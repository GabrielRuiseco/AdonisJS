'use strict'
const User = use('App/Models/User')
const Token = use('App/Models/Token')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */

/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Login {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({request, response, auth}, next) {
    // call next to advance the request
    const {email,password}=request.post()
    const user = await User.findBy("email",email)

    if (!user) {
      return response.status(404).json({
        message: 'user not found.', email
      })
    }
    const id=user.id;
    const ntoken= await Token.findBy("user_id",id);
    if(!ntoken){
      const token = await auth.attempt(email, password);
      request.body.user = user;
      request.body.user_id = user.id;
      request.body.token = token.token;
      request.body.type = token.type;
    }
    request.body.user_id = user.id;
    request.body.user = user;

    await next()
  }
}

module.exports = Login
