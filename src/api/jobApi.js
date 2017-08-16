class JobAPI {

  static getAllJobs() {
    let root = "https://radiant-springs-66711.herokuapp.com/api"
    return (
    fetch(`${root}/jobs`, {mode: 'cors'})
      .then(res => this.getJson(res))
      .then(json => this.checkResponse(json))
      .then(json => {return json})
      .catch(err => {return err})
    )
  }

  static checkResponse(response) {
    if ([200, 201].includes(response.code)) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(
        new Error(response.messages)
      )
    }
  }

  static getJson(response) {
    return response.json()
  }
}

export default JobAPI;
