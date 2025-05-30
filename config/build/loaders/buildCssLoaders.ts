import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoaders = (isDev: boolean) => ({
    test: /\.(s[ac]|c)ss$/i,
    exclude: /node_modules/,
    use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: (resPath: string) => resPath.includes('.module.'),
                    localIdentName: isDev
                        ? '[path][name]__[local]--[hash:base64:5]'
                        : '[hash:base64:8]',
                    namedExport: false,
                    exportLocalsConvention: 'as-is'
                },
                importLoaders: 1,
            },
        },
        'sass-loader',
    ],
});
