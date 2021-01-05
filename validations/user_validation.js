const Joi = require('@hapi/joi')

const registerValidation = function (data) {
    const Userschema = Joi.object({
        firstname:Joi.string().min(6).required(),
        email:Joi.string().min(6).required().email(),
        dob:Joi.date().required(),
        password:Joi.string().min(6).required()
    });

    return Userschema.validate(data);
}

module.exports.registerValidation = registerValidation;
