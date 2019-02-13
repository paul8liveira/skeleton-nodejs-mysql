var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");

//script para copiar arquivo que não precisam ser babelyzed
gulp.task("copy", function () {
    return gulp.src([
        "src/**/*.json"
    ])
    .pipe(gulp.dest("build"));
});

//babelyzed todos os arquivos .js
gulp.task("babel", function () {
    return gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("build"));
});

//task padrão que executa build
gulp.task("default", gulp.parallel("babel", "copy"));