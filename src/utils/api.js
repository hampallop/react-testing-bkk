const request = (url, options) =>
  fetch(url, options).then((res) => {
    if (res.ok) {
      return res.json()
    }
    throw res
  })

const api = {
  async me() {
    const token = window.localStorage.getItem('token')
    const isLoggedIn = Boolean(token)
    if (!isLoggedIn) {
      return null
    }
    return request('http://localhost:3001/auth/me', {
      headers: {
        authorization: token ? `Bearer ${token}` : undefined,
        'Content-Type': 'application/json',
      },
    })
  },
  login: auth =>
    request('http://localhost:3001/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(auth),
    }).then((data) => {
      login({ token: data.token })
      return data
    }),
  signup: auth =>
    request('http://localhost:3001/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(auth),
    }).then((data) => {
      login({ token: data.token })
      return data
    }),
  logout: () => {
    logout()
    return Promise.resolve({ user: null })
  },
  post: {
    get() {
      return request('http://localhost:3001/posts', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
    },
  },
  joinList: {
    get() {
      return request('http://localhost:3001/joinList', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
    },
  },
}

function logout() {
  window.localStorage.removeItem('token')
}

function login({ token }) {
  window.localStorage.setItem('token', token)
}

export default api
