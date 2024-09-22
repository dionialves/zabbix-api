
class Client {

  constructor(api) {
    this.api = api
  }

  getHostGroupId = async () => {
    try {
      const hostgroup = await this.api.request('hostgroup.get', {})

      return hostgroup
    } catch (error) {
      console.error(error)
    }
  }

  problems = async (groupId) => {
    const problem = await this.api.request('problem.get', {
      groupids: groupId
    })
    return problem.length
  }

  getProblems = async () => {
    await this.api.login()

    const groupHosts = await this.getHostGroupId()

    const arrayGroups = []
    for (let x in groupHosts) {

      const numProblems = await this.problems(groupHosts[x].groupid)
      if (numProblems > 0){
        arrayGroups.push(groupHosts[x].name)
      }
      
    }
    await this.api.logout()
    return arrayGroups
  }
}

module.exports = Client