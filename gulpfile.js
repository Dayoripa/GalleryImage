const { src, dest, watch, series } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');

const imagemin = require('gulp-imagemin');

function css(done) {
    src('src/scss/style.scss')
        .pipe( sourcemaps.init() )
        .pipe( sass() )
        .pipe( postcss([ autoprefixer(), cssnano() ]) )
        .pipe( sourcemaps.write('.'))
        .pipe( dest('build/css'))

    done()
}

function image(  ) {
    return src('src/image/**/*')
        .pipe( imagemin({ optimizationLevel: 3 }) )
        .pipe( dest('build/img') );
 }
 
 
function dev() {
    watch( 'src/scss/**/*.scss', css );
    watch( 'src/img/**/*', image );
}


exports.css = css;
exports.dev = dev;
exports.image = image;
exports.default = series( image, css, dev );
