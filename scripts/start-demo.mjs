#!/usr/bin/env node
import path from 'path'
import { exec } from 'child_process'

/**
 * killall node
 * pkill -f node
 */
const cwd = process.cwd()
const COMMAND_START = `cd ${path.join(cwd, 'demos/next-demo')}  && yarn demo`

let workerProcess
;(async function () {
  try {

    const startServer = () => {
      console.log('next-demo yarn demo ...')
      workerProcess = exec(COMMAND_START)
      console.log('workerProcess.pid::', workerProcess.pid + 1)
      console.log('process.pid::', process.pid + 1)
      workerProcess.stdout.on('data', function (data) {
        console.log(data)
      })
      workerProcess.on('exit', function (code) {
        console.log('workerProcess exit code: ' + code)
      })
    }

    startServer()

    process.on('message', () => {
      console.log('receive change message ...')
      process.kill(workerProcess.pid + 1)

      setTimeout(() => {
        console.log('resetart ....')
        startServer()
      }, 2000)
    })

    process.on('exit', (code) => {
      console.log('process exit ...', code)
    })

  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()
