const octokit = new Octokit({
  auth: process.env.VUE_APP_ROOT_API 
})

const fetchRepos = async() => {
  await octokit.request('GET /user/repos', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }

  })
}

// Promise
export default {
  fetchRepos
} 
