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


PostCSS
/*
PostCSS Preset Env allows modern CSS to be converted into format that old browsers can also understand
*/
- dev dependencies
    - postcss
    - postcss-preset-env
    - postcss-loader
- postcss.config.js
```
    module.exports = {
        plugins: ["postcss-preset-env"]
    }
```
- Updated webpack.config.js
    - added postcss-loader 


Browsers List
/*
Provide list of browsers that application has to support
*/
- .browserslistrc
```
    last 2 versions
    > 0.5%
    IE 10
```

React with JSX
/*
What is JSX?
*/
- dependencies
    - react
    - react-dom
- dev dependency
    - @babel-preset-react

- babel.config.js
    Added 2nd parameter for JSX to JS conversion
    Allowed to not to import React as per React version after 17+, in most of the cases

    ```
        ["@babel/preset-react", {
            runtime: "automatic"
        }]
    ```
- index.js
    ```
    import { render } from 'react-dom';
    render(<h1>Welcome in React world</h1>, document.getElementById("root"));

    ```
- index.html
    ```
        <div id="root"></div>
    ```
    

Image Loader Configuration
/*
- to show images in React architecture
*/
- Added JPEG background image in SCSS
- webpack.config.js
```
rules: [{
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource',
        }]
```