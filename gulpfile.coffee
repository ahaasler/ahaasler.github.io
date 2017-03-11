gulp = require 'gulp'
exec = require('child_process').exec

# Build site
gulp.task 'build', (callback) ->
  exec 'hexo generate', (err, stdout, stderr) ->
    callback err
