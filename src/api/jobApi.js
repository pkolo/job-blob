class JobAPI {

  static getAllJobs() {
    let root = "https://radiant-springs-66711.herokuapp.com/api"
    fetch(`${root}/jobs`, {mode: 'cors'})
      .then(this.getJson())
      .then(this.checkResponse())
      .then(json => {return json})
      .catch(err => {return err})
  }

  checkResponse(response) {
    if ([200, 201].includes(response.code)) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(
        new Error(response.messages)
      )
    }
  }

  getJson(response) {
    return response.json()
  }
}

export default JobAPI;
