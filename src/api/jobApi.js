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

  static createJob(job) {
    let jobPayload = this.getJobPayload(job)
    let root = "https://radiant-springs-66711.herokuapp.com/api"
    const request = new Request(`${root}/jobs`, {
      method: 'POST',
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(jobPayload)
    })

    return fetch(request)
      .then(res => this.getJson(res))
      .then(json => this.checkResponse(json))
      .then(json => {return json.result})
      .catch(err => {return err})
  }

  static updateJob(job) {
    let jobPayload = this.getJobPayload(job)
    let root = "https://radiant-springs-66711.herokuapp.com/api"
    const request = new Request(`${root}/jobs/${job.id}`, {
      method: 'PUT',
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(jobPayload)
    })

    return fetch(request)
      .then(res => this.getJson(res))
      .then(json => this.checkResponse(json))
      .then(json => {return json.result})
      .catch(err => {return err})
  }

  static deleteJob(job) {
    let root = "https://radiant-springs-66711.herokuapp.com/api"
    const request = new Request(`${root}/jobs/${job.id}`, {
      method: 'DELETE'
    });
    return fetch(request)
      .then(res => this.getJson(res))
      .then(json => this.checkResponse(json))
      .then(json => {return json})
      .catch(err => {return err})
  }

  static getJobPayload(job) {
    return {
      job: {
        title: job.title,
        details: job.details,
        category_name: job.category.name,
        location_attributes: {
          city: job.location.city,
          state: job.location.state
        }
      }
    }
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
