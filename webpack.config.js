const path= require('path')
module.exports={
    mode: 'production',
    entry:{
        learnUi: './lib/index.tsx'
    },
    output:{
        path: path.resolve(__dirname,'dist/lib'),
        library:'learnUi',
        libraryTarget: 'umd',

    },
    module:{
        rules : [
            { 
                test: /\.tsx?$/,
                loader:'awesome-typescript-loader'
            }



        ]
    }
}