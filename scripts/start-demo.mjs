#!/usr/bin/env node
import path from 'path'
import { exec } from 'child_process'

/**
 * killall node
 * pkill -f node
 */
const cwd = process.cwd()

;(async function () {
  try {
    console.log('启动 yarn demo ...')
    const workerProcess = exec(
      `cd ${path.join(cwd, 'demos/next-demo')}  && yarn demo`
    )

    workerProcess.stdout.on('data', function (data) {
      console.log(data)
    })

    console.log('workerProcess.pid::', workerProcess.pid + 1)
    console.log('process.pid::', process.pid + 1)

    // setTimeout(() => {
    //   console.log('杀死workerProcess进程', workerProcess.pid + 1)
    //   process.kill(workerProcess.pid + 1)

    //   // console.log('杀死process进程', process.pid + 1)
    //   // process.kill(process.pid + 1)
    // }, 10e3)

    workerProcess.on('exit', function (code) {
      console.log('workerProcess子进程已退出，退出码 ' + code)
    })

    process.on('message', (m) => {
      console.log('子进程收到消息xx：', m)
      
    })

    process.on('exit', (code) => {
      console.log('process 进程退出', code)
    })

    // process.send('我是子进程')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()
