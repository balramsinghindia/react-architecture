React Architecture:

Basic Webpack setup
1. Package.json
    - dev dependencies
        - webpack 
        - webpack-cli
        - webpack-dev-server
    - tasks
        - start 
        - watch 
        - build
2. src/index.js
    - sample JS code
3. src/index.html
    - sample HTML page including above JS file
4. .gitignore
   - node_modules
   - dist
5. index.html manually inside dist 

Setup Webpack Dev Server and run website from destination folder
1. webpack.config.js
- mode: "development"
- devServer: { contentBase: "./dist", }

Setup Babel
/*
 - converts jsx to js
 - converts ES6 syntax to default JS (ES 5)
 - allows us to support latest features in all browsers
*/
- dev dependencies
    - babel-loader
    - babel/core
    - babel/preset-env

- webpack config
    ``` 
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                }
            ]
        },
    ```

- babel.config.js

```
    module.exports = {
        presets:["@babel/preset-env"]
    }
```

Source maps
/*
- helps in debugging in non-prod environmment
- by navigating to source file in browser console
*/
- webpack.config.js
    - devtool: 'source-map'


CSS 
/*
    How to import CSS files in JavaScript files 
*/
- dev dependencies
    - css-loader
    - mini-css-extract-plugin
- webpack.config.js
```
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');

    {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
    }
    
    plugins: [new MiniCssExtractPlugin()],
```
- styles/index.css
- included index.css in index.js
- included generated main.css in index.html inside dist folder


SCSS
/*
How to convert SCSS to CSS 
How can we include SCSS files into JS files directly
*/
- dev dependencies
    - sass
    - sass-loader

- webpack.config.js
```
 {
    test: /\.s?css$/i,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
}
```
- index.js 
updated path of style from css to scss
- created sample SCSS files

