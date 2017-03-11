gulp = require 'gulp'
deploy = require 'gulp-deploy-git'
exec = require('child_process').exec

# Common dirs
dir =
  dist: 'public'

# Git deploy configuration
git =
  template: '%B\nBuilt from %H.'
  commit: undefined
  login: process.env.GH_LOGIN
  token: process.env.GH_TOKEN
  repo: process.env.GIT_REPO

# Build site
gulp.task 'build', (callback) ->
  exec 'hexo generate', (err, stdout, stderr) ->
    callback err

# Prepare git information
gulp.task 'git:info', (callback) ->
  exec "git log --format='#{git.template}' -1", (err, stdout, stderr) ->
    git.commit = stdout
    callback err

# Deploy site to git
gulp.task 'deploy', [ 'git:info' ], (callback) ->
  gulp.src("#{dir.dist}/**/*", read: false).pipe deploy(
    repository: "https://#{git.login}:#{git.token}@#{git.repo}"
    branches: [ 'HEAD' ]
    remoteBranch: 'master'
    prefix: dir.site
    message: git.commit).on 'error', (err) ->
      callback err
