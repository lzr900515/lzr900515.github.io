var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// 静态服务器
gulp.task('start', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// 代理

//gulp.task('browser-sync', function() {
//    browserSync.init({
//        proxy: "http://localhost"
//    });
//});
