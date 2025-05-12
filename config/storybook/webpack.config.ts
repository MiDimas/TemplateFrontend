import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { BuildPaths } from '../build/types/config';
import { buildBabelLoader } from '../build/loaders/buildBabelLoader';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export default async ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: '',
    };

    config!.resolve = config!.resolve || {};
    config!.resolve!.modules = config!.resolve!.modules || [];
    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions = config!.resolve!.extensions || [];
    config!.resolve!.extensions!.push('.ts', '.tsx');
    config!.resolve!.alias = {
        ...config!.resolve!.alias,
        '@': paths.src,
    };

    config!.module = config!.module || {};
    config!.module!.rules = config!.module!.rules || [];

    // Исключаем встроенный обработчик SVG
    // @ts-ignore
    config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return {
                ...rule,
                exclude: /\.svg$/i,
            };
        }
        return rule;
    });

    // Добавляем свой обработчик SVG
    config!.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    
    // Добавляем обработчик для TS файлов (не-компоненты)
    config!.module!.rules.push(buildBabelLoader({
        isDev: true,
        isTsx: false,
        mode: 'development',
        paths,
        port: 3000,
        apiUrl: 'http://localhost:8000',
        project: 'storybook'
    }));

    // Добавляем обработчик для TSX файлов (компоненты React)
    config!.module!.rules.push(buildBabelLoader({
        isDev: true,
        isTsx: true,
        mode: 'development',
        paths,
        port: 3000,
        apiUrl: 'http://localhost:8000',
        project: 'storybook'
    }));

    // Добавляем обработчик для CSS/SCSS
    config!.module!.rules.push(buildCssLoaders(true));

    config!.plugins = config!.plugins || [];
    config!.plugins!.push(
        new webpack.DefinePlugin({
            __IS_DEV__: true,
            __API__: JSON.stringify('http://localhost:8000'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );
    config!.plugins!.push(new ReactRefreshWebpackPlugin());

    return config;
};
