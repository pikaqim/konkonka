const gulp = require('gulp')
const rename = require('gulp-rename')
const cssmin = require('gulp-cssmin')
const autoPrefixer = require('gulp-autoprefixer')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const del = require('del')
const clean = require('gulp-clean')
const sequence = require('run-sequence')
const watch = require('gulp-watch')
const fileinclude = require('gulp-file-include')
const webserver = require('gulp-webserver')
const htmlmin = require('gulp-htmlmin')
const { dest } = require('gulp')

const cssHandler = () => {
    return gulp.src('./src/assets/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/assets/css'))
}

const jsHandler = () => {
    return gulp.src('./src/assets/js/*.js')
        .pipe(uglify())
        //    .gulp(rename('*.min.js'))
        // .gulp(rename({ extname:'.min.js' })
        .pipe(gulp.dest('./dist/assets/js'))
}

const htmlHandler = () => {
    return gulp.src('./src/pages/**')
        .pipe(htmlmin({
            removeAttributeQuotes: true, //移除属性上的双引号
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
            collapseBooleanAttributes: true
        }))
        .pipe(dest('./dist/pages'))
}

const homeHandler = () => {
    return gulp.src('./src/index.html')
        .pipe(htmlmin({
            removeAttributeQuotes: true, 
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
            collapseBooleanAttributes: true
        }))
        .pipe(dest('./dist/'))
}

const delHandler = () => {
    return gulp.src('./src/pages/*./html')
    .pipe(dest('./dist/assets/pages'))
}

const imagesHandler = () => {
    return gulp.src('./src/assets/images/**')
    .pipe(dest('./dist/assets/images'))
}

const libHandler = () => {
    return gulp.src('./src/lib/**')
    .pipe(dest('./dist/lib'))
}

const phpHandler = () => {
    return gulp.src('./src/php/*')
    .pipe(dest('./dist/php'))
}

const webserverHandler = () => {
    return gulp.src('./dist')  //找到要作为  服务器根目录的文件夹
            .pipe(webserver({
                port:9964,
                open:'./index.html',
                livereload:true,
                proxies:[{
                    source: '/abc',
                    target:'http:127.0.0.1/php/indexlist1.php'
                },{
                    source: '/bbb',
                    target:'http:127.0.0.1/php/list3.php'
                },
                {
                    source: '/eee',
                    target:'http:127.0.0.1/php/list4.php'
                },{
                    source: '/ccc',
                    target:'http:127.0.0.1/php/list2.php'
                },
                {
                    source: '/ddd',
                    target:'http:127.0.0.1/php/list1.php'
                },
                {
                    source: '/fff',
                    target:'http:127.0.0.1/php/detail.php'
                },{
                    source: '/ggg',
                    target:'http:127.0.0.1/php/login.php'
                },
                {
                    source: '/hhh',
                    target:'http:127.0.0.1/php/register.php'
                },{
                    source: '/com',
                    target:'http:127.0.0.1/php/common.php'
                },
                {
                    source: '/hhh',
                    target:'http:127.0.0.1/php/index.php'
                }
            
            ]
            }))

} 

const watchHandler = ()=>{
    gulp.watch('./src/css/*.css',cssHandler);
    gulp.watch('./src/js/*.js',jsHandler);
    gulp.watch('./src/pages/*.html',htmlHandler);
    gulp.watch('./src/index.html',homeHandler);
    gulp.watch('./src/images/**',imagesHandler);
    gulp.watch('./src/lib/**',libHandler)
}
module.exports.htmlHandler = htmlHandler; 
// series按顺序执行任务
module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(libHandler,imagesHandler,cssHandler,htmlHandler,homeHandler,phpHandler,jsHandler),
    webserverHandler,
    watchHandler
)
