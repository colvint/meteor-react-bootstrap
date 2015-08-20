# meteor-react-bootstrap
Meteor package which exports **browserified** React, ReactMeteor, ReactBootstrap and classNames.

Note: the core react / meteor integration code and JSX compiler is a wholesale copy from [reactjs:react-meteor](https://github.com/reactjs/react-meteor). That said, this package is an improvement because it uses [cosmos-browserify](https://github.com/elidoran/cosmos-browserify) to properly handle `npm` dependencies on the client.

# Installation

`meteor add tauruscolvin:meteor-react-bootstrap`

# Usage

The package exposes the following globals to your app client:
- `React`
- `ReactBootstrap`
- `ReactMeteor`
- `classNames`
