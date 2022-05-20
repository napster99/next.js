#!/usr/bin/env node
import { watch } from 'fs'
import path from 'path'
import { fork } from 'child_process'

const cwd = process.cwd()

const cp = fork(`${path.join(cwd, 'scripts/start-demo.mjs')}`)
cp.on('message', (msg) => {
  console.log('父进程收到消息：', msg)
})

const dir = './packages'

;(async function () {
  try {
    console.log(`${dir}File listening enabled ....`)
    watch(path.join(cwd, dir), { recursive: true }, (eventType, filename) => {
      cp.send('我是父进程')
      setInterval(() => cp.send('我是进程' + Date.now()), 2000)
      console.log(`File changed: ${filename}, ${eventType}`)
    })
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()
