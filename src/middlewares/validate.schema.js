export const validateSchema = (schema) => async (req, res, next) => {
  try {
    // await schema.validateAsync(req.body) Error con stack trace
    await schema.parseAsync(req.body) // Error en formato JSON
    next()
  } catch (error) {
    res.status(400).send(error)
  }
}
