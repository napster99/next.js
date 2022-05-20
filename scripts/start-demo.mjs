#!/usr/bin/env node
import path from 'path'
import { exec } from 'child_process'

/**
 * killall node
 * pkill -f node
 * 
 * todo:
 * - 打印信息输出优化 chalk
 * - 增加守护进程鲁棒
 */
const INTERVAL = 1e3
const CWD = process.cwd()
const COMMAND_START = `cd ${path.join(CWD, 'demos/next-demo')}  && yarn demo`

let workerProcess
;(async function () {
  try {

    const startServer = () => {
      console.info('next-demo yarn demo ...')
      workerProcess = exec(COMMAND_START)
      console.info('workerProcess.pid::', workerProcess.pid + 1)
      console.info('process.pid::', process.pid + 1)
      workerProcess.stdout.on('data', function (data) {
        console.info(data)
      })
      workerProcess.on('exit', function (code) {
        console.info('workerProcess exit code: ' + code)
      })
    }

    startServer()

    process.on('message', () => {
      console.info('receive change message ...')
      process.kill(workerProcess.pid + 1)

      setTimeout(() => {
        console.info('resetart ....')
        startServer()
      }, INTERVAL)
    })

    process.on('exit', (code) => {
      console.info('process exit ...', code)
    })

  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()
