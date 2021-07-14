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
