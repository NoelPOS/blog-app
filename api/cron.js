import cron from 'cron'
import https from 'https'

const backendUrl = 'https://vetmimi-blog.onrender.com'
// const backendUrl = 'http://localhost:3000'

const job = new cron.CronJob('*/14 * * * *', async () => {
  console.log('restarting server')

  https
    .get(backendUrl, (res) => {
      if (res.statusCode === 200) {
        console.log('Server restarted successfully with cron')
      } else {
        console.log('Server failed to restart with cron', res.statusCode)
      }
    })
    .on('error', (e) => {
      console.log('Error during restart with cron:', e.message)
    })
})

job.start()
