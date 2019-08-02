const path = process.cwd();

module.exports = {
    '@src': `${path}/src/`,
    '@theme': `${path}/src/theme/`,
    '@components': `${path}/src/components/`,
    '@atoms': `${path}/src/components/atoms/`,
    '@molecules': `${path}/src/components/molecules/`,
    '@organisms': `${path}/src/components/organisms/`,
    '@containers': `${path}/src/containers/`,
    '@stores': `${path}/src/stores/`,
    'react-dom': '@hot-loader/react-dom',
    'mobx':  `${path}/node_modules/mobx/lib/mobx.es6.js`
};
