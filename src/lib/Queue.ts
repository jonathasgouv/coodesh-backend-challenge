import Queue, { QueueOptions } from 'bull'
import redisConfig from '@config/redis'

import SyncMail from '@jobs/SyncMail'

const queue = {
  bull: new Queue(SyncMail.key, redisConfig as QueueOptions),
  name: SyncMail.key,
  handle: SyncMail.handle
}

export default {
  queue,
  add (data) {
    return queue.bull.add(data)
  },
  process () {
    console.log('Starting to process queue')
    queue.bull.process(queue.handle)

    queue.bull.on('failed', (job, err) => {
      console.log('Job failed: ' + job.name, job.data)
      console.log(err)
    })
  }
}
