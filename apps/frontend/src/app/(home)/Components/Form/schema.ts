import Joi from "joi";

const schema = Joi.object({
  email: Joi.string()
    .optional()
    .email({ tlds: { allow: false } })
    .allow("")
    .message("Invalid email"),
  firstName: Joi.string().optional().allow(""),
  lastName: Joi.string().optional().allow(""),
});

export default schema;
