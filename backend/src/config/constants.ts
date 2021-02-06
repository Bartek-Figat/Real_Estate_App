export default {
  errorTypes: {
    db: { statusCode: 500, name: 'Internal Server Error', message: 'database error' },
    validation: { statusCode: 400, name: 'Bad Request', message: 'validation error' },
    auth: { statusCode: 401, name: 'Unauthorized', message: 'auth error' },
    forbidden: { statusCode: 403, name: 'Forbidden', message: 'forbidden content' },
    notFound: { statusCode: 404, name: 'Not Found', message: 'content not found' },
    entity: { statusCode: 422, name: 'Unprocessable Entity', message: 'entity error' },
  },
  errorValidator: {
    isString: { errorMsg: 'Not a string!' },
    maxLength: { errorMsg: 'Password should be at least 6 chars long', value: 6 },
    minLength: { errorMsg: 'Password must be at least 5 chars long', value: 5 },
  },
};
