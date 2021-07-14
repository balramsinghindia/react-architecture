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

