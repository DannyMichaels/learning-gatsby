const { default: Layout } = require('./src/components/Layout');
const React = require('react');

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
