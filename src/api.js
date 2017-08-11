export function APIRoot(url) {
  return `https://radiant-springs-66711.herokuapp.com/api/${url}`
}

export function checkResponse(response) {
  if (response.status === 200) {
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
