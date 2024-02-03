/**
 * Build package
 *
 * This script collects all needed files and transforms
 * it to a compontent library ready package to be published
 *
 */

import fs from 'fs-extra'
import * as sass from 'sass'

const buildDir = `./dist`
const srcDir = `./src`

// Delete dist folder contents. If the directory does not exist, it is created.
const cleanBuildDir = async () => {
  try {
    await fs.emptyDir(buildDir)
    console.log('Build directory cleaned and ready')
  } catch (err) {
    console.error(err)
  }
}

// copy all files to build folder
const copyFiles = async () => {
  try {
    await fs.copy(`${srcDir}/scss`, `${buildDir}/scss`)
    await fs.copy(`${srcDir}/scripts`, `${buildDir}/scripts`)
    console.log('Package contents copied')
  } catch (err) {
    console.error(err)
  }
}

const compileSassFile = async (input, output) => {
  const exp = sass.compile(input)
  const com = sass.compile(input, { style: 'compressed' })

  fs.outputFile(output, exp.css, 'utf8')
  fs.outputFile(output.replace('.css', '.min.css'), com.css, 'utf8')
}

// process sass files and move to css folder
const processScss = async () => {
  const modules = fs
    .readdirSync(`${buildDir}/scss`)
    .filter((file) => file.includes('.scss'))
  const components = fs
    .readdirSync(`${buildDir}/scss/components`)
    .filter((file) => file !== '_index.scss')

  try {
    modules.forEach((filename) => {
      const newFilename = filename.replace('.scss', '.css')
      compileSassFile(
        `${buildDir}/scss/${filename}`,
        `${buildDir}/css/${newFilename}`
      )
      console.log('File ' + filename + ' processed')
    })

    components.forEach((filename) => {
      const newFilename = filename.replace('_', '').replace('.scss', '.css')
      compileSassFile(
        `${buildDir}/scss/components/${filename}`,
        `${buildDir}/css/components/${newFilename}`
      )
      console.log('File ' + filename + ' processed')
    })

    console.log('Scss processed!')
  } catch (err) {
    console.error(err)
  }
}

// clean up build-package folder
;(async () => {
  await cleanBuildDir()
  await copyFiles()
  await processScss()

  console.log('Build finished!')
})()
