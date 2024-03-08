import { Octokit } from "octokit"

const secret = import.meta.env.VITE_GITHUB_TOKEN_API

const octokit = new Octokit({
  auth: secret, 
})

const fetchRepos = async() => {
  const response = await octokit.request('GET /user/repos', {
    affiliation: 'owner',
    visibility: 'public',
    sort: 'updated',
    direction: 'desc',
    per_page: 12,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  }).then((res) => res.data).catch((err) => console.error(err))
  return response
}

const fetchUser = async() => {
  const response = await octokit.request('GET /user', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  }).then((res) => res.data).catch((err) => console.error(err))
  return response
}

const fetchReposByPagination = async(pageNumber: number) => {
  const response = await octokit.request('GET /user/repos', {
    visibility: 'public',
    sort: 'updated',
    direction: 'desc',
    per_page: 12,
    page: pageNumber,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  }).then((res) => res.data).catch((err) => console.error(err))
  return response 
}

// Promise
export default {
  fetchRepos: fetchRepos,
  fetchReposByPagination: fetchReposByPagination,
  fetchUser: fetchUser,
} 
