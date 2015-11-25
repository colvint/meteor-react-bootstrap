Package.describe({
  name: 'tauruscolvin:meteor-react-bootstrap',
  version: '0.1.1',
  summary: 'Meteor package which exports browserified React, ReactMeteor, ReactBootstrap and classNames.',
  git: 'git@github.com:colvint/meteor-react-bootstrap.git',
  documentation: 'README.md'
});

Npm.depends({
  'react':           '0.13.3',
  'react-bootstrap': '0.24.5',
  'classnames':      '2.1.3'
});

Package.registerBuildPlugin({
  name: "compileJSX",
  use: [],
  sources: [
    "plugin/compile-jsx.js"
  ],
  npmDependencies: {
    "react-tools": '0.13.3'
  }
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use('ecmascript');

  api.use([
    'cosmos:browserify@0.5.0',
    'templating'
  ], 'client');

  api.addFiles([
    'client.browserify.js',
    'react-meteor.js',
    'client/lib/date-input.jsx',
  ], 'client');

  api.export([
    'React',
    'ReactMeteor',
    'ReactBootstrap',
    'classNames',
    'DateInput'
  ], 'client');
});
