const isDev = process.env.NODE_ENV === 'development'

const config = {
  development: {
    title: 'VMS',
    icon: 'https://avatars1.githubusercontent.com/u/12462602?s=460&v=4',
    author: 'Eric'
  },
  production: {
    title: 'VMS',
    icon: 'https://avatars1.githubusercontent.com/u/12462602?s=460&v=4',
    author: 'Eric'
  }
}

export default isDev ? config['development'] : config['production']
