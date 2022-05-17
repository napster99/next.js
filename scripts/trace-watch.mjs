#!/usr/bin/env node
import { watch } from 'fs'
import path from 'path'

const cwd = process.cwd()
const dir = './packages'

;(async function () {
  try {
    watch(path.join(cwd, dir), { recursive: true }, (eventType, filename) => {
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
