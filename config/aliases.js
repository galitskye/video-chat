const path = process.cwd();

module.exports = {
    '@src': `${path}/src/`,
    '@theme': `${path}/src/theme/`,
    '@components': `${path}/src/components/`,
    '@atoms': `${path}/src/components/atoms/`,
    '@molecules': `${path}/src/components/molecules/`,
    '@organisms': `${path}/src/components/organisms/`,
    '@templates': `${path}/src/components/templates/`,
    '@pages': `${path}/src/components/pages/`,
    '@container': `${path}/src/container/`,
    '@stores': `${path}/src/stores/`,
    '@images': `${path}/src/images/`,
    'react-dom': '@hot-loader/react-dom',
    'mobx':  `${path}/node_modules/mobx/lib/mobx.es6.js`
};
