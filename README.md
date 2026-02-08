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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# croundn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Round each component of a double-precision complex floating-point number to the nearest multiple of `10^n`.



<section class="usage">

## Usage

```javascript
import croundn from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-croundn@esm/index.mjs';
```

#### croundn( z, n )

Rounds each component of a double-precision complex floating-point number to the nearest multiple of `10^n`.

```javascript
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@esm/index.mjs';

var v = croundn( new Complex128( -3.141592653589793, 3.141592653589793 ), -2 );
// returns <Complex128>[ -3.14, 3.14 ]

v = croundn( new Complex128( -3.141592653589793, 3.141592653589793 ), 0 );
// returns <Complex128>[ -3.0, 3.0 ]

v = croundn( new Complex128( -12368.0, 12368.0 ), 3 );
// returns <Complex128>[ -12000.0, 12000.0 ]

v = croundn( new Complex128( NaN, NaN ), 3 );
// returns <Complex128>[ NaN, NaN ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When operating on [floating-point numbers][ieee754] in bases other than `2`, rounding to specified digits can be **inexact**. For example,

    ```javascript
    import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@esm/index.mjs';

    var x = 0.2 + 0.1;
    // returns 0.30000000000000004

    // Should round components to 0.3:
    var v = croundn( new Complex128( x, x ), -16 );
    // returns <Complex128>[ 0.3000000000000001, 0.3000000000000001 ]
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
<script type="module">

var uniform = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform' ).factory;
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@esm/index.mjs';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs';
import croundn from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-croundn@esm/index.mjs';

var rand1 = uniform( -5.0, 0.0 );
var rand2 = uniform( -50.0, 50.0 );

var z;
var i;
var n;
for ( i = 0; i < 100; i++ ) {
    z = new Complex128( rand2(), rand2() );
    n = floor( rand1() );
    console.log( 'croundn(%s, %s) = %s', z, n, croundn( z, n ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/cceiln`][@stdlib/math/base/special/cceiln]</span><span class="delimiter">: </span><span class="description">round each component of a double-precision complex floating-point number to the nearest multiple of 10^n toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math-base/special/cfloorn`][@stdlib/math/base/special/cfloorn]</span><span class="delimiter">: </span><span class="description">round each component of a double-precision complex floating-point number to the nearest multiple of 10^n toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math-base/special/cround`][@stdlib/math/base/special/cround]</span><span class="delimiter">: </span><span class="description">round each component of a double-precision complex floating-point number to the nearest integer.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-croundn.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-croundn

[test-image]: https://github.com/stdlib-js/math-base-special-croundn/actions/workflows/test.yml/badge.svg?branch=v0.2.3
[test-url]: https://github.com/stdlib-js/math-base-special-croundn/actions/workflows/test.yml?query=branch:v0.2.3

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-croundn/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-croundn?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-croundn.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-croundn/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-croundn/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-croundn/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-croundn/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-croundn/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-croundn/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-croundn/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-croundn/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-croundn/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/cceiln]: https://github.com/stdlib-js/math-base-special-cceiln/tree/esm

[@stdlib/math/base/special/cfloorn]: https://github.com/stdlib-js/math-base-special-cfloorn/tree/esm

[@stdlib/math/base/special/cround]: https://github.com/stdlib-js/math-base-special-cround/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
