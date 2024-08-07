/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var uniform = require( '@stdlib/random-base-uniform' ).factory;
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var floor = require( '@stdlib/math-base-special-floor' );
var croundn = require( './../lib' );

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
