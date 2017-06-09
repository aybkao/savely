const expect = require('chai').expect;
const axios = require('axios');
const babelCore = require('babel-core');
const babelLoader = require('babel-loader');
const babelTransform = require('babel-plugin-transform-es2015-modules-commonjs');
const babelPresetLatest = require('babel-preset-latest');
const babelPresetReact = require('babel-preset-react');
const babelPresetStageTwo = require('babel-preset-stage-2');
const ejs = require('ejs');
const webpack = require('webpack');
const semanticUiReact = require('semantic-ui-react');
const victory = require('victory');

describe('FRONTEND DEPENDENCIES', function(done) {
  it('react-required dependencies (ejs, webpack and babel) should be installed and running', function() {
    expect(ejs).to.be.an('object');
    expect(webpack).to.be.a('function');
  });

  it('transpilation dependencies (babel-core, loader, transform, presets) should be installed and running', function() {
    expect(babelCore).to.be.an('object');
    expect(babelLoader).to.be.a('function');
    expect(babelTransform).to.be.an('function');
    expect(babelPresetLatest).to.be.an('function');
    expect(babelPresetReact).to.be.an('object');
    expect(babelPresetStageTwo).to.be.an('object');
  });


  it('ux/ui dependencies (semantic-ui and victory) should be installed and running', function() {
    expect(semanticUiReact).to.be.an('object');
    expect(victory).to.be.an('object');
  });

});
