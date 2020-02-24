'use strict'
const Token = use('App/Models/Token')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with tokens
 */
class TokenController {
  async index({request, response}) {
    const token = await Token.all()

    response.status(200).json({
      message: 'Here are your Tokens.',
      data: token
    })
  }

  async create({request, response, view}) {
  }

  async store({request, response}) {
    const id = request.body.user_id;
    const netoken= await Token.findBy("user_id",id);
    if(!netoken) {
      const {user_id, token, type} = request.post();
      const ntoken = await Token.create({user_id, token, type});

      response.status(201).json({
        message: 'succesfully created a new token',
        data: ntoken
      })
    }
  }

  async show({request, response}) {
    response.status(200).json({
      message: 'Here is your token.',
      data: request.post().token
    })
  }

  async edit({params, request, response, view}) {
  }

  async update({request, response}) {
    const {name} = request.post()
    await token.save()

    response.status(200).json({
      message: 'Successfully updated this user.',
      data: token
    })
  }

  async delete({request, response, params: {id}}) {
    const token = request.post().token

    await token.delete()

    response.status(200).json({
      message: 'Successfully deleted this token.',
      id
    })
  }
}

module.exports = TokenController
