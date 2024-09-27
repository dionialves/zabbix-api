
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

  getProblem = async (groupId) => {
    const problem = await this.api.request('problem.get', {
      groupids: groupId,
      acknowledged: 0,
      severities: [3, 4, 5],
    })
    return problem
  }

  getHostsProblems = async () => {
    await this.api.login()

    const groupHosts = await this.getHostGroupId()

    const arrayGroups = []
    for (let x in groupHosts) {

      const numProblems = await this.getProblem(groupHosts[x].groupid)
      if (numProblems.length > 0){
        arrayGroups.push(groupHosts[x].name)
      }
      
    }
    await this.api.logout()
    return arrayGroups
  }
}

module.exports = Client