const path = require('path');

module.exports = {
    env: {},
    webpack(appConfig, { webpack, isServer }) {
        const config = appConfig;
        if (!isServer) {
            config.node = {
                fs: 'empty',
            };
        }
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                },
            },
        });

        config.resolve.alias['@Lib'] = path.resolve(__dirname, 'lib');
        config.resolve.alias['@Pages'] = path.resolve(__dirname, 'pages');
        config.resolve.alias['@Styles'] = path.resolve(__dirname, 'styles');
        config.resolve.alias['@Components'] = path.resolve(__dirname, 'components');
        return config;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    pageExtensions: ['page.tsx'],
};
