'use strict';

let helpers = require('yeoman-test');
let assert = require('yeoman-assert');
let generator = `${process.env.PWD}/app`;

describe('kibe application', scaffolding);

function scaffolding() {
  before(function (done) {
    helpers
      .run(generator)
      .on('end', done);
  });

  it('scaffolding', function () {
    assert.file([
      'bower.json',
      '.editorconfig',
      '.gitignore',
      'LICENSE.txt',
      'bower.json',
      'gulp.config.js',
      'gulpfile.js',
      'package.json',
      'src/humans.txt',
      'src/humans.txt',
      'src/index.html',
      'src/robots.txt',
      'src/img',
      'src/js',
      'src/styl',
      './tasks/scripts.js',
      './tasks/styles.js',
      './tasks/imagemin.js',
      './tasks/sprites.js',
      './tasks/move.js',
      './tasks/browser-sync.js',
      './tasks/server.js',
      './tasks/default.js'
    ]);
  });
}
