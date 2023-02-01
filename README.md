<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# roundn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Round a complex number to the nearest multiple of `10^n`.



<section class="usage">

## Usage

To use in Observable,

```javascript
croundn = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-croundn@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var croundn = require( 'path/to/vendor/umd/math-base-special-croundn/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-croundn@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.croundn;
})();
</script>
```

#### croundn( \[out,] re, im, n )

Rounds a `complex` number comprised of a **real** component `re` and an **imaginary** component `im` to the nearest multiple of `10^n`.

```javascript
// Round components to 2 decimal places:
var v = croundn( -3.141592653589793, 3.141592653589793, -2 );
// returns [ -3.14, 3.14 ]

// If n = 0, `croundn` behaves like `cround`:
v = croundn( -3.141592653589793, 3.141592653589793, 0 );
// returns [ -3.0, 3.0 ]

// Round components to the nearest thousand:
v = croundn( -12368.0, 12368.0, 3 );
// returns [ -12000.0, 12000.0 ]

v = croundn( NaN, NaN, 0 );
// returns [ NaN, NaN ]
```

By default, the function returns real and imaginary components as a two-element `array`. To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var out = new Float32Array( 2 );

var v = croundn( out, -4.6, 5.5, 0 );
// returns <Float32Array>[ -5.0, 6.0 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When operating on [floating-point numbers][ieee754] in bases other than `2`, rounding to specified digits can be **inexact**. For example,

    ```javascript
    var x = 0.2 + 0.1;
    // returns 0.30000000000000004

    // Should round components to 0.3:
    var v = croundn( x, x, -16 );
    // returns [ 0.3000000000000001, 0.3000000000000001 ]
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/complex-real@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/complex-imag@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-croundn@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var re;
var im;
var z;
var o;
var w;
var n;
var i;

for ( i = 0; i < 100; i++ ) {
    re = ( randu()*100.0 ) - 50.0;
    im = ( randu()*100.0 ) - 50.0;
    z = new Complex128( re, im );

    n = ceil( randu()*5.0 );
    o = croundn( real(z), imag(z), -n );
    w = new Complex128( o[ 0 ], o[ 1 ] );

    console.log( 'roundn(%s,%s) = %s', z.toString(), n.toString(), w.toString() );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/cceiln`][@stdlib/math/base/special/cceiln]</span><span class="delimiter">: </span><span class="description">round a complex number to the nearest multiple of 10^n toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/cfloorn`][@stdlib/math/base/special/cfloorn]</span><span class="delimiter">: </span><span class="description">round a complex number to the nearest multiple of 10^n toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/cround`][@stdlib/math/base/special/cround]</span><span class="delimiter">: </span><span class="description">round a complex number to the nearest integer.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-croundn.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-croundn

[test-image]: https://github.com/stdlib-js/math-base-special-croundn/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-croundn/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-croundn/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-croundn?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-croundn.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-croundn/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-croundn/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-croundn/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-croundn/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-croundn/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-croundn/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/cceiln]: https://github.com/stdlib-js/math-base-special-cceiln/tree/umd

[@stdlib/math/base/special/cfloorn]: https://github.com/stdlib-js/math-base-special-cfloorn/tree/umd

[@stdlib/math/base/special/cround]: https://github.com/stdlib-js/math-base-special-cround/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
