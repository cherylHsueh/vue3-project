import dayjs from 'dayjs'

export default {
  install: (app, options) => {
    app.provide('dayjs', dayjs)
    console.log('app', app)
  }
}
