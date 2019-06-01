module.exports = function (api) {

    api.cache.forever();

    return {
        'plugins': [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-export-default-from',
            '@babel/plugin-proposal-export-namespace-from'
        ],
        'presets': [
            '@babel/preset-react',  
            ['@babel/preset-env', {
                'targets': {
                    'browsers': ['last 2 versions', 'safari >= 7']
                }
            } ]
        ]
    };

};
