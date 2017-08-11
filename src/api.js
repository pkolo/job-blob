export function APIRoot(url) {
  return `https://radiant-springs-66711.herokuapp.com/api/${url}`
}

export function checkResponse(response) {
  if ([200, 201].includes(response.status)) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(
      new Error(response.statusText)
    )
  }
}

export function getJson(response) {
  return response.json()
}
