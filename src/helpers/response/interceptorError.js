const interceptorError = (error) => {
	return Promise.reject(error)
}

export default interceptorError