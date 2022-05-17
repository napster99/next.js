#!/usr/bin/env node
import { watch } from 'fs'
import path from 'path'
// import { exec } from 'child_process'

const cwd = process.cwd()
const dir = './packages'

;(async function () {
  try {
    console.log(`${dir}File listening enabled ....`)
    watch(path.join(cwd, dir), { recursive: true }, (eventType, filename) => {
      // exec('yarn start', (err, stdout, stderr) => {
      //   if (err) {
      //     console.log(err)
      //     return
      //   }
      //   console.log(`stdout: ${stdout}`)
      //   console.log(`stderr: ${stderr}`)
      // })

      if (filename) {
        console.log(`File changed: ${filename}`)
      } else {
        console.log('Filename not provided')
      }
    })
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()
