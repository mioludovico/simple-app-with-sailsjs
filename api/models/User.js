/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema: true,

  attributes: {
    	
  	username: {
  		type: 'string',
      unique: true,
  		required: true
  	},

  	email: {
  		type: 'string',
  		email: true,
  		required: true,
  		unique: true
  	},
    
  	password: {
  		type: 'string',
  		required: true
  	}

  }
};

