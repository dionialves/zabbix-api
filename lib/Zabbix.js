const axios = require('axios');


class Zabbix {

  constructor(opts) {
    this.url = opts.url;
    this.user = opts.user;
    this.password = opts.password;
    this.auth = null
  }

  async request (method, params) {

    const response = await axios.post(this.url, {
      "jsonrpc": "2.0",
      method,
      params,
      "id": 1,
      auth: this.auth
      })
      return response.data.result
    }

    async login () {
      const result = await this.request('user.login', {
      user: this.user,
      password: this.password
      })
      this.auth = result
      return result
    }

    async logout () {
        const result = await this.request('user.logout', [])
        this.auth = null
        return result
    }
}

module.exports = Zabbix