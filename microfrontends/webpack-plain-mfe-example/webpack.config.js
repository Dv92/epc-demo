const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const isProduction = process.env.NODE_ENV == "production";

const config = {
    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname, "build"),
    },
    devServer: {
        open: true,
        host: "localhost",
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({template: "index.html"})
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: "ts-loader",
                exclude: ["/node_modules/"],
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: "style-loader",
                        options: {
                            injectType: "lazySingletonStyleTag",
                            insert: (element, options) => {
                                const parent = options.target || document.head;
                                parent.appendChild(element);
                            }
                        }
                    },
                    "css-loader",
                    "postcss-loader"
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset"
            }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
    } else {
        config.mode = "development";
    }
    return config;
};
