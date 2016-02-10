Package.describe({
  name: 'tauruscolvin:meteor-react-bootstrap',
  version: '0.14.7',
  summary: 'Meteor package which exports browserified React, ReactMeteor, ReactBootstrap and classNames.',
  git: 'git@github.com:colvint/meteor-react-bootstrap.git',
  documentation: 'README.md'
});

Npm.depends({
  'react':                           '0.14.7',
  'react-dom':                       '0.14.7',
  'react-addons-linked-state-mixin': '0.14.7',
  'react-addons-update':             '0.14.7',
  'react-bootstrap':                 '0.28.1',
  'classnames':                      '2.2.1',
  'react-select':                    '1.0.0-beta6',
  'fixed-data-table':                '0.6.0',
  'react-highcharts':                '6.0.0',
  'react-tinymce':                   '0.4.0',
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
    'client/head.html',
  ], 'client');

  api.addFiles([
    'client/stylesheets/react-select.css',
    'client/stylesheets/react-data-table.css',
  ], 'client', {bare: true});

  api.export([
    'React',
    'ReactLinkedStateMixin',
    'ReactUpdate',
    'ReactMeteor',
    'ReactBootstrap',
    'classNames',
    'DateInput',
    'ReactSelect',
    'ReactDataTable',
    'ReactHighcharts',
    'ReactTinyMCE',
  ], 'client');
});
