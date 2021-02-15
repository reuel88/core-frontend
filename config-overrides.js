module.exports = {
    webpack: (config, env) => {
        console.log(env);
        config.optimization.runtimeChunk = false;
        config.optimization.splitChunks = {
            cacheGroups: {
                default: false,
            },
        };
        return config;
    },
};