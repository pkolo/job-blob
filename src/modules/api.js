export function APIRoot(url) {
  return `https://radiant-springs-66711.herokuapp.com/api/${url}`
}

export function checkResponse(response) {
  if ([200, 201].includes(response.code)) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(
      new Error(response.messages)
    )
  }
}

export function getJson(response) {
  return response.json()
}
