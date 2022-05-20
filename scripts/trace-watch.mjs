#!/usr/bin/env node
import { watch } from 'fs'
import path from 'path'
import { fork } from 'child_process'

const dir = './packages'
const cwd = process.cwd()
const cp = fork(`${path.join(cwd, 'scripts/start-demo.mjs')}`)

// 节流通知
const throttle = (func, wait = 1000) => {
  let timer;
  return (...args) => {
      if (timer) {
          return
      }
      timer = setTimeout(() => {
          func(...args);
          timer = null
      }, wait)
  }
}

;(async function () {
  try {
    console.log(`${dir}File listening enabled ....`)
    watch(path.join(cwd, dir), { recursive: true }, throttle((eventType, filename) => {
      console.log(`File changed: ${filename}, ${eventType}`, +new Date())
      cp.send('filed change')
    }))
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()
