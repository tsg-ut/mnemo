/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_11optkyd8f = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/lib/util.js',
	    hash = '192c8afdcf59003475a434371d9146e765cf1794',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/lib/util.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 1,
					column: 39
				}
			},
			'1': {
				start: {
					line: 4,
					column: 0
				},
				end: {
					line: 19,
					column: 2
				}
			},
			'2': {
				start: {
					line: 5,
					column: 14
				},
				end: {
					line: 5,
					column: 29
				}
			},
			'3': {
				start: {
					line: 6,
					column: 14
				},
				end: {
					line: 6,
					column: 29
				}
			},
			'4': {
				start: {
					line: 8,
					column: 1
				},
				end: {
					line: 10,
					column: 2
				}
			},
			'5': {
				start: {
					line: 9,
					column: 2
				},
				end: {
					line: 9,
					column: 15
				}
			},
			'6': {
				start: {
					line: 12,
					column: 1
				},
				end: {
					line: 16,
					column: 2
				}
			},
			'7': {
				start: {
					line: 13,
					column: 2
				},
				end: {
					line: 15,
					column: 3
				}
			},
			'8': {
				start: {
					line: 14,
					column: 3
				},
				end: {
					line: 14,
					column: 16
				}
			},
			'9': {
				start: {
					line: 18,
					column: 1
				},
				end: {
					line: 18,
					column: 13
				}
			},
			'10': {
				start: {
					line: 21,
					column: 0
				},
				end: {
					line: 24,
					column: 3
				}
			},
			'11': {
				start: {
					line: 21,
					column: 40
				},
				end: {
					line: 24,
					column: 1
				}
			},
			'12': {
				start: {
					line: 27,
					column: 0
				},
				end: {
					line: 33,
					column: 2
				}
			},
			'13': {
				start: {
					line: 28,
					column: 1
				},
				end: {
					line: 32,
					column: 3
				}
			},
			'14': {
				start: {
					line: 29,
					column: 2
				},
				end: {
					line: 31,
					column: 11
				}
			},
			'15': {
				start: {
					line: 30,
					column: 3
				},
				end: {
					line: 30,
					column: 13
				}
			},
			'16': {
				start: {
					line: 36,
					column: 0
				},
				end: {
					line: 44,
					column: 2
				}
			},
			'17': {
				start: {
					line: 37,
					column: 19
				},
				end: {
					line: 37,
					column: 74
				}
			},
			'18': {
				start: {
					line: 37,
					column: 49
				},
				end: {
					line: 37,
					column: 73
				}
			},
			'19': {
				start: {
					line: 38,
					column: 13
				},
				end: {
					line: 38,
					column: 57
				}
			},
			'20': {
				start: {
					line: 38,
					column: 41
				},
				end: {
					line: 38,
					column: 56
				}
			},
			'21': {
				start: {
					line: 40,
					column: 1
				},
				end: {
					line: 43,
					column: 2
				}
			},
			'22': {
				start: {
					line: 40,
					column: 30
				},
				end: {
					line: 40,
					column: 40
				}
			},
			'23': {
				start: {
					line: 41,
					column: 2
				},
				end: {
					line: 41,
					column: 40
				}
			},
			'24': {
				start: {
					line: 41,
					column: 28
				},
				end: {
					line: 41,
					column: 38
				}
			},
			'25': {
				start: {
					line: 42,
					column: 2
				},
				end: {
					line: 42,
					column: 55
				}
			},
			'26': {
				start: {
					line: 42,
					column: 38
				},
				end: {
					line: 42,
					column: 53
				}
			},
			'27': {
				start: {
					line: 46,
					column: 0
				},
				end: {
					line: 63,
					column: 2
				}
			},
			'28': {
				start: {
					line: 47,
					column: 1
				},
				end: {
					line: 49,
					column: 2
				}
			},
			'29': {
				start: {
					line: 48,
					column: 2
				},
				end: {
					line: 48,
					column: 13
				}
			},
			'30': {
				start: {
					line: 51,
					column: 13
				},
				end: {
					line: 51,
					column: 14
				}
			},
			'31': {
				start: {
					line: 52,
					column: 13
				},
				end: {
					line: 52,
					column: 14
				}
			},
			'32': {
				start: {
					line: 54,
					column: 1
				},
				end: {
					line: 61,
					column: 2
				}
			},
			'33': {
				start: {
					line: 55,
					column: 14
				},
				end: {
					line: 55,
					column: 45
				}
			},
			'34': {
				start: {
					line: 56,
					column: 2
				},
				end: {
					line: 60,
					column: 3
				}
			},
			'35': {
				start: {
					line: 57,
					column: 3
				},
				end: {
					line: 57,
					column: 15
				}
			},
			'36': {
				start: {
					line: 59,
					column: 3
				},
				end: {
					line: 59,
					column: 15
				}
			},
			'37': {
				start: {
					line: 62,
					column: 1
				},
				end: {
					line: 62,
					column: 14
				}
			},
			'38': {
				start: {
					line: 65,
					column: 0
				},
				end: {
					line: 74,
					column: 2
				}
			},
			'39': {
				start: {
					line: 66,
					column: 14
				},
				end: {
					line: 66,
					column: 32
				}
			},
			'40': {
				start: {
					line: 67,
					column: 14
				},
				end: {
					line: 67,
					column: 60
				}
			},
			'41': {
				start: {
					line: 68,
					column: 15
				},
				end: {
					line: 68,
					column: 64
				}
			},
			'42': {
				start: {
					line: 69,
					column: 13
				},
				end: {
					line: 69,
					column: 55
				}
			},
			'43': {
				start: {
					line: 70,
					column: 14
				},
				end: {
					line: 70,
					column: 57
				}
			},
			'44': {
				start: {
					line: 71,
					column: 16
				},
				end: {
					line: 71,
					column: 61
				}
			},
			'45': {
				start: {
					line: 72,
					column: 17
				},
				end: {
					line: 72,
					column: 62
				}
			},
			'46': {
				start: {
					line: 73,
					column: 1
				},
				end: {
					line: 73,
					column: 63
				}
			},
			'47': {
				start: {
					line: 76,
					column: 0
				},
				end: {
					line: 77,
					column: 58
				}
			},
			'48': {
				start: {
					line: 77,
					column: 1
				},
				end: {
					line: 77,
					column: 57
				}
			},
			'49': {
				start: {
					line: 80,
					column: 0
				},
				end: {
					line: 80,
					column: 95
				}
			},
			'50': {
				start: {
					line: 80,
					column: 29
				},
				end: {
					line: 80,
					column: 94
				}
			},
			'51': {
				start: {
					line: 83,
					column: 0
				},
				end: {
					line: 83,
					column: 80
				}
			},
			'52': {
				start: {
					line: 83,
					column: 29
				},
				end: {
					line: 83,
					column: 79
				}
			},
			'53': {
				start: {
					line: 86,
					column: 0
				},
				end: {
					line: 86,
					column: 124
				}
			},
			'54': {
				start: {
					line: 86,
					column: 32
				},
				end: {
					line: 86,
					column: 123
				}
			},
			'55': {
				start: {
					line: 89,
					column: 0
				},
				end: {
					line: 89,
					column: 31
				}
			},
			'56': {
				start: {
					line: 94,
					column: 0
				},
				end: {
					line: 105,
					column: 5
				}
			},
			'57': {
				start: {
					line: 95,
					column: 17
				},
				end: {
					line: 95,
					column: 18
				}
			},
			'58': {
				start: {
					line: 96,
					column: 13
				},
				end: {
					line: 96,
					column: 26
				}
			},
			'59': {
				start: {
					line: 98,
					column: 1
				},
				end: {
					line: 104,
					column: 3
				}
			},
			'60': {
				start: {
					line: 99,
					column: 2
				},
				end: {
					line: 101,
					column: 3
				}
			},
			'61': {
				start: {
					line: 100,
					column: 3
				},
				end: {
					line: 100,
					column: 32
				}
			},
			'62': {
				start: {
					line: 103,
					column: 2
				},
				end: {
					line: 103,
					column: 25
				}
			},
			'63': {
				start: {
					line: 108,
					column: 0
				},
				end: {
					line: 108,
					column: 30
				}
			},
			'64': {
				start: {
					line: 110,
					column: 0
				},
				end: {
					line: 128,
					column: 2
				}
			},
			'65': {
				start: {
					line: 111,
					column: 1
				},
				end: {
					line: 127,
					column: 3
				}
			},
			'66': {
				start: {
					line: 112,
					column: 24
				},
				end: {
					line: 112,
					column: 29
				}
			},
			'67': {
				start: {
					line: 114,
					column: 2
				},
				end: {
					line: 116,
					column: 3
				}
			},
			'68': {
				start: {
					line: 115,
					column: 3
				},
				end: {
					line: 115,
					column: 39
				}
			},
			'69': {
				start: {
					line: 118,
					column: 2
				},
				end: {
					line: 126,
					column: 5
				}
			},
			'70': {
				start: {
					line: 119,
					column: 24
				},
				end: {
					line: 119,
					column: 33
				}
			},
			'71': {
				start: {
					line: 121,
					column: 3
				},
				end: {
					line: 123,
					column: 4
				}
			},
			'72': {
				start: {
					line: 122,
					column: 4
				},
				end: {
					line: 122,
					column: 38
				}
			},
			'73': {
				start: {
					line: 125,
					column: 3
				},
				end: {
					line: 125,
					column: 25
				}
			},
			'74': {
				start: {
					line: 130,
					column: 0
				},
				end: {
					line: 132,
					column: 2
				}
			},
			'75': {
				start: {
					line: 131,
					column: 1
				},
				end: {
					line: 131,
					column: 59
				}
			},
			'76': {
				start: {
					line: 131,
					column: 37
				},
				end: {
					line: 131,
					column: 55
				}
			},
			'77': {
				start: {
					line: 134,
					column: 0
				},
				end: {
					line: 142,
					column: 2
				}
			},
			'78': {
				start: {
					line: 135,
					column: 15
				},
				end: {
					line: 135,
					column: 33
				}
			},
			'79': {
				start: {
					line: 137,
					column: 1
				},
				end: {
					line: 139,
					column: 2
				}
			},
			'80': {
				start: {
					line: 138,
					column: 2
				},
				end: {
					line: 138,
					column: 47
				}
			},
			'81': {
				start: {
					line: 141,
					column: 1
				},
				end: {
					line: 141,
					column: 14
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 4,
						column: 29
					},
					end: {
						line: 4,
						column: 30
					}
				},
				loc: {
					start: {
						line: 4,
						column: 49
					},
					end: {
						line: 19,
						column: 1
					}
				},
				line: 4
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 21,
						column: 23
					},
					end: {
						line: 21,
						column: 24
					}
				},
				loc: {
					start: {
						line: 21,
						column: 40
					},
					end: {
						line: 24,
						column: 1
					}
				},
				line: 21
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 27,
						column: 22
					},
					end: {
						line: 27,
						column: 23
					}
				},
				loc: {
					start: {
						line: 28,
						column: 1
					},
					end: {
						line: 32,
						column: 3
					}
				},
				line: 28
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 28,
						column: 13
					},
					end: {
						line: 28,
						column: 14
					}
				},
				loc: {
					start: {
						line: 28,
						column: 26
					},
					end: {
						line: 32,
						column: 2
					}
				},
				line: 28
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 29,
						column: 13
					},
					end: {
						line: 29,
						column: 14
					}
				},
				loc: {
					start: {
						line: 29,
						column: 19
					},
					end: {
						line: 31,
						column: 3
					}
				},
				line: 29
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 36,
						column: 21
					},
					end: {
						line: 36,
						column: 22
					}
				},
				loc: {
					start: {
						line: 36,
						column: 43
					},
					end: {
						line: 44,
						column: 1
					}
				},
				line: 36
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 37,
						column: 38
					},
					end: {
						line: 37,
						column: 39
					}
				},
				loc: {
					start: {
						line: 37,
						column: 49
					},
					end: {
						line: 37,
						column: 73
					}
				},
				line: 37
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 38,
						column: 27
					},
					end: {
						line: 38,
						column: 28
					}
				},
				loc: {
					start: {
						line: 38,
						column: 41
					},
					end: {
						line: 38,
						column: 56
					}
				},
				line: 38
			},
			'8': {
				name: '(anonymous_8)',
				decl: {
					start: {
						line: 40,
						column: 20
					},
					end: {
						line: 40,
						column: 21
					}
				},
				loc: {
					start: {
						line: 40,
						column: 30
					},
					end: {
						line: 40,
						column: 40
					}
				},
				line: 40
			},
			'9': {
				name: '(anonymous_9)',
				decl: {
					start: {
						line: 41,
						column: 18
					},
					end: {
						line: 41,
						column: 19
					}
				},
				loc: {
					start: {
						line: 41,
						column: 28
					},
					end: {
						line: 41,
						column: 38
					}
				},
				line: 41
			},
			'10': {
				name: '(anonymous_10)',
				decl: {
					start: {
						line: 42,
						column: 24
					},
					end: {
						line: 42,
						column: 25
					}
				},
				loc: {
					start: {
						line: 42,
						column: 38
					},
					end: {
						line: 42,
						column: 53
					}
				},
				line: 42
			},
			'11': {
				name: '(anonymous_11)',
				decl: {
					start: {
						line: 46,
						column: 21
					},
					end: {
						line: 46,
						column: 22
					}
				},
				loc: {
					start: {
						line: 46,
						column: 31
					},
					end: {
						line: 63,
						column: 1
					}
				},
				line: 46
			},
			'12': {
				name: '(anonymous_12)',
				decl: {
					start: {
						line: 65,
						column: 43
					},
					end: {
						line: 65,
						column: 44
					}
				},
				loc: {
					start: {
						line: 65,
						column: 57
					},
					end: {
						line: 74,
						column: 1
					}
				},
				line: 65
			},
			'13': {
				name: '(anonymous_13)',
				decl: {
					start: {
						line: 76,
						column: 34
					},
					end: {
						line: 76,
						column: 35
					}
				},
				loc: {
					start: {
						line: 77,
						column: 1
					},
					end: {
						line: 77,
						column: 57
					}
				},
				line: 77
			},
			'14': {
				name: '(anonymous_14)',
				decl: {
					start: {
						line: 80,
						column: 23
					},
					end: {
						line: 80,
						column: 24
					}
				},
				loc: {
					start: {
						line: 80,
						column: 29
					},
					end: {
						line: 80,
						column: 94
					}
				},
				line: 80
			},
			'15': {
				name: '(anonymous_15)',
				decl: {
					start: {
						line: 83,
						column: 23
					},
					end: {
						line: 83,
						column: 24
					}
				},
				loc: {
					start: {
						line: 83,
						column: 29
					},
					end: {
						line: 83,
						column: 79
					}
				},
				line: 83
			},
			'16': {
				name: '(anonymous_16)',
				decl: {
					start: {
						line: 86,
						column: 26
					},
					end: {
						line: 86,
						column: 27
					}
				},
				loc: {
					start: {
						line: 86,
						column: 32
					},
					end: {
						line: 86,
						column: 123
					}
				},
				line: 86
			},
			'17': {
				name: '(anonymous_17)',
				decl: {
					start: {
						line: 89,
						column: 22
					},
					end: {
						line: 89,
						column: 23
					}
				},
				loc: {
					start: {
						line: 89,
						column: 28
					},
					end: {
						line: 89,
						column: 30
					}
				},
				line: 89
			},
			'18': {
				name: '(anonymous_18)',
				decl: {
					start: {
						line: 94,
						column: 21
					},
					end: {
						line: 94,
						column: 22
					}
				},
				loc: {
					start: {
						line: 94,
						column: 27
					},
					end: {
						line: 105,
						column: 1
					}
				},
				line: 94
			},
			'19': {
				name: '(anonymous_19)',
				decl: {
					start: {
						line: 98,
						column: 8
					},
					end: {
						line: 98,
						column: 9
					}
				},
				loc: {
					start: {
						line: 98,
						column: 20
					},
					end: {
						line: 104,
						column: 2
					}
				},
				line: 98
			},
			'20': {
				name: '(anonymous_20)',
				decl: {
					start: {
						line: 108,
						column: 21
					},
					end: {
						line: 108,
						column: 22
					}
				},
				loc: {
					start: {
						line: 108,
						column: 27
					},
					end: {
						line: 108,
						column: 29
					}
				},
				line: 108
			},
			'21': {
				name: '(anonymous_21)',
				decl: {
					start: {
						line: 110,
						column: 37
					},
					end: {
						line: 110,
						column: 38
					}
				},
				loc: {
					start: {
						line: 111,
						column: 1
					},
					end: {
						line: 127,
						column: 3
					}
				},
				line: 111
			},
			'22': {
				name: '(anonymous_22)',
				decl: {
					start: {
						line: 111,
						column: 12
					},
					end: {
						line: 111,
						column: 13
					}
				},
				loc: {
					start: {
						line: 111,
						column: 23
					},
					end: {
						line: 127,
						column: 2
					}
				},
				line: 111
			},
			'23': {
				name: '(anonymous_23)',
				decl: {
					start: {
						line: 118,
						column: 29
					},
					end: {
						line: 118,
						column: 30
					}
				},
				loc: {
					start: {
						line: 118,
						column: 44
					},
					end: {
						line: 126,
						column: 3
					}
				},
				line: 118
			},
			'24': {
				name: '(anonymous_24)',
				decl: {
					start: {
						line: 130,
						column: 21
					},
					end: {
						line: 130,
						column: 22
					}
				},
				loc: {
					start: {
						line: 131,
						column: 1
					},
					end: {
						line: 131,
						column: 59
					}
				},
				line: 131
			},
			'25': {
				name: '(anonymous_25)',
				decl: {
					start: {
						line: 131,
						column: 14
					},
					end: {
						line: 131,
						column: 15
					}
				},
				loc: {
					start: {
						line: 131,
						column: 37
					},
					end: {
						line: 131,
						column: 55
					}
				},
				line: 131
			},
			'26': {
				name: '(anonymous_26)',
				decl: {
					start: {
						line: 134,
						column: 27
					},
					end: {
						line: 134,
						column: 28
					}
				},
				loc: {
					start: {
						line: 134,
						column: 47
					},
					end: {
						line: 142,
						column: 1
					}
				},
				line: 134
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 8,
						column: 1
					},
					end: {
						line: 10,
						column: 2
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 8,
						column: 1
					},
					end: {
						line: 10,
						column: 2
					}
				}, {
					start: {
						line: 8,
						column: 1
					},
					end: {
						line: 10,
						column: 2
					}
				}],
				line: 8
			},
			'1': {
				loc: {
					start: {
						line: 13,
						column: 2
					},
					end: {
						line: 15,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 13,
						column: 2
					},
					end: {
						line: 15,
						column: 3
					}
				}, {
					start: {
						line: 13,
						column: 2
					},
					end: {
						line: 15,
						column: 3
					}
				}],
				line: 13
			},
			'2': {
				loc: {
					start: {
						line: 47,
						column: 1
					},
					end: {
						line: 49,
						column: 2
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 47,
						column: 1
					},
					end: {
						line: 49,
						column: 2
					}
				}, {
					start: {
						line: 47,
						column: 1
					},
					end: {
						line: 49,
						column: 2
					}
				}],
				line: 47
			},
			'3': {
				loc: {
					start: {
						line: 47,
						column: 5
					},
					end: {
						line: 47,
						column: 70
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 47,
						column: 5
					},
					end: {
						line: 47,
						column: 11
					}
				}, {
					start: {
						line: 47,
						column: 15
					},
					end: {
						line: 47,
						column: 22
					}
				}, {
					start: {
						line: 47,
						column: 26
					},
					end: {
						line: 47,
						column: 32
					}
				}, {
					start: {
						line: 47,
						column: 37
					},
					end: {
						line: 47,
						column: 51
					}
				}, {
					start: {
						line: 47,
						column: 55
					},
					end: {
						line: 47,
						column: 69
					}
				}],
				line: 47
			},
			'4': {
				loc: {
					start: {
						line: 56,
						column: 2
					},
					end: {
						line: 60,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 56,
						column: 2
					},
					end: {
						line: 60,
						column: 3
					}
				}, {
					start: {
						line: 56,
						column: 2
					},
					end: {
						line: 60,
						column: 3
					}
				}],
				line: 56
			},
			'5': {
				loc: {
					start: {
						line: 77,
						column: 1
					},
					end: {
						line: 77,
						column: 57
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 77,
						column: 17
					},
					end: {
						line: 77,
						column: 36
					}
				}, {
					start: {
						line: 77,
						column: 39
					},
					end: {
						line: 77,
						column: 57
					}
				}],
				line: 77
			},
			'6': {
				loc: {
					start: {
						line: 80,
						column: 29
					},
					end: {
						line: 80,
						column: 94
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 80,
						column: 29
					},
					end: {
						line: 80,
						column: 74
					}
				}, {
					start: {
						line: 80,
						column: 78
					},
					end: {
						line: 80,
						column: 94
					}
				}],
				line: 80
			},
			'7': {
				loc: {
					start: {
						line: 99,
						column: 2
					},
					end: {
						line: 101,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 99,
						column: 2
					},
					end: {
						line: 101,
						column: 3
					}
				}, {
					start: {
						line: 99,
						column: 2
					},
					end: {
						line: 101,
						column: 3
					}
				}],
				line: 99
			},
			'8': {
				loc: {
					start: {
						line: 114,
						column: 2
					},
					end: {
						line: 116,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 114,
						column: 2
					},
					end: {
						line: 116,
						column: 3
					}
				}, {
					start: {
						line: 114,
						column: 2
					},
					end: {
						line: 116,
						column: 3
					}
				}],
				line: 114
			},
			'9': {
				loc: {
					start: {
						line: 121,
						column: 3
					},
					end: {
						line: 123,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 121,
						column: 3
					},
					end: {
						line: 123,
						column: 4
					}
				}, {
					start: {
						line: 121,
						column: 3
					},
					end: {
						line: 123,
						column: 4
					}
				}],
				line: 121
			},
			'10': {
				loc: {
					start: {
						line: 137,
						column: 1
					},
					end: {
						line: 139,
						column: 2
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 137,
						column: 1
					},
					end: {
						line: 139,
						column: 2
					}
				}, {
					start: {
						line: 137,
						column: 1
					},
					end: {
						line: 139,
						column: 2
					}
				}],
				line: 137
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0,
			'33': 0,
			'34': 0,
			'35': 0,
			'36': 0,
			'37': 0,
			'38': 0,
			'39': 0,
			'40': 0,
			'41': 0,
			'42': 0,
			'43': 0,
			'44': 0,
			'45': 0,
			'46': 0,
			'47': 0,
			'48': 0,
			'49': 0,
			'50': 0,
			'51': 0,
			'52': 0,
			'53': 0,
			'54': 0,
			'55': 0,
			'56': 0,
			'57': 0,
			'58': 0,
			'59': 0,
			'60': 0,
			'61': 0,
			'62': 0,
			'63': 0,
			'64': 0,
			'65': 0,
			'66': 0,
			'67': 0,
			'68': 0,
			'69': 0,
			'70': 0,
			'71': 0,
			'72': 0,
			'73': 0,
			'74': 0,
			'75': 0,
			'76': 0,
			'77': 0,
			'78': 0,
			'79': 0,
			'80': 0,
			'81': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0, 0, 0, 0],
			'4': [0, 0],
			'5': [0, 0],
			'6': [0, 0],
			'7': [0, 0],
			'8': [0, 0],
			'9': [0, 0],
			'10': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_11optkyd8f.s[0]++;
__webpack_require__(40);

// Check the equality of two arrays *as sets*
cov_11optkyd8f.s[1]++;
module.exports.arrayEquals = (arrayA, arrayB) => {
	cov_11optkyd8f.f[0]++;

	const setA = (cov_11optkyd8f.s[2]++, new Set(arrayA));
	const setB = (cov_11optkyd8f.s[3]++, new Set(arrayB));

	cov_11optkyd8f.s[4]++;
	if (setA.size !== setB.size) {
		cov_11optkyd8f.b[0][0]++;
		cov_11optkyd8f.s[5]++;

		return false;
	} else {
		cov_11optkyd8f.b[0][1]++;
	}

	cov_11optkyd8f.s[6]++;
	for (const item of setA) {
		cov_11optkyd8f.s[7]++;

		if (!setB.has(item)) {
			cov_11optkyd8f.b[1][0]++;
			cov_11optkyd8f.s[8]++;

			return false;
		} else {
			cov_11optkyd8f.b[1][1]++;
		}
	}

	cov_11optkyd8f.s[9]++;
	return true;
};

cov_11optkyd8f.s[10]++;
module.exports.toCSS = coordinate => {
	cov_11optkyd8f.f[1]++;
	cov_11optkyd8f.s[11]++;
	return {
		left: `${coordinate.x}px`,
		top: `${coordinate.y}px`
	};
};

// Promisified setTimeout
cov_11optkyd8f.s[12]++;
module.exports.wait = time => {
	cov_11optkyd8f.f[2]++;
	cov_11optkyd8f.s[13]++;
	return new Promise(resolve => {
		cov_11optkyd8f.f[3]++;
		cov_11optkyd8f.s[14]++;

		setTimeout(() => {
			cov_11optkyd8f.f[4]++;
			cov_11optkyd8f.s[15]++;

			resolve();
		}, time);
	});
};

// https://gist.github.com/bellbind/353819de43bf694fba3b
cov_11optkyd8f.s[16]++;
module.exports.zip = function* (...values) {
	cov_11optkyd8f.f[5]++;

	const iterators = (cov_11optkyd8f.s[17]++, Array.from(values, value => {
		cov_11optkyd8f.f[6]++;
		cov_11optkyd8f.s[18]++;
		return value[Symbol.iterator]();
	}));
	let nexts = (cov_11optkyd8f.s[19]++, iterators.map(iterator => {
		cov_11optkyd8f.f[7]++;
		cov_11optkyd8f.s[20]++;
		return iterator.next();
	}));

	cov_11optkyd8f.s[21]++;
	while (nexts.every(next => {
		cov_11optkyd8f.f[8]++;
		cov_11optkyd8f.s[22]++;
		return !next.done;
	})) {
		cov_11optkyd8f.s[23]++;

		yield nexts.map(next => {
			cov_11optkyd8f.f[9]++;
			cov_11optkyd8f.s[24]++;
			return next.value;
		});
		cov_11optkyd8f.s[25]++;
		nexts = iterators.map(iterator => {
			cov_11optkyd8f.f[10]++;
			cov_11optkyd8f.s[26]++;
			return iterator.next();
		});
	}
};

cov_11optkyd8f.s[27]++;
module.exports.log = (a, b) => {
	cov_11optkyd8f.f[11]++;
	cov_11optkyd8f.s[28]++;

	if ((cov_11optkyd8f.b[3][0]++, a <= 0) || (cov_11optkyd8f.b[3][1]++, a === 1) || (cov_11optkyd8f.b[3][2]++, b <= 0) || (cov_11optkyd8f.b[3][3]++, a === Infinity) && (cov_11optkyd8f.b[3][4]++, b === Infinity)) {
		cov_11optkyd8f.b[2][0]++;
		cov_11optkyd8f.s[29]++;

		return NaN;
	} else {
		cov_11optkyd8f.b[2][1]++;
	}

	let lower = (cov_11optkyd8f.s[30]++, 0);
	let upper = (cov_11optkyd8f.s[31]++, b);

	cov_11optkyd8f.s[32]++;
	while (upper - lower > 1) {
		const mid = (cov_11optkyd8f.s[33]++, Math.floor((lower + upper) / 2));
		cov_11optkyd8f.s[34]++;
		if (Math.pow(a, mid) <= b) {
			cov_11optkyd8f.b[4][0]++;
			cov_11optkyd8f.s[35]++;

			lower = mid;
		} else {
			cov_11optkyd8f.b[4][1]++;
			cov_11optkyd8f.s[36]++;

			upper = mid;
		}
	}
	cov_11optkyd8f.s[37]++;
	return lower;
};

cov_11optkyd8f.s[38]++;
module.exports.translateDateFromUnixTime = unixtime => {
	cov_11optkyd8f.f[12]++;

	const date = (cov_11optkyd8f.s[39]++, new Date(unixtime));
	const year = (cov_11optkyd8f.s[40]++, date.getFullYear().toString().padStart(4, '0'));
	const month = (cov_11optkyd8f.s[41]++, (date.getMonth() + 1).toString().padStart(2, '0'));
	const day = (cov_11optkyd8f.s[42]++, date.getDate().toString().padStart(2, '0'));
	const hour = (cov_11optkyd8f.s[43]++, date.getHours().toString().padStart(2, '0'));
	const minute = (cov_11optkyd8f.s[44]++, date.getMinutes().toString().padStart(2, '0'));
	const seconds = (cov_11optkyd8f.s[45]++, date.getSeconds().toString().padStart(2, '0'));
	cov_11optkyd8f.s[46]++;
	return `${year}-${month}-${day} ${hour}:${minute}:${seconds}`;
};

cov_11optkyd8f.s[47]++;
module.exports.floorTowardsZero = decimal => {
	cov_11optkyd8f.f[13]++;
	cov_11optkyd8f.s[48]++;
	return 0 < decimal ? (cov_11optkyd8f.b[5][0]++, Math.floor(decimal)) : (cov_11optkyd8f.b[5][1]++, Math.ceil(decimal));
};

// http://stackoverflow.com/a/9039885
cov_11optkyd8f.s[49]++;
module.exports.isiOS = () => {
	cov_11optkyd8f.f[14]++;
	cov_11optkyd8f.s[50]++;
	return (cov_11optkyd8f.b[6][0]++, navigator.userAgent.match(/iPad|iPhone|iPod/)) && (cov_11optkyd8f.b[6][1]++, !window.MSStream);
};

// http://stackoverflow.com/a/11752084
cov_11optkyd8f.s[51]++;
module.exports.isMac = () => {
	cov_11optkyd8f.f[15]++;
	cov_11optkyd8f.s[52]++;
	return navigator.platform.toLowerCase().startsWith('mac');
};

// https://stackoverflow.com/a/3540295
cov_11optkyd8f.s[53]++;
module.exports.isMobile = () => {
	cov_11optkyd8f.f[16]++;
	cov_11optkyd8f.s[54]++;
	return navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i);
};

// eslint-disable-next-line no-empty-function
cov_11optkyd8f.s[55]++;
module.exports.noop = () => {
	cov_11optkyd8f.f[17]++;
};

// Assign unique ids for native objects
// Works like id() of python
// http://stackoverflow.com/a/43963612
cov_11optkyd8f.s[56]++;
module.exports.id = (() => {
	cov_11optkyd8f.f[18]++;

	let currentId = (cov_11optkyd8f.s[57]++, 0);
	const map = (cov_11optkyd8f.s[58]++, new WeakMap());

	cov_11optkyd8f.s[59]++;
	return object => {
		cov_11optkyd8f.f[19]++;
		cov_11optkyd8f.s[60]++;

		if (!map.has(object)) {
			cov_11optkyd8f.b[7][0]++;
			cov_11optkyd8f.s[61]++;

			map.set(object, ++currentId);
		} else {
			cov_11optkyd8f.b[7][1]++;
		}

		cov_11optkyd8f.s[62]++;
		return map.get(object);
	};
})();

// eslint-disable-next-line no-empty-function
cov_11optkyd8f.s[63]++;
module.exports.nop = () => {
	cov_11optkyd8f.f[20]++;
};

cov_11optkyd8f.s[64]++;
module.exports.normalizeStageInput = inputs => {
	cov_11optkyd8f.f[21]++;
	cov_11optkyd8f.s[65]++;
	return inputs.map(input => {
		cov_11optkyd8f.f[22]++;

		let inputDataArrays = (cov_11optkyd8f.s[66]++, input);

		cov_11optkyd8f.s[67]++;
		if (!Array.isArray(inputDataArrays)) {
			cov_11optkyd8f.b[8][0]++;
			cov_11optkyd8f.s[68]++;

			inputDataArrays = [inputDataArrays];
		} else {
			cov_11optkyd8f.b[8][1]++;
		}

		cov_11optkyd8f.s[69]++;
		return inputDataArrays.map(inputData => {
			cov_11optkyd8f.f[23]++;

			let inputDataArray = (cov_11optkyd8f.s[70]++, inputData);

			cov_11optkyd8f.s[71]++;
			if (!Array.isArray(inputDataArray)) {
				cov_11optkyd8f.b[9][0]++;
				cov_11optkyd8f.s[72]++;

				inputDataArray = [inputDataArray];
			} else {
				cov_11optkyd8f.b[9][1]++;
			}

			cov_11optkyd8f.s[73]++;
			return inputDataArray;
		});
	});
};

cov_11optkyd8f.s[74]++;
module.exports.sum = array => {
	cov_11optkyd8f.f[24]++;
	cov_11optkyd8f.s[75]++;
	return array.reduce((previous, current) => {
		cov_11optkyd8f.f[25]++;
		cov_11optkyd8f.s[76]++;
		return previous + current;
	}, 0);
};

cov_11optkyd8f.s[77]++;
module.exports.trimAfter = (string, length) => {
	cov_11optkyd8f.f[26]++;

	const chars = (cov_11optkyd8f.s[78]++, Array.from(string));

	cov_11optkyd8f.s[79]++;
	if (chars.length > length) {
		cov_11optkyd8f.b[10][0]++;
		cov_11optkyd8f.s[80]++;

		return `${chars.slice(0, length).join('')}…`;
	} else {
		cov_11optkyd8f.b[10][1]++;
	}

	cov_11optkyd8f.s[81]++;
	return chars;
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("chai");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1yjylxz6z1 = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/lib/board.js',
	    hash = '369de0846b6c824513f553e6bfeb57d7bc8b7a4c',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/lib/board.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 14
				},
				end: {
					line: 1,
					column: 32
				}
			},
			'1': {
				start: {
					line: 2,
					column: 13
				},
				end: {
					line: 2,
					column: 30
				}
			},
			'2': {
				start: {
					line: 3,
					column: 21
				},
				end: {
					line: 3,
					column: 47
				}
			},
			'3': {
				start: {
					line: 4,
					column: 14
				},
				end: {
					line: 4,
					column: 31
				}
			},
			'4': {
				start: {
					line: 5,
					column: 21
				},
				end: {
					line: 5,
					column: 38
				}
			},
			'5': {
				start: {
					line: 6,
					column: 19
				},
				end: {
					line: 6,
					column: 40
				}
			},
			'6': {
				start: {
					line: 10,
					column: 2
				},
				end: {
					line: 10,
					column: 10
				}
			},
			'7': {
				start: {
					line: 12,
					column: 2
				},
				end: {
					line: 12,
					column: 30
				}
			},
			'8': {
				start: {
					line: 13,
					column: 2
				},
				end: {
					line: 13,
					column: 28
				}
			},
			'9': {
				start: {
					line: 14,
					column: 2
				},
				end: {
					line: 14,
					column: 38
				}
			},
			'10': {
				start: {
					line: 16,
					column: 2
				},
				end: {
					line: 16,
					column: 23
				}
			},
			'11': {
				start: {
					line: 17,
					column: 2
				},
				end: {
					line: 17,
					column: 17
				}
			},
			'12': {
				start: {
					line: 18,
					column: 2
				},
				end: {
					line: 18,
					column: 26
				}
			},
			'13': {
				start: {
					line: 20,
					column: 2
				},
				end: {
					line: 20,
					column: 19
				}
			},
			'14': {
				start: {
					line: 21,
					column: 2
				},
				end: {
					line: 28,
					column: 3
				}
			},
			'15': {
				start: {
					line: 22,
					column: 15
				},
				end: {
					line: 22,
					column: 17
				}
			},
			'16': {
				start: {
					line: 23,
					column: 3
				},
				end: {
					line: 23,
					column: 25
				}
			},
			'17': {
				start: {
					line: 25,
					column: 3
				},
				end: {
					line: 27,
					column: 4
				}
			},
			'18': {
				start: {
					line: 26,
					column: 4
				},
				end: {
					line: 26,
					column: 19
				}
			},
			'19': {
				start: {
					line: 30,
					column: 2
				},
				end: {
					line: 34,
					column: 3
				}
			},
			'20': {
				start: {
					line: 31,
					column: 3
				},
				end: {
					line: 33,
					column: 4
				}
			},
			'21': {
				start: {
					line: 32,
					column: 4
				},
				end: {
					line: 32,
					column: 43
				}
			},
			'22': {
				start: {
					line: 36,
					column: 2
				},
				end: {
					line: 40,
					column: 3
				}
			},
			'23': {
				start: {
					line: 37,
					column: 3
				},
				end: {
					line: 37,
					column: 38
				}
			},
			'24': {
				start: {
					line: 39,
					column: 3
				},
				end: {
					line: 39,
					column: 36
				}
			},
			'25': {
				start: {
					line: 41,
					column: 2
				},
				end: {
					line: 41,
					column: 23
				}
			},
			'26': {
				start: {
					line: 42,
					column: 2
				},
				end: {
					line: 42,
					column: 37
				}
			},
			'27': {
				start: {
					line: 43,
					column: 2
				},
				end: {
					line: 43,
					column: 40
				}
			},
			'28': {
				start: {
					line: 47,
					column: 2
				},
				end: {
					line: 47,
					column: 71
				}
			},
			'29': {
				start: {
					line: 47,
					column: 37
				},
				end: {
					line: 47,
					column: 69
				}
			},
			'30': {
				start: {
					line: 51,
					column: 2
				},
				end: {
					line: 51,
					column: 59
				}
			},
			'31': {
				start: {
					line: 55,
					column: 14
				},
				end: {
					line: 55,
					column: 15
				}
			},
			'32': {
				start: {
					line: 57,
					column: 2
				},
				end: {
					line: 61,
					column: 5
				}
			},
			'33': {
				start: {
					line: 58,
					column: 3
				},
				end: {
					line: 60,
					column: 4
				}
			},
			'34': {
				start: {
					line: 59,
					column: 4
				},
				end: {
					line: 59,
					column: 12
				}
			},
			'35': {
				start: {
					line: 63,
					column: 2
				},
				end: {
					line: 63,
					column: 15
				}
			},
			'36': {
				start: {
					line: 67,
					column: 14
				},
				end: {
					line: 67,
					column: 15
				}
			},
			'37': {
				start: {
					line: 69,
					column: 2
				},
				end: {
					line: 73,
					column: 5
				}
			},
			'38': {
				start: {
					line: 70,
					column: 3
				},
				end: {
					line: 72,
					column: 4
				}
			},
			'39': {
				start: {
					line: 71,
					column: 4
				},
				end: {
					line: 71,
					column: 33
				}
			},
			'40': {
				start: {
					line: 75,
					column: 2
				},
				end: {
					line: 75,
					column: 15
				}
			},
			'41': {
				start: {
					line: 79,
					column: 14
				},
				end: {
					line: 79,
					column: 15
				}
			},
			'42': {
				start: {
					line: 81,
					column: 2
				},
				end: {
					line: 88,
					column: 5
				}
			},
			'43': {
				start: {
					line: 82,
					column: 3
				},
				end: {
					line: 84,
					column: 4
				}
			},
			'44': {
				start: {
					line: 83,
					column: 4
				},
				end: {
					line: 83,
					column: 26
				}
			},
			'45': {
				start: {
					line: 85,
					column: 3
				},
				end: {
					line: 87,
					column: 4
				}
			},
			'46': {
				start: {
					line: 86,
					column: 4
				},
				end: {
					line: 86,
					column: 26
				}
			},
			'47': {
				start: {
					line: 90,
					column: 2
				},
				end: {
					line: 90,
					column: 15
				}
			},
			'48': {
				start: {
					line: 94,
					column: 12
				},
				end: {
					line: 94,
					column: 17
				}
			},
			'49': {
				start: {
					line: 95,
					column: 2
				},
				end: {
					line: 111,
					column: 5
				}
			},
			'50': {
				start: {
					line: 96,
					column: 3
				},
				end: {
					line: 98,
					column: 4
				}
			},
			'51': {
				start: {
					line: 97,
					column: 4
				},
				end: {
					line: 97,
					column: 11
				}
			},
			'52': {
				start: {
					line: 99,
					column: 3
				},
				end: {
					line: 104,
					column: 4
				}
			},
			'53': {
				start: {
					line: 100,
					column: 4
				},
				end: {
					line: 103,
					column: 5
				}
			},
			'54': {
				start: {
					line: 101,
					column: 5
				},
				end: {
					line: 101,
					column: 16
				}
			},
			'55': {
				start: {
					line: 102,
					column: 5
				},
				end: {
					line: 102,
					column: 12
				}
			},
			'56': {
				start: {
					line: 105,
					column: 3
				},
				end: {
					line: 110,
					column: 4
				}
			},
			'57': {
				start: {
					line: 106,
					column: 4
				},
				end: {
					line: 109,
					column: 5
				}
			},
			'58': {
				start: {
					line: 107,
					column: 5
				},
				end: {
					line: 107,
					column: 16
				}
			},
			'59': {
				start: {
					line: 108,
					column: 5
				},
				end: {
					line: 108,
					column: 12
				}
			},
			'60': {
				start: {
					line: 113,
					column: 2
				},
				end: {
					line: 113,
					column: 13
				}
			},
			'61': {
				start: {
					line: 118,
					column: 17
				},
				end: {
					line: 118,
					column: 19
				}
			},
			'62': {
				start: {
					line: 120,
					column: 2
				},
				end: {
					line: 129,
					column: 5
				}
			},
			'63': {
				start: {
					line: 121,
					column: 3
				},
				end: {
					line: 128,
					column: 4
				}
			},
			'64': {
				start: {
					line: 122,
					column: 4
				},
				end: {
					line: 127,
					column: 7
				}
			},
			'65': {
				start: {
					line: 131,
					column: 2
				},
				end: {
					line: 131,
					column: 16
				}
			},
			'66': {
				start: {
					line: 135,
					column: 2
				},
				end: {
					line: 135,
					column: 27
				}
			},
			'67': {
				start: {
					line: 139,
					column: 2
				},
				end: {
					line: 139,
					column: 21
				}
			},
			'68': {
				start: {
					line: 143,
					column: 2
				},
				end: {
					line: 148,
					column: 3
				}
			},
			'69': {
				start: {
					line: 144,
					column: 3
				},
				end: {
					line: 147,
					column: 4
				}
			},
			'70': {
				start: {
					line: 145,
					column: 18
				},
				end: {
					line: 145,
					column: 37
				}
			},
			'71': {
				start: {
					line: 146,
					column: 4
				},
				end: {
					line: 146,
					column: 37
				}
			},
			'72': {
				start: {
					line: 153,
					column: 17
				},
				end: {
					line: 153,
					column: 19
				}
			},
			'73': {
				start: {
					line: 155,
					column: 2
				},
				end: {
					line: 164,
					column: 5
				}
			},
			'74': {
				start: {
					line: 156,
					column: 3
				},
				end: {
					line: 163,
					column: 4
				}
			},
			'75': {
				start: {
					line: 157,
					column: 4
				},
				end: {
					line: 162,
					column: 7
				}
			},
			'76': {
				start: {
					line: 166,
					column: 15
				},
				end: {
					line: 166,
					column: 37
				}
			},
			'77': {
				start: {
					line: 167,
					column: 17
				},
				end: {
					line: 167,
					column: 33
				}
			},
			'78': {
				start: {
					line: 168,
					column: 2
				},
				end: {
					line: 168,
					column: 16
				}
			},
			'79': {
				start: {
					line: 172,
					column: 17
				},
				end: {
					line: 172,
					column: 54
				}
			},
			'80': {
				start: {
					line: 173,
					column: 2
				},
				end: {
					line: 173,
					column: 15
				}
			},
			'81': {
				start: {
					line: 174,
					column: 2
				},
				end: {
					line: 174,
					column: 15
				}
			},
			'82': {
				start: {
					line: 175,
					column: 2
				},
				end: {
					line: 175,
					column: 25
				}
			},
			'83': {
				start: {
					line: 176,
					column: 2
				},
				end: {
					line: 176,
					column: 21
				}
			},
			'84': {
				start: {
					line: 178,
					column: 16
				},
				end: {
					line: 178,
					column: 39
				}
			},
			'85': {
				start: {
					line: 179,
					column: 2
				},
				end: {
					line: 181,
					column: 5
				}
			},
			'86': {
				start: {
					line: 180,
					column: 3
				},
				end: {
					line: 180,
					column: 35
				}
			},
			'87': {
				start: {
					line: 182,
					column: 2
				},
				end: {
					line: 184,
					column: 5
				}
			},
			'88': {
				start: {
					line: 183,
					column: 3
				},
				end: {
					line: 183,
					column: 39
				}
			},
			'89': {
				start: {
					line: 185,
					column: 2
				},
				end: {
					line: 185,
					column: 28
				}
			},
			'90': {
				start: {
					line: 191,
					column: 2
				},
				end: {
					line: 191,
					column: 25
				}
			},
			'91': {
				start: {
					line: 193,
					column: 18
				},
				end: {
					line: 215,
					column: 3
				}
			},
			'92': {
				start: {
					line: 194,
					column: 3
				},
				end: {
					line: 214,
					column: 4
				}
			},
			'93': {
				start: {
					line: 195,
					column: 4
				},
				end: {
					line: 195,
					column: 16
				}
			},
			'94': {
				start: {
					line: 197,
					column: 4
				},
				end: {
					line: 199,
					column: 5
				}
			},
			'95': {
				start: {
					line: 198,
					column: 5
				},
				end: {
					line: 198,
					column: 17
				}
			},
			'96': {
				start: {
					line: 201,
					column: 4
				},
				end: {
					line: 201,
					column: 16
				}
			},
			'97': {
				start: {
					line: 203,
					column: 4
				},
				end: {
					line: 205,
					column: 5
				}
			},
			'98': {
				start: {
					line: 204,
					column: 5
				},
				end: {
					line: 204,
					column: 17
				}
			},
			'99': {
				start: {
					line: 207,
					column: 4
				},
				end: {
					line: 209,
					column: 5
				}
			},
			'100': {
				start: {
					line: 208,
					column: 5
				},
				end: {
					line: 208,
					column: 17
				}
			},
			'101': {
				start: {
					line: 211,
					column: 4
				},
				end: {
					line: 213,
					column: 5
				}
			},
			'102': {
				start: {
					line: 212,
					column: 5
				},
				end: {
					line: 212,
					column: 17
				}
			},
			'103': {
				start: {
					line: 217,
					column: 2
				},
				end: {
					line: 217,
					column: 12
				}
			},
			'104': {
				start: {
					line: 221,
					column: 24
				},
				end: {
					line: 221,
					column: 69
				}
			},
			'105': {
				start: {
					line: 222,
					column: 20
				},
				end: {
					line: 230,
					column: 4
				}
			},
			'106': {
				start: {
					line: 223,
					column: 18
				},
				end: {
					line: 223,
					column: 51
				}
			},
			'107': {
				start: {
					line: 224,
					column: 20
				},
				end: {
					line: 228,
					column: 5
				}
			},
			'108': {
				start: {
					line: 225,
					column: 20
				},
				end: {
					line: 225,
					column: 76
				}
			},
			'109': {
				start: {
					line: 226,
					column: 4
				},
				end: {
					line: 226,
					column: 45
				}
			},
			'110': {
				start: {
					line: 227,
					column: 4
				},
				end: {
					line: 227,
					column: 19
				}
			},
			'111': {
				start: {
					line: 229,
					column: 3
				},
				end: {
					line: 229,
					column: 19
				}
			},
			'112': {
				start: {
					line: 232,
					column: 2
				},
				end: {
					line: 232,
					column: 28
				}
			},
			'113': {
				start: {
					line: 233,
					column: 2
				},
				end: {
					line: 233,
					column: 17
				}
			},
			'114': {
				start: {
					line: 234,
					column: 2
				},
				end: {
					line: 234,
					column: 26
				}
			},
			'115': {
				start: {
					line: 236,
					column: 2
				},
				end: {
					line: 236,
					column: 19
				}
			},
			'116': {
				start: {
					line: 240,
					column: 2
				},
				end: {
					line: 240,
					column: 14
				}
			},
			'117': {
				start: {
					line: 241,
					column: 2
				},
				end: {
					line: 241,
					column: 27
				}
			},
			'118': {
				start: {
					line: 244,
					column: 2
				},
				end: {
					line: 246,
					column: 5
				}
			},
			'119': {
				start: {
					line: 245,
					column: 3
				},
				end: {
					line: 245,
					column: 30
				}
			},
			'120': {
				start: {
					line: 250,
					column: 2
				},
				end: {
					line: 250,
					column: 47
				}
			},
			'121': {
				start: {
					line: 250,
					column: 28
				},
				end: {
					line: 250,
					column: 45
				}
			},
			'122': {
				start: {
					line: 254,
					column: 22
				},
				end: {
					line: 258,
					column: 3
				}
			},
			'123': {
				start: {
					line: 255,
					column: 3
				},
				end: {
					line: 257,
					column: 4
				}
			},
			'124': {
				start: {
					line: 256,
					column: 4
				},
				end: {
					line: 256,
					column: 22
				}
			},
			'125': {
				start: {
					line: 260,
					column: 2
				},
				end: {
					line: 264,
					column: 5
				}
			},
			'126': {
				start: {
					line: 261,
					column: 3
				},
				end: {
					line: 261,
					column: 33
				}
			},
			'127': {
				start: {
					line: 262,
					column: 3
				},
				end: {
					line: 262,
					column: 16
				}
			},
			'128': {
				start: {
					line: 263,
					column: 3
				},
				end: {
					line: 263,
					column: 45
				}
			},
			'129': {
				start: {
					line: 266,
					column: 2
				},
				end: {
					line: 266,
					column: 15
				}
			},
			'130': {
				start: {
					line: 268,
					column: 21
				},
				end: {
					line: 268,
					column: 26
				}
			},
			'131': {
				start: {
					line: 269,
					column: 2
				},
				end: {
					line: 271,
					column: 5
				}
			},
			'132': {
				start: {
					line: 270,
					column: 3
				},
				end: {
					line: 270,
					column: 53
				}
			},
			'133': {
				start: {
					line: 273,
					column: 2
				},
				end: {
					line: 279,
					column: 3
				}
			},
			'134': {
				start: {
					line: 274,
					column: 3
				},
				end: {
					line: 278,
					column: 4
				}
			},
			'135': {
				start: {
					line: 275,
					column: 4
				},
				end: {
					line: 275,
					column: 17
				}
			},
			'136': {
				start: {
					line: 277,
					column: 4
				},
				end: {
					line: 277,
					column: 16
				}
			},
			'137': {
				start: {
					line: 283,
					column: 2
				},
				end: {
					line: 283,
					column: 42
				}
			},
			'138': {
				start: {
					line: 283,
					column: 28
				},
				end: {
					line: 283,
					column: 40
				}
			},
			'139': {
				start: {
					line: 285,
					column: 20
				},
				end: {
					line: 285,
					column: 25
				}
			},
			'140': {
				start: {
					line: 286,
					column: 2
				},
				end: {
					line: 288,
					column: 5
				}
			},
			'141': {
				start: {
					line: 287,
					column: 3
				},
				end: {
					line: 287,
					column: 50
				}
			},
			'142': {
				start: {
					line: 290,
					column: 2
				},
				end: {
					line: 292,
					column: 3
				}
			},
			'143': {
				start: {
					line: 291,
					column: 3
				},
				end: {
					line: 291,
					column: 15
				}
			},
			'144': {
				start: {
					line: 296,
					column: 2
				},
				end: {
					line: 296,
					column: 23
				}
			},
			'145': {
				start: {
					line: 297,
					column: 2
				},
				end: {
					line: 297,
					column: 19
				}
			},
			'146': {
				start: {
					line: 298,
					column: 2
				},
				end: {
					line: 298,
					column: 20
				}
			},
			'147': {
				start: {
					line: 302,
					column: 2
				},
				end: {
					line: 302,
					column: 25
				}
			},
			'148': {
				start: {
					line: 303,
					column: 2
				},
				end: {
					line: 303,
					column: 22
				}
			},
			'149': {
				start: {
					line: 307,
					column: 0
				},
				end: {
					line: 307,
					column: 23
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 9,
						column: 1
					},
					end: {
						line: 9,
						column: 2
					}
				},
				loc: {
					start: {
						line: 9,
						column: 21
					},
					end: {
						line: 44,
						column: 2
					}
				},
				line: 9
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 46,
						column: 1
					},
					end: {
						line: 46,
						column: 2
					}
				},
				loc: {
					start: {
						line: 46,
						column: 18
					},
					end: {
						line: 48,
						column: 2
					}
				},
				line: 46
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 47,
						column: 30
					},
					end: {
						line: 47,
						column: 31
					}
				},
				loc: {
					start: {
						line: 47,
						column: 37
					},
					end: {
						line: 47,
						column: 69
					}
				},
				line: 47
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 50,
						column: 1
					},
					end: {
						line: 50,
						column: 2
					}
				},
				loc: {
					start: {
						line: 50,
						column: 19
					},
					end: {
						line: 52,
						column: 2
					}
				},
				line: 50
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 54,
						column: 1
					},
					end: {
						line: 54,
						column: 2
					}
				},
				loc: {
					start: {
						line: 54,
						column: 18
					},
					end: {
						line: 64,
						column: 2
					}
				},
				line: 54
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 57,
						column: 17
					},
					end: {
						line: 57,
						column: 18
					}
				},
				loc: {
					start: {
						line: 57,
						column: 28
					},
					end: {
						line: 61,
						column: 3
					}
				},
				line: 57
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 66,
						column: 1
					},
					end: {
						line: 66,
						column: 2
					}
				},
				loc: {
					start: {
						line: 66,
						column: 25
					},
					end: {
						line: 76,
						column: 2
					}
				},
				line: 66
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 69,
						column: 17
					},
					end: {
						line: 69,
						column: 18
					}
				},
				loc: {
					start: {
						line: 69,
						column: 28
					},
					end: {
						line: 73,
						column: 3
					}
				},
				line: 69
			},
			'8': {
				name: '(anonymous_8)',
				decl: {
					start: {
						line: 78,
						column: 1
					},
					end: {
						line: 78,
						column: 2
					}
				},
				loc: {
					start: {
						line: 78,
						column: 17
					},
					end: {
						line: 91,
						column: 2
					}
				},
				line: 78
			},
			'9': {
				name: '(anonymous_9)',
				decl: {
					start: {
						line: 81,
						column: 17
					},
					end: {
						line: 81,
						column: 18
					}
				},
				loc: {
					start: {
						line: 81,
						column: 28
					},
					end: {
						line: 88,
						column: 3
					}
				},
				line: 81
			},
			'10': {
				name: '(anonymous_10)',
				decl: {
					start: {
						line: 93,
						column: 1
					},
					end: {
						line: 93,
						column: 2
					}
				},
				loc: {
					start: {
						line: 93,
						column: 18
					},
					end: {
						line: 114,
						column: 2
					}
				},
				line: 93
			},
			'11': {
				name: '(anonymous_11)',
				decl: {
					start: {
						line: 95,
						column: 17
					},
					end: {
						line: 95,
						column: 18
					}
				},
				loc: {
					start: {
						line: 95,
						column: 28
					},
					end: {
						line: 111,
						column: 3
					}
				},
				line: 95
			},
			'12': {
				name: '(anonymous_12)',
				decl: {
					start: {
						line: 117,
						column: 1
					},
					end: {
						line: 117,
						column: 2
					}
				},
				loc: {
					start: {
						line: 117,
						column: 17
					},
					end: {
						line: 132,
						column: 2
					}
				},
				line: 117
			},
			'13': {
				name: '(anonymous_13)',
				decl: {
					start: {
						line: 120,
						column: 17
					},
					end: {
						line: 120,
						column: 18
					}
				},
				loc: {
					start: {
						line: 120,
						column: 34
					},
					end: {
						line: 129,
						column: 3
					}
				},
				line: 120
			},
			'14': {
				name: '(anonymous_14)',
				decl: {
					start: {
						line: 134,
						column: 1
					},
					end: {
						line: 134,
						column: 2
					}
				},
				loc: {
					start: {
						line: 134,
						column: 16
					},
					end: {
						line: 136,
						column: 2
					}
				},
				line: 134
			},
			'15': {
				name: '(anonymous_15)',
				decl: {
					start: {
						line: 138,
						column: 1
					},
					end: {
						line: 138,
						column: 2
					}
				},
				loc: {
					start: {
						line: 138,
						column: 13
					},
					end: {
						line: 140,
						column: 2
					}
				},
				line: 138
			},
			'16': {
				name: '(anonymous_16)',
				decl: {
					start: {
						line: 142,
						column: 1
					},
					end: {
						line: 142,
						column: 2
					}
				},
				loc: {
					start: {
						line: 142,
						column: 21
					},
					end: {
						line: 149,
						column: 2
					}
				},
				line: 142
			},
			'17': {
				name: '(anonymous_17)',
				decl: {
					start: {
						line: 151,
						column: 1
					},
					end: {
						line: 151,
						column: 2
					}
				},
				loc: {
					start: {
						line: 151,
						column: 19
					},
					end: {
						line: 169,
						column: 2
					}
				},
				line: 151
			},
			'18': {
				name: '(anonymous_18)',
				decl: {
					start: {
						line: 155,
						column: 17
					},
					end: {
						line: 155,
						column: 18
					}
				},
				loc: {
					start: {
						line: 155,
						column: 34
					},
					end: {
						line: 164,
						column: 3
					}
				},
				line: 155
			},
			'19': {
				name: '(anonymous_19)',
				decl: {
					start: {
						line: 171,
						column: 1
					},
					end: {
						line: 171,
						column: 2
					}
				},
				loc: {
					start: {
						line: 171,
						column: 34
					},
					end: {
						line: 186,
						column: 2
					}
				},
				line: 171
			},
			'20': {
				name: '(anonymous_20)',
				decl: {
					start: {
						line: 179,
						column: 20
					},
					end: {
						line: 179,
						column: 21
					}
				},
				loc: {
					start: {
						line: 179,
						column: 30
					},
					end: {
						line: 181,
						column: 3
					}
				},
				line: 179
			},
			'21': {
				name: '(anonymous_21)',
				decl: {
					start: {
						line: 182,
						column: 19
					},
					end: {
						line: 182,
						column: 20
					}
				},
				loc: {
					start: {
						line: 182,
						column: 34
					},
					end: {
						line: 184,
						column: 3
					}
				},
				line: 182
			},
			'22': {
				name: '(anonymous_22)',
				decl: {
					start: {
						line: 190,
						column: 1
					},
					end: {
						line: 190,
						column: 2
					}
				},
				loc: {
					start: {
						line: 190,
						column: 17
					},
					end: {
						line: 218,
						column: 2
					}
				},
				line: 190
			},
			'23': {
				name: '(anonymous_23)',
				decl: {
					start: {
						line: 193,
						column: 18
					},
					end: {
						line: 193,
						column: 19
					}
				},
				loc: {
					start: {
						line: 193,
						column: 24
					},
					end: {
						line: 215,
						column: 3
					}
				},
				line: 193
			},
			'24': {
				name: '(anonymous_24)',
				decl: {
					start: {
						line: 220,
						column: 1
					},
					end: {
						line: 220,
						column: 2
					}
				},
				loc: {
					start: {
						line: 220,
						column: 14
					},
					end: {
						line: 237,
						column: 2
					}
				},
				line: 220
			},
			'25': {
				name: '(anonymous_25)',
				decl: {
					start: {
						line: 222,
						column: 38
					},
					end: {
						line: 222,
						column: 39
					}
				},
				loc: {
					start: {
						line: 222,
						column: 48
					},
					end: {
						line: 230,
						column: 3
					}
				},
				line: 222
			},
			'26': {
				name: '(anonymous_26)',
				decl: {
					start: {
						line: 224,
						column: 31
					},
					end: {
						line: 224,
						column: 32
					}
				},
				loc: {
					start: {
						line: 224,
						column: 38
					},
					end: {
						line: 228,
						column: 4
					}
				},
				line: 224
			},
			'27': {
				name: '(anonymous_27)',
				decl: {
					start: {
						line: 239,
						column: 1
					},
					end: {
						line: 239,
						column: 2
					}
				},
				loc: {
					start: {
						line: 239,
						column: 15
					},
					end: {
						line: 247,
						column: 2
					}
				},
				line: 239
			},
			'28': {
				name: '(anonymous_28)',
				decl: {
					start: {
						line: 244,
						column: 19
					},
					end: {
						line: 244,
						column: 20
					}
				},
				loc: {
					start: {
						line: 244,
						column: 25
					},
					end: {
						line: 246,
						column: 3
					}
				},
				line: 244
			},
			'29': {
				name: '(anonymous_29)',
				decl: {
					start: {
						line: 249,
						column: 1
					},
					end: {
						line: 249,
						column: 2
					}
				},
				loc: {
					start: {
						line: 249,
						column: 13
					},
					end: {
						line: 251,
						column: 2
					}
				},
				line: 249
			},
			'30': {
				name: '(anonymous_30)',
				decl: {
					start: {
						line: 250,
						column: 17
					},
					end: {
						line: 250,
						column: 18
					}
				},
				loc: {
					start: {
						line: 250,
						column: 28
					},
					end: {
						line: 250,
						column: 45
					}
				},
				line: 250
			},
			'31': {
				name: '(anonymous_31)',
				decl: {
					start: {
						line: 253,
						column: 1
					},
					end: {
						line: 253,
						column: 2
					}
				},
				loc: {
					start: {
						line: 253,
						column: 27
					},
					end: {
						line: 280,
						column: 2
					}
				},
				line: 253
			},
			'32': {
				name: '(anonymous_32)',
				decl: {
					start: {
						line: 254,
						column: 22
					},
					end: {
						line: 254,
						column: 23
					}
				},
				loc: {
					start: {
						line: 254,
						column: 37
					},
					end: {
						line: 258,
						column: 3
					}
				},
				line: 254
			},
			'33': {
				name: '(anonymous_33)',
				decl: {
					start: {
						line: 260,
						column: 17
					},
					end: {
						line: 260,
						column: 18
					}
				},
				loc: {
					start: {
						line: 260,
						column: 28
					},
					end: {
						line: 264,
						column: 3
					}
				},
				line: 260
			},
			'34': {
				name: '(anonymous_34)',
				decl: {
					start: {
						line: 269,
						column: 17
					},
					end: {
						line: 269,
						column: 18
					}
				},
				loc: {
					start: {
						line: 269,
						column: 28
					},
					end: {
						line: 271,
						column: 3
					}
				},
				line: 269
			},
			'35': {
				name: '(anonymous_35)',
				decl: {
					start: {
						line: 282,
						column: 1
					},
					end: {
						line: 282,
						column: 2
					}
				},
				loc: {
					start: {
						line: 282,
						column: 8
					},
					end: {
						line: 293,
						column: 2
					}
				},
				line: 282
			},
			'36': {
				name: '(anonymous_36)',
				decl: {
					start: {
						line: 283,
						column: 17
					},
					end: {
						line: 283,
						column: 18
					}
				},
				loc: {
					start: {
						line: 283,
						column: 28
					},
					end: {
						line: 283,
						column: 40
					}
				},
				line: 283
			},
			'37': {
				name: '(anonymous_37)',
				decl: {
					start: {
						line: 286,
						column: 17
					},
					end: {
						line: 286,
						column: 18
					}
				},
				loc: {
					start: {
						line: 286,
						column: 28
					},
					end: {
						line: 288,
						column: 3
					}
				},
				line: 286
			},
			'38': {
				name: '(anonymous_38)',
				decl: {
					start: {
						line: 295,
						column: 1
					},
					end: {
						line: 295,
						column: 2
					}
				},
				loc: {
					start: {
						line: 295,
						column: 8
					},
					end: {
						line: 299,
						column: 2
					}
				},
				line: 295
			},
			'39': {
				name: '(anonymous_39)',
				decl: {
					start: {
						line: 301,
						column: 1
					},
					end: {
						line: 301,
						column: 2
					}
				},
				loc: {
					start: {
						line: 301,
						column: 9
					},
					end: {
						line: 304,
						column: 2
					}
				},
				line: 301
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 36,
						column: 2
					},
					end: {
						line: 40,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 36,
						column: 2
					},
					end: {
						line: 40,
						column: 3
					}
				}, {
					start: {
						line: 36,
						column: 2
					},
					end: {
						line: 40,
						column: 3
					}
				}],
				line: 36
			},
			'1': {
				loc: {
					start: {
						line: 58,
						column: 3
					},
					end: {
						line: 60,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 58,
						column: 3
					},
					end: {
						line: 60,
						column: 4
					}
				}, {
					start: {
						line: 58,
						column: 3
					},
					end: {
						line: 60,
						column: 4
					}
				}],
				line: 58
			},
			'2': {
				loc: {
					start: {
						line: 70,
						column: 3
					},
					end: {
						line: 72,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 70,
						column: 3
					},
					end: {
						line: 72,
						column: 4
					}
				}, {
					start: {
						line: 70,
						column: 3
					},
					end: {
						line: 72,
						column: 4
					}
				}],
				line: 70
			},
			'3': {
				loc: {
					start: {
						line: 96,
						column: 3
					},
					end: {
						line: 98,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 96,
						column: 3
					},
					end: {
						line: 98,
						column: 4
					}
				}, {
					start: {
						line: 96,
						column: 3
					},
					end: {
						line: 98,
						column: 4
					}
				}],
				line: 96
			},
			'4': {
				loc: {
					start: {
						line: 100,
						column: 4
					},
					end: {
						line: 103,
						column: 5
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 100,
						column: 4
					},
					end: {
						line: 103,
						column: 5
					}
				}, {
					start: {
						line: 100,
						column: 4
					},
					end: {
						line: 103,
						column: 5
					}
				}],
				line: 100
			},
			'5': {
				loc: {
					start: {
						line: 106,
						column: 4
					},
					end: {
						line: 109,
						column: 5
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 106,
						column: 4
					},
					end: {
						line: 109,
						column: 5
					}
				}, {
					start: {
						line: 106,
						column: 4
					},
					end: {
						line: 109,
						column: 5
					}
				}],
				line: 106
			},
			'6': {
				loc: {
					start: {
						line: 121,
						column: 3
					},
					end: {
						line: 128,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 121,
						column: 3
					},
					end: {
						line: 128,
						column: 4
					}
				}, {
					start: {
						line: 121,
						column: 3
					},
					end: {
						line: 128,
						column: 4
					}
				}],
				line: 121
			},
			'7': {
				loc: {
					start: {
						line: 156,
						column: 3
					},
					end: {
						line: 163,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 156,
						column: 3
					},
					end: {
						line: 163,
						column: 4
					}
				}, {
					start: {
						line: 156,
						column: 3
					},
					end: {
						line: 163,
						column: 4
					}
				}],
				line: 156
			},
			'8': {
				loc: {
					start: {
						line: 197,
						column: 4
					},
					end: {
						line: 199,
						column: 5
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 197,
						column: 4
					},
					end: {
						line: 199,
						column: 5
					}
				}, {
					start: {
						line: 197,
						column: 4
					},
					end: {
						line: 199,
						column: 5
					}
				}],
				line: 197
			},
			'9': {
				loc: {
					start: {
						line: 197,
						column: 8
					},
					end: {
						line: 197,
						column: 58
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 197,
						column: 8
					},
					end: {
						line: 197,
						column: 30
					}
				}, {
					start: {
						line: 197,
						column: 34
					},
					end: {
						line: 197,
						column: 58
					}
				}],
				line: 197
			},
			'10': {
				loc: {
					start: {
						line: 203,
						column: 4
					},
					end: {
						line: 205,
						column: 5
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 203,
						column: 4
					},
					end: {
						line: 205,
						column: 5
					}
				}, {
					start: {
						line: 203,
						column: 4
					},
					end: {
						line: 205,
						column: 5
					}
				}],
				line: 203
			},
			'11': {
				loc: {
					start: {
						line: 203,
						column: 8
					},
					end: {
						line: 203,
						column: 58
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 203,
						column: 8
					},
					end: {
						line: 203,
						column: 30
					}
				}, {
					start: {
						line: 203,
						column: 34
					},
					end: {
						line: 203,
						column: 58
					}
				}],
				line: 203
			},
			'12': {
				loc: {
					start: {
						line: 207,
						column: 4
					},
					end: {
						line: 209,
						column: 5
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 207,
						column: 4
					},
					end: {
						line: 209,
						column: 5
					}
				}, {
					start: {
						line: 207,
						column: 4
					},
					end: {
						line: 209,
						column: 5
					}
				}],
				line: 207
			},
			'13': {
				loc: {
					start: {
						line: 211,
						column: 4
					},
					end: {
						line: 213,
						column: 5
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 211,
						column: 4
					},
					end: {
						line: 213,
						column: 5
					}
				}, {
					start: {
						line: 211,
						column: 4
					},
					end: {
						line: 213,
						column: 5
					}
				}],
				line: 211
			},
			'14': {
				loc: {
					start: {
						line: 221,
						column: 24
					},
					end: {
						line: 221,
						column: 69
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 221,
						column: 54
					},
					end: {
						line: 221,
						column: 61
					}
				}, {
					start: {
						line: 221,
						column: 64
					},
					end: {
						line: 221,
						column: 69
					}
				}],
				line: 221
			},
			'15': {
				loc: {
					start: {
						line: 223,
						column: 18
					},
					end: {
						line: 223,
						column: 51
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 223,
						column: 44
					},
					end: {
						line: 223,
						column: 47
					}
				}, {
					start: {
						line: 223,
						column: 50
					},
					end: {
						line: 223,
						column: 51
					}
				}],
				line: 223
			},
			'16': {
				loc: {
					start: {
						line: 253,
						column: 6
					},
					end: {
						line: 253,
						column: 25
					}
				},
				type: 'default-arg',
				locations: [{
					start: {
						line: 253,
						column: 23
					},
					end: {
						line: 253,
						column: 25
					}
				}],
				line: 253
			},
			'17': {
				loc: {
					start: {
						line: 253,
						column: 7
					},
					end: {
						line: 253,
						column: 19
					}
				},
				type: 'default-arg',
				locations: [{
					start: {
						line: 253,
						column: 16
					},
					end: {
						line: 253,
						column: 19
					}
				}],
				line: 253
			},
			'18': {
				loc: {
					start: {
						line: 255,
						column: 3
					},
					end: {
						line: 257,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 255,
						column: 3
					},
					end: {
						line: 257,
						column: 4
					}
				}, {
					start: {
						line: 255,
						column: 3
					},
					end: {
						line: 257,
						column: 4
					}
				}],
				line: 255
			},
			'19': {
				loc: {
					start: {
						line: 270,
						column: 18
					},
					end: {
						line: 270,
						column: 52
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 270,
						column: 18
					},
					end: {
						line: 270,
						column: 36
					}
				}, {
					start: {
						line: 270,
						column: 40
					},
					end: {
						line: 270,
						column: 52
					}
				}],
				line: 270
			},
			'20': {
				loc: {
					start: {
						line: 273,
						column: 2
					},
					end: {
						line: 279,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 273,
						column: 2
					},
					end: {
						line: 279,
						column: 3
					}
				}, {
					start: {
						line: 273,
						column: 2
					},
					end: {
						line: 279,
						column: 3
					}
				}],
				line: 273
			},
			'21': {
				loc: {
					start: {
						line: 274,
						column: 3
					},
					end: {
						line: 278,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 274,
						column: 3
					},
					end: {
						line: 278,
						column: 4
					}
				}, {
					start: {
						line: 274,
						column: 3
					},
					end: {
						line: 278,
						column: 4
					}
				}],
				line: 274
			},
			'22': {
				loc: {
					start: {
						line: 287,
						column: 17
					},
					end: {
						line: 287,
						column: 49
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 287,
						column: 17
					},
					end: {
						line: 287,
						column: 34
					}
				}, {
					start: {
						line: 287,
						column: 38
					},
					end: {
						line: 287,
						column: 49
					}
				}],
				line: 287
			},
			'23': {
				loc: {
					start: {
						line: 290,
						column: 2
					},
					end: {
						line: 292,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 290,
						column: 2
					},
					end: {
						line: 292,
						column: 3
					}
				}, {
					start: {
						line: 290,
						column: 2
					},
					end: {
						line: 292,
						column: 3
					}
				}],
				line: 290
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0,
			'33': 0,
			'34': 0,
			'35': 0,
			'36': 0,
			'37': 0,
			'38': 0,
			'39': 0,
			'40': 0,
			'41': 0,
			'42': 0,
			'43': 0,
			'44': 0,
			'45': 0,
			'46': 0,
			'47': 0,
			'48': 0,
			'49': 0,
			'50': 0,
			'51': 0,
			'52': 0,
			'53': 0,
			'54': 0,
			'55': 0,
			'56': 0,
			'57': 0,
			'58': 0,
			'59': 0,
			'60': 0,
			'61': 0,
			'62': 0,
			'63': 0,
			'64': 0,
			'65': 0,
			'66': 0,
			'67': 0,
			'68': 0,
			'69': 0,
			'70': 0,
			'71': 0,
			'72': 0,
			'73': 0,
			'74': 0,
			'75': 0,
			'76': 0,
			'77': 0,
			'78': 0,
			'79': 0,
			'80': 0,
			'81': 0,
			'82': 0,
			'83': 0,
			'84': 0,
			'85': 0,
			'86': 0,
			'87': 0,
			'88': 0,
			'89': 0,
			'90': 0,
			'91': 0,
			'92': 0,
			'93': 0,
			'94': 0,
			'95': 0,
			'96': 0,
			'97': 0,
			'98': 0,
			'99': 0,
			'100': 0,
			'101': 0,
			'102': 0,
			'103': 0,
			'104': 0,
			'105': 0,
			'106': 0,
			'107': 0,
			'108': 0,
			'109': 0,
			'110': 0,
			'111': 0,
			'112': 0,
			'113': 0,
			'114': 0,
			'115': 0,
			'116': 0,
			'117': 0,
			'118': 0,
			'119': 0,
			'120': 0,
			'121': 0,
			'122': 0,
			'123': 0,
			'124': 0,
			'125': 0,
			'126': 0,
			'127': 0,
			'128': 0,
			'129': 0,
			'130': 0,
			'131': 0,
			'132': 0,
			'133': 0,
			'134': 0,
			'135': 0,
			'136': 0,
			'137': 0,
			'138': 0,
			'139': 0,
			'140': 0,
			'141': 0,
			'142': 0,
			'143': 0,
			'144': 0,
			'145': 0,
			'146': 0,
			'147': 0,
			'148': 0,
			'149': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0,
			'33': 0,
			'34': 0,
			'35': 0,
			'36': 0,
			'37': 0,
			'38': 0,
			'39': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0],
			'4': [0, 0],
			'5': [0, 0],
			'6': [0, 0],
			'7': [0, 0],
			'8': [0, 0],
			'9': [0, 0],
			'10': [0, 0],
			'11': [0, 0],
			'12': [0, 0],
			'13': [0, 0],
			'14': [0, 0],
			'15': [0, 0],
			'16': [0],
			'17': [0],
			'18': [0, 0],
			'19': [0, 0],
			'20': [0, 0],
			'21': [0, 0],
			'22': [0, 0],
			'23': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

const Block = (cov_1yjylxz6z1.s[0]++, __webpack_require__(7));
const Data = (cov_1yjylxz6z1.s[1]++, __webpack_require__(8));
const blockConfigs = (cov_1yjylxz6z1.s[2]++, __webpack_require__(15));
const { nop } = (cov_1yjylxz6z1.s[3]++, __webpack_require__(0));
const EventEmitter = (cov_1yjylxz6z1.s[4]++, __webpack_require__(14));
const seedrandom = (cov_1yjylxz6z1.s[5]++, __webpack_require__(9));

let Board = function (_EventEmitter) {
	_inherits(Board, _EventEmitter);

	function Board(config) {
		_classCallCheck(this, Board);

		cov_1yjylxz6z1.f[0]++;
		cov_1yjylxz6z1.s[6]++;

		var _this = _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this));

		cov_1yjylxz6z1.s[7]++;


		_this.height = config.height;
		cov_1yjylxz6z1.s[8]++;
		_this.width = config.width;
		cov_1yjylxz6z1.s[9]++;
		_this.clockLimit = config.clockLimit;

		cov_1yjylxz6z1.s[10]++;
		_this.status = 'stop';
		cov_1yjylxz6z1.s[11]++;
		_this.clock = 0;
		cov_1yjylxz6z1.s[12]++;
		_this.outputValue = null;

		cov_1yjylxz6z1.s[13]++;
		_this.blocks = [];
		cov_1yjylxz6z1.s[14]++;
		for (let i = 0; i < _this.height; i++) {
			const row = (cov_1yjylxz6z1.s[15]++, []);
			cov_1yjylxz6z1.s[16]++;
			_this.blocks.push(row);

			cov_1yjylxz6z1.s[17]++;
			for (let j = 0; j < _this.width; j++) {
				cov_1yjylxz6z1.s[18]++;

				row.push(null);
			}
		}

		cov_1yjylxz6z1.s[19]++;
		for (let x = 0; x < _this.width; x++) {
			cov_1yjylxz6z1.s[20]++;

			for (let y = 0; y < _this.height; y++) {
				cov_1yjylxz6z1.s[21]++;

				_this.placeBlock({ x, y, type: 'empty' });
			}
		}

		cov_1yjylxz6z1.s[22]++;
		if (typeof config.inputX === 'number') {
			cov_1yjylxz6z1.b[0][0]++;
			cov_1yjylxz6z1.s[23]++;

			_this.inputBlockX = [config.inputX];
		} else {
			cov_1yjylxz6z1.b[0][1]++;
			cov_1yjylxz6z1.s[24]++;

			_this.inputBlockX = config.inputX;
		}
		cov_1yjylxz6z1.s[25]++;
		_this.inputBlockY = 0;
		cov_1yjylxz6z1.s[26]++;
		_this.outputBlockX = config.outputX;
		cov_1yjylxz6z1.s[27]++;
		_this.outputBlockY = config.height - 1;
		return _this;
	}

	_createClass(Board, [{
		key: 'getBlock',
		value: function getBlock(x, y) {
			cov_1yjylxz6z1.f[14]++;
			cov_1yjylxz6z1.s[66]++;

			return this.blocks[y][x];
		}
	}, {
		key: 'getBlocks',
		value: function getBlocks() {
			cov_1yjylxz6z1.f[15]++;
			cov_1yjylxz6z1.s[67]++;

			return this.blocks;
		}
	}, {
		key: 'forBlocks',
		value: function forBlocks(callback) {
			cov_1yjylxz6z1.f[16]++;
			cov_1yjylxz6z1.s[68]++;

			for (let y = 0; y < this.height; y++) {
				cov_1yjylxz6z1.s[69]++;

				for (let x = 0; x < this.width; x++) {
					const block = (cov_1yjylxz6z1.s[70]++, this.getBlock(x, y));
					cov_1yjylxz6z1.s[71]++;
					callback.call(this, block, x, y);
				}
			}
		}
	}, {
		key: 'getSeededRandom',
		value: function getSeededRandom() {
			cov_1yjylxz6z1.f[17]++;

			// Use arrays instead of objects in seeded JSON. Objects cannot be serialized uniquely.
			const blocks = (cov_1yjylxz6z1.s[72]++, []);

			cov_1yjylxz6z1.s[73]++;
			this.forBlocks((block, x, y) => {
				cov_1yjylxz6z1.f[18]++;
				cov_1yjylxz6z1.s[74]++;

				if (block.config.name !== 'empty') {
					cov_1yjylxz6z1.b[7][0]++;
					cov_1yjylxz6z1.s[75]++;

					blocks.push([x, y, block.config.name, block.rotate]);
				} else {
					cov_1yjylxz6z1.b[7][1]++;
				}
			});

			const seed = (cov_1yjylxz6z1.s[76]++, JSON.stringify(blocks));
			const random = (cov_1yjylxz6z1.s[77]++, seedrandom(seed));
			cov_1yjylxz6z1.s[78]++;
			return random;
		}
	}, {
		key: 'placeBlock',
		value: function placeBlock({ x, y, type, rotate }) {
			cov_1yjylxz6z1.f[19]++;

			const config = (cov_1yjylxz6z1.s[79]++, Object.assign({}, blockConfigs[type]));
			cov_1yjylxz6z1.s[80]++;
			config.x = x;
			cov_1yjylxz6z1.s[81]++;
			config.y = y;
			cov_1yjylxz6z1.s[82]++;
			config.rotate = rotate;
			cov_1yjylxz6z1.s[83]++;
			config.name = type;

			const block = (cov_1yjylxz6z1.s[84]++, new Block(this, config));
			cov_1yjylxz6z1.s[85]++;
			block.on('erase', data => {
				cov_1yjylxz6z1.f[20]++;
				cov_1yjylxz6z1.s[86]++;

				this.emit('erase', block, data);
			});
			cov_1yjylxz6z1.s[87]++;
			block.on('pass', passEvent => {
				cov_1yjylxz6z1.f[21]++;
				cov_1yjylxz6z1.s[88]++;

				this.emit('pass', block, passEvent);
			});
			cov_1yjylxz6z1.s[89]++;
			this.blocks[y][x] = block;
		}

		// Run the board until the end
		// Similar to Stage#executeCase, but without DOM access.

	}, {
		key: 'run',
		value: function run(inputValue) {
			cov_1yjylxz6z1.f[22]++;
			cov_1yjylxz6z1.s[90]++;

			this.input(inputValue);

			cov_1yjylxz6z1.s[91]++;
			const clockUp = () => {
				cov_1yjylxz6z1.f[23]++;
				cov_1yjylxz6z1.s[92]++;

				while (true) {
					cov_1yjylxz6z1.s[93]++;

					this.step();

					cov_1yjylxz6z1.s[94]++;
					if ((cov_1yjylxz6z1.b[9][0]++, this.status === 'stop') || (cov_1yjylxz6z1.b[9][1]++, this.status === 'paused')) {
						cov_1yjylxz6z1.b[8][0]++;
						cov_1yjylxz6z1.s[95]++;

						return null;
					} else {
						cov_1yjylxz6z1.b[8][1]++;
					}

					cov_1yjylxz6z1.s[96]++;
					this.hand();

					cov_1yjylxz6z1.s[97]++;
					if ((cov_1yjylxz6z1.b[11][0]++, this.status === 'stop') || (cov_1yjylxz6z1.b[11][1]++, this.status === 'paused')) {
						cov_1yjylxz6z1.b[10][0]++;
						cov_1yjylxz6z1.s[98]++;

						return null;
					} else {
						cov_1yjylxz6z1.b[10][1]++;
					}

					cov_1yjylxz6z1.s[99]++;
					if (this.clock >= this.clockLimit) {
						cov_1yjylxz6z1.b[12][0]++;
						cov_1yjylxz6z1.s[100]++;

						return null;
					} else {
						cov_1yjylxz6z1.b[12][1]++;
					}

					cov_1yjylxz6z1.s[101]++;
					if (this.dataCount >= 100) {
						cov_1yjylxz6z1.b[13][0]++;
						cov_1yjylxz6z1.s[102]++;

						return null;
					} else {
						cov_1yjylxz6z1.b[13][1]++;
					}
				}
			};

			cov_1yjylxz6z1.s[103]++;
			clockUp();
		}
	}, {
		key: 'input',
		value: function input(value) {
			cov_1yjylxz6z1.f[24]++;

			const newValueArray = (cov_1yjylxz6z1.s[104]++, typeof value === 'number' ? (cov_1yjylxz6z1.b[14][0]++, [value]) : (cov_1yjylxz6z1.b[14][1]++, value));
			const inputData = (cov_1yjylxz6z1.s[105]++, newValueArray.map((v, i) => {
				cov_1yjylxz6z1.f[25]++;

				const inputs = (cov_1yjylxz6z1.s[106]++, typeof v === 'number' ? (cov_1yjylxz6z1.b[15][0]++, [v]) : (cov_1yjylxz6z1.b[15][1]++, v));
				const newDatas = (cov_1yjylxz6z1.s[107]++, inputs.map(x => {
					cov_1yjylxz6z1.f[26]++;

					const newData = (cov_1yjylxz6z1.s[108]++, new Data(this, x, this.inputBlockX[i], this.inputBlockY));
					cov_1yjylxz6z1.s[109]++;
					this.inputBlock[i].input('top', newData);
					cov_1yjylxz6z1.s[110]++;
					return newData;
				}));
				cov_1yjylxz6z1.s[111]++;
				return newDatas;
			}));

			cov_1yjylxz6z1.s[112]++;
			this.status = 'executing';
			cov_1yjylxz6z1.s[113]++;
			this.clock = 0;
			cov_1yjylxz6z1.s[114]++;
			this.outputValue = null;

			cov_1yjylxz6z1.s[115]++;
			return inputData;
		}
	}, {
		key: 'output',
		value: function output(value) {
			cov_1yjylxz6z1.f[27]++;
			cov_1yjylxz6z1.s[116]++;

			this.halt();
			cov_1yjylxz6z1.s[117]++;
			this.outputValue = value;

			// Wait for the next tick to successfully break the clockUp loop
			cov_1yjylxz6z1.s[118]++;
			process.nextTick(() => {
				cov_1yjylxz6z1.f[28]++;
				cov_1yjylxz6z1.s[119]++;

				this.emit('output', value);
			});
		}
	}, {
		key: 'clearData',
		value: function clearData() {
			cov_1yjylxz6z1.f[29]++;
			cov_1yjylxz6z1.s[120]++;

			this.forBlocks(block => {
				cov_1yjylxz6z1.f[30]++;
				cov_1yjylxz6z1.s[121]++;
				return block.clearData();
			});
		}
	}, {
		key: 'step',
		value: function step({ onPass = (cov_1yjylxz6z1.b[17][0]++, nop) } = (cov_1yjylxz6z1.b[16][0]++, {})) {
			cov_1yjylxz6z1.f[31]++;
			cov_1yjylxz6z1.s[122]++;

			const onBlockPass = passEvent => {
				cov_1yjylxz6z1.f[32]++;
				cov_1yjylxz6z1.s[123]++;

				if (onPass) {
					cov_1yjylxz6z1.b[18][0]++;
					cov_1yjylxz6z1.s[124]++;

					onPass(passEvent);
				} else {
					cov_1yjylxz6z1.b[18][1]++;
				}
			};

			cov_1yjylxz6z1.s[125]++;
			this.forBlocks(block => {
				cov_1yjylxz6z1.f[33]++;
				cov_1yjylxz6z1.s[126]++;

				block.on('pass', onBlockPass);
				cov_1yjylxz6z1.s[127]++;
				block.step();
				cov_1yjylxz6z1.s[128]++;
				block.removeListener('pass', onBlockPass);
			});

			cov_1yjylxz6z1.s[129]++;
			this.clock++;

			let outputExists = (cov_1yjylxz6z1.s[130]++, false);
			cov_1yjylxz6z1.s[131]++;
			this.forBlocks(block => {
				cov_1yjylxz6z1.f[34]++;
				cov_1yjylxz6z1.s[132]++;

				outputExists = (cov_1yjylxz6z1.b[19][0]++, block.outputExists) || (cov_1yjylxz6z1.b[19][1]++, outputExists);
			});

			cov_1yjylxz6z1.s[133]++;
			if (!outputExists) {
				cov_1yjylxz6z1.b[20][0]++;
				cov_1yjylxz6z1.s[134]++;

				if (this.dataExists) {
					cov_1yjylxz6z1.b[21][0]++;
					cov_1yjylxz6z1.s[135]++;

					this.pause();
				} else {
					cov_1yjylxz6z1.b[21][1]++;
					cov_1yjylxz6z1.s[136]++;

					this.halt();
				}
			} else {
				cov_1yjylxz6z1.b[20][1]++;
			}
		}
	}, {
		key: 'hand',
		value: function hand() {
			cov_1yjylxz6z1.f[35]++;
			cov_1yjylxz6z1.s[137]++;

			this.forBlocks(block => {
				cov_1yjylxz6z1.f[36]++;
				cov_1yjylxz6z1.s[138]++;
				return block.hand();
			});

			let inputExists = (cov_1yjylxz6z1.s[139]++, false);
			cov_1yjylxz6z1.s[140]++;
			this.forBlocks(block => {
				cov_1yjylxz6z1.f[37]++;
				cov_1yjylxz6z1.s[141]++;

				inputExists = (cov_1yjylxz6z1.b[22][0]++, block.inputExists) || (cov_1yjylxz6z1.b[22][1]++, inputExists);
			});

			cov_1yjylxz6z1.s[142]++;
			if (!inputExists) {
				cov_1yjylxz6z1.b[23][0]++;
				cov_1yjylxz6z1.s[143]++;

				this.halt();
			} else {
				cov_1yjylxz6z1.b[23][1]++;
			}
		}
	}, {
		key: 'halt',
		value: function halt() {
			cov_1yjylxz6z1.f[38]++;
			cov_1yjylxz6z1.s[144]++;

			this.status = 'stop';
			cov_1yjylxz6z1.s[145]++;
			this.clearData();
			cov_1yjylxz6z1.s[146]++;
			this.emit('halt');
		}
	}, {
		key: 'pause',
		value: function pause() {
			cov_1yjylxz6z1.f[39]++;
			cov_1yjylxz6z1.s[147]++;

			this.status = 'paused';
			cov_1yjylxz6z1.s[148]++;
			this.emit('paused');
		}
	}, {
		key: 'inputBlock',
		get: function () {
			cov_1yjylxz6z1.f[1]++;
			cov_1yjylxz6z1.s[28]++;

			return this.inputBlockX.map(x => {
				cov_1yjylxz6z1.f[2]++;
				cov_1yjylxz6z1.s[29]++;
				return this.blocks[this.inputBlockY][x];
			});
		}
	}, {
		key: 'outputBlock',
		get: function () {
			cov_1yjylxz6z1.f[3]++;
			cov_1yjylxz6z1.s[30]++;

			return this.blocks[this.outputBlockY][this.outputBlockX];
		}
	}, {
		key: 'blockCount',
		get: function () {
			cov_1yjylxz6z1.f[4]++;

			let count = (cov_1yjylxz6z1.s[31]++, 0);

			cov_1yjylxz6z1.s[32]++;
			this.forBlocks(block => {
				cov_1yjylxz6z1.f[5]++;
				cov_1yjylxz6z1.s[33]++;

				if (block.config.name !== 'empty') {
					cov_1yjylxz6z1.b[1][0]++;
					cov_1yjylxz6z1.s[34]++;

					count++;
				} else {
					cov_1yjylxz6z1.b[1][1]++;
				}
			});

			cov_1yjylxz6z1.s[35]++;
			return count;
		}
	}, {
		key: 'weighedBlockCount',
		get: function () {
			cov_1yjylxz6z1.f[6]++;

			let count = (cov_1yjylxz6z1.s[36]++, 0);

			cov_1yjylxz6z1.s[37]++;
			this.forBlocks(block => {
				cov_1yjylxz6z1.f[7]++;
				cov_1yjylxz6z1.s[38]++;

				if (block.config.name !== 'empty') {
					cov_1yjylxz6z1.b[2][0]++;
					cov_1yjylxz6z1.s[39]++;

					count += block.config.weight;
				} else {
					cov_1yjylxz6z1.b[2][1]++;
				}
			});

			cov_1yjylxz6z1.s[40]++;
			return count;
		}
	}, {
		key: 'dataCount',
		get: function () {
			cov_1yjylxz6z1.f[8]++;

			let count = (cov_1yjylxz6z1.s[41]++, 0);

			cov_1yjylxz6z1.s[42]++;
			this.forBlocks(block => {
				cov_1yjylxz6z1.f[9]++;
				cov_1yjylxz6z1.s[43]++;

				for (const queue of block.inputQueues.values()) {
					cov_1yjylxz6z1.s[44]++;

					count += queue.length;
				}
				cov_1yjylxz6z1.s[45]++;
				for (const queue of block.outputQueues.values()) {
					cov_1yjylxz6z1.s[46]++;

					count += queue.length;
				}
			});

			cov_1yjylxz6z1.s[47]++;
			return count;
		}
	}, {
		key: 'dataExists',
		get: function () {
			cov_1yjylxz6z1.f[10]++;

			let res = (cov_1yjylxz6z1.s[48]++, false);
			cov_1yjylxz6z1.s[49]++;
			this.forBlocks(block => {
				cov_1yjylxz6z1.f[11]++;
				cov_1yjylxz6z1.s[50]++;

				if (res === true) {
					cov_1yjylxz6z1.b[3][0]++;
					cov_1yjylxz6z1.s[51]++;

					return;
				} else {
					cov_1yjylxz6z1.b[3][1]++;
				}
				cov_1yjylxz6z1.s[52]++;
				for (const queue of block.inputQueues.values()) {
					cov_1yjylxz6z1.s[53]++;

					if (queue.length > 0) {
						cov_1yjylxz6z1.b[4][0]++;
						cov_1yjylxz6z1.s[54]++;

						res = true;
						cov_1yjylxz6z1.s[55]++;
						return;
					} else {
						cov_1yjylxz6z1.b[4][1]++;
					}
				}
				cov_1yjylxz6z1.s[56]++;
				for (const queue of block.outputQueues.values()) {
					cov_1yjylxz6z1.s[57]++;

					if (queue.length > 0) {
						cov_1yjylxz6z1.b[5][0]++;
						cov_1yjylxz6z1.s[58]++;

						res = true;
						cov_1yjylxz6z1.s[59]++;
						return;
					} else {
						cov_1yjylxz6z1.b[5][1]++;
					}
				}
			});

			cov_1yjylxz6z1.s[60]++;
			return res;
		}

		// Generate the JSON serializable board data that can be exchanged between API

	}, {
		key: 'boardData',
		get: function () {
			cov_1yjylxz6z1.f[12]++;

			const blocks = (cov_1yjylxz6z1.s[61]++, []);

			cov_1yjylxz6z1.s[62]++;
			this.forBlocks((block, x, y) => {
				cov_1yjylxz6z1.f[13]++;
				cov_1yjylxz6z1.s[63]++;

				if (block.config.name !== 'empty') {
					cov_1yjylxz6z1.b[6][0]++;
					cov_1yjylxz6z1.s[64]++;

					blocks.push({
						x,
						y,
						type: block.config.name,
						rotate: block.rotate
					});
				} else {
					cov_1yjylxz6z1.b[6][1]++;
				}
			});

			cov_1yjylxz6z1.s[65]++;
			return blocks;
		}
	}]);

	return Board;
}(EventEmitter);

cov_1yjylxz6z1.s[149]++;


module.exports = Board;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1dvpv5fa9x = function () {
	var path = "/home/travis/build/tsg-ut/mnemo/lib/constants.js",
	    hash = "6c766302c44a6cedc56a4d96276c63006a91854f",
	    global = new Function('return this')(),
	    gcv = "__coverage__",
	    coverageData = {
		path: "/home/travis/build/tsg-ut/mnemo/lib/constants.js",
		statementMap: {
			"0": {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 3,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			"0": 0
		},
		f: {},
		b: {},
		_coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_1dvpv5fa9x.s[0]++;
module.exports = {
	BLOCK_SIZE: 50
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1z4y9sbun = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/lib/block.js',
	    hash = '218b252416e591739eb83c077d64cfd641d07ffe',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/lib/block.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 21
				},
				end: {
					line: 1,
					column: 38
				}
			},
			'1': {
				start: {
					line: 2,
					column: 13
				},
				end: {
					line: 2,
					column: 30
				}
			},
			'2': {
				start: {
					line: 3,
					column: 18
				},
				end: {
					line: 3,
					column: 41
				}
			},
			'3': {
				start: {
					line: 7,
					column: 2
				},
				end: {
					line: 7,
					column: 10
				}
			},
			'4': {
				start: {
					line: 8,
					column: 2
				},
				end: {
					line: 8,
					column: 21
				}
			},
			'5': {
				start: {
					line: 9,
					column: 2
				},
				end: {
					line: 9,
					column: 20
				}
			},
			'6': {
				start: {
					line: 10,
					column: 2
				},
				end: {
					line: 10,
					column: 20
				}
			},
			'7': {
				start: {
					line: 11,
					column: 2
				},
				end: {
					line: 11,
					column: 35
				}
			},
			'8': {
				start: {
					line: 12,
					column: 2
				},
				end: {
					line: 12,
					column: 26
				}
			},
			'9': {
				start: {
					line: 13,
					column: 2
				},
				end: {
					line: 13,
					column: 23
				}
			},
			'10': {
				start: {
					line: 14,
					column: 2
				},
				end: {
					line: 14,
					column: 27
				}
			},
			'11': {
				start: {
					line: 15,
					column: 2
				},
				end: {
					line: 15,
					column: 28
				}
			},
			'12': {
				start: {
					line: 16,
					column: 2
				},
				end: {
					line: 21,
					column: 5
				}
			},
			'13': {
				start: {
					line: 23,
					column: 2
				},
				end: {
					line: 28,
					column: 5
				}
			},
			'14': {
				start: {
					line: 29,
					column: 2
				},
				end: {
					line: 40,
					column: 3
				}
			},
			'15': {
				start: {
					line: 30,
					column: 3
				},
				end: {
					line: 30,
					column: 97
				}
			},
			'16': {
				start: {
					line: 30,
					column: 63
				},
				end: {
					line: 30,
					column: 95
				}
			},
			'17': {
				start: {
					line: 31,
					column: 9
				},
				end: {
					line: 40,
					column: 3
				}
			},
			'18': {
				start: {
					line: 32,
					column: 3
				},
				end: {
					line: 32,
					column: 25
				}
			},
			'19': {
				start: {
					line: 33,
					column: 22
				},
				end: {
					line: 33,
					column: 56
				}
			},
			'20': {
				start: {
					line: 34,
					column: 3
				},
				end: {
					line: 39,
					column: 6
				}
			},
			'21': {
				start: {
					line: 35,
					column: 4
				},
				end: {
					line: 38,
					column: 5
				}
			},
			'22': {
				start: {
					line: 36,
					column: 5
				},
				end: {
					line: 37,
					column: 71
				}
			},
			'23': {
				start: {
					line: 37,
					column: 44
				},
				end: {
					line: 37,
					column: 69
				}
			},
			'24': {
				start: {
					line: 44,
					column: 2
				},
				end: {
					line: 46,
					column: 3
				}
			},
			'25': {
				start: {
					line: 45,
					column: 3
				},
				end: {
					line: 45,
					column: 20
				}
			},
			'26': {
				start: {
					line: 48,
					column: 21
				},
				end: {
					line: 48,
					column: 55
				}
			},
			'27': {
				start: {
					line: 49,
					column: 2
				},
				end: {
					line: 49,
					column: 71
				}
			},
			'28': {
				start: {
					line: 53,
					column: 2
				},
				end: {
					line: 53,
					column: 26
				}
			},
			'29': {
				start: {
					line: 54,
					column: 2
				},
				end: {
					line: 54,
					column: 44
				}
			},
			'30': {
				start: {
					line: 55,
					column: 2
				},
				end: {
					line: 55,
					column: 48
				}
			},
			'31': {
				start: {
					line: 59,
					column: 2
				},
				end: {
					line: 59,
					column: 27
				}
			},
			'32': {
				start: {
					line: 61,
					column: 2
				},
				end: {
					line: 247,
					column: 3
				}
			},
			'33': {
				start: {
					line: 64,
					column: 4
				},
				end: {
					line: 69,
					column: 5
				}
			},
			'34': {
				start: {
					line: 65,
					column: 5
				},
				end: {
					line: 68,
					column: 6
				}
			},
			'35': {
				start: {
					line: 66,
					column: 19
				},
				end: {
					line: 66,
					column: 32
				}
			},
			'36': {
				start: {
					line: 67,
					column: 6
				},
				end: {
					line: 67,
					column: 31
				}
			},
			'37': {
				start: {
					line: 70,
					column: 4
				},
				end: {
					line: 70,
					column: 10
				}
			},
			'38': {
				start: {
					line: 73,
					column: 4
				},
				end: {
					line: 101,
					column: 5
				}
			},
			'39': {
				start: {
					line: 75,
					column: 5
				},
				end: {
					line: 77,
					column: 6
				}
			},
			'40': {
				start: {
					line: 76,
					column: 6
				},
				end: {
					line: 76,
					column: 15
				}
			},
			'41': {
				start: {
					line: 78,
					column: 5
				},
				end: {
					line: 100,
					column: 6
				}
			},
			'42': {
				start: {
					line: 79,
					column: 27
				},
				end: {
					line: 79,
					column: 88
				}
			},
			'43': {
				start: {
					line: 79,
					column: 67
				},
				end: {
					line: 79,
					column: 87
				}
			},
			'44': {
				start: {
					line: 80,
					column: 19
				},
				end: {
					line: 80,
					column: 32
				}
			},
			'45': {
				start: {
					line: 83,
					column: 20
				},
				end: {
					line: 83,
					column: 45
				}
			},
			'46': {
				start: {
					line: 85,
					column: 21
				},
				end: {
					line: 85,
					column: 30
				}
			},
			'47': {
				start: {
					line: 86,
					column: 6
				},
				end: {
					line: 90,
					column: 9
				}
			},
			'48': {
				start: {
					line: 87,
					column: 23
				},
				end: {
					line: 87,
					column: 55
				}
			},
			'49': {
				start: {
					line: 88,
					column: 7
				},
				end: {
					line: 88,
					column: 54
				}
			},
			'50': {
				start: {
					line: 89,
					column: 7
				},
				end: {
					line: 89,
					column: 38
				}
			},
			'51': {
				start: {
					line: 92,
					column: 6
				},
				end: {
					line: 92,
					column: 65
				}
			},
			'52': {
				start: {
					line: 93,
					column: 6
				},
				end: {
					line: 93,
					column: 31
				}
			},
			'53': {
				start: {
					line: 96,
					column: 6
				},
				end: {
					line: 99,
					column: 7
				}
			},
			'54': {
				start: {
					line: 97,
					column: 20
				},
				end: {
					line: 97,
					column: 33
				}
			},
			'55': {
				start: {
					line: 98,
					column: 7
				},
				end: {
					line: 98,
					column: 32
				}
			},
			'56': {
				start: {
					line: 102,
					column: 4
				},
				end: {
					line: 102,
					column: 10
				}
			},
			'57': {
				start: {
					line: 105,
					column: 4
				},
				end: {
					line: 133,
					column: 5
				}
			},
			'58': {
				start: {
					line: 107,
					column: 5
				},
				end: {
					line: 124,
					column: 6
				}
			},
			'59': {
				start: {
					line: 108,
					column: 27
				},
				end: {
					line: 108,
					column: 88
				}
			},
			'60': {
				start: {
					line: 108,
					column: 67
				},
				end: {
					line: 108,
					column: 87
				}
			},
			'61': {
				start: {
					line: 109,
					column: 19
				},
				end: {
					line: 109,
					column: 32
				}
			},
			'62': {
				start: {
					line: 112,
					column: 20
				},
				end: {
					line: 112,
					column: 45
				}
			},
			'63': {
				start: {
					line: 114,
					column: 21
				},
				end: {
					line: 114,
					column: 30
				}
			},
			'64': {
				start: {
					line: 115,
					column: 6
				},
				end: {
					line: 120,
					column: 9
				}
			},
			'65': {
				start: {
					line: 116,
					column: 21
				},
				end: {
					line: 116,
					column: 49
				}
			},
			'66': {
				start: {
					line: 117,
					column: 23
				},
				end: {
					line: 117,
					column: 69
				}
			},
			'67': {
				start: {
					line: 118,
					column: 7
				},
				end: {
					line: 118,
					column: 54
				}
			},
			'68': {
				start: {
					line: 119,
					column: 7
				},
				end: {
					line: 119,
					column: 38
				}
			},
			'69': {
				start: {
					line: 122,
					column: 6
				},
				end: {
					line: 122,
					column: 65
				}
			},
			'70': {
				start: {
					line: 123,
					column: 6
				},
				end: {
					line: 123,
					column: 31
				}
			},
			'71': {
				start: {
					line: 127,
					column: 5
				},
				end: {
					line: 132,
					column: 6
				}
			},
			'72': {
				start: {
					line: 128,
					column: 6
				},
				end: {
					line: 131,
					column: 7
				}
			},
			'73': {
				start: {
					line: 129,
					column: 20
				},
				end: {
					line: 129,
					column: 33
				}
			},
			'74': {
				start: {
					line: 130,
					column: 7
				},
				end: {
					line: 130,
					column: 32
				}
			},
			'75': {
				start: {
					line: 134,
					column: 4
				},
				end: {
					line: 134,
					column: 10
				}
			},
			'76': {
				start: {
					line: 137,
					column: 20
				},
				end: {
					line: 137,
					column: 90
				}
			},
			'77': {
				start: {
					line: 137,
					column: 57
				},
				end: {
					line: 137,
					column: 89
				}
			},
			'78': {
				start: {
					line: 138,
					column: 24
				},
				end: {
					line: 138,
					column: 65
				}
			},
			'79': {
				start: {
					line: 141,
					column: 4
				},
				end: {
					line: 159,
					column: 5
				}
			},
			'80': {
				start: {
					line: 141,
					column: 34
				},
				end: {
					line: 141,
					column: 73
				}
			},
			'81': {
				start: {
					line: 142,
					column: 19
				},
				end: {
					line: 142,
					column: 21
				}
			},
			'82': {
				start: {
					line: 145,
					column: 19
				},
				end: {
					line: 145,
					column: 28
				}
			},
			'83': {
				start: {
					line: 146,
					column: 5
				},
				end: {
					line: 150,
					column: 8
				}
			},
			'84': {
				start: {
					line: 147,
					column: 19
				},
				end: {
					line: 147,
					column: 55
				}
			},
			'85': {
				start: {
					line: 148,
					column: 6
				},
				end: {
					line: 148,
					column: 30
				}
			},
			'86': {
				start: {
					line: 149,
					column: 6
				},
				end: {
					line: 149,
					column: 23
				}
			},
			'87': {
				start: {
					line: 152,
					column: 19
				},
				end: {
					line: 152,
					column: 71
				}
			},
			'88': {
				start: {
					line: 152,
					column: 59
				},
				end: {
					line: 152,
					column: 69
				}
			},
			'89': {
				start: {
					line: 153,
					column: 21
				},
				end: {
					line: 153,
					column: 67
				}
			},
			'90': {
				start: {
					line: 154,
					column: 5
				},
				end: {
					line: 154,
					column: 54
				}
			},
			'91': {
				start: {
					line: 155,
					column: 20
				},
				end: {
					line: 155,
					column: 53
				}
			},
			'92': {
				start: {
					line: 157,
					column: 5
				},
				end: {
					line: 157,
					column: 64
				}
			},
			'93': {
				start: {
					line: 158,
					column: 5
				},
				end: {
					line: 158,
					column: 30
				}
			},
			'94': {
				start: {
					line: 162,
					column: 4
				},
				end: {
					line: 169,
					column: 5
				}
			},
			'95': {
				start: {
					line: 163,
					column: 5
				},
				end: {
					line: 168,
					column: 6
				}
			},
			'96': {
				start: {
					line: 164,
					column: 6
				},
				end: {
					line: 167,
					column: 7
				}
			},
			'97': {
				start: {
					line: 165,
					column: 20
				},
				end: {
					line: 165,
					column: 33
				}
			},
			'98': {
				start: {
					line: 166,
					column: 7
				},
				end: {
					line: 166,
					column: 32
				}
			},
			'99': {
				start: {
					line: 170,
					column: 4
				},
				end: {
					line: 170,
					column: 10
				}
			},
			'100': {
				start: {
					line: 173,
					column: 20
				},
				end: {
					line: 175,
					column: 6
				}
			},
			'101': {
				start: {
					line: 174,
					column: 5
				},
				end: {
					line: 174,
					column: 37
				}
			},
			'102': {
				start: {
					line: 176,
					column: 25
				},
				end: {
					line: 178,
					column: 6
				}
			},
			'103': {
				start: {
					line: 177,
					column: 5
				},
				end: {
					line: 177,
					column: 37
				}
			},
			'104': {
				start: {
					line: 181,
					column: 4
				},
				end: {
					line: 202,
					column: 5
				}
			},
			'105': {
				start: {
					line: 181,
					column: 34
				},
				end: {
					line: 181,
					column: 73
				}
			},
			'106': {
				start: {
					line: 182,
					column: 19
				},
				end: {
					line: 182,
					column: 21
				}
			},
			'107': {
				start: {
					line: 185,
					column: 19
				},
				end: {
					line: 185,
					column: 28
				}
			},
			'108': {
				start: {
					line: 186,
					column: 5
				},
				end: {
					line: 190,
					column: 8
				}
			},
			'109': {
				start: {
					line: 187,
					column: 19
				},
				end: {
					line: 187,
					column: 55
				}
			},
			'110': {
				start: {
					line: 188,
					column: 6
				},
				end: {
					line: 188,
					column: 30
				}
			},
			'111': {
				start: {
					line: 189,
					column: 6
				},
				end: {
					line: 189,
					column: 23
				}
			},
			'112': {
				start: {
					line: 192,
					column: 20
				},
				end: {
					line: 192,
					column: 51
				}
			},
			'113': {
				start: {
					line: 192,
					column: 40
				},
				end: {
					line: 192,
					column: 50
				}
			},
			'114': {
				start: {
					line: 193,
					column: 37
				},
				end: {
					line: 193,
					column: 64
				}
			},
			'115': {
				start: {
					line: 195,
					column: 18
				},
				end: {
					line: 195,
					column: 64
				}
			},
			'116': {
				start: {
					line: 196,
					column: 25
				},
				end: {
					line: 196,
					column: 53
				}
			},
			'117': {
				start: {
					line: 197,
					column: 5
				},
				end: {
					line: 197,
					column: 51
				}
			},
			'118': {
				start: {
					line: 198,
					column: 20
				},
				end: {
					line: 198,
					column: 50
				}
			},
			'119': {
				start: {
					line: 200,
					column: 5
				},
				end: {
					line: 200,
					column: 64
				}
			},
			'120': {
				start: {
					line: 201,
					column: 5
				},
				end: {
					line: 201,
					column: 30
				}
			},
			'121': {
				start: {
					line: 205,
					column: 4
				},
				end: {
					line: 212,
					column: 5
				}
			},
			'122': {
				start: {
					line: 206,
					column: 5
				},
				end: {
					line: 211,
					column: 6
				}
			},
			'123': {
				start: {
					line: 207,
					column: 6
				},
				end: {
					line: 210,
					column: 7
				}
			},
			'124': {
				start: {
					line: 208,
					column: 20
				},
				end: {
					line: 208,
					column: 33
				}
			},
			'125': {
				start: {
					line: 209,
					column: 7
				},
				end: {
					line: 209,
					column: 32
				}
			},
			'126': {
				start: {
					line: 213,
					column: 4
				},
				end: {
					line: 213,
					column: 10
				}
			},
			'127': {
				start: {
					line: 216,
					column: 4
				},
				end: {
					line: 244,
					column: 5
				}
			},
			'128': {
				start: {
					line: 217,
					column: 5
				},
				end: {
					line: 219,
					column: 6
				}
			},
			'129': {
				start: {
					line: 218,
					column: 6
				},
				end: {
					line: 218,
					column: 15
				}
			},
			'130': {
				start: {
					line: 221,
					column: 5
				},
				end: {
					line: 243,
					column: 6
				}
			},
			'131': {
				start: {
					line: 223,
					column: 27
				},
				end: {
					line: 223,
					column: 51
				}
			},
			'132': {
				start: {
					line: 224,
					column: 19
				},
				end: {
					line: 224,
					column: 32
				}
			},
			'133': {
				start: {
					line: 226,
					column: 20
				},
				end: {
					line: 226,
					column: 45
				}
			},
			'134': {
				start: {
					line: 227,
					column: 21
				},
				end: {
					line: 227,
					column: 30
				}
			},
			'135': {
				start: {
					line: 229,
					column: 6
				},
				end: {
					line: 233,
					column: 9
				}
			},
			'136': {
				start: {
					line: 230,
					column: 23
				},
				end: {
					line: 230,
					column: 55
				}
			},
			'137': {
				start: {
					line: 231,
					column: 7
				},
				end: {
					line: 231,
					column: 54
				}
			},
			'138': {
				start: {
					line: 232,
					column: 7
				},
				end: {
					line: 232,
					column: 38
				}
			},
			'139': {
				start: {
					line: 235,
					column: 6
				},
				end: {
					line: 235,
					column: 65
				}
			},
			'140': {
				start: {
					line: 236,
					column: 6
				},
				end: {
					line: 236,
					column: 31
				}
			},
			'141': {
				start: {
					line: 239,
					column: 6
				},
				end: {
					line: 242,
					column: 7
				}
			},
			'142': {
				start: {
					line: 240,
					column: 20
				},
				end: {
					line: 240,
					column: 33
				}
			},
			'143': {
				start: {
					line: 241,
					column: 7
				},
				end: {
					line: 241,
					column: 32
				}
			},
			'144': {
				start: {
					line: 245,
					column: 4
				},
				end: {
					line: 245,
					column: 10
				}
			},
			'145': {
				start: {
					line: 251,
					column: 2
				},
				end: {
					line: 251,
					column: 28
				}
			},
			'146': {
				start: {
					line: 253,
					column: 2
				},
				end: {
					line: 258,
					column: 3
				}
			},
			'147': {
				start: {
					line: 254,
					column: 3
				},
				end: {
					line: 257,
					column: 4
				}
			},
			'148': {
				start: {
					line: 255,
					column: 17
				},
				end: {
					line: 255,
					column: 30
				}
			},
			'149': {
				start: {
					line: 256,
					column: 4
				},
				end: {
					line: 256,
					column: 33
				}
			},
			'150': {
				start: {
					line: 262,
					column: 2
				},
				end: {
					line: 270,
					column: 3
				}
			},
			'151': {
				start: {
					line: 267,
					column: 3
				},
				end: {
					line: 267,
					column: 33
				}
			},
			'152': {
				start: {
					line: 268,
					column: 3
				},
				end: {
					line: 268,
					column: 28
				}
			},
			'153': {
				start: {
					line: 269,
					column: 3
				},
				end: {
					line: 269,
					column: 10
				}
			},
			'154': {
				start: {
					line: 272,
					column: 2
				},
				end: {
					line: 309,
					column: 3
				}
			},
			'155': {
				start: {
					line: 274,
					column: 4
				},
				end: {
					line: 280,
					column: 5
				}
			},
			'156': {
				start: {
					line: 275,
					column: 23
				},
				end: {
					line: 275,
					column: 62
				}
			},
			'157': {
				start: {
					line: 276,
					column: 5
				},
				end: {
					line: 276,
					column: 37
				}
			},
			'158': {
				start: {
					line: 277,
					column: 5
				},
				end: {
					line: 277,
					column: 29
				}
			},
			'159': {
				start: {
					line: 279,
					column: 5
				},
				end: {
					line: 279,
					column: 30
				}
			},
			'160': {
				start: {
					line: 281,
					column: 4
				},
				end: {
					line: 281,
					column: 10
				}
			},
			'161': {
				start: {
					line: 283,
					column: 4
				},
				end: {
					line: 289,
					column: 5
				}
			},
			'162': {
				start: {
					line: 284,
					column: 23
				},
				end: {
					line: 284,
					column: 62
				}
			},
			'163': {
				start: {
					line: 285,
					column: 5
				},
				end: {
					line: 285,
					column: 34
				}
			},
			'164': {
				start: {
					line: 286,
					column: 5
				},
				end: {
					line: 286,
					column: 29
				}
			},
			'165': {
				start: {
					line: 288,
					column: 5
				},
				end: {
					line: 288,
					column: 30
				}
			},
			'166': {
				start: {
					line: 290,
					column: 4
				},
				end: {
					line: 290,
					column: 10
				}
			},
			'167': {
				start: {
					line: 292,
					column: 4
				},
				end: {
					line: 298,
					column: 5
				}
			},
			'168': {
				start: {
					line: 293,
					column: 23
				},
				end: {
					line: 293,
					column: 62
				}
			},
			'169': {
				start: {
					line: 294,
					column: 5
				},
				end: {
					line: 294,
					column: 36
				}
			},
			'170': {
				start: {
					line: 295,
					column: 5
				},
				end: {
					line: 295,
					column: 29
				}
			},
			'171': {
				start: {
					line: 297,
					column: 5
				},
				end: {
					line: 297,
					column: 30
				}
			},
			'172': {
				start: {
					line: 299,
					column: 4
				},
				end: {
					line: 299,
					column: 10
				}
			},
			'173': {
				start: {
					line: 301,
					column: 4
				},
				end: {
					line: 307,
					column: 5
				}
			},
			'174': {
				start: {
					line: 302,
					column: 23
				},
				end: {
					line: 302,
					column: 62
				}
			},
			'175': {
				start: {
					line: 303,
					column: 5
				},
				end: {
					line: 303,
					column: 35
				}
			},
			'176': {
				start: {
					line: 304,
					column: 5
				},
				end: {
					line: 304,
					column: 29
				}
			},
			'177': {
				start: {
					line: 306,
					column: 5
				},
				end: {
					line: 306,
					column: 30
				}
			},
			'178': {
				start: {
					line: 308,
					column: 4
				},
				end: {
					line: 308,
					column: 10
				}
			},
			'179': {
				start: {
					line: 314,
					column: 2
				},
				end: {
					line: 321,
					column: 5
				}
			},
			'180': {
				start: {
					line: 315,
					column: 3
				},
				end: {
					line: 320,
					column: 4
				}
			},
			'181': {
				start: {
					line: 316,
					column: 4
				},
				end: {
					line: 319,
					column: 5
				}
			},
			'182': {
				start: {
					line: 317,
					column: 18
				},
				end: {
					line: 317,
					column: 31
				}
			},
			'183': {
				start: {
					line: 318,
					column: 5
				},
				end: {
					line: 318,
					column: 30
				}
			},
			'184': {
				start: {
					line: 325,
					column: 0
				},
				end: {
					line: 325,
					column: 23
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 6,
						column: 1
					},
					end: {
						line: 6,
						column: 2
					}
				},
				loc: {
					start: {
						line: 6,
						column: 28
					},
					end: {
						line: 41,
						column: 2
					}
				},
				line: 6
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 30,
						column: 48
					},
					end: {
						line: 30,
						column: 49
					}
				},
				loc: {
					start: {
						line: 30,
						column: 63
					},
					end: {
						line: 30,
						column: 95
					}
				},
				line: 30
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 34,
						column: 22
					},
					end: {
						line: 34,
						column: 23
					}
				},
				loc: {
					start: {
						line: 34,
						column: 32
					},
					end: {
						line: 39,
						column: 4
					}
				},
				line: 34
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 37,
						column: 36
					},
					end: {
						line: 37,
						column: 37
					}
				},
				loc: {
					start: {
						line: 37,
						column: 44
					},
					end: {
						line: 37,
						column: 69
					}
				},
				line: 37
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 43,
						column: 1
					},
					end: {
						line: 43,
						column: 2
					}
				},
				loc: {
					start: {
						line: 43,
						column: 29
					},
					end: {
						line: 50,
						column: 2
					}
				},
				line: 43
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 52,
						column: 1
					},
					end: {
						line: 52,
						column: 2
					}
				},
				loc: {
					start: {
						line: 52,
						column: 23
					},
					end: {
						line: 56,
						column: 2
					}
				},
				line: 52
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 58,
						column: 1
					},
					end: {
						line: 58,
						column: 2
					}
				},
				loc: {
					start: {
						line: 58,
						column: 8
					},
					end: {
						line: 248,
						column: 2
					}
				},
				line: 58
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 79,
						column: 52
					},
					end: {
						line: 79,
						column: 53
					}
				},
				loc: {
					start: {
						line: 79,
						column: 67
					},
					end: {
						line: 79,
						column: 87
					}
				},
				line: 79
			},
			'8': {
				name: '(anonymous_8)',
				decl: {
					start: {
						line: 86,
						column: 27
					},
					end: {
						line: 86,
						column: 28
					}
				},
				loc: {
					start: {
						line: 86,
						column: 42
					},
					end: {
						line: 90,
						column: 7
					}
				},
				line: 86
			},
			'9': {
				name: '(anonymous_9)',
				decl: {
					start: {
						line: 108,
						column: 52
					},
					end: {
						line: 108,
						column: 53
					}
				},
				loc: {
					start: {
						line: 108,
						column: 67
					},
					end: {
						line: 108,
						column: 87
					}
				},
				line: 108
			},
			'10': {
				name: '(anonymous_10)',
				decl: {
					start: {
						line: 115,
						column: 27
					},
					end: {
						line: 115,
						column: 28
					}
				},
				loc: {
					start: {
						line: 115,
						column: 42
					},
					end: {
						line: 120,
						column: 7
					}
				},
				line: 115
			},
			'11': {
				name: '(anonymous_11)',
				decl: {
					start: {
						line: 137,
						column: 42
					},
					end: {
						line: 137,
						column: 43
					}
				},
				loc: {
					start: {
						line: 137,
						column: 57
					},
					end: {
						line: 137,
						column: 89
					}
				},
				line: 137
			},
			'12': {
				name: '(anonymous_12)',
				decl: {
					start: {
						line: 141,
						column: 22
					},
					end: {
						line: 141,
						column: 23
					}
				},
				loc: {
					start: {
						line: 141,
						column: 34
					},
					end: {
						line: 141,
						column: 73
					}
				},
				line: 141
			},
			'13': {
				name: '(anonymous_13)',
				decl: {
					start: {
						line: 146,
						column: 21
					},
					end: {
						line: 146,
						column: 22
					}
				},
				loc: {
					start: {
						line: 146,
						column: 33
					},
					end: {
						line: 150,
						column: 6
					}
				},
				line: 146
			},
			'14': {
				name: '(anonymous_14)',
				decl: {
					start: {
						line: 152,
						column: 49
					},
					end: {
						line: 152,
						column: 50
					}
				},
				loc: {
					start: {
						line: 152,
						column: 59
					},
					end: {
						line: 152,
						column: 69
					}
				},
				line: 152
			},
			'15': {
				name: '(anonymous_15)',
				decl: {
					start: {
						line: 173,
						column: 42
					},
					end: {
						line: 173,
						column: 43
					}
				},
				loc: {
					start: {
						line: 174,
						column: 5
					},
					end: {
						line: 174,
						column: 37
					}
				},
				line: 174
			},
			'16': {
				name: '(anonymous_16)',
				decl: {
					start: {
						line: 176,
						column: 48
					},
					end: {
						line: 176,
						column: 49
					}
				},
				loc: {
					start: {
						line: 177,
						column: 5
					},
					end: {
						line: 177,
						column: 37
					}
				},
				line: 177
			},
			'17': {
				name: '(anonymous_17)',
				decl: {
					start: {
						line: 181,
						column: 22
					},
					end: {
						line: 181,
						column: 23
					}
				},
				loc: {
					start: {
						line: 181,
						column: 34
					},
					end: {
						line: 181,
						column: 73
					}
				},
				line: 181
			},
			'18': {
				name: '(anonymous_18)',
				decl: {
					start: {
						line: 186,
						column: 21
					},
					end: {
						line: 186,
						column: 22
					}
				},
				loc: {
					start: {
						line: 186,
						column: 33
					},
					end: {
						line: 190,
						column: 6
					}
				},
				line: 186
			},
			'19': {
				name: '(anonymous_19)',
				decl: {
					start: {
						line: 192,
						column: 30
					},
					end: {
						line: 192,
						column: 31
					}
				},
				loc: {
					start: {
						line: 192,
						column: 40
					},
					end: {
						line: 192,
						column: 50
					}
				},
				line: 192
			},
			'20': {
				name: '(anonymous_20)',
				decl: {
					start: {
						line: 229,
						column: 27
					},
					end: {
						line: 229,
						column: 28
					}
				},
				loc: {
					start: {
						line: 229,
						column: 42
					},
					end: {
						line: 233,
						column: 7
					}
				},
				line: 229
			},
			'21': {
				name: '(anonymous_21)',
				decl: {
					start: {
						line: 250,
						column: 1
					},
					end: {
						line: 250,
						column: 2
					}
				},
				loc: {
					start: {
						line: 250,
						column: 8
					},
					end: {
						line: 259,
						column: 2
					}
				},
				line: 250
			},
			'22': {
				name: '(anonymous_22)',
				decl: {
					start: {
						line: 261,
						column: 1
					},
					end: {
						line: 261,
						column: 2
					}
				},
				loc: {
					start: {
						line: 261,
						column: 25
					},
					end: {
						line: 310,
						column: 2
					}
				},
				line: 261
			},
			'23': {
				name: '(anonymous_23)',
				decl: {
					start: {
						line: 312,
						column: 1
					},
					end: {
						line: 312,
						column: 2
					}
				},
				loc: {
					start: {
						line: 312,
						column: 13
					},
					end: {
						line: 322,
						column: 2
					}
				},
				line: 312
			},
			'24': {
				name: '(anonymous_24)',
				decl: {
					start: {
						line: 314,
						column: 48
					},
					end: {
						line: 314,
						column: 49
					}
				},
				loc: {
					start: {
						line: 314,
						column: 60
					},
					end: {
						line: 321,
						column: 3
					}
				},
				line: 314
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 11,
						column: 16
					},
					end: {
						line: 11,
						column: 34
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 11,
						column: 16
					},
					end: {
						line: 11,
						column: 29
					}
				}, {
					start: {
						line: 11,
						column: 33
					},
					end: {
						line: 11,
						column: 34
					}
				}],
				line: 11
			},
			'1': {
				loc: {
					start: {
						line: 29,
						column: 2
					},
					end: {
						line: 40,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 29,
						column: 2
					},
					end: {
						line: 40,
						column: 3
					}
				}, {
					start: {
						line: 29,
						column: 2
					},
					end: {
						line: 40,
						column: 3
					}
				}],
				line: 29
			},
			'2': {
				loc: {
					start: {
						line: 29,
						column: 6
					},
					end: {
						line: 29,
						column: 64
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 29,
						column: 6
					},
					end: {
						line: 29,
						column: 33
					}
				}, {
					start: {
						line: 29,
						column: 37
					},
					end: {
						line: 29,
						column: 64
					}
				}],
				line: 29
			},
			'3': {
				loc: {
					start: {
						line: 31,
						column: 9
					},
					end: {
						line: 40,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 31,
						column: 9
					},
					end: {
						line: 40,
						column: 3
					}
				}, {
					start: {
						line: 31,
						column: 9
					},
					end: {
						line: 40,
						column: 3
					}
				}],
				line: 31
			},
			'4': {
				loc: {
					start: {
						line: 35,
						column: 4
					},
					end: {
						line: 38,
						column: 5
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 35,
						column: 4
					},
					end: {
						line: 38,
						column: 5
					}
				}, {
					start: {
						line: 35,
						column: 4
					},
					end: {
						line: 38,
						column: 5
					}
				}],
				line: 35
			},
			'5': {
				loc: {
					start: {
						line: 44,
						column: 2
					},
					end: {
						line: 46,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 44,
						column: 2
					},
					end: {
						line: 46,
						column: 3
					}
				}, {
					start: {
						line: 44,
						column: 2
					},
					end: {
						line: 46,
						column: 3
					}
				}],
				line: 44
			},
			'6': {
				loc: {
					start: {
						line: 61,
						column: 2
					},
					end: {
						line: 247,
						column: 3
					}
				},
				type: 'switch',
				locations: [{
					start: {
						line: 62,
						column: 3
					},
					end: {
						line: 71,
						column: 4
					}
				}, {
					start: {
						line: 72,
						column: 3
					},
					end: {
						line: 103,
						column: 4
					}
				}, {
					start: {
						line: 104,
						column: 3
					},
					end: {
						line: 135,
						column: 4
					}
				}, {
					start: {
						line: 136,
						column: 3
					},
					end: {
						line: 171,
						column: 4
					}
				}, {
					start: {
						line: 172,
						column: 3
					},
					end: {
						line: 214,
						column: 4
					}
				}, {
					start: {
						line: 215,
						column: 3
					},
					end: {
						line: 246,
						column: 4
					}
				}],
				line: 61
			},
			'7': {
				loc: {
					start: {
						line: 75,
						column: 5
					},
					end: {
						line: 77,
						column: 6
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 75,
						column: 5
					},
					end: {
						line: 77,
						column: 6
					}
				}, {
					start: {
						line: 75,
						column: 5
					},
					end: {
						line: 77,
						column: 6
					}
				}],
				line: 75
			},
			'8': {
				loc: {
					start: {
						line: 78,
						column: 5
					},
					end: {
						line: 100,
						column: 6
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 78,
						column: 5
					},
					end: {
						line: 100,
						column: 6
					}
				}, {
					start: {
						line: 78,
						column: 5
					},
					end: {
						line: 100,
						column: 6
					}
				}],
				line: 78
			},
			'9': {
				loc: {
					start: {
						line: 107,
						column: 5
					},
					end: {
						line: 124,
						column: 6
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 107,
						column: 5
					},
					end: {
						line: 124,
						column: 6
					}
				}, {
					start: {
						line: 107,
						column: 5
					},
					end: {
						line: 124,
						column: 6
					}
				}],
				line: 107
			},
			'10': {
				loc: {
					start: {
						line: 107,
						column: 9
					},
					end: {
						line: 107,
						column: 65
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 107,
						column: 9
					},
					end: {
						line: 107,
						column: 27
					}
				}, {
					start: {
						line: 107,
						column: 31
					},
					end: {
						line: 107,
						column: 65
					}
				}],
				line: 107
			},
			'11': {
				loc: {
					start: {
						line: 117,
						column: 44
					},
					end: {
						line: 117,
						column: 68
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 117,
						column: 59
					},
					end: {
						line: 117,
						column: 60
					}
				}, {
					start: {
						line: 117,
						column: 63
					},
					end: {
						line: 117,
						column: 68
					}
				}],
				line: 117
			},
			'12': {
				loc: {
					start: {
						line: 127,
						column: 5
					},
					end: {
						line: 132,
						column: 6
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 127,
						column: 5
					},
					end: {
						line: 132,
						column: 6
					}
				}, {
					start: {
						line: 127,
						column: 5
					},
					end: {
						line: 132,
						column: 6
					}
				}],
				line: 127
			},
			'13': {
				loc: {
					start: {
						line: 141,
						column: 4
					},
					end: {
						line: 159,
						column: 5
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 141,
						column: 4
					},
					end: {
						line: 159,
						column: 5
					}
				}, {
					start: {
						line: 141,
						column: 4
					},
					end: {
						line: 159,
						column: 5
					}
				}],
				line: 141
			},
			'14': {
				loc: {
					start: {
						line: 153,
						column: 42
					},
					end: {
						line: 153,
						column: 66
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 153,
						column: 57
					},
					end: {
						line: 153,
						column: 58
					}
				}, {
					start: {
						line: 153,
						column: 61
					},
					end: {
						line: 153,
						column: 66
					}
				}],
				line: 153
			},
			'15': {
				loc: {
					start: {
						line: 163,
						column: 5
					},
					end: {
						line: 168,
						column: 6
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 163,
						column: 5
					},
					end: {
						line: 168,
						column: 6
					}
				}, {
					start: {
						line: 163,
						column: 5
					},
					end: {
						line: 168,
						column: 6
					}
				}],
				line: 163
			},
			'16': {
				loc: {
					start: {
						line: 181,
						column: 4
					},
					end: {
						line: 202,
						column: 5
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 181,
						column: 4
					},
					end: {
						line: 202,
						column: 5
					}
				}, {
					start: {
						line: 181,
						column: 4
					},
					end: {
						line: 202,
						column: 5
					}
				}],
				line: 181
			},
			'17': {
				loc: {
					start: {
						line: 195,
						column: 39
					},
					end: {
						line: 195,
						column: 63
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 195,
						column: 54
					},
					end: {
						line: 195,
						column: 55
					}
				}, {
					start: {
						line: 195,
						column: 58
					},
					end: {
						line: 195,
						column: 63
					}
				}],
				line: 195
			},
			'18': {
				loc: {
					start: {
						line: 206,
						column: 5
					},
					end: {
						line: 211,
						column: 6
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 206,
						column: 5
					},
					end: {
						line: 211,
						column: 6
					}
				}, {
					start: {
						line: 206,
						column: 5
					},
					end: {
						line: 211,
						column: 6
					}
				}],
				line: 206
			},
			'19': {
				loc: {
					start: {
						line: 217,
						column: 5
					},
					end: {
						line: 219,
						column: 6
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 217,
						column: 5
					},
					end: {
						line: 219,
						column: 6
					}
				}, {
					start: {
						line: 217,
						column: 5
					},
					end: {
						line: 219,
						column: 6
					}
				}],
				line: 217
			},
			'20': {
				loc: {
					start: {
						line: 221,
						column: 5
					},
					end: {
						line: 243,
						column: 6
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 221,
						column: 5
					},
					end: {
						line: 243,
						column: 6
					}
				}, {
					start: {
						line: 221,
						column: 5
					},
					end: {
						line: 243,
						column: 6
					}
				}],
				line: 221
			},
			'21': {
				loc: {
					start: {
						line: 262,
						column: 2
					},
					end: {
						line: 270,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 262,
						column: 2
					},
					end: {
						line: 270,
						column: 3
					}
				}, {
					start: {
						line: 262,
						column: 2
					},
					end: {
						line: 270,
						column: 3
					}
				}],
				line: 262
			},
			'22': {
				loc: {
					start: {
						line: 263,
						column: 3
					},
					end: {
						line: 265,
						column: 37
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 263,
						column: 3
					},
					end: {
						line: 263,
						column: 25
					}
				}, {
					start: {
						line: 264,
						column: 3
					},
					end: {
						line: 264,
						column: 35
					}
				}, {
					start: {
						line: 265,
						column: 3
					},
					end: {
						line: 265,
						column: 37
					}
				}],
				line: 263
			},
			'23': {
				loc: {
					start: {
						line: 272,
						column: 2
					},
					end: {
						line: 309,
						column: 3
					}
				},
				type: 'switch',
				locations: [{
					start: {
						line: 273,
						column: 3
					},
					end: {
						line: 281,
						column: 10
					}
				}, {
					start: {
						line: 282,
						column: 3
					},
					end: {
						line: 290,
						column: 10
					}
				}, {
					start: {
						line: 291,
						column: 3
					},
					end: {
						line: 299,
						column: 10
					}
				}, {
					start: {
						line: 300,
						column: 3
					},
					end: {
						line: 308,
						column: 10
					}
				}],
				line: 272
			},
			'24': {
				loc: {
					start: {
						line: 274,
						column: 4
					},
					end: {
						line: 280,
						column: 5
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 274,
						column: 4
					},
					end: {
						line: 280,
						column: 5
					}
				}, {
					start: {
						line: 274,
						column: 4
					},
					end: {
						line: 280,
						column: 5
					}
				}],
				line: 274
			},
			'25': {
				loc: {
					start: {
						line: 283,
						column: 4
					},
					end: {
						line: 289,
						column: 5
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 283,
						column: 4
					},
					end: {
						line: 289,
						column: 5
					}
				}, {
					start: {
						line: 283,
						column: 4
					},
					end: {
						line: 289,
						column: 5
					}
				}],
				line: 283
			},
			'26': {
				loc: {
					start: {
						line: 292,
						column: 4
					},
					end: {
						line: 298,
						column: 5
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 292,
						column: 4
					},
					end: {
						line: 298,
						column: 5
					}
				}, {
					start: {
						line: 292,
						column: 4
					},
					end: {
						line: 298,
						column: 5
					}
				}],
				line: 292
			},
			'27': {
				loc: {
					start: {
						line: 301,
						column: 4
					},
					end: {
						line: 307,
						column: 5
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 301,
						column: 4
					},
					end: {
						line: 307,
						column: 5
					}
				}, {
					start: {
						line: 301,
						column: 4
					},
					end: {
						line: 307,
						column: 5
					}
				}],
				line: 301
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0,
			'33': 0,
			'34': 0,
			'35': 0,
			'36': 0,
			'37': 0,
			'38': 0,
			'39': 0,
			'40': 0,
			'41': 0,
			'42': 0,
			'43': 0,
			'44': 0,
			'45': 0,
			'46': 0,
			'47': 0,
			'48': 0,
			'49': 0,
			'50': 0,
			'51': 0,
			'52': 0,
			'53': 0,
			'54': 0,
			'55': 0,
			'56': 0,
			'57': 0,
			'58': 0,
			'59': 0,
			'60': 0,
			'61': 0,
			'62': 0,
			'63': 0,
			'64': 0,
			'65': 0,
			'66': 0,
			'67': 0,
			'68': 0,
			'69': 0,
			'70': 0,
			'71': 0,
			'72': 0,
			'73': 0,
			'74': 0,
			'75': 0,
			'76': 0,
			'77': 0,
			'78': 0,
			'79': 0,
			'80': 0,
			'81': 0,
			'82': 0,
			'83': 0,
			'84': 0,
			'85': 0,
			'86': 0,
			'87': 0,
			'88': 0,
			'89': 0,
			'90': 0,
			'91': 0,
			'92': 0,
			'93': 0,
			'94': 0,
			'95': 0,
			'96': 0,
			'97': 0,
			'98': 0,
			'99': 0,
			'100': 0,
			'101': 0,
			'102': 0,
			'103': 0,
			'104': 0,
			'105': 0,
			'106': 0,
			'107': 0,
			'108': 0,
			'109': 0,
			'110': 0,
			'111': 0,
			'112': 0,
			'113': 0,
			'114': 0,
			'115': 0,
			'116': 0,
			'117': 0,
			'118': 0,
			'119': 0,
			'120': 0,
			'121': 0,
			'122': 0,
			'123': 0,
			'124': 0,
			'125': 0,
			'126': 0,
			'127': 0,
			'128': 0,
			'129': 0,
			'130': 0,
			'131': 0,
			'132': 0,
			'133': 0,
			'134': 0,
			'135': 0,
			'136': 0,
			'137': 0,
			'138': 0,
			'139': 0,
			'140': 0,
			'141': 0,
			'142': 0,
			'143': 0,
			'144': 0,
			'145': 0,
			'146': 0,
			'147': 0,
			'148': 0,
			'149': 0,
			'150': 0,
			'151': 0,
			'152': 0,
			'153': 0,
			'154': 0,
			'155': 0,
			'156': 0,
			'157': 0,
			'158': 0,
			'159': 0,
			'160': 0,
			'161': 0,
			'162': 0,
			'163': 0,
			'164': 0,
			'165': 0,
			'166': 0,
			'167': 0,
			'168': 0,
			'169': 0,
			'170': 0,
			'171': 0,
			'172': 0,
			'173': 0,
			'174': 0,
			'175': 0,
			'176': 0,
			'177': 0,
			'178': 0,
			'179': 0,
			'180': 0,
			'181': 0,
			'182': 0,
			'183': 0,
			'184': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0],
			'4': [0, 0],
			'5': [0, 0],
			'6': [0, 0, 0, 0, 0, 0],
			'7': [0, 0],
			'8': [0, 0],
			'9': [0, 0],
			'10': [0, 0],
			'11': [0, 0],
			'12': [0, 0],
			'13': [0, 0],
			'14': [0, 0],
			'15': [0, 0],
			'16': [0, 0],
			'17': [0, 0],
			'18': [0, 0],
			'19': [0, 0],
			'20': [0, 0],
			'21': [0, 0],
			'22': [0, 0, 0],
			'23': [0, 0, 0, 0],
			'24': [0, 0],
			'25': [0, 0],
			'26': [0, 0],
			'27': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

const EventEmitter = (cov_1z4y9sbun.s[0]++, __webpack_require__(14));
const Data = (cov_1z4y9sbun.s[1]++, __webpack_require__(8));
const PassEvent = (cov_1z4y9sbun.s[2]++, __webpack_require__(44));

let Block = function (_EventEmitter) {
	_inherits(Block, _EventEmitter);

	function Block(board, config) {
		_classCallCheck(this, Block);

		cov_1z4y9sbun.f[0]++;
		cov_1z4y9sbun.s[3]++;

		var _this = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this));

		cov_1z4y9sbun.s[4]++;

		_this.board = board;
		cov_1z4y9sbun.s[5]++;
		_this.x = config.x;
		cov_1z4y9sbun.s[6]++;
		_this.y = config.y;
		cov_1z4y9sbun.s[7]++;
		_this.rotate = (cov_1z4y9sbun.b[0][0]++, config.rotate) || (cov_1z4y9sbun.b[0][1]++, 0);
		cov_1z4y9sbun.s[8]++;
		_this.name = config.name;
		cov_1z4y9sbun.s[9]++;
		_this.config = config;
		cov_1z4y9sbun.s[10]++;
		_this.inputExists = false; // indicates whether self has input
		cov_1z4y9sbun.s[11]++;
		_this.outputExists = false; // indicates whether self has anything as output now
		cov_1z4y9sbun.s[12]++;
		_this.inputQueues = new Map([['top', []], ['left', []], ['right', []], ['bottom', []]]);

		cov_1z4y9sbun.s[13]++;
		_this.outputQueues = new Map([['top', []], ['left', []], ['right', []], ['bottom', []]]);
		cov_1z4y9sbun.s[14]++;
		if ((cov_1z4y9sbun.b[2][0]++, _this.config.type === 'wire') || (cov_1z4y9sbun.b[2][1]++, _this.config.type === 'calc')) {
			cov_1z4y9sbun.b[1][0]++;
			cov_1z4y9sbun.s[15]++;

			_this.rotatedPlugs = _this.config.io.plugs.map(direction => {
				cov_1z4y9sbun.f[1]++;
				cov_1z4y9sbun.s[16]++;
				return _this.rotatedDirection(direction);
			});
		} else {
				cov_1z4y9sbun.b[1][1]++;
				cov_1z4y9sbun.s[17]++;
				if (_this.config.type === 'wireF') {
					cov_1z4y9sbun.b[3][0]++;
					cov_1z4y9sbun.s[18]++;

					_this.rotatedFlow = {};
					const directions = (cov_1z4y9sbun.s[19]++, ['top', 'right', 'bottom', 'left']);
					cov_1z4y9sbun.s[20]++;
					directions.forEach(from => {
						cov_1z4y9sbun.f[2]++;
						cov_1z4y9sbun.s[21]++;

						if (_this.config.io.flow[from]) {
							cov_1z4y9sbun.b[4][0]++;
							cov_1z4y9sbun.s[22]++;

							_this.rotatedFlow[_this.rotatedDirection(from)] = _this.config.io.flow[from].map(to => {
								cov_1z4y9sbun.f[3]++;
								cov_1z4y9sbun.s[23]++;
								return _this.rotatedDirection(to);
							});
						} else {
							cov_1z4y9sbun.b[4][1]++;
						}
					});
				} else {
					cov_1z4y9sbun.b[3][1]++;
				}
			}return _this;
	}

	_createClass(Block, [{
		key: 'rotatedDirection',
		value: function rotatedDirection(direction) {
			cov_1z4y9sbun.f[4]++;
			cov_1z4y9sbun.s[24]++;

			if (!this.config.rotatable) {
				cov_1z4y9sbun.b[5][0]++;
				cov_1z4y9sbun.s[25]++;

				return direction;
			} else {
				cov_1z4y9sbun.b[5][1]++;
			}

			const directions = (cov_1z4y9sbun.s[26]++, ['top', 'right', 'bottom', 'left']);
			cov_1z4y9sbun.s[27]++;
			return directions[(directions.indexOf(direction) + this.rotate) % 4];
		}
	}, {
		key: 'input',
		value: function input(position, data) {
			cov_1z4y9sbun.f[5]++;
			cov_1z4y9sbun.s[28]++;

			this.inputExists = true;
			cov_1z4y9sbun.s[29]++;
			this.inputQueues.get(position).push(data);
			cov_1z4y9sbun.s[30]++;
			this.emit('get', { direction: position, data });
		}
	}, {
		key: 'step',
		value: function step() {
			cov_1z4y9sbun.f[6]++;
			cov_1z4y9sbun.s[31]++;

			this.inputExists = false;

			cov_1z4y9sbun.s[32]++;
			switch (this.config.type) {
				case 'empty':
					cov_1z4y9sbun.b[6][0]++;
					{
						cov_1z4y9sbun.s[33]++;

						// Erase all data passed to the empty block
						for (const queue of this.inputQueues.values()) {
							cov_1z4y9sbun.s[34]++;

							while (queue.length) {
								const data = (cov_1z4y9sbun.s[35]++, queue.shift());
								cov_1z4y9sbun.s[36]++;
								this.emit('erase', data);
							}
						}
						cov_1z4y9sbun.s[37]++;
						break;
					}
				case 'wire':
					cov_1z4y9sbun.b[6][1]++;
					{
						cov_1z4y9sbun.s[38]++;

						for (const [source, queue] of this.inputQueues.entries()) {
							cov_1z4y9sbun.s[39]++;

							// When data exists in pluged direction
							if (queue.length === 0) {
								cov_1z4y9sbun.b[7][0]++;
								cov_1z4y9sbun.s[40]++;

								continue;
							} else {
								cov_1z4y9sbun.b[7][1]++;
							}
							cov_1z4y9sbun.s[41]++;
							if (this.rotatedPlugs.includes(source)) {
								cov_1z4y9sbun.b[8][0]++;

								const destinations = (cov_1z4y9sbun.s[42]++, this.rotatedPlugs.filter(direction => {
									cov_1z4y9sbun.f[7]++;
									cov_1z4y9sbun.s[43]++;
									return direction !== source;
								}));
								const data = (cov_1z4y9sbun.s[44]++, queue.shift());

								// pass through
								const input = (cov_1z4y9sbun.s[45]++, new Map([[source, data]]));

								const output = (cov_1z4y9sbun.s[46]++, new Map());
								cov_1z4y9sbun.s[47]++;
								destinations.forEach(direction => {
									cov_1z4y9sbun.f[8]++;

									const outData = (cov_1z4y9sbun.s[48]++, new Data(this.board, data.value));
									cov_1z4y9sbun.s[49]++;
									this.outputQueues.get(direction).push(outData);
									cov_1z4y9sbun.s[50]++;
									output.set(direction, outData);
								});

								cov_1z4y9sbun.s[51]++;
								this.emit('pass', new PassEvent({ in: input, out: output }));
								cov_1z4y9sbun.s[52]++;
								this.outputExists = true;
							} else {
								cov_1z4y9sbun.b[8][1]++;
								cov_1z4y9sbun.s[53]++;

								// Erase data when data exists in non-pluged direction
								while (queue.length) {
									const data = (cov_1z4y9sbun.s[54]++, queue.shift());
									cov_1z4y9sbun.s[55]++;
									this.emit('erase', data);
								}
							}
						}
						cov_1z4y9sbun.s[56]++;
						break;
					}
				case 'calc':
					cov_1z4y9sbun.b[6][2]++;
					{
						cov_1z4y9sbun.s[57]++;

						for (const [source, queue] of this.inputQueues.entries()) {
							cov_1z4y9sbun.s[58]++;

							// When data exists in pluged direction
							if ((cov_1z4y9sbun.b[10][0]++, queue.length !== 0) && (cov_1z4y9sbun.b[10][1]++, this.rotatedPlugs.includes(source))) {
								cov_1z4y9sbun.b[9][0]++;

								const destinations = (cov_1z4y9sbun.s[59]++, this.rotatedPlugs.filter(direction => {
									cov_1z4y9sbun.f[9]++;
									cov_1z4y9sbun.s[60]++;
									return direction !== source;
								}));
								const data = (cov_1z4y9sbun.s[61]++, queue.shift());

								// Calculate and pass through
								const input = (cov_1z4y9sbun.s[62]++, new Map([[source, data]]));

								const output = (cov_1z4y9sbun.s[63]++, new Map());
								cov_1z4y9sbun.s[64]++;
								destinations.forEach(direction => {
									cov_1z4y9sbun.f[10]++;

									const value = (cov_1z4y9sbun.s[65]++, this.config.func(data.value));
									const outData = (cov_1z4y9sbun.s[66]++, new Data(this.board, isNaN(value) ? (cov_1z4y9sbun.b[11][0]++, 0) : (cov_1z4y9sbun.b[11][1]++, value)));
									cov_1z4y9sbun.s[67]++;
									this.outputQueues.get(direction).push(outData);
									cov_1z4y9sbun.s[68]++;
									output.set(direction, outData);
								});

								cov_1z4y9sbun.s[69]++;
								this.emit('pass', new PassEvent({ in: input, out: output }));
								cov_1z4y9sbun.s[70]++;
								this.outputExists = true;
							} else {
								cov_1z4y9sbun.b[9][1]++;
							}

							// Erase data when data exists in non-pluged direction
							cov_1z4y9sbun.s[71]++;
							if (!this.rotatedPlugs.includes(source)) {
								cov_1z4y9sbun.b[12][0]++;
								cov_1z4y9sbun.s[72]++;

								while (queue.length) {
									const data = (cov_1z4y9sbun.s[73]++, queue.shift());
									cov_1z4y9sbun.s[74]++;
									this.emit('erase', data);
								}
							} else {
								cov_1z4y9sbun.b[12][1]++;
							}
						}
						cov_1z4y9sbun.s[75]++;
						break;
					}
				case 'calc2':
					cov_1z4y9sbun.b[6][3]++;
					{
						const sources = (cov_1z4y9sbun.s[76]++, this.config.io.in.map(direction => {
							cov_1z4y9sbun.f[11]++;
							cov_1z4y9sbun.s[77]++;
							return this.rotatedDirection(direction);
						}));
						const destination = (cov_1z4y9sbun.s[78]++, this.rotatedDirection(this.config.io.out));

						// Execute calculation when all inputs are satisfied
						cov_1z4y9sbun.s[79]++;
						if (sources.every(source => {
							cov_1z4y9sbun.f[12]++;
							cov_1z4y9sbun.s[80]++;
							return this.inputQueues.get(source).length > 0;
						})) {
							cov_1z4y9sbun.b[13][0]++;

							const datas = (cov_1z4y9sbun.s[81]++, []);

							// Calculate and pass through
							const input = (cov_1z4y9sbun.s[82]++, new Map());
							cov_1z4y9sbun.s[83]++;
							sources.forEach(source => {
								cov_1z4y9sbun.f[13]++;

								const data = (cov_1z4y9sbun.s[84]++, this.inputQueues.get(source).shift());
								cov_1z4y9sbun.s[85]++;
								input.set(source, data);
								cov_1z4y9sbun.s[86]++;
								datas.push(data);
							});

							const value = (cov_1z4y9sbun.s[87]++, this.config.func(...datas.map(data => {
								cov_1z4y9sbun.f[14]++;
								cov_1z4y9sbun.s[88]++;
								return data.value;
							})));
							const outData = (cov_1z4y9sbun.s[89]++, new Data(this.board, isNaN(value) ? (cov_1z4y9sbun.b[14][0]++, 0) : (cov_1z4y9sbun.b[14][1]++, value)));
							cov_1z4y9sbun.s[90]++;
							this.outputQueues.get(destination).push(outData);
							const output = (cov_1z4y9sbun.s[91]++, new Map([[destination, outData]]));

							cov_1z4y9sbun.s[92]++;
							this.emit('pass', new PassEvent({ in: input, out: output }));
							cov_1z4y9sbun.s[93]++;
							this.outputExists = true;
						} else {
							cov_1z4y9sbun.b[13][1]++;
						}

						// Erase data when data exists in non-pluged direction
						cov_1z4y9sbun.s[94]++;
						for (const [source, queue] of this.inputQueues.entries()) {
							cov_1z4y9sbun.s[95]++;

							if (!sources.includes(source)) {
								cov_1z4y9sbun.b[15][0]++;
								cov_1z4y9sbun.s[96]++;

								while (queue.length) {
									const data = (cov_1z4y9sbun.s[97]++, queue.shift());
									cov_1z4y9sbun.s[98]++;
									this.emit('erase', data);
								}
							} else {
								cov_1z4y9sbun.b[15][1]++;
							}
						}
						cov_1z4y9sbun.s[99]++;
						break;
					}
				case 'calc-switch':
					cov_1z4y9sbun.b[6][4]++;
					{
						const sources = (cov_1z4y9sbun.s[100]++, this.config.io.in.map(direction => {
							cov_1z4y9sbun.f[15]++;
							cov_1z4y9sbun.s[101]++;
							return this.rotatedDirection(direction);
						}));
						const destinations = (cov_1z4y9sbun.s[102]++, this.config.io.out.map(direction => {
							cov_1z4y9sbun.f[16]++;
							cov_1z4y9sbun.s[103]++;
							return this.rotatedDirection(direction);
						}));

						// Execute calculation when all inputs are satisfied
						cov_1z4y9sbun.s[104]++;
						if (sources.every(source => {
							cov_1z4y9sbun.f[17]++;
							cov_1z4y9sbun.s[105]++;
							return this.inputQueues.get(source).length > 0;
						})) {
							cov_1z4y9sbun.b[16][0]++;

							const datas = (cov_1z4y9sbun.s[106]++, []);

							// Calculate and pass through
							const input = (cov_1z4y9sbun.s[107]++, new Map());
							cov_1z4y9sbun.s[108]++;
							sources.forEach(source => {
								cov_1z4y9sbun.f[18]++;

								const data = (cov_1z4y9sbun.s[109]++, this.inputQueues.get(source).shift());
								cov_1z4y9sbun.s[110]++;
								input.set(source, data);
								cov_1z4y9sbun.s[111]++;
								datas.push(data);
							});

							const values = (cov_1z4y9sbun.s[112]++, datas.map(data => {
								cov_1z4y9sbun.f[19]++;
								cov_1z4y9sbun.s[113]++;
								return data.value;
							}));
							const { directionIndex, value } = (cov_1z4y9sbun.s[114]++, this.config.func(...values));

							const data = (cov_1z4y9sbun.s[115]++, new Data(this.board, isNaN(value) ? (cov_1z4y9sbun.b[17][0]++, 0) : (cov_1z4y9sbun.b[17][1]++, value)));
							const destination = (cov_1z4y9sbun.s[116]++, destinations[directionIndex]);
							cov_1z4y9sbun.s[117]++;
							this.outputQueues.get(destination).push(data);
							const output = (cov_1z4y9sbun.s[118]++, new Map([[destination, data]]));

							cov_1z4y9sbun.s[119]++;
							this.emit('pass', new PassEvent({ in: input, out: output }));
							cov_1z4y9sbun.s[120]++;
							this.outputExists = true;
						} else {
							cov_1z4y9sbun.b[16][1]++;
						}

						// Erase data when data exists in non-pluged direction
						cov_1z4y9sbun.s[121]++;
						for (const [source, queue] of this.inputQueues.entries()) {
							cov_1z4y9sbun.s[122]++;

							if (!sources.includes(source)) {
								cov_1z4y9sbun.b[18][0]++;
								cov_1z4y9sbun.s[123]++;

								while (queue.length) {
									const data = (cov_1z4y9sbun.s[124]++, queue.shift());
									cov_1z4y9sbun.s[125]++;
									this.emit('erase', data);
								}
							} else {
								cov_1z4y9sbun.b[18][1]++;
							}
						}
						cov_1z4y9sbun.s[126]++;
						break;
					}
				case 'wireF':
					cov_1z4y9sbun.b[6][5]++;
					{
						cov_1z4y9sbun.s[127]++;

						for (const [source, queue] of this.inputQueues.entries()) {
							cov_1z4y9sbun.s[128]++;

							if (queue.length === 0) {
								cov_1z4y9sbun.b[19][0]++;
								cov_1z4y9sbun.s[129]++;

								continue;
							} else {
								cov_1z4y9sbun.b[19][1]++;
							}

							cov_1z4y9sbun.s[130]++;
							if (this.rotatedFlow[source]) {
								cov_1z4y9sbun.b[20][0]++;

								// When data exists in the starting direction of some flow
								const destinations = (cov_1z4y9sbun.s[131]++, this.rotatedFlow[source]);
								const data = (cov_1z4y9sbun.s[132]++, queue.shift());

								const input = (cov_1z4y9sbun.s[133]++, new Map([[source, data]]));
								const output = (cov_1z4y9sbun.s[134]++, new Map());

								cov_1z4y9sbun.s[135]++;
								destinations.forEach(direction => {
									cov_1z4y9sbun.f[20]++;

									const outData = (cov_1z4y9sbun.s[136]++, new Data(this.board, data.value));
									cov_1z4y9sbun.s[137]++;
									this.outputQueues.get(direction).push(outData);
									cov_1z4y9sbun.s[138]++;
									output.set(direction, outData);
								});

								cov_1z4y9sbun.s[139]++;
								this.emit('pass', new PassEvent({ in: input, out: output }));
								cov_1z4y9sbun.s[140]++;
								this.outputExists = true;
							} else {
								cov_1z4y9sbun.b[20][1]++;
								cov_1z4y9sbun.s[141]++;

								// Erase data otherwise
								while (queue.length) {
									const data = (cov_1z4y9sbun.s[142]++, queue.shift());
									cov_1z4y9sbun.s[143]++;
									this.emit('erase', data);
								}
							}
						}
						cov_1z4y9sbun.s[144]++;
						break;
					}
			}
		}
	}, {
		key: 'hand',
		value: function hand() {
			cov_1z4y9sbun.f[21]++;
			cov_1z4y9sbun.s[145]++;

			this.outputExists = false;

			cov_1z4y9sbun.s[146]++;
			for (const [direction, queue] of this.outputQueues.entries()) {
				cov_1z4y9sbun.s[147]++;

				while (queue.length) {
					const data = (cov_1z4y9sbun.s[148]++, queue.shift());
					cov_1z4y9sbun.s[149]++;
					this.handTo(direction, data);
				}
			}
		}
	}, {
		key: 'handTo',
		value: function handTo(direction, data) {
			cov_1z4y9sbun.f[22]++;
			cov_1z4y9sbun.s[150]++;

			if ((cov_1z4y9sbun.b[22][0]++, direction === 'bottom') && (cov_1z4y9sbun.b[22][1]++, this.y + 1 === this.board.height) && (cov_1z4y9sbun.b[22][2]++, this.x === this.board.outputBlockX)) {
				cov_1z4y9sbun.b[21][0]++;
				cov_1z4y9sbun.s[151]++;

				this.board.output(data.value);
				cov_1z4y9sbun.s[152]++;
				this.emit('erase', data);
				cov_1z4y9sbun.s[153]++;
				return;
			} else {
				cov_1z4y9sbun.b[21][1]++;
			}

			cov_1z4y9sbun.s[154]++;
			switch (direction) {
				case 'top':
					cov_1z4y9sbun.b[23][0]++;
					cov_1z4y9sbun.s[155]++;

					if (0 <= this.y - 1) {
						cov_1z4y9sbun.b[24][0]++;

						const nextBlock = (cov_1z4y9sbun.s[156]++, this.board.getBlock(this.x, this.y - 1));
						cov_1z4y9sbun.s[157]++;
						nextBlock.input('bottom', data);
						cov_1z4y9sbun.s[158]++;
						this.emit('hand', data);
					} else {
						cov_1z4y9sbun.b[24][1]++;
						cov_1z4y9sbun.s[159]++;

						this.emit('erase', data);
					}
					cov_1z4y9sbun.s[160]++;
					break;
				case 'bottom':
					cov_1z4y9sbun.b[23][1]++;
					cov_1z4y9sbun.s[161]++;

					if (this.board.height > this.y + 1) {
						cov_1z4y9sbun.b[25][0]++;

						const nextBlock = (cov_1z4y9sbun.s[162]++, this.board.getBlock(this.x, this.y + 1));
						cov_1z4y9sbun.s[163]++;
						nextBlock.input('top', data);
						cov_1z4y9sbun.s[164]++;
						this.emit('hand', data);
					} else {
						cov_1z4y9sbun.b[25][1]++;
						cov_1z4y9sbun.s[165]++;

						this.emit('erase', data);
					}
					cov_1z4y9sbun.s[166]++;
					break;
				case 'left':
					cov_1z4y9sbun.b[23][2]++;
					cov_1z4y9sbun.s[167]++;

					if (0 <= this.x - 1) {
						cov_1z4y9sbun.b[26][0]++;

						const nextBlock = (cov_1z4y9sbun.s[168]++, this.board.getBlock(this.x - 1, this.y));
						cov_1z4y9sbun.s[169]++;
						nextBlock.input('right', data);
						cov_1z4y9sbun.s[170]++;
						this.emit('hand', data);
					} else {
						cov_1z4y9sbun.b[26][1]++;
						cov_1z4y9sbun.s[171]++;

						this.emit('erase', data);
					}
					cov_1z4y9sbun.s[172]++;
					break;
				case 'right':
					cov_1z4y9sbun.b[23][3]++;
					cov_1z4y9sbun.s[173]++;

					if (this.board.width > this.x + 1) {
						cov_1z4y9sbun.b[27][0]++;

						const nextBlock = (cov_1z4y9sbun.s[174]++, this.board.getBlock(this.x + 1, this.y));
						cov_1z4y9sbun.s[175]++;
						nextBlock.input('left', data);
						cov_1z4y9sbun.s[176]++;
						this.emit('hand', data);
					} else {
						cov_1z4y9sbun.b[27][1]++;
						cov_1z4y9sbun.s[177]++;

						this.emit('erase', data);
					}
					cov_1z4y9sbun.s[178]++;
					break;
			}
		}
	}, {
		key: 'clearData',
		value: function clearData() {
			cov_1z4y9sbun.f[23]++;
			cov_1z4y9sbun.s[179]++;

			// Erase data when data exists in non-pluged direction
			[this.inputQueues, this.outputQueues].forEach(queues => {
				cov_1z4y9sbun.f[24]++;
				cov_1z4y9sbun.s[180]++;

				for (const queue of queues.values()) {
					cov_1z4y9sbun.s[181]++;

					while (queue.length) {
						const data = (cov_1z4y9sbun.s[182]++, queue.shift());
						cov_1z4y9sbun.s[183]++;
						this.emit('erase', data);
					}
				}
			});
		}
	}]);

	return Block;
}(EventEmitter);

cov_1z4y9sbun.s[184]++;


module.exports = Block;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_3nwn9tagi = function () {
	var path = "/home/travis/build/tsg-ut/mnemo/lib/data.js",
	    hash = "1bb7dc32a905023bdfeedb7244c4dd3a361e5889",
	    global = new Function('return this')(),
	    gcv = "__coverage__",
	    coverageData = {
		path: "/home/travis/build/tsg-ut/mnemo/lib/data.js",
		statementMap: {
			"0": {
				start: {
					line: 3,
					column: 2
				},
				end: {
					line: 3,
					column: 21
				}
			},
			"1": {
				start: {
					line: 4,
					column: 2
				},
				end: {
					line: 4,
					column: 21
				}
			},
			"2": {
				start: {
					line: 5,
					column: 2
				},
				end: {
					line: 5,
					column: 13
				}
			},
			"3": {
				start: {
					line: 6,
					column: 2
				},
				end: {
					line: 6,
					column: 13
				}
			},
			"4": {
				start: {
					line: 10,
					column: 0
				},
				end: {
					line: 10,
					column: 22
				}
			}
		},
		fnMap: {
			"0": {
				name: "(anonymous_0)",
				decl: {
					start: {
						line: 2,
						column: 1
					},
					end: {
						line: 2,
						column: 2
					}
				},
				loc: {
					start: {
						line: 2,
						column: 50
					},
					end: {
						line: 7,
						column: 2
					}
				},
				line: 2
			}
		},
		branchMap: {},
		s: {
			"0": 0,
			"1": 0,
			"2": 0,
			"3": 0,
			"4": 0
		},
		f: {
			"0": 0
		},
		b: {},
		_coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

let Data = function Data(board /* TODO: 消したい */, value, x, y) {
	_classCallCheck(this, Data);

	cov_3nwn9tagi.f[0]++;
	cov_3nwn9tagi.s[0]++;

	this.board = board;
	cov_3nwn9tagi.s[1]++;
	this.value = value;
	cov_3nwn9tagi.s[2]++;
	this.x = x;
	cov_3nwn9tagi.s[3]++;
	this.y = y;
};

cov_3nwn9tagi.s[4]++;


module.exports = Data;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("seedrandom");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2j2kn154i4 = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/lib/block-component.jsx',
	    hash = '0589caf9233ce8a5c661f8571a6d9323d80d21b2',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/lib/block-component.jsx',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 14
				},
				end: {
					line: 1,
					column: 30
				}
			},
			'1': {
				start: {
					line: 2,
					column: 18
				},
				end: {
					line: 2,
					column: 39
				}
			},
			'2': {
				start: {
					line: 3,
					column: 13
				},
				end: {
					line: 3,
					column: 30
				}
			},
			'3': {
				start: {
					line: 4,
					column: 21
				},
				end: {
					line: 4,
					column: 43
				}
			},
			'4': {
				start: {
					line: 5,
					column: 22
				},
				end: {
					line: 5,
					column: 53
				}
			},
			'5': {
				start: {
					line: 26,
					column: 2
				},
				end: {
					line: 26,
					column: 22
				}
			},
			'6': {
				start: {
					line: 28,
					column: 2
				},
				end: {
					line: 28,
					column: 46
				}
			},
			'7': {
				start: {
					line: 30,
					column: 2
				},
				end: {
					line: 38,
					column: 5
				}
			},
			'8': {
				start: {
					line: 31,
					column: 3
				},
				end: {
					line: 37,
					column: 6
				}
			},
			'9': {
				start: {
					line: 40,
					column: 2
				},
				end: {
					line: 103,
					column: 5
				}
			},
			'10': {
				start: {
					line: 41,
					column: 27
				},
				end: {
					line: 41,
					column: 29
				}
			},
			'11': {
				start: {
					line: 43,
					column: 3
				},
				end: {
					line: 58,
					column: 4
				}
			},
			'12': {
				start: {
					line: 45,
					column: 4
				},
				end: {
					line: 53,
					column: 7
				}
			},
			'13': {
				start: {
					line: 52,
					column: 59
				},
				end: {
					line: 52,
					column: 82
				}
			},
			'14': {
				start: {
					line: 55,
					column: 4
				},
				end: {
					line: 57,
					column: 8
				}
			},
			'15': {
				start: {
					line: 56,
					column: 5
				},
				end: {
					line: 56,
					column: 52
				}
			},
			'16': {
				start: {
					line: 60,
					column: 3
				},
				end: {
					line: 60,
					column: 38
				}
			},
			'17': {
				start: {
					line: 62,
					column: 28
				},
				end: {
					line: 62,
					column: 30
				}
			},
			'18': {
				start: {
					line: 64,
					column: 3
				},
				end: {
					line: 70,
					column: 4
				}
			},
			'19': {
				start: {
					line: 65,
					column: 4
				},
				end: {
					line: 69,
					column: 7
				}
			},
			'20': {
				start: {
					line: 67,
					column: 6
				},
				end: {
					line: 67,
					column: 33
				}
			},
			'21': {
				start: {
					line: 72,
					column: 3
				},
				end: {
					line: 85,
					column: 4
				}
			},
			'22': {
				start: {
					line: 73,
					column: 4
				},
				end: {
					line: 80,
					column: 7
				}
			},
			'23': {
				start: {
					line: 82,
					column: 4
				},
				end: {
					line: 84,
					column: 8
				}
			},
			'24': {
				start: {
					line: 83,
					column: 5
				},
				end: {
					line: 83,
					column: 52
				}
			},
			'25': {
				start: {
					line: 87,
					column: 3
				},
				end: {
					line: 87,
					column: 39
				}
			},
			'26': {
				start: {
					line: 89,
					column: 3
				},
				end: {
					line: 100,
					column: 4
				}
			},
			'27': {
				start: {
					line: 90,
					column: 4
				},
				end: {
					line: 99,
					column: 7
				}
			},
			'28': {
				start: {
					line: 92,
					column: 6
				},
				end: {
					line: 92,
					column: 33
				}
			},
			'29': {
				start: {
					line: 102,
					column: 3
				},
				end: {
					line: 102,
					column: 49
				}
			},
			'30': {
				start: {
					line: 105,
					column: 2
				},
				end: {
					line: 111,
					column: 5
				}
			},
			'31': {
				start: {
					line: 106,
					column: 3
				},
				end: {
					line: 110,
					column: 6
				}
			},
			'32': {
				start: {
					line: 108,
					column: 5
				},
				end: {
					line: 108,
					column: 29
				}
			},
			'33': {
				start: {
					line: 113,
					column: 2
				},
				end: {
					line: 137,
					column: 5
				}
			},
			'34': {
				start: {
					line: 114,
					column: 3
				},
				end: {
					line: 118,
					column: 6
				}
			},
			'35': {
				start: {
					line: 115,
					column: 4
				},
				end: {
					line: 117,
					column: 5
				}
			},
			'36': {
				start: {
					line: 116,
					column: 5
				},
				end: {
					line: 116,
					column: 32
				}
			},
			'37': {
				start: {
					line: 120,
					column: 3
				},
				end: {
					line: 124,
					column: 6
				}
			},
			'38': {
				start: {
					line: 121,
					column: 4
				},
				end: {
					line: 123,
					column: 5
				}
			},
			'39': {
				start: {
					line: 122,
					column: 5
				},
				end: {
					line: 122,
					column: 36
				}
			},
			'40': {
				start: {
					line: 126,
					column: 3
				},
				end: {
					line: 130,
					column: 6
				}
			},
			'41': {
				start: {
					line: 127,
					column: 4
				},
				end: {
					line: 129,
					column: 5
				}
			},
			'42': {
				start: {
					line: 128,
					column: 5
				},
				end: {
					line: 128,
					column: 33
				}
			},
			'43': {
				start: {
					line: 132,
					column: 3
				},
				end: {
					line: 136,
					column: 6
				}
			},
			'44': {
				start: {
					line: 139,
					column: 2
				},
				end: {
					line: 143,
					column: 4
				}
			},
			'45': {
				start: {
					line: 147,
					column: 2
				},
				end: {
					line: 149,
					column: 3
				}
			},
			'46': {
				start: {
					line: 148,
					column: 3
				},
				end: {
					line: 148,
					column: 21
				}
			},
			'47': {
				start: {
					line: 153,
					column: 2
				},
				end: {
					line: 157,
					column: 5
				}
			},
			'48': {
				start: {
					line: 154,
					column: 3
				},
				end: {
					line: 156,
					column: 6
				}
			},
			'49': {
				start: {
					line: 155,
					column: 4
				},
				end: {
					line: 155,
					column: 27
				}
			},
			'50': {
				start: {
					line: 159,
					column: 2
				},
				end: {
					line: 163,
					column: 5
				}
			},
			'51': {
				start: {
					line: 167,
					column: 2
				},
				end: {
					line: 169,
					column: 3
				}
			},
			'52': {
				start: {
					line: 168,
					column: 3
				},
				end: {
					line: 168,
					column: 43
				}
			},
			'53': {
				start: {
					line: 173,
					column: 2
				},
				end: {
					line: 177,
					column: 5
				}
			},
			'54': {
				start: {
					line: 174,
					column: 57
				},
				end: {
					line: 174,
					column: 80
				}
			},
			'55': {
				start: {
					line: 175,
					column: 69
				},
				end: {
					line: 175,
					column: 96
				}
			},
			'56': {
				start: {
					line: 176,
					column: 60
				},
				end: {
					line: 176,
					column: 84
				}
			},
			'57': {
				start: {
					line: 181,
					column: 2
				},
				end: {
					line: 181,
					column: 55
				}
			},
			'58': {
				start: {
					line: 185,
					column: 2
				},
				end: {
					line: 252,
					column: 4
				}
			},
			'59': {
				start: {
					line: 205,
					column: 7
				},
				end: {
					line: 217,
					column: 9
				}
			},
			'60': {
				start: {
					line: 220,
					column: 7
				},
				end: {
					line: 232,
					column: 9
				}
			},
			'61': {
				start: {
					line: 235,
					column: 7
				},
				end: {
					line: 247,
					column: 9
				}
			},
			'62': {
				start: {
					line: 256,
					column: 0
				},
				end: {
					line: 256,
					column: 32
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 25,
						column: 1
					},
					end: {
						line: 25,
						column: 2
					}
				},
				loc: {
					start: {
						line: 25,
						column: 27
					},
					end: {
						line: 144,
						column: 2
					}
				},
				line: 25
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 30,
						column: 29
					},
					end: {
						line: 30,
						column: 30
					}
				},
				loc: {
					start: {
						line: 30,
						column: 52
					},
					end: {
						line: 38,
						column: 3
					}
				},
				line: 30
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 40,
						column: 30
					},
					end: {
						line: 40,
						column: 31
					}
				},
				loc: {
					start: {
						line: 40,
						column: 51
					},
					end: {
						line: 103,
						column: 3
					}
				},
				line: 40
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 52,
						column: 44
					},
					end: {
						line: 52,
						column: 45
					}
				},
				loc: {
					start: {
						line: 52,
						column: 59
					},
					end: {
						line: 52,
						column: 82
					}
				},
				line: 52
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 55,
						column: 37
					},
					end: {
						line: 55,
						column: 38
					}
				},
				loc: {
					start: {
						line: 55,
						column: 50
					},
					end: {
						line: 57,
						column: 5
					}
				},
				line: 55
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 66,
						column: 52
					},
					end: {
						line: 66,
						column: 53
					}
				},
				loc: {
					start: {
						line: 67,
						column: 6
					},
					end: {
						line: 67,
						column: 33
					}
				},
				line: 67
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 82,
						column: 38
					},
					end: {
						line: 82,
						column: 39
					}
				},
				loc: {
					start: {
						line: 82,
						column: 51
					},
					end: {
						line: 84,
						column: 5
					}
				},
				line: 82
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 91,
						column: 52
					},
					end: {
						line: 91,
						column: 53
					}
				},
				loc: {
					start: {
						line: 92,
						column: 6
					},
					end: {
						line: 92,
						column: 33
					}
				},
				line: 92
			},
			'8': {
				name: '(anonymous_8)',
				decl: {
					start: {
						line: 105,
						column: 30
					},
					end: {
						line: 105,
						column: 31
					}
				},
				loc: {
					start: {
						line: 105,
						column: 40
					},
					end: {
						line: 111,
						column: 3
					}
				},
				line: 105
			},
			'9': {
				name: '(anonymous_9)',
				decl: {
					start: {
						line: 107,
						column: 45
					},
					end: {
						line: 107,
						column: 46
					}
				},
				loc: {
					start: {
						line: 108,
						column: 5
					},
					end: {
						line: 108,
						column: 29
					}
				},
				line: 108
			},
			'10': {
				name: '(anonymous_10)',
				decl: {
					start: {
						line: 113,
						column: 31
					},
					end: {
						line: 113,
						column: 32
					}
				},
				loc: {
					start: {
						line: 113,
						column: 41
					},
					end: {
						line: 137,
						column: 3
					}
				},
				line: 113
			},
			'11': {
				name: '(anonymous_11)',
				decl: {
					start: {
						line: 114,
						column: 32
					},
					end: {
						line: 114,
						column: 33
					}
				},
				loc: {
					start: {
						line: 114,
						column: 47
					},
					end: {
						line: 118,
						column: 4
					}
				},
				line: 114
			},
			'12': {
				name: '(anonymous_12)',
				decl: {
					start: {
						line: 120,
						column: 36
					},
					end: {
						line: 120,
						column: 37
					}
				},
				loc: {
					start: {
						line: 120,
						column: 55
					},
					end: {
						line: 124,
						column: 4
					}
				},
				line: 120
			},
			'13': {
				name: '(anonymous_13)',
				decl: {
					start: {
						line: 126,
						column: 33
					},
					end: {
						line: 126,
						column: 34
					}
				},
				loc: {
					start: {
						line: 126,
						column: 49
					},
					end: {
						line: 130,
						column: 4
					}
				},
				line: 126
			},
			'14': {
				name: '(anonymous_14)',
				decl: {
					start: {
						line: 146,
						column: 1
					},
					end: {
						line: 146,
						column: 2
					}
				},
				loc: {
					start: {
						line: 146,
						column: 38
					},
					end: {
						line: 150,
						column: 2
					}
				},
				line: 146
			},
			'15': {
				name: '(anonymous_15)',
				decl: {
					start: {
						line: 152,
						column: 1
					},
					end: {
						line: 152,
						column: 2
					}
				},
				loc: {
					start: {
						line: 152,
						column: 14
					},
					end: {
						line: 164,
						column: 2
					}
				},
				line: 152
			},
			'16': {
				name: '(anonymous_16)',
				decl: {
					start: {
						line: 153,
						column: 82
					},
					end: {
						line: 153,
						column: 83
					}
				},
				loc: {
					start: {
						line: 153,
						column: 92
					},
					end: {
						line: 157,
						column: 3
					}
				},
				line: 153
			},
			'17': {
				name: '(anonymous_17)',
				decl: {
					start: {
						line: 154,
						column: 16
					},
					end: {
						line: 154,
						column: 17
					}
				},
				loc: {
					start: {
						line: 154,
						column: 27
					},
					end: {
						line: 156,
						column: 4
					}
				},
				line: 154
			},
			'18': {
				name: '(anonymous_18)',
				decl: {
					start: {
						line: 166,
						column: 31
					},
					end: {
						line: 166,
						column: 32
					}
				},
				loc: {
					start: {
						line: 166,
						column: 41
					},
					end: {
						line: 170,
						column: 2
					}
				},
				line: 166
			},
			'19': {
				name: '(anonymous_19)',
				decl: {
					start: {
						line: 172,
						column: 36
					},
					end: {
						line: 172,
						column: 37
					}
				},
				loc: {
					start: {
						line: 172,
						column: 46
					},
					end: {
						line: 178,
						column: 2
					}
				},
				line: 172
			},
			'20': {
				name: '(anonymous_20)',
				decl: {
					start: {
						line: 174,
						column: 42
					},
					end: {
						line: 174,
						column: 43
					}
				},
				loc: {
					start: {
						line: 174,
						column: 57
					},
					end: {
						line: 174,
						column: 80
					}
				},
				line: 174
			},
			'21': {
				name: '(anonymous_21)',
				decl: {
					start: {
						line: 175,
						column: 50
					},
					end: {
						line: 175,
						column: 51
					}
				},
				loc: {
					start: {
						line: 175,
						column: 69
					},
					end: {
						line: 175,
						column: 96
					}
				},
				line: 175
			},
			'22': {
				name: '(anonymous_22)',
				decl: {
					start: {
						line: 176,
						column: 44
					},
					end: {
						line: 176,
						column: 45
					}
				},
				loc: {
					start: {
						line: 176,
						column: 60
					},
					end: {
						line: 176,
						column: 84
					}
				},
				line: 176
			},
			'23': {
				name: '(anonymous_23)',
				decl: {
					start: {
						line: 180,
						column: 15
					},
					end: {
						line: 180,
						column: 16
					}
				},
				loc: {
					start: {
						line: 181,
						column: 2
					},
					end: {
						line: 181,
						column: 55
					}
				},
				line: 181
			},
			'24': {
				name: '(anonymous_24)',
				decl: {
					start: {
						line: 184,
						column: 1
					},
					end: {
						line: 184,
						column: 2
					}
				},
				loc: {
					start: {
						line: 184,
						column: 10
					},
					end: {
						line: 253,
						column: 2
					}
				},
				line: 184
			},
			'25': {
				name: '(anonymous_25)',
				decl: {
					start: {
						line: 204,
						column: 35
					},
					end: {
						line: 204,
						column: 36
					}
				},
				loc: {
					start: {
						line: 205,
						column: 7
					},
					end: {
						line: 217,
						column: 9
					}
				},
				line: 205
			},
			'26': {
				name: '(anonymous_26)',
				decl: {
					start: {
						line: 219,
						column: 39
					},
					end: {
						line: 219,
						column: 40
					}
				},
				loc: {
					start: {
						line: 220,
						column: 7
					},
					end: {
						line: 232,
						column: 9
					}
				},
				line: 220
			},
			'27': {
				name: '(anonymous_27)',
				decl: {
					start: {
						line: 234,
						column: 36
					},
					end: {
						line: 234,
						column: 37
					}
				},
				loc: {
					start: {
						line: 235,
						column: 7
					},
					end: {
						line: 247,
						column: 9
					}
				},
				line: 235
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 115,
						column: 4
					},
					end: {
						line: 117,
						column: 5
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 115,
						column: 4
					},
					end: {
						line: 117,
						column: 5
					}
				}, {
					start: {
						line: 115,
						column: 4
					},
					end: {
						line: 117,
						column: 5
					}
				}],
				line: 115
			},
			'1': {
				loc: {
					start: {
						line: 121,
						column: 4
					},
					end: {
						line: 123,
						column: 5
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 121,
						column: 4
					},
					end: {
						line: 123,
						column: 5
					}
				}, {
					start: {
						line: 121,
						column: 4
					},
					end: {
						line: 123,
						column: 5
					}
				}],
				line: 121
			},
			'2': {
				loc: {
					start: {
						line: 127,
						column: 4
					},
					end: {
						line: 129,
						column: 5
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 127,
						column: 4
					},
					end: {
						line: 129,
						column: 5
					}
				}, {
					start: {
						line: 127,
						column: 4
					},
					end: {
						line: 129,
						column: 5
					}
				}],
				line: 127
			},
			'3': {
				loc: {
					start: {
						line: 147,
						column: 2
					},
					end: {
						line: 149,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 147,
						column: 2
					},
					end: {
						line: 149,
						column: 3
					}
				}, {
					start: {
						line: 147,
						column: 2
					},
					end: {
						line: 149,
						column: 3
					}
				}],
				line: 147
			},
			'4': {
				loc: {
					start: {
						line: 147,
						column: 6
					},
					end: {
						line: 147,
						column: 65
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 147,
						column: 6
					},
					end: {
						line: 147,
						column: 34
					}
				}, {
					start: {
						line: 147,
						column: 38
					},
					end: {
						line: 147,
						column: 65
					}
				}],
				line: 147
			},
			'5': {
				loc: {
					start: {
						line: 167,
						column: 2
					},
					end: {
						line: 169,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 167,
						column: 2
					},
					end: {
						line: 169,
						column: 3
					}
				}, {
					start: {
						line: 167,
						column: 2
					},
					end: {
						line: 169,
						column: 3
					}
				}],
				line: 167
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0,
			'33': 0,
			'34': 0,
			'35': 0,
			'36': 0,
			'37': 0,
			'38': 0,
			'39': 0,
			'40': 0,
			'41': 0,
			'42': 0,
			'43': 0,
			'44': 0,
			'45': 0,
			'46': 0,
			'47': 0,
			'48': 0,
			'49': 0,
			'50': 0,
			'51': 0,
			'52': 0,
			'53': 0,
			'54': 0,
			'55': 0,
			'56': 0,
			'57': 0,
			'58': 0,
			'59': 0,
			'60': 0,
			'61': 0,
			'62': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0],
			'4': [0, 0],
			'5': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

const React = (cov_2j2kn154i4.s[0]++, __webpack_require__(1));
const PropTypes = (cov_2j2kn154i4.s[1]++, __webpack_require__(3));
const { id } = (cov_2j2kn154i4.s[2]++, __webpack_require__(0));
const { BLOCK_SIZE } = (cov_2j2kn154i4.s[3]++, __webpack_require__(6));
const DataComponent = (cov_2j2kn154i4.s[4]++, __webpack_require__(11));

let BlockComponent = function (_React$Component) {
	_inherits(BlockComponent, _React$Component);

	function BlockComponent(props, state) {
		_classCallCheck(this, BlockComponent);

		cov_2j2kn154i4.f[0]++;
		cov_2j2kn154i4.s[5]++;

		var _this = _possibleConstructorReturn(this, (BlockComponent.__proto__ || Object.getPrototypeOf(BlockComponent)).call(this, props, state));

		_this.handleDataAnimationComplete = data => {
			cov_2j2kn154i4.f[18]++;
			cov_2j2kn154i4.s[51]++;

			if (_this.dataAnimationResolvers.has(data)) {
				cov_2j2kn154i4.b[5][0]++;
				cov_2j2kn154i4.s[52]++;

				_this.dataAnimationResolvers.get(data)();
			} else {
				cov_2j2kn154i4.b[5][1]++;
			}
		};

		_this.handleDataEraseAnimationComplete = data => {
			cov_2j2kn154i4.f[19]++;
			cov_2j2kn154i4.s[53]++;

			_this.setState({
				inputData: _this.state.inputData.filter(inputData => {
					cov_2j2kn154i4.f[20]++;
					cov_2j2kn154i4.s[54]++;
					return inputData.data !== data;
				}),
				animatingData: _this.state.animatingData.filter(animatingData => {
					cov_2j2kn154i4.f[21]++;
					cov_2j2kn154i4.s[55]++;
					return animatingData.data !== data;
				}),
				outputData: _this.state.outputData.filter(outputData => {
					cov_2j2kn154i4.f[22]++;
					cov_2j2kn154i4.s[56]++;
					return outputData.data !== data;
				})
			});
		};

		_this.handleClick = event => {
			cov_2j2kn154i4.f[23]++;
			cov_2j2kn154i4.s[57]++;
			return _this.props.onClick(event, _this.props.x, _this.props.y);
		};

		cov_2j2kn154i4.s[6]++;


		_this.dataAnimationResolvers = new WeakMap();

		cov_2j2kn154i4.s[7]++;
		_this.props.block.on('get', ({ direction, data }) => {
			cov_2j2kn154i4.f[1]++;
			cov_2j2kn154i4.s[8]++;

			_this.setState({
				inputData: _this.state.inputData.concat([{
					direction,
					data,
					isErasing: _this.props.status === 'stop'
				}])
			});
		});

		cov_2j2kn154i4.s[9]++;
		_this.props.block.on('pass', async passEvent => {
			cov_2j2kn154i4.f[2]++;

			const inputAnimations = (cov_2j2kn154i4.s[10]++, []);

			cov_2j2kn154i4.s[11]++;
			for (const [direction, data] of passEvent.in.entries()) {
				cov_2j2kn154i4.s[12]++;

				// MEMO: Immutable.js使いたい
				_this.setState({
					animatingData: _this.state.animatingData.concat([{
						direction,
						data,
						isInward: true,
						isErasing: _this.props.status === 'stop'
					}]),
					inputData: _this.state.inputData.filter(inputData => {
						cov_2j2kn154i4.f[3]++;
						cov_2j2kn154i4.s[13]++;
						return data !== inputData.data;
					})
				});

				cov_2j2kn154i4.s[14]++;
				inputAnimations.push(new Promise(resolve => {
					cov_2j2kn154i4.f[4]++;
					cov_2j2kn154i4.s[15]++;

					_this.dataAnimationResolvers.set(data, resolve);
				}));
			}

			cov_2j2kn154i4.s[16]++;
			await Promise.all(inputAnimations);

			const outputAnimations = (cov_2j2kn154i4.s[17]++, []);

			cov_2j2kn154i4.s[18]++;
			for (const data of passEvent.in.values()) {
				cov_2j2kn154i4.s[19]++;

				_this.setState({
					animatingData: _this.state.animatingData.filter(animatingData => {
						cov_2j2kn154i4.f[5]++;
						cov_2j2kn154i4.s[20]++;
						return data !== animatingData.data;
					})
				});
			}

			cov_2j2kn154i4.s[21]++;
			for (const [direction, data] of passEvent.out.entries()) {
				cov_2j2kn154i4.s[22]++;

				_this.setState({
					animatingData: _this.state.animatingData.concat([{
						direction,
						data,
						isInward: false,
						isErasing: _this.props.status === 'stop'
					}])
				});

				cov_2j2kn154i4.s[23]++;
				outputAnimations.push(new Promise(resolve => {
					cov_2j2kn154i4.f[6]++;
					cov_2j2kn154i4.s[24]++;

					_this.dataAnimationResolvers.set(data, resolve);
				}));
			}

			cov_2j2kn154i4.s[25]++;
			await Promise.all(outputAnimations);

			cov_2j2kn154i4.s[26]++;
			for (const [direction, data] of passEvent.out.entries()) {
				cov_2j2kn154i4.s[27]++;

				_this.setState({
					animatingData: _this.state.animatingData.filter(animatingData => {
						cov_2j2kn154i4.f[7]++;
						cov_2j2kn154i4.s[28]++;
						return data !== animatingData.data;
					}),
					outputData: _this.state.outputData.concat([{
						direction,
						data,
						isErasing: _this.props.status === 'stop'
					}])
				});
			}

			cov_2j2kn154i4.s[29]++;
			_this.props.onPassAnimationComplete(passEvent);
		});

		cov_2j2kn154i4.s[30]++;
		_this.props.block.on('hand', data => {
			cov_2j2kn154i4.f[8]++;
			cov_2j2kn154i4.s[31]++;

			_this.setState({
				outputData: _this.state.outputData.filter(outputData => {
					cov_2j2kn154i4.f[9]++;
					cov_2j2kn154i4.s[32]++;
					return data !== outputData.data;
				})
			});
		});

		cov_2j2kn154i4.s[33]++;
		_this.props.block.on('erase', data => {
			cov_2j2kn154i4.f[10]++;
			cov_2j2kn154i4.s[34]++;

			_this.state.inputData.forEach(inputData => {
				cov_2j2kn154i4.f[11]++;
				cov_2j2kn154i4.s[35]++;

				if (inputData.data === data) {
					cov_2j2kn154i4.b[0][0]++;
					cov_2j2kn154i4.s[36]++;

					inputData.isErasing = true;
				} else {
					cov_2j2kn154i4.b[0][1]++;
				}
			});

			cov_2j2kn154i4.s[37]++;
			_this.state.animatingData.forEach(animatingData => {
				cov_2j2kn154i4.f[12]++;
				cov_2j2kn154i4.s[38]++;

				if (animatingData.data === data) {
					cov_2j2kn154i4.b[1][0]++;
					cov_2j2kn154i4.s[39]++;

					animatingData.isErasing = true;
				} else {
					cov_2j2kn154i4.b[1][1]++;
				}
			});

			cov_2j2kn154i4.s[40]++;
			_this.state.outputData.forEach(outputData => {
				cov_2j2kn154i4.f[13]++;
				cov_2j2kn154i4.s[41]++;

				if (outputData.data === data) {
					cov_2j2kn154i4.b[2][0]++;
					cov_2j2kn154i4.s[42]++;

					outputData.isErasing = true;
				} else {
					cov_2j2kn154i4.b[2][1]++;
				}
			});

			cov_2j2kn154i4.s[43]++;
			_this.setState({
				inputData: _this.state.inputData,
				animatingData: _this.state.animatingData,
				outputData: _this.state.outputData
			});
		});

		cov_2j2kn154i4.s[44]++;
		_this.state = {
			inputData: [], // Data in inputQueue
			outputData: [], // Data in outputQueue
			animatingData: [] // Data in animation
		};
		return _this;
	}

	_createClass(BlockComponent, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			cov_2j2kn154i4.f[14]++;
			cov_2j2kn154i4.s[45]++;

			if ((cov_2j2kn154i4.b[4][0]++, this.props.status !== 'stop') && (cov_2j2kn154i4.b[4][1]++, nextProps.status === 'stop')) {
				cov_2j2kn154i4.b[3][0]++;
				cov_2j2kn154i4.s[46]++;

				this.handleStop();
			} else {
				cov_2j2kn154i4.b[3][1]++;
			}
		}
	}, {
		key: 'handleStop',
		value: function handleStop() {
			cov_2j2kn154i4.f[15]++;
			cov_2j2kn154i4.s[47]++;

			[this.state.inputData, this.state.animatingData, this.state.outputData].forEach(data => {
				cov_2j2kn154i4.f[16]++;
				cov_2j2kn154i4.s[48]++;

				data.forEach(datum => {
					cov_2j2kn154i4.f[17]++;
					cov_2j2kn154i4.s[49]++;

					datum.isErasing = true;
				});
			});

			cov_2j2kn154i4.s[50]++;
			this.setState({
				inputData: this.state.inputData,
				animatingData: this.state.animatingData,
				outputData: this.state.outputData
			});
		}
	}, {
		key: 'render',
		value: function render() {
			cov_2j2kn154i4.f[24]++;
			cov_2j2kn154i4.s[58]++;

			return React.createElement(
				'g',
				{
					transform: `translate(${this.props.x * BLOCK_SIZE}, ${this.props.y * BLOCK_SIZE})`
				},
				React.createElement('rect', {
					className: 'block-click-capture',
					width: BLOCK_SIZE,
					height: BLOCK_SIZE,
					x: '0',
					y: '0',
					fill: 'transparent',
					onClick: this.handleClick,
					onContextMenu: this.handleClick,
					cursor: 'pointer'
				}),
				React.createElement(
					'g',
					null,
					[...this.state.inputData.map(({ direction, data, isErasing }) => {
						cov_2j2kn154i4.f[25]++;
						cov_2j2kn154i4.s[59]++;
						return React.createElement(DataComponent, {
							key: id(data),
							direction: direction,
							isInward: true,
							isAnimating: false,
							isErasing: isErasing,
							value: data.value,
							data: data,
							onAnimationComplete: this.handleDataAnimationComplete,
							onEraseAnimationComplete: this.handleDataEraseAnimationComplete,
							isRapid: this.props.isRapid,
							viewBoxScale: this.props.viewBoxScale
						});
					}), ...this.state.animatingData.map(({ direction, data, isInward, isErasing }) => {
						cov_2j2kn154i4.f[26]++;
						cov_2j2kn154i4.s[60]++;
						return React.createElement(DataComponent, {
							key: id(data),
							direction: direction,
							isInward: isInward,
							isAnimating: true,
							isErasing: isErasing,
							value: data.value,
							data: data,
							onAnimationComplete: this.handleDataAnimationComplete,
							onEraseAnimationComplete: this.handleDataEraseAnimationComplete,
							isRapid: this.props.isRapid,
							viewBoxScale: this.props.viewBoxScale
						});
					}), ...this.state.outputData.map(({ direction, data, isErasing }) => {
						cov_2j2kn154i4.f[27]++;
						cov_2j2kn154i4.s[61]++;
						return React.createElement(DataComponent, {
							key: id(data),
							direction: direction,
							isInward: false,
							isAnimating: false,
							isErasing: isErasing,
							value: data.value,
							data: data,
							onAnimationComplete: this.handleDataAnimationComplete,
							onEraseAnimationComplete: this.handleDataEraseAnimationComplete,
							isRapid: this.props.isRapid,
							viewBoxScale: this.props.viewBoxScale
						});
					})]
				)
			);
		}
	}]);

	return BlockComponent;
}(React.Component);

BlockComponent.propTypes = {
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	status: PropTypes.string.isRequired,
	block: PropTypes.shape({
		on: PropTypes.func.isRequired
	}).isRequired,
	onClick: PropTypes.func.isRequired,
	onPassAnimationComplete: PropTypes.func.isRequired,
	isRapid: PropTypes.bool.isRequired,
	viewBoxScale: PropTypes.number
};
BlockComponent.defaultProps = {
	viewBoxScale: null
};
cov_2j2kn154i4.s[62]++;


module.exports = BlockComponent;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_t26kee1gv = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/lib/data-component.jsx',
	    hash = 'e5c95150e35604405d28109b3ead5b2714166612',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/lib/data-component.jsx',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 14
				},
				end: {
					line: 1,
					column: 30
				}
			},
			'1': {
				start: {
					line: 2,
					column: 18
				},
				end: {
					line: 2,
					column: 39
				}
			},
			'2': {
				start: {
					line: 3,
					column: 13
				},
				end: {
					line: 3,
					column: 43
				}
			},
			'3': {
				start: {
					line: 4,
					column: 15
				},
				end: {
					line: 4,
					column: 32
				}
			},
			'4': {
				start: {
					line: 5,
					column: 28
				},
				end: {
					line: 5,
					column: 43
				}
			},
			'5': {
				start: {
					line: 6,
					column: 27
				},
				end: {
					line: 6,
					column: 51
				}
			},
			'6': {
				start: {
					line: 7,
					column: 21
				},
				end: {
					line: 7,
					column: 43
				}
			},
			'7': {
				start: {
					line: 30,
					column: 2
				},
				end: {
					line: 30,
					column: 22
				}
			},
			'8': {
				start: {
					line: 32,
					column: 2
				},
				end: {
					line: 34,
					column: 4
				}
			},
			'9': {
				start: {
					line: 38,
					column: 2
				},
				end: {
					line: 40,
					column: 3
				}
			},
			'10': {
				start: {
					line: 39,
					column: 3
				},
				end: {
					line: 39,
					column: 31
				}
			},
			'11': {
				start: {
					line: 42,
					column: 2
				},
				end: {
					line: 44,
					column: 3
				}
			},
			'12': {
				start: {
					line: 43,
					column: 3
				},
				end: {
					line: 43,
					column: 29
				}
			},
			'13': {
				start: {
					line: 48,
					column: 2
				},
				end: {
					line: 50,
					column: 3
				}
			},
			'14': {
				start: {
					line: 49,
					column: 3
				},
				end: {
					line: 49,
					column: 31
				}
			},
			'15': {
				start: {
					line: 52,
					column: 2
				},
				end: {
					line: 54,
					column: 3
				}
			},
			'16': {
				start: {
					line: 53,
					column: 3
				},
				end: {
					line: 53,
					column: 30
				}
			},
			'17': {
				start: {
					line: 56,
					column: 2
				},
				end: {
					line: 58,
					column: 3
				}
			},
			'18': {
				start: {
					line: 57,
					column: 3
				},
				end: {
					line: 57,
					column: 29
				}
			},
			'19': {
				start: {
					line: 60,
					column: 2
				},
				end: {
					line: 62,
					column: 3
				}
			},
			'20': {
				start: {
					line: 61,
					column: 3
				},
				end: {
					line: 61,
					column: 28
				}
			},
			'21': {
				start: {
					line: 64,
					column: 2
				},
				end: {
					line: 66,
					column: 3
				}
			},
			'22': {
				start: {
					line: 65,
					column: 3
				},
				end: {
					line: 65,
					column: 27
				}
			},
			'23': {
				start: {
					line: 70,
					column: 19
				},
				end: {
					line: 70,
					column: 47
				}
			},
			'24': {
				start: {
					line: 72,
					column: 2
				},
				end: {
					line: 82,
					column: 5
				}
			},
			'25': {
				start: {
					line: 73,
					column: 3
				},
				end: {
					line: 81,
					column: 37
				}
			},
			'26': {
				start: {
					line: 77,
					column: 5
				},
				end: {
					line: 79,
					column: 11
				}
			},
			'27': {
				start: {
					line: 78,
					column: 6
				},
				end: {
					line: 78,
					column: 54
				}
			},
			'28': {
				start: {
					line: 86,
					column: 2
				},
				end: {
					line: 86,
					column: 25
				}
			},
			'29': {
				start: {
					line: 90,
					column: 2
				},
				end: {
					line: 92,
					column: 3
				}
			},
			'30': {
				start: {
					line: 91,
					column: 3
				},
				end: {
					line: 91,
					column: 26
				}
			},
			'31': {
				start: {
					line: 94,
					column: 19
				},
				end: {
					line: 94,
					column: 47
				}
			},
			'32': {
				start: {
					line: 96,
					column: 2
				},
				end: {
					line: 108,
					column: 5
				}
			},
			'33': {
				start: {
					line: 97,
					column: 3
				},
				end: {
					line: 107,
					column: 6
				}
			},
			'34': {
				start: {
					line: 103,
					column: 5
				},
				end: {
					line: 105,
					column: 11
				}
			},
			'35': {
				start: {
					line: 104,
					column: 6
				},
				end: {
					line: 104,
					column: 59
				}
			},
			'36': {
				start: {
					line: 112,
					column: 2
				},
				end: {
					line: 112,
					column: 23
				}
			},
			'37': {
				start: {
					line: 116,
					column: 2
				},
				end: {
					line: 118,
					column: 3
				}
			},
			'38': {
				start: {
					line: 117,
					column: 3
				},
				end: {
					line: 117,
					column: 57
				}
			},
			'39': {
				start: {
					line: 120,
					column: 2
				},
				end: {
					line: 122,
					column: 3
				}
			},
			'40': {
				start: {
					line: 121,
					column: 3
				},
				end: {
					line: 121,
					column: 53
				}
			},
			'41': {
				start: {
					line: 126,
					column: 2
				},
				end: {
					line: 130,
					column: 3
				}
			},
			'42': {
				start: {
					line: 127,
					column: 3
				},
				end: {
					line: 129,
					column: 6
				}
			},
			'43': {
				start: {
					line: 134,
					column: 2
				},
				end: {
					line: 149,
					column: 3
				}
			},
			'44': {
				start: {
					line: 135,
					column: 3
				},
				end: {
					line: 137,
					column: 4
				}
			},
			'45': {
				start: {
					line: 136,
					column: 4
				},
				end: {
					line: 136,
					column: 38
				}
			},
			'46': {
				start: {
					line: 139,
					column: 3
				},
				end: {
					line: 141,
					column: 4
				}
			},
			'47': {
				start: {
					line: 140,
					column: 4
				},
				end: {
					line: 140,
					column: 38
				}
			},
			'48': {
				start: {
					line: 143,
					column: 3
				},
				end: {
					line: 145,
					column: 4
				}
			},
			'49': {
				start: {
					line: 144,
					column: 4
				},
				end: {
					line: 144,
					column: 38
				}
			},
			'50': {
				start: {
					line: 147,
					column: 3
				},
				end: {
					line: 147,
					column: 45
				}
			},
			'51': {
				start: {
					line: 148,
					column: 3
				},
				end: {
					line: 148,
					column: 37
				}
			},
			'52': {
				start: {
					line: 151,
					column: 2
				},
				end: {
					line: 153,
					column: 3
				}
			},
			'53': {
				start: {
					line: 152,
					column: 3
				},
				end: {
					line: 152,
					column: 37
				}
			},
			'54': {
				start: {
					line: 155,
					column: 2
				},
				end: {
					line: 157,
					column: 3
				}
			},
			'55': {
				start: {
					line: 156,
					column: 3
				},
				end: {
					line: 156,
					column: 37
				}
			},
			'56': {
				start: {
					line: 159,
					column: 2
				},
				end: {
					line: 161,
					column: 3
				}
			},
			'57': {
				start: {
					line: 160,
					column: 3
				},
				end: {
					line: 160,
					column: 37
				}
			},
			'58': {
				start: {
					line: 163,
					column: 2
				},
				end: {
					line: 163,
					column: 44
				}
			},
			'59': {
				start: {
					line: 164,
					column: 2
				},
				end: {
					line: 164,
					column: 36
				}
			},
			'60': {
				start: {
					line: 168,
					column: 2
				},
				end: {
					line: 170,
					column: 3
				}
			},
			'61': {
				start: {
					line: 169,
					column: 3
				},
				end: {
					line: 169,
					column: 14
				}
			},
			'62': {
				start: {
					line: 172,
					column: 2
				},
				end: {
					line: 174,
					column: 3
				}
			},
			'63': {
				start: {
					line: 173,
					column: 3
				},
				end: {
					line: 173,
					column: 15
				}
			},
			'64': {
				start: {
					line: 176,
					column: 2
				},
				end: {
					line: 176,
					column: 37
				}
			},
			'65': {
				start: {
					line: 180,
					column: 2
				},
				end: {
					line: 195,
					column: 3
				}
			},
			'66': {
				start: {
					line: 181,
					column: 3
				},
				end: {
					line: 183,
					column: 4
				}
			},
			'67': {
				start: {
					line: 182,
					column: 4
				},
				end: {
					line: 182,
					column: 45
				}
			},
			'68': {
				start: {
					line: 185,
					column: 3
				},
				end: {
					line: 187,
					column: 4
				}
			},
			'69': {
				start: {
					line: 186,
					column: 4
				},
				end: {
					line: 186,
					column: 57
				}
			},
			'70': {
				start: {
					line: 189,
					column: 3
				},
				end: {
					line: 191,
					column: 4
				}
			},
			'71': {
				start: {
					line: 190,
					column: 4
				},
				end: {
					line: 190,
					column: 45
				}
			},
			'72': {
				start: {
					line: 193,
					column: 3
				},
				end: {
					line: 193,
					column: 45
				}
			},
			'73': {
				start: {
					line: 194,
					column: 3
				},
				end: {
					line: 194,
					column: 56
				}
			},
			'74': {
				start: {
					line: 197,
					column: 2
				},
				end: {
					line: 197,
					column: 59
				}
			},
			'75': {
				start: {
					line: 201,
					column: 2
				},
				end: {
					line: 203,
					column: 44
				}
			},
			'76': {
				start: {
					line: 207,
					column: 2
				},
				end: {
					line: 236,
					column: 4
				}
			},
			'77': {
				start: {
					line: 222,
					column: 6
				},
				end: {
					line: 232,
					column: 13
				}
			},
			'78': {
				start: {
					line: 240,
					column: 0
				},
				end: {
					line: 240,
					column: 47
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 29,
						column: 1
					},
					end: {
						line: 29,
						column: 2
					}
				},
				loc: {
					start: {
						line: 29,
						column: 27
					},
					end: {
						line: 35,
						column: 2
					}
				},
				line: 29
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 37,
						column: 1
					},
					end: {
						line: 37,
						column: 2
					}
				},
				loc: {
					start: {
						line: 37,
						column: 21
					},
					end: {
						line: 45,
						column: 2
					}
				},
				line: 37
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 47,
						column: 1
					},
					end: {
						line: 47,
						column: 2
					}
				},
				loc: {
					start: {
						line: 47,
						column: 38
					},
					end: {
						line: 67,
						column: 2
					}
				},
				line: 47
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 69,
						column: 24
					},
					end: {
						line: 69,
						column: 25
					}
				},
				loc: {
					start: {
						line: 69,
						column: 30
					},
					end: {
						line: 83,
						column: 2
					}
				},
				line: 69
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 72,
						column: 37
					},
					end: {
						line: 72,
						column: 38
					}
				},
				loc: {
					start: {
						line: 73,
						column: 3
					},
					end: {
						line: 81,
						column: 37
					}
				},
				line: 73
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 76,
						column: 16
					},
					end: {
						line: 76,
						column: 17
					}
				},
				loc: {
					start: {
						line: 76,
						column: 22
					},
					end: {
						line: 80,
						column: 5
					}
				},
				line: 76
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 77,
						column: 16
					},
					end: {
						line: 77,
						column: 17
					}
				},
				loc: {
					start: {
						line: 77,
						column: 22
					},
					end: {
						line: 79,
						column: 6
					}
				},
				line: 77
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 85,
						column: 23
					},
					end: {
						line: 85,
						column: 24
					}
				},
				loc: {
					start: {
						line: 85,
						column: 29
					},
					end: {
						line: 87,
						column: 2
					}
				},
				line: 85
			},
			'8': {
				name: '(anonymous_8)',
				decl: {
					start: {
						line: 89,
						column: 22
					},
					end: {
						line: 89,
						column: 23
					}
				},
				loc: {
					start: {
						line: 89,
						column: 28
					},
					end: {
						line: 109,
						column: 2
					}
				},
				line: 89
			},
			'9': {
				name: '(anonymous_9)',
				decl: {
					start: {
						line: 96,
						column: 35
					},
					end: {
						line: 96,
						column: 36
					}
				},
				loc: {
					start: {
						line: 97,
						column: 3
					},
					end: {
						line: 107,
						column: 6
					}
				},
				line: 97
			},
			'10': {
				name: '(anonymous_10)',
				decl: {
					start: {
						line: 102,
						column: 16
					},
					end: {
						line: 102,
						column: 17
					}
				},
				loc: {
					start: {
						line: 102,
						column: 22
					},
					end: {
						line: 106,
						column: 5
					}
				},
				line: 102
			},
			'11': {
				name: '(anonymous_11)',
				decl: {
					start: {
						line: 103,
						column: 16
					},
					end: {
						line: 103,
						column: 17
					}
				},
				loc: {
					start: {
						line: 103,
						column: 22
					},
					end: {
						line: 105,
						column: 6
					}
				},
				line: 103
			},
			'12': {
				name: '(anonymous_12)',
				decl: {
					start: {
						line: 111,
						column: 21
					},
					end: {
						line: 111,
						column: 22
					}
				},
				loc: {
					start: {
						line: 111,
						column: 27
					},
					end: {
						line: 113,
						column: 2
					}
				},
				line: 111
			},
			'13': {
				name: '(anonymous_13)',
				decl: {
					start: {
						line: 115,
						column: 20
					},
					end: {
						line: 115,
						column: 21
					}
				},
				loc: {
					start: {
						line: 115,
						column: 26
					},
					end: {
						line: 123,
						column: 2
					}
				},
				line: 115
			},
			'14': {
				name: '(anonymous_14)',
				decl: {
					start: {
						line: 125,
						column: 22
					},
					end: {
						line: 125,
						column: 23
					}
				},
				loc: {
					start: {
						line: 125,
						column: 38
					},
					end: {
						line: 131,
						column: 2
					}
				},
				line: 125
			},
			'15': {
				name: '(anonymous_15)',
				decl: {
					start: {
						line: 133,
						column: 26
					},
					end: {
						line: 133,
						column: 27
					}
				},
				loc: {
					start: {
						line: 133,
						column: 32
					},
					end: {
						line: 165,
						column: 2
					}
				},
				line: 133
			},
			'16': {
				name: '(anonymous_16)',
				decl: {
					start: {
						line: 167,
						column: 19
					},
					end: {
						line: 167,
						column: 20
					}
				},
				loc: {
					start: {
						line: 167,
						column: 25
					},
					end: {
						line: 177,
						column: 2
					}
				},
				line: 167
			},
			'17': {
				name: '(anonymous_17)',
				decl: {
					start: {
						line: 179,
						column: 23
					},
					end: {
						line: 179,
						column: 24
					}
				},
				loc: {
					start: {
						line: 179,
						column: 29
					},
					end: {
						line: 198,
						column: 2
					}
				},
				line: 179
			},
			'18': {
				name: '(anonymous_18)',
				decl: {
					start: {
						line: 200,
						column: 21
					},
					end: {
						line: 200,
						column: 22
					}
				},
				loc: {
					start: {
						line: 201,
						column: 2
					},
					end: {
						line: 203,
						column: 44
					}
				},
				line: 201
			},
			'19': {
				name: '(anonymous_19)',
				decl: {
					start: {
						line: 206,
						column: 1
					},
					end: {
						line: 206,
						column: 2
					}
				},
				loc: {
					start: {
						line: 206,
						column: 10
					},
					end: {
						line: 237,
						column: 2
					}
				},
				line: 206
			},
			'20': {
				name: '(anonymous_20)',
				decl: {
					start: {
						line: 221,
						column: 6
					},
					end: {
						line: 221,
						column: 7
					}
				},
				loc: {
					start: {
						line: 222,
						column: 6
					},
					end: {
						line: 232,
						column: 13
					}
				},
				line: 222
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 38,
						column: 2
					},
					end: {
						line: 40,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 38,
						column: 2
					},
					end: {
						line: 40,
						column: 3
					}
				}, {
					start: {
						line: 38,
						column: 2
					},
					end: {
						line: 40,
						column: 3
					}
				}],
				line: 38
			},
			'1': {
				loc: {
					start: {
						line: 42,
						column: 2
					},
					end: {
						line: 44,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 42,
						column: 2
					},
					end: {
						line: 44,
						column: 3
					}
				}, {
					start: {
						line: 42,
						column: 2
					},
					end: {
						line: 44,
						column: 3
					}
				}],
				line: 42
			},
			'2': {
				loc: {
					start: {
						line: 48,
						column: 2
					},
					end: {
						line: 50,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 48,
						column: 2
					},
					end: {
						line: 50,
						column: 3
					}
				}, {
					start: {
						line: 48,
						column: 2
					},
					end: {
						line: 50,
						column: 3
					}
				}],
				line: 48
			},
			'3': {
				loc: {
					start: {
						line: 48,
						column: 6
					},
					end: {
						line: 48,
						column: 54
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 48,
						column: 6
					},
					end: {
						line: 48,
						column: 29
					}
				}, {
					start: {
						line: 48,
						column: 33
					},
					end: {
						line: 48,
						column: 54
					}
				}],
				line: 48
			},
			'4': {
				loc: {
					start: {
						line: 52,
						column: 2
					},
					end: {
						line: 54,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 52,
						column: 2
					},
					end: {
						line: 54,
						column: 3
					}
				}, {
					start: {
						line: 52,
						column: 2
					},
					end: {
						line: 54,
						column: 3
					}
				}],
				line: 52
			},
			'5': {
				loc: {
					start: {
						line: 52,
						column: 6
					},
					end: {
						line: 52,
						column: 54
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 52,
						column: 6
					},
					end: {
						line: 52,
						column: 28
					}
				}, {
					start: {
						line: 52,
						column: 32
					},
					end: {
						line: 52,
						column: 54
					}
				}],
				line: 52
			},
			'6': {
				loc: {
					start: {
						line: 56,
						column: 2
					},
					end: {
						line: 58,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 56,
						column: 2
					},
					end: {
						line: 58,
						column: 3
					}
				}, {
					start: {
						line: 56,
						column: 2
					},
					end: {
						line: 58,
						column: 3
					}
				}],
				line: 56
			},
			'7': {
				loc: {
					start: {
						line: 56,
						column: 6
					},
					end: {
						line: 56,
						column: 50
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 56,
						column: 6
					},
					end: {
						line: 56,
						column: 27
					}
				}, {
					start: {
						line: 56,
						column: 31
					},
					end: {
						line: 56,
						column: 50
					}
				}],
				line: 56
			},
			'8': {
				loc: {
					start: {
						line: 60,
						column: 2
					},
					end: {
						line: 62,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 60,
						column: 2
					},
					end: {
						line: 62,
						column: 3
					}
				}, {
					start: {
						line: 60,
						column: 2
					},
					end: {
						line: 62,
						column: 3
					}
				}],
				line: 60
			},
			'9': {
				loc: {
					start: {
						line: 60,
						column: 6
					},
					end: {
						line: 60,
						column: 50
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 60,
						column: 6
					},
					end: {
						line: 60,
						column: 26
					}
				}, {
					start: {
						line: 60,
						column: 30
					},
					end: {
						line: 60,
						column: 50
					}
				}],
				line: 60
			},
			'10': {
				loc: {
					start: {
						line: 64,
						column: 2
					},
					end: {
						line: 66,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 64,
						column: 2
					},
					end: {
						line: 66,
						column: 3
					}
				}, {
					start: {
						line: 64,
						column: 2
					},
					end: {
						line: 66,
						column: 3
					}
				}],
				line: 64
			},
			'11': {
				loc: {
					start: {
						line: 64,
						column: 6
					},
					end: {
						line: 64,
						column: 46
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 64,
						column: 6
					},
					end: {
						line: 64,
						column: 25
					}
				}, {
					start: {
						line: 64,
						column: 29
					},
					end: {
						line: 64,
						column: 46
					}
				}],
				line: 64
			},
			'12': {
				loc: {
					start: {
						line: 70,
						column: 19
					},
					end: {
						line: 70,
						column: 47
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 70,
						column: 40
					},
					end: {
						line: 70,
						column: 41
					}
				}, {
					start: {
						line: 70,
						column: 44
					},
					end: {
						line: 70,
						column: 47
					}
				}],
				line: 70
			},
			'13': {
				loc: {
					start: {
						line: 90,
						column: 2
					},
					end: {
						line: 92,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 90,
						column: 2
					},
					end: {
						line: 92,
						column: 3
					}
				}, {
					start: {
						line: 90,
						column: 2
					},
					end: {
						line: 92,
						column: 3
					}
				}],
				line: 90
			},
			'14': {
				loc: {
					start: {
						line: 94,
						column: 19
					},
					end: {
						line: 94,
						column: 47
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 94,
						column: 40
					},
					end: {
						line: 94,
						column: 41
					}
				}, {
					start: {
						line: 94,
						column: 44
					},
					end: {
						line: 94,
						column: 47
					}
				}],
				line: 94
			},
			'15': {
				loc: {
					start: {
						line: 116,
						column: 2
					},
					end: {
						line: 118,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 116,
						column: 2
					},
					end: {
						line: 118,
						column: 3
					}
				}, {
					start: {
						line: 116,
						column: 2
					},
					end: {
						line: 118,
						column: 3
					}
				}],
				line: 116
			},
			'16': {
				loc: {
					start: {
						line: 120,
						column: 2
					},
					end: {
						line: 122,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 120,
						column: 2
					},
					end: {
						line: 122,
						column: 3
					}
				}, {
					start: {
						line: 120,
						column: 2
					},
					end: {
						line: 122,
						column: 3
					}
				}],
				line: 120
			},
			'17': {
				loc: {
					start: {
						line: 126,
						column: 2
					},
					end: {
						line: 130,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 126,
						column: 2
					},
					end: {
						line: 130,
						column: 3
					}
				}, {
					start: {
						line: 126,
						column: 2
					},
					end: {
						line: 130,
						column: 3
					}
				}],
				line: 126
			},
			'18': {
				loc: {
					start: {
						line: 134,
						column: 2
					},
					end: {
						line: 149,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 134,
						column: 2
					},
					end: {
						line: 149,
						column: 3
					}
				}, {
					start: {
						line: 134,
						column: 2
					},
					end: {
						line: 149,
						column: 3
					}
				}],
				line: 134
			},
			'19': {
				loc: {
					start: {
						line: 135,
						column: 3
					},
					end: {
						line: 137,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 135,
						column: 3
					},
					end: {
						line: 137,
						column: 4
					}
				}, {
					start: {
						line: 135,
						column: 3
					},
					end: {
						line: 137,
						column: 4
					}
				}],
				line: 135
			},
			'20': {
				loc: {
					start: {
						line: 139,
						column: 3
					},
					end: {
						line: 141,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 139,
						column: 3
					},
					end: {
						line: 141,
						column: 4
					}
				}, {
					start: {
						line: 139,
						column: 3
					},
					end: {
						line: 141,
						column: 4
					}
				}],
				line: 139
			},
			'21': {
				loc: {
					start: {
						line: 143,
						column: 3
					},
					end: {
						line: 145,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 143,
						column: 3
					},
					end: {
						line: 145,
						column: 4
					}
				}, {
					start: {
						line: 143,
						column: 3
					},
					end: {
						line: 145,
						column: 4
					}
				}],
				line: 143
			},
			'22': {
				loc: {
					start: {
						line: 151,
						column: 2
					},
					end: {
						line: 153,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 151,
						column: 2
					},
					end: {
						line: 153,
						column: 3
					}
				}, {
					start: {
						line: 151,
						column: 2
					},
					end: {
						line: 153,
						column: 3
					}
				}],
				line: 151
			},
			'23': {
				loc: {
					start: {
						line: 155,
						column: 2
					},
					end: {
						line: 157,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 155,
						column: 2
					},
					end: {
						line: 157,
						column: 3
					}
				}, {
					start: {
						line: 155,
						column: 2
					},
					end: {
						line: 157,
						column: 3
					}
				}],
				line: 155
			},
			'24': {
				loc: {
					start: {
						line: 159,
						column: 2
					},
					end: {
						line: 161,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 159,
						column: 2
					},
					end: {
						line: 161,
						column: 3
					}
				}, {
					start: {
						line: 159,
						column: 2
					},
					end: {
						line: 161,
						column: 3
					}
				}],
				line: 159
			},
			'25': {
				loc: {
					start: {
						line: 168,
						column: 2
					},
					end: {
						line: 170,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 168,
						column: 2
					},
					end: {
						line: 170,
						column: 3
					}
				}, {
					start: {
						line: 168,
						column: 2
					},
					end: {
						line: 170,
						column: 3
					}
				}],
				line: 168
			},
			'26': {
				loc: {
					start: {
						line: 172,
						column: 2
					},
					end: {
						line: 174,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 172,
						column: 2
					},
					end: {
						line: 174,
						column: 3
					}
				}, {
					start: {
						line: 172,
						column: 2
					},
					end: {
						line: 174,
						column: 3
					}
				}],
				line: 172
			},
			'27': {
				loc: {
					start: {
						line: 180,
						column: 2
					},
					end: {
						line: 195,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 180,
						column: 2
					},
					end: {
						line: 195,
						column: 3
					}
				}, {
					start: {
						line: 180,
						column: 2
					},
					end: {
						line: 195,
						column: 3
					}
				}],
				line: 180
			},
			'28': {
				loc: {
					start: {
						line: 181,
						column: 3
					},
					end: {
						line: 183,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 181,
						column: 3
					},
					end: {
						line: 183,
						column: 4
					}
				}, {
					start: {
						line: 181,
						column: 3
					},
					end: {
						line: 183,
						column: 4
					}
				}],
				line: 181
			},
			'29': {
				loc: {
					start: {
						line: 185,
						column: 3
					},
					end: {
						line: 187,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 185,
						column: 3
					},
					end: {
						line: 187,
						column: 4
					}
				}, {
					start: {
						line: 185,
						column: 3
					},
					end: {
						line: 187,
						column: 4
					}
				}],
				line: 185
			},
			'30': {
				loc: {
					start: {
						line: 189,
						column: 3
					},
					end: {
						line: 191,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 189,
						column: 3
					},
					end: {
						line: 191,
						column: 4
					}
				}, {
					start: {
						line: 189,
						column: 3
					},
					end: {
						line: 191,
						column: 4
					}
				}],
				line: 189
			},
			'31': {
				loc: {
					start: {
						line: 201,
						column: 2
					},
					end: {
						line: 203,
						column: 44
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 202,
						column: 5
					},
					end: {
						line: 202,
						column: 67
					}
				}, {
					start: {
						line: 203,
						column: 6
					},
					end: {
						line: 203,
						column: 43
					}
				}],
				line: 201
			},
			'32': {
				loc: {
					start: {
						line: 201,
						column: 3
					},
					end: {
						line: 201,
						column: 74
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 201,
						column: 3
					},
					end: {
						line: 201,
						column: 38
					}
				}, {
					start: {
						line: 201,
						column: 42
					},
					end: {
						line: 201,
						column: 74
					}
				}],
				line: 201
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0,
			'33': 0,
			'34': 0,
			'35': 0,
			'36': 0,
			'37': 0,
			'38': 0,
			'39': 0,
			'40': 0,
			'41': 0,
			'42': 0,
			'43': 0,
			'44': 0,
			'45': 0,
			'46': 0,
			'47': 0,
			'48': 0,
			'49': 0,
			'50': 0,
			'51': 0,
			'52': 0,
			'53': 0,
			'54': 0,
			'55': 0,
			'56': 0,
			'57': 0,
			'58': 0,
			'59': 0,
			'60': 0,
			'61': 0,
			'62': 0,
			'63': 0,
			'64': 0,
			'65': 0,
			'66': 0,
			'67': 0,
			'68': 0,
			'69': 0,
			'70': 0,
			'71': 0,
			'72': 0,
			'73': 0,
			'74': 0,
			'75': 0,
			'76': 0,
			'77': 0,
			'78': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0],
			'4': [0, 0],
			'5': [0, 0],
			'6': [0, 0],
			'7': [0, 0],
			'8': [0, 0],
			'9': [0, 0],
			'10': [0, 0],
			'11': [0, 0],
			'12': [0, 0],
			'13': [0, 0],
			'14': [0, 0],
			'15': [0, 0],
			'16': [0, 0],
			'17': [0, 0],
			'18': [0, 0],
			'19': [0, 0],
			'20': [0, 0],
			'21': [0, 0],
			'22': [0, 0],
			'23': [0, 0],
			'24': [0, 0],
			'25': [0, 0],
			'26': [0, 0],
			'27': [0, 0],
			'28': [0, 0],
			'29': [0, 0],
			'30': [0, 0],
			'31': [0, 0],
			'32': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

const React = (cov_t26kee1gv.s[0]++, __webpack_require__(1));
const PropTypes = (cov_t26kee1gv.s[1]++, __webpack_require__(3));
const GSAP = (cov_t26kee1gv.s[2]++, __webpack_require__(41));
const assert = (cov_t26kee1gv.s[3]++, __webpack_require__(4));
const { TweenLite, Power0 } = (cov_t26kee1gv.s[4]++, __webpack_require__(42));
const { default: Measure } = (cov_t26kee1gv.s[5]++, __webpack_require__(12));
const { BLOCK_SIZE } = (cov_t26kee1gv.s[6]++, __webpack_require__(6));

let DataComponent = function (_React$Component) {
	_inherits(DataComponent, _React$Component);

	function DataComponent(props, state) {
		_classCallCheck(this, DataComponent);

		cov_t26kee1gv.f[0]++;
		cov_t26kee1gv.s[7]++;

		var _this = _possibleConstructorReturn(this, (DataComponent.__proto__ || Object.getPrototypeOf(DataComponent)).call(this, props, state));

		_this.handleStartAnimation = () => {
			cov_t26kee1gv.f[3]++;

			const duration = (cov_t26kee1gv.s[23]++, _this.props.isRapid ? (cov_t26kee1gv.b[12][0]++, 0) : (cov_t26kee1gv.b[12][1]++, 0.4));

			cov_t26kee1gv.s[24]++;
			_this.animation = _this.addAnimation(({ target }) => {
				cov_t26kee1gv.f[4]++;
				cov_t26kee1gv.s[25]++;
				return TweenLite.to(target, duration, Object.assign({
					transformOrigin: 'center center',
					ease: Power0.easeNone,
					onComplete: () => {
						cov_t26kee1gv.f[5]++;
						cov_t26kee1gv.s[26]++;

						setTimeout(() => {
							cov_t26kee1gv.f[6]++;
							cov_t26kee1gv.s[27]++;

							_this.props.onAnimationComplete(_this.props.data);
						}, 0);
					}
				}, _this.getAnimationProperties()));
			});
		};

		_this.handleStopAnimation = () => {
			cov_t26kee1gv.f[7]++;
			cov_t26kee1gv.s[28]++;

			_this.animation.pause();
		};

		_this.handleStartErasion = () => {
			cov_t26kee1gv.f[8]++;
			cov_t26kee1gv.s[29]++;

			if (_this.animation) {
				cov_t26kee1gv.b[13][0]++;
				cov_t26kee1gv.s[30]++;

				_this.animation.pause();
			} else {
				cov_t26kee1gv.b[13][1]++;
			}

			const duration = (cov_t26kee1gv.s[31]++, _this.props.isRapid ? (cov_t26kee1gv.b[14][0]++, 0) : (cov_t26kee1gv.b[14][1]++, 0.4));

			cov_t26kee1gv.s[32]++;
			_this.erasion = _this.addAnimation(({ target }) => {
				cov_t26kee1gv.f[9]++;
				cov_t26kee1gv.s[33]++;
				return TweenLite.to(target, duration, Object.assign({
					transformOrigin: 'center center',
					ease: Power0.easeNone,
					scale: 2,
					opacity: 0,
					onComplete: () => {
						cov_t26kee1gv.f[10]++;
						cov_t26kee1gv.s[34]++;

						setTimeout(() => {
							cov_t26kee1gv.f[11]++;
							cov_t26kee1gv.s[35]++;

							_this.props.onEraseAnimationComplete(_this.props.data);
						}, 0);
					}
				}));
			});
		};

		_this.handleStopErasion = () => {
			cov_t26kee1gv.f[12]++;
			cov_t26kee1gv.s[36]++;

			_this.erasion.pause();
		};

		_this.handleStartRapid = () => {
			cov_t26kee1gv.f[13]++;
			cov_t26kee1gv.s[37]++;

			if (_this.animation) {
				cov_t26kee1gv.b[15][0]++;
				cov_t26kee1gv.s[38]++;

				_this.animation.seek(_this.animation.duration(), false);
			} else {
				cov_t26kee1gv.b[15][1]++;
			}

			cov_t26kee1gv.s[39]++;
			if (_this.erasion) {
				cov_t26kee1gv.b[16][0]++;
				cov_t26kee1gv.s[40]++;

				_this.erasion.seek(_this.erasion.duration(), false);
			} else {
				cov_t26kee1gv.b[16][1]++;
			}
		};

		_this.handleMeasureValue = dimensions => {
			cov_t26kee1gv.f[14]++;
			cov_t26kee1gv.s[41]++;

			if (!_this.props.isErasing) {
				cov_t26kee1gv.b[17][0]++;
				cov_t26kee1gv.s[42]++;

				_this.setState({
					valueDimensions: dimensions.bounds
				});
			} else {
				cov_t26kee1gv.b[17][1]++;
			}
		};

		_this.getAnimationProperties = () => {
			cov_t26kee1gv.f[15]++;
			cov_t26kee1gv.s[43]++;

			if (_this.props.isInward) {
				cov_t26kee1gv.b[18][0]++;
				cov_t26kee1gv.s[44]++;

				if (_this.props.direction === 'top') {
					cov_t26kee1gv.b[19][0]++;
					cov_t26kee1gv.s[45]++;

					return { y: `+=${BLOCK_SIZE / 2}` };
				} else {
					cov_t26kee1gv.b[19][1]++;
				}

				cov_t26kee1gv.s[46]++;
				if (_this.props.direction === 'right') {
					cov_t26kee1gv.b[20][0]++;
					cov_t26kee1gv.s[47]++;

					return { x: `-=${BLOCK_SIZE / 2}` };
				} else {
					cov_t26kee1gv.b[20][1]++;
				}

				cov_t26kee1gv.s[48]++;
				if (_this.props.direction === 'left') {
					cov_t26kee1gv.b[21][0]++;
					cov_t26kee1gv.s[49]++;

					return { x: `+=${BLOCK_SIZE / 2}` };
				} else {
					cov_t26kee1gv.b[21][1]++;
				}

				cov_t26kee1gv.s[50]++;
				assert(_this.props.direction === 'bottom');
				cov_t26kee1gv.s[51]++;
				return { y: `-=${BLOCK_SIZE / 2}` };
			} else {
				cov_t26kee1gv.b[18][1]++;
			}

			cov_t26kee1gv.s[52]++;
			if (_this.props.direction === 'top') {
				cov_t26kee1gv.b[22][0]++;
				cov_t26kee1gv.s[53]++;

				return { y: `-=${BLOCK_SIZE / 2}` };
			} else {
				cov_t26kee1gv.b[22][1]++;
			}

			cov_t26kee1gv.s[54]++;
			if (_this.props.direction === 'right') {
				cov_t26kee1gv.b[23][0]++;
				cov_t26kee1gv.s[55]++;

				return { x: `+=${BLOCK_SIZE / 2}` };
			} else {
				cov_t26kee1gv.b[23][1]++;
			}

			cov_t26kee1gv.s[56]++;
			if (_this.props.direction === 'left') {
				cov_t26kee1gv.b[24][0]++;
				cov_t26kee1gv.s[57]++;

				return { x: `-=${BLOCK_SIZE / 2}` };
			} else {
				cov_t26kee1gv.b[24][1]++;
			}

			cov_t26kee1gv.s[58]++;
			assert(_this.props.direction === 'bottom');
			cov_t26kee1gv.s[59]++;
			return { y: `+=${BLOCK_SIZE / 2}` };
		};

		_this.getDisplayValue = () => {
			cov_t26kee1gv.f[16]++;
			cov_t26kee1gv.s[60]++;

			if (_this.props.value === Infinity) {
				cov_t26kee1gv.b[25][0]++;
				cov_t26kee1gv.s[61]++;

				return '∞';
			} else {
				cov_t26kee1gv.b[25][1]++;
			}

			cov_t26kee1gv.s[62]++;
			if (_this.props.value === -Infinity) {
				cov_t26kee1gv.b[26][0]++;
				cov_t26kee1gv.s[63]++;

				return '-∞';
			} else {
				cov_t26kee1gv.b[26][1]++;
			}

			cov_t26kee1gv.s[64]++;
			return _this.props.value.toString();
		};

		_this.getInitialTransform = () => {
			cov_t26kee1gv.f[17]++;
			cov_t26kee1gv.s[65]++;

			if (_this.props.isInward) {
				cov_t26kee1gv.b[27][0]++;
				cov_t26kee1gv.s[66]++;

				if (_this.props.direction === 'top') {
					cov_t26kee1gv.b[28][0]++;
					cov_t26kee1gv.s[67]++;

					return `translate(${BLOCK_SIZE / 2}, 0)`;
				} else {
					cov_t26kee1gv.b[28][1]++;
				}

				cov_t26kee1gv.s[68]++;
				if (_this.props.direction === 'right') {
					cov_t26kee1gv.b[29][0]++;
					cov_t26kee1gv.s[69]++;

					return `translate(${BLOCK_SIZE}, ${BLOCK_SIZE / 2})`;
				} else {
					cov_t26kee1gv.b[29][1]++;
				}

				cov_t26kee1gv.s[70]++;
				if (_this.props.direction === 'left') {
					cov_t26kee1gv.b[30][0]++;
					cov_t26kee1gv.s[71]++;

					return `translate(0, ${BLOCK_SIZE / 2})`;
				} else {
					cov_t26kee1gv.b[30][1]++;
				}

				cov_t26kee1gv.s[72]++;
				assert(_this.props.direction === 'bottom');
				cov_t26kee1gv.s[73]++;
				return `translate(${BLOCK_SIZE / 2}, ${BLOCK_SIZE})`;
			} else {
				cov_t26kee1gv.b[27][1]++;
			}

			cov_t26kee1gv.s[74]++;
			return `translate(${BLOCK_SIZE / 2}, ${BLOCK_SIZE / 2})`;
		};

		_this.getRectangleWidth = () => {
			cov_t26kee1gv.f[18]++;
			cov_t26kee1gv.s[75]++;
			return (cov_t26kee1gv.b[32][0]++, _this.state.valueDimensions !== null) && (cov_t26kee1gv.b[32][1]++, _this.props.viewBoxScale !== null) ? (cov_t26kee1gv.b[31][0]++, _this.state.valueDimensions.width / _this.props.viewBoxScale + 4) : (cov_t26kee1gv.b[31][1]++, _this.getDisplayValue().length * 6 + 4);
		};

		cov_t26kee1gv.s[8]++;


		_this.state = {
			valueDimensions: null
		};
		return _this;
	}

	_createClass(DataComponent, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			cov_t26kee1gv.f[1]++;
			cov_t26kee1gv.s[9]++;

			if (this.props.isAnimating) {
				cov_t26kee1gv.b[0][0]++;
				cov_t26kee1gv.s[10]++;

				this.handleStartAnimation();
			} else {
				cov_t26kee1gv.b[0][1]++;
			}

			cov_t26kee1gv.s[11]++;
			if (this.props.isErasing) {
				cov_t26kee1gv.b[1][0]++;
				cov_t26kee1gv.s[12]++;

				this.handleStartErasion();
			} else {
				cov_t26kee1gv.b[1][1]++;
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			cov_t26kee1gv.f[2]++;
			cov_t26kee1gv.s[13]++;

			if ((cov_t26kee1gv.b[3][0]++, !this.props.isAnimating) && (cov_t26kee1gv.b[3][1]++, nextProps.isAnimating)) {
				cov_t26kee1gv.b[2][0]++;
				cov_t26kee1gv.s[14]++;

				this.handleStartAnimation();
			} else {
				cov_t26kee1gv.b[2][1]++;
			}

			cov_t26kee1gv.s[15]++;
			if ((cov_t26kee1gv.b[5][0]++, this.props.isAnimating) && (cov_t26kee1gv.b[5][1]++, !nextProps.isAnimating)) {
				cov_t26kee1gv.b[4][0]++;
				cov_t26kee1gv.s[16]++;

				this.handleStopAnimation();
			} else {
				cov_t26kee1gv.b[4][1]++;
			}

			cov_t26kee1gv.s[17]++;
			if ((cov_t26kee1gv.b[7][0]++, !this.props.isErasing) && (cov_t26kee1gv.b[7][1]++, nextProps.isErasing)) {
				cov_t26kee1gv.b[6][0]++;
				cov_t26kee1gv.s[18]++;

				this.handleStartErasion();
			} else {
				cov_t26kee1gv.b[6][1]++;
			}

			cov_t26kee1gv.s[19]++;
			if ((cov_t26kee1gv.b[9][0]++, this.props.isErasing) && (cov_t26kee1gv.b[9][1]++, !nextProps.isErasing)) {
				cov_t26kee1gv.b[8][0]++;
				cov_t26kee1gv.s[20]++;

				this.handleStopErasion();
			} else {
				cov_t26kee1gv.b[8][1]++;
			}

			cov_t26kee1gv.s[21]++;
			if ((cov_t26kee1gv.b[11][0]++, !this.props.isRapid) && (cov_t26kee1gv.b[11][1]++, nextProps.isRapid)) {
				cov_t26kee1gv.b[10][0]++;
				cov_t26kee1gv.s[22]++;

				this.handleStartRapid();
			} else {
				cov_t26kee1gv.b[10][1]++;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			cov_t26kee1gv.f[19]++;
			cov_t26kee1gv.s[76]++;

			return React.createElement(
				'g',
				{ transform: this.getInitialTransform() },
				React.createElement('rect', {
					x: -this.getRectangleWidth() / 2,
					y: '-8',
					rx: '3',
					width: this.getRectangleWidth(),
					height: '16',
					fill: 'darkorange'
				}),
				React.createElement(
					Measure,
					{
						onResize: this.handleMeasureValue,
						bounds: true
					},
					({ measureRef }) => {
						cov_t26kee1gv.f[20]++;
						cov_t26kee1gv.s[77]++;
						return React.createElement(
							'text',
							{
								ref: measureRef,
								x: '0',
								y: '0',
								fontSize: '12',
								fill: 'white',
								textAnchor: 'middle',
								dominantBaseline: 'central'
							},
							this.getDisplayValue()
						);
					}
				)
			);
		}
	}]);

	return DataComponent;
}(React.Component);

DataComponent.propTypes = {
	direction: PropTypes.string.isRequired,
	isInward: PropTypes.bool.isRequired,
	isAnimating: PropTypes.bool.isRequired,
	isErasing: PropTypes.bool.isRequired,
	value: PropTypes.number.isRequired,
	// props.data should only be used in callback
	// eslint-disable-next-line react/forbid-prop-types
	data: PropTypes.object.isRequired,
	onAnimationComplete: PropTypes.func.isRequired,
	onEraseAnimationComplete: PropTypes.func.isRequired,
	isRapid: PropTypes.bool.isRequired,
	viewBoxScale: PropTypes.number
};
DataComponent.defaultProps = {
	viewBoxScale: null
};
cov_t26kee1gv.s[78]++;


module.exports = GSAP.default()(DataComponent);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-measure");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("core-js");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_r1c3k38rd = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/lib/block-configs.js',
	    hash = 'dc1966467f07e2271ba00329572519094b79fa72',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/lib/block-configs.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 13
				},
				end: {
					line: 1,
					column: 30
				}
			},
			'1': {
				start: {
					line: 3,
					column: 0
				},
				end: {
					line: 553,
					column: 2
				}
			},
			'2': {
				start: {
					line: 90,
					column: 15
				},
				end: {
					line: 90,
					column: 20
				}
			},
			'3': {
				start: {
					line: 100,
					column: 15
				},
				end: {
					line: 100,
					column: 20
				}
			},
			'4': {
				start: {
					line: 110,
					column: 15
				},
				end: {
					line: 110,
					column: 21
				}
			},
			'5': {
				start: {
					line: 120,
					column: 15
				},
				end: {
					line: 120,
					column: 20
				}
			},
			'6': {
				start: {
					line: 130,
					column: 15
				},
				end: {
					line: 130,
					column: 20
				}
			},
			'7': {
				start: {
					line: 140,
					column: 15
				},
				end: {
					line: 140,
					column: 20
				}
			},
			'8': {
				start: {
					line: 150,
					column: 15
				},
				end: {
					line: 150,
					column: 20
				}
			},
			'9': {
				start: {
					line: 160,
					column: 15
				},
				end: {
					line: 160,
					column: 42
				}
			},
			'10': {
				start: {
					line: 171,
					column: 15
				},
				end: {
					line: 171,
					column: 42
				}
			},
			'11': {
				start: {
					line: 181,
					column: 15
				},
				end: {
					line: 181,
					column: 44
				}
			},
			'12': {
				start: {
					line: 191,
					column: 15
				},
				end: {
					line: 191,
					column: 20
				}
			},
			'13': {
				start: {
					line: 201,
					column: 15
				},
				end: {
					line: 201,
					column: 62
				}
			},
			'14': {
				start: {
					line: 211,
					column: 15
				},
				end: {
					line: 211,
					column: 61
				}
			},
			'15': {
				start: {
					line: 221,
					column: 14
				},
				end: {
					line: 221,
					column: 15
				}
			},
			'16': {
				start: {
					line: 231,
					column: 14
				},
				end: {
					line: 231,
					column: 15
				}
			},
			'17': {
				start: {
					line: 241,
					column: 14
				},
				end: {
					line: 241,
					column: 15
				}
			},
			'18': {
				start: {
					line: 251,
					column: 14
				},
				end: {
					line: 251,
					column: 15
				}
			},
			'19': {
				start: {
					line: 261,
					column: 14
				},
				end: {
					line: 261,
					column: 16
				}
			},
			'20': {
				start: {
					line: 271,
					column: 18
				},
				end: {
					line: 271,
					column: 23
				}
			},
			'21': {
				start: {
					line: 280,
					column: 18
				},
				end: {
					line: 280,
					column: 23
				}
			},
			'22': {
				start: {
					line: 289,
					column: 18
				},
				end: {
					line: 289,
					column: 23
				}
			},
			'23': {
				start: {
					line: 299,
					column: 3
				},
				end: {
					line: 301,
					column: 4
				}
			},
			'24': {
				start: {
					line: 300,
					column: 4
				},
				end: {
					line: 300,
					column: 17
				}
			},
			'25': {
				start: {
					line: 302,
					column: 3
				},
				end: {
					line: 302,
					column: 38
				}
			},
			'26': {
				start: {
					line: 312,
					column: 18
				},
				end: {
					line: 312,
					column: 23
				}
			},
			'27': {
				start: {
					line: 322,
					column: 3
				},
				end: {
					line: 324,
					column: 4
				}
			},
			'28': {
				start: {
					line: 323,
					column: 4
				},
				end: {
					line: 323,
					column: 13
				}
			},
			'29': {
				start: {
					line: 325,
					column: 3
				},
				end: {
					line: 325,
					column: 48
				}
			},
			'30': {
				start: {
					line: 335,
					column: 18
				},
				end: {
					line: 335,
					column: 74
				}
			},
			'31': {
				start: {
					line: 344,
					column: 15
				},
				end: {
					line: 344,
					column: 51
				}
			},
			'32': {
				start: {
					line: 354,
					column: 18
				},
				end: {
					line: 354,
					column: 24
				}
			},
			'33': {
				start: {
					line: 363,
					column: 18
				},
				end: {
					line: 363,
					column: 24
				}
			},
			'34': {
				start: {
					line: 372,
					column: 18
				},
				end: {
					line: 372,
					column: 23
				}
			},
			'35': {
				start: {
					line: 381,
					column: 18
				},
				end: {
					line: 381,
					column: 23
				}
			},
			'36': {
				start: {
					line: 390,
					column: 18
				},
				end: {
					line: 390,
					column: 23
				}
			},
			'37': {
				start: {
					line: 399,
					column: 18
				},
				end: {
					line: 399,
					column: 33
				}
			},
			'38': {
				start: {
					line: 409,
					column: 18
				},
				end: {
					line: 409,
					column: 33
				}
			},
			'39': {
				start: {
					line: 418,
					column: 18
				},
				end: {
					line: 418,
					column: 31
				}
			},
			'40': {
				start: {
					line: 427,
					column: 18
				},
				end: {
					line: 427,
					column: 32
				}
			},
			'41': {
				start: {
					line: 436,
					column: 18
				},
				end: {
					line: 436,
					column: 31
				}
			},
			'42': {
				start: {
					line: 445,
					column: 18
				},
				end: {
					line: 445,
					column: 32
				}
			},
			'43': {
				start: {
					line: 454,
					column: 21
				},
				end: {
					line: 454,
					column: 30
				}
			},
			'44': {
				start: {
					line: 463,
					column: 15
				},
				end: {
					line: 463,
					column: 16
				}
			},
			'45': {
				start: {
					line: 473,
					column: 16
				},
				end: {
					line: 476,
					column: 3
				}
			},
			'46': {
				start: {
					line: 486,
					column: 19
				},
				end: {
					line: 489,
					column: 3
				}
			},
			'47': {
				start: {
					line: 499,
					column: 18
				},
				end: {
					line: 499,
					column: 46
				}
			},
			'48': {
				start: {
					line: 508,
					column: 18
				},
				end: {
					line: 508,
					column: 46
				}
			},
			'49': {
				start: {
					line: 517,
					column: 18
				},
				end: {
					line: 517,
					column: 46
				}
			},
			'50': {
				start: {
					line: 526,
					column: 18
				},
				end: {
					line: 526,
					column: 46
				}
			},
			'51': {
				start: {
					line: 535,
					column: 15
				},
				end: {
					line: 535,
					column: 30
				}
			},
			'52': {
				start: {
					line: 546,
					column: 18
				},
				end: {
					line: 546,
					column: 45
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 90,
						column: 8
					},
					end: {
						line: 90,
						column: 9
					}
				},
				loc: {
					start: {
						line: 90,
						column: 15
					},
					end: {
						line: 90,
						column: 20
					}
				},
				line: 90
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 100,
						column: 8
					},
					end: {
						line: 100,
						column: 9
					}
				},
				loc: {
					start: {
						line: 100,
						column: 15
					},
					end: {
						line: 100,
						column: 20
					}
				},
				line: 100
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 110,
						column: 8
					},
					end: {
						line: 110,
						column: 9
					}
				},
				loc: {
					start: {
						line: 110,
						column: 15
					},
					end: {
						line: 110,
						column: 21
					}
				},
				line: 110
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 120,
						column: 8
					},
					end: {
						line: 120,
						column: 9
					}
				},
				loc: {
					start: {
						line: 120,
						column: 15
					},
					end: {
						line: 120,
						column: 20
					}
				},
				line: 120
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 130,
						column: 8
					},
					end: {
						line: 130,
						column: 9
					}
				},
				loc: {
					start: {
						line: 130,
						column: 15
					},
					end: {
						line: 130,
						column: 20
					}
				},
				line: 130
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 140,
						column: 8
					},
					end: {
						line: 140,
						column: 9
					}
				},
				loc: {
					start: {
						line: 140,
						column: 15
					},
					end: {
						line: 140,
						column: 20
					}
				},
				line: 140
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 150,
						column: 8
					},
					end: {
						line: 150,
						column: 9
					}
				},
				loc: {
					start: {
						line: 150,
						column: 15
					},
					end: {
						line: 150,
						column: 20
					}
				},
				line: 150
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 160,
						column: 8
					},
					end: {
						line: 160,
						column: 9
					}
				},
				loc: {
					start: {
						line: 160,
						column: 15
					},
					end: {
						line: 160,
						column: 42
					}
				},
				line: 160
			},
			'8': {
				name: '(anonymous_8)',
				decl: {
					start: {
						line: 171,
						column: 8
					},
					end: {
						line: 171,
						column: 9
					}
				},
				loc: {
					start: {
						line: 171,
						column: 15
					},
					end: {
						line: 171,
						column: 42
					}
				},
				line: 171
			},
			'9': {
				name: '(anonymous_9)',
				decl: {
					start: {
						line: 181,
						column: 8
					},
					end: {
						line: 181,
						column: 9
					}
				},
				loc: {
					start: {
						line: 181,
						column: 15
					},
					end: {
						line: 181,
						column: 44
					}
				},
				line: 181
			},
			'10': {
				name: '(anonymous_10)',
				decl: {
					start: {
						line: 191,
						column: 8
					},
					end: {
						line: 191,
						column: 9
					}
				},
				loc: {
					start: {
						line: 191,
						column: 15
					},
					end: {
						line: 191,
						column: 20
					}
				},
				line: 191
			},
			'11': {
				name: '(anonymous_11)',
				decl: {
					start: {
						line: 201,
						column: 8
					},
					end: {
						line: 201,
						column: 9
					}
				},
				loc: {
					start: {
						line: 201,
						column: 15
					},
					end: {
						line: 201,
						column: 62
					}
				},
				line: 201
			},
			'12': {
				name: '(anonymous_12)',
				decl: {
					start: {
						line: 211,
						column: 8
					},
					end: {
						line: 211,
						column: 9
					}
				},
				loc: {
					start: {
						line: 211,
						column: 15
					},
					end: {
						line: 211,
						column: 61
					}
				},
				line: 211
			},
			'13': {
				name: '(anonymous_13)',
				decl: {
					start: {
						line: 221,
						column: 8
					},
					end: {
						line: 221,
						column: 9
					}
				},
				loc: {
					start: {
						line: 221,
						column: 14
					},
					end: {
						line: 221,
						column: 15
					}
				},
				line: 221
			},
			'14': {
				name: '(anonymous_14)',
				decl: {
					start: {
						line: 231,
						column: 8
					},
					end: {
						line: 231,
						column: 9
					}
				},
				loc: {
					start: {
						line: 231,
						column: 14
					},
					end: {
						line: 231,
						column: 15
					}
				},
				line: 231
			},
			'15': {
				name: '(anonymous_15)',
				decl: {
					start: {
						line: 241,
						column: 8
					},
					end: {
						line: 241,
						column: 9
					}
				},
				loc: {
					start: {
						line: 241,
						column: 14
					},
					end: {
						line: 241,
						column: 15
					}
				},
				line: 241
			},
			'16': {
				name: '(anonymous_16)',
				decl: {
					start: {
						line: 251,
						column: 8
					},
					end: {
						line: 251,
						column: 9
					}
				},
				loc: {
					start: {
						line: 251,
						column: 14
					},
					end: {
						line: 251,
						column: 15
					}
				},
				line: 251
			},
			'17': {
				name: '(anonymous_17)',
				decl: {
					start: {
						line: 261,
						column: 8
					},
					end: {
						line: 261,
						column: 9
					}
				},
				loc: {
					start: {
						line: 261,
						column: 14
					},
					end: {
						line: 261,
						column: 16
					}
				},
				line: 261
			},
			'18': {
				name: '(anonymous_18)',
				decl: {
					start: {
						line: 271,
						column: 8
					},
					end: {
						line: 271,
						column: 9
					}
				},
				loc: {
					start: {
						line: 271,
						column: 18
					},
					end: {
						line: 271,
						column: 23
					}
				},
				line: 271
			},
			'19': {
				name: '(anonymous_19)',
				decl: {
					start: {
						line: 280,
						column: 8
					},
					end: {
						line: 280,
						column: 9
					}
				},
				loc: {
					start: {
						line: 280,
						column: 18
					},
					end: {
						line: 280,
						column: 23
					}
				},
				line: 280
			},
			'20': {
				name: '(anonymous_20)',
				decl: {
					start: {
						line: 289,
						column: 8
					},
					end: {
						line: 289,
						column: 9
					}
				},
				loc: {
					start: {
						line: 289,
						column: 18
					},
					end: {
						line: 289,
						column: 23
					}
				},
				line: 289
			},
			'21': {
				name: '(anonymous_21)',
				decl: {
					start: {
						line: 298,
						column: 8
					},
					end: {
						line: 298,
						column: 9
					}
				},
				loc: {
					start: {
						line: 298,
						column: 18
					},
					end: {
						line: 303,
						column: 3
					}
				},
				line: 298
			},
			'22': {
				name: '(anonymous_22)',
				decl: {
					start: {
						line: 312,
						column: 8
					},
					end: {
						line: 312,
						column: 9
					}
				},
				loc: {
					start: {
						line: 312,
						column: 18
					},
					end: {
						line: 312,
						column: 23
					}
				},
				line: 312
			},
			'23': {
				name: '(anonymous_23)',
				decl: {
					start: {
						line: 321,
						column: 8
					},
					end: {
						line: 321,
						column: 9
					}
				},
				loc: {
					start: {
						line: 321,
						column: 18
					},
					end: {
						line: 326,
						column: 3
					}
				},
				line: 321
			},
			'24': {
				name: '(anonymous_24)',
				decl: {
					start: {
						line: 335,
						column: 8
					},
					end: {
						line: 335,
						column: 9
					}
				},
				loc: {
					start: {
						line: 335,
						column: 18
					},
					end: {
						line: 335,
						column: 74
					}
				},
				line: 335
			},
			'25': {
				name: '(anonymous_25)',
				decl: {
					start: {
						line: 344,
						column: 8
					},
					end: {
						line: 344,
						column: 9
					}
				},
				loc: {
					start: {
						line: 344,
						column: 15
					},
					end: {
						line: 344,
						column: 51
					}
				},
				line: 344
			},
			'26': {
				name: '(anonymous_26)',
				decl: {
					start: {
						line: 354,
						column: 8
					},
					end: {
						line: 354,
						column: 9
					}
				},
				loc: {
					start: {
						line: 354,
						column: 18
					},
					end: {
						line: 354,
						column: 24
					}
				},
				line: 354
			},
			'27': {
				name: '(anonymous_27)',
				decl: {
					start: {
						line: 363,
						column: 8
					},
					end: {
						line: 363,
						column: 9
					}
				},
				loc: {
					start: {
						line: 363,
						column: 18
					},
					end: {
						line: 363,
						column: 24
					}
				},
				line: 363
			},
			'28': {
				name: '(anonymous_28)',
				decl: {
					start: {
						line: 372,
						column: 8
					},
					end: {
						line: 372,
						column: 9
					}
				},
				loc: {
					start: {
						line: 372,
						column: 18
					},
					end: {
						line: 372,
						column: 23
					}
				},
				line: 372
			},
			'29': {
				name: '(anonymous_29)',
				decl: {
					start: {
						line: 381,
						column: 8
					},
					end: {
						line: 381,
						column: 9
					}
				},
				loc: {
					start: {
						line: 381,
						column: 18
					},
					end: {
						line: 381,
						column: 23
					}
				},
				line: 381
			},
			'30': {
				name: '(anonymous_30)',
				decl: {
					start: {
						line: 390,
						column: 8
					},
					end: {
						line: 390,
						column: 9
					}
				},
				loc: {
					start: {
						line: 390,
						column: 18
					},
					end: {
						line: 390,
						column: 23
					}
				},
				line: 390
			},
			'31': {
				name: '(anonymous_31)',
				decl: {
					start: {
						line: 399,
						column: 8
					},
					end: {
						line: 399,
						column: 9
					}
				},
				loc: {
					start: {
						line: 399,
						column: 18
					},
					end: {
						line: 399,
						column: 33
					}
				},
				line: 399
			},
			'32': {
				name: '(anonymous_32)',
				decl: {
					start: {
						line: 409,
						column: 8
					},
					end: {
						line: 409,
						column: 9
					}
				},
				loc: {
					start: {
						line: 409,
						column: 18
					},
					end: {
						line: 409,
						column: 33
					}
				},
				line: 409
			},
			'33': {
				name: '(anonymous_33)',
				decl: {
					start: {
						line: 418,
						column: 8
					},
					end: {
						line: 418,
						column: 9
					}
				},
				loc: {
					start: {
						line: 418,
						column: 18
					},
					end: {
						line: 418,
						column: 31
					}
				},
				line: 418
			},
			'34': {
				name: '(anonymous_34)',
				decl: {
					start: {
						line: 427,
						column: 8
					},
					end: {
						line: 427,
						column: 9
					}
				},
				loc: {
					start: {
						line: 427,
						column: 18
					},
					end: {
						line: 427,
						column: 32
					}
				},
				line: 427
			},
			'35': {
				name: '(anonymous_35)',
				decl: {
					start: {
						line: 436,
						column: 8
					},
					end: {
						line: 436,
						column: 9
					}
				},
				loc: {
					start: {
						line: 436,
						column: 18
					},
					end: {
						line: 436,
						column: 31
					}
				},
				line: 436
			},
			'36': {
				name: '(anonymous_36)',
				decl: {
					start: {
						line: 445,
						column: 8
					},
					end: {
						line: 445,
						column: 9
					}
				},
				loc: {
					start: {
						line: 445,
						column: 18
					},
					end: {
						line: 445,
						column: 32
					}
				},
				line: 445
			},
			'37': {
				name: '(anonymous_37)',
				decl: {
					start: {
						line: 454,
						column: 8
					},
					end: {
						line: 454,
						column: 9
					}
				},
				loc: {
					start: {
						line: 454,
						column: 21
					},
					end: {
						line: 454,
						column: 30
					}
				},
				line: 454
			},
			'38': {
				name: '(anonymous_38)',
				decl: {
					start: {
						line: 463,
						column: 8
					},
					end: {
						line: 463,
						column: 9
					}
				},
				loc: {
					start: {
						line: 463,
						column: 15
					},
					end: {
						line: 463,
						column: 16
					}
				},
				line: 463
			},
			'39': {
				name: '(anonymous_39)',
				decl: {
					start: {
						line: 473,
						column: 8
					},
					end: {
						line: 473,
						column: 9
					}
				},
				loc: {
					start: {
						line: 473,
						column: 16
					},
					end: {
						line: 476,
						column: 3
					}
				},
				line: 473
			},
			'40': {
				name: '(anonymous_40)',
				decl: {
					start: {
						line: 486,
						column: 8
					},
					end: {
						line: 486,
						column: 9
					}
				},
				loc: {
					start: {
						line: 486,
						column: 19
					},
					end: {
						line: 489,
						column: 3
					}
				},
				line: 486
			},
			'41': {
				name: '(anonymous_41)',
				decl: {
					start: {
						line: 499,
						column: 8
					},
					end: {
						line: 499,
						column: 9
					}
				},
				loc: {
					start: {
						line: 499,
						column: 18
					},
					end: {
						line: 499,
						column: 46
					}
				},
				line: 499
			},
			'42': {
				name: '(anonymous_42)',
				decl: {
					start: {
						line: 508,
						column: 8
					},
					end: {
						line: 508,
						column: 9
					}
				},
				loc: {
					start: {
						line: 508,
						column: 18
					},
					end: {
						line: 508,
						column: 46
					}
				},
				line: 508
			},
			'43': {
				name: '(anonymous_43)',
				decl: {
					start: {
						line: 517,
						column: 8
					},
					end: {
						line: 517,
						column: 9
					}
				},
				loc: {
					start: {
						line: 517,
						column: 18
					},
					end: {
						line: 517,
						column: 46
					}
				},
				line: 517
			},
			'44': {
				name: '(anonymous_44)',
				decl: {
					start: {
						line: 526,
						column: 8
					},
					end: {
						line: 526,
						column: 9
					}
				},
				loc: {
					start: {
						line: 526,
						column: 18
					},
					end: {
						line: 526,
						column: 46
					}
				},
				line: 526
			},
			'45': {
				name: '(anonymous_45)',
				decl: {
					start: {
						line: 535,
						column: 8
					},
					end: {
						line: 535,
						column: 9
					}
				},
				loc: {
					start: {
						line: 535,
						column: 15
					},
					end: {
						line: 535,
						column: 30
					}
				},
				line: 535
			},
			'46': {
				name: '(anonymous_46)',
				decl: {
					start: {
						line: 546,
						column: 8
					},
					end: {
						line: 546,
						column: 9
					}
				},
				loc: {
					start: {
						line: 546,
						column: 18
					},
					end: {
						line: 546,
						column: 45
					}
				},
				line: 546
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 201,
						column: 15
					},
					end: {
						line: 201,
						column: 62
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 201,
						column: 25
					},
					end: {
						line: 201,
						column: 34
					}
				}, {
					start: {
						line: 201,
						column: 37
					},
					end: {
						line: 201,
						column: 62
					}
				}],
				line: 201
			},
			'1': {
				loc: {
					start: {
						line: 211,
						column: 15
					},
					end: {
						line: 211,
						column: 61
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 211,
						column: 25
					},
					end: {
						line: 211,
						column: 34
					}
				}, {
					start: {
						line: 211,
						column: 37
					},
					end: {
						line: 211,
						column: 61
					}
				}],
				line: 211
			},
			'2': {
				loc: {
					start: {
						line: 299,
						column: 3
					},
					end: {
						line: 301,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 299,
						column: 3
					},
					end: {
						line: 301,
						column: 4
					}
				}, {
					start: {
						line: 299,
						column: 3
					},
					end: {
						line: 301,
						column: 4
					}
				}],
				line: 299
			},
			'3': {
				loc: {
					start: {
						line: 322,
						column: 3
					},
					end: {
						line: 324,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 322,
						column: 3
					},
					end: {
						line: 324,
						column: 4
					}
				}, {
					start: {
						line: 322,
						column: 3
					},
					end: {
						line: 324,
						column: 4
					}
				}],
				line: 322
			},
			'4': {
				loc: {
					start: {
						line: 322,
						column: 7
					},
					end: {
						line: 322,
						column: 53
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 322,
						column: 7
					},
					end: {
						line: 322,
						column: 14
					}
				}, {
					start: {
						line: 322,
						column: 19
					},
					end: {
						line: 322,
						column: 33
					}
				}, {
					start: {
						line: 322,
						column: 37
					},
					end: {
						line: 322,
						column: 52
					}
				}],
				line: 322
			},
			'5': {
				loc: {
					start: {
						line: 335,
						column: 18
					},
					end: {
						line: 335,
						column: 74
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 335,
						column: 28
					},
					end: {
						line: 335,
						column: 37
					}
				}, {
					start: {
						line: 335,
						column: 40
					},
					end: {
						line: 335,
						column: 74
					}
				}],
				line: 335
			},
			'6': {
				loc: {
					start: {
						line: 344,
						column: 15
					},
					end: {
						line: 344,
						column: 51
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 344,
						column: 23
					},
					end: {
						line: 344,
						column: 24
					}
				}, {
					start: {
						line: 344,
						column: 27
					},
					end: {
						line: 344,
						column: 51
					}
				}],
				line: 344
			},
			'7': {
				loc: {
					start: {
						line: 399,
						column: 18
					},
					end: {
						line: 399,
						column: 33
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 399,
						column: 28
					},
					end: {
						line: 399,
						column: 29
					}
				}, {
					start: {
						line: 399,
						column: 32
					},
					end: {
						line: 399,
						column: 33
					}
				}],
				line: 399
			},
			'8': {
				loc: {
					start: {
						line: 409,
						column: 18
					},
					end: {
						line: 409,
						column: 33
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 409,
						column: 28
					},
					end: {
						line: 409,
						column: 29
					}
				}, {
					start: {
						line: 409,
						column: 32
					},
					end: {
						line: 409,
						column: 33
					}
				}],
				line: 409
			},
			'9': {
				loc: {
					start: {
						line: 418,
						column: 18
					},
					end: {
						line: 418,
						column: 31
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 418,
						column: 26
					},
					end: {
						line: 418,
						column: 27
					}
				}, {
					start: {
						line: 418,
						column: 30
					},
					end: {
						line: 418,
						column: 31
					}
				}],
				line: 418
			},
			'10': {
				loc: {
					start: {
						line: 427,
						column: 18
					},
					end: {
						line: 427,
						column: 32
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 427,
						column: 27
					},
					end: {
						line: 427,
						column: 28
					}
				}, {
					start: {
						line: 427,
						column: 31
					},
					end: {
						line: 427,
						column: 32
					}
				}],
				line: 427
			},
			'11': {
				loc: {
					start: {
						line: 436,
						column: 18
					},
					end: {
						line: 436,
						column: 31
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 436,
						column: 26
					},
					end: {
						line: 436,
						column: 27
					}
				}, {
					start: {
						line: 436,
						column: 30
					},
					end: {
						line: 436,
						column: 31
					}
				}],
				line: 436
			},
			'12': {
				loc: {
					start: {
						line: 445,
						column: 18
					},
					end: {
						line: 445,
						column: 32
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 445,
						column: 27
					},
					end: {
						line: 445,
						column: 28
					}
				}, {
					start: {
						line: 445,
						column: 31
					},
					end: {
						line: 445,
						column: 32
					}
				}],
				line: 445
			},
			'13': {
				loc: {
					start: {
						line: 454,
						column: 21
					},
					end: {
						line: 454,
						column: 30
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 454,
						column: 25
					},
					end: {
						line: 454,
						column: 26
					}
				}, {
					start: {
						line: 454,
						column: 29
					},
					end: {
						line: 454,
						column: 30
					}
				}],
				line: 454
			},
			'14': {
				loc: {
					start: {
						line: 474,
						column: 19
					},
					end: {
						line: 474,
						column: 28
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 474,
						column: 23
					},
					end: {
						line: 474,
						column: 24
					}
				}, {
					start: {
						line: 474,
						column: 27
					},
					end: {
						line: 474,
						column: 28
					}
				}],
				line: 474
			},
			'15': {
				loc: {
					start: {
						line: 487,
						column: 19
					},
					end: {
						line: 487,
						column: 28
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 487,
						column: 23
					},
					end: {
						line: 487,
						column: 24
					}
				}, {
					start: {
						line: 487,
						column: 27
					},
					end: {
						line: 487,
						column: 28
					}
				}],
				line: 487
			},
			'16': {
				loc: {
					start: {
						line: 499,
						column: 18
					},
					end: {
						line: 499,
						column: 46
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 499,
						column: 41
					},
					end: {
						line: 499,
						column: 42
					}
				}, {
					start: {
						line: 499,
						column: 45
					},
					end: {
						line: 499,
						column: 46
					}
				}],
				line: 499
			},
			'17': {
				loc: {
					start: {
						line: 499,
						column: 19
					},
					end: {
						line: 499,
						column: 37
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 499,
						column: 19
					},
					end: {
						line: 499,
						column: 26
					}
				}, {
					start: {
						line: 499,
						column: 30
					},
					end: {
						line: 499,
						column: 37
					}
				}],
				line: 499
			},
			'18': {
				loc: {
					start: {
						line: 508,
						column: 18
					},
					end: {
						line: 508,
						column: 46
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 508,
						column: 41
					},
					end: {
						line: 508,
						column: 42
					}
				}, {
					start: {
						line: 508,
						column: 45
					},
					end: {
						line: 508,
						column: 46
					}
				}],
				line: 508
			},
			'19': {
				loc: {
					start: {
						line: 508,
						column: 19
					},
					end: {
						line: 508,
						column: 37
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 508,
						column: 19
					},
					end: {
						line: 508,
						column: 26
					}
				}, {
					start: {
						line: 508,
						column: 30
					},
					end: {
						line: 508,
						column: 37
					}
				}],
				line: 508
			},
			'20': {
				loc: {
					start: {
						line: 517,
						column: 18
					},
					end: {
						line: 517,
						column: 46
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 517,
						column: 41
					},
					end: {
						line: 517,
						column: 42
					}
				}, {
					start: {
						line: 517,
						column: 45
					},
					end: {
						line: 517,
						column: 46
					}
				}],
				line: 517
			},
			'21': {
				loc: {
					start: {
						line: 517,
						column: 19
					},
					end: {
						line: 517,
						column: 37
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 517,
						column: 19
					},
					end: {
						line: 517,
						column: 26
					}
				}, {
					start: {
						line: 517,
						column: 30
					},
					end: {
						line: 517,
						column: 37
					}
				}],
				line: 517
			},
			'22': {
				loc: {
					start: {
						line: 526,
						column: 18
					},
					end: {
						line: 526,
						column: 46
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 526,
						column: 41
					},
					end: {
						line: 526,
						column: 42
					}
				}, {
					start: {
						line: 526,
						column: 45
					},
					end: {
						line: 526,
						column: 46
					}
				}],
				line: 526
			},
			'23': {
				loc: {
					start: {
						line: 526,
						column: 19
					},
					end: {
						line: 526,
						column: 37
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 526,
						column: 19
					},
					end: {
						line: 526,
						column: 26
					}
				}, {
					start: {
						line: 526,
						column: 30
					},
					end: {
						line: 526,
						column: 37
					}
				}],
				line: 526
			},
			'24': {
				loc: {
					start: {
						line: 535,
						column: 15
					},
					end: {
						line: 535,
						column: 30
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 535,
						column: 25
					},
					end: {
						line: 535,
						column: 26
					}
				}, {
					start: {
						line: 535,
						column: 29
					},
					end: {
						line: 535,
						column: 30
					}
				}],
				line: 535
			},
			'25': {
				loc: {
					start: {
						line: 546,
						column: 18
					},
					end: {
						line: 546,
						column: 45
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 546,
						column: 40
					},
					end: {
						line: 546,
						column: 41
					}
				}, {
					start: {
						line: 546,
						column: 44
					},
					end: {
						line: 546,
						column: 45
					}
				}],
				line: 546
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0,
			'33': 0,
			'34': 0,
			'35': 0,
			'36': 0,
			'37': 0,
			'38': 0,
			'39': 0,
			'40': 0,
			'41': 0,
			'42': 0,
			'43': 0,
			'44': 0,
			'45': 0,
			'46': 0,
			'47': 0,
			'48': 0,
			'49': 0,
			'50': 0,
			'51': 0,
			'52': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0,
			'33': 0,
			'34': 0,
			'35': 0,
			'36': 0,
			'37': 0,
			'38': 0,
			'39': 0,
			'40': 0,
			'41': 0,
			'42': 0,
			'43': 0,
			'44': 0,
			'45': 0,
			'46': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0],
			'4': [0, 0, 0],
			'5': [0, 0],
			'6': [0, 0],
			'7': [0, 0],
			'8': [0, 0],
			'9': [0, 0],
			'10': [0, 0],
			'11': [0, 0],
			'12': [0, 0],
			'13': [0, 0],
			'14': [0, 0],
			'15': [0, 0],
			'16': [0, 0],
			'17': [0, 0],
			'18': [0, 0],
			'19': [0, 0],
			'20': [0, 0],
			'21': [0, 0],
			'22': [0, 0],
			'23': [0, 0],
			'24': [0, 0],
			'25': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

const util = (cov_r1c3k38rd.s[0]++, __webpack_require__(0));

cov_r1c3k38rd.s[1]++;
module.exports = {
	empty: {
		type: 'empty',
		io: {}
	},
	wireI: {
		type: 'wire',
		io: {
			plugs: ['top', 'bottom']
		},
		weight: 1,
		rotatable: true
	},
	wireL: {
		type: 'wire',
		io: {
			plugs: ['top', 'right']
		},
		weight: 1,
		rotatable: true
	},
	wireT: {
		type: 'wire',
		io: {
			plugs: ['right', 'top', 'left']
		},
		weight: 1,
		rotatable: true
	},
	wireXdot: {
		type: 'wire',
		io: {
			plugs: ['right', 'top', 'left', 'bottom']
		},
		weight: 1,
		rotatable: false
	},
	wireX: {
		type: 'wireF',
		io: {
			flow: {
				top: ['bottom'],
				bottom: ['top'],
				left: ['right'],
				right: ['left']
			}
		},
		weight: 1
	},
	junctionR: {
		type: 'wireF',
		io: {
			flow: {
				top: ['right'],
				left: ['right'],
				right: ['top', 'left']
			}
		},
		weight: 2,
		rotatable: true
	},
	junctionL: {
		type: 'wireF',
		io: {
			flow: {
				top: ['left'],
				right: ['left'],
				left: ['top', 'right']
			}
		},
		weight: 2,
		rotatable: true
	},
	junctionT: {
		type: 'wireF',
		io: {
			flow: {
				top: ['left', 'right'],
				right: ['top'],
				left: ['top']
			}
		},
		weight: 2,
		rotatable: true
	},
	'times-2': {
		type: 'calc',
		func: n => {
			cov_r1c3k38rd.f[0]++;
			cov_r1c3k38rd.s[2]++;
			return n * 2;
		},
		io: {
			plugs: ['top', 'bottom']
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true
	},
	'times-3': {
		type: 'calc',
		func: n => {
			cov_r1c3k38rd.f[1]++;
			cov_r1c3k38rd.s[3]++;
			return n * 3;
		},
		io: {
			plugs: ['top', 'bottom']
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true
	},
	'times-10': {
		type: 'calc',
		func: n => {
			cov_r1c3k38rd.f[2]++;
			cov_r1c3k38rd.s[4]++;
			return n * 10;
		},
		io: {
			plugs: ['top', 'bottom']
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true
	},
	'add-3': {
		type: 'calc',
		func: n => {
			cov_r1c3k38rd.f[3]++;
			cov_r1c3k38rd.s[5]++;
			return n + 3;
		},
		io: {
			plugs: ['top', 'bottom']
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true
	},
	'plus-1': {
		type: 'calc',
		func: n => {
			cov_r1c3k38rd.f[4]++;
			cov_r1c3k38rd.s[6]++;
			return n + 1;
		},
		io: {
			plugs: ['top', 'bottom']
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true
	},
	'plus-2': {
		type: 'calc',
		func: n => {
			cov_r1c3k38rd.f[5]++;
			cov_r1c3k38rd.s[7]++;
			return n + 2;
		},
		io: {
			plugs: ['top', 'bottom']
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true
	},
	'minus-1': {
		type: 'calc',
		func: n => {
			cov_r1c3k38rd.f[6]++;
			cov_r1c3k38rd.s[8]++;
			return n - 1;
		},
		io: {
			plugs: ['top', 'bottom']
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true
	},
	'div-2': {
		type: 'calc',
		func: n => {
			cov_r1c3k38rd.f[7]++;
			cov_r1c3k38rd.s[9]++;
			return Math.round((n - n % 2) / 2);
		},

		io: {
			plugs: ['top', 'bottom']
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true
	},
	'div-3': {
		type: 'calc',
		func: n => {
			cov_r1c3k38rd.f[8]++;
			cov_r1c3k38rd.s[10]++;
			return Math.round((n - n % 3) / 3);
		},
		io: {
			plugs: ['top', 'bottom']
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true
	},
	'div-10': {
		type: 'calc',
		func: n => {
			cov_r1c3k38rd.f[9]++;
			cov_r1c3k38rd.s[11]++;
			return Math.round((n - n % 10) / 10);
		},
		io: {
			plugs: ['top', 'bottom']
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true
	},
	'minus-2': {
		type: 'calc',
		func: n => {
			cov_r1c3k38rd.f[10]++;
			cov_r1c3k38rd.s[12]++;
			return n - 2;
		},
		io: {
			plugs: ['top', 'bottom']
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true
	},
	log10: {
		type: 'calc',
		func: n => {
			cov_r1c3k38rd.f[11]++;
			cov_r1c3k38rd.s[13]++;
			return n === 0 ? (cov_r1c3k38rd.b[0][0]++, -Infinity) : (cov_r1c3k38rd.b[0][1]++, util.log(10, Math.abs(n)));
		},
		io: {
			plugs: ['top', 'bottom']
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true
	},
	log2: {
		type: 'calc',
		func: n => {
			cov_r1c3k38rd.f[12]++;
			cov_r1c3k38rd.s[14]++;
			return n === 0 ? (cov_r1c3k38rd.b[1][0]++, -Infinity) : (cov_r1c3k38rd.b[1][1]++, util.log(2, Math.abs(n)));
		},
		io: {
			plugs: ['top', 'bottom']
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true
	},
	'const-0': {
		type: 'calc',
		func: () => {
			cov_r1c3k38rd.f[13]++;
			cov_r1c3k38rd.s[15]++;
			return 0;
		},
		io: {
			plugs: ['top', 'bottom']
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true
	},
	'const-1': {
		type: 'calc',
		func: () => {
			cov_r1c3k38rd.f[14]++;
			cov_r1c3k38rd.s[16]++;
			return 1;
		},
		io: {
			plugs: ['top', 'bottom']
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true
	},
	'const-2': {
		type: 'calc',
		func: () => {
			cov_r1c3k38rd.f[15]++;
			cov_r1c3k38rd.s[17]++;
			return 2;
		},
		io: {
			plugs: ['top', 'bottom']
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true
	},
	'const-3': {
		type: 'calc',
		func: () => {
			cov_r1c3k38rd.f[16]++;
			cov_r1c3k38rd.s[18]++;
			return 3;
		},
		io: {
			plugs: ['top', 'bottom']
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true
	},
	'const-10': {
		type: 'calc',
		func: () => {
			cov_r1c3k38rd.f[17]++;
			cov_r1c3k38rd.s[19]++;
			return 10;
		},
		io: {
			plugs: ['top', 'bottom']
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true
	},
	add: {
		type: 'calc2',
		func: (a, b) => {
			cov_r1c3k38rd.f[18]++;
			cov_r1c3k38rd.s[20]++;
			return a + b;
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom'
		},
		weight: 3
	},
	sub: {
		type: 'calc2',
		func: (a, b) => {
			cov_r1c3k38rd.f[19]++;
			cov_r1c3k38rd.s[21]++;
			return a - b;
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom'
		},
		weight: 3
	},
	mul: {
		type: 'calc2',
		func: (a, b) => {
			cov_r1c3k38rd.f[20]++;
			cov_r1c3k38rd.s[22]++;
			return a * b;
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom'
		},
		weight: 3
	},
	div: {
		type: 'calc2',
		func: (a, b) => {
			cov_r1c3k38rd.f[21]++;
			cov_r1c3k38rd.s[23]++;

			if (b === 0) {
				cov_r1c3k38rd.b[2][0]++;
				cov_r1c3k38rd.s[24]++;

				return a / b;
			} else {
				cov_r1c3k38rd.b[2][1]++;
			}
			cov_r1c3k38rd.s[25]++;
			return Math.round((a - a % b) / b);
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom'
		},
		weight: 3
	},
	mod: {
		type: 'calc2',
		func: (a, b) => {
			cov_r1c3k38rd.f[22]++;
			cov_r1c3k38rd.s[26]++;
			return a % b;
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom'
		},
		weight: 3
	},
	pow: {
		type: 'calc2',
		func: (a, b) => {
			cov_r1c3k38rd.f[23]++;
			cov_r1c3k38rd.s[27]++;

			if ((cov_r1c3k38rd.b[4][0]++, a === 1) && ((cov_r1c3k38rd.b[4][1]++, b === Infinity) || (cov_r1c3k38rd.b[4][2]++, b === -Infinity))) {
				cov_r1c3k38rd.b[3][0]++;
				cov_r1c3k38rd.s[28]++;

				return 1;
			} else {
				cov_r1c3k38rd.b[3][1]++;
			}
			cov_r1c3k38rd.s[29]++;
			return util.floorTowardsZero(Math.pow(a, b));
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom'
		},
		weight: 3
	},
	log: {
		type: 'calc2',
		func: (a, b) => {
			cov_r1c3k38rd.f[24]++;
			cov_r1c3k38rd.s[30]++;
			return b === 0 ? (cov_r1c3k38rd.b[5][0]++, -Infinity) : (cov_r1c3k38rd.b[5][1]++, util.log(Math.abs(a), Math.abs(b)));
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom'
		},
		weight: 3
	},
	sqrt: {
		type: 'calc',
		func: n => {
			cov_r1c3k38rd.f[25]++;
			cov_r1c3k38rd.s[31]++;
			return n < 0 ? (cov_r1c3k38rd.b[6][0]++, 0) : (cov_r1c3k38rd.b[6][1]++, Math.floor(Math.sqrt(n)));
		},
		io: {
			plugs: ['top', 'bottom']
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true
	},
	'bitshift-left': {
		type: 'calc2',
		func: (a, b) => {
			cov_r1c3k38rd.f[26]++;
			cov_r1c3k38rd.s[32]++;
			return a << b;
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom'
		},
		weight: 3
	},
	'bitshift-right': {
		type: 'calc2',
		func: (a, b) => {
			cov_r1c3k38rd.f[27]++;
			cov_r1c3k38rd.s[33]++;
			return a >> b;
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom'
		},
		weight: 3
	},
	'bitwise-and': {
		type: 'calc2',
		func: (a, b) => {
			cov_r1c3k38rd.f[28]++;
			cov_r1c3k38rd.s[34]++;
			return a & b;
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom'
		},
		weight: 3
	},
	'bitwise-or': {
		type: 'calc2',
		func: (a, b) => {
			cov_r1c3k38rd.f[29]++;
			cov_r1c3k38rd.s[35]++;
			return a | b;
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom'
		},
		weight: 3
	},
	'bitwise-xor': {
		type: 'calc2',
		func: (a, b) => {
			cov_r1c3k38rd.f[30]++;
			cov_r1c3k38rd.s[36]++;
			return a ^ b;
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom'
		},
		weight: 3
	},
	equal: {
		type: 'calc2',
		func: (a, b) => {
			cov_r1c3k38rd.f[31]++;
			cov_r1c3k38rd.s[37]++;
			return a === b ? (cov_r1c3k38rd.b[7][0]++, 1) : (cov_r1c3k38rd.b[7][1]++, 0);
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom'
		},
		weight: 3
	},
	neq: {
		type: 'calc2',
		// eslint-disable-next-line no-negated-condition
		func: (a, b) => {
			cov_r1c3k38rd.f[32]++;
			cov_r1c3k38rd.s[38]++;
			return a !== b ? (cov_r1c3k38rd.b[8][0]++, 1) : (cov_r1c3k38rd.b[8][1]++, 0);
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom'
		},
		weight: 3
	},
	gt: {
		type: 'calc2',
		func: (a, b) => {
			cov_r1c3k38rd.f[33]++;
			cov_r1c3k38rd.s[39]++;
			return a > b ? (cov_r1c3k38rd.b[9][0]++, 1) : (cov_r1c3k38rd.b[9][1]++, 0);
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom'
		},
		weight: 3
	},
	geqq: {
		type: 'calc2',
		func: (a, b) => {
			cov_r1c3k38rd.f[34]++;
			cov_r1c3k38rd.s[40]++;
			return a >= b ? (cov_r1c3k38rd.b[10][0]++, 1) : (cov_r1c3k38rd.b[10][1]++, 0);
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom'
		},
		weight: 3
	},
	lt: {
		type: 'calc2',
		func: (a, b) => {
			cov_r1c3k38rd.f[35]++;
			cov_r1c3k38rd.s[41]++;
			return a < b ? (cov_r1c3k38rd.b[11][0]++, 1) : (cov_r1c3k38rd.b[11][1]++, 0);
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom'
		},
		weight: 3
	},
	leqq: {
		type: 'calc2',
		func: (a, b) => {
			cov_r1c3k38rd.f[36]++;
			cov_r1c3k38rd.s[42]++;
			return a <= b ? (cov_r1c3k38rd.b[12][0]++, 1) : (cov_r1c3k38rd.b[12][1]++, 0);
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom'
		},
		weight: 3
	},
	conditional: {
		type: 'calc2',
		func: (a, b, c) => {
			cov_r1c3k38rd.f[37]++;
			cov_r1c3k38rd.s[43]++;
			return a ? (cov_r1c3k38rd.b[13][0]++, b) : (cov_r1c3k38rd.b[13][1]++, c);
		},
		io: {
			in: ['top', 'left', 'right'],
			out: 'bottom'
		},
		weight: 3
	},
	diode: {
		type: 'calc2',
		func: a => {
			cov_r1c3k38rd.f[38]++;
			cov_r1c3k38rd.s[44]++;
			return a;
		},
		io: {
			in: ['right'],
			out: 'left'
		},
		weight: 3,
		rotatable: true
	},
	'c-contact': {
		type: 'calc-switch',
		func: a => {
			cov_r1c3k38rd.f[39]++;
			cov_r1c3k38rd.s[45]++;
			return {
				directionIndex: a ? (cov_r1c3k38rd.b[14][0]++, 1) : (cov_r1c3k38rd.b[14][1]++, 0),
				value: 1
			};
		},
		io: {
			in: ['top'],
			out: ['left', 'right']
		},
		weight: 3,
		rotatable: true
	},
	transistor: {
		type: 'calc-switch',
		func: (a, b) => {
			cov_r1c3k38rd.f[40]++;
			cov_r1c3k38rd.s[46]++;
			return {
				directionIndex: a ? (cov_r1c3k38rd.b[15][0]++, 1) : (cov_r1c3k38rd.b[15][1]++, 0),
				value: b
			};
		},
		io: {
			in: ['top', 'left'],
			out: ['bottom', 'right']
		},
		weight: 3,
		rotatable: true
	},
	and: {
		type: 'calc2',
		func: (a, b) => {
			cov_r1c3k38rd.f[41]++;
			cov_r1c3k38rd.s[47]++;
			return (cov_r1c3k38rd.b[17][0]++, a !== 0) && (cov_r1c3k38rd.b[17][1]++, b !== 0) ? (cov_r1c3k38rd.b[16][0]++, 1) : (cov_r1c3k38rd.b[16][1]++, 0);
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom'
		},
		weight: 3
	},
	or: {
		type: 'calc2',
		func: (a, b) => {
			cov_r1c3k38rd.f[42]++;
			cov_r1c3k38rd.s[48]++;
			return (cov_r1c3k38rd.b[19][0]++, a !== 0) || (cov_r1c3k38rd.b[19][1]++, b !== 0) ? (cov_r1c3k38rd.b[18][0]++, 1) : (cov_r1c3k38rd.b[18][1]++, 0);
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom'
		},
		weight: 3
	},
	nand: {
		type: 'calc2',
		func: (a, b) => {
			cov_r1c3k38rd.f[43]++;
			cov_r1c3k38rd.s[49]++;
			return (cov_r1c3k38rd.b[21][0]++, a !== 0) && (cov_r1c3k38rd.b[21][1]++, b !== 0) ? (cov_r1c3k38rd.b[20][0]++, 0) : (cov_r1c3k38rd.b[20][1]++, 1);
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom'
		},
		weight: 3
	},
	nor: {
		type: 'calc2',
		func: (a, b) => {
			cov_r1c3k38rd.f[44]++;
			cov_r1c3k38rd.s[50]++;
			return (cov_r1c3k38rd.b[23][0]++, a !== 0) || (cov_r1c3k38rd.b[23][1]++, b !== 0) ? (cov_r1c3k38rd.b[22][0]++, 0) : (cov_r1c3k38rd.b[22][1]++, 1);
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom'
		},
		weight: 3
	},
	not: {
		type: 'calc2',
		func: a => {
			cov_r1c3k38rd.f[45]++;
			cov_r1c3k38rd.s[51]++;
			return a === 0 ? (cov_r1c3k38rd.b[24][0]++, 1) : (cov_r1c3k38rd.b[24][1]++, 0);
		},
		io: {
			in: ['top'],
			out: 'bottom'
		},
		weight: 3,
		rotatable: true,
		onRotatableWire: true
	},
	xor: {
		type: 'calc2',
		func: (a, b) => {
			cov_r1c3k38rd.f[46]++;
			cov_r1c3k38rd.s[52]++;
			return a !== 0 ^ b !== 0 ? (cov_r1c3k38rd.b[25][0]++, 1) : (cov_r1c3k38rd.b[25][1]++, 0);
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom'
		},
		weight: 3
	}
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1ad1ro6evu = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/lib/io-component.jsx',
	    hash = '0c90faf59c00998122ddb19e048c7c1abac5e99a',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/lib/io-component.jsx',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 14
				},
				end: {
					line: 1,
					column: 30
				}
			},
			'1': {
				start: {
					line: 2,
					column: 18
				},
				end: {
					line: 2,
					column: 39
				}
			},
			'2': {
				start: {
					line: 3,
					column: 20
				},
				end: {
					line: 3,
					column: 37
				}
			},
			'3': {
				start: {
					line: 27,
					column: 2
				},
				end: {
					line: 39,
					column: 3
				}
			},
			'4': {
				start: {
					line: 28,
					column: 3
				},
				end: {
					line: 30,
					column: 4
				}
			},
			'5': {
				start: {
					line: 29,
					column: 4
				},
				end: {
					line: 29,
					column: 17
				}
			},
			'6': {
				start: {
					line: 32,
					column: 3
				},
				end: {
					line: 38,
					column: 21
				}
			},
			'7': {
				start: {
					line: 33,
					column: 4
				},
				end: {
					line: 35,
					column: 5
				}
			},
			'8': {
				start: {
					line: 34,
					column: 5
				},
				end: {
					line: 34,
					column: 16
				}
			},
			'9': {
				start: {
					line: 37,
					column: 4
				},
				end: {
					line: 37,
					column: 28
				}
			},
			'10': {
				start: {
					line: 41,
					column: 2
				},
				end: {
					line: 43,
					column: 3
				}
			},
			'11': {
				start: {
					line: 42,
					column: 3
				},
				end: {
					line: 42,
					column: 15
				}
			},
			'12': {
				start: {
					line: 45,
					column: 2
				},
				end: {
					line: 47,
					column: 3
				}
			},
			'13': {
				start: {
					line: 46,
					column: 3
				},
				end: {
					line: 46,
					column: 16
				}
			},
			'14': {
				start: {
					line: 49,
					column: 2
				},
				end: {
					line: 49,
					column: 37
				}
			},
			'15': {
				start: {
					line: 53,
					column: 2
				},
				end: {
					line: 118,
					column: 4
				}
			},
			'16': {
				start: {
					line: 122,
					column: 0
				},
				end: {
					line: 122,
					column: 29
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 26,
						column: 19
					},
					end: {
						line: 26,
						column: 20
					}
				},
				loc: {
					start: {
						line: 26,
						column: 25
					},
					end: {
						line: 50,
						column: 2
					}
				},
				line: 26
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 32,
						column: 41
					},
					end: {
						line: 32,
						column: 42
					}
				},
				loc: {
					start: {
						line: 32,
						column: 52
					},
					end: {
						line: 38,
						column: 4
					}
				},
				line: 32
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 52,
						column: 1
					},
					end: {
						line: 52,
						column: 2
					}
				},
				loc: {
					start: {
						line: 52,
						column: 10
					},
					end: {
						line: 119,
						column: 2
					}
				},
				line: 52
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 27,
						column: 2
					},
					end: {
						line: 39,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 27,
						column: 2
					},
					end: {
						line: 39,
						column: 3
					}
				}, {
					start: {
						line: 27,
						column: 2
					},
					end: {
						line: 39,
						column: 3
					}
				}],
				line: 27
			},
			'1': {
				loc: {
					start: {
						line: 28,
						column: 3
					},
					end: {
						line: 30,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 28,
						column: 3
					},
					end: {
						line: 30,
						column: 4
					}
				}, {
					start: {
						line: 28,
						column: 3
					},
					end: {
						line: 30,
						column: 4
					}
				}],
				line: 28
			},
			'2': {
				loc: {
					start: {
						line: 28,
						column: 7
					},
					end: {
						line: 28,
						column: 68
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 28,
						column: 7
					},
					end: {
						line: 28,
						column: 36
					}
				}, {
					start: {
						line: 28,
						column: 40
					},
					end: {
						line: 28,
						column: 68
					}
				}],
				line: 28
			},
			'3': {
				loc: {
					start: {
						line: 33,
						column: 4
					},
					end: {
						line: 35,
						column: 5
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 33,
						column: 4
					},
					end: {
						line: 35,
						column: 5
					}
				}, {
					start: {
						line: 33,
						column: 4
					},
					end: {
						line: 35,
						column: 5
					}
				}],
				line: 33
			},
			'4': {
				loc: {
					start: {
						line: 41,
						column: 2
					},
					end: {
						line: 43,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 41,
						column: 2
					},
					end: {
						line: 43,
						column: 3
					}
				}, {
					start: {
						line: 41,
						column: 2
					},
					end: {
						line: 43,
						column: 3
					}
				}],
				line: 41
			},
			'5': {
				loc: {
					start: {
						line: 41,
						column: 6
					},
					end: {
						line: 41,
						column: 54
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 41,
						column: 6
					},
					end: {
						line: 41,
						column: 25
					}
				}, {
					start: {
						line: 41,
						column: 29
					},
					end: {
						line: 41,
						column: 54
					}
				}],
				line: 41
			},
			'6': {
				loc: {
					start: {
						line: 45,
						column: 2
					},
					end: {
						line: 47,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 45,
						column: 2
					},
					end: {
						line: 47,
						column: 3
					}
				}, {
					start: {
						line: 45,
						column: 2
					},
					end: {
						line: 47,
						column: 3
					}
				}],
				line: 45
			},
			'7': {
				loc: {
					start: {
						line: 59,
						column: 11
					},
					end: {
						line: 59,
						column: 57
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 59,
						column: 31
					},
					end: {
						line: 59,
						column: 47
					}
				}, {
					start: {
						line: 59,
						column: 50
					},
					end: {
						line: 59,
						column: 57
					}
				}],
				line: 59
			},
			'8': {
				loc: {
					start: {
						line: 66,
						column: 5
					},
					end: {
						line: 77,
						column: 5
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 66,
						column: 5
					},
					end: {
						line: 66,
						column: 36
					}
				}, {
					start: {
						line: 67,
						column: 5
					},
					end: {
						line: 76,
						column: 9
					}
				}],
				line: 66
			},
			'9': {
				loc: {
					start: {
						line: 78,
						column: 5
					},
					end: {
						line: 99,
						column: 5
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 78,
						column: 5
					},
					end: {
						line: 78,
						column: 37
					}
				}, {
					start: {
						line: 79,
						column: 5
					},
					end: {
						line: 98,
						column: 9
					}
				}],
				line: 78
			},
			'10': {
				loc: {
					start: {
						line: 100,
						column: 5
					},
					end: {
						line: 116,
						column: 5
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 100,
						column: 5
					},
					end: {
						line: 100,
						column: 36
					}
				}, {
					start: {
						line: 101,
						column: 5
					},
					end: {
						line: 115,
						column: 12
					}
				}],
				line: 100
			},
			'11': {
				loc: {
					start: {
						line: 107,
						column: 12
					},
					end: {
						line: 107,
						column: 48
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 107,
						column: 32
					},
					end: {
						line: 107,
						column: 39
					}
				}, {
					start: {
						line: 107,
						column: 42
					},
					end: {
						line: 107,
						column: 48
					}
				}],
				line: 107
			},
			'12': {
				loc: {
					start: {
						line: 111,
						column: 19
					},
					end: {
						line: 111,
						column: 60
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 111,
						column: 39
					},
					end: {
						line: 111,
						column: 41
					}
				}, {
					start: {
						line: 111,
						column: 44
					},
					end: {
						line: 111,
						column: 60
					}
				}],
				line: 111
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0],
			'4': [0, 0],
			'5': [0, 0],
			'6': [0, 0],
			'7': [0, 0],
			'8': [0, 0],
			'9': [0, 0],
			'10': [0, 0],
			'11': [0, 0],
			'12': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

const React = (cov_1ad1ro6evu.s[0]++, __webpack_require__(1));
const PropTypes = (cov_1ad1ro6evu.s[1]++, __webpack_require__(3));
const { trimAfter } = (cov_1ad1ro6evu.s[2]++, __webpack_require__(0));

let IOComponent = function (_React$Component) {
	_inherits(IOComponent, _React$Component);

	function IOComponent(...args) {
		var _temp, _this, _ret;

		_classCallCheck(this, IOComponent);

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (IOComponent.__proto__ || Object.getPrototypeOf(IOComponent)).call(this, ...args)), _this), _this.getDisplayValue = () => {
			cov_1ad1ro6evu.f[0]++;
			cov_1ad1ro6evu.s[3]++;

			if (Array.isArray(_this.props.value)) {
				cov_1ad1ro6evu.b[0][0]++;
				cov_1ad1ro6evu.s[4]++;

				if ((cov_1ad1ro6evu.b[2][0]++, _this.props.value.length === 1) && (cov_1ad1ro6evu.b[2][1]++, _this.props.value[0] === null)) {
					cov_1ad1ro6evu.b[1][0]++;
					cov_1ad1ro6evu.s[5]++;

					return '???';
				} else {
					cov_1ad1ro6evu.b[1][1]++;
				}

				cov_1ad1ro6evu.s[6]++;
				return trimAfter(_this.props.value.map(value => {
					cov_1ad1ro6evu.f[1]++;
					cov_1ad1ro6evu.s[7]++;

					if (value === null) {
						cov_1ad1ro6evu.b[3][0]++;
						cov_1ad1ro6evu.s[8]++;

						return '?';
					} else {
						cov_1ad1ro6evu.b[3][1]++;
					}

					cov_1ad1ro6evu.s[9]++;
					return value.toString();
				}).join(','), 10);
			} else {
				cov_1ad1ro6evu.b[0][1]++;
			}

			cov_1ad1ro6evu.s[10]++;
			if ((cov_1ad1ro6evu.b[5][0]++, _this.props.nullable) && (cov_1ad1ro6evu.b[5][1]++, _this.props.value === null)) {
				cov_1ad1ro6evu.b[4][0]++;
				cov_1ad1ro6evu.s[11]++;

				return null;
			} else {
				cov_1ad1ro6evu.b[4][1]++;
			}

			cov_1ad1ro6evu.s[12]++;
			if (_this.props.value === null) {
				cov_1ad1ro6evu.b[6][0]++;
				cov_1ad1ro6evu.s[13]++;

				return '???';
			} else {
				cov_1ad1ro6evu.b[6][1]++;
			}

			cov_1ad1ro6evu.s[14]++;
			return _this.props.value.toString();
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(IOComponent, [{
		key: 'render',
		value: function render() {
			cov_1ad1ro6evu.f[2]++;
			cov_1ad1ro6evu.s[15]++;

			return React.createElement(
				'g',
				{ transform: `translate(${this.props.x}, ${this.props.y})` },
				React.createElement('rect', {
					width: '150',
					height: '50',
					rx: '8',
					fill: this.props.filled ? (cov_1ad1ro6evu.b[7][0]++, this.props.color) : (cov_1ad1ro6evu.b[7][1]++, 'white'),
					stroke: this.props.color,
					strokeWidth: '3',
					style: {
						transition: 'fill 0.3s ease, stroke 0.3s ease'
					}
				}),
				(cov_1ad1ro6evu.b[8][0]++, this.props.correctness === true) && (cov_1ad1ro6evu.b[8][1]++, React.createElement(
					'g',
					{ transform: 'translate(75, 25)', className: 'correctness' },
					React.createElement('circle', {
						cx: '0',
						cy: '0',
						r: '35',
						fill: 'none',
						stroke: 'red',
						strokeWidth: '14'
					})
				)),
				(cov_1ad1ro6evu.b[9][0]++, this.props.correctness === false) && (cov_1ad1ro6evu.b[9][1]++, React.createElement(
					'g',
					{ transform: 'translate(75, 25)', className: 'correctness' },
					React.createElement('line', {
						x1: '-30',
						y1: '-30',
						x2: '30',
						y2: '30',
						fill: 'none',
						stroke: 'blue',
						strokeWidth: '14'
					}),
					React.createElement('line', {
						x1: '30',
						y1: '-30',
						x2: '-30',
						y2: '30',
						fill: 'none',
						stroke: 'blue',
						strokeWidth: '14'
					})
				)),
				(cov_1ad1ro6evu.b[10][0]++, this.getDisplayValue() !== null) && (cov_1ad1ro6evu.b[10][1]++, React.createElement(
					'text',
					{
						x: '75',
						y: '25',
						fontSize: '30',
						fontFamily: '\'Exo 2\'',
						fontWeight: '900',
						fill: this.props.filled ? (cov_1ad1ro6evu.b[11][0]++, 'white') : (cov_1ad1ro6evu.b[11][1]++, '#333'),
						textAnchor: 'middle',
						dominantBaseline: 'central',
						style: {
							textShadow: this.props.filled ? (cov_1ad1ro6evu.b[12][0]++, '') : (cov_1ad1ro6evu.b[12][1]++, '0 0 15px white')
						}
					},
					this.getDisplayValue()
				))
			);
		}
	}]);

	return IOComponent;
}(React.Component);

IOComponent.propTypes = {
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	value: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
	correctness: PropTypes.bool,
	color: PropTypes.string.isRequired,
	filled: PropTypes.bool.isRequired,
	nullable: PropTypes.bool.isRequired
};
IOComponent.defaultProps = {
	value: null,
	correctness: null,
	filled: false,
	nullable: false
};
cov_1ad1ro6evu.s[16]++;


module.exports = IOComponent;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_11elel9nbw = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/calc03.js',
	    hash = '69e8e1b2f6dbd9590b8da907e0d35fd9fdb52800',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/calc03.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 32,
					column: 2
				}
			},
			'1': {
				start: {
					line: 19,
					column: 16
				},
				end: {
					line: 19,
					column: 45
				}
			},
			'2': {
				start: {
					line: 20,
					column: 17
				},
				end: {
					line: 20,
					column: 26
				}
			},
			'3': {
				start: {
					line: 22,
					column: 2
				},
				end: {
					line: 25,
					column: 4
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 18,
						column: 14
					},
					end: {
						line: 18,
						column: 15
					}
				},
				loc: {
					start: {
						line: 18,
						column: 26
					},
					end: {
						line: 26,
						column: 2
					}
				},
				line: 18
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0
		},
		f: {
			'0': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_11elel9nbw.s[0]++;
module.exports = {
	name: 'calc03',
	version: 4,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		'times-2': null,
		'times-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-2': null
	},
	inputX: 2,
	outputX: 2,
	input: [1, 3, null],
	output: [6, 18, null],
	ioGenerator: random => {
		cov_11elel9nbw.f[0]++;

		const input = (cov_11elel9nbw.s[1]++, 5 + Math.floor(random() * 10));
		const output = (cov_11elel9nbw.s[2]++, input * 6);

		cov_11elel9nbw.s[3]++;
		return {
			input: [1, 3, input],
			output: [6, 18, output]
		};
	},
	width: 5,
	height: 5,
	clockLimit: 25,
	statement: '数を6倍してみよう!',
	title: '四則演算 -基本- 3'
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2bnj0yni8d = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/conditional01.js',
	    hash = 'e475f4310dafb8b6c9b2473d05838becde17a28f',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/conditional01.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 44,
					column: 2
				}
			},
			'1': {
				start: {
					line: 27,
					column: 17
				},
				end: {
					line: 27,
					column: 43
				}
			},
			'2': {
				start: {
					line: 28,
					column: 18
				},
				end: {
					line: 28,
					column: 60
				}
			},
			'3': {
				start: {
					line: 30,
					column: 17
				},
				end: {
					line: 30,
					column: 43
				}
			},
			'4': {
				start: {
					line: 31,
					column: 18
				},
				end: {
					line: 31,
					column: 60
				}
			},
			'5': {
				start: {
					line: 33,
					column: 2
				},
				end: {
					line: 36,
					column: 4
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 26,
						column: 14
					},
					end: {
						line: 26,
						column: 15
					}
				},
				loc: {
					start: {
						line: 26,
						column: 26
					},
					end: {
						line: 37,
						column: 2
					}
				},
				line: 26
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 28,
						column: 18
					},
					end: {
						line: 28,
						column: 60
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 28,
						column: 37
					},
					end: {
						line: 28,
						column: 47
					}
				}, {
					start: {
						line: 28,
						column: 50
					},
					end: {
						line: 28,
						column: 60
					}
				}],
				line: 28
			},
			'1': {
				loc: {
					start: {
						line: 31,
						column: 18
					},
					end: {
						line: 31,
						column: 60
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 31,
						column: 37
					},
					end: {
						line: 31,
						column: 47
					}
				}, {
					start: {
						line: 31,
						column: 50
					},
					end: {
						line: 31,
						column: 60
					}
				}],
				line: 31
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0
		},
		f: {
			'0': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_2bnj0yni8d.s[0]++;
module.exports = {
	name: 'conditional01',
	version: 4,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		'times-2': null,
		'times-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-2': null,
		equal: null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		'c-contact': null,
		conditional: null,
		transistor: null
	},
	inputX: 4,
	outputX: 4,
	input: [5, -10, null, null],
	output: [15, -20, null, null],
	ioGenerator: random => {
		cov_2bnj0yni8d.f[0]++;

		const input1 = (cov_2bnj0yni8d.s[1]++, Math.floor(random() * 200));
		const output1 = (cov_2bnj0yni8d.s[2]++, input1 % 2 === 0 ? (cov_2bnj0yni8d.b[0][0]++, 2 * input1) : (cov_2bnj0yni8d.b[0][1]++, 3 * input1));

		const input2 = (cov_2bnj0yni8d.s[3]++, Math.floor(random() * 200));
		const output2 = (cov_2bnj0yni8d.s[4]++, input2 % 2 === 0 ? (cov_2bnj0yni8d.b[1][0]++, 2 * input2) : (cov_2bnj0yni8d.b[1][1]++, 3 * input2));

		cov_2bnj0yni8d.s[5]++;
		return {
			input: [5, -10, input1, input2],
			output: [15, -20, output1, output2]
		};
	},
	width: 9,
	height: 7,
	clockLimit: 100,
	statement: '偶数なら2倍,奇数なら3倍してみよう!',
	title: '条件分岐 -基本- 1',
	modal: 'conditionals'
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_m4vo606hi = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/conditional02.js',
	    hash = 'b380e44846c84152b597a6f20fdaafe1b2f23a23',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/conditional02.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 43,
					column: 2
				}
			},
			'1': {
				start: {
					line: 27,
					column: 21
				},
				end: {
					line: 28,
					column: 43
				}
			},
			'2': {
				start: {
					line: 27,
					column: 64
				},
				end: {
					line: 27,
					column: 73
				}
			},
			'3': {
				start: {
					line: 28,
					column: 20
				},
				end: {
					line: 28,
					column: 42
				}
			},
			'4': {
				start: {
					line: 30,
					column: 17
				},
				end: {
					line: 30,
					column: 69
				}
			},
			'5': {
				start: {
					line: 31,
					column: 17
				},
				end: {
					line: 31,
					column: 69
				}
			},
			'6': {
				start: {
					line: 33,
					column: 2
				},
				end: {
					line: 36,
					column: 4
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 26,
						column: 14
					},
					end: {
						line: 26,
						column: 15
					}
				},
				loc: {
					start: {
						line: 26,
						column: 26
					},
					end: {
						line: 37,
						column: 2
					}
				},
				line: 26
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 27,
						column: 47
					},
					end: {
						line: 27,
						column: 48
					}
				},
				loc: {
					start: {
						line: 27,
						column: 64
					},
					end: {
						line: 27,
						column: 73
					}
				},
				line: 27
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 28,
						column: 11
					},
					end: {
						line: 28,
						column: 12
					}
				},
				loc: {
					start: {
						line: 28,
						column: 20
					},
					end: {
						line: 28,
						column: 42
					}
				},
				line: 28
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 28,
						column: 20
					},
					end: {
						line: 28,
						column: 42
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 28,
						column: 20
					},
					end: {
						line: 28,
						column: 29
					}
				}, {
					start: {
						line: 28,
						column: 33
					},
					end: {
						line: 28,
						column: 42
					}
				}],
				line: 28
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0
		},
		b: {
			'0': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_m4vo606hi.s[0]++;
module.exports = {
	name: 'conditional02',
	version: 4,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		'times-2': null,
		'times-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-2': null,
		equal: null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		'c-contact': null,
		conditional: null,
		transistor: null
	},
	inputX: 5,
	outputX: 5,
	input: [5, 6, null, null],
	output: [10, 18, null, null],
	ioGenerator: random => {
		cov_m4vo606hi.f[0]++;

		const candidates = (cov_m4vo606hi.s[1]++, Array.from({ length: 200 }, (item, index) => {
			cov_m4vo606hi.f[1]++;
			cov_m4vo606hi.s[2]++;
			return index + 1;
		}).filter(val => {
			cov_m4vo606hi.f[2]++;
			cov_m4vo606hi.s[3]++;
			return (cov_m4vo606hi.b[0][0]++, val !== 5) && (cov_m4vo606hi.b[0][1]++, val !== 6);
		}));

		const input1 = (cov_m4vo606hi.s[4]++, candidates[Math.floor(random() * candidates.length)]);
		const input2 = (cov_m4vo606hi.s[5]++, candidates[Math.floor(random() * candidates.length)]);

		cov_m4vo606hi.s[6]++;
		return {
			input: [5, 6, input1, input2],
			output: [10, 18, input1, input2]
		};
	},
	width: 11,
	height: 11,
	clockLimit: 100,
	statement: '5は2倍、6は3倍、それ以外は1倍をしてみよう!',
	title: '条件分岐 -基本- 2'
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2euy1qhpez = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/conditional03.js',
	    hash = '1e34eebcd609a93572e869f33bc499438131ee1c',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/conditional03.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 69,
					column: 2
				}
			},
			'1': {
				start: {
					line: 28,
					column: 21
				},
				end: {
					line: 28,
					column: 36
				}
			},
			'2': {
				start: {
					line: 29,
					column: 17
				},
				end: {
					line: 29,
					column: 19
				}
			},
			'3': {
				start: {
					line: 32,
					column: 17
				},
				end: {
					line: 32,
					column: 41
				}
			},
			'4': {
				start: {
					line: 33,
					column: 2
				},
				end: {
					line: 33,
					column: 34
				}
			},
			'5': {
				start: {
					line: 34,
					column: 2
				},
				end: {
					line: 34,
					column: 37
				}
			},
			'6': {
				start: {
					line: 36,
					column: 17
				},
				end: {
					line: 36,
					column: 45
				}
			},
			'7': {
				start: {
					line: 37,
					column: 2
				},
				end: {
					line: 37,
					column: 34
				}
			},
			'8': {
				start: {
					line: 38,
					column: 2
				},
				end: {
					line: 38,
					column: 37
				}
			},
			'9': {
				start: {
					line: 40,
					column: 17
				},
				end: {
					line: 40,
					column: 45
				}
			},
			'10': {
				start: {
					line: 41,
					column: 2
				},
				end: {
					line: 41,
					column: 34
				}
			},
			'11': {
				start: {
					line: 43,
					column: 2
				},
				end: {
					line: 43,
					column: 31
				}
			},
			'12': {
				start: {
					line: 43,
					column: 24
				},
				end: {
					line: 43,
					column: 29
				}
			},
			'13': {
				start: {
					line: 45,
					column: 18
				},
				end: {
					line: 45,
					column: 58
				}
			},
			'14': {
				start: {
					line: 45,
					column: 41
				},
				end: {
					line: 45,
					column: 56
				}
			},
			'15': {
				start: {
					line: 47,
					column: 2
				},
				end: {
					line: 62,
					column: 4
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 27,
						column: 14
					},
					end: {
						line: 27,
						column: 15
					}
				},
				loc: {
					start: {
						line: 27,
						column: 26
					},
					end: {
						line: 63,
						column: 2
					}
				},
				line: 27
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 43,
						column: 14
					},
					end: {
						line: 43,
						column: 15
					}
				},
				loc: {
					start: {
						line: 43,
						column: 24
					},
					end: {
						line: 43,
						column: 29
					}
				},
				line: 43
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 45,
						column: 29
					},
					end: {
						line: 45,
						column: 30
					}
				},
				loc: {
					start: {
						line: 45,
						column: 41
					},
					end: {
						line: 45,
						column: 56
					}
				},
				line: 45
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_2euy1qhpez.s[0]++;
module.exports = {
	name: 'conditional03',
	version: 4,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		'times-2': null,
		'times-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-2': null,
		equal: null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		'c-contact': null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: 4,
	outputX: 4,
	input: [5, 3, null, null, null],
	output: [0, 5, null, null, null],
	ioGenerator: random => {
		cov_2euy1qhpez.f[0]++;

		const candidates = (cov_2euy1qhpez.s[1]++, [0, 1, 2, 4, 6]);
		const inputs = (cov_2euy1qhpez.s[2]++, []);

		// Shuffle array and take heading 3
		const index1 = (cov_2euy1qhpez.s[3]++, Math.floor(random() * 5));
		cov_2euy1qhpez.s[4]++;
		inputs.push(candidates[index1]);
		cov_2euy1qhpez.s[5]++;
		candidates[index1] = candidates[0];

		const index2 = (cov_2euy1qhpez.s[6]++, Math.floor(random() * 4) + 1);
		cov_2euy1qhpez.s[7]++;
		inputs.push(candidates[index2]);
		cov_2euy1qhpez.s[8]++;
		candidates[index2] = candidates[1];

		const index3 = (cov_2euy1qhpez.s[9]++, Math.floor(random() * 3) + 2);
		cov_2euy1qhpez.s[10]++;
		inputs.push(candidates[index3]);

		cov_2euy1qhpez.s[11]++;
		inputs.sort((a, b) => {
			cov_2euy1qhpez.f[1]++;
			cov_2euy1qhpez.s[12]++;
			return a - b;
		});

		const outputs = (cov_2euy1qhpez.s[13]++, inputs.map(input => {
			cov_2euy1qhpez.f[2]++;
			cov_2euy1qhpez.s[14]++;
			return (input + 2) % 7;
		}));

		cov_2euy1qhpez.s[15]++;
		return {
			input: [5, 3, inputs[0], inputs[1], inputs[2]],
			output: [0, 5, outputs[0], outputs[1], outputs[2]]
		};
	},
	width: 9,
	height: 9,
	clockLimit: 50,
	statement: 'mod7で2を足してみよう(入力は[0,6]であることが保証されている）',
	title: '条件分岐 -基本- 3'
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1ab29os9qv = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/factorial.js',
	    hash = '51e27817a656c72173b3228d35c50a2c60037374',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/factorial.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 68,
					column: 2
				}
			},
			'1': {
				start: {
					line: 29,
					column: 21
				},
				end: {
					line: 29,
					column: 73
				}
			},
			'2': {
				start: {
					line: 29,
					column: 63
				},
				end: {
					line: 29,
					column: 72
				}
			},
			'3': {
				start: {
					line: 30,
					column: 17
				},
				end: {
					line: 30,
					column: 19
				}
			},
			'4': {
				start: {
					line: 33,
					column: 17
				},
				end: {
					line: 33,
					column: 42
				}
			},
			'5': {
				start: {
					line: 34,
					column: 2
				},
				end: {
					line: 34,
					column: 34
				}
			},
			'6': {
				start: {
					line: 35,
					column: 2
				},
				end: {
					line: 35,
					column: 37
				}
			},
			'7': {
				start: {
					line: 37,
					column: 17
				},
				end: {
					line: 37,
					column: 46
				}
			},
			'8': {
				start: {
					line: 38,
					column: 2
				},
				end: {
					line: 38,
					column: 34
				}
			},
			'9': {
				start: {
					line: 39,
					column: 2
				},
				end: {
					line: 39,
					column: 37
				}
			},
			'10': {
				start: {
					line: 41,
					column: 17
				},
				end: {
					line: 41,
					column: 46
				}
			},
			'11': {
				start: {
					line: 42,
					column: 2
				},
				end: {
					line: 42,
					column: 34
				}
			},
			'12': {
				start: {
					line: 44,
					column: 2
				},
				end: {
					line: 44,
					column: 31
				}
			},
			'13': {
				start: {
					line: 44,
					column: 24
				},
				end: {
					line: 44,
					column: 29
				}
			},
			'14': {
				start: {
					line: 46,
					column: 20
				},
				end: {
					line: 46,
					column: 63
				}
			},
			'15': {
				start: {
					line: 46,
					column: 27
				},
				end: {
					line: 46,
					column: 63
				}
			},
			'16': {
				start: {
					line: 48,
					column: 2
				},
				end: {
					line: 61,
					column: 4
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 28,
						column: 14
					},
					end: {
						line: 28,
						column: 15
					}
				},
				loc: {
					start: {
						line: 28,
						column: 26
					},
					end: {
						line: 62,
						column: 2
					}
				},
				line: 28
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 29,
						column: 46
					},
					end: {
						line: 29,
						column: 47
					}
				},
				loc: {
					start: {
						line: 29,
						column: 63
					},
					end: {
						line: 29,
						column: 72
					}
				},
				line: 29
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 44,
						column: 14
					},
					end: {
						line: 44,
						column: 15
					}
				},
				loc: {
					start: {
						line: 44,
						column: 24
					},
					end: {
						line: 44,
						column: 29
					}
				},
				line: 44
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 46,
						column: 20
					},
					end: {
						line: 46,
						column: 21
					}
				},
				loc: {
					start: {
						line: 46,
						column: 27
					},
					end: {
						line: 46,
						column: 63
					}
				},
				line: 46
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 46,
						column: 27
					},
					end: {
						line: 46,
						column: 63
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 46,
						column: 39
					},
					end: {
						line: 46,
						column: 40
					}
				}, {
					start: {
						line: 46,
						column: 43
					},
					end: {
						line: 46,
						column: 63
					}
				}],
				line: 46
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0
		},
		b: {
			'0': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_1ab29os9qv.s[0]++;
module.exports = {
	name: 'factorial',
	version: 4,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'times-2': null,
		'times-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		equal: null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: 6,
	outputX: 6,
	input: [null, null, null, 15],
	output: [null, null, null, 1307674368000],
	ioGenerator: random => {
		cov_1ab29os9qv.f[0]++;

		const candidates = (cov_1ab29os9qv.s[1]++, Array.from({ length: 13 }, (item, index) => {
			cov_1ab29os9qv.f[1]++;
			cov_1ab29os9qv.s[2]++;
			return index + 2;
		})); // 2..14
		const inputs = (cov_1ab29os9qv.s[3]++, []);

		// Shuffle array and take heading 3
		const index1 = (cov_1ab29os9qv.s[4]++, Math.floor(random() * 13));
		cov_1ab29os9qv.s[5]++;
		inputs.push(candidates[index1]);
		cov_1ab29os9qv.s[6]++;
		candidates[index1] = candidates[0];

		const index2 = (cov_1ab29os9qv.s[7]++, Math.floor(random() * 12) + 1);
		cov_1ab29os9qv.s[8]++;
		inputs.push(candidates[index2]);
		cov_1ab29os9qv.s[9]++;
		candidates[index2] = candidates[1];

		const index3 = (cov_1ab29os9qv.s[10]++, Math.floor(random() * 11) + 2);
		cov_1ab29os9qv.s[11]++;
		inputs.push(candidates[index3]);

		cov_1ab29os9qv.s[12]++;
		inputs.sort((a, b) => {
			cov_1ab29os9qv.f[2]++;
			cov_1ab29os9qv.s[13]++;
			return a - b;
		});

		cov_1ab29os9qv.s[14]++;
		const factorial = n => {
			cov_1ab29os9qv.f[3]++;
			cov_1ab29os9qv.s[15]++;
			return n === 1 ? (cov_1ab29os9qv.b[0][0]++, 1) : (cov_1ab29os9qv.b[0][1]++, n * factorial(n - 1));
		};

		cov_1ab29os9qv.s[16]++;
		return {
			input: [inputs[0], inputs[1], inputs[2], 15],
			output: [factorial(inputs[0]), factorial(inputs[1]), factorial(inputs[2]), factorial(15)]
		};
	},
	width: 13,
	height: 13,
	clockLimit: 500,
	statement: '階乗を計算してみよう!',
	title: '階乗'
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_12cofqwyez = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/parity.js',
	    hash = '05f73edd393bb7a4a593fa887237f06f4be4dec6',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/parity.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 80,
					column: 2
				}
			},
			'1': {
				start: {
					line: 29,
					column: 22
				},
				end: {
					line: 31,
					column: 3
				}
			},
			'2': {
				start: {
					line: 30,
					column: 3
				},
				end: {
					line: 30,
					column: 73
				}
			},
			'3': {
				start: {
					line: 30,
					column: 37
				},
				end: {
					line: 30,
					column: 48
				}
			},
			'4': {
				start: {
					line: 30,
					column: 67
				},
				end: {
					line: 30,
					column: 72
				}
			},
			'5': {
				start: {
					line: 33,
					column: 17
				},
				end: {
					line: 33,
					column: 43
				}
			},
			'6': {
				start: {
					line: 33,
					column: 24
				},
				end: {
					line: 33,
					column: 43
				}
			},
			'7': {
				start: {
					line: 35,
					column: 17
				},
				end: {
					line: 35,
					column: 19
				}
			},
			'8': {
				start: {
					line: 38,
					column: 2
				},
				end: {
					line: 46,
					column: 8
				}
			},
			'9': {
				start: {
					line: 39,
					column: 11
				},
				end: {
					line: 39,
					column: 15
				}
			},
			'10': {
				start: {
					line: 41,
					column: 3
				},
				end: {
					line: 43,
					column: 36
				}
			},
			'11': {
				start: {
					line: 42,
					column: 4
				},
				end: {
					line: 42,
					column: 43
				}
			},
			'12': {
				start: {
					line: 45,
					column: 3
				},
				end: {
					line: 45,
					column: 12
				}
			},
			'13': {
				start: {
					line: 49,
					column: 2
				},
				end: {
					line: 57,
					column: 8
				}
			},
			'14': {
				start: {
					line: 50,
					column: 11
				},
				end: {
					line: 50,
					column: 15
				}
			},
			'15': {
				start: {
					line: 52,
					column: 3
				},
				end: {
					line: 54,
					column: 60
				}
			},
			'16': {
				start: {
					line: 53,
					column: 4
				},
				end: {
					line: 53,
					column: 43
				}
			},
			'17': {
				start: {
					line: 56,
					column: 3
				},
				end: {
					line: 56,
					column: 12
				}
			},
			'18': {
				start: {
					line: 60,
					column: 2
				},
				end: {
					line: 68,
					column: 8
				}
			},
			'19': {
				start: {
					line: 61,
					column: 11
				},
				end: {
					line: 61,
					column: 15
				}
			},
			'20': {
				start: {
					line: 63,
					column: 3
				},
				end: {
					line: 65,
					column: 37
				}
			},
			'21': {
				start: {
					line: 64,
					column: 4
				},
				end: {
					line: 64,
					column: 43
				}
			},
			'22': {
				start: {
					line: 67,
					column: 3
				},
				end: {
					line: 67,
					column: 12
				}
			},
			'23': {
				start: {
					line: 70,
					column: 2
				},
				end: {
					line: 73,
					column: 4
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 28,
						column: 14
					},
					end: {
						line: 28,
						column: 15
					}
				},
				loc: {
					start: {
						line: 28,
						column: 26
					},
					end: {
						line: 74,
						column: 2
					}
				},
				line: 28
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 29,
						column: 22
					},
					end: {
						line: 29,
						column: 23
					}
				},
				loc: {
					start: {
						line: 30,
						column: 3
					},
					end: {
						line: 30,
						column: 73
					}
				},
				line: 30
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 30,
						column: 30
					},
					end: {
						line: 30,
						column: 31
					}
				},
				loc: {
					start: {
						line: 30,
						column: 37
					},
					end: {
						line: 30,
						column: 48
					}
				},
				line: 30
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 30,
						column: 57
					},
					end: {
						line: 30,
						column: 58
					}
				},
				loc: {
					start: {
						line: 30,
						column: 67
					},
					end: {
						line: 30,
						column: 72
					}
				},
				line: 30
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 33,
						column: 17
					},
					end: {
						line: 33,
						column: 18
					}
				},
				loc: {
					start: {
						line: 33,
						column: 24
					},
					end: {
						line: 33,
						column: 43
					}
				},
				line: 33
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 38,
						column: 15
					},
					end: {
						line: 38,
						column: 16
					}
				},
				loc: {
					start: {
						line: 38,
						column: 21
					},
					end: {
						line: 46,
						column: 3
					}
				},
				line: 38
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 49,
						column: 15
					},
					end: {
						line: 49,
						column: 16
					}
				},
				loc: {
					start: {
						line: 49,
						column: 21
					},
					end: {
						line: 57,
						column: 3
					}
				},
				line: 49
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 60,
						column: 15
					},
					end: {
						line: 60,
						column: 16
					}
				},
				loc: {
					start: {
						line: 60,
						column: 21
					},
					end: {
						line: 68,
						column: 3
					}
				},
				line: 60
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 54,
						column: 14
					},
					end: {
						line: 54,
						column: 57
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 54,
						column: 14
					},
					end: {
						line: 54,
						column: 34
					}
				}, {
					start: {
						line: 54,
						column: 38
					},
					end: {
						line: 54,
						column: 57
					}
				}],
				line: 54
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0
		},
		b: {
			'0': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_12cofqwyez.s[0]++;
module.exports = {
	name: 'parity',
	version: 4,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'times-2': null,
		'times-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		equal: null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: 9,
	outputX: 9,
	input: [null, null, null],
	output: [null, null, null],
	ioGenerator: random => {
		cov_12cofqwyez.f[0]++;
		cov_12cofqwyez.s[1]++;

		const sumOfDigits = n => {
			cov_12cofqwyez.f[1]++;
			cov_12cofqwyez.s[2]++;
			return n.toString().split('').map(d => {
				cov_12cofqwyez.f[2]++;
				cov_12cofqwyez.s[3]++;
				return parseInt(d);
			}).reduce((a, b) => {
				cov_12cofqwyez.f[3]++;
				cov_12cofqwyez.s[4]++;
				return a + b;
			});
		};

		cov_12cofqwyez.s[5]++;
		const parity = n => {
			cov_12cofqwyez.f[4]++;
			cov_12cofqwyez.s[6]++;
			return sumOfDigits(n) % 10;
		};

		const inputs = (cov_12cofqwyez.s[7]++, []);

		// Sum of digits is less than 10
		cov_12cofqwyez.s[8]++;
		inputs.push((() => {
			cov_12cofqwyez.f[5]++;

			let n = (cov_12cofqwyez.s[9]++, null);

			cov_12cofqwyez.s[10]++;
			do {
				cov_12cofqwyez.s[11]++;

				n = 1000 + Math.floor(9000 * random());
			} while (!(sumOfDigits(n) < 10));

			cov_12cofqwyez.s[12]++;
			return n;
		})());

		// Sum of digits is less than 20
		cov_12cofqwyez.s[13]++;
		inputs.push((() => {
			cov_12cofqwyez.f[6]++;

			let n = (cov_12cofqwyez.s[14]++, null);

			cov_12cofqwyez.s[15]++;
			do {
				cov_12cofqwyez.s[16]++;

				n = 1000 + Math.floor(9000 * random());
			} while (!((cov_12cofqwyez.b[0][0]++, 10 <= sumOfDigits(n)) && (cov_12cofqwyez.b[0][1]++, sumOfDigits(n) < 20)));

			cov_12cofqwyez.s[17]++;
			return n;
		})());

		// Sum of digits is equal or greater than 20
		cov_12cofqwyez.s[18]++;
		inputs.push((() => {
			cov_12cofqwyez.f[7]++;

			let n = (cov_12cofqwyez.s[19]++, null);

			cov_12cofqwyez.s[20]++;
			do {
				cov_12cofqwyez.s[21]++;

				n = 1000 + Math.floor(9000 * random());
			} while (!(20 <= sumOfDigits(n)));

			cov_12cofqwyez.s[22]++;
			return n;
		})());

		cov_12cofqwyez.s[23]++;
		return {
			input: inputs,
			output: inputs.map(parity)
		};
	},
	width: 19,
	height: 19,
	clockLimit: 500,
	statement: '与えられた四桁の数の各桁の和をmod 10したものを計算してみよう!',
	title: 'パリティ'
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_mbe31dvgi = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/fibonacci.js',
	    hash = '956e5d599fe3be8f5d794af7655c130cbb0c5145',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/fibonacci.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 72,
					column: 2
				}
			},
			'1': {
				start: {
					line: 29,
					column: 20
				},
				end: {
					line: 29,
					column: 26
				}
			},
			'2': {
				start: {
					line: 31,
					column: 2
				},
				end: {
					line: 33,
					column: 3
				}
			},
			'3': {
				start: {
					line: 32,
					column: 3
				},
				end: {
					line: 32,
					column: 85
				}
			},
			'4': {
				start: {
					line: 35,
					column: 21
				},
				end: {
					line: 35,
					column: 73
				}
			},
			'5': {
				start: {
					line: 35,
					column: 63
				},
				end: {
					line: 35,
					column: 72
				}
			},
			'6': {
				start: {
					line: 36,
					column: 17
				},
				end: {
					line: 36,
					column: 19
				}
			},
			'7': {
				start: {
					line: 39,
					column: 17
				},
				end: {
					line: 39,
					column: 42
				}
			},
			'8': {
				start: {
					line: 40,
					column: 2
				},
				end: {
					line: 40,
					column: 34
				}
			},
			'9': {
				start: {
					line: 41,
					column: 2
				},
				end: {
					line: 41,
					column: 37
				}
			},
			'10': {
				start: {
					line: 43,
					column: 17
				},
				end: {
					line: 43,
					column: 46
				}
			},
			'11': {
				start: {
					line: 44,
					column: 2
				},
				end: {
					line: 44,
					column: 34
				}
			},
			'12': {
				start: {
					line: 45,
					column: 2
				},
				end: {
					line: 45,
					column: 37
				}
			},
			'13': {
				start: {
					line: 47,
					column: 17
				},
				end: {
					line: 47,
					column: 46
				}
			},
			'14': {
				start: {
					line: 48,
					column: 2
				},
				end: {
					line: 48,
					column: 34
				}
			},
			'15': {
				start: {
					line: 50,
					column: 2
				},
				end: {
					line: 50,
					column: 31
				}
			},
			'16': {
				start: {
					line: 50,
					column: 24
				},
				end: {
					line: 50,
					column: 29
				}
			},
			'17': {
				start: {
					line: 52,
					column: 2
				},
				end: {
					line: 65,
					column: 4
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 28,
						column: 14
					},
					end: {
						line: 28,
						column: 15
					}
				},
				loc: {
					start: {
						line: 28,
						column: 26
					},
					end: {
						line: 66,
						column: 2
					}
				},
				line: 28
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 35,
						column: 46
					},
					end: {
						line: 35,
						column: 47
					}
				},
				loc: {
					start: {
						line: 35,
						column: 63
					},
					end: {
						line: 35,
						column: 72
					}
				},
				line: 35
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 50,
						column: 14
					},
					end: {
						line: 50,
						column: 15
					}
				},
				loc: {
					start: {
						line: 50,
						column: 24
					},
					end: {
						line: 50,
						column: 29
					}
				},
				line: 50
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_mbe31dvgi.s[0]++;
module.exports = {
	name: 'fibonacci',
	version: 4,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'times-2': null,
		'times-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		equal: null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: 5,
	outputX: 5,
	input: [null, null, null, 20],
	output: [null, null, null, 6765],
	ioGenerator: random => {
		cov_mbe31dvgi.f[0]++;

		const fibonacci = (cov_mbe31dvgi.s[1]++, [1, 1]);

		cov_mbe31dvgi.s[2]++;
		for (let i = 2; i < 20; i++) {
			cov_mbe31dvgi.s[3]++;

			fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
		}

		const candidates = (cov_mbe31dvgi.s[4]++, Array.from({ length: 18 }, (item, index) => {
			cov_mbe31dvgi.f[1]++;
			cov_mbe31dvgi.s[5]++;
			return index + 2;
		})); // 2..19
		const inputs = (cov_mbe31dvgi.s[6]++, []);

		// Shuffle array and take heading 3
		const index1 = (cov_mbe31dvgi.s[7]++, Math.floor(random() * 18));
		cov_mbe31dvgi.s[8]++;
		inputs.push(candidates[index1]);
		cov_mbe31dvgi.s[9]++;
		candidates[index1] = candidates[0];

		const index2 = (cov_mbe31dvgi.s[10]++, Math.floor(random() * 17) + 1);
		cov_mbe31dvgi.s[11]++;
		inputs.push(candidates[index2]);
		cov_mbe31dvgi.s[12]++;
		candidates[index2] = candidates[1];

		const index3 = (cov_mbe31dvgi.s[13]++, Math.floor(random() * 16) + 2);
		cov_mbe31dvgi.s[14]++;
		inputs.push(candidates[index3]);

		cov_mbe31dvgi.s[15]++;
		inputs.sort((a, b) => {
			cov_mbe31dvgi.f[2]++;
			cov_mbe31dvgi.s[16]++;
			return a - b;
		});

		cov_mbe31dvgi.s[17]++;
		return {
			input: [inputs[0], inputs[1], inputs[2], 20],
			output: [fibonacci[inputs[0] - 1], fibonacci[inputs[1] - 1], fibonacci[inputs[2] - 1], fibonacci[19]]
		};
	},
	width: 11,
	height: 11,
	clockLimit: 500,
	statement: 'n番目のフィボナッチ数を計算してみよう!',
	title: 'フィボナッチ数'
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1ddoli7njy = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/power-hard.js',
	    hash = '36d7139a06b3a91f540f21233cc45936b4dad5e5',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/power-hard.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 78,
					column: 2
				}
			},
			'1': {
				start: {
					line: 47,
					column: 21
				},
				end: {
					line: 47,
					column: 82
				}
			},
			'2': {
				start: {
					line: 50,
					column: 25
				},
				end: {
					line: 50,
					column: 53
				}
			},
			'3': {
				start: {
					line: 53,
					column: 21
				},
				end: {
					line: 53,
					column: 81
				}
			},
			'4': {
				start: {
					line: 56,
					column: 28
				},
				end: {
					line: 56,
					column: 87
				}
			},
			'5': {
				start: {
					line: 58,
					column: 25
				},
				end: {
					line: 58,
					column: 81
				}
			},
			'6': {
				start: {
					line: 60,
					column: 2
				},
				end: {
					line: 71,
					column: 4
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 45,
						column: 14
					},
					end: {
						line: 45,
						column: 15
					}
				},
				loc: {
					start: {
						line: 45,
						column: 26
					},
					end: {
						line: 72,
						column: 2
					}
				},
				line: 45
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 47,
						column: 56
					},
					end: {
						line: 47,
						column: 81
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 47,
						column: 75
					},
					end: {
						line: 47,
						column: 76
					}
				}, {
					start: {
						line: 47,
						column: 79
					},
					end: {
						line: 47,
						column: 81
					}
				}],
				line: 47
			},
			'1': {
				loc: {
					start: {
						line: 53,
						column: 55
					},
					end: {
						line: 53,
						column: 80
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 53,
						column: 74
					},
					end: {
						line: 53,
						column: 75
					}
				}, {
					start: {
						line: 53,
						column: 78
					},
					end: {
						line: 53,
						column: 80
					}
				}],
				line: 53
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0
		},
		f: {
			'0': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_1ddoli7njy.s[0]++;
module.exports = {
	name: 'power-hard',
	version: 4,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'times-2': null,
		'times-3': null,
		'div-2': null,
		'div-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		mod: null,
		'bitshift-left': null,
		'bitshift-right': null,
		'bitwise-and': null,
		'bitwise-or': null,
		'bitwise-xor': null,
		equal: null,
		neq: null,
		gt: null,
		geqq: null,
		lt: null,
		leqq: null,
		'c-contact': null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: [6, 8],
	outputX: 7,
	input: [[null, null], [null, null], [2, 35]],
	output: [null, null, 34359738368],
	ioGenerator: random => {
		cov_1ddoli7njy.f[0]++;

		// 5..20 or -5..-20
		const input1Base = (cov_1ddoli7njy.s[1]++, (5 + Math.floor(random() * 16)) * (random() < 0.5 ? (cov_1ddoli7njy.b[0][0]++, 1) : (cov_1ddoli7njy.b[0][1]++, -1)));

		// 2..5
		const input1Exponent = (cov_1ddoli7njy.s[2]++, 2 + Math.floor(random() * 4));

		// 2..4 or -2..-4
		const input2Base = (cov_1ddoli7njy.s[3]++, (2 + Math.floor(random() * 3)) * (random() < 0.5 ? (cov_1ddoli7njy.b[1][0]++, 1) : (cov_1ddoli7njy.b[1][1]++, -1)));

		// The result of pow should not be greater than 1e10
		const input2MaxExponent = (cov_1ddoli7njy.s[4]++, Math.floor(Math.log(1e10) / Math.log(Math.abs(input2Base))));

		const input2Exponent = (cov_1ddoli7njy.s[5]++, 10 + Math.floor(random() * (input2MaxExponent - 10 + 1)));

		cov_1ddoli7njy.s[6]++;
		return {
			input: [[input1Base, input1Exponent], [input2Base, input2Exponent], [2, 35]],
			output: [Math.pow(input1Base, input1Exponent), Math.pow(input2Base, input2Exponent), Math.pow(2, 35)]
		};
	},
	width: 15,
	height: 15,
	clockLimit: 300,
	statement: '1つ目に与えられた数を2つ目に与えられた数乗してみよう!(ただし、愚直に計算すると時間がかかるので、より早く計算できるように工夫してみよう)',
	title: '累乗 -hard-'
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1ejist7n54 = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/gcd.js',
	    hash = '01569d829e69da4a6c0e77e8cc89fafb6a9ed55f',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/gcd.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 106,
					column: 2
				}
			},
			'1': {
				start: {
					line: 41,
					column: 23
				},
				end: {
					line: 48,
					column: 3
				}
			},
			'2': {
				start: {
					line: 42,
					column: 3
				},
				end: {
					line: 47,
					column: 4
				}
			},
			'3': {
				start: {
					line: 43,
					column: 14
				},
				end: {
					line: 43,
					column: 44
				}
			},
			'4': {
				start: {
					line: 44,
					column: 17
				},
				end: {
					line: 44,
					column: 25
				}
			},
			'5': {
				start: {
					line: 45,
					column: 4
				},
				end: {
					line: 45,
					column: 24
				}
			},
			'6': {
				start: {
					line: 46,
					column: 4
				},
				end: {
					line: 46,
					column: 20
				}
			},
			'7': {
				start: {
					line: 50,
					column: 14
				},
				end: {
					line: 56,
					column: 3
				}
			},
			'8': {
				start: {
					line: 51,
					column: 3
				},
				end: {
					line: 53,
					column: 4
				}
			},
			'9': {
				start: {
					line: 52,
					column: 4
				},
				end: {
					line: 52,
					column: 13
				}
			},
			'10': {
				start: {
					line: 55,
					column: 3
				},
				end: {
					line: 55,
					column: 26
				}
			},
			'11': {
				start: {
					line: 58,
					column: 17
				},
				end: {
					line: 58,
					column: 19
				}
			},
			'12': {
				start: {
					line: 60,
					column: 19
				},
				end: {
					line: 60,
					column: 70
				}
			},
			'13': {
				start: {
					line: 62,
					column: 2
				},
				end: {
					line: 62,
					column: 25
				}
			},
			'14': {
				start: {
					line: 63,
					column: 18
				},
				end: {
					line: 63,
					column: 66
				}
			},
			'15': {
				start: {
					line: 63,
					column: 56
				},
				end: {
					line: 63,
					column: 61
				}
			},
			'16': {
				start: {
					line: 64,
					column: 18
				},
				end: {
					line: 64,
					column: 66
				}
			},
			'17': {
				start: {
					line: 64,
					column: 56
				},
				end: {
					line: 64,
					column: 61
				}
			},
			'18': {
				start: {
					line: 66,
					column: 2
				},
				end: {
					line: 66,
					column: 34
				}
			},
			'19': {
				start: {
					line: 68,
					column: 19
				},
				end: {
					line: 68,
					column: 91
				}
			},
			'20': {
				start: {
					line: 70,
					column: 2
				},
				end: {
					line: 70,
					column: 25
				}
			},
			'21': {
				start: {
					line: 71,
					column: 18
				},
				end: {
					line: 71,
					column: 66
				}
			},
			'22': {
				start: {
					line: 71,
					column: 56
				},
				end: {
					line: 71,
					column: 61
				}
			},
			'23': {
				start: {
					line: 72,
					column: 18
				},
				end: {
					line: 72,
					column: 66
				}
			},
			'24': {
				start: {
					line: 72,
					column: 56
				},
				end: {
					line: 72,
					column: 61
				}
			},
			'25': {
				start: {
					line: 74,
					column: 2
				},
				end: {
					line: 74,
					column: 34
				}
			},
			'26': {
				start: {
					line: 76,
					column: 19
				},
				end: {
					line: 76,
					column: 81
				}
			},
			'27': {
				start: {
					line: 78,
					column: 2
				},
				end: {
					line: 78,
					column: 25
				}
			},
			'28': {
				start: {
					line: 79,
					column: 18
				},
				end: {
					line: 79,
					column: 66
				}
			},
			'29': {
				start: {
					line: 79,
					column: 56
				},
				end: {
					line: 79,
					column: 61
				}
			},
			'30': {
				start: {
					line: 80,
					column: 18
				},
				end: {
					line: 80,
					column: 66
				}
			},
			'31': {
				start: {
					line: 80,
					column: 56
				},
				end: {
					line: 80,
					column: 61
				}
			},
			'32': {
				start: {
					line: 82,
					column: 2
				},
				end: {
					line: 82,
					column: 34
				}
			},
			'33': {
				start: {
					line: 84,
					column: 2
				},
				end: {
					line: 84,
					column: 41
				}
			},
			'34': {
				start: {
					line: 84,
					column: 24
				},
				end: {
					line: 84,
					column: 39
				}
			},
			'35': {
				start: {
					line: 86,
					column: 2
				},
				end: {
					line: 99,
					column: 4
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 39,
						column: 14
					},
					end: {
						line: 39,
						column: 15
					}
				},
				loc: {
					start: {
						line: 39,
						column: 27
					},
					end: {
						line: 100,
						column: 2
					}
				},
				line: 39
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 41,
						column: 23
					},
					end: {
						line: 41,
						column: 24
					}
				},
				loc: {
					start: {
						line: 41,
						column: 34
					},
					end: {
						line: 48,
						column: 3
					}
				},
				line: 41
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 50,
						column: 14
					},
					end: {
						line: 50,
						column: 15
					}
				},
				loc: {
					start: {
						line: 50,
						column: 26
					},
					end: {
						line: 56,
						column: 3
					}
				},
				line: 50
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 63,
						column: 46
					},
					end: {
						line: 63,
						column: 47
					}
				},
				loc: {
					start: {
						line: 63,
						column: 56
					},
					end: {
						line: 63,
						column: 61
					}
				},
				line: 63
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 64,
						column: 46
					},
					end: {
						line: 64,
						column: 47
					}
				},
				loc: {
					start: {
						line: 64,
						column: 56
					},
					end: {
						line: 64,
						column: 61
					}
				},
				line: 64
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 71,
						column: 46
					},
					end: {
						line: 71,
						column: 47
					}
				},
				loc: {
					start: {
						line: 71,
						column: 56
					},
					end: {
						line: 71,
						column: 61
					}
				},
				line: 71
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 72,
						column: 46
					},
					end: {
						line: 72,
						column: 47
					}
				},
				loc: {
					start: {
						line: 72,
						column: 56
					},
					end: {
						line: 72,
						column: 61
					}
				},
				line: 72
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 79,
						column: 46
					},
					end: {
						line: 79,
						column: 47
					}
				},
				loc: {
					start: {
						line: 79,
						column: 56
					},
					end: {
						line: 79,
						column: 61
					}
				},
				line: 79
			},
			'8': {
				name: '(anonymous_8)',
				decl: {
					start: {
						line: 80,
						column: 46
					},
					end: {
						line: 80,
						column: 47
					}
				},
				loc: {
					start: {
						line: 80,
						column: 56
					},
					end: {
						line: 80,
						column: 61
					}
				},
				line: 80
			},
			'9': {
				name: '(anonymous_9)',
				decl: {
					start: {
						line: 84,
						column: 14
					},
					end: {
						line: 84,
						column: 15
					}
				},
				loc: {
					start: {
						line: 84,
						column: 24
					},
					end: {
						line: 84,
						column: 39
					}
				},
				line: 84
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 51,
						column: 3
					},
					end: {
						line: 53,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 51,
						column: 3
					},
					end: {
						line: 53,
						column: 4
					}
				}, {
					start: {
						line: 51,
						column: 3
					},
					end: {
						line: 53,
						column: 4
					}
				}],
				line: 51
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0,
			'33': 0,
			'34': 0,
			'35': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0
		},
		b: {
			'0': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_1ejist7n54.s[0]++;
module.exports = {
	name: 'gcd',
	version: 5,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'times-2': null,
		'times-3': null,
		'div-2': null,
		'div-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		mod: null,
		equal: null,
		neq: null,
		gt: null,
		geqq: null,
		lt: null,
		leqq: null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: [5, 7],
	outputX: 6,
	input: [[null, null], [null, null], [null, null], [56, 1275]],
	output: [null, null, null, 1],
	ioGenerator: random => {
		cov_1ejist7n54.f[0]++;
		cov_1ejist7n54.s[1]++;

		// Durstenfeld shuffle
		const shuffleArray = array => {
			cov_1ejist7n54.f[1]++;
			cov_1ejist7n54.s[2]++;

			for (let i = array.length - 1; i > 0; i--) {
				const j = (cov_1ejist7n54.s[3]++, Math.floor(random() * (i + 1)));
				const temp = (cov_1ejist7n54.s[4]++, array[i]);
				cov_1ejist7n54.s[5]++;
				array[i] = array[j];
				cov_1ejist7n54.s[6]++;
				array[j] = temp;
			}
		};

		cov_1ejist7n54.s[7]++;
		const gcd = ([a, b]) => {
			cov_1ejist7n54.f[2]++;
			cov_1ejist7n54.s[8]++;

			if (b === 0) {
				cov_1ejist7n54.b[0][0]++;
				cov_1ejist7n54.s[9]++;

				return a;
			} else {
				cov_1ejist7n54.b[0][1]++;
			}

			cov_1ejist7n54.s[10]++;
			return gcd([b, a % b]);
		};

		const inputs = (cov_1ejist7n54.s[11]++, []);

		const factors1 = (cov_1ejist7n54.s[12]++, [2, 2, 3, 3, 3, 3, 3, 3, 5, 5, 5, 7, 7, 11, 13, 17]);

		cov_1ejist7n54.s[13]++;
		shuffleArray(factors1);
		const valueA1 = (cov_1ejist7n54.s[14]++, factors1.slice(0, 3).reduce((a, b) => {
			cov_1ejist7n54.f[3]++;
			cov_1ejist7n54.s[15]++;
			return a * b;
		}) * 2);
		const valueB1 = (cov_1ejist7n54.s[16]++, factors1.slice(3, 6).reduce((a, b) => {
			cov_1ejist7n54.f[4]++;
			cov_1ejist7n54.s[17]++;
			return a * b;
		}) * 2);

		cov_1ejist7n54.s[18]++;
		inputs.push([valueA1, valueB1]);

		const factors2 = (cov_1ejist7n54.s[19]++, [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 5, 7, 7, 11, 13, 17]);

		cov_1ejist7n54.s[20]++;
		shuffleArray(factors2);
		const valueA2 = (cov_1ejist7n54.s[21]++, factors2.slice(0, 4).reduce((a, b) => {
			cov_1ejist7n54.f[5]++;
			cov_1ejist7n54.s[22]++;
			return a * b;
		}) * 5);
		const valueB2 = (cov_1ejist7n54.s[23]++, factors2.slice(4, 8).reduce((a, b) => {
			cov_1ejist7n54.f[6]++;
			cov_1ejist7n54.s[24]++;
			return a * b;
		}) * 5);

		cov_1ejist7n54.s[25]++;
		inputs.push([valueA2, valueB2]);

		const factors3 = (cov_1ejist7n54.s[26]++, [1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 5, 11, 11, 13, 13, 17]);

		cov_1ejist7n54.s[27]++;
		shuffleArray(factors3);
		const valueA3 = (cov_1ejist7n54.s[28]++, factors3.slice(0, 3).reduce((a, b) => {
			cov_1ejist7n54.f[7]++;
			cov_1ejist7n54.s[29]++;
			return a * b;
		}) * 7);
		const valueB3 = (cov_1ejist7n54.s[30]++, factors3.slice(3, 6).reduce((a, b) => {
			cov_1ejist7n54.f[8]++;
			cov_1ejist7n54.s[31]++;
			return a * b;
		}) * 7);

		cov_1ejist7n54.s[32]++;
		inputs.push([valueA3, valueB3]);

		cov_1ejist7n54.s[33]++;
		inputs.sort((a, b) => {
			cov_1ejist7n54.f[9]++;
			cov_1ejist7n54.s[34]++;
			return gcd(b) - gcd(a);
		});

		cov_1ejist7n54.s[35]++;
		return {
			input: [inputs[0], inputs[1], inputs[2], [56, 1275]],
			output: [gcd(inputs[0]), gcd(inputs[1]), gcd(inputs[2]), gcd([56, 1275])]
		};
	},
	width: 13,
	height: 13,
	clockLimit: 500,
	statement: '二数の最大公約数を計算してみよう!',
	title: '最大公約数'
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_12xrqydk7g = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/lcm.js',
	    hash = '3c38e9bbe256df1db1eff52dc763645617a28a9a',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/lcm.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 92,
					column: 2
				}
			},
			'1': {
				start: {
					line: 41,
					column: 23
				},
				end: {
					line: 48,
					column: 3
				}
			},
			'2': {
				start: {
					line: 42,
					column: 3
				},
				end: {
					line: 47,
					column: 4
				}
			},
			'3': {
				start: {
					line: 43,
					column: 14
				},
				end: {
					line: 43,
					column: 44
				}
			},
			'4': {
				start: {
					line: 44,
					column: 17
				},
				end: {
					line: 44,
					column: 25
				}
			},
			'5': {
				start: {
					line: 45,
					column: 4
				},
				end: {
					line: 45,
					column: 24
				}
			},
			'6': {
				start: {
					line: 46,
					column: 4
				},
				end: {
					line: 46,
					column: 20
				}
			},
			'7': {
				start: {
					line: 50,
					column: 14
				},
				end: {
					line: 56,
					column: 3
				}
			},
			'8': {
				start: {
					line: 51,
					column: 3
				},
				end: {
					line: 53,
					column: 4
				}
			},
			'9': {
				start: {
					line: 52,
					column: 4
				},
				end: {
					line: 52,
					column: 13
				}
			},
			'10': {
				start: {
					line: 55,
					column: 3
				},
				end: {
					line: 55,
					column: 26
				}
			},
			'11': {
				start: {
					line: 58,
					column: 14
				},
				end: {
					line: 58,
					column: 45
				}
			},
			'12': {
				start: {
					line: 58,
					column: 26
				},
				end: {
					line: 58,
					column: 45
				}
			},
			'13': {
				start: {
					line: 60,
					column: 17
				},
				end: {
					line: 68,
					column: 4
				}
			},
			'14': {
				start: {
					line: 61,
					column: 19
				},
				end: {
					line: 61,
					column: 75
				}
			},
			'15': {
				start: {
					line: 63,
					column: 3
				},
				end: {
					line: 63,
					column: 25
				}
			},
			'16': {
				start: {
					line: 64,
					column: 18
				},
				end: {
					line: 64,
					column: 61
				}
			},
			'17': {
				start: {
					line: 64,
					column: 55
				},
				end: {
					line: 64,
					column: 60
				}
			},
			'18': {
				start: {
					line: 65,
					column: 18
				},
				end: {
					line: 65,
					column: 61
				}
			},
			'19': {
				start: {
					line: 65,
					column: 55
				},
				end: {
					line: 65,
					column: 60
				}
			},
			'20': {
				start: {
					line: 67,
					column: 3
				},
				end: {
					line: 67,
					column: 27
				}
			},
			'21': {
				start: {
					line: 70,
					column: 2
				},
				end: {
					line: 70,
					column: 41
				}
			},
			'22': {
				start: {
					line: 70,
					column: 24
				},
				end: {
					line: 70,
					column: 39
				}
			},
			'23': {
				start: {
					line: 72,
					column: 2
				},
				end: {
					line: 85,
					column: 4
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 39,
						column: 14
					},
					end: {
						line: 39,
						column: 15
					}
				},
				loc: {
					start: {
						line: 39,
						column: 27
					},
					end: {
						line: 86,
						column: 2
					}
				},
				line: 39
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 41,
						column: 23
					},
					end: {
						line: 41,
						column: 24
					}
				},
				loc: {
					start: {
						line: 41,
						column: 34
					},
					end: {
						line: 48,
						column: 3
					}
				},
				line: 41
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 50,
						column: 14
					},
					end: {
						line: 50,
						column: 15
					}
				},
				loc: {
					start: {
						line: 50,
						column: 26
					},
					end: {
						line: 56,
						column: 3
					}
				},
				line: 50
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 58,
						column: 14
					},
					end: {
						line: 58,
						column: 15
					}
				},
				loc: {
					start: {
						line: 58,
						column: 26
					},
					end: {
						line: 58,
						column: 45
					}
				},
				line: 58
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 60,
						column: 41
					},
					end: {
						line: 60,
						column: 42
					}
				},
				loc: {
					start: {
						line: 60,
						column: 47
					},
					end: {
						line: 68,
						column: 3
					}
				},
				line: 60
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 64,
						column: 45
					},
					end: {
						line: 64,
						column: 46
					}
				},
				loc: {
					start: {
						line: 64,
						column: 55
					},
					end: {
						line: 64,
						column: 60
					}
				},
				line: 64
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 65,
						column: 45
					},
					end: {
						line: 65,
						column: 46
					}
				},
				loc: {
					start: {
						line: 65,
						column: 55
					},
					end: {
						line: 65,
						column: 60
					}
				},
				line: 65
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 70,
						column: 14
					},
					end: {
						line: 70,
						column: 15
					}
				},
				loc: {
					start: {
						line: 70,
						column: 24
					},
					end: {
						line: 70,
						column: 39
					}
				},
				line: 70
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 51,
						column: 3
					},
					end: {
						line: 53,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 51,
						column: 3
					},
					end: {
						line: 53,
						column: 4
					}
				}, {
					start: {
						line: 51,
						column: 3
					},
					end: {
						line: 53,
						column: 4
					}
				}],
				line: 51
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0
		},
		b: {
			'0': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_12xrqydk7g.s[0]++;
module.exports = {
	name: 'lcm',
	version: 4,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'times-2': null,
		'times-3': null,
		'div-2': null,
		'div-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		mod: null,
		equal: null,
		neq: null,
		gt: null,
		geqq: null,
		lt: null,
		leqq: null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: [4, 6],
	outputX: 5,
	input: [[null, null], [null, null], [null, null], [450, 756]],
	output: [null, null, null, 18900],
	ioGenerator: random => {
		cov_12xrqydk7g.f[0]++;
		cov_12xrqydk7g.s[1]++;

		// Durstenfeld shuffle
		const shuffleArray = array => {
			cov_12xrqydk7g.f[1]++;
			cov_12xrqydk7g.s[2]++;

			for (let i = array.length - 1; i > 0; i--) {
				const j = (cov_12xrqydk7g.s[3]++, Math.floor(random() * (i + 1)));
				const temp = (cov_12xrqydk7g.s[4]++, array[i]);
				cov_12xrqydk7g.s[5]++;
				array[i] = array[j];
				cov_12xrqydk7g.s[6]++;
				array[j] = temp;
			}
		};

		cov_12xrqydk7g.s[7]++;
		const gcd = ([a, b]) => {
			cov_12xrqydk7g.f[2]++;
			cov_12xrqydk7g.s[8]++;

			if (b === 0) {
				cov_12xrqydk7g.b[0][0]++;
				cov_12xrqydk7g.s[9]++;

				return a;
			} else {
				cov_12xrqydk7g.b[0][1]++;
			}

			cov_12xrqydk7g.s[10]++;
			return gcd([b, a % b]);
		};

		cov_12xrqydk7g.s[11]++;
		const lcm = ([a, b]) => {
			cov_12xrqydk7g.f[3]++;
			cov_12xrqydk7g.s[12]++;
			return a * b / gcd([a, b]);
		};

		const inputs = (cov_12xrqydk7g.s[13]++, Array.from({ length: 3 }, () => {
			cov_12xrqydk7g.f[4]++;

			const factors = (cov_12xrqydk7g.s[14]++, [2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 5, 5, 7, 7, 11, 13]);

			cov_12xrqydk7g.s[15]++;
			shuffleArray(factors);
			const valueA = (cov_12xrqydk7g.s[16]++, factors.slice(0, 3).reduce((a, b) => {
				cov_12xrqydk7g.f[5]++;
				cov_12xrqydk7g.s[17]++;
				return a * b;
			}));
			const valueB = (cov_12xrqydk7g.s[18]++, factors.slice(3, 7).reduce((a, b) => {
				cov_12xrqydk7g.f[6]++;
				cov_12xrqydk7g.s[19]++;
				return a * b;
			}));

			cov_12xrqydk7g.s[20]++;
			return [valueA, valueB];
		}));

		cov_12xrqydk7g.s[21]++;
		inputs.sort((a, b) => {
			cov_12xrqydk7g.f[7]++;
			cov_12xrqydk7g.s[22]++;
			return lcm(a) - lcm(b);
		});

		cov_12xrqydk7g.s[23]++;
		return {
			input: [inputs[0], inputs[1], inputs[2], [450, 756]],
			output: [lcm(inputs[0]), lcm(inputs[1]), lcm(inputs[2]), lcm([450, 756])]
		};
	},
	width: 11,
	height: 11,
	clockLimit: 500,
	statement: '最小公倍数を計算してみよう',
	title: '最小公倍数'
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_33q9ycsqr = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/sqrt-easy.js',
	    hash = '6f16dafe0b45bcb855860d8ce1492f17b4c2e4a0',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/sqrt-easy.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 74,
					column: 2
				}
			},
			'1': {
				start: {
					line: 37,
					column: 21
				},
				end: {
					line: 37,
					column: 73
				}
			},
			'2': {
				start: {
					line: 37,
					column: 63
				},
				end: {
					line: 37,
					column: 72
				}
			},
			'3': {
				start: {
					line: 38,
					column: 18
				},
				end: {
					line: 38,
					column: 20
				}
			},
			'4': {
				start: {
					line: 41,
					column: 17
				},
				end: {
					line: 41,
					column: 42
				}
			},
			'5': {
				start: {
					line: 42,
					column: 2
				},
				end: {
					line: 42,
					column: 35
				}
			},
			'6': {
				start: {
					line: 43,
					column: 2
				},
				end: {
					line: 43,
					column: 37
				}
			},
			'7': {
				start: {
					line: 45,
					column: 17
				},
				end: {
					line: 45,
					column: 46
				}
			},
			'8': {
				start: {
					line: 46,
					column: 2
				},
				end: {
					line: 46,
					column: 35
				}
			},
			'9': {
				start: {
					line: 47,
					column: 2
				},
				end: {
					line: 47,
					column: 37
				}
			},
			'10': {
				start: {
					line: 49,
					column: 17
				},
				end: {
					line: 49,
					column: 46
				}
			},
			'11': {
				start: {
					line: 50,
					column: 2
				},
				end: {
					line: 50,
					column: 35
				}
			},
			'12': {
				start: {
					line: 52,
					column: 2
				},
				end: {
					line: 52,
					column: 32
				}
			},
			'13': {
				start: {
					line: 52,
					column: 25
				},
				end: {
					line: 52,
					column: 30
				}
			},
			'14': {
				start: {
					line: 54,
					column: 2
				},
				end: {
					line: 67,
					column: 4
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 36,
						column: 14
					},
					end: {
						line: 36,
						column: 15
					}
				},
				loc: {
					start: {
						line: 36,
						column: 26
					},
					end: {
						line: 68,
						column: 2
					}
				},
				line: 36
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 37,
						column: 46
					},
					end: {
						line: 37,
						column: 47
					}
				},
				loc: {
					start: {
						line: 37,
						column: 63
					},
					end: {
						line: 37,
						column: 72
					}
				},
				line: 37
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 52,
						column: 15
					},
					end: {
						line: 52,
						column: 16
					}
				},
				loc: {
					start: {
						line: 52,
						column: 25
					},
					end: {
						line: 52,
						column: 30
					}
				},
				line: 52
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_33q9ycsqr.s[0]++;
module.exports = {
	name: 'sqrt-easy',
	version: 4,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'times-2': null,
		'times-3': null,
		'div-2': null,
		'div-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		mod: null,
		pow: null,
		equal: null,
		neq: null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: 4,
	outputX: 4,
	input: [null, null, null, 225],
	output: [null, null, null, 15],
	ioGenerator: random => {
		cov_33q9ycsqr.f[0]++;

		const candidates = (cov_33q9ycsqr.s[1]++, Array.from({ length: 13 }, (item, index) => {
			cov_33q9ycsqr.f[1]++;
			cov_33q9ycsqr.s[2]++;
			return index + 2;
		})); // 2..14
		const outputs = (cov_33q9ycsqr.s[3]++, []);

		// Shuffle array and take heading 3
		const index1 = (cov_33q9ycsqr.s[4]++, Math.floor(random() * 13));
		cov_33q9ycsqr.s[5]++;
		outputs.push(candidates[index1]);
		cov_33q9ycsqr.s[6]++;
		candidates[index1] = candidates[0];

		const index2 = (cov_33q9ycsqr.s[7]++, Math.floor(random() * 12) + 1);
		cov_33q9ycsqr.s[8]++;
		outputs.push(candidates[index2]);
		cov_33q9ycsqr.s[9]++;
		candidates[index2] = candidates[1];

		const index3 = (cov_33q9ycsqr.s[10]++, Math.floor(random() * 11) + 2);
		cov_33q9ycsqr.s[11]++;
		outputs.push(candidates[index3]);

		cov_33q9ycsqr.s[12]++;
		outputs.sort((a, b) => {
			cov_33q9ycsqr.f[2]++;
			cov_33q9ycsqr.s[13]++;
			return a - b;
		});

		cov_33q9ycsqr.s[14]++;
		return {
			input: [outputs[0] * outputs[0], outputs[1] * outputs[1], outputs[2] * outputs[2], 15 * 15],
			output: [outputs[0], outputs[1], outputs[2], 15]
		};
	},
	width: 9,
	height: 9,
	clockLimit: 300,
	statement: '平方根を計算してみよう!',
	title: '平方根 -easy-'
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_13qfn5o19c = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/sqrt-hard.js',
	    hash = '7cc9185b3543653a2813640a9d01827062f776cb',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/sqrt-hard.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 71,
					column: 2
				}
			},
			'1': {
				start: {
					line: 46,
					column: 15
				},
				end: {
					line: 46,
					column: 16
				}
			},
			'2': {
				start: {
					line: 47,
					column: 15
				},
				end: {
					line: 47,
					column: 45
				}
			},
			'3': {
				start: {
					line: 48,
					column: 15
				},
				end: {
					line: 48,
					column: 49
				}
			},
			'4': {
				start: {
					line: 49,
					column: 15
				},
				end: {
					line: 49,
					column: 19
				}
			},
			'5': {
				start: {
					line: 51,
					column: 2
				},
				end: {
					line: 64,
					column: 4
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 45,
						column: 14
					},
					end: {
						line: 45,
						column: 15
					}
				},
				loc: {
					start: {
						line: 45,
						column: 26
					},
					end: {
						line: 65,
						column: 2
					}
				},
				line: 45
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0
		},
		f: {
			'0': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_13qfn5o19c.s[0]++;
module.exports = {
	name: 'sqrt-hard',
	version: 4,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'times-2': null,
		'times-3': null,
		'div-2': null,
		'div-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		mod: null,
		pow: null,
		'bitshift-left': null,
		'bitshift-right': null,
		'bitwise-and': null,
		'bitwise-or': null,
		'bitwise-xor': null,
		equal: null,
		neq: null,
		gt: null,
		geqq: null,
		lt: null,
		leqq: null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: 7,
	outputX: 7,
	input: [9, null, null, 26040609],
	output: [3, null, null, 5103],
	ioGenerator: random => {
		cov_13qfn5o19c.f[0]++;

		const out1 = (cov_13qfn5o19c.s[1]++, 3);
		const out2 = (cov_13qfn5o19c.s[2]++, 10 + Math.floor(random() * 90));
		const out3 = (cov_13qfn5o19c.s[3]++, 1000 + Math.floor(random() * 4000));
		const out4 = (cov_13qfn5o19c.s[4]++, 5103);

		cov_13qfn5o19c.s[5]++;
		return {
			input: [out1 * out1, out2 * out2, out3 * out3, out4 * out4],
			output: [out1, out2, out3, out4]
		};
	},
	width: 15,
	height: 15,
	clockLimit: 1000,
	statement: '平方根を計算してみよう! (ただし、愚直に計算すると計算に長い時間かかるので、より速く計算できるように工夫してみよう)',
	title: '平方根 -hard-'
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_f3yf9zjlx = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/msd.js',
	    hash = 'f7bb22b68f9d01b417881abf1d8aa4288d297dd1',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/msd.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 78,
					column: 2
				}
			},
			'1': {
				start: {
					line: 46,
					column: 20
				},
				end: {
					line: 46,
					column: 48
				}
			},
			'2': {
				start: {
					line: 47,
					column: 20
				},
				end: {
					line: 49,
					column: 47
				}
			},
			'3': {
				start: {
					line: 49,
					column: 11
				},
				end: {
					line: 49,
					column: 36
				}
			},
			'4': {
				start: {
					line: 50,
					column: 17
				},
				end: {
					line: 50,
					column: 36
				}
			},
			'5': {
				start: {
					line: 52,
					column: 20
				},
				end: {
					line: 52,
					column: 48
				}
			},
			'6': {
				start: {
					line: 53,
					column: 20
				},
				end: {
					line: 55,
					column: 47
				}
			},
			'7': {
				start: {
					line: 55,
					column: 11
				},
				end: {
					line: 55,
					column: 36
				}
			},
			'8': {
				start: {
					line: 56,
					column: 17
				},
				end: {
					line: 56,
					column: 36
				}
			},
			'9': {
				start: {
					line: 58,
					column: 2
				},
				end: {
					line: 71,
					column: 4
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 45,
						column: 14
					},
					end: {
						line: 45,
						column: 15
					}
				},
				loc: {
					start: {
						line: 45,
						column: 26
					},
					end: {
						line: 72,
						column: 2
					}
				},
				line: 45
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 49,
						column: 5
					},
					end: {
						line: 49,
						column: 6
					}
				},
				loc: {
					start: {
						line: 49,
						column: 11
					},
					end: {
						line: 49,
						column: 36
					}
				},
				line: 49
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 55,
						column: 5
					},
					end: {
						line: 55,
						column: 6
					}
				},
				loc: {
					start: {
						line: 55,
						column: 11
					},
					end: {
						line: 55,
						column: 36
					}
				},
				line: 55
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_f3yf9zjlx.s[0]++;
module.exports = {
	name: 'msd',
	version: 4,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'times-2': null,
		'times-3': null,
		'div-2': null,
		'div-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		mod: null,
		pow: null,
		'bitshift-left': null,
		'bitshift-right': null,
		'bitwise-and': null,
		'bitwise-or': null,
		'bitwise-xor': null,
		equal: null,
		neq: null,
		gt: null,
		geqq: null,
		lt: null,
		leqq: null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: 7,
	outputX: 7,
	input: [null, null, 0, 123456789],
	output: [null, null, 0, 1],
	ioGenerator: random => {
		cov_f3yf9zjlx.f[0]++;

		const input1msd = (cov_f3yf9zjlx.s[1]++, 1 + Math.floor(random() * 9));
		const input1str = (cov_f3yf9zjlx.s[2]++, [input1msd].concat(Array.from({
			length: 1 + Math.floor(random() * 3)
		}, () => {
			cov_f3yf9zjlx.f[1]++;
			cov_f3yf9zjlx.s[3]++;
			return Math.floor(random() * 10);
		})).join(''));
		const input1 = (cov_f3yf9zjlx.s[4]++, parseInt(input1str));

		const input2msd = (cov_f3yf9zjlx.s[5]++, 1 + Math.floor(random() * 9));
		const input2str = (cov_f3yf9zjlx.s[6]++, [input2msd].concat(Array.from({
			length: 3 + Math.floor(random() * 5)
		}, () => {
			cov_f3yf9zjlx.f[2]++;
			cov_f3yf9zjlx.s[7]++;
			return Math.floor(random() * 10);
		})).join(''));
		const input2 = (cov_f3yf9zjlx.s[8]++, parseInt(input2str));

		cov_f3yf9zjlx.s[9]++;
		return {
			input: [input1, input2, 0, 123456789],
			output: [input1msd, input2msd, 0, 1]
		};
	},
	width: 15,
	height: 15,
	clockLimit: 500,
	statement: '数の最上位の桁を取り出してみよう!',
	title: '最上位の桁'
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_13u6y8st3s = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/mod3-hard.js',
	    hash = 'ff8a25caf76e4907f30c6575c2d999af39ab1aca',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/mod3-hard.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 77,
					column: 2
				}
			},
			'1': {
				start: {
					line: 42,
					column: 23
				},
				end: {
					line: 42,
					column: 65
				}
			},
			'2': {
				start: {
					line: 43,
					column: 17
				},
				end: {
					line: 43,
					column: 52
				}
			},
			'3': {
				start: {
					line: 45,
					column: 23
				},
				end: {
					line: 45,
					column: 65
				}
			},
			'4': {
				start: {
					line: 46,
					column: 17
				},
				end: {
					line: 46,
					column: 52
				}
			},
			'5': {
				start: {
					line: 48,
					column: 23
				},
				end: {
					line: 48,
					column: 65
				}
			},
			'6': {
				start: {
					line: 49,
					column: 17
				},
				end: {
					line: 49,
					column: 52
				}
			},
			'7': {
				start: {
					line: 51,
					column: 17
				},
				end: {
					line: 51,
					column: 59
				}
			},
			'8': {
				start: {
					line: 53,
					column: 17
				},
				end: {
					line: 53,
					column: 56
				}
			},
			'9': {
				start: {
					line: 55,
					column: 2
				},
				end: {
					line: 70,
					column: 4
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 41,
						column: 14
					},
					end: {
						line: 41,
						column: 15
					}
				},
				loc: {
					start: {
						line: 41,
						column: 26
					},
					end: {
						line: 71,
						column: 2
					}
				},
				line: 41
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0
		},
		f: {
			'0': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_13u6y8st3s.s[0]++;
module.exports = {
	name: 'mod3-hard',
	version: 4,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		'times-2': null,
		'times-3': null,
		'times-10': null,
		log10: null,
		log2: null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		'const-3': null,
		'const-10': null,
		add: null,
		sub: null,
		pow: null,
		log: null,
		equal: null,
		neq: null,
		gt: null,
		geqq: null,
		lt: null,
		leqq: null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: 9,
	outputX: 9,
	input: [null, null, null, null, null],
	output: [0, 1, 2, null, null],
	ioGenerator: random => {
		cov_13u6y8st3s.f[0]++;

		const input1target = (cov_13u6y8st3s.s[1]++, 10000000 + Math.floor(random() * 80000000));
		const input1 = (cov_13u6y8st3s.s[2]++, input1target - input1target % 3 + 0);

		const input2target = (cov_13u6y8st3s.s[3]++, 10000000 + Math.floor(random() * 80000000));
		const input2 = (cov_13u6y8st3s.s[4]++, input2target - input2target % 3 + 1);

		const input3target = (cov_13u6y8st3s.s[5]++, 10000000 + Math.floor(random() * 80000000));
		const input3 = (cov_13u6y8st3s.s[6]++, input3target - input3target % 3 + 2);

		const input4 = (cov_13u6y8st3s.s[7]++, 10000000 + Math.floor(random() * 80000000));

		const input5 = (cov_13u6y8st3s.s[8]++, 99990000 + Math.floor(random() * 10000));

		cov_13u6y8st3s.s[9]++;
		return {
			input: [input1, input2, input3, input4, input5],
			output: [input1 % 3, input2 % 3, input3 % 3, input4 % 3, input5 % 3]
		};
	},
	width: 19,
	height: 19,
	clockLimit: 1000,
	statement: '3で割った余りを求めてみよう!',
	title: 'mod3 -hard-'
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_3zrgrc1co = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/the-fifth-max.js',
	    hash = '87c3eab992a793ff5a172553a79fb3077a21354b',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/the-fifth-max.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 190,
					column: 2
				}
			},
			'1': {
				start: {
					line: 120,
					column: 20
				},
				end: {
					line: 120,
					column: 91
				}
			},
			'2': {
				start: {
					line: 120,
					column: 31
				},
				end: {
					line: 120,
					column: 91
				}
			},
			'3': {
				start: {
					line: 120,
					column: 61
				},
				end: {
					line: 120,
					column: 66
				}
			},
			'4': {
				start: {
					line: 122,
					column: 25
				},
				end: {
					line: 125,
					column: 3
				}
			},
			'5': {
				start: {
					line: 123,
					column: 18
				},
				end: {
					line: 123,
					column: 34
				}
			},
			'6': {
				start: {
					line: 124,
					column: 3
				},
				end: {
					line: 124,
					column: 57
				}
			},
			'7': {
				start: {
					line: 124,
					column: 30
				},
				end: {
					line: 124,
					column: 42
				}
			},
			'8': {
				start: {
					line: 127,
					column: 17
				},
				end: {
					line: 129,
					column: 3
				}
			},
			'9': {
				start: {
					line: 133,
					column: 15
				},
				end: {
					line: 133,
					column: 19
				}
			},
			'10': {
				start: {
					line: 135,
					column: 3
				},
				end: {
					line: 137,
					column: 36
				}
			},
			'11': {
				start: {
					line: 136,
					column: 4
				},
				end: {
					line: 136,
					column: 74
				}
			},
			'12': {
				start: {
					line: 136,
					column: 42
				},
				end: {
					line: 136,
					column: 72
				}
			},
			'13': {
				start: {
					line: 139,
					column: 3
				},
				end: {
					line: 139,
					column: 22
				}
			},
			'14': {
				start: {
					line: 144,
					column: 15
				},
				end: {
					line: 144,
					column: 19
				}
			},
			'15': {
				start: {
					line: 146,
					column: 3
				},
				end: {
					line: 148,
					column: 36
				}
			},
			'16': {
				start: {
					line: 147,
					column: 4
				},
				end: {
					line: 147,
					column: 74
				}
			},
			'17': {
				start: {
					line: 147,
					column: 42
				},
				end: {
					line: 147,
					column: 72
				}
			},
			'18': {
				start: {
					line: 150,
					column: 3
				},
				end: {
					line: 150,
					column: 22
				}
			},
			'19': {
				start: {
					line: 155,
					column: 15
				},
				end: {
					line: 155,
					column: 19
				}
			},
			'20': {
				start: {
					line: 157,
					column: 3
				},
				end: {
					line: 159,
					column: 36
				}
			},
			'21': {
				start: {
					line: 158,
					column: 4
				},
				end: {
					line: 158,
					column: 69
				}
			},
			'22': {
				start: {
					line: 158,
					column: 42
				},
				end: {
					line: 158,
					column: 67
				}
			},
			'23': {
				start: {
					line: 161,
					column: 3
				},
				end: {
					line: 161,
					column: 22
				}
			},
			'24': {
				start: {
					line: 166,
					column: 15
				},
				end: {
					line: 166,
					column: 19
				}
			},
			'25': {
				start: {
					line: 168,
					column: 3
				},
				end: {
					line: 170,
					column: 36
				}
			},
			'26': {
				start: {
					line: 169,
					column: 4
				},
				end: {
					line: 169,
					column: 74
				}
			},
			'27': {
				start: {
					line: 169,
					column: 42
				},
				end: {
					line: 169,
					column: 72
				}
			},
			'28': {
				start: {
					line: 173,
					column: 18
				},
				end: {
					line: 173,
					column: 34
				}
			},
			'29': {
				start: {
					line: 174,
					column: 3
				},
				end: {
					line: 174,
					column: 43
				}
			},
			'30': {
				start: {
					line: 175,
					column: 3
				},
				end: {
					line: 175,
					column: 21
				}
			},
			'31': {
				start: {
					line: 177,
					column: 3
				},
				end: {
					line: 177,
					column: 22
				}
			},
			'32': {
				start: {
					line: 180,
					column: 2
				},
				end: {
					line: 183,
					column: 4
				}
			},
			'33': {
				start: {
					line: 181,
					column: 32
				},
				end: {
					line: 181,
					column: 53
				}
			},
			'34': {
				start: {
					line: 182,
					column: 33
				},
				end: {
					line: 182,
					column: 49
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 119,
						column: 14
					},
					end: {
						line: 119,
						column: 15
					}
				},
				loc: {
					start: {
						line: 119,
						column: 26
					},
					end: {
						line: 184,
						column: 2
					}
				},
				line: 119
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 120,
						column: 20
					},
					end: {
						line: 120,
						column: 21
					}
				},
				loc: {
					start: {
						line: 120,
						column: 31
					},
					end: {
						line: 120,
						column: 91
					}
				},
				line: 120
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 120,
						column: 51
					},
					end: {
						line: 120,
						column: 52
					}
				},
				loc: {
					start: {
						line: 120,
						column: 61
					},
					end: {
						line: 120,
						column: 66
					}
				},
				line: 120
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 122,
						column: 25
					},
					end: {
						line: 122,
						column: 26
					}
				},
				loc: {
					start: {
						line: 122,
						column: 36
					},
					end: {
						line: 125,
						column: 3
					}
				},
				line: 122
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 124,
						column: 23
					},
					end: {
						line: 124,
						column: 24
					}
				},
				loc: {
					start: {
						line: 124,
						column: 30
					},
					end: {
						line: 124,
						column: 42
					}
				},
				line: 124
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 136,
						column: 36
					},
					end: {
						line: 136,
						column: 37
					}
				},
				loc: {
					start: {
						line: 136,
						column: 42
					},
					end: {
						line: 136,
						column: 72
					}
				},
				line: 136
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 147,
						column: 36
					},
					end: {
						line: 147,
						column: 37
					}
				},
				loc: {
					start: {
						line: 147,
						column: 42
					},
					end: {
						line: 147,
						column: 72
					}
				},
				line: 147
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 158,
						column: 36
					},
					end: {
						line: 158,
						column: 37
					}
				},
				loc: {
					start: {
						line: 158,
						column: 42
					},
					end: {
						line: 158,
						column: 67
					}
				},
				line: 158
			},
			'8': {
				name: '(anonymous_8)',
				decl: {
					start: {
						line: 169,
						column: 36
					},
					end: {
						line: 169,
						column: 37
					}
				},
				loc: {
					start: {
						line: 169,
						column: 42
					},
					end: {
						line: 169,
						column: 72
					}
				},
				line: 169
			},
			'9': {
				name: '(anonymous_9)',
				decl: {
					start: {
						line: 181,
						column: 21
					},
					end: {
						line: 181,
						column: 22
					}
				},
				loc: {
					start: {
						line: 181,
						column: 32
					},
					end: {
						line: 181,
						column: 53
					}
				},
				line: 181
			},
			'10': {
				name: '(anonymous_10)',
				decl: {
					start: {
						line: 182,
						column: 22
					},
					end: {
						line: 182,
						column: 23
					}
				},
				loc: {
					start: {
						line: 182,
						column: 33
					},
					end: {
						line: 182,
						column: 49
					}
				},
				line: 182
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0,
			'33': 0,
			'34': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_3zrgrc1co.s[0]++;
module.exports = {
	name: 'the-fifth-max',
	version: 4,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'times-2': null,
		'times-3': null,
		'times-10': null,
		'div-2': null,
		'div-3': null,
		'div-10': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		log10: null,
		log2: null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		'const-3': null,
		'const-10': null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		mod: null,
		pow: null,
		log: null,
		'bitshift-left': null,
		'bitshift-right': null,
		'bitwise-and': null,
		'bitwise-or': null,
		'bitwise-xor': null,
		equal: null,
		neq: null,
		gt: null,
		geqq: null,
		lt: null,
		leqq: null,
		'c-contact': null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: [14, 16],
	outputX: 15,
	input: [[5, [1, 2, 3, 4, 5]], [5, [null, null, null, null, null]], [7, [null, null, null, null, null, null, null]], [7, [null, null, null, null, null, null, null]], [7, [null, null, null, null, null, null, null]]],
	output: [3, null, null, null, null],
	ioGenerator: random => {
		cov_3zrgrc1co.f[0]++;
		cov_3zrgrc1co.s[1]++;

		const getMedian = input => {
			cov_3zrgrc1co.f[1]++;
			cov_3zrgrc1co.s[2]++;
			return input.slice(0).sort((a, b) => {
				cov_3zrgrc1co.f[2]++;
				cov_3zrgrc1co.s[3]++;
				return a - b;
			})[(input.length - 1) / 2];
		};

		cov_3zrgrc1co.s[4]++;
		const isMedianUnique = input => {
			cov_3zrgrc1co.f[3]++;

			const median = (cov_3zrgrc1co.s[5]++, getMedian(input));
			cov_3zrgrc1co.s[6]++;
			return input.filter(x => {
				cov_3zrgrc1co.f[4]++;
				cov_3zrgrc1co.s[7]++;
				return x === median;
			}).length === 1;
		};

		const inputs = (cov_3zrgrc1co.s[8]++, [[1, 2, 3, 4, 5]]);

		// 5 numbers in -5..5
		{
			let input = (cov_3zrgrc1co.s[9]++, null);

			cov_3zrgrc1co.s[10]++;
			do {
				cov_3zrgrc1co.s[11]++;

				input = Array.from({ length: 5 }, () => {
					cov_3zrgrc1co.f[5]++;
					cov_3zrgrc1co.s[12]++;
					return -5 + Math.floor(random() * 11);
				});
			} while (!isMedianUnique(input));

			cov_3zrgrc1co.s[13]++;
			inputs.push(input);
		}

		// 7 numbers in 1..100
		{
			let input = (cov_3zrgrc1co.s[14]++, null);

			cov_3zrgrc1co.s[15]++;
			do {
				cov_3zrgrc1co.s[16]++;

				input = Array.from({ length: 7 }, () => {
					cov_3zrgrc1co.f[6]++;
					cov_3zrgrc1co.s[17]++;
					return 1 + Math.floor(random() * 100);
				});
			} while (!isMedianUnique(input));

			cov_3zrgrc1co.s[18]++;
			inputs.push(input);
		}

		// 7 numbers in 0..49
		{
			let input = (cov_3zrgrc1co.s[19]++, null);

			cov_3zrgrc1co.s[20]++;
			do {
				cov_3zrgrc1co.s[21]++;

				input = Array.from({ length: 7 }, () => {
					cov_3zrgrc1co.f[7]++;
					cov_3zrgrc1co.s[22]++;
					return Math.floor(random() * 50);
				});
			} while (!isMedianUnique(input));

			cov_3zrgrc1co.s[23]++;
			inputs.push(input);
		}

		// 7 numbers in 50..99, the median is at last
		{
			let input = (cov_3zrgrc1co.s[24]++, null);

			cov_3zrgrc1co.s[25]++;
			do {
				cov_3zrgrc1co.s[26]++;

				input = Array.from({ length: 7 }, () => {
					cov_3zrgrc1co.f[8]++;
					cov_3zrgrc1co.s[27]++;
					return 50 + Math.floor(random() * 50);
				});
			} while (!isMedianUnique(input));

			// Swap the median and the last
			const median = (cov_3zrgrc1co.s[28]++, getMedian(input));
			cov_3zrgrc1co.s[29]++;
			input[input.indexOf(median)] = input[6];
			cov_3zrgrc1co.s[30]++;
			input[6] = median;

			cov_3zrgrc1co.s[31]++;
			inputs.push(input);
		}

		cov_3zrgrc1co.s[32]++;
		return {
			input: inputs.map(input => {
				cov_3zrgrc1co.f[9]++;
				cov_3zrgrc1co.s[33]++;
				return [input.length, input];
			}),
			output: inputs.map(input => {
				cov_3zrgrc1co.f[10]++;
				cov_3zrgrc1co.s[34]++;
				return getMedian(input);
			})
		};
	},
	width: 31,
	height: 31,
	clockLimit: 2000,
	statement: '与えられた配列の中央値を求めてみよう。ただし、配列の大きさは奇数であり、また中央値はただ一つであることが保証されている。',
	title: '中央値'
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_27vftubw8l = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/repeat-self.js',
	    hash = '4318631482c006d821ea33320394c35f0c1bfbea',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/repeat-self.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 67,
					column: 2
				}
			},
			'1': {
				start: {
					line: 34,
					column: 21
				},
				end: {
					line: 34,
					column: 72
				}
			},
			'2': {
				start: {
					line: 34,
					column: 62
				},
				end: {
					line: 34,
					column: 71
				}
			},
			'3': {
				start: {
					line: 35,
					column: 17
				},
				end: {
					line: 35,
					column: 19
				}
			},
			'4': {
				start: {
					line: 38,
					column: 17
				},
				end: {
					line: 38,
					column: 41
				}
			},
			'5': {
				start: {
					line: 39,
					column: 2
				},
				end: {
					line: 39,
					column: 34
				}
			},
			'6': {
				start: {
					line: 40,
					column: 2
				},
				end: {
					line: 40,
					column: 37
				}
			},
			'7': {
				start: {
					line: 42,
					column: 17
				},
				end: {
					line: 42,
					column: 45
				}
			},
			'8': {
				start: {
					line: 43,
					column: 2
				},
				end: {
					line: 43,
					column: 34
				}
			},
			'9': {
				start: {
					line: 45,
					column: 2
				},
				end: {
					line: 45,
					column: 31
				}
			},
			'10': {
				start: {
					line: 45,
					column: 24
				},
				end: {
					line: 45,
					column: 29
				}
			},
			'11': {
				start: {
					line: 47,
					column: 2
				},
				end: {
					line: 60,
					column: 4
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 33,
						column: 14
					},
					end: {
						line: 33,
						column: 15
					}
				},
				loc: {
					start: {
						line: 33,
						column: 26
					},
					end: {
						line: 61,
						column: 2
					}
				},
				line: 33
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 34,
						column: 45
					},
					end: {
						line: 34,
						column: 46
					}
				},
				loc: {
					start: {
						line: 34,
						column: 62
					},
					end: {
						line: 34,
						column: 71
					}
				},
				line: 34
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 45,
						column: 14
					},
					end: {
						line: 45,
						column: 15
					}
				},
				loc: {
					start: {
						line: 45,
						column: 24
					},
					end: {
						line: 45,
						column: 29
					}
				},
				line: 45
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_27vftubw8l.s[0]++;
module.exports = {
	name: 'repeat-self',
	version: 2,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		wireXdot: null,
		'times-2': null,
		'times-10': null,
		'div-2': null,
		'plus-1': null,
		'minus-1': null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		'const-10': null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		pow: null,
		equal: null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: 4,
	outputX: 4,
	input: [1, null, null, 9],
	output: [1, null, null, 999999999],
	ioGenerator: random => {
		cov_27vftubw8l.f[0]++;

		const candidates = (cov_27vftubw8l.s[1]++, Array.from({ length: 7 }, (item, index) => {
			cov_27vftubw8l.f[1]++;
			cov_27vftubw8l.s[2]++;
			return index + 2;
		})); // 2..8
		const inputs = (cov_27vftubw8l.s[3]++, []);

		// Shuffle array and take heading 3
		const index1 = (cov_27vftubw8l.s[4]++, Math.floor(random() * 7));
		cov_27vftubw8l.s[5]++;
		inputs.push(candidates[index1]);
		cov_27vftubw8l.s[6]++;
		candidates[index1] = candidates[0];

		const index2 = (cov_27vftubw8l.s[7]++, Math.floor(random() * 6) + 1);
		cov_27vftubw8l.s[8]++;
		inputs.push(candidates[index2]);

		cov_27vftubw8l.s[9]++;
		inputs.sort((a, b) => {
			cov_27vftubw8l.f[2]++;
			cov_27vftubw8l.s[10]++;
			return a - b;
		});

		cov_27vftubw8l.s[11]++;
		return {
			input: [1, inputs[0], inputs[1], 9],
			output: [1, parseInt(inputs[0].toString().repeat(inputs[0])), parseInt(inputs[1].toString().repeat(inputs[1])), 999999999]
		};
	},
	width: 9,
	height: 9,
	clockLimit: 300,
	statement: '一桁の数を自分自身の回数だけリピートしよう！',
	title: '自己反復'
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2aa5j45rp7 = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/fibonacci-hard.js',
	    hash = '268943e216b2dfcef58f4660db1204259d1aefdd',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/fibonacci-hard.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 79,
					column: 2
				}
			},
			'1': {
				start: {
					line: 36,
					column: 20
				},
				end: {
					line: 36,
					column: 26
				}
			},
			'2': {
				start: {
					line: 38,
					column: 2
				},
				end: {
					line: 40,
					column: 3
				}
			},
			'3': {
				start: {
					line: 39,
					column: 3
				},
				end: {
					line: 39,
					column: 85
				}
			},
			'4': {
				start: {
					line: 42,
					column: 21
				},
				end: {
					line: 42,
					column: 74
				}
			},
			'5': {
				start: {
					line: 42,
					column: 63
				},
				end: {
					line: 42,
					column: 73
				}
			},
			'6': {
				start: {
					line: 43,
					column: 17
				},
				end: {
					line: 43,
					column: 19
				}
			},
			'7': {
				start: {
					line: 46,
					column: 17
				},
				end: {
					line: 46,
					column: 42
				}
			},
			'8': {
				start: {
					line: 47,
					column: 2
				},
				end: {
					line: 47,
					column: 34
				}
			},
			'9': {
				start: {
					line: 48,
					column: 2
				},
				end: {
					line: 48,
					column: 37
				}
			},
			'10': {
				start: {
					line: 50,
					column: 17
				},
				end: {
					line: 50,
					column: 46
				}
			},
			'11': {
				start: {
					line: 51,
					column: 2
				},
				end: {
					line: 51,
					column: 34
				}
			},
			'12': {
				start: {
					line: 52,
					column: 2
				},
				end: {
					line: 52,
					column: 37
				}
			},
			'13': {
				start: {
					line: 54,
					column: 17
				},
				end: {
					line: 54,
					column: 46
				}
			},
			'14': {
				start: {
					line: 55,
					column: 2
				},
				end: {
					line: 55,
					column: 34
				}
			},
			'15': {
				start: {
					line: 57,
					column: 2
				},
				end: {
					line: 57,
					column: 31
				}
			},
			'16': {
				start: {
					line: 57,
					column: 24
				},
				end: {
					line: 57,
					column: 29
				}
			},
			'17': {
				start: {
					line: 59,
					column: 2
				},
				end: {
					line: 72,
					column: 4
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 35,
						column: 14
					},
					end: {
						line: 35,
						column: 15
					}
				},
				loc: {
					start: {
						line: 35,
						column: 26
					},
					end: {
						line: 73,
						column: 2
					}
				},
				line: 35
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 42,
						column: 46
					},
					end: {
						line: 42,
						column: 47
					}
				},
				loc: {
					start: {
						line: 42,
						column: 63
					},
					end: {
						line: 42,
						column: 73
					}
				},
				line: 42
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 57,
						column: 14
					},
					end: {
						line: 57,
						column: 15
					}
				},
				loc: {
					start: {
						line: 57,
						column: 24
					},
					end: {
						line: 57,
						column: 29
					}
				},
				line: 57
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_2aa5j45rp7.s[0]++;
module.exports = {
	name: 'fibonacci-hard',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		wireXdot: null,
		'times-2': null,
		'times-3': null,
		'times-10': null,
		'div-2': null,
		'div-3': null,
		'div-10': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		'const-10': null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		pow: null,
		sqrt: null
	},
	inputX: 6,
	outputX: 6,
	input: [null, null, null, 30],
	output: [null, null, null, 832040],
	ioGenerator: random => {
		cov_2aa5j45rp7.f[0]++;

		const fibonacci = (cov_2aa5j45rp7.s[1]++, [1, 1]);

		cov_2aa5j45rp7.s[2]++;
		for (let i = 2; i < 30; i++) {
			cov_2aa5j45rp7.s[3]++;

			fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
		}

		const candidates = (cov_2aa5j45rp7.s[4]++, Array.from({ length: 18 }, (item, index) => {
			cov_2aa5j45rp7.f[1]++;
			cov_2aa5j45rp7.s[5]++;
			return index + 12;
		})); // 12..29
		const inputs = (cov_2aa5j45rp7.s[6]++, []);

		// Shuffle array and take heading 3
		const index1 = (cov_2aa5j45rp7.s[7]++, Math.floor(random() * 18));
		cov_2aa5j45rp7.s[8]++;
		inputs.push(candidates[index1]);
		cov_2aa5j45rp7.s[9]++;
		candidates[index1] = candidates[0];

		const index2 = (cov_2aa5j45rp7.s[10]++, Math.floor(random() * 17) + 1);
		cov_2aa5j45rp7.s[11]++;
		inputs.push(candidates[index2]);
		cov_2aa5j45rp7.s[12]++;
		candidates[index2] = candidates[1];

		const index3 = (cov_2aa5j45rp7.s[13]++, Math.floor(random() * 16) + 2);
		cov_2aa5j45rp7.s[14]++;
		inputs.push(candidates[index3]);

		cov_2aa5j45rp7.s[15]++;
		inputs.sort((a, b) => {
			cov_2aa5j45rp7.f[2]++;
			cov_2aa5j45rp7.s[16]++;
			return a - b;
		});

		cov_2aa5j45rp7.s[17]++;
		return {
			input: [inputs[0], inputs[1], inputs[2], 30],
			output: [fibonacci[inputs[0] - 1], fibonacci[inputs[1] - 1], fibonacci[inputs[2] - 1], fibonacci[29]]
		};
	},
	width: 13,
	height: 13,
	clockLimit: 50,
	statement: 'n番目のフィボナッチ数を計算してみよう!',
	title: 'フィボナッチ数 -hard-'
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_16pz43lyh1 = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/factorization.js',
	    hash = '8fa55ced2a981bf93f68231712f16254240abe97',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/factorization.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 97,
					column: 2
				}
			},
			'1': {
				start: {
					line: 41,
					column: 18
				},
				end: {
					line: 41,
					column: 27
				}
			},
			'2': {
				start: {
					line: 42,
					column: 17
				},
				end: {
					line: 42,
					column: 20
				}
			},
			'3': {
				start: {
					line: 43,
					column: 2
				},
				end: {
					line: 57,
					column: 3
				}
			},
			'4': {
				start: {
					line: 44,
					column: 14
				},
				end: {
					line: 44,
					column: 18
				}
			},
			'5': {
				start: {
					line: 45,
					column: 3
				},
				end: {
					line: 50,
					column: 4
				}
			},
			'6': {
				start: {
					line: 46,
					column: 4
				},
				end: {
					line: 49,
					column: 5
				}
			},
			'7': {
				start: {
					line: 47,
					column: 5
				},
				end: {
					line: 47,
					column: 18
				}
			},
			'8': {
				start: {
					line: 48,
					column: 5
				},
				end: {
					line: 48,
					column: 11
				}
			},
			'9': {
				start: {
					line: 51,
					column: 3
				},
				end: {
					line: 56,
					column: 4
				}
			},
			'10': {
				start: {
					line: 52,
					column: 4
				},
				end: {
					line: 52,
					column: 20
				}
			},
			'11': {
				start: {
					line: 53,
					column: 4
				},
				end: {
					line: 53,
					column: 19
				}
			},
			'12': {
				start: {
					line: 55,
					column: 4
				},
				end: {
					line: 55,
					column: 23
				}
			},
			'13': {
				start: {
					line: 59,
					column: 21
				},
				end: {
					line: 59,
					column: 74
				}
			},
			'14': {
				start: {
					line: 59,
					column: 64
				},
				end: {
					line: 59,
					column: 73
				}
			},
			'15': {
				start: {
					line: 60,
					column: 17
				},
				end: {
					line: 60,
					column: 19
				}
			},
			'16': {
				start: {
					line: 62,
					column: 17
				},
				end: {
					line: 62,
					column: 42
				}
			},
			'17': {
				start: {
					line: 63,
					column: 2
				},
				end: {
					line: 63,
					column: 34
				}
			},
			'18': {
				start: {
					line: 64,
					column: 2
				},
				end: {
					line: 64,
					column: 37
				}
			},
			'19': {
				start: {
					line: 66,
					column: 17
				},
				end: {
					line: 66,
					column: 47
				}
			},
			'20': {
				start: {
					line: 67,
					column: 2
				},
				end: {
					line: 67,
					column: 34
				}
			},
			'21': {
				start: {
					line: 68,
					column: 2
				},
				end: {
					line: 68,
					column: 37
				}
			},
			'22': {
				start: {
					line: 70,
					column: 17
				},
				end: {
					line: 70,
					column: 47
				}
			},
			'23': {
				start: {
					line: 71,
					column: 2
				},
				end: {
					line: 71,
					column: 34
				}
			},
			'24': {
				start: {
					line: 73,
					column: 2
				},
				end: {
					line: 73,
					column: 31
				}
			},
			'25': {
				start: {
					line: 73,
					column: 24
				},
				end: {
					line: 73,
					column: 29
				}
			},
			'26': {
				start: {
					line: 75,
					column: 2
				},
				end: {
					line: 90,
					column: 4
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 40,
						column: 14
					},
					end: {
						line: 40,
						column: 15
					}
				},
				loc: {
					start: {
						line: 40,
						column: 26
					},
					end: {
						line: 91,
						column: 2
					}
				},
				line: 40
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 59,
						column: 47
					},
					end: {
						line: 59,
						column: 48
					}
				},
				loc: {
					start: {
						line: 59,
						column: 64
					},
					end: {
						line: 59,
						column: 73
					}
				},
				line: 59
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 73,
						column: 14
					},
					end: {
						line: 73,
						column: 15
					}
				},
				loc: {
					start: {
						line: 73,
						column: 24
					},
					end: {
						line: 73,
						column: 29
					}
				},
				line: 73
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 46,
						column: 4
					},
					end: {
						line: 49,
						column: 5
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 46,
						column: 4
					},
					end: {
						line: 49,
						column: 5
					}
				}, {
					start: {
						line: 46,
						column: 4
					},
					end: {
						line: 49,
						column: 5
					}
				}],
				line: 46
			},
			'1': {
				loc: {
					start: {
						line: 51,
						column: 3
					},
					end: {
						line: 56,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 51,
						column: 3
					},
					end: {
						line: 56,
						column: 4
					}
				}, {
					start: {
						line: 51,
						column: 3
					},
					end: {
						line: 56,
						column: 4
					}
				}],
				line: 51
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_16pz43lyh1.s[0]++;
module.exports = {
	name: 'factorization',
	version: 2,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		wireXdot: null,
		'times-2': null,
		'times-3': null,
		'times-10': null,
		'plus-1': null,
		'minus-1': null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		mod: null,
		pow: null,
		log: null,
		sqrt: null,
		equal: null,
		neq: null,
		gt: null,
		geqq: null,
		lt: null,
		leqq: null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: 5,
	outputX: 5,
	input: [null, null, null, 211, 221],
	output: [null, null, null, 0, 13],
	ioGenerator: random => {
		cov_16pz43lyh1.f[0]++;

		const numbers = (cov_16pz43lyh1.s[1]++, [0, 0, 0]);
		const primes = (cov_16pz43lyh1.s[2]++, [2]);
		cov_16pz43lyh1.s[3]++;
		for (let i = 3; i < 256; i++) {
			let flag = (cov_16pz43lyh1.s[4]++, null);
			cov_16pz43lyh1.s[5]++;
			for (const prime of primes) {
				cov_16pz43lyh1.s[6]++;

				if (i % prime === 0) {
					cov_16pz43lyh1.b[0][0]++;
					cov_16pz43lyh1.s[7]++;

					flag = prime;
					cov_16pz43lyh1.s[8]++;
					break;
				} else {
					cov_16pz43lyh1.b[0][1]++;
				}
			}
			cov_16pz43lyh1.s[9]++;
			if (flag === null) {
				cov_16pz43lyh1.b[1][0]++;
				cov_16pz43lyh1.s[10]++;

				numbers.push(0);
				cov_16pz43lyh1.s[11]++;
				primes.push(i);
			} else {
				cov_16pz43lyh1.b[1][1]++;
				cov_16pz43lyh1.s[12]++;

				numbers.push(flag);
			}
		}

		const candidates = (cov_16pz43lyh1.s[13]++, Array.from({ length: 199 }, (item, index) => {
			cov_16pz43lyh1.f[1]++;
			cov_16pz43lyh1.s[14]++;
			return index + 2;
		})); // 2..200
		const inputs = (cov_16pz43lyh1.s[15]++, []);

		const index1 = (cov_16pz43lyh1.s[16]++, Math.floor(random() * 30));
		cov_16pz43lyh1.s[17]++;
		inputs.push(candidates[index1]);
		cov_16pz43lyh1.s[18]++;
		candidates[index1] = candidates[0];

		const index2 = (cov_16pz43lyh1.s[19]++, Math.floor(random() * 119) + 1);
		cov_16pz43lyh1.s[20]++;
		inputs.push(candidates[index2]);
		cov_16pz43lyh1.s[21]++;
		candidates[index2] = candidates[1];

		const index3 = (cov_16pz43lyh1.s[22]++, Math.floor(random() * 118) + 2);
		cov_16pz43lyh1.s[23]++;
		inputs.push(candidates[index3]);

		cov_16pz43lyh1.s[24]++;
		inputs.sort((a, b) => {
			cov_16pz43lyh1.f[2]++;
			cov_16pz43lyh1.s[25]++;
			return a - b;
		});

		cov_16pz43lyh1.s[26]++;
		return {
			input: [inputs[0], inputs[1], inputs[2], 211, 221],
			output: [numbers[inputs[0]], numbers[inputs[1]], numbers[inputs[2]], 0, 13]
		};
	},
	width: 11,
	height: 11,
	clockLimit: 150,
	statement: '与えられた数が素数なら0を、素数でないなら最も小さい1でない約数を探してみよう!',
	title: '因数分解'
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_w1ynyetvj = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/spaceship.js',
	    hash = '8deb856a0bc8efd4b2282f77a7c6236852a72588',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/spaceship.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 95,
					column: 2
				}
			},
			'1': {
				start: {
					line: 43,
					column: 21
				},
				end: {
					line: 43,
					column: 73
				}
			},
			'2': {
				start: {
					line: 43,
					column: 63
				},
				end: {
					line: 43,
					column: 72
				}
			},
			'3': {
				start: {
					line: 45,
					column: 15
				},
				end: {
					line: 49,
					column: 3
				}
			},
			'4': {
				start: {
					line: 46,
					column: 16
				},
				end: {
					line: 46,
					column: 34
				}
			},
			'5': {
				start: {
					line: 47,
					column: 3
				},
				end: {
					line: 47,
					column: 43
				}
			},
			'6': {
				start: {
					line: 48,
					column: 3
				},
				end: {
					line: 48,
					column: 29
				}
			},
			'7': {
				start: {
					line: 51,
					column: 17
				},
				end: {
					line: 51,
					column: 54
				}
			},
			'8': {
				start: {
					line: 53,
					column: 23
				},
				end: {
					line: 53,
					column: 48
				}
			},
			'9': {
				start: {
					line: 54,
					column: 2
				},
				end: {
					line: 54,
					column: 24
				}
			},
			'10': {
				start: {
					line: 55,
					column: 23
				},
				end: {
					line: 55,
					column: 52
				}
			},
			'11': {
				start: {
					line: 57,
					column: 17
				},
				end: {
					line: 57,
					column: 80
				}
			},
			'12': {
				start: {
					line: 57,
					column: 74
				},
				end: {
					line: 57,
					column: 79
				}
			},
			'13': {
				start: {
					line: 59,
					column: 23
				},
				end: {
					line: 59,
					column: 48
				}
			},
			'14': {
				start: {
					line: 60,
					column: 2
				},
				end: {
					line: 60,
					column: 24
				}
			},
			'15': {
				start: {
					line: 61,
					column: 23
				},
				end: {
					line: 61,
					column: 52
				}
			},
			'16': {
				start: {
					line: 63,
					column: 17
				},
				end: {
					line: 63,
					column: 80
				}
			},
			'17': {
				start: {
					line: 63,
					column: 74
				},
				end: {
					line: 63,
					column: 79
				}
			},
			'18': {
				start: {
					line: 65,
					column: 25
				},
				end: {
					line: 65,
					column: 55
				}
			},
			'19': {
				start: {
					line: 66,
					column: 25
				},
				end: {
					line: 66,
					column: 54
				}
			},
			'20': {
				start: {
					line: 68,
					column: 17
				},
				end: {
					line: 68,
					column: 101
				}
			},
			'21': {
				start: {
					line: 70,
					column: 23
				},
				end: {
					line: 70,
					column: 48
				}
			},
			'22': {
				start: {
					line: 71,
					column: 2
				},
				end: {
					line: 71,
					column: 24
				}
			},
			'23': {
				start: {
					line: 72,
					column: 23
				},
				end: {
					line: 72,
					column: 52
				}
			},
			'24': {
				start: {
					line: 74,
					column: 17
				},
				end: {
					line: 74,
					column: 60
				}
			},
			'25': {
				start: {
					line: 76,
					column: 20
				},
				end: {
					line: 76,
					column: 46
				}
			},
			'26': {
				start: {
					line: 76,
					column: 30
				},
				end: {
					line: 76,
					column: 46
				}
			},
			'27': {
				start: {
					line: 78,
					column: 2
				},
				end: {
					line: 93,
					column: 4
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 42,
						column: 14
					},
					end: {
						line: 42,
						column: 15
					}
				},
				loc: {
					start: {
						line: 42,
						column: 26
					},
					end: {
						line: 94,
						column: 2
					}
				},
				line: 42
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 43,
						column: 46
					},
					end: {
						line: 43,
						column: 47
					}
				},
				loc: {
					start: {
						line: 43,
						column: 63
					},
					end: {
						line: 43,
						column: 72
					}
				},
				line: 43
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 45,
						column: 15
					},
					end: {
						line: 45,
						column: 16
					}
				},
				loc: {
					start: {
						line: 45,
						column: 35
					},
					end: {
						line: 49,
						column: 3
					}
				},
				line: 45
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 57,
						column: 64
					},
					end: {
						line: 57,
						column: 65
					}
				},
				loc: {
					start: {
						line: 57,
						column: 74
					},
					end: {
						line: 57,
						column: 79
					}
				},
				line: 57
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 63,
						column: 64
					},
					end: {
						line: 63,
						column: 65
					}
				},
				loc: {
					start: {
						line: 63,
						column: 74
					},
					end: {
						line: 63,
						column: 79
					}
				},
				line: 63
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 76,
						column: 20
					},
					end: {
						line: 76,
						column: 21
					}
				},
				loc: {
					start: {
						line: 76,
						column: 30
					},
					end: {
						line: 76,
						column: 46
					}
				},
				line: 76
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 68,
						column: 17
					},
					end: {
						line: 68,
						column: 101
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 68,
						column: 34
					},
					end: {
						line: 68,
						column: 66
					}
				}, {
					start: {
						line: 68,
						column: 69
					},
					end: {
						line: 68,
						column: 101
					}
				}],
				line: 68
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0
		},
		b: {
			'0': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_w1ynyetvj.s[0]++;
module.exports = {
	name: 'spaceship',
	version: 2,
	title: '宇宙船',
	statement: '右の数より左の数が大きいなら1を、左の数より右の数が大きいなら-1を、同じなら0を出力しよう！',
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		wireXdot: null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		'times-2': null,
		'times-3': null,
		'div-2': null,
		'div-3': null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		'const-3': null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		pow: null,
		log: null,
		sqrt: null,
		conditional: null,
		transistor: null,
		diode: null
	},
	width: 7,
	height: 7,
	inputX: [2, 4],
	outputX: 3,
	clockLimit: 100,
	input: [[null, null], [null, null], [null, null], [null, null], [null, null]],
	output: [0, -1, 1, null, null],
	ioGenerator: random => {
		cov_w1ynyetvj.f[0]++;

		const candidates = (cov_w1ynyetvj.s[1]++, Array.from({ length: 99 }, (item, index) => {
			cov_w1ynyetvj.f[1]++;
			cov_w1ynyetvj.s[2]++;
			return index + 1;
		})); // 1..100

		cov_w1ynyetvj.s[3]++;
		const swap = (index1, index2) => {
			cov_w1ynyetvj.f[2]++;

			const temp = (cov_w1ynyetvj.s[4]++, candidates[index1]);
			cov_w1ynyetvj.s[5]++;
			candidates[index1] = candidates[index2];
			cov_w1ynyetvj.s[6]++;
			candidates[index2] = temp;
		};

		const input1 = (cov_w1ynyetvj.s[7]++, candidates[Math.floor(random() * 99)]);

		const input2index1 = (cov_w1ynyetvj.s[8]++, Math.floor(random() * 99));
		cov_w1ynyetvj.s[9]++;
		swap(0, input2index1);
		const input2index2 = (cov_w1ynyetvj.s[10]++, Math.floor(random() * 98) + 1);

		const input2 = (cov_w1ynyetvj.s[11]++, [candidates[0], candidates[input2index2]].sort((a, b) => {
			cov_w1ynyetvj.f[3]++;
			cov_w1ynyetvj.s[12]++;
			return a - b;
		}));

		const input3index1 = (cov_w1ynyetvj.s[13]++, Math.floor(random() * 99));
		cov_w1ynyetvj.s[14]++;
		swap(0, input3index1);
		const input3index2 = (cov_w1ynyetvj.s[15]++, Math.floor(random() * 98) + 1);

		const input3 = (cov_w1ynyetvj.s[16]++, [candidates[0], candidates[input3index2]].sort((a, b) => {
			cov_w1ynyetvj.f[4]++;
			cov_w1ynyetvj.s[17]++;
			return b - a;
		}));

		const input4negative = (cov_w1ynyetvj.s[18]++, -Math.floor(random() * 99) + 1);
		const input4positive = (cov_w1ynyetvj.s[19]++, Math.floor(random() * 99) + 1);

		const input4 = (cov_w1ynyetvj.s[20]++, random() < 0.5 ? (cov_w1ynyetvj.b[0][0]++, [input4negative, input4positive]) : (cov_w1ynyetvj.b[0][1]++, [input4positive, input4negative]));

		const input5index1 = (cov_w1ynyetvj.s[21]++, Math.floor(random() * 99));
		cov_w1ynyetvj.s[22]++;
		swap(0, input5index1);
		const input5index2 = (cov_w1ynyetvj.s[23]++, Math.floor(random() * 98) + 1);

		const input5 = (cov_w1ynyetvj.s[24]++, [-candidates[0], -candidates[input5index2]]);

		cov_w1ynyetvj.s[25]++;
		const spaceship = (a, b) => {
			cov_w1ynyetvj.f[5]++;
			cov_w1ynyetvj.s[26]++;
			return Math.sign(a - b);
		};

		cov_w1ynyetvj.s[27]++;
		return {
			input: [[input1, input1], input2, input3, input4, input5],
			output: [spaceship(input1, input1), spaceship(...input2), spaceship(...input3), spaceship(...input4), spaceship(...input5)]
		};
	}
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_14019hpzfg = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/10000th-digit.js',
	    hash = '36cf6db805c6348f1b7217cec6871894b5ca10b6',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/10000th-digit.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 163,
					column: 2
				}
			},
			'1': {
				start: {
					line: 51,
					column: 21
				},
				end: {
					line: 53,
					column: 3
				}
			},
			'2': {
				start: {
					line: 52,
					column: 3
				},
				end: {
					line: 52,
					column: 50
				}
			},
			'3': {
				start: {
					line: 55,
					column: 15
				},
				end: {
					line: 61,
					column: 3
				}
			},
			'4': {
				start: {
					line: 56,
					column: 18
				},
				end: {
					line: 56,
					column: 19
				}
			},
			'5': {
				start: {
					line: 57,
					column: 3
				},
				end: {
					line: 59,
					column: 4
				}
			},
			'6': {
				start: {
					line: 58,
					column: 4
				},
				end: {
					line: 58,
					column: 35
				}
			},
			'7': {
				start: {
					line: 60,
					column: 3
				},
				end: {
					line: 60,
					column: 40
				}
			},
			'8': {
				start: {
					line: 63,
					column: 21
				},
				end: {
					line: 102,
					column: 38
				}
			},
			'9': {
				start: {
					line: 102,
					column: 18
				},
				end: {
					line: 102,
					column: 37
				}
			},
			'10': {
				start: {
					line: 104,
					column: 17
				},
				end: {
					line: 104,
					column: 19
				}
			},
			'11': {
				start: {
					line: 107,
					column: 22
				},
				end: {
					line: 107,
					column: 84
				}
			},
			'12': {
				start: {
					line: 107,
					column: 47
				},
				end: {
					line: 107,
					column: 83
				}
			},
			'13': {
				start: {
					line: 108,
					column: 2
				},
				end: {
					line: 108,
					column: 70
				}
			},
			'14': {
				start: {
					line: 111,
					column: 20
				},
				end: {
					line: 111,
					column: 29
				}
			},
			'15': {
				start: {
					line: 112,
					column: 2
				},
				end: {
					line: 117,
					column: 5
				}
			},
			'16': {
				start: {
					line: 113,
					column: 3
				},
				end: {
					line: 115,
					column: 4
				}
			},
			'17': {
				start: {
					line: 114,
					column: 4
				},
				end: {
					line: 114,
					column: 31
				}
			},
			'18': {
				start: {
					line: 116,
					column: 3
				},
				end: {
					line: 116,
					column: 34
				}
			},
			'19': {
				start: {
					line: 119,
					column: 27
				},
				end: {
					line: 121,
					column: 4
				}
			},
			'20': {
				start: {
					line: 120,
					column: 3
				},
				end: {
					line: 120,
					column: 35
				}
			},
			'21': {
				start: {
					line: 125,
					column: 17
				},
				end: {
					line: 125,
					column: 63
				}
			},
			'22': {
				start: {
					line: 126,
					column: 27
				},
				end: {
					line: 126,
					column: 66
				}
			},
			'23': {
				start: {
					line: 127,
					column: 2
				},
				end: {
					line: 127,
					column: 80
				}
			},
			'24': {
				start: {
					line: 128,
					column: 2
				},
				end: {
					line: 128,
					column: 49
				}
			},
			'25': {
				start: {
					line: 130,
					column: 17
				},
				end: {
					line: 130,
					column: 73
				}
			},
			'26': {
				start: {
					line: 131,
					column: 27
				},
				end: {
					line: 131,
					column: 66
				}
			},
			'27': {
				start: {
					line: 132,
					column: 2
				},
				end: {
					line: 132,
					column: 80
				}
			},
			'28': {
				start: {
					line: 133,
					column: 2
				},
				end: {
					line: 133,
					column: 49
				}
			},
			'29': {
				start: {
					line: 135,
					column: 17
				},
				end: {
					line: 135,
					column: 73
				}
			},
			'30': {
				start: {
					line: 136,
					column: 27
				},
				end: {
					line: 136,
					column: 66
				}
			},
			'31': {
				start: {
					line: 137,
					column: 2
				},
				end: {
					line: 137,
					column: 80
				}
			},
			'32': {
				start: {
					line: 139,
					column: 2
				},
				end: {
					line: 139,
					column: 31
				}
			},
			'33': {
				start: {
					line: 139,
					column: 24
				},
				end: {
					line: 139,
					column: 29
				}
			},
			'34': {
				start: {
					line: 141,
					column: 2
				},
				end: {
					line: 156,
					column: 4
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 50,
						column: 14
					},
					end: {
						line: 50,
						column: 15
					}
				},
				loc: {
					start: {
						line: 50,
						column: 26
					},
					end: {
						line: 157,
						column: 2
					}
				},
				line: 50
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 51,
						column: 21
					},
					end: {
						line: 51,
						column: 22
					}
				},
				loc: {
					start: {
						line: 52,
						column: 3
					},
					end: {
						line: 52,
						column: 50
					}
				},
				line: 52
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 55,
						column: 15
					},
					end: {
						line: 55,
						column: 16
					}
				},
				loc: {
					start: {
						line: 55,
						column: 22
					},
					end: {
						line: 61,
						column: 3
					}
				},
				line: 55
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 102,
						column: 11
					},
					end: {
						line: 102,
						column: 12
					}
				},
				loc: {
					start: {
						line: 102,
						column: 18
					},
					end: {
						line: 102,
						column: 37
					}
				},
				line: 102
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 107,
						column: 40
					},
					end: {
						line: 107,
						column: 41
					}
				},
				loc: {
					start: {
						line: 107,
						column: 47
					},
					end: {
						line: 107,
						column: 83
					}
				},
				line: 107
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 112,
						column: 21
					},
					end: {
						line: 112,
						column: 22
					}
				},
				loc: {
					start: {
						line: 112,
						column: 28
					},
					end: {
						line: 117,
						column: 3
					}
				},
				line: 112
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 119,
						column: 63
					},
					end: {
						line: 119,
						column: 64
					}
				},
				loc: {
					start: {
						line: 120,
						column: 3
					},
					end: {
						line: 120,
						column: 35
					}
				},
				line: 120
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 139,
						column: 14
					},
					end: {
						line: 139,
						column: 15
					}
				},
				loc: {
					start: {
						line: 139,
						column: 24
					},
					end: {
						line: 139,
						column: 29
					}
				},
				line: 139
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 52,
						column: 3
					},
					end: {
						line: 52,
						column: 50
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 52,
						column: 27
					},
					end: {
						line: 52,
						column: 32
					}
				}, {
					start: {
						line: 52,
						column: 35
					},
					end: {
						line: 52,
						column: 50
					}
				}],
				line: 52
			},
			'1': {
				loc: {
					start: {
						line: 107,
						column: 47
					},
					end: {
						line: 107,
						column: 83
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 107,
						column: 47
					},
					end: {
						line: 107,
						column: 66
					}
				}, {
					start: {
						line: 107,
						column: 70
					},
					end: {
						line: 107,
						column: 83
					}
				}],
				line: 107
			},
			'2': {
				loc: {
					start: {
						line: 113,
						column: 3
					},
					end: {
						line: 115,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 113,
						column: 3
					},
					end: {
						line: 115,
						column: 4
					}
				}, {
					start: {
						line: 113,
						column: 3
					},
					end: {
						line: 115,
						column: 4
					}
				}],
				line: 113
			},
			'3': {
				loc: {
					start: {
						line: 120,
						column: 3
					},
					end: {
						line: 120,
						column: 35
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 120,
						column: 3
					},
					end: {
						line: 120,
						column: 10
					}
				}, {
					start: {
						line: 120,
						column: 14
					},
					end: {
						line: 120,
						column: 35
					}
				}],
				line: 120
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0,
			'33': 0,
			'34': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_14019hpzfg.s[0]++;
module.exports = {
	name: '10000th-digit',
	version: 2,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		wireXdot: null,
		'times-2': null,
		'times-3': null,
		'times-10': null,
		'div-2': null,
		'div-3': null,
		'div-10': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		'const-3': null,
		'const-10': null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		mod: null,
		pow: null,
		'bitshift-left': null,
		'bitshift-right': null,
		'bitwise-and': null,
		'bitwise-or': null,
		'bitwise-xor': null,
		equal: null,
		neq: null,
		gt: null,
		geqq: null,
		lt: null,
		leqq: null,
		diode: null,
		conditional: null,
		transistor: null
	},
	inputX: 6,
	outputX: 6,
	input: [null, null, null, null, 107],
	output: [null, null, null, null, 3],
	ioGenerator: random => {
		cov_14019hpzfg.f[0]++;
		cov_14019hpzfg.s[1]++;

		const iterations = n => {
			cov_14019hpzfg.f[1]++;
			cov_14019hpzfg.s[2]++;
			return 10000 % (n - 1) === 0 ? (cov_14019hpzfg.b[0][0]++, n - 1) : (cov_14019hpzfg.b[0][1]++, 10000 % (n - 1));
		};

		cov_14019hpzfg.s[3]++;
		const calc = p => {
			cov_14019hpzfg.f[2]++;

			let reminder = (cov_14019hpzfg.s[4]++, 1);
			cov_14019hpzfg.s[5]++;
			for (let i = 0; i < iterations(p) - 1; i++) {
				cov_14019hpzfg.s[6]++;

				reminder = reminder * 10 % p;
			}
			cov_14019hpzfg.s[7]++;
			return Math.floor(reminder * 10 / p);
		};

		const candidates = (cov_14019hpzfg.s[8]++, [7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103,
		// 107
		109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179].filter(n => {
			cov_14019hpzfg.f[3]++;
			cov_14019hpzfg.s[9]++;
			return iterations(n) <= 36;
		}));

		const inputs = (cov_14019hpzfg.s[10]++, []);

		// Take input which takes at least 24 iterations
		const heavyInputs = (cov_14019hpzfg.s[11]++, candidates.filter(n => {
			cov_14019hpzfg.f[4]++;
			cov_14019hpzfg.s[12]++;
			return (cov_14019hpzfg.b[1][0]++, iterations(n) >= 24) && (cov_14019hpzfg.b[1][1]++, calc(n) !== 3);
		}));
		cov_14019hpzfg.s[13]++;
		inputs.push(heavyInputs[Math.floor(random() * heavyInputs.length)]);

		// Generate outputMap
		const outputMap = (cov_14019hpzfg.s[14]++, new Map());
		cov_14019hpzfg.s[15]++;
		candidates.forEach(n => {
			cov_14019hpzfg.f[5]++;
			cov_14019hpzfg.s[16]++;

			if (!outputMap.has(calc(n))) {
				cov_14019hpzfg.b[2][0]++;
				cov_14019hpzfg.s[17]++;

				outputMap.set(calc(n), []);
			} else {
				cov_14019hpzfg.b[2][1]++;
			}
			cov_14019hpzfg.s[18]++;
			outputMap.get(calc(n)).push(n);
		});

		const outputCandidates = (cov_14019hpzfg.s[19]++, Array.from(outputMap.keys()).filter(n => {
			cov_14019hpzfg.f[6]++;
			cov_14019hpzfg.s[20]++;
			return (cov_14019hpzfg.b[3][0]++, n !== 3) && (cov_14019hpzfg.b[3][1]++, n !== calc(inputs[0]));
		}));

		// Take unique outputs by 3 and get corresponding inputs

		const index1 = (cov_14019hpzfg.s[21]++, Math.floor(random() * outputCandidates.length));
		const inputCandidates1 = (cov_14019hpzfg.s[22]++, outputMap.get(outputCandidates[index1]));
		cov_14019hpzfg.s[23]++;
		inputs.push(inputCandidates1[Math.floor(random() * inputCandidates1.length)]);
		cov_14019hpzfg.s[24]++;
		outputCandidates[index1] = outputCandidates[0];

		const index2 = (cov_14019hpzfg.s[25]++, Math.floor(random() * (outputCandidates.length - 1)) + 1);
		const inputCandidates2 = (cov_14019hpzfg.s[26]++, outputMap.get(outputCandidates[index2]));
		cov_14019hpzfg.s[27]++;
		inputs.push(inputCandidates2[Math.floor(random() * inputCandidates2.length)]);
		cov_14019hpzfg.s[28]++;
		outputCandidates[index2] = outputCandidates[1];

		const index3 = (cov_14019hpzfg.s[29]++, Math.floor(random() * (outputCandidates.length - 2)) + 2);
		const inputCandidates3 = (cov_14019hpzfg.s[30]++, outputMap.get(outputCandidates[index3]));
		cov_14019hpzfg.s[31]++;
		inputs.push(inputCandidates3[Math.floor(random() * inputCandidates3.length)]);

		cov_14019hpzfg.s[32]++;
		inputs.sort((a, b) => {
			cov_14019hpzfg.f[7]++;
			cov_14019hpzfg.s[33]++;
			return a - b;
		});

		cov_14019hpzfg.s[34]++;
		return {
			input: [inputs[0], inputs[1], inputs[2], inputs[3], 107],
			output: [calc(inputs[0]), calc(inputs[1]), calc(inputs[2]), calc(inputs[3]), 3]
		};
	},
	width: 13,
	height: 13,
	clockLimit: 1000,
	statement: '7以上の素数pに対して、1/pの小数点以下10000桁目の数字を求めてみよう！',
	title: '10000桁目'
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_sq4vmk9xj = function () {
    var path = "/home/travis/build/tsg-ut/mnemo/.tmp/mocha-webpack/fb899a75c53811cdcbb0f88a6a440fd6-entry.js",
        hash = "0b6c46d831cf460c39f684b2c9d6988bf3dd2d66",
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/home/travis/build/tsg-ut/mnemo/.tmp/mocha-webpack/fb899a75c53811cdcbb0f88a6a440fd6-entry.js",
        statementMap: {
            "0": {
                start: {
                    line: 2,
                    column: 23
                },
                end: {
                    line: 2,
                    column: 64
                }
            },
            "1": {
                start: {
                    line: 4,
                    column: 19
                },
                end: {
                    line: 4,
                    column: 38
                }
            },
            "2": {
                start: {
                    line: 6,
                    column: 4
                },
                end: {
                    line: 6,
                    column: 35
                }
            }
        },
        fnMap: {},
        branchMap: {},
        s: {
            "0": 0,
            "1": 0,
            "2": 0
        },
        f: {},
        b: {},
        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}();

var testsContext = (cov_sq4vmk9xj.s[0]++, __webpack_require__(38));

var runnable = (cov_sq4vmk9xj.s[1]++, testsContext.keys());

cov_sq4vmk9xj.s[2]++;
runnable.forEach(testsContext);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./block-component.jsx": 39,
	"./block.ls": 43,
	"./board-component.jsx": 45,
	"./board.ls": 50,
	"./data-component.jsx": 51,
	"./io-component.jsx": 52,
	"./panel-component.jsx": 53,
	"./stages.ls": 57,
	"./util.ls": 60,
	"./validator.ls": 61
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 38;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-env mocha */
/* eslint no-unused-expressions: "off" */

// eslint-disable-next-line no-unused-vars
const BlockComponent = __webpack_require__(10);

describe('<BlockComponent/>', () => {
	// TODO
});

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("react-gsap-enhancer");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var expect, coreJs, Board, Block, Data, It;
expect = __webpack_require__(2).expect;
coreJs = __webpack_require__(13);
Board = __webpack_require__(5);
Block = __webpack_require__(7);
Data = __webpack_require__(8);
It = global.it;
describe('Block', function(){
  var board, ioTest;
  board = null;
  beforeEach(function(){
    return board = this.board = new Board({
      inputX: 0,
      outputX: 0,
      width: 1,
      height: 1
    });
  });
  ioTest = function(io){
    var block, source, ref$, value, data, entries, iterator, destination, queue, own$ = {}.hasOwnProperty, results$ = [];
    board.placeBlock({
      x: 0,
      y: 0,
      type: io.type,
      rotate: io.rotate || 0
    });
    block = board.getBlock(0, 0);
    for (source in ref$ = io['in']) if (own$.call(ref$, source)) {
      value = ref$[source];
      data = new Data(board, value);
      block.input(source, data);
    }
    block.step();
    entries = block.outputQueues.entries();
    while (!(iterator = entries.next()).done) {
      ref$ = iterator.value, destination = ref$[0], queue = ref$[1];
      if (io.out[destination] === undefined) {
        expect(queue).to.be.an('array');
        results$.push(expect(queue).to.have.lengthOf(0));
      } else {
        expect(queue).to.be.an('array');
        expect(queue).to.have.lengthOf(1);
        expect(queue[0]).to.be['instanceof'](Data);
        results$.push(expect(queue[0].value).to.equal(io.out[destination]));
      }
    }
    return results$;
  };
  describe('WireI block', function(){
    context('without rotation', function(){
      It('conveys data from top to bottom', function(){
        return ioTest({
          type: 'wireI',
          'in': {
            top: 334
          },
          out: {
            bottom: 334
          }
        });
      });
      It('conveys data from bottom to top', function(){
        return ioTest({
          type: 'wireI',
          'in': {
            bottom: 334
          },
          out: {
            top: 334
          }
        });
      });
      return It('erases any data put on the right side', function(){
        var this$ = this;
        this.board.placeBlock({
          x: 0,
          y: 0,
          type: 'wireI',
          rotate: 0
        });
        this.block = this.board.getBlock(0, 0);
        return new Promise(function(resolve, reject){
          var data;
          data = new Data(this$.board, 334);
          this$.block.input('right', data);
          this$.block.on('erase', function(erasedData){
            expect(erasedData).to.equal(data);
            return resolve();
          });
          return this$.block.step();
        });
      });
    });
    return context('with rotation', function(){
      return It('conveys data from left to right', function(){
        return ioTest({
          type: 'wireI',
          rotate: 1,
          'in': {
            left: 334
          },
          out: {
            right: 334
          }
        });
      });
    });
  });
  describe('WireL block', function(){
    It('conveys data from top to right', function(){
      return ioTest({
        type: 'wireL',
        'in': {
          top: 334
        },
        out: {
          right: 334
        }
      });
    });
    return It('conveys data from right to top', function(){
      return ioTest({
        type: 'wireL',
        'in': {
          right: 334
        },
        out: {
          top: 334
        }
      });
    });
  });
  describe('WireT block', function(){
    It('conveys data from left to right and top', function(){
      return ioTest({
        type: 'wireT',
        'in': {
          left: 334
        },
        out: {
          right: 334,
          top: 334
        }
      });
    });
    return It('conveys data from top to right and left', function(){
      return ioTest({
        type: 'wireT',
        'in': {
          top: 334
        },
        out: {
          right: 334,
          left: 334
        }
      });
    });
  });
  describe('WireX block', function(){
    It('conveys data from top to bottom', function(){
      return ioTest({
        type: 'wireX',
        'in': {
          top: 334
        },
        out: {
          bottom: 334
        }
      });
    });
    return It('conveys data from left to right', function(){
      return ioTest({
        type: 'wireX',
        'in': {
          left: 334
        },
        out: {
          right: 334
        }
      });
    });
  });
  describe('WireXdot block', function(){
    It('conveys data from top to left, right, and bottom', function(){
      return ioTest({
        type: 'wireXdot',
        'in': {
          top: 334
        },
        out: {
          right: 334,
          left: 334,
          bottom: 334
        }
      });
    });
    It('conveys data from left to top, right, and bottom', function(){
      return ioTest({
        type: 'wireXdot',
        'in': {
          left: 334
        },
        out: {
          right: 334,
          top: 334,
          bottom: 334
        }
      });
    });
    return It('conveys data from bottom to top, right, and left', function(){
      return ioTest({
        type: 'wireXdot',
        'in': {
          bottom: 334
        },
        out: {
          right: 334,
          top: 334,
          left: 334
        }
      });
    });
  });
  describe('JunctionR block', function(){
    context('without rotation', function(){
      It('conveys data from top to right', function(){
        return ioTest({
          type: 'junctionR',
          'in': {
            top: 334
          },
          out: {
            right: 334
          }
        });
      });
      It('conveys data from left to right', function(){
        return ioTest({
          type: 'junctionR',
          'in': {
            left: 334
          },
          out: {
            right: 334
          }
        });
      });
      It('conveys data from right to top and left', function(){
        return ioTest({
          type: 'junctionR',
          'in': {
            right: 334
          },
          out: {
            top: 334,
            left: 334
          }
        });
      });
      return It('erases any data put on the bottom', function(){
        var this$ = this;
        this.board.placeBlock({
          x: 0,
          y: 0,
          type: 'junctionR',
          rotate: 0
        });
        this.block = this.board.getBlock(0, 0);
        return new Promise(function(resolve, reject){
          var data;
          data = new Data(this$.board, 334);
          this$.block.input('bottom', data);
          this$.block.on('erase', function(erasedData){
            expect(erasedData).to.equal(data);
            return resolve();
          });
          return this$.block.step();
        });
      });
    });
    return context('with 90deg rotated', function(){
      return It('conveys data from bottom to top and right', function(){
        return ioTest({
          type: 'junctionR',
          rotate: 1,
          'in': {
            bottom: 334
          },
          out: {
            top: 334,
            right: 334
          }
        });
      });
    });
  });
  describe('JunctionL block', function(){
    It('conveys data from top to left', function(){
      return ioTest({
        type: 'junctionL',
        'in': {
          top: 334
        },
        out: {
          left: 334
        }
      });
    });
    It('conveys data from right to left', function(){
      return ioTest({
        type: 'junctionL',
        'in': {
          right: 334
        },
        out: {
          left: 334
        }
      });
    });
    return It('conveys data from left to top and right', function(){
      return ioTest({
        type: 'junctionL',
        'in': {
          left: 334
        },
        out: {
          top: 334,
          right: 334
        }
      });
    });
  });
  describe('JunctionT block', function(){
    It('conveys data from top to left and right', function(){
      return ioTest({
        type: 'junctionT',
        'in': {
          top: 334
        },
        out: {
          left: 334,
          right: 334
        }
      });
    });
    It('conveys data from right to top', function(){
      return ioTest({
        type: 'junctionT',
        'in': {
          right: 334
        },
        out: {
          top: 334
        }
      });
    });
    return It('conveys data from left to top', function(){
      return ioTest({
        type: 'junctionT',
        'in': {
          left: 334
        },
        out: {
          top: 334
        }
      });
    });
  });
  describe('times-2 block', function(){
    return It('converts data by multiplying 2', function(){
      return ioTest({
        type: 'times-2',
        'in': {
          top: 334
        },
        out: {
          bottom: 668
        }
      });
    });
  });
  describe('times-3 block', function(){
    return It('converts data by multiplying 3', function(){
      return ioTest({
        type: 'times-3',
        'in': {
          top: 334
        },
        out: {
          bottom: 1002
        }
      });
    });
  });
  describe('times-10 block', function(){
    return It('converts data by multiplying 10', function(){
      return ioTest({
        type: 'times-10',
        'in': {
          top: 334
        },
        out: {
          bottom: 3340
        }
      });
    });
  });
  describe('plus-1 block', function(){
    return It('converts data by adding 1', function(){
      return ioTest({
        type: 'plus-1',
        'in': {
          top: 334
        },
        out: {
          bottom: 335
        }
      });
    });
  });
  describe('plus-2 block', function(){
    return It('converts data by adding 2', function(){
      return ioTest({
        type: 'plus-2',
        'in': {
          top: 334
        },
        out: {
          bottom: 336
        }
      });
    });
  });
  describe('div-2 block', function(){
    It('converts data by dividing by 2', function(){
      return ioTest({
        type: 'div-2',
        'in': {
          top: 334
        },
        out: {
          bottom: 167
        }
      });
    });
    It('omits remainder of the division', function(){
      return ioTest({
        type: 'div-2',
        'in': {
          top: 17
        },
        out: {
          bottom: 8
        }
      });
    });
    return It('rounds remainder into zero', function(){
      return ioTest({
        type: 'div-2',
        'in': {
          top: -17
        },
        out: {
          bottom: -8
        }
      });
    });
  });
  describe('div-3 block', function(){
    It('converts data by dividing by 3', function(){
      return ioTest({
        type: 'div-3',
        'in': {
          top: 33
        },
        out: {
          bottom: 11
        }
      });
    });
    It('omits remainder of the division', function(){
      return ioTest({
        type: 'div-3',
        'in': {
          top: 17
        },
        out: {
          bottom: 5
        }
      });
    });
    return It('rounds remainder into zero', function(){
      return ioTest({
        type: 'div-3',
        'in': {
          top: -17
        },
        out: {
          bottom: -5
        }
      });
    });
  });
  describe('div-10 block', function(){
    It('converts data by dividing by 10', function(){
      return ioTest({
        type: 'div-10',
        'in': {
          top: 330
        },
        out: {
          bottom: 33
        }
      });
    });
    It('omits remainder of the division', function(){
      return ioTest({
        type: 'div-10',
        'in': {
          top: 334
        },
        out: {
          bottom: 33
        }
      });
    });
    return It('rounds remainder into zero', function(){
      return ioTest({
        type: 'div-10',
        'in': {
          top: -334
        },
        out: {
          bottom: -33
        }
      });
    });
  });
  describe('minus-1 block', function(){
    return It('converts data by subtracting 1', function(){
      return ioTest({
        type: 'minus-1',
        'in': {
          top: 334
        },
        out: {
          bottom: 333
        }
      });
    });
  });
  describe('minus-2 block', function(){
    return It('converts data by subtracting 2', function(){
      return ioTest({
        type: 'minus-2',
        'in': {
          top: 334
        },
        out: {
          bottom: 332
        }
      });
    });
  });
  describe('log10 block', function(){
    It('converts data into the logarithm of it with base 10', function(){
      return ioTest({
        type: 'log10',
        'in': {
          top: 100
        },
        out: {
          bottom: 2
        }
      });
    });
    It('truncates decimal places', function(){
      return ioTest({
        type: 'log10',
        'in': {
          top: 334
        },
        out: {
          bottom: 2
        }
      });
    });
    It('calculates log_10 1000 correctly', function(){
      return ioTest({
        type: 'log10',
        'in': {
          top: 1000
        },
        out: {
          bottom: 3
        }
      });
    });
    It('calculates log_10 1e15 correctly', function(){
      return ioTest({
        type: 'log10',
        'in': {
          top: 1e15
        },
        out: {
          bottom: 15
        }
      });
    });
    It('calculates log_10 (1e15 - 1) correctly', function(){
      return ioTest({
        type: 'log10',
        'in': {
          top: 1e15 - 1
        },
        out: {
          bottom: 14
        }
      });
    });
    return It('ignores sign of input data', function(){
      return ioTest({
        type: 'log10',
        'in': {
          top: -334
        },
        out: {
          bottom: 2
        }
      });
    });
  });
  describe('log2 block', function(){
    It('converts data into the logarithm of it with base 2', function(){
      return ioTest({
        type: 'log2',
        'in': {
          top: 1024
        },
        out: {
          bottom: 10
        }
      });
    });
    It('truncates decimal places', function(){
      return ioTest({
        type: 'log2',
        'in': {
          top: 334
        },
        out: {
          bottom: 8
        }
      });
    });
    return It('ignores sign of input data', function(){
      return ioTest({
        type: 'log2',
        'in': {
          top: -334
        },
        out: {
          bottom: 8
        }
      });
    });
  });
  describe('const-0 block', function(){
    return It('converts any input data into 0', function(){
      return ioTest({
        type: 'const-0',
        'in': {
          top: 334
        },
        out: {
          bottom: 0
        }
      });
    });
  });
  describe('const-1 block', function(){
    return It('converts any input data into 1', function(){
      return ioTest({
        type: 'const-1',
        'in': {
          top: 334
        },
        out: {
          bottom: 1
        }
      });
    });
  });
  describe('const-2 block', function(){
    return It('converts any input data into 2', function(){
      return ioTest({
        type: 'const-2',
        'in': {
          top: 334
        },
        out: {
          bottom: 2
        }
      });
    });
  });
  describe('const-3 block', function(){
    return It('converts any input data into 3', function(){
      return ioTest({
        type: 'const-3',
        'in': {
          top: 334
        },
        out: {
          bottom: 3
        }
      });
    });
  });
  describe('const-10 block', function(){
    return It('converts any input data into 10', function(){
      return ioTest({
        type: 'const-10',
        'in': {
          top: 334
        },
        out: {
          bottom: 10
        }
      });
    });
  });
  describe('add block', function(){
    return It('adds up left and right and send it to bottom', function(){
      return ioTest({
        type: 'add',
        'in': {
          left: 33,
          right: 4
        },
        out: {
          bottom: 37
        }
      });
    });
  });
  describe('sub block', function(){
    return It('subtract left by right and send it to bottom', function(){
      return ioTest({
        type: 'sub',
        'in': {
          left: 33,
          right: 4
        },
        out: {
          bottom: 29
        }
      });
    });
  });
  describe('mul block', function(){
    return It('multiplies left and right and send it to bottom', function(){
      return ioTest({
        type: 'mul',
        'in': {
          left: 33,
          right: 4
        },
        out: {
          bottom: 132
        }
      });
    });
  });
  describe('div block', function(){
    It('divides left by right and send it to bottom', function(){
      return ioTest({
        type: 'div',
        'in': {
          left: 33,
          right: 4
        },
        out: {
          bottom: 8
        }
      });
    });
    It('rounds remainder into zero', function(){
      return ioTest({
        type: 'div',
        'in': {
          left: -33,
          right: 4
        },
        out: {
          bottom: -8
        }
      });
    });
    It('returns Infinity when dividing by zero', function(){
      return ioTest({
        type: 'div',
        'in': {
          left: 33,
          right: 0
        },
        out: {
          bottom: Infinity
        }
      });
    });
    It('returns -Infinity when dividing by minus zero', function(){
      return ioTest({
        type: 'div',
        'in': {
          left: 33,
          right: -0
        },
        out: {
          bottom: -Infinity
        }
      });
    });
    return It('can output integer for large numbers', function(){
      return ioTest({
        type: 'div',
        'in': {
          left: 130e100,
          right: 18e100
        },
        out: {
          bottom: 7
        }
      });
    });
  });
  describe('pow block', function(){
    It('powers left by right and send it to bottom', function(){
      return ioTest({
        type: 'pow',
        'in': {
          left: 3,
          right: 4
        },
        out: {
          bottom: 81
        }
      });
    });
    It('deletes numbers after the decimal point', function(){
      return ioTest({
        type: 'pow',
        'in': {
          left: 2,
          right: -3
        },
        out: {
          bottom: 0
        }
      });
    });
    It('deletes numbers after the decimal point', function(){
      return ioTest({
        type: 'pow',
        'in': {
          left: -2,
          right: -3
        },
        out: {
          bottom: 0
        }
      });
    });
    It('returns 1 when left is 1 and right is an infinity', function(){
      return ioTest({
        type: 'pow',
        'in': {
          left: 1,
          right: Infinity
        },
        out: {
          bottom: 1
        }
      });
    });
    It('returns infinity when left is an infinity and right is 1', function(){
      return ioTest({
        type: 'pow',
        'in': {
          left: Infinity,
          right: 1
        },
        out: {
          bottom: Infinity
        }
      });
    });
    return It('returns -infinity when left is -0 and right is -1', function(){
      return ioTest({
        type: 'pow',
        'in': {
          left: -0,
          right: -1
        },
        out: {
          bottom: -Infinity
        }
      });
    });
  });
  describe('log block', function(){
    It('sends to bottom the logarithm of right with base of left', function(){
      return ioTest({
        type: 'log',
        'in': {
          left: 3,
          right: 81
        },
        out: {
          bottom: 4
        }
      });
    });
    It('truncates decimal places', function(){
      return ioTest({
        type: 'log',
        'in': {
          left: 4,
          right: 33
        },
        out: {
          bottom: 2
        }
      });
    });
    It('calculates log_10 1000 correctly', function(){
      return ioTest({
        type: 'log',
        'in': {
          left: 10,
          right: 1000
        },
        out: {
          bottom: 3
        }
      });
    });
    It('calculates log_10 Infinity correctly', function(){
      return ioTest({
        type: 'log',
        'in': {
          left: 10,
          right: Infinity
        },
        out: {
          bottom: Infinity
        }
      });
    });
    It('calculates log_Infinity 10 correctly', function(){
      return ioTest({
        type: 'log',
        'in': {
          left: Infinity,
          right: 10
        },
        out: {
          bottom: 0
        }
      });
    });
    It('returns -Infinity when right is 0', function(){
      return ioTest({
        type: 'log',
        'in': {
          left: 334,
          right: 0
        },
        out: {
          bottom: -Infinity
        }
      });
    });
    return It('ignores signs of input data', function(){
      return ioTest({
        type: 'log',
        'in': {
          left: -4,
          right: -33
        },
        out: {
          bottom: 2
        }
      });
    });
  });
  describe('c-contact block', function(){
    context('without rotation', function(){
      It('receives nonzero data from top and sends 1 to right', function(){
        return ioTest({
          type: 'c-contact',
          'in': {
            top: 334
          },
          out: {
            right: 1
          }
        });
      });
      return It('receives zero from top and sends 1 to left', function(){
        return ioTest({
          type: 'c-contact',
          'in': {
            top: 0
          },
          out: {
            left: 1
          }
        });
      });
    });
    return context('with 90deg rotated', function(){
      It('receives nonzero data from right and sends 1 to bottom', function(){
        return ioTest({
          type: 'c-contact',
          rotate: 1,
          'in': {
            right: 334
          },
          out: {
            bottom: 1
          }
        });
      });
      return It('receives zero from right and sends 1 to top', function(){
        return ioTest({
          type: 'c-contact',
          rotate: 1,
          'in': {
            right: 0
          },
          out: {
            top: 1
          }
        });
      });
    });
  });
  describe('transistor block', function(){
    context('without rotation', function(){
      It('receives nonzero data from top and conveys data from left to right', function(){
        return ioTest({
          type: 'transistor',
          'in': {
            top: 33,
            left: 4
          },
          out: {
            right: 4
          }
        });
      });
      return It('receives zero from top and conveys data from left to bottom', function(){
        return ioTest({
          type: 'transistor',
          'in': {
            top: 0,
            left: 334
          },
          out: {
            bottom: 334
          }
        });
      });
    });
    return context('with 90deg rotated', function(){
      return It('receives nonzero data from right and conveys data from top to bottom', function(){
        return ioTest({
          type: 'transistor',
          rotate: 1,
          'in': {
            top: 33,
            right: 4
          },
          out: {
            bottom: 33
          }
        });
      });
    });
  });
  describe('and block', function(){
    return It('calculates logical and', function(){
      ioTest({
        type: 'and',
        'in': {
          left: 0,
          right: 0
        },
        out: {
          bottom: 0
        }
      });
      ioTest({
        type: 'and',
        'in': {
          left: 1,
          right: 0
        },
        out: {
          bottom: 0
        }
      });
      ioTest({
        type: 'and',
        'in': {
          left: 0,
          right: 1
        },
        out: {
          bottom: 0
        }
      });
      return ioTest({
        type: 'and',
        'in': {
          left: 1,
          right: 1
        },
        out: {
          bottom: 1
        }
      });
    });
  });
  describe('or block', function(){
    return It('calculates logical or', function(){
      ioTest({
        type: 'or',
        'in': {
          left: 0,
          right: 0
        },
        out: {
          bottom: 0
        }
      });
      ioTest({
        type: 'or',
        'in': {
          left: 1,
          right: 0
        },
        out: {
          bottom: 1
        }
      });
      ioTest({
        type: 'or',
        'in': {
          left: 0,
          right: 1
        },
        out: {
          bottom: 1
        }
      });
      return ioTest({
        type: 'or',
        'in': {
          left: 1,
          right: 1
        },
        out: {
          bottom: 1
        }
      });
    });
  });
  describe('nand block', function(){
    return It('calculates logical nand', function(){
      ioTest({
        type: 'nand',
        'in': {
          left: 0,
          right: 0
        },
        out: {
          bottom: 1
        }
      });
      ioTest({
        type: 'nand',
        'in': {
          left: 1,
          right: 0
        },
        out: {
          bottom: 1
        }
      });
      ioTest({
        type: 'nand',
        'in': {
          left: 0,
          right: 1
        },
        out: {
          bottom: 1
        }
      });
      return ioTest({
        type: 'nand',
        'in': {
          left: 1,
          right: 1
        },
        out: {
          bottom: 0
        }
      });
    });
  });
  describe('nor block', function(){
    return It('calculates logical nor', function(){
      ioTest({
        type: 'nor',
        'in': {
          left: 0,
          right: 0
        },
        out: {
          bottom: 1
        }
      });
      ioTest({
        type: 'nor',
        'in': {
          left: 1,
          right: 0
        },
        out: {
          bottom: 0
        }
      });
      ioTest({
        type: 'nor',
        'in': {
          left: 0,
          right: 1
        },
        out: {
          bottom: 0
        }
      });
      return ioTest({
        type: 'nor',
        'in': {
          left: 1,
          right: 1
        },
        out: {
          bottom: 0
        }
      });
    });
  });
  describe('xor block', function(){
    return It('calculates logical xor', function(){
      ioTest({
        type: 'xor',
        'in': {
          left: 0,
          right: 0
        },
        out: {
          bottom: 0
        }
      });
      ioTest({
        type: 'xor',
        'in': {
          left: 1,
          right: 0
        },
        out: {
          bottom: 1
        }
      });
      ioTest({
        type: 'xor',
        'in': {
          left: 0,
          right: 1
        },
        out: {
          bottom: 1
        }
      });
      return ioTest({
        type: 'xor',
        'in': {
          left: 1,
          right: 1
        },
        out: {
          bottom: 0
        }
      });
    });
  });
  describe('not block', function(){
    return It('calculates logical not', function(){
      ioTest({
        type: 'not',
        'in': {
          top: 0
        },
        out: {
          bottom: 1
        }
      });
      return ioTest({
        type: 'not',
        'in': {
          top: 1
        },
        out: {
          bottom: 0
        }
      });
    });
  });
  return describe('sqrt block', function(){
    It('calculates square root', function(){
      ioTest({
        type: 'sqrt',
        'in': {
          top: 1
        },
        out: {
          bottom: 1
        }
      });
      ioTest({
        type: 'sqrt',
        'in': {
          top: 80
        },
        out: {
          bottom: 8
        }
      });
      ioTest({
        type: 'sqrt',
        'in': {
          top: 81
        },
        out: {
          bottom: 9
        }
      });
      ioTest({
        type: 'sqrt',
        'in': {
          top: 334
        },
        out: {
          bottom: 18
        }
      });
      return ioTest({
        type: 'sqrt',
        'in': {
          top: Infinity
        },
        out: {
          bottom: Infinity
        }
      });
    });
    return It('returns zero when negative numbers were given', function(){
      ioTest({
        type: 'sqrt',
        'in': {
          top: 0
        },
        out: {
          bottom: 0
        }
      });
      ioTest({
        type: 'sqrt',
        'in': {
          top: -334
        },
        out: {
          bottom: 0
        }
      });
      return ioTest({
        type: 'sqrt',
        'in': {
          top: -Infinity
        },
        out: {
          bottom: 0
        }
      });
    });
  });
});
//# sourceMappingURL=/home/travis/build/tsg-ut/mnemo/node_modules/livescript-loader/index.js!/home/travis/build/tsg-ut/mnemo/test/unit/block.ls.map


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_uchzeco8a = function () {
	var path = "/home/travis/build/tsg-ut/mnemo/lib/pass-event.js",
	    hash = "39fd0aaf42a1b2ff0e64e0826b3d362544a22738",
	    global = new Function('return this')(),
	    gcv = "__coverage__",
	    coverageData = {
		path: "/home/travis/build/tsg-ut/mnemo/lib/pass-event.js",
		statementMap: {
			"0": {
				start: {
					line: 3,
					column: 2
				},
				end: {
					line: 3,
					column: 18
				}
			},
			"1": {
				start: {
					line: 4,
					column: 2
				},
				end: {
					line: 4,
					column: 20
				}
			},
			"2": {
				start: {
					line: 8,
					column: 0
				},
				end: {
					line: 8,
					column: 27
				}
			}
		},
		fnMap: {
			"0": {
				name: "(anonymous_0)",
				decl: {
					start: {
						line: 2,
						column: 1
					},
					end: {
						line: 2,
						column: 2
					}
				},
				loc: {
					start: {
						line: 2,
						column: 39
					},
					end: {
						line: 5,
						column: 2
					}
				},
				line: 2
			}
		},
		branchMap: {},
		s: {
			"0": 0,
			"1": 0,
			"2": 0
		},
		f: {
			"0": 0
		},
		b: {},
		_coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

let PassEvent = function PassEvent({ in: input, out: output }) {
	_classCallCheck(this, PassEvent);

	cov_uchzeco8a.f[0]++;
	cov_uchzeco8a.s[0]++;

	this.in = input;
	cov_uchzeco8a.s[1]++;
	this.out = output;
};

cov_uchzeco8a.s[2]++;


module.exports = PassEvent;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-env mocha */
/* eslint no-unused-expressions: "off" */

// eslint-disable-next-line no-unused-vars
const BoardComponent = __webpack_require__(46);

describe('<BoardComponent/>', () => {
	// TODO
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_9m9ln6fdi = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/lib/board-component.jsx',
	    hash = '73adacf2729721472edb94a615539c713aae2a69',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/lib/board-component.jsx',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 14
				},
				end: {
					line: 1,
					column: 30
				}
			},
			'1': {
				start: {
					line: 2,
					column: 18
				},
				end: {
					line: 2,
					column: 39
				}
			},
			'2': {
				start: {
					line: 3,
					column: 15
				},
				end: {
					line: 3,
					column: 40
				}
			},
			'3': {
				start: {
					line: 4,
					column: 32
				},
				end: {
					line: 4,
					column: 90
				}
			},
			'4': {
				start: {
					line: 5,
					column: 27
				},
				end: {
					line: 5,
					column: 51
				}
			},
			'5': {
				start: {
					line: 6,
					column: 13
				},
				end: {
					line: 6,
					column: 42
				}
			},
			'6': {
				start: {
					line: 7,
					column: 15
				},
				end: {
					line: 7,
					column: 32
				}
			},
			'7': {
				start: {
					line: 8,
					column: 14
				},
				end: {
					line: 8,
					column: 32
				}
			},
			'8': {
				start: {
					line: 9,
					column: 23
				},
				end: {
					line: 9,
					column: 55
				}
			},
			'9': {
				start: {
					line: 10,
					column: 20
				},
				end: {
					line: 10,
					column: 49
				}
			},
			'10': {
				start: {
					line: 11,
					column: 18
				},
				end: {
					line: 11,
					column: 35
				}
			},
			'11': {
				start: {
					line: 12,
					column: 21
				},
				end: {
					line: 12,
					column: 43
				}
			},
			'12': {
				start: {
					line: 14,
					column: 20
				},
				end: {
					line: 19,
					column: 1
				}
			},
			'13': {
				start: {
					line: 49,
					column: 2
				},
				end: {
					line: 49,
					column: 22
				}
			},
			'14': {
				start: {
					line: 52,
					column: 2
				},
				end: {
					line: 52,
					column: 34
				}
			},
			'15': {
				start: {
					line: 54,
					column: 2
				},
				end: {
					line: 60,
					column: 21
				}
			},
			'16': {
				start: {
					line: 62,
					column: 2
				},
				end: {
					line: 62,
					column: 50
				}
			},
			'17': {
				start: {
					line: 63,
					column: 2
				},
				end: {
					line: 63,
					column: 46
				}
			},
			'18': {
				start: {
					line: 64,
					column: 2
				},
				end: {
					line: 64,
					column: 50
				}
			},
			'19': {
				start: {
					line: 66,
					column: 2
				},
				end: {
					line: 66,
					column: 46
				}
			},
			'20': {
				start: {
					line: 68,
					column: 2
				},
				end: {
					line: 68,
					column: 23
				}
			},
			'21': {
				start: {
					line: 69,
					column: 2
				},
				end: {
					line: 69,
					column: 41
				}
			},
			'22': {
				start: {
					line: 70,
					column: 2
				},
				end: {
					line: 70,
					column: 44
				}
			},
			'23': {
				start: {
					line: 72,
					column: 2
				},
				end: {
					line: 72,
					column: 23
				}
			},
			'24': {
				start: {
					line: 74,
					column: 2
				},
				end: {
					line: 74,
					column: 35
				}
			},
			'25': {
				start: {
					line: 76,
					column: 2
				},
				end: {
					line: 90,
					column: 4
				}
			},
			'26': {
				start: {
					line: 94,
					column: 2
				},
				end: {
					line: 100,
					column: 3
				}
			},
			'27': {
				start: {
					line: 95,
					column: 3
				},
				end: {
					line: 95,
					column: 41
				}
			},
			'28': {
				start: {
					line: 97,
					column: 3
				},
				end: {
					line: 99,
					column: 4
				}
			},
			'29': {
				start: {
					line: 98,
					column: 4
				},
				end: {
					line: 98,
					column: 65
				}
			},
			'30': {
				start: {
					line: 102,
					column: 2
				},
				end: {
					line: 106,
					column: 3
				}
			},
			'31': {
				start: {
					line: 103,
					column: 3
				},
				end: {
					line: 105,
					column: 4
				}
			},
			'32': {
				start: {
					line: 104,
					column: 4
				},
				end: {
					line: 104,
					column: 44
				}
			},
			'33': {
				start: {
					line: 110,
					column: 2
				},
				end: {
					line: 110,
					column: 12
				}
			},
			'34': {
				start: {
					line: 114,
					column: 2
				},
				end: {
					line: 114,
					column: 39
				}
			},
			'35': {
				start: {
					line: 118,
					column: 2
				},
				end: {
					line: 118,
					column: 40
				}
			},
			'36': {
				start: {
					line: 122,
					column: 2
				},
				end: {
					line: 122,
					column: 13
				}
			},
			'37': {
				start: {
					line: 126,
					column: 2
				},
				end: {
					line: 126,
					column: 13
				}
			},
			'38': {
				start: {
					line: 130,
					column: 2
				},
				end: {
					line: 130,
					column: 49
				}
			},
			'39': {
				start: {
					line: 134,
					column: 2
				},
				end: {
					line: 134,
					column: 50
				}
			},
			'40': {
				start: {
					line: 138,
					column: 2
				},
				end: {
					line: 138,
					column: 81
				}
			},
			'41': {
				start: {
					line: 142,
					column: 2
				},
				end: {
					line: 142,
					column: 91
				}
			},
			'42': {
				start: {
					line: 146,
					column: 29
				},
				end: {
					line: 146,
					column: 87
				}
			},
			'43': {
				start: {
					line: 146,
					column: 69
				},
				end: {
					line: 146,
					column: 85
				}
			},
			'44': {
				start: {
					line: 147,
					column: 2
				},
				end: {
					line: 147,
					column: 39
				}
			},
			'45': {
				start: {
					line: 151,
					column: 2
				},
				end: {
					line: 151,
					column: 45
				}
			},
			'46': {
				start: {
					line: 157,
					column: 2
				},
				end: {
					line: 157,
					column: 35
				}
			},
			'47': {
				start: {
					line: 161,
					column: 2
				},
				end: {
					line: 161,
					column: 30
				}
			},
			'48': {
				start: {
					line: 165,
					column: 2
				},
				end: {
					line: 165,
					column: 26
				}
			},
			'49': {
				start: {
					line: 169,
					column: 2
				},
				end: {
					line: 169,
					column: 38
				}
			},
			'50': {
				start: {
					line: 173,
					column: 2
				},
				end: {
					line: 173,
					column: 38
				}
			},
			'51': {
				start: {
					line: 177,
					column: 2
				},
				end: {
					line: 177,
					column: 46
				}
			},
			'52': {
				start: {
					line: 178,
					column: 2
				},
				end: {
					line: 180,
					column: 5
				}
			},
			'53': {
				start: {
					line: 185,
					column: 36
				},
				end: {
					line: 189,
					column: 4
				}
			},
			'54': {
				start: {
					line: 190,
					column: 2
				},
				end: {
					line: 190,
					column: 43
				}
			},
			'55': {
				start: {
					line: 192,
					column: 2
				},
				end: {
					line: 192,
					column: 26
				}
			},
			'56': {
				start: {
					line: 193,
					column: 2
				},
				end: {
					line: 193,
					column: 17
				}
			},
			'57': {
				start: {
					line: 197,
					column: 2
				},
				end: {
					line: 199,
					column: 3
				}
			},
			'58': {
				start: {
					line: 198,
					column: 3
				},
				end: {
					line: 198,
					column: 21
				}
			},
			'59': {
				start: {
					line: 203,
					column: 25
				},
				end: {
					line: 203,
					column: 27
				}
			},
			'60': {
				start: {
					line: 205,
					column: 2
				},
				end: {
					line: 211,
					column: 5
				}
			},
			'61': {
				start: {
					line: 207,
					column: 4
				},
				end: {
					line: 209,
					column: 8
				}
			},
			'62': {
				start: {
					line: 208,
					column: 5
				},
				end: {
					line: 208,
					column: 57
				}
			},
			'63': {
				start: {
					line: 213,
					column: 2
				},
				end: {
					line: 215,
					column: 5
				}
			},
			'64': {
				start: {
					line: 217,
					column: 2
				},
				end: {
					line: 219,
					column: 3
				}
			},
			'65': {
				start: {
					line: 218,
					column: 3
				},
				end: {
					line: 218,
					column: 10
				}
			},
			'66': {
				start: {
					line: 221,
					column: 2
				},
				end: {
					line: 221,
					column: 36
				}
			},
			'67': {
				start: {
					line: 223,
					column: 2
				},
				end: {
					line: 223,
					column: 20
				}
			},
			'68': {
				start: {
					line: 225,
					column: 2
				},
				end: {
					line: 227,
					column: 3
				}
			},
			'69': {
				start: {
					line: 226,
					column: 3
				},
				end: {
					line: 226,
					column: 10
				}
			},
			'70': {
				start: {
					line: 229,
					column: 2
				},
				end: {
					line: 234,
					column: 3
				}
			},
			'71': {
				start: {
					line: 230,
					column: 3
				},
				end: {
					line: 230,
					column: 21
				}
			},
			'72': {
				start: {
					line: 231,
					column: 3
				},
				end: {
					line: 231,
					column: 58
				}
			},
			'73': {
				start: {
					line: 233,
					column: 3
				},
				end: {
					line: 233,
					column: 10
				}
			},
			'74': {
				start: {
					line: 236,
					column: 2
				},
				end: {
					line: 241,
					column: 3
				}
			},
			'75': {
				start: {
					line: 237,
					column: 3
				},
				end: {
					line: 237,
					column: 21
				}
			},
			'76': {
				start: {
					line: 238,
					column: 3
				},
				end: {
					line: 238,
					column: 36
				}
			},
			'77': {
				start: {
					line: 240,
					column: 3
				},
				end: {
					line: 240,
					column: 10
				}
			},
			'78': {
				start: {
					line: 243,
					column: 2
				},
				end: {
					line: 243,
					column: 17
				}
			},
			'79': {
				start: {
					line: 247,
					column: 19
				},
				end: {
					line: 247,
					column: 93
				}
			},
			'80': {
				start: {
					line: 248,
					column: 26
				},
				end: {
					line: 248,
					column: 64
				}
			},
			'81': {
				start: {
					line: 250,
					column: 21
				},
				end: {
					line: 250,
					column: 90
				}
			},
			'82': {
				start: {
					line: 251,
					column: 28
				},
				end: {
					line: 251,
					column: 80
				}
			},
			'83': {
				start: {
					line: 253,
					column: 21
				},
				end: {
					line: 253,
					column: 92
				}
			},
			'84': {
				start: {
					line: 254,
					column: 28
				},
				end: {
					line: 254,
					column: 80
				}
			},
			'85': {
				start: {
					line: 256,
					column: 2
				},
				end: {
					line: 260,
					column: 4
				}
			},
			'86': {
				start: {
					line: 264,
					column: 2
				},
				end: {
					line: 264,
					column: 29
				}
			},
			'87': {
				start: {
					line: 268,
					column: 2
				},
				end: {
					line: 268,
					column: 22
				}
			},
			'88': {
				start: {
					line: 272,
					column: 2
				},
				end: {
					line: 272,
					column: 24
				}
			},
			'89': {
				start: {
					line: 276,
					column: 2
				},
				end: {
					line: 276,
					column: 25
				}
			},
			'90': {
				start: {
					line: 277,
					column: 2
				},
				end: {
					line: 277,
					column: 59
				}
			},
			'91': {
				start: {
					line: 281,
					column: 2
				},
				end: {
					line: 283,
					column: 3
				}
			},
			'92': {
				start: {
					line: 282,
					column: 3
				},
				end: {
					line: 282,
					column: 48
				}
			},
			'93': {
				start: {
					line: 287,
					column: 2
				},
				end: {
					line: 287,
					column: 25
				}
			},
			'94': {
				start: {
					line: 289,
					column: 19
				},
				end: {
					line: 291,
					column: 45
				}
			},
			'95': {
				start: {
					line: 292,
					column: 16
				},
				end: {
					line: 292,
					column: 43
				}
			},
			'96': {
				start: {
					line: 294,
					column: 2
				},
				end: {
					line: 313,
					column: 3
				}
			},
			'97': {
				start: {
					line: 295,
					column: 3
				},
				end: {
					line: 299,
					column: 6
				}
			},
			'98': {
				start: {
					line: 300,
					column: 9
				},
				end: {
					line: 313,
					column: 3
				}
			},
			'99': {
				start: {
					line: 301,
					column: 37
				},
				end: {
					line: 305,
					column: 5
				}
			},
			'100': {
				start: {
					line: 307,
					column: 3
				},
				end: {
					line: 312,
					column: 6
				}
			},
			'101': {
				start: {
					line: 317,
					column: 2
				},
				end: {
					line: 317,
					column: 25
				}
			},
			'102': {
				start: {
					line: 319,
					column: 2
				},
				end: {
					line: 341,
					column: 3
				}
			},
			'103': {
				start: {
					line: 320,
					column: 3
				},
				end: {
					line: 323,
					column: 6
				}
			},
			'104': {
				start: {
					line: 324,
					column: 9
				},
				end: {
					line: 341,
					column: 3
				}
			},
			'105': {
				start: {
					line: 325,
					column: 37
				},
				end: {
					line: 329,
					column: 5
				}
			},
			'106': {
				start: {
					line: 331,
					column: 3
				},
				end: {
					line: 336,
					column: 6
				}
			},
			'107': {
				start: {
					line: 338,
					column: 3
				},
				end: {
					line: 340,
					column: 4
				}
			},
			'108': {
				start: {
					line: 339,
					column: 4
				},
				end: {
					line: 339,
					column: 36
				}
			},
			'109': {
				start: {
					line: 345,
					column: 20
				},
				end: {
					line: 345,
					column: 47
				}
			},
			'110': {
				start: {
					line: 347,
					column: 36
				},
				end: {
					line: 351,
					column: 4
				}
			},
			'111': {
				start: {
					line: 353,
					column: 2
				},
				end: {
					line: 357,
					column: 5
				}
			},
			'112': {
				start: {
					line: 359,
					column: 2
				},
				end: {
					line: 361,
					column: 3
				}
			},
			'113': {
				start: {
					line: 360,
					column: 3
				},
				end: {
					line: 360,
					column: 35
				}
			},
			'114': {
				start: {
					line: 365,
					column: 2
				},
				end: {
					line: 365,
					column: 25
				}
			},
			'115': {
				start: {
					line: 369,
					column: 2
				},
				end: {
					line: 369,
					column: 48
				}
			},
			'116': {
				start: {
					line: 370,
					column: 2
				},
				end: {
					line: 372,
					column: 5
				}
			},
			'117': {
				start: {
					line: 376,
					column: 2
				},
				end: {
					line: 376,
					column: 52
				}
			},
			'118': {
				start: {
					line: 380,
					column: 2
				},
				end: {
					line: 380,
					column: 53
				}
			},
			'119': {
				start: {
					line: 384,
					column: 2
				},
				end: {
					line: 384,
					column: 58
				}
			},
			'120': {
				start: {
					line: 388,
					column: 36
				},
				end: {
					line: 398,
					column: 4
				}
			},
			'121': {
				start: {
					line: 400,
					column: 24
				},
				end: {
					line: 400,
					column: 68
				}
			},
			'122': {
				start: {
					line: 402,
					column: 23
				},
				end: {
					line: 402,
					column: 52
				}
			},
			'123': {
				start: {
					line: 403,
					column: 24
				},
				end: {
					line: 403,
					column: 54
				}
			},
			'124': {
				start: {
					line: 405,
					column: 2
				},
				end: {
					line: 410,
					column: 4
				}
			},
			'125': {
				start: {
					line: 414,
					column: 21
				},
				end: {
					line: 414,
					column: 23
				}
			},
			'126': {
				start: {
					line: 415,
					column: 22
				},
				end: {
					line: 415,
					column: 38
				}
			},
			'127': {
				start: {
					line: 417,
					column: 2
				},
				end: {
					line: 425,
					column: 10
				}
			},
			'128': {
				start: {
					line: 429,
					column: 2
				},
				end: {
					line: 431,
					column: 3
				}
			},
			'129': {
				start: {
					line: 430,
					column: 3
				},
				end: {
					line: 430,
					column: 17
				}
			},
			'130': {
				start: {
					line: 433,
					column: 2
				},
				end: {
					line: 433,
					column: 49
				}
			},
			'131': {
				start: {
					line: 437,
					column: 2
				},
				end: {
					line: 590,
					column: 4
				}
			},
			'132': {
				start: {
					line: 546,
					column: 9
				},
				end: {
					line: 546,
					column: 37
				}
			},
			'133': {
				start: {
					line: 552,
					column: 9
				},
				end: {
					line: 557,
					column: 11
				}
			},
			'134': {
				start: {
					line: 566,
					column: 10
				},
				end: {
					line: 578,
					column: 12
				}
			},
			'135': {
				start: {
					line: 567,
					column: 11
				},
				end: {
					line: 577,
					column: 13
				}
			},
			'136': {
				start: {
					line: 594,
					column: 2
				},
				end: {
					line: 631,
					column: 4
				}
			},
			'137': {
				start: {
					line: 595,
					column: 3
				},
				end: {
					line: 630,
					column: 7
				}
			},
			'138': {
				start: {
					line: 598,
					column: 16
				},
				end: {
					line: 598,
					column: 91
				}
			},
			'139': {
				start: {
					line: 600,
					column: 6
				},
				end: {
					line: 627,
					column: 8
				}
			},
			'140': {
				start: {
					line: 641,
					column: 2
				},
				end: {
					line: 687,
					column: 4
				}
			},
			'141': {
				start: {
					line: 642,
					column: 3
				},
				end: {
					line: 686,
					column: 5
				}
			},
			'142': {
				start: {
					line: 643,
					column: 4
				},
				end: {
					line: 685,
					column: 8
				}
			},
			'143': {
				start: {
					line: 691,
					column: 2
				},
				end: {
					line: 726,
					column: 4
				}
			},
			'144': {
				start: {
					line: 692,
					column: 3
				},
				end: {
					line: 725,
					column: 7
				}
			},
			'145': {
				start: {
					line: 730,
					column: 0
				},
				end: {
					line: 730,
					column: 32
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 48,
						column: 1
					},
					end: {
						line: 48,
						column: 2
					}
				},
				loc: {
					start: {
						line: 48,
						column: 27
					},
					end: {
						line: 91,
						column: 2
					}
				},
				line: 48
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 93,
						column: 1
					},
					end: {
						line: 93,
						column: 2
					}
				},
				loc: {
					start: {
						line: 93,
						column: 31
					},
					end: {
						line: 107,
						column: 2
					}
				},
				line: 93
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 109,
						column: 1
					},
					end: {
						line: 109,
						column: 2
					}
				},
				loc: {
					start: {
						line: 109,
						column: 19
					},
					end: {
						line: 111,
						column: 2
					}
				},
				line: 109
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 113,
						column: 1
					},
					end: {
						line: 113,
						column: 2
					}
				},
				loc: {
					start: {
						line: 113,
						column: 19
					},
					end: {
						line: 115,
						column: 2
					}
				},
				line: 113
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 117,
						column: 1
					},
					end: {
						line: 117,
						column: 2
					}
				},
				loc: {
					start: {
						line: 117,
						column: 20
					},
					end: {
						line: 119,
						column: 2
					}
				},
				line: 117
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 121,
						column: 1
					},
					end: {
						line: 121,
						column: 2
					}
				},
				loc: {
					start: {
						line: 121,
						column: 20
					},
					end: {
						line: 123,
						column: 2
					}
				},
				line: 121
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 125,
						column: 1
					},
					end: {
						line: 125,
						column: 2
					}
				},
				loc: {
					start: {
						line: 125,
						column: 21
					},
					end: {
						line: 127,
						column: 2
					}
				},
				line: 125
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 129,
						column: 1
					},
					end: {
						line: 129,
						column: 2
					}
				},
				loc: {
					start: {
						line: 129,
						column: 25
					},
					end: {
						line: 131,
						column: 2
					}
				},
				line: 129
			},
			'8': {
				name: '(anonymous_8)',
				decl: {
					start: {
						line: 133,
						column: 1
					},
					end: {
						line: 133,
						column: 2
					}
				},
				loc: {
					start: {
						line: 133,
						column: 26
					},
					end: {
						line: 135,
						column: 2
					}
				},
				line: 133
			},
			'9': {
				name: '(anonymous_9)',
				decl: {
					start: {
						line: 137,
						column: 1
					},
					end: {
						line: 137,
						column: 2
					}
				},
				loc: {
					start: {
						line: 137,
						column: 24
					},
					end: {
						line: 139,
						column: 2
					}
				},
				line: 137
			},
			'10': {
				name: '(anonymous_10)',
				decl: {
					start: {
						line: 141,
						column: 1
					},
					end: {
						line: 141,
						column: 2
					}
				},
				loc: {
					start: {
						line: 141,
						column: 25
					},
					end: {
						line: 143,
						column: 2
					}
				},
				line: 141
			},
			'11': {
				name: '(anonymous_11)',
				decl: {
					start: {
						line: 145,
						column: 1
					},
					end: {
						line: 145,
						column: 2
					}
				},
				loc: {
					start: {
						line: 145,
						column: 23
					},
					end: {
						line: 148,
						column: 2
					}
				},
				line: 145
			},
			'12': {
				name: '(anonymous_12)',
				decl: {
					start: {
						line: 146,
						column: 54
					},
					end: {
						line: 146,
						column: 55
					}
				},
				loc: {
					start: {
						line: 146,
						column: 69
					},
					end: {
						line: 146,
						column: 85
					}
				},
				line: 146
			},
			'13': {
				name: '(anonymous_13)',
				decl: {
					start: {
						line: 150,
						column: 1
					},
					end: {
						line: 150,
						column: 2
					}
				},
				loc: {
					start: {
						line: 150,
						column: 24
					},
					end: {
						line: 152,
						column: 2
					}
				},
				line: 150
			},
			'14': {
				name: '(anonymous_14)',
				decl: {
					start: {
						line: 156,
						column: 1
					},
					end: {
						line: 156,
						column: 2
					}
				},
				loc: {
					start: {
						line: 156,
						column: 16
					},
					end: {
						line: 158,
						column: 2
					}
				},
				line: 156
			},
			'15': {
				name: '(anonymous_15)',
				decl: {
					start: {
						line: 160,
						column: 1
					},
					end: {
						line: 160,
						column: 2
					}
				},
				loc: {
					start: {
						line: 160,
						column: 16
					},
					end: {
						line: 162,
						column: 2
					}
				},
				line: 160
			},
			'16': {
				name: '(anonymous_16)',
				decl: {
					start: {
						line: 164,
						column: 1
					},
					end: {
						line: 164,
						column: 2
					}
				},
				loc: {
					start: {
						line: 164,
						column: 12
					},
					end: {
						line: 166,
						column: 2
					}
				},
				line: 164
			},
			'17': {
				name: '(anonymous_17)',
				decl: {
					start: {
						line: 168,
						column: 1
					},
					end: {
						line: 168,
						column: 2
					}
				},
				loc: {
					start: {
						line: 168,
						column: 24
					},
					end: {
						line: 170,
						column: 2
					}
				},
				line: 168
			},
			'18': {
				name: '(anonymous_18)',
				decl: {
					start: {
						line: 172,
						column: 1
					},
					end: {
						line: 172,
						column: 2
					}
				},
				loc: {
					start: {
						line: 172,
						column: 19
					},
					end: {
						line: 174,
						column: 2
					}
				},
				line: 172
			},
			'19': {
				name: '(anonymous_19)',
				decl: {
					start: {
						line: 176,
						column: 1
					},
					end: {
						line: 176,
						column: 2
					}
				},
				loc: {
					start: {
						line: 176,
						column: 34
					},
					end: {
						line: 181,
						column: 2
					}
				},
				line: 176
			},
			'20': {
				name: '(anonymous_20)',
				decl: {
					start: {
						line: 183,
						column: 11
					},
					end: {
						line: 183,
						column: 12
					}
				},
				loc: {
					start: {
						line: 183,
						column: 22
					},
					end: {
						line: 194,
						column: 2
					}
				},
				line: 183
			},
			'21': {
				name: '(anonymous_21)',
				decl: {
					start: {
						line: 196,
						column: 1
					},
					end: {
						line: 196,
						column: 2
					}
				},
				loc: {
					start: {
						line: 196,
						column: 15
					},
					end: {
						line: 200,
						column: 2
					}
				},
				line: 196
			},
			'22': {
				name: '(anonymous_22)',
				decl: {
					start: {
						line: 202,
						column: 11
					},
					end: {
						line: 202,
						column: 12
					}
				},
				loc: {
					start: {
						line: 202,
						column: 23
					},
					end: {
						line: 244,
						column: 2
					}
				},
				line: 202
			},
			'23': {
				name: '(anonymous_23)',
				decl: {
					start: {
						line: 206,
						column: 11
					},
					end: {
						line: 206,
						column: 12
					}
				},
				loc: {
					start: {
						line: 206,
						column: 26
					},
					end: {
						line: 210,
						column: 4
					}
				},
				line: 206
			},
			'24': {
				name: '(anonymous_24)',
				decl: {
					start: {
						line: 207,
						column: 36
					},
					end: {
						line: 207,
						column: 37
					}
				},
				loc: {
					start: {
						line: 207,
						column: 49
					},
					end: {
						line: 209,
						column: 5
					}
				},
				line: 207
			},
			'25': {
				name: '(anonymous_25)',
				decl: {
					start: {
						line: 246,
						column: 27
					},
					end: {
						line: 246,
						column: 28
					}
				},
				loc: {
					start: {
						line: 246,
						column: 58
					},
					end: {
						line: 261,
						column: 2
					}
				},
				line: 246
			},
			'26': {
				name: '(anonymous_26)',
				decl: {
					start: {
						line: 263,
						column: 21
					},
					end: {
						line: 263,
						column: 22
					}
				},
				loc: {
					start: {
						line: 263,
						column: 32
					},
					end: {
						line: 265,
						column: 2
					}
				},
				line: 263
			},
			'27': {
				name: '(anonymous_27)',
				decl: {
					start: {
						line: 267,
						column: 19
					},
					end: {
						line: 267,
						column: 20
					}
				},
				loc: {
					start: {
						line: 267,
						column: 25
					},
					end: {
						line: 269,
						column: 2
					}
				},
				line: 267
			},
			'28': {
				name: '(anonymous_28)',
				decl: {
					start: {
						line: 271,
						column: 21
					},
					end: {
						line: 271,
						column: 22
					}
				},
				loc: {
					start: {
						line: 271,
						column: 27
					},
					end: {
						line: 273,
						column: 2
					}
				},
				line: 271
			},
			'29': {
				name: '(anonymous_29)',
				decl: {
					start: {
						line: 275,
						column: 20
					},
					end: {
						line: 275,
						column: 21
					}
				},
				loc: {
					start: {
						line: 275,
						column: 37
					},
					end: {
						line: 278,
						column: 2
					}
				},
				line: 275
			},
			'30': {
				name: '(anonymous_30)',
				decl: {
					start: {
						line: 280,
						column: 31
					},
					end: {
						line: 280,
						column: 32
					}
				},
				loc: {
					start: {
						line: 280,
						column: 46
					},
					end: {
						line: 284,
						column: 2
					}
				},
				line: 280
			},
			'31': {
				name: '(anonymous_31)',
				decl: {
					start: {
						line: 286,
						column: 13
					},
					end: {
						line: 286,
						column: 14
					}
				},
				loc: {
					start: {
						line: 286,
						column: 24
					},
					end: {
						line: 314,
						column: 2
					}
				},
				line: 286
			},
			'32': {
				name: '(anonymous_32)',
				decl: {
					start: {
						line: 316,
						column: 15
					},
					end: {
						line: 316,
						column: 16
					}
				},
				loc: {
					start: {
						line: 316,
						column: 26
					},
					end: {
						line: 342,
						column: 2
					}
				},
				line: 316
			},
			'33': {
				name: '(anonymous_33)',
				decl: {
					start: {
						line: 344,
						column: 15
					},
					end: {
						line: 344,
						column: 16
					}
				},
				loc: {
					start: {
						line: 344,
						column: 26
					},
					end: {
						line: 362,
						column: 2
					}
				},
				line: 344
			},
			'34': {
				name: '(anonymous_34)',
				decl: {
					start: {
						line: 364,
						column: 19
					},
					end: {
						line: 364,
						column: 20
					}
				},
				loc: {
					start: {
						line: 364,
						column: 30
					},
					end: {
						line: 366,
						column: 2
					}
				},
				line: 364
			},
			'35': {
				name: '(anonymous_35)',
				decl: {
					start: {
						line: 368,
						column: 27
					},
					end: {
						line: 368,
						column: 28
					}
				},
				loc: {
					start: {
						line: 368,
						column: 43
					},
					end: {
						line: 373,
						column: 2
					}
				},
				line: 368
			},
			'36': {
				name: '(anonymous_36)',
				decl: {
					start: {
						line: 375,
						column: 22
					},
					end: {
						line: 375,
						column: 23
					}
				},
				loc: {
					start: {
						line: 375,
						column: 38
					},
					end: {
						line: 377,
						column: 2
					}
				},
				line: 375
			},
			'37': {
				name: '(anonymous_37)',
				decl: {
					start: {
						line: 379,
						column: 23
					},
					end: {
						line: 379,
						column: 24
					}
				},
				loc: {
					start: {
						line: 379,
						column: 39
					},
					end: {
						line: 381,
						column: 2
					}
				},
				line: 379
			},
			'38': {
				name: '(anonymous_38)',
				decl: {
					start: {
						line: 383,
						column: 27
					},
					end: {
						line: 383,
						column: 28
					}
				},
				loc: {
					start: {
						line: 383,
						column: 43
					},
					end: {
						line: 385,
						column: 2
					}
				},
				line: 383
			},
			'39': {
				name: '(anonymous_39)',
				decl: {
					start: {
						line: 387,
						column: 14
					},
					end: {
						line: 387,
						column: 15
					}
				},
				loc: {
					start: {
						line: 387,
						column: 20
					},
					end: {
						line: 411,
						column: 2
					}
				},
				line: 387
			},
			'40': {
				name: '(anonymous_40)',
				decl: {
					start: {
						line: 413,
						column: 21
					},
					end: {
						line: 413,
						column: 22
					}
				},
				loc: {
					start: {
						line: 413,
						column: 53
					},
					end: {
						line: 426,
						column: 2
					}
				},
				line: 413
			},
			'41': {
				name: '(anonymous_41)',
				decl: {
					start: {
						line: 428,
						column: 17
					},
					end: {
						line: 428,
						column: 18
					}
				},
				loc: {
					start: {
						line: 428,
						column: 28
					},
					end: {
						line: 434,
						column: 2
					}
				},
				line: 428
			},
			'42': {
				name: '(anonymous_42)',
				decl: {
					start: {
						line: 436,
						column: 1
					},
					end: {
						line: 436,
						column: 2
					}
				},
				loc: {
					start: {
						line: 436,
						column: 10
					},
					end: {
						line: 591,
						column: 2
					}
				},
				line: 436
			},
			'43': {
				name: '(anonymous_43)',
				decl: {
					start: {
						line: 545,
						column: 13
					},
					end: {
						line: 545,
						column: 14
					}
				},
				loc: {
					start: {
						line: 545,
						column: 22
					},
					end: {
						line: 547,
						column: 9
					}
				},
				line: 545
			},
			'44': {
				name: '(anonymous_44)',
				decl: {
					start: {
						line: 551,
						column: 9
					},
					end: {
						line: 551,
						column: 10
					}
				},
				loc: {
					start: {
						line: 552,
						column: 9
					},
					end: {
						line: 557,
						column: 11
					}
				},
				line: 552
			},
			'45': {
				name: '(anonymous_45)',
				decl: {
					start: {
						line: 565,
						column: 31
					},
					end: {
						line: 565,
						column: 32
					}
				},
				loc: {
					start: {
						line: 566,
						column: 10
					},
					end: {
						line: 578,
						column: 12
					}
				},
				line: 566
			},
			'46': {
				name: '(anonymous_46)',
				decl: {
					start: {
						line: 566,
						column: 18
					},
					end: {
						line: 566,
						column: 19
					}
				},
				loc: {
					start: {
						line: 567,
						column: 11
					},
					end: {
						line: 577,
						column: 13
					}
				},
				line: 567
			},
			'47': {
				name: '(anonymous_47)',
				decl: {
					start: {
						line: 593,
						column: 16
					},
					end: {
						line: 593,
						column: 17
					}
				},
				loc: {
					start: {
						line: 594,
						column: 2
					},
					end: {
						line: 631,
						column: 4
					}
				},
				line: 594
			},
			'48': {
				name: '(anonymous_48)',
				decl: {
					start: {
						line: 594,
						column: 23
					},
					end: {
						line: 594,
						column: 24
					}
				},
				loc: {
					start: {
						line: 595,
						column: 3
					},
					end: {
						line: 630,
						column: 7
					}
				},
				line: 595
			},
			'49': {
				name: '(anonymous_49)',
				decl: {
					start: {
						line: 597,
						column: 20
					},
					end: {
						line: 597,
						column: 21
					}
				},
				loc: {
					start: {
						line: 597,
						column: 45
					},
					end: {
						line: 628,
						column: 6
					}
				},
				line: 597
			},
			'50': {
				name: '(anonymous_50)',
				decl: {
					start: {
						line: 640,
						column: 16
					},
					end: {
						line: 640,
						column: 17
					}
				},
				loc: {
					start: {
						line: 641,
						column: 2
					},
					end: {
						line: 687,
						column: 4
					}
				},
				line: 641
			},
			'51': {
				name: '(anonymous_51)',
				decl: {
					start: {
						line: 641,
						column: 24
					},
					end: {
						line: 641,
						column: 25
					}
				},
				loc: {
					start: {
						line: 642,
						column: 3
					},
					end: {
						line: 686,
						column: 5
					}
				},
				line: 642
			},
			'52': {
				name: '(anonymous_52)',
				decl: {
					start: {
						line: 642,
						column: 11
					},
					end: {
						line: 642,
						column: 12
					}
				},
				loc: {
					start: {
						line: 643,
						column: 4
					},
					end: {
						line: 685,
						column: 8
					}
				},
				line: 643
			},
			'53': {
				name: '(anonymous_53)',
				decl: {
					start: {
						line: 690,
						column: 17
					},
					end: {
						line: 690,
						column: 18
					}
				},
				loc: {
					start: {
						line: 691,
						column: 2
					},
					end: {
						line: 726,
						column: 4
					}
				},
				line: 691
			},
			'54': {
				name: '(anonymous_54)',
				decl: {
					start: {
						line: 691,
						column: 24
					},
					end: {
						line: 691,
						column: 25
					}
				},
				loc: {
					start: {
						line: 692,
						column: 3
					},
					end: {
						line: 725,
						column: 7
					}
				},
				line: 692
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 4,
						column: 32
					},
					end: {
						line: 4,
						column: 90
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 4,
						column: 66
					},
					end: {
						line: 4,
						column: 68
					}
				}, {
					start: {
						line: 4,
						column: 71
					},
					end: {
						line: 4,
						column: 90
					}
				}],
				line: 4
			},
			'1': {
				loc: {
					start: {
						line: 94,
						column: 2
					},
					end: {
						line: 100,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 94,
						column: 2
					},
					end: {
						line: 100,
						column: 3
					}
				}, {
					start: {
						line: 94,
						column: 2
					},
					end: {
						line: 100,
						column: 3
					}
				}],
				line: 94
			},
			'2': {
				loc: {
					start: {
						line: 97,
						column: 3
					},
					end: {
						line: 99,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 97,
						column: 3
					},
					end: {
						line: 99,
						column: 4
					}
				}, {
					start: {
						line: 97,
						column: 3
					},
					end: {
						line: 99,
						column: 4
					}
				}],
				line: 97
			},
			'3': {
				loc: {
					start: {
						line: 102,
						column: 2
					},
					end: {
						line: 106,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 102,
						column: 2
					},
					end: {
						line: 106,
						column: 3
					}
				}, {
					start: {
						line: 102,
						column: 2
					},
					end: {
						line: 106,
						column: 3
					}
				}],
				line: 102
			},
			'4': {
				loc: {
					start: {
						line: 103,
						column: 3
					},
					end: {
						line: 105,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 103,
						column: 3
					},
					end: {
						line: 105,
						column: 4
					}
				}, {
					start: {
						line: 103,
						column: 3
					},
					end: {
						line: 105,
						column: 4
					}
				}],
				line: 103
			},
			'5': {
				loc: {
					start: {
						line: 197,
						column: 2
					},
					end: {
						line: 199,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 197,
						column: 2
					},
					end: {
						line: 199,
						column: 3
					}
				}, {
					start: {
						line: 197,
						column: 2
					},
					end: {
						line: 199,
						column: 3
					}
				}],
				line: 197
			},
			'6': {
				loc: {
					start: {
						line: 217,
						column: 2
					},
					end: {
						line: 219,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 217,
						column: 2
					},
					end: {
						line: 219,
						column: 3
					}
				}, {
					start: {
						line: 217,
						column: 2
					},
					end: {
						line: 219,
						column: 3
					}
				}],
				line: 217
			},
			'7': {
				loc: {
					start: {
						line: 225,
						column: 2
					},
					end: {
						line: 227,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 225,
						column: 2
					},
					end: {
						line: 227,
						column: 3
					}
				}, {
					start: {
						line: 225,
						column: 2
					},
					end: {
						line: 227,
						column: 3
					}
				}],
				line: 225
			},
			'8': {
				loc: {
					start: {
						line: 229,
						column: 2
					},
					end: {
						line: 234,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 229,
						column: 2
					},
					end: {
						line: 234,
						column: 3
					}
				}, {
					start: {
						line: 229,
						column: 2
					},
					end: {
						line: 234,
						column: 3
					}
				}],
				line: 229
			},
			'9': {
				loc: {
					start: {
						line: 236,
						column: 2
					},
					end: {
						line: 241,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 236,
						column: 2
					},
					end: {
						line: 241,
						column: 3
					}
				}, {
					start: {
						line: 236,
						column: 2
					},
					end: {
						line: 241,
						column: 3
					}
				}],
				line: 236
			},
			'10': {
				loc: {
					start: {
						line: 281,
						column: 2
					},
					end: {
						line: 283,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 281,
						column: 2
					},
					end: {
						line: 283,
						column: 3
					}
				}, {
					start: {
						line: 281,
						column: 2
					},
					end: {
						line: 283,
						column: 3
					}
				}],
				line: 281
			},
			'11': {
				loc: {
					start: {
						line: 289,
						column: 19
					},
					end: {
						line: 291,
						column: 45
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 290,
						column: 5
					},
					end: {
						line: 290,
						column: 19
					}
				}, {
					start: {
						line: 291,
						column: 5
					},
					end: {
						line: 291,
						column: 45
					}
				}],
				line: 289
			},
			'12': {
				loc: {
					start: {
						line: 294,
						column: 2
					},
					end: {
						line: 313,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 294,
						column: 2
					},
					end: {
						line: 313,
						column: 3
					}
				}, {
					start: {
						line: 294,
						column: 2
					},
					end: {
						line: 313,
						column: 3
					}
				}],
				line: 294
			},
			'13': {
				loc: {
					start: {
						line: 300,
						column: 9
					},
					end: {
						line: 313,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 300,
						column: 9
					},
					end: {
						line: 313,
						column: 3
					}
				}, {
					start: {
						line: 300,
						column: 9
					},
					end: {
						line: 313,
						column: 3
					}
				}],
				line: 300
			},
			'14': {
				loc: {
					start: {
						line: 319,
						column: 2
					},
					end: {
						line: 341,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 319,
						column: 2
					},
					end: {
						line: 341,
						column: 3
					}
				}, {
					start: {
						line: 319,
						column: 2
					},
					end: {
						line: 341,
						column: 3
					}
				}],
				line: 319
			},
			'15': {
				loc: {
					start: {
						line: 324,
						column: 9
					},
					end: {
						line: 341,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 324,
						column: 9
					},
					end: {
						line: 341,
						column: 3
					}
				}, {
					start: {
						line: 324,
						column: 9
					},
					end: {
						line: 341,
						column: 3
					}
				}],
				line: 324
			},
			'16': {
				loc: {
					start: {
						line: 338,
						column: 3
					},
					end: {
						line: 340,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 338,
						column: 3
					},
					end: {
						line: 340,
						column: 4
					}
				}, {
					start: {
						line: 338,
						column: 3
					},
					end: {
						line: 340,
						column: 4
					}
				}],
				line: 338
			},
			'17': {
				loc: {
					start: {
						line: 345,
						column: 20
					},
					end: {
						line: 345,
						column: 47
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 345,
						column: 41
					},
					end: {
						line: 345,
						column: 43
					}
				}, {
					start: {
						line: 345,
						column: 46
					},
					end: {
						line: 345,
						column: 47
					}
				}],
				line: 345
			},
			'18': {
				loc: {
					start: {
						line: 359,
						column: 2
					},
					end: {
						line: 361,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 359,
						column: 2
					},
					end: {
						line: 361,
						column: 3
					}
				}, {
					start: {
						line: 359,
						column: 2
					},
					end: {
						line: 361,
						column: 3
					}
				}],
				line: 359
			},
			'19': {
				loc: {
					start: {
						line: 389,
						column: 12
					},
					end: {
						line: 391,
						column: 24
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 390,
						column: 6
					},
					end: {
						line: 390,
						column: 81
					}
				}, {
					start: {
						line: 391,
						column: 6
					},
					end: {
						line: 391,
						column: 24
					}
				}],
				line: 389
			},
			'20': {
				loc: {
					start: {
						line: 392,
						column: 12
					},
					end: {
						line: 394,
						column: 24
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 393,
						column: 6
					},
					end: {
						line: 393,
						column: 81
					}
				}, {
					start: {
						line: 394,
						column: 6
					},
					end: {
						line: 394,
						column: 24
					}
				}],
				line: 392
			},
			'21': {
				loc: {
					start: {
						line: 395,
						column: 10
					},
					end: {
						line: 397,
						column: 22
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 396,
						column: 6
					},
					end: {
						line: 396,
						column: 46
					}
				}, {
					start: {
						line: 397,
						column: 6
					},
					end: {
						line: 397,
						column: 22
					}
				}],
				line: 395
			},
			'22': {
				loc: {
					start: {
						line: 429,
						column: 2
					},
					end: {
						line: 431,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 429,
						column: 2
					},
					end: {
						line: 431,
						column: 3
					}
				}, {
					start: {
						line: 429,
						column: 2
					},
					end: {
						line: 431,
						column: 3
					}
				}],
				line: 429
			},
			'23': {
				loc: {
					start: {
						line: 429,
						column: 6
					},
					end: {
						line: 429,
						column: 85
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 429,
						column: 6
					},
					end: {
						line: 429,
						column: 43
					}
				}, {
					start: {
						line: 429,
						column: 47
					},
					end: {
						line: 429,
						column: 85
					}
				}],
				line: 429
			},
			'24': {
				loc: {
					start: {
						line: 651,
						column: 6
					},
					end: {
						line: 667,
						column: 6
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 651,
						column: 6
					},
					end: {
						line: 651,
						column: 34
					}
				}, {
					start: {
						line: 652,
						column: 6
					},
					end: {
						line: 666,
						column: 8
					}
				}],
				line: 651
			},
			'25': {
				loc: {
					start: {
						line: 668,
						column: 6
					},
					end: {
						line: 684,
						column: 6
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 668,
						column: 7
					},
					end: {
						line: 668,
						column: 29
					}
				}, {
					start: {
						line: 669,
						column: 6
					},
					end: {
						line: 683,
						column: 8
					}
				}],
				line: 668
			},
			'26': {
				loc: {
					start: {
						line: 677,
						column: 19
					},
					end: {
						line: 677,
						column: 92
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 677,
						column: 50
					},
					end: {
						line: 677,
						column: 56
					}
				}, {
					start: {
						line: 677,
						column: 59
					},
					end: {
						line: 677,
						column: 92
					}
				}],
				line: 677
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0,
			'33': 0,
			'34': 0,
			'35': 0,
			'36': 0,
			'37': 0,
			'38': 0,
			'39': 0,
			'40': 0,
			'41': 0,
			'42': 0,
			'43': 0,
			'44': 0,
			'45': 0,
			'46': 0,
			'47': 0,
			'48': 0,
			'49': 0,
			'50': 0,
			'51': 0,
			'52': 0,
			'53': 0,
			'54': 0,
			'55': 0,
			'56': 0,
			'57': 0,
			'58': 0,
			'59': 0,
			'60': 0,
			'61': 0,
			'62': 0,
			'63': 0,
			'64': 0,
			'65': 0,
			'66': 0,
			'67': 0,
			'68': 0,
			'69': 0,
			'70': 0,
			'71': 0,
			'72': 0,
			'73': 0,
			'74': 0,
			'75': 0,
			'76': 0,
			'77': 0,
			'78': 0,
			'79': 0,
			'80': 0,
			'81': 0,
			'82': 0,
			'83': 0,
			'84': 0,
			'85': 0,
			'86': 0,
			'87': 0,
			'88': 0,
			'89': 0,
			'90': 0,
			'91': 0,
			'92': 0,
			'93': 0,
			'94': 0,
			'95': 0,
			'96': 0,
			'97': 0,
			'98': 0,
			'99': 0,
			'100': 0,
			'101': 0,
			'102': 0,
			'103': 0,
			'104': 0,
			'105': 0,
			'106': 0,
			'107': 0,
			'108': 0,
			'109': 0,
			'110': 0,
			'111': 0,
			'112': 0,
			'113': 0,
			'114': 0,
			'115': 0,
			'116': 0,
			'117': 0,
			'118': 0,
			'119': 0,
			'120': 0,
			'121': 0,
			'122': 0,
			'123': 0,
			'124': 0,
			'125': 0,
			'126': 0,
			'127': 0,
			'128': 0,
			'129': 0,
			'130': 0,
			'131': 0,
			'132': 0,
			'133': 0,
			'134': 0,
			'135': 0,
			'136': 0,
			'137': 0,
			'138': 0,
			'139': 0,
			'140': 0,
			'141': 0,
			'142': 0,
			'143': 0,
			'144': 0,
			'145': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0,
			'33': 0,
			'34': 0,
			'35': 0,
			'36': 0,
			'37': 0,
			'38': 0,
			'39': 0,
			'40': 0,
			'41': 0,
			'42': 0,
			'43': 0,
			'44': 0,
			'45': 0,
			'46': 0,
			'47': 0,
			'48': 0,
			'49': 0,
			'50': 0,
			'51': 0,
			'52': 0,
			'53': 0,
			'54': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0],
			'4': [0, 0],
			'5': [0, 0],
			'6': [0, 0],
			'7': [0, 0],
			'8': [0, 0],
			'9': [0, 0],
			'10': [0, 0],
			'11': [0, 0],
			'12': [0, 0],
			'13': [0, 0],
			'14': [0, 0],
			'15': [0, 0],
			'16': [0, 0],
			'17': [0, 0],
			'18': [0, 0],
			'19': [0, 0],
			'20': [0, 0],
			'21': [0, 0],
			'22': [0, 0],
			'23': [0, 0],
			'24': [0, 0],
			'25': [0, 0],
			'26': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

const React = (cov_9m9ln6fdi.s[0]++, __webpack_require__(1));
const PropTypes = (cov_9m9ln6fdi.s[1]++, __webpack_require__(3));
const Hammer = (cov_9m9ln6fdi.s[2]++, __webpack_require__(47));
const { INPUT_MOVE, INPUT_END } = (cov_9m9ln6fdi.s[3]++, typeof window === 'undefined' ? (cov_9m9ln6fdi.b[0][0]++, {}) : (cov_9m9ln6fdi.b[0][1]++, __webpack_require__(48)));
const { default: Measure } = (cov_9m9ln6fdi.s[4]++, __webpack_require__(12));
const Path = (cov_9m9ln6fdi.s[5]++, __webpack_require__(49));
const assert = (cov_9m9ln6fdi.s[6]++, __webpack_require__(4));
const Board = (cov_9m9ln6fdi.s[7]++, __webpack_require__(5));
const BlockComponent = (cov_9m9ln6fdi.s[8]++, __webpack_require__(10));
const IOComponent = (cov_9m9ln6fdi.s[9]++, __webpack_require__(16));
const { id, sum } = (cov_9m9ln6fdi.s[10]++, __webpack_require__(0));
const { BLOCK_SIZE } = (cov_9m9ln6fdi.s[11]++, __webpack_require__(6));

const inputColors = (cov_9m9ln6fdi.s[12]++, ['#de3131', // red
'#4527a8', // blue
'#1c6925', // green
'#db40cd']);

let BoardComponent = function (_React$Component) {
	_inherits(BoardComponent, _React$Component);

	function BoardComponent(props, state) {
		_classCallCheck(this, BoardComponent);

		cov_9m9ln6fdi.f[0]++;
		cov_9m9ln6fdi.s[13]++;

		// Currently, initial status should be always 'stop'
		var _this = _possibleConstructorReturn(this, (BoardComponent.__proto__ || Object.getPrototypeOf(BoardComponent)).call(this, props, state));

		_this.execute = value => {
			cov_9m9ln6fdi.f[20]++;

			// Reset scale on start executing
			const { offsetX, offsetY, scale } = (cov_9m9ln6fdi.s[53]++, _this.normalizeScaleAndOffset({
				offsetX: _this.state.offsetX,
				offsetY: _this.state.offsetY,
				scale: 1
			}));
			cov_9m9ln6fdi.s[54]++;
			_this.setState({ offsetX, offsetY, scale });

			cov_9m9ln6fdi.s[55]++;
			_this.board.input(value);
			cov_9m9ln6fdi.s[56]++;
			_this.clockUp();
		};

		_this.clockUp = async () => {
			cov_9m9ln6fdi.f[22]++;

			const passAnimations = (cov_9m9ln6fdi.s[59]++, []);

			cov_9m9ln6fdi.s[60]++;
			_this.board.step({
				onPass: passEvent => {
					cov_9m9ln6fdi.f[23]++;
					cov_9m9ln6fdi.s[61]++;

					passAnimations.push(new Promise(resolve => {
						cov_9m9ln6fdi.f[24]++;
						cov_9m9ln6fdi.s[62]++;

						_this.passAnimationResolvers.set(passEvent, resolve);
					}));
				}
			});

			cov_9m9ln6fdi.s[63]++;
			_this.setState({
				clocks: _this.board.clock
			});

			cov_9m9ln6fdi.s[64]++;
			if (_this.board.status !== 'executing') {
				cov_9m9ln6fdi.b[6][0]++;
				cov_9m9ln6fdi.s[65]++;

				return;
			} else {
				cov_9m9ln6fdi.b[6][1]++;
			}

			cov_9m9ln6fdi.s[66]++;
			await Promise.all(passAnimations);

			cov_9m9ln6fdi.s[67]++;
			_this.board.hand();

			cov_9m9ln6fdi.s[68]++;
			if (_this.board.status !== 'executing') {
				cov_9m9ln6fdi.b[7][0]++;
				cov_9m9ln6fdi.s[69]++;

				return;
			} else {
				cov_9m9ln6fdi.b[7][1]++;
			}

			cov_9m9ln6fdi.s[70]++;
			if (_this.board.clock >= _this.board.clockLimit) {
				cov_9m9ln6fdi.b[8][0]++;
				cov_9m9ln6fdi.s[71]++;

				_this.board.halt();
				cov_9m9ln6fdi.s[72]++;
				_this.props.onClockLimitExceeded(_this.board.clockLimit);

				cov_9m9ln6fdi.s[73]++;
				return;
			} else {
				cov_9m9ln6fdi.b[8][1]++;
			}

			cov_9m9ln6fdi.s[74]++;
			if (_this.board.dataCount > 100) {
				cov_9m9ln6fdi.b[9][0]++;
				cov_9m9ln6fdi.s[75]++;

				_this.board.halt();
				cov_9m9ln6fdi.s[76]++;
				_this.props.onDataLimitExceeded();

				cov_9m9ln6fdi.s[77]++;
				return;
			} else {
				cov_9m9ln6fdi.b[9][1]++;
			}

			cov_9m9ln6fdi.s[78]++;
			_this.clockUp();
		};

		_this.normalizeScaleAndOffset = ({ offsetX, offsetY, scale }) => {
			cov_9m9ln6fdi.f[25]++;

			const maxScale = (cov_9m9ln6fdi.s[79]++, Math.max(_this._boardOuterWidth, _this._boardOuterHeight) / (BLOCK_SIZE * 2));
			const normalizedScale = (cov_9m9ln6fdi.s[80]++, Math.max(1, Math.min(scale, maxScale)));

			const maxOffsetX = (cov_9m9ln6fdi.s[81]++, (_this._boardOuterWidth - _this._boardOuterWidth / normalizedScale) / 2);
			const normalizedOffsetX = (cov_9m9ln6fdi.s[82]++, Math.max(-maxOffsetX, Math.min(offsetX, maxOffsetX)));

			const maxOffsetY = (cov_9m9ln6fdi.s[83]++, (_this._boardOuterHeight - _this._boardOuterHeight / normalizedScale) / 2);
			const normalizedOffsetY = (cov_9m9ln6fdi.s[84]++, Math.max(-maxOffsetY, Math.min(offsetY, maxOffsetY)));

			cov_9m9ln6fdi.s[85]++;
			return {
				scale: normalizedScale,
				offsetX: normalizedOffsetX,
				offsetY: normalizedOffsetY
			};
		};

		_this.handleBoardOutput = value => {
			cov_9m9ln6fdi.f[26]++;
			cov_9m9ln6fdi.s[86]++;

			_this.props.onOutput(value);
		};

		_this.handleBoardHalt = () => {
			cov_9m9ln6fdi.f[27]++;
			cov_9m9ln6fdi.s[87]++;

			_this.props.onHalt();
		};

		_this.handleBoardPaused = () => {
			cov_9m9ln6fdi.f[28]++;
			cov_9m9ln6fdi.s[88]++;

			_this.props.onPaused();
		};

		_this.handleClickBlock = (event, x, y) => {
			cov_9m9ln6fdi.f[29]++;
			cov_9m9ln6fdi.s[89]++;

			event.preventDefault();
			cov_9m9ln6fdi.s[90]++;
			return _this.props.onClickBlock({ x, y, type: event.type });
		};

		_this.handlePassAnimationComplete = passEvent => {
			cov_9m9ln6fdi.f[30]++;
			cov_9m9ln6fdi.s[91]++;

			if (_this.passAnimationResolvers.has(passEvent)) {
				cov_9m9ln6fdi.b[10][0]++;
				cov_9m9ln6fdi.s[92]++;

				_this.passAnimationResolvers.get(passEvent)();
			} else {
				cov_9m9ln6fdi.b[10][1]++;
			}
		};

		_this.handlePan = event => {
			cov_9m9ln6fdi.f[31]++;
			cov_9m9ln6fdi.s[93]++;

			event.preventDefault();

			const distance = (cov_9m9ln6fdi.s[94]++, _this.state.viewBoxScale === null ? (cov_9m9ln6fdi.b[11][0]++, event.distance) : (cov_9m9ln6fdi.b[11][1]++, event.distance / _this.state.viewBoxScale));
			const angle = (cov_9m9ln6fdi.s[95]++, event.angle / 180 * Math.PI);

			cov_9m9ln6fdi.s[96]++;
			if (event.eventType === INPUT_MOVE) {
				cov_9m9ln6fdi.b[12][0]++;
				cov_9m9ln6fdi.s[97]++;

				_this.setState({
					isPanning: true,
					panDistance: distance,
					panAngle: angle
				});
			} else {
					cov_9m9ln6fdi.b[12][1]++;
					cov_9m9ln6fdi.s[98]++;
					if (event.eventType === INPUT_END) {
						cov_9m9ln6fdi.b[13][0]++;

						const { offsetX, offsetY, scale } = (cov_9m9ln6fdi.s[99]++, _this.normalizeScaleAndOffset({
							offsetX: _this.state.offsetX - distance * Math.cos(angle),
							offsetY: _this.state.offsetY - distance * Math.sin(angle),
							scale: _this.state.scale
						}));

						cov_9m9ln6fdi.s[100]++;
						_this.setState({
							isPanning: false,
							offsetX,
							offsetY,
							scale
						});
					} else {
						cov_9m9ln6fdi.b[13][1]++;
					}
				}
		};

		_this.handlePinch = event => {
			cov_9m9ln6fdi.f[32]++;
			cov_9m9ln6fdi.s[101]++;

			event.preventDefault();

			cov_9m9ln6fdi.s[102]++;
			if (event.eventType === INPUT_MOVE) {
				cov_9m9ln6fdi.b[14][0]++;
				cov_9m9ln6fdi.s[103]++;

				_this.setState({
					isPinching: true,
					pinchScale: event.scale
				});
			} else {
					cov_9m9ln6fdi.b[14][1]++;
					cov_9m9ln6fdi.s[104]++;
					if (event.eventType === INPUT_END) {
						cov_9m9ln6fdi.b[15][0]++;

						const { offsetX, offsetY, scale } = (cov_9m9ln6fdi.s[105]++, _this.normalizeScaleAndOffset({
							offsetX: _this.state.offsetX,
							offsetY: _this.state.offsetY,
							scale: _this.state.scale * _this.state.pinchScale
						}));

						cov_9m9ln6fdi.s[106]++;
						_this.setState({
							isPinching: false,
							offsetX,
							offsetY,
							scale
						});

						cov_9m9ln6fdi.s[107]++;
						if (_this.measureComponent) {
							cov_9m9ln6fdi.b[16][0]++;
							cov_9m9ln6fdi.s[108]++;

							_this.measureComponent.measure();
						} else {
							cov_9m9ln6fdi.b[16][1]++;
						}
					} else {
						cov_9m9ln6fdi.b[15][1]++;
					}
				}
		};

		_this.handleWheel = event => {
			cov_9m9ln6fdi.f[33]++;

			const direction = (cov_9m9ln6fdi.s[109]++, event.deltaY > 0 ? (cov_9m9ln6fdi.b[17][0]++, -1) : (cov_9m9ln6fdi.b[17][1]++, 1));

			const { offsetX, offsetY, scale } = (cov_9m9ln6fdi.s[110]++, _this.normalizeScaleAndOffset({
				offsetX: _this.state.offsetX,
				offsetY: _this.state.offsetY,
				scale: _this.state.scale * (1.0 + 0.1 * direction)
			}));

			cov_9m9ln6fdi.s[111]++;
			_this.setState({
				offsetX,
				offsetY,
				scale
			});

			cov_9m9ln6fdi.s[112]++;
			if (_this.measureComponent) {
				cov_9m9ln6fdi.b[18][0]++;
				cov_9m9ln6fdi.s[113]++;

				_this.measureComponent.measure();
			} else {
				cov_9m9ln6fdi.b[18][1]++;
			}
		};

		_this.handleDragStart = event => {
			cov_9m9ln6fdi.f[34]++;
			cov_9m9ln6fdi.s[114]++;

			event.preventDefault();
		};

		_this.handleMeasureBackground = dimensions => {
			cov_9m9ln6fdi.f[35]++;
			cov_9m9ln6fdi.s[115]++;

			_this.backgroundDimensions = dimensions.bounds;
			cov_9m9ln6fdi.s[116]++;
			_this.setState({
				viewBoxScale: _this.backgroundDimensions.width / _this._boardWidth
			});
		};

		_this.handleMeasureInput = dimensions => {
			cov_9m9ln6fdi.f[36]++;
			cov_9m9ln6fdi.s[117]++;

			_this.handleMeasureIO({ type: 'input', dimensions });
		};

		_this.handleMeasureOutput = dimensions => {
			cov_9m9ln6fdi.f[37]++;
			cov_9m9ln6fdi.s[118]++;

			_this.handleMeasureIO({ type: 'output', dimensions });
		};

		_this.handleMeasureUserOutput = dimensions => {
			cov_9m9ln6fdi.f[38]++;
			cov_9m9ln6fdi.s[119]++;

			_this.handleMeasureIO({ type: 'user_output', dimensions });
		};

		_this.getViewBox = () => {
			cov_9m9ln6fdi.f[39]++;

			const { offsetX, offsetY, scale } = (cov_9m9ln6fdi.s[120]++, _this.normalizeScaleAndOffset({
				offsetX: _this.state.isPanning ? (cov_9m9ln6fdi.b[19][0]++, _this.state.offsetX - _this.state.panDistance * Math.cos(_this.state.panAngle)) : (cov_9m9ln6fdi.b[19][1]++, _this.state.offsetX),
				offsetY: _this.state.isPanning ? (cov_9m9ln6fdi.b[20][0]++, _this.state.offsetY - _this.state.panDistance * Math.sin(_this.state.panAngle)) : (cov_9m9ln6fdi.b[20][1]++, _this.state.offsetY),
				scale: _this.state.isPinching ? (cov_9m9ln6fdi.b[21][0]++, _this.state.scale * _this.state.pinchScale) : (cov_9m9ln6fdi.b[21][1]++, _this.state.scale)
			}));

			const normalOffsetY = (cov_9m9ln6fdi.s[121]++, (_this._outputHeight - _this._inputHeight) / 2);

			const viewBoxWidth = (cov_9m9ln6fdi.s[122]++, _this._boardOuterWidth / scale);
			const viewBoxHeight = (cov_9m9ln6fdi.s[123]++, _this._boardOuterHeight / scale);

			cov_9m9ln6fdi.s[124]++;
			return [-viewBoxWidth / 2 + offsetX, -viewBoxHeight / 2 + offsetY + normalOffsetY, viewBoxWidth, viewBoxHeight];
		};

		_this.getIOWirePathData = ({ startX, endX, head, tail }) => {
			cov_9m9ln6fdi.f[40]++;

			const pathLength = (cov_9m9ln6fdi.s[125]++, 30);
			const curveLength = (cov_9m9ln6fdi.s[126]++, pathLength * 0.9);

			cov_9m9ln6fdi.s[127]++;
			return Path().moveTo(startX, 0).relative().lineTo(0, head).relative().curveTo(0, curveLength, endX - startX, pathLength - curveLength, endX - startX, pathLength).relative().lineTo(0, tail).end();
		};

		_this.getInputColor = index => {
			cov_9m9ln6fdi.f[41]++;
			cov_9m9ln6fdi.s[128]++;

			if ((cov_9m9ln6fdi.b[23][0]++, _this.props.currentInputIndex !== null) && (cov_9m9ln6fdi.b[23][1]++, _this.props.currentInputIndex !== index)) {
				cov_9m9ln6fdi.b[22][0]++;
				cov_9m9ln6fdi.s[129]++;

				return 'gray';
			} else {
				cov_9m9ln6fdi.b[22][1]++;
			}

			cov_9m9ln6fdi.s[130]++;
			return inputColors[index % inputColors.length];
		};

		_this.renderInputs = () => {
			cov_9m9ln6fdi.f[47]++;
			cov_9m9ln6fdi.s[136]++;
			return _this.props.input.map((inputsList, index) => {
				cov_9m9ln6fdi.f[48]++;
				cov_9m9ln6fdi.s[137]++;
				return React.createElement(
					'g',
					{ key: index },
					inputsList.map((inputs, inputsIndex) => {
						cov_9m9ln6fdi.f[49]++;

						const x = (cov_9m9ln6fdi.s[138]++, -_this._inputAreaWidth / 2 + (index * inputsList.length + inputsIndex) * 200);

						cov_9m9ln6fdi.s[139]++;
						return React.createElement(
							'g',
							{ key: inputsIndex },
							React.createElement(IOComponent, {
								x: x,
								y: 0,
								value: inputs,
								correctness: null,
								color: _this.getInputColor(index),
								filled: true,
								nullable: false
							}),
							React.createElement('path', {
								d: _this.getIOWirePathData({
									startX: x + 75,
									endX: (_this.props.inputX[inputsIndex] - _this.props.width / 2 + 0.5) * BLOCK_SIZE + (index - (_this.props.input.length - 1) / 2) * 10,
									head: 0,
									tail: 20
								}),
								transform: 'translate(0, 50)',
								fill: 'none',
								strokeWidth: '5',
								stroke: _this.getInputColor(index),
								style: {
									transition: 'stroke 0.3s ease'
								}
							})
						);
					})
				);
			});
		};

		_this.renderBlocks = () => {
			cov_9m9ln6fdi.f[50]++;
			cov_9m9ln6fdi.s[140]++;
			return _this.state.blocks.map(row => {
				cov_9m9ln6fdi.f[51]++;
				cov_9m9ln6fdi.s[141]++;
				return row.map(block => {
					cov_9m9ln6fdi.f[52]++;
					cov_9m9ln6fdi.s[142]++;
					return React.createElement(
						'g',
						{ key: id(block) },
						React.createElement('rect', {
							className: 'block-border',
							width: BLOCK_SIZE,
							height: BLOCK_SIZE,
							x: block.x * BLOCK_SIZE,
							y: block.y * BLOCK_SIZE
						}),
						(cov_9m9ln6fdi.b[24][0]++, block.config.onRotatableWire) && (cov_9m9ln6fdi.b[24][1]++, React.createElement('image', {
							className: 'block',
							width: BLOCK_SIZE,
							height: BLOCK_SIZE,
							x: block.x * BLOCK_SIZE,
							y: block.y * BLOCK_SIZE,
							xlinkHref: 'image/wireI.png',
							style: {
								transform: `rotate(${block.rotate * 90}deg)`,
								transformOrigin: 'center',
								// Enabled from FF55
								transformBox: 'fill-box',
								pointerEvents: 'none'
							}
						})),
						(cov_9m9ln6fdi.b[25][0]++, block.name !== 'empty') && (cov_9m9ln6fdi.b[25][1]++, React.createElement('image', {
							className: 'block',
							width: BLOCK_SIZE,
							height: BLOCK_SIZE,
							x: block.x * BLOCK_SIZE,
							y: block.y * BLOCK_SIZE,
							xlinkHref: `image/${block.name}.png`,
							style: {
								transform: block.config.onRotatableWire ? (cov_9m9ln6fdi.b[26][0]++, 'none') : (cov_9m9ln6fdi.b[26][1]++, `rotate(${block.rotate * 90}deg)`),
								transformOrigin: 'center',
								// Enabled from FF55
								transformBox: 'fill-box',
								pointerEvents: 'none'
							}
						}))
					);
				});
			});
		};

		_this.renderOutputs = () => {
			cov_9m9ln6fdi.f[53]++;
			cov_9m9ln6fdi.s[143]++;
			return _this.props.output.map((output, index) => {
				cov_9m9ln6fdi.f[54]++;
				cov_9m9ln6fdi.s[144]++;
				return React.createElement(
					'g',
					{ key: index },
					React.createElement('path', {
						d: _this.getIOWirePathData({
							startX: (index - (_this.props.output.length - 1) / 2) * 10,
							endX: -_this._outputAreaWidth / 2 + index * 200 + 75,
							head: 20,
							tail: 0
						}),
						fill: 'none',
						strokeWidth: '5',
						stroke: _this.getInputColor(index),
						style: {
							transition: 'stroke 0.3s ease'
						}
					}),
					React.createElement(IOComponent, {
						x: -_this._outputAreaWidth / 2 + index * 200,
						y: 110,
						value: output,
						correctness: null,
						color: _this.getInputColor(index),
						filled: true,
						nullable: false
					}),
					React.createElement(IOComponent, {
						x: -_this._outputAreaWidth / 2 + index * 200,
						y: 50,
						value: _this.props.userOutput[index],
						correctness: _this.props.userOutputCorrectness[index],
						color: _this.getInputColor(index),
						filled: false,
						nullable: true
					})
				);
			});
		};

		cov_9m9ln6fdi.s[14]++;
		assert(props.status === 'stop');

		cov_9m9ln6fdi.s[15]++;
		_this.board = new Board({
			height: _this.props.height,
			width: _this.props.width,
			clockLimit: _this.props.clockLimit,
			inputX: _this.props.inputX,
			outputX: _this.props.outputX
		}, _this.blockSize);

		cov_9m9ln6fdi.s[16]++;
		_this.board.on('output', _this.handleBoardOutput);
		cov_9m9ln6fdi.s[17]++;
		_this.board.on('halt', _this.handleBoardHalt);
		cov_9m9ln6fdi.s[18]++;
		_this.board.on('paused', _this.handleBoardPaused);

		cov_9m9ln6fdi.s[19]++;
		_this.passAnimationResolvers = new WeakMap();

		cov_9m9ln6fdi.s[20]++;
		_this.inputBlockY = 0;
		cov_9m9ln6fdi.s[21]++;
		_this.outputBlockX = _this.props.outputX;
		cov_9m9ln6fdi.s[22]++;
		_this.outputBlockY = _this.props.height - 1;

		cov_9m9ln6fdi.s[23]++;
		_this.animations = [];

		cov_9m9ln6fdi.s[24]++;
		_this.backgroundDimensions = null;

		cov_9m9ln6fdi.s[25]++;
		_this.state = {
			blocks: _this.board.getBlocks(),
			clocks: 0,
			isPanning: false,
			isPinch: false,
			panDistance: 0,
			panAngle: 0,
			pinchCenterX: 0,
			pinchCenterY: 0,
			pinchScale: 1,
			offsetX: 0,
			offsetY: 0,
			scale: 1,
			viewBoxScale: null
		};
		return _this;
	}

	_createClass(BoardComponent, [{
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps) {
			cov_9m9ln6fdi.f[1]++;
			cov_9m9ln6fdi.s[26]++;

			if (prevProps.status === 'stop') {
				cov_9m9ln6fdi.b[1][0]++;
				cov_9m9ln6fdi.s[27]++;

				assert(this.props.status !== 'pause');

				cov_9m9ln6fdi.s[28]++;
				if (this.props.status === 'executing') {
					cov_9m9ln6fdi.b[2][0]++;
					cov_9m9ln6fdi.s[29]++;

					this.execute(this.props.input[this.props.currentInputIndex]);
				} else {
					cov_9m9ln6fdi.b[2][1]++;
				}
			} else {
				cov_9m9ln6fdi.b[1][1]++;
			}

			cov_9m9ln6fdi.s[30]++;
			if (prevProps.status === 'executing') {
				cov_9m9ln6fdi.b[3][0]++;
				cov_9m9ln6fdi.s[31]++;

				if (this.props.status === 'stop') {
					cov_9m9ln6fdi.b[4][0]++;
					cov_9m9ln6fdi.s[32]++;

					this.halt({ force: this.props.isForced });
				} else {
					cov_9m9ln6fdi.b[4][1]++;
				}
			} else {
				cov_9m9ln6fdi.b[3][1]++;
			}
		}
	}, {
		key: 'getBlock',


		// TODO: publicなメソッドを殺したい

		value: function getBlock(x, y) {
			cov_9m9ln6fdi.f[14]++;
			cov_9m9ln6fdi.s[46]++;

			return this.board.getBlock(x, y);
		}
	}, {
		key: 'getBoardData',
		value: function getBoardData() {
			cov_9m9ln6fdi.f[15]++;
			cov_9m9ln6fdi.s[47]++;

			return this.board.boardData;
		}
	}, {
		key: 'getClock',
		value: function getClock() {
			cov_9m9ln6fdi.f[16]++;
			cov_9m9ln6fdi.s[48]++;

			return this.board.clock;
		}
	}, {
		key: 'getWeighedBlockCount',
		value: function getWeighedBlockCount() {
			cov_9m9ln6fdi.f[17]++;
			cov_9m9ln6fdi.s[49]++;

			return this.board.weighedBlockCount;
		}
	}, {
		key: 'getSeededRandom',
		value: function getSeededRandom() {
			cov_9m9ln6fdi.f[18]++;
			cov_9m9ln6fdi.s[50]++;

			return this.board.getSeededRandom();
		}
	}, {
		key: 'placeBlock',
		value: function placeBlock({ x, y, type, rotate }) {
			cov_9m9ln6fdi.f[19]++;
			cov_9m9ln6fdi.s[51]++;

			this.board.placeBlock({ x, y, type, rotate });
			cov_9m9ln6fdi.s[52]++;
			this.setState({
				blocks: this.board.getBlocks()
			});
		}
	}, {
		key: 'halt',
		value: function halt({ force }) {
			cov_9m9ln6fdi.f[21]++;
			cov_9m9ln6fdi.s[57]++;

			if (force) {
				cov_9m9ln6fdi.b[5][0]++;
				cov_9m9ln6fdi.s[58]++;

				this.board.halt();
			} else {
				cov_9m9ln6fdi.b[5][1]++;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			cov_9m9ln6fdi.f[42]++;
			cov_9m9ln6fdi.s[131]++;

			return React.createElement(
				Hammer,
				{
					onPan: this.handlePan,
					onPinch: this.handlePinch,
					options: {
						recognizers: {
							pinch: { enable: true }
						},
						preventDefault: true
					}
				},
				React.createElement(
					'svg',
					{
						className: 'board-svg',
						viewBox: this.getViewBox(),
						onWheel: this.handleWheel,
						onDragStart: this.handleDragStart
					},
					React.createElement(
						'g',
						{ transform: `translate(0, ${-this._boardBorderHeight / 2 - 100})` },
						this.renderInputs()
					),
					React.createElement(
						'g',
						{ transform: `translate(${-this._boardBorderWidth / 2}, ${-this._boardBorderHeight / 2})` },
						React.createElement(
							'g',
							null,
							React.createElement('image', {
								x: '0',
								y: '0',
								width: this._borderSize,
								height: this._borderSize,
								xlinkHref: 'image/frame-topleft.png'
							}),
							React.createElement('image', {
								x: this._borderSize,
								y: '0',
								width: this._boardWidth,
								height: this._borderSize,
								preserveAspectRatio: 'none',
								xlinkHref: 'image/frame-top.png'
							}),
							React.createElement('image', {
								x: this._borderSize + this._boardWidth,
								y: '0',
								width: this._borderSize,
								height: this._borderSize,
								xlinkHref: 'image/frame-topright.png'
							}),
							React.createElement('image', {
								x: '0',
								y: this._borderSize,
								width: this._borderSize,
								height: this._boardHeight,
								preserveAspectRatio: 'none',
								xlinkHref: 'image/frame-left.png'
							}),
							React.createElement('image', {
								x: this._borderSize + this._boardWidth,
								y: this._borderSize,
								width: this._borderSize,
								height: this._boardHeight,
								preserveAspectRatio: 'none',
								xlinkHref: 'image/frame-right.png'
							}),
							React.createElement('image', {
								x: '0',
								y: this._borderSize + this._boardHeight,
								width: this._borderSize,
								height: this._borderSize,
								xlinkHref: 'image/frame-bottomleft.png'
							}),
							React.createElement('image', {
								x: this._borderSize,
								y: this._borderSize + this._boardHeight,
								width: this._boardWidth,
								height: this._borderSize,
								preserveAspectRatio: 'none',
								xlinkHref: 'image/frame-bottom.png'
							}),
							React.createElement('image', {
								x: this._borderSize + this._boardWidth,
								y: this._borderSize + this._boardHeight,
								width: this._borderSize,
								height: this._borderSize,
								xlinkHref: 'image/frame-bottomright.png'
							})
						),
						React.createElement(
							'foreignObject',
							{
								transform: `translate(0, ${this._boardBorderHeight})`,
								height: '100%',
								width: '100%',
								fontSize: '0'
							},
							React.createElement(
								'div',
								{ className: 'clock-area' },
								this.state.clocks,
								'/',
								this.props.clockLimit
							)
						),
						React.createElement(
							'g',
							{ transform: `translate(${this._borderSize}, ${this._borderSize})` },
							React.createElement(
								Measure,
								{
									ref: ref => {
										cov_9m9ln6fdi.f[43]++;
										cov_9m9ln6fdi.s[132]++;

										this.measureComponent = ref;
									},
									onResize: this.handleMeasureBackground,
									bounds: true
								},
								({ measureRef }) => {
									cov_9m9ln6fdi.f[44]++;
									cov_9m9ln6fdi.s[133]++;
									return React.createElement('rect', {
										ref: measureRef,
										className: 'board-background',
										width: this.props.width * BLOCK_SIZE,
										height: this.props.height * BLOCK_SIZE
									});
								}
							),
							React.createElement(
								'g',
								null,
								this.renderBlocks()
							),
							React.createElement(
								'g',
								null,
								this.state.blocks.map(row => {
									cov_9m9ln6fdi.f[45]++;
									cov_9m9ln6fdi.s[134]++;
									return row.map(block => {
										cov_9m9ln6fdi.f[46]++;
										cov_9m9ln6fdi.s[135]++;
										return React.createElement(BlockComponent, {
											key: id(block),
											block: block,
											x: block.x,
											y: block.y,
											status: this.props.status,
											onClick: this.handleClickBlock,
											onPassAnimationComplete: this.handlePassAnimationComplete,
											isRapid: this.props.isRapid,
											viewBoxScale: this.state.viewBoxScale
										});
									});
								})
							)
						)
					),
					React.createElement(
						'g',
						{ transform: `translate(0, ${this._boardBorderHeight / 2})` },
						this.renderOutputs()
					)
				)
			);
		}

		/*
  	Because of the limitation of React (cannot render sibling
  	elements) and SVG (first element always rendered first),
  	blocks renderings are located here.
  	They must be inside BlockComponent, though...
  */

	}, {
		key: '_borderSize',
		get: function () {
			cov_9m9ln6fdi.f[2]++;
			cov_9m9ln6fdi.s[33]++;

			return 25;
		}
	}, {
		key: '_boardWidth',
		get: function () {
			cov_9m9ln6fdi.f[3]++;
			cov_9m9ln6fdi.s[34]++;

			return this.props.width * BLOCK_SIZE;
		}
	}, {
		key: '_boardHeight',
		get: function () {
			cov_9m9ln6fdi.f[4]++;
			cov_9m9ln6fdi.s[35]++;

			return this.props.height * BLOCK_SIZE;
		}
	}, {
		key: '_inputHeight',
		get: function () {
			cov_9m9ln6fdi.f[5]++;
			cov_9m9ln6fdi.s[36]++;

			return 120;
		}
	}, {
		key: '_outputHeight',
		get: function () {
			cov_9m9ln6fdi.f[6]++;
			cov_9m9ln6fdi.s[37]++;

			return 170;
		}
	}, {
		key: '_boardBorderWidth',
		get: function () {
			cov_9m9ln6fdi.f[7]++;
			cov_9m9ln6fdi.s[38]++;

			return this._borderSize * 2 + this._boardWidth;
		}
	}, {
		key: '_boardBorderHeight',
		get: function () {
			cov_9m9ln6fdi.f[8]++;
			cov_9m9ln6fdi.s[39]++;

			return this._borderSize * 2 + this._boardHeight;
		}
	}, {
		key: '_boardOuterWidth',
		get: function () {
			cov_9m9ln6fdi.f[9]++;
			cov_9m9ln6fdi.s[40]++;

			return Math.max(this._borderSize * 2 + this._boardWidth, this._inputAreaWidth);
		}
	}, {
		key: '_boardOuterHeight',
		get: function () {
			cov_9m9ln6fdi.f[10]++;
			cov_9m9ln6fdi.s[41]++;

			return this._borderSize * 2 + this._boardHeight + this._inputHeight + this._outputHeight;
		}
	}, {
		key: '_inputAreaWidth',
		get: function () {
			cov_9m9ln6fdi.f[11]++;

			const inputComponentSize = (cov_9m9ln6fdi.s[42]++, sum(this.props.input.map(inputList => {
				cov_9m9ln6fdi.f[12]++;
				cov_9m9ln6fdi.s[43]++;
				return inputList.length;
			})));
			cov_9m9ln6fdi.s[44]++;
			return inputComponentSize * 200 - 50;
		}
	}, {
		key: '_outputAreaWidth',
		get: function () {
			cov_9m9ln6fdi.f[13]++;
			cov_9m9ln6fdi.s[45]++;

			return this.props.output.length * 200 - 50;
		}
	}]);

	return BoardComponent;
}(React.Component);

BoardComponent.propTypes = {
	status: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	clockLimit: PropTypes.number.isRequired,
	inputX: PropTypes.arrayOf(PropTypes.number).isRequired,
	outputX: PropTypes.number.isRequired,
	input: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))).isRequired,
	currentInputIndex: PropTypes.number,
	output: PropTypes.arrayOf(PropTypes.number).isRequired,
	userOutput: PropTypes.arrayOf(PropTypes.number).isRequired,
	userOutputCorrectness: PropTypes.arrayOf(PropTypes.bool).isRequired,
	onClickBlock: PropTypes.func.isRequired,
	onOutput: PropTypes.func.isRequired,
	onHalt: PropTypes.func.isRequired,
	onPaused: PropTypes.func.isRequired,
	onDataLimitExceeded: PropTypes.func.isRequired,
	onClockLimitExceeded: PropTypes.func.isRequired,
	isRapid: PropTypes.bool.isRequired,
	isForced: PropTypes.bool.isRequired
};
BoardComponent.defaultProps = {
	currentInputIndex: null
};
cov_9m9ln6fdi.s[145]++;


module.exports = BoardComponent;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("react-hammerjs");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("hammerjs");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("svg-path-generator");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var expect, seedrandom, Board, Block, It;
expect = __webpack_require__(2).expect;
seedrandom = __webpack_require__(9);
Board = __webpack_require__(5);
Block = __webpack_require__(7);
It = global.it;
describe('Board', function(){
  beforeEach(function(){
    return this.board = new Board({
      inputX: 2,
      outputX: 2,
      width: 5,
      height: 4,
      clockLimit: 100
    });
  });
  It('carries input data to output when plugged input and output by wires', function(){
    var this$ = this;
    return new Promise(function(resolve, reject){
      var i$, y, x, results$ = [];
      for (i$ = 0; i$ < 4; ++i$) {
        y = i$;
        this$.board.placeBlock({
          x: 2,
          y: y,
          type: 'wireI',
          rotate: 0
        });
      }
      this$.board.on('output', function(outputValue){
        expect(outputValue).to.equal(100);
        return resolve();
      });
      this$.board.input(100);
      for (i$ = 0; i$ < 4; ++i$) {
        x = i$;
        this$.board.step();
        results$.push(this$.board.hand());
      }
      return results$;
    });
  });
  describe('constructor', function(){
    return It('creates height x width numbers of empty blocks', function(){
      expect(this.board.blocks).to.have.lengthOf(4);
      return this.board.blocks.forEach(function(row){
        expect(row).to.have.lengthOf(5);
        return row.forEach(function(block){
          expect(block).to.be.an['instanceof'](Block);
          return expect(block.config.type).to.equal('empty');
        });
      });
    });
  });
  describe('#input', function(){
    return It('executes the board', function(){
      this.board.input(100);
      return expect(this.board.status).to.equal('executing');
    });
  });
  describe('#dataCount', function(){
    return It('counts data in board', function(){
      this.board.placeBlock({
        x: 2,
        y: 0,
        type: 'wireXdot',
        rotate: 0
      });
      this.board.input(100);
      this.board.step();
      return expect(this.board.dataCount).to.equal(3);
    });
  });
  describe('#dataExists', function(){
    return It('returns true if any data exist on the current board', function(){
      this.board.placeBlock({
        x: 2,
        y: 0,
        type: 'wireXdot',
        rotate: 0
      });
      this.board.input(100);
      expect(this.board.dataExists).to.be['true'];
      this.board.step();
      expect(this.board.dataExists).to.be['true'];
      this.board.hand();
      expect(this.board.dataExists).to.be['true'];
      this.board.step();
      return expect(this.board.dataExists).to.be['false'];
    });
  });
  describe('#blockCount', function(){
    return It('counts blocks in board', function(){
      this.board.placeBlock({
        x: 2,
        y: 1,
        type: 'wireI',
        rotate: 0
      });
      this.board.placeBlock({
        x: 3,
        y: 2,
        type: 'times-2',
        rotate: 0
      });
      this.board.placeBlock({
        x: 0,
        y: 3,
        type: 'diode',
        rotate: 1
      });
      return expect(this.board.blockCount).to.equal(3);
    });
  });
  describe('#weighedBlockCount', function(){
    return It('sums up block weights in board', function(){
      this.board.placeBlock({
        x: 2,
        y: 1,
        type: 'wireI',
        rotate: 0
      });
      this.board.placeBlock({
        x: 3,
        y: 2,
        type: 'times-2',
        rotate: 0
      });
      this.board.placeBlock({
        x: 0,
        y: 3,
        type: 'diode',
        rotate: 1
      });
      return expect(this.board.weighedBlockCount).to.equal(6);
    });
  });
  describe('#boardData', function(){
    return It('return JSON data of the current board state', function(){
      this.board.placeBlock({
        x: 0,
        y: 3,
        type: 'diode',
        rotate: 1
      });
      this.board.placeBlock({
        x: 2,
        y: 1,
        type: 'wireI',
        rotate: 0
      });
      this.board.placeBlock({
        x: 3,
        y: 2,
        type: 'times-2',
        rotate: 0
      });
      return expect(this.board.boardData).to.deep.equal([
        {
          x: 2,
          y: 1,
          type: 'wireI',
          rotate: 0
        }, {
          x: 3,
          y: 2,
          type: 'times-2',
          rotate: 0
        }, {
          x: 0,
          y: 3,
          type: 'diode',
          rotate: 1
        }
      ]);
    });
  });
  describe('#getSeededRandom', function(){
    return It('returns seeded random function with board data', function(){
      var expectedRandom, resultRandom, expected, result;
      this.board.placeBlock({
        x: 1,
        y: 1,
        type: 'diode',
        rotate: 1
      });
      expectedRandom = seedrandom('[[1,1,"diode",1]]');
      resultRandom = this.board.getSeededRandom();
      expect(resultRandom).to.be.a('function');
      expected = expectedRandom();
      result = resultRandom();
      expect(result).to.be.a('number');
      return expect(result).to.equal(expected);
    });
  });
  return describe('#run', function(){
    It('run the board until the end and report the output', function(){
      this.board.placeBlock({
        x: 2,
        y: 0,
        type: 'wireI',
        rotate: 0
      });
      this.board.placeBlock({
        x: 2,
        y: 1,
        type: 'minus-1',
        rotate: 0
      });
      this.board.placeBlock({
        x: 2,
        y: 2,
        type: 'times-2',
        rotate: 0
      });
      this.board.placeBlock({
        x: 2,
        y: 3,
        type: 'wireI',
        rotate: 0
      });
      this.board.run(7);
      expect(this.board.outputValue).to.equal(12);
      return expect(this.board.clock).to.equal(4);
    });
    It('remains outputValue to null when no output was generated', function(){
      this.board.placeBlock({
        x: 2,
        y: 0,
        type: 'wireI',
        rotate: 0
      });
      this.board.placeBlock({
        x: 2,
        y: 1,
        type: 'minus-1',
        rotate: 0
      });
      this.board.placeBlock({
        x: 2,
        y: 2,
        type: 'times-2',
        rotate: 1
      });
      this.board.placeBlock({
        x: 2,
        y: 3,
        type: 'wireI',
        rotate: 0
      });
      this.board.run(7);
      expect(this.board.outputValue).to.be['null'];
      return expect(this.board.clock).to.equal(3);
    });
    It('limits maximum execution clocks to stage\'s clock limit', function(){
      this.board.placeBlock({
        x: 1,
        y: 0,
        type: 'wireL',
        rotate: 1
      });
      this.board.placeBlock({
        x: 2,
        y: 0,
        type: 'wireT',
        rotate: 3
      });
      this.board.placeBlock({
        x: 1,
        y: 1,
        type: 'wireL',
        rotate: 0
      });
      this.board.placeBlock({
        x: 2,
        y: 1,
        type: 'wireL',
        rotate: 3
      });
      this.board.run(7);
      expect(this.board.outputValue).to.be['null'];
      return expect(this.board.clock).to.equal(100);
    });
    return It('limits simultaneous data count to 100', function(){
      var i$, x, j$, y;
      for (i$ = 0; i$ <= 4; ++i$) {
        x = i$;
        for (j$ = 0; j$ <= 2; ++j$) {
          y = j$;
          this.board.placeBlock({
            x: x,
            y: y,
            type: 'wireXdot',
            rotate: 0
          });
        }
      }
      this.board.run(7);
      expect(this.board.outputValue).to.be['null'];
      return expect(this.board.clock).to.be.above(1).and.below(100);
    });
  });
});
//# sourceMappingURL=/home/travis/build/tsg-ut/mnemo/node_modules/livescript-loader/index.js!/home/travis/build/tsg-ut/mnemo/test/unit/board.ls.map


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-env mocha */
/* eslint no-unused-expressions: "off" */

// eslint-disable-next-line no-unused-vars
const DataComponent = __webpack_require__(11);

describe('<DataComponent/>', () => {
	// TODO
});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-env mocha */
/* eslint no-unused-expressions: "off" */

// eslint-disable-next-line no-unused-vars
const DataComponent = __webpack_require__(16);

describe('<IOComponent/>', () => {
	// TODO
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-env mocha */
/* eslint no-unused-expressions: "off" */

const React = __webpack_require__(1);
const { shallow } = __webpack_require__(54);
const chai = __webpack_require__(2);
const chaiEnzyme = __webpack_require__(55);

chai.use(chaiEnzyme());

const { expect } = chai;

const PanelComponent = __webpack_require__(56);

describe('<PanelComponent/>', () => {
	it('renders .panel', () => {
		const panel = shallow(React.createElement(PanelComponent, { parts: {} }));
		expect(panel).to.have.length(1);
		expect(panel).to.have.className('panel');
	});

	it('renders blocks with specified parts', () => {
		const panel = shallow(React.createElement(PanelComponent, {
			parts: {
				wireI: 10,
				wireL: 30
			}
		}));

		expect(panel.children()).to.have.length(2);

		expect(panel.childAt(0)).to.have.className('block');
		expect(panel.childAt(0)).to.have.prop('data-type', 'wireI');
		expect(panel.childAt(0).find('.count')).be.present();
		expect(panel.childAt(0).find('.count')).to.have.text('10');

		expect(panel.childAt(1)).to.have.className('block');
		expect(panel.childAt(1)).to.have.prop('data-type', 'wireL');
		expect(panel.childAt(1).find('.count')).be.present();
		expect(panel.childAt(1).find('.count')).to.have.text('30');
	});

	it('renders null blocks as Infinity', () => {
		const panel = shallow(React.createElement(PanelComponent, {
			parts: {
				wireI: null
			}
		}));

		expect(panel.find('.block').first()).to.have.prop('data-type', 'wireI');
		expect(panel.find('.block').first().find('.count')).to.have.text('∞');
	});

	it('marks first block as selected', () => {
		const panel = shallow(React.createElement(PanelComponent, {
			parts: {
				wireI: 10
			}
		}));

		expect(panel).to.have.state('selected', 'wireI');
		expect(panel.find('.block').first()).to.have.attr('data-selected', 'data-selected');
	});

	describe('#push', () => {
		it('pushes block to panel', () => {
			const panel = shallow(React.createElement(PanelComponent, {
				parts: {
					wireI: 10
				}
			}));

			panel.instance().push('wireI');
			expect(panel.state('parts').get('wireI')).to.equal(11);
		});

		it('pushes new block to panel', () => {
			const panel = shallow(React.createElement(PanelComponent, {
				parts: {
					wireI: 10
				}
			}));

			panel.instance().push('wireL');
			expect(panel.state('parts').get('wireI')).to.equal(10);
			expect(panel.state('parts').get('wireL')).to.equal(1);
		});

		it('remains Infinity blocks as Infinity', () => {
			const panel = shallow(React.createElement(PanelComponent, {
				parts: {
					wireI: null
				}
			}));

			panel.instance().push('wireI');
			expect(panel.state('parts').get('wireI')).to.be.null;
		});
	});

	describe('#take', () => {
		it('takes blocks from parts', () => {
			const panel = shallow(React.createElement(PanelComponent, {
				parts: {
					wireI: 10
				}
			}));

			panel.instance().take('wireI');
			expect(panel.state('parts').get('wireI')).to.equal(9);
		});

		it('erases last block when taken', () => {
			const panel = shallow(React.createElement(PanelComponent, {
				parts: {
					wireI: 1
				}
			}));

			panel.instance().take('wireI');
			expect(panel.state('parts').has('wireI')).to.be.false;
		});

		it('remains Infinity blocks as Infinity', () => {
			const panel = shallow(React.createElement(PanelComponent, {
				parts: {
					wireI: null
				}
			}));

			panel.instance().take('wireI');
			expect(panel.state('parts').get('wireI')).to.be.null;
		});
	});

	describe('#onClickBlock', () => {
		it('switches selected block as clicked', () => {
			const panel = shallow(React.createElement(PanelComponent, {
				parts: {
					wireI: null,
					wireL: null
				}
			}));

			expect(panel).to.have.state('selected', 'wireI');
			expect(panel.childAt(0)).to.have.attr('data-selected', 'data-selected');

			const mockedEvent = {
				target: {
					getAttribute: () => 'wireL'
				}
			};
			panel.childAt(1).simulate('click', mockedEvent);

			expect(panel).to.have.state('selected', 'wireL');
			expect(panel.childAt(1)).to.have.attr('data-selected', 'data-selected');
		});
	});
});

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("enzyme");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("chai-enzyme");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_23vg6hj758 = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/lib/panel-component.jsx',
	    hash = '8c17083a4f3ada9672d24833387256d000e964ff',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/lib/panel-component.jsx',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 15
				},
				end: {
					line: 1,
					column: 32
				}
			},
			'1': {
				start: {
					line: 2,
					column: 14
				},
				end: {
					line: 2,
					column: 30
				}
			},
			'2': {
				start: {
					line: 3,
					column: 18
				},
				end: {
					line: 3,
					column: 39
				}
			},
			'3': {
				start: {
					line: 11,
					column: 2
				},
				end: {
					line: 11,
					column: 22
				}
			},
			'4': {
				start: {
					line: 13,
					column: 16
				},
				end: {
					line: 13,
					column: 25
				}
			},
			'5': {
				start: {
					line: 14,
					column: 17
				},
				end: {
					line: 14,
					column: 21
				}
			},
			'6': {
				start: {
					line: 16,
					column: 2
				},
				end: {
					line: 23,
					column: 5
				}
			},
			'7': {
				start: {
					line: 17,
					column: 17
				},
				end: {
					line: 17,
					column: 34
				}
			},
			'8': {
				start: {
					line: 19,
					column: 3
				},
				end: {
					line: 19,
					column: 26
				}
			},
			'9': {
				start: {
					line: 20,
					column: 3
				},
				end: {
					line: 22,
					column: 4
				}
			},
			'10': {
				start: {
					line: 21,
					column: 4
				},
				end: {
					line: 21,
					column: 20
				}
			},
			'11': {
				start: {
					line: 25,
					column: 2
				},
				end: {
					line: 28,
					column: 4
				}
			},
			'12': {
				start: {
					line: 37,
					column: 21
				},
				end: {
					line: 37,
					column: 22
				}
			},
			'13': {
				start: {
					line: 39,
					column: 2
				},
				end: {
					line: 41,
					column: 3
				}
			},
			'14': {
				start: {
					line: 40,
					column: 3
				},
				end: {
					line: 40,
					column: 50
				}
			},
			'15': {
				start: {
					line: 43,
					column: 2
				},
				end: {
					line: 46,
					column: 3
				}
			},
			'16': {
				start: {
					line: 44,
					column: 3
				},
				end: {
					line: 44,
					column: 53
				}
			},
			'17': {
				start: {
					line: 45,
					column: 3
				},
				end: {
					line: 45,
					column: 44
				}
			},
			'18': {
				start: {
					line: 55,
					column: 2
				},
				end: {
					line: 55,
					column: 76
				}
			},
			'19': {
				start: {
					line: 57,
					column: 23
				},
				end: {
					line: 57,
					column: 54
				}
			},
			'20': {
				start: {
					line: 59,
					column: 2
				},
				end: {
					line: 73,
					column: 3
				}
			},
			'21': {
				start: {
					line: 60,
					column: 3
				},
				end: {
					line: 60,
					column: 58
				}
			},
			'22': {
				start: {
					line: 62,
					column: 3
				},
				end: {
					line: 68,
					column: 4
				}
			},
			'23': {
				start: {
					line: 63,
					column: 4
				},
				end: {
					line: 63,
					column: 36
				}
			},
			'24': {
				start: {
					line: 65,
					column: 4
				},
				end: {
					line: 65,
					column: 39
				}
			},
			'25': {
				start: {
					line: 67,
					column: 4
				},
				end: {
					line: 67,
					column: 54
				}
			},
			'26': {
				start: {
					line: 70,
					column: 3
				},
				end: {
					line: 72,
					column: 6
				}
			},
			'27': {
				start: {
					line: 77,
					column: 2
				},
				end: {
					line: 79,
					column: 5
				}
			},
			'28': {
				start: {
					line: 83,
					column: 2
				},
				end: {
					line: 101,
					column: 4
				}
			},
			'29': {
				start: {
					line: 86,
					column: 5
				},
				end: {
					line: 98,
					column: 11
				}
			},
			'30': {
				start: {
					line: 105,
					column: 0
				},
				end: {
					line: 105,
					column: 32
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 10,
						column: 1
					},
					end: {
						line: 10,
						column: 2
					}
				},
				loc: {
					start: {
						line: 10,
						column: 27
					},
					end: {
						line: 29,
						column: 2
					}
				},
				line: 10
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 16,
						column: 35
					},
					end: {
						line: 16,
						column: 36
					}
				},
				loc: {
					start: {
						line: 16,
						column: 52
					},
					end: {
						line: 23,
						column: 3
					}
				},
				line: 16
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 36,
						column: 1
					},
					end: {
						line: 36,
						column: 2
					}
				},
				loc: {
					start: {
						line: 36,
						column: 17
					},
					end: {
						line: 47,
						column: 2
					}
				},
				line: 36
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 54,
						column: 1
					},
					end: {
						line: 54,
						column: 2
					}
				},
				loc: {
					start: {
						line: 54,
						column: 17
					},
					end: {
						line: 74,
						column: 2
					}
				},
				line: 54
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 76,
						column: 20
					},
					end: {
						line: 76,
						column: 21
					}
				},
				loc: {
					start: {
						line: 76,
						column: 31
					},
					end: {
						line: 80,
						column: 2
					}
				},
				line: 76
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 82,
						column: 1
					},
					end: {
						line: 82,
						column: 2
					}
				},
				loc: {
					start: {
						line: 82,
						column: 10
					},
					end: {
						line: 102,
						column: 2
					}
				},
				line: 82
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 85,
						column: 38
					},
					end: {
						line: 85,
						column: 39
					}
				},
				loc: {
					start: {
						line: 86,
						column: 5
					},
					end: {
						line: 98,
						column: 11
					}
				},
				line: 86
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 20,
						column: 3
					},
					end: {
						line: 22,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 20,
						column: 3
					},
					end: {
						line: 22,
						column: 4
					}
				}, {
					start: {
						line: 20,
						column: 3
					},
					end: {
						line: 22,
						column: 4
					}
				}],
				line: 20
			},
			'1': {
				loc: {
					start: {
						line: 39,
						column: 2
					},
					end: {
						line: 41,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 39,
						column: 2
					},
					end: {
						line: 41,
						column: 3
					}
				}, {
					start: {
						line: 39,
						column: 2
					},
					end: {
						line: 41,
						column: 3
					}
				}],
				line: 39
			},
			'2': {
				loc: {
					start: {
						line: 43,
						column: 2
					},
					end: {
						line: 46,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 43,
						column: 2
					},
					end: {
						line: 46,
						column: 3
					}
				}, {
					start: {
						line: 43,
						column: 2
					},
					end: {
						line: 46,
						column: 3
					}
				}],
				line: 43
			},
			'3': {
				loc: {
					start: {
						line: 59,
						column: 2
					},
					end: {
						line: 73,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 59,
						column: 2
					},
					end: {
						line: 73,
						column: 3
					}
				}, {
					start: {
						line: 59,
						column: 2
					},
					end: {
						line: 73,
						column: 3
					}
				}],
				line: 59
			},
			'4': {
				loc: {
					start: {
						line: 62,
						column: 3
					},
					end: {
						line: 68,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 62,
						column: 3
					},
					end: {
						line: 68,
						column: 4
					}
				}, {
					start: {
						line: 62,
						column: 3
					},
					end: {
						line: 68,
						column: 4
					}
				}],
				line: 62
			},
			'5': {
				loc: {
					start: {
						line: 92,
						column: 7
					},
					end: {
						line: 92,
						column: 77
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 92,
						column: 38
					},
					end: {
						line: 92,
						column: 72
					}
				}, {
					start: {
						line: 92,
						column: 75
					},
					end: {
						line: 92,
						column: 77
					}
				}],
				line: 92
			},
			'6': {
				loc: {
					start: {
						line: 96,
						column: 8
					},
					end: {
						line: 96,
						column: 36
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 96,
						column: 25
					},
					end: {
						line: 96,
						column: 28
					}
				}, {
					start: {
						line: 96,
						column: 31
					},
					end: {
						line: 96,
						column: 36
					}
				}],
				line: 96
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0],
			'4': [0, 0],
			'5': [0, 0],
			'6': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

const assert = (cov_23vg6hj758.s[0]++, __webpack_require__(4));
const React = (cov_23vg6hj758.s[1]++, __webpack_require__(1));
const PropTypes = (cov_23vg6hj758.s[2]++, __webpack_require__(3));

let PanelComponent = function (_React$Component) {
	_inherits(PanelComponent, _React$Component);

	function PanelComponent(props, state) {
		_classCallCheck(this, PanelComponent);

		cov_23vg6hj758.f[0]++;
		cov_23vg6hj758.s[3]++;

		var _this = _possibleConstructorReturn(this, (PanelComponent.__proto__ || Object.getPrototypeOf(PanelComponent)).call(this, props, state));

		_this.handleClickBlock = event => {
			cov_23vg6hj758.f[4]++;
			cov_23vg6hj758.s[27]++;

			_this.setState({
				selected: event.target.getAttribute('data-type')
			});
		};

		const parts = (cov_23vg6hj758.s[4]++, new Map());
		let selected = (cov_23vg6hj758.s[5]++, null);

		cov_23vg6hj758.s[6]++;
		Object.keys(props.parts).forEach((name, index) => {
			cov_23vg6hj758.f[1]++;

			const count = (cov_23vg6hj758.s[7]++, props.parts[name]);

			cov_23vg6hj758.s[8]++;
			parts.set(name, count);
			cov_23vg6hj758.s[9]++;
			if (index === 0) {
				cov_23vg6hj758.b[0][0]++;
				cov_23vg6hj758.s[10]++;

				selected = name;
			} else {
				cov_23vg6hj758.b[0][1]++;
			}
		});

		cov_23vg6hj758.s[11]++;
		_this.state = {
			parts,
			selected
		};
		return _this;
	}

	/**
  *  panel上にblockを追加する
  *  @param {string} blockName - 追加するblock名
  *  @return {undefined}
  */


	_createClass(PanelComponent, [{
		key: 'push',
		value: function push(blockName) {
			cov_23vg6hj758.f[2]++;

			let currentCount = (cov_23vg6hj758.s[12]++, 0);

			cov_23vg6hj758.s[13]++;
			if (this.state.parts.has(blockName)) {
				cov_23vg6hj758.b[1][0]++;
				cov_23vg6hj758.s[14]++;

				currentCount = this.state.parts.get(blockName);
			} else {
				cov_23vg6hj758.b[1][1]++;
			}

			cov_23vg6hj758.s[15]++;
			if (currentCount !== null) {
				cov_23vg6hj758.b[2][0]++;
				cov_23vg6hj758.s[16]++;
				// null means infinity
				this.state.parts.set(blockName, currentCount + 1);
				cov_23vg6hj758.s[17]++;
				this.setState({ parts: this.state.parts });
			} else {
				cov_23vg6hj758.b[2][1]++;
			}
		}

		/**
   *  panel上のblockを減らす
   *  @param {string} blockName - 消費するblock名
   *  @return {undefined}
   */

	}, {
		key: 'take',
		value: function take(blockName) {
			cov_23vg6hj758.f[3]++;
			cov_23vg6hj758.s[18]++;

			assert(this.state.parts.has(blockName), 'try to take non-existent block');

			const currentCount = (cov_23vg6hj758.s[19]++, this.state.parts.get(blockName));

			cov_23vg6hj758.s[20]++;
			if (currentCount !== null) {
				cov_23vg6hj758.b[3][0]++;
				cov_23vg6hj758.s[21]++;
				// null means infinity
				assert(currentCount > 0, 'the block isn\'t remaining');

				cov_23vg6hj758.s[22]++;
				if (currentCount - 1 === 0) {
					cov_23vg6hj758.b[4][0]++;
					cov_23vg6hj758.s[23]++;
					// take the last block
					this.setState({ selected: null });

					cov_23vg6hj758.s[24]++;
					this.state.parts.delete(blockName);
				} else {
					cov_23vg6hj758.b[4][1]++;
					cov_23vg6hj758.s[25]++;

					this.state.parts.set(blockName, currentCount - 1);
				}

				cov_23vg6hj758.s[26]++;
				this.setState({
					parts: this.state.parts
				});
			} else {
				cov_23vg6hj758.b[3][1]++;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			cov_23vg6hj758.f[5]++;
			cov_23vg6hj758.s[28]++;

			return React.createElement(
				'div',
				{ className: 'panel' },
				Array.from(this.state.parts).map(([name, count]) => {
					cov_23vg6hj758.f[6]++;
					cov_23vg6hj758.s[29]++;
					return React.createElement(
						'div',
						_extends({
							key: name,
							className: 'block',
							onClick: this.handleClickBlock,
							'data-type': name
						}, this.state.selected === name ? (cov_23vg6hj758.b[5][0]++, { 'data-selected': 'data-selected' }) : (cov_23vg6hj758.b[5][1]++, {})),
						React.createElement(
							'div',
							{ className: 'count' },
							count === null ? (cov_23vg6hj758.b[6][0]++, '∞') : (cov_23vg6hj758.b[6][1]++, count)
						)
					);
				})
			);
		}
	}]);

	return PanelComponent;
}(React.Component);

PanelComponent.propTypes = {
	parts: PropTypes.object.isRequired
};
cov_23vg6hj758.s[30]++;


module.exports = PanelComponent;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var chai, chaiThings, mathjs, seedrandom, coreJs, calc03, conditional01, conditional02, conditional03, factorial, parity, fibonacci, powerHard, gcd, lcm, sqrtEasy, sqrtHard, msd, mod3Hard, theFifthMax, repeatSelf, fibonacciHard, factorization, spaceship, tenThousandthDigit, expect, It, zip, integrality, ioSpec, ioSpecSeq, sumOfDigits, fibonacciCalc, conditional1Calc, conditional2Calc, factorizationCalc, spaceshipCalc, tenThousandthDigitCalc, toString$ = {}.toString, slice$ = [].slice;
chai = __webpack_require__(2);
chaiThings = __webpack_require__(58);
mathjs = __webpack_require__(59);
seedrandom = __webpack_require__(9);
coreJs = __webpack_require__(13);
calc03 = __webpack_require__(17);
conditional01 = __webpack_require__(18);
conditional02 = __webpack_require__(19);
conditional03 = __webpack_require__(20);
factorial = __webpack_require__(21);
parity = __webpack_require__(22);
fibonacci = __webpack_require__(23);
powerHard = __webpack_require__(24);
gcd = __webpack_require__(25);
lcm = __webpack_require__(26);
sqrtEasy = __webpack_require__(27);
sqrtHard = __webpack_require__(28);
msd = __webpack_require__(29);
mod3Hard = __webpack_require__(30);
theFifthMax = __webpack_require__(31);
repeatSelf = __webpack_require__(32);
fibonacciHard = __webpack_require__(33);
factorization = __webpack_require__(34);
spaceship = __webpack_require__(35);
tenThousandthDigit = __webpack_require__(36);
chai.use(chaiThings);
expect = chai.expect;
It = global.it;
zip = function(arrayA, arrayB){
  return Array.from({
    length: Math.min(arrayA.length, arrayB.length)
  }, function(item, index){
    return [arrayA[index], arrayB[index]];
  });
};
integrality = function(n){
  switch (false) {
  case toString$.call(n).slice(8, -1) !== 'Number':
    return Number.isInteger(n);
  case toString$.call(n).slice(8, -1) !== 'Array':
    return n.every(integrality);
  default:
    return false;
  }
};
ioSpec = function(arg$){
  var input, output, uniqueInput;
  input = arg$.input, output = arg$.output;
  expect(input).to.be.an('array');
  expect(output).to.be.an('array');
  uniqueInput = Array.from(new Set(input));
  expect(input).to.deep.equal(uniqueInput);
  expect(input).to.all.satisfy(integrality);
  expect(output).to.all.satisfy(integrality);
  return expect(input).to.have.length(output.length);
};
ioSpecSeq = function(arg$){
  var input, output;
  input = arg$.input, output = arg$.output;
  expect({
    input: input,
    output: output
  }).to.satisfy(ioSpec);
  return expect(input).to.all.satisfy(function(i){
    expect(i).to.be.an('array').that.has.lengthOf(2);
    return expect(i[1]).to.be.an('array').that.has.lengthOf(i[0]);
  });
};
sumOfDigits = function(n){
  return n.toString().split('').map(partialize$.apply(this, [parseInt, [void 8, 10], [0]])).reduce(curry$(function(x$, y$){
    return x$ + y$;
  }));
};
fibonacciCalc = function(n, value, prev){
  value == null && (value = 1);
  prev == null && (prev = 0);
  if (n === 0) {
    return prev;
  } else {
    return fibonacciCalc(n - 1, value + prev, value);
  }
};
conditional1Calc = function(x){
  if (x % 2 === 0) {
    return 2 * x;
  } else {
    return 3 * x;
  }
};
conditional2Calc = function(x){
  if (x === 5) {
    return 10;
  } else if (x === 6) {
    return 18;
  } else {
    return x;
  }
};
factorizationCalc = function(n){
  var i$, to$, i;
  for (i$ = 2, to$ = n - 1; i$ <= to$; ++i$) {
    i = i$;
    if (n % i === 0) {
      return i;
    }
  }
  return 0;
};
spaceshipCalc = function(a, b){
  return Math.sign(a - b);
};
tenThousandthDigitCalc = function(n){
  var x;
  mathjs.config({
    precision: 20000
  });
  x = mathjs.divide(mathjs.bignumber(1), mathjs.bignumber(n));
  return parseInt(
  x.toString().split('.')[1][9999]);
};
describe('Stage Data', function(){
  beforeEach(function(){
    return this.random = seedrandom('');
  });
  describe('calc03 stage', function(){
    return It('generates multiply of 6', function(){
      var io;
      io = calc03.ioGenerator(this.random);
      expect(io).to.satisfy(ioSpec);
      expect(zip(io.input, io.output)).to.all.satisfy(function(arg$){
        var input, output;
        input = arg$[0], output = arg$[1];
        return 6 * input === output;
      });
      expect(io.input[0]).to.equal(1);
      return expect(io.input[1]).to.equal(3);
    });
  });
  describe('conditional01 stage', function(){
    return It('generates 2x if even, 3x otherwise', function(){
      var io;
      io = conditional01.ioGenerator(this.random);
      expect(io).to.satisfy(ioSpec);
      expect(zip(io.input, io.output)).to.all.satisfy(function(arg$){
        var input, output;
        input = arg$[0], output = arg$[1];
        return output === conditional1Calc(input);
      });
      expect(io.input[0]).to.equal(5);
      expect(io.input[1]).to.equal(-10);
      expect(io.input[2]).to.be.below(200);
      return expect(io.input[3]).to.be.below(200);
    });
  });
  describe('conditional02 stage', function(){
    return It('generates 2*5 if 5, 3*6 else if 6, 1 otherwise', function(){
      var io;
      io = conditional02.ioGenerator(this.random);
      expect(io).to.satisfy(ioSpec);
      expect(zip(io.input, io.output)).to.all.satisfy(function(arg$){
        var input, output;
        input = arg$[0], output = arg$[1];
        return output === conditional2Calc(input);
      });
      expect(io.input[0]).to.equal(5);
      expect(io.input[1]).to.equal(6);
      expect(io.input[2]).to.be.below(200);
      return expect(io.input[3]).to.be.below(200);
    });
  });
  describe('conditional03 stage', function(){
    return It('generates two addition in modulo 7', function(){
      var io;
      io = conditional03.ioGenerator(this.random);
      expect(io).to.satisfy(ioSpec);
      expect(zip(io.input, io.output)).to.all.satisfy(function(arg$){
        var input, output;
        input = arg$[0], output = arg$[1];
        return output === (input + 2) % 7;
      });
      expect(io.input[0]).to.equal(5);
      expect(io.input[1]).to.equal(3);
      expect(io.input[2]).to.be.below(200);
      expect(io.input[3]).to.be.below(200);
      return expect(io.input[4]).to.be.below(200);
    });
  });
  describe('factorial stage', function(){
    return It('generates factorials', function(){
      var io;
      io = factorial.ioGenerator(this.random);
      expect(io).to.satisfy(ioSpec);
      expect(zip(io.input, io.output)).to.all.satisfy(function(arg$){
        var input, output;
        input = arg$[0], output = arg$[1];
        return output === mathjs.factorial(input);
      });
      return expect(io.input[3]).to.equal(15);
    });
  });
  describe('parity stage', function(){
    return It('generates parities', function(){
      var io;
      io = parity.ioGenerator(this.random);
      expect(io).to.satisfy(ioSpec);
      expect(zip(io.input, io.output)).to.all.satisfy(function(arg$){
        var input, output;
        input = arg$[0], output = arg$[1];
        return sumOfDigits(input) % 10 === output;
      });
      expect(sumOfDigits(io.input[0])).to.be.below(10);
      expect(sumOfDigits(io.input[1])).to.be.least(10).and.below(20);
      return expect(sumOfDigits(io.input[2])).to.be.least(20);
    });
  });
  describe('fibonacci stage', function(){
    return It('generates fibonaccis', function(){
      var io;
      io = fibonacci.ioGenerator(this.random);
      expect(io).to.satisfy(ioSpec);
      expect(zip(io.input, io.output)).to.all.satisfy(function(arg$){
        var input, output;
        input = arg$[0], output = arg$[1];
        return output === fibonacciCalc(input);
      });
      return expect(io.input[3]).to.equal(20);
    });
  });
  describe('power-hard stage', function(){
    return It('generates powers', function(){
      var io;
      io = powerHard.ioGenerator(this.random);
      expect(io).to.satisfy(ioSpec);
      expect(zip(io.input, io.output)).to.all.satisfy(function(arg$){
        var input, output;
        input = arg$[0], output = arg$[1];
        return output === Math.pow(input[0], input[1]);
      });
      return expect(io.input[2]).to.deep.equal([2, 35]);
    });
  });
  describe('gcd stage', function(){
    return It('generates GCDs', function(){
      var io;
      io = gcd.ioGenerator(this.random);
      expect(io).to.satisfy(ioSpec);
      expect(zip(io.input, io.output)).to.all.satisfy(function(arg$){
        var input, output;
        input = arg$[0], output = arg$[1];
        return output === mathjs.gcd(input[0], input[1]);
      });
      return expect(io.input[3]).to.deep.equal([56, 1275]);
    });
  });
  describe('lcm stage', function(){
    return It('generates LCMs', function(){
      var io;
      io = lcm.ioGenerator(this.random);
      expect(io).to.satisfy(ioSpec);
      expect(zip(io.input, io.output)).to.all.satisfy(function(arg$){
        var input, output;
        input = arg$[0], output = arg$[1];
        return output === mathjs.lcm(input[0], input[1]);
      });
      return expect(io.input[3]).to.deep.equal([450, 756]);
    });
  });
  describe('sqrt-easy stage', function(){
    return It('generates square roots', function(){
      var io;
      io = sqrtEasy.ioGenerator(this.random);
      expect(io).to.satisfy(ioSpec);
      expect(zip(io.input, io.output)).to.all.satisfy(function(arg$){
        var input, output;
        input = arg$[0], output = arg$[1];
        return input === Math.pow(output, 2);
      });
      expect(io.output[0]).to.be.least(2).and.most(14);
      expect(io.output[1]).to.be.least(2).and.most(14);
      expect(io.output[2]).to.be.least(2).and.most(14);
      return expect(io.output[3]).to.equal(15);
    });
  });
  describe('sqrt-hard stage', function(){
    return It('generates hard square roots', function(){
      var io;
      io = sqrtHard.ioGenerator(this.random);
      expect(io).to.satisfy(ioSpec);
      expect(zip(io.input, io.output)).to.all.satisfy(function(arg$){
        var input, output;
        input = arg$[0], output = arg$[1];
        return input === Math.pow(output, 2);
      });
      expect(io.output[0]).to.equal(3);
      expect(io.output[1]).to.be.least(10).and.below(100);
      expect(io.output[2]).to.be.least(1000).and.below(5000);
      return expect(io.output[3]).to.equal(5103);
    });
  });
  describe('msd stage', function(){
    return It('generates MSDs', function(){
      var io;
      io = msd.ioGenerator(this.random);
      expect(io).to.satisfy(ioSpec);
      expect(zip(io.input, io.output)).to.all.satisfy(function(arg$){
        var input, output;
        input = arg$[0], output = arg$[1];
        return output === parseInt(input.toString()[0]);
      });
      expect(io.input[2]).to.equal(0);
      return expect(io.input[3]).to.equal(123456789);
    });
  });
  describe('mod3-hard stage', function(){
    return It('generates moduloes of 3', function(){
      var io;
      io = mod3Hard.ioGenerator(this.random);
      expect(io).to.satisfy(ioSpec);
      expect(zip(io.input, io.output)).to.all.satisfy(function(arg$){
        var input, output;
        input = arg$[0], output = arg$[1];
        return output === input % 3;
      });
      expect(io.input[0]).to.be.least(10000000).and.below(90000000);
      expect(io.input[1]).to.be.least(10000000).and.below(90000000);
      expect(io.input[2]).to.be.least(10000000).and.below(90000000);
      expect(io.input[3]).to.be.least(10000000).and.below(90000000);
      expect(io.input[4]).to.be.least(99990000).and.below(100000000);
      expect(io.output[0]).to.equal(0);
      expect(io.output[1]).to.equal(1);
      return expect(io.output[2]).to.equal(2);
    });
  });
  describe('the-fifth-max stage', function(){
    return It('generates medians', function(){
      var io;
      io = theFifthMax.ioGenerator(this.random);
      expect(io).to.satisfy(ioSpecSeq);
      expect(zip(io.input, io.output)).to.all.satisfy(function(arg$){
        var input, output, this$ = this;
        input = arg$[0], output = arg$[1];
        return output === mathjs.median(input[1]) && input[1].filter((function(it){
          return it === output;
        })).length === 1;
      });
      expect(io.input[0]).to.deep.equal([5, [1, 2, 3, 4, 5]]);
      expect(io.input[1][0]).to.equal(5);
      expect(io.input[2][0]).to.equal(7);
      expect(io.input[3][0]).to.equal(7);
      expect(io.input[4][0]).to.equal(7);
      return expect(io.input[4][1][6]).to.equal(mathjs.median(io.input[4][1]));
    });
  });
  describe('repeat-self stage', function(){
    return It('generates valid io', function(){
      var io;
      io = repeatSelf.ioGenerator(this.random);
      expect(io).to.satisfy(ioSpec);
      expect(zip(io.input, io.output)).to.all.satisfy(function(arg$){
        var input, output;
        input = arg$[0], output = arg$[1];
        return output === parseInt(
        input.toString().repeat(input));
      });
      expect(io.input[0]).to.equal(1);
      return expect(io.input[3]).to.equal(9);
    });
  });
  describe('fibonacci-hord stage', function(){
    return It('generates fibonaccis', function(){
      var io;
      io = fibonacciHard.ioGenerator(this.random);
      expect(io).to.satisfy(ioSpec);
      expect(zip(io.input, io.output)).to.all.satisfy(function(arg$){
        var input, output;
        input = arg$[0], output = arg$[1];
        return output === fibonacciCalc(input);
      });
      return expect(io.input[3]).to.equal(30);
    });
  });
  describe('factorization stage', function(){
    return It('generates factorization', function(){
      var io;
      io = factorization.ioGenerator(this.random);
      expect(io).to.satisfy(ioSpec);
      expect(zip(io.input, io.output)).to.all.satisfy(function(arg$){
        var input, output;
        input = arg$[0], output = arg$[1];
        return output === factorizationCalc(input);
      });
      expect(io.input[3]).to.equal(211);
      return expect(io.input[4]).to.equal(221);
    });
  });
  describe('spaceship stage', function(){
    return It('generates spaceship', function(){
      var io;
      io = spaceship.ioGenerator(this.random);
      expect(io).to.satisfy(ioSpec);
      expect(zip(io.input, io.output)).to.all.satisfy(function(arg$){
        var input, output;
        input = arg$[0], output = arg$[1];
        return output === spaceshipCalc.apply(null, input);
      });
      expect(io.output[0]).to.equal(0);
      expect(io.output[1]).to.equal(-1);
      return expect(io.output[2]).to.equal(1);
    });
  });
  return describe('10000th-digit stage', function(){
    return It('generates 10000th-digit', function(){
      var io, uniqueOutput;
      io = tenThousandthDigit.ioGenerator(this.random);
      expect(io).to.satisfy(ioSpec);
      uniqueOutput = Array.from(new Set(io.output));
      expect(io.output).to.deep.equal(uniqueOutput);
      expect(zip(io.input, io.output)).to.all.satisfy(function(arg$){
        var input, output;
        input = arg$[0], output = arg$[1];
        return mathjs.isPrime(input) && output === tenThousandthDigitCalc(input);
      });
      return expect(io.input[4]).to.equal(107);
    });
  });
});
function partialize$(f, args, where){
  var context = this;
  return function(){
    var params = slice$.call(arguments), i,
        len = params.length, wlen = where.length,
        ta = args ? args.concat() : [], tw = where ? where.concat() : [];
    for(i = 0; i < len; ++i) { ta[tw[0]] = params[i]; tw.shift(); }
    return len < wlen && len ?
      partialize$.apply(context, [f, ta, tw]) : f.apply(context, ta);
  };
}
function curry$(f, bound){
  var context,
  _curry = function(args) {
    return f.length > 1 ? function(){
      var params = args ? args.concat() : [];
      context = bound ? context || this : this;
      return params.push.apply(params, arguments) <
          f.length && arguments.length ?
        _curry.call(context, params) : f.apply(context, params);
    } : f;
  };
  return _curry();
}
//# sourceMappingURL=/home/travis/build/tsg-ut/mnemo/node_modules/livescript-loader/index.js!/home/travis/build/tsg-ut/mnemo/test/unit/stages.ls.map


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("chai-things");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("mathjs");

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var expect, translateDateFromUnixTime, It;
expect = __webpack_require__(2).expect;
translateDateFromUnixTime = __webpack_require__(0).translateDateFromUnixTime;
It = global.it;
describe('util', function(){
  return describe('translateDateFromUnixTime', function(){
    return It('translates unixtime to YYYY-MM-DD hh:mm:ss', function(){
      var offset;
      offset = new Date().getTimezoneOffset() * 60 * 1000;
      expect(translateDateFromUnixTime(0 + offset)).to.equal('1970-01-01 00:00:00');
      expect(translateDateFromUnixTime(100000000000 + offset)).to.equal('1973-03-03 09:46:40');
      expect(translateDateFromUnixTime(1000000000000 + offset)).to.equal('2001-09-09 01:46:40');
      return expect(translateDateFromUnixTime(1234567890000 + offset)).to.equal('2009-02-13 23:31:30');
    });
  });
});
//# sourceMappingURL=/home/travis/build/tsg-ut/mnemo/node_modules/livescript-loader/index.js!/home/travis/build/tsg-ut/mnemo/test/unit/util.ls.map


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var expect, validateSubmission, It, fails;
expect = __webpack_require__(2).expect;
validateSubmission = __webpack_require__(62).validateSubmission;
It = global.it;
fails = function(expectedMessage, inputData){
  return It("fails when " + expectedMessage, function(){
    var inputs, i$, len$, input, ref$, pass, message, results$ = [];
    inputs = Array.isArray(inputData)
      ? inputData
      : [inputData];
    for (i$ = 0, len$ = inputs.length; i$ < len$; ++i$) {
      input = inputs[i$];
      ref$ = validateSubmission(input), pass = ref$.pass, message = ref$.message;
      expect(pass).to.be['false'];
      results$.push(expect(message).to.equal(expectedMessage));
    }
    return results$;
  });
};
describe('validator', function(){
  return describe('.validatorSubmission', function(){
    fails('stage data is missing', {});
    fails('stage data is invalid', {
      stage: 'blahblah'
    });
    fails('board should be an array', [
      {
        stage: 'wire01',
        board: null
      }, {
        stage: 'wire01',
        board: 42
      }, {
        stage: 'wire01',
        board: 'hogehoge'
      }
    ]);
    fails('board must at least have one block', [{
      stage: 'wire01',
      board: []
    }]);
    fails('keys of block 0 are invalid', [
      {
        stage: 'wire01',
        board: [{}]
      }, {
        stage: 'wire01',
        board: [{
          x: 0,
          y: 0,
          type: 'wireI'
        }]
      }, {
        stage: 'wire01',
        board: [{
          x: 0,
          y: 0,
          type: 'wireI',
          rotate: 0,
          hoge: 'fuga'
        }]
      }
    ]);
    fails('x position of block 0 should be an integer', [
      {
        stage: 'wire01',
        board: [{
          x: null,
          y: 0,
          type: 'wireI',
          rotate: 0
        }]
      }, {
        stage: 'wire01',
        board: [{
          x: 'hoge',
          y: 0,
          type: 'wireI',
          rotate: 0
        }]
      }, {
        stage: 'wire01',
        board: [{
          x: 0.1,
          y: 0,
          type: 'wireI',
          rotate: 0
        }]
      }, {
        stage: 'wire01',
        board: [{
          x: Infinity,
          y: 0,
          type: 'wireI',
          rotate: 0
        }]
      }
    ]);
    fails('x position of block 0 exceeds the board size', [
      {
        stage: 'wire01',
        board: [{
          x: -1,
          y: 0,
          type: 'wireI',
          rotate: 0
        }]
      }, {
        stage: 'wire01',
        board: [{
          x: 3,
          y: 0,
          type: 'wireI',
          rotate: 0
        }]
      }, {
        stage: 'wire01',
        board: [{
          x: 100,
          y: 0,
          type: 'wireI',
          rotate: 0
        }]
      }
    ]);
    fails('y position of block 0 should be an integer', [
      {
        stage: 'wire01',
        board: [{
          x: 0,
          y: null,
          type: 'wireI',
          rotate: 0
        }]
      }, {
        stage: 'wire01',
        board: [{
          x: 0,
          y: 'hoge',
          type: 'wireI',
          rotate: 0
        }]
      }, {
        stage: 'wire01',
        board: [{
          x: 0,
          y: 0.1,
          type: 'wireI',
          rotate: 0
        }]
      }, {
        stage: 'wire01',
        board: [{
          x: 0,
          y: Infinity,
          type: 'wireI',
          rotate: 0
        }]
      }
    ]);
    fails('y position of block 0 exceeds the board size', [
      {
        stage: 'wire01',
        board: [{
          x: 0,
          y: -1,
          type: 'wireI',
          rotate: 0
        }]
      }, {
        stage: 'wire01',
        board: [{
          x: 0,
          y: 3,
          type: 'wireI',
          rotate: 0
        }]
      }, {
        stage: 'wire01',
        board: [{
          x: 0,
          y: 100,
          type: 'wireI',
          rotate: 0
        }]
      }
    ]);
    fails('type of block 0 should be a string', [
      {
        stage: 'wire01',
        board: [{
          x: 0,
          y: 0,
          type: null,
          rotate: 0
        }]
      }, {
        stage: 'wire01',
        board: [{
          x: 0,
          y: 0,
          type: 42,
          rotate: 0
        }]
      }, {
        stage: 'wire01',
        board: [{
          x: 0,
          y: 0,
          type: [],
          rotate: 0
        }]
      }
    ]);
    fails('type of block 0 is unknown', [{
      stage: 'wire01',
      board: [{
        x: 0,
        y: 0,
        type: 'hoge',
        rotate: 0
      }]
    }]);
    fails('rotation of block 0 should be an integer', [
      {
        stage: 'wire01',
        board: [{
          x: 0,
          y: 0,
          type: 'wireI',
          rotate: null
        }]
      }, {
        stage: 'wire01',
        board: [{
          x: 0,
          y: 0,
          type: 'wireI',
          rotate: 'hoge'
        }]
      }, {
        stage: 'wire01',
        board: [{
          x: 0,
          y: 0,
          type: 'wireI',
          rotate: 0.1
        }]
      }, {
        stage: 'wire01',
        board: [{
          x: 0,
          y: 0,
          type: 'wireI',
          rotate: Infinity
        }]
      }
    ]);
    fails('rotation of block 0 is invalid', [
      {
        stage: 'wire01',
        board: [{
          x: 0,
          y: 0,
          type: 'wireI',
          rotate: -1
        }]
      }, {
        stage: 'wire01',
        board: [{
          x: 0,
          y: 0,
          type: 'wireI',
          rotate: 4
        }]
      }
    ]);
    fails('positions of blocks are not unique', [
      {
        stage: 'wire01',
        board: [
          {
            x: 0,
            y: 0,
            type: 'wireI',
            rotate: 0
          }, {
            x: 0,
            y: 0,
            type: 'wireI',
            rotate: 0
          }
        ]
      }, {
        stage: 'wire01',
        board: [
          {
            x: 2,
            y: 2,
            type: 'wireI',
            rotate: 0
          }, {
            x: 0,
            y: 0,
            type: 'wireI',
            rotate: 0
          }, {
            x: 2,
            y: 2,
            type: 'wireI',
            rotate: 0
          }
        ]
      }
    ]);
    fails('used blocks are not matching to the stage', [
      {
        stage: 'wire01',
        board: [{
          x: 0,
          y: 0,
          type: 'times-2',
          rotate: 0
        }]
      }, {
        stage: 'calc05',
        board: [
          {
            x: 0,
            y: 0,
            type: 'times-2',
            rotate: 0
          }, {
            x: 0,
            y: 1,
            type: 'times-2',
            rotate: 0
          }
        ]
      }
    ]);
    fails('the board cannot clear the stage', [
      {
        stage: 'wire01',
        board: [
          {
            x: 1,
            y: 0,
            type: 'wireI',
            rotate: 0
          }, {
            x: 0,
            y: 1,
            type: 'wireI',
            rotate: 0
          }, {
            x: 1,
            y: 2,
            type: 'wireI',
            rotate: 0
          }
        ]
      }, {
        stage: 'wire01',
        board: [
          {
            x: 1,
            y: 0,
            type: 'wireI',
            rotate: 0
          }, {
            x: 1,
            y: 1,
            type: 'wireI',
            rotate: 1
          }, {
            x: 1,
            y: 2,
            type: 'wireI',
            rotate: 0
          }
        ]
      }, {
        stage: 'calc01',
        board: [
          {
            x: 1,
            y: 0,
            type: 'wireI',
            rotate: 0
          }, {
            x: 1,
            y: 1,
            type: 'wireI',
            rotate: 0
          }, {
            x: 1,
            y: 2,
            type: 'wireI',
            rotate: 0
          }
        ]
      }, {
        stage: 'calc01',
        board: [
          {
            x: 0,
            y: 0,
            type: 'wireL',
            rotate: 1
          }, {
            x: 1,
            y: 0,
            type: 'wireT',
            rotate: 3
          }, {
            x: 0,
            y: 1,
            type: 'wireL',
            rotate: 0
          }, {
            x: 1,
            y: 1,
            type: 'wireL',
            rotate: 3
          }
        ]
      }, {
        stage: 'calc03',
        board: [
          {
            x: 2,
            y: 0,
            type: 'plus-1',
            rotate: 0
          }, {
            x: 2,
            y: 1,
            type: 'plus-1',
            rotate: 0
          }, {
            x: 2,
            y: 2,
            type: 'plus-1',
            rotate: 0
          }, {
            x: 2,
            y: 3,
            type: 'plus-1',
            rotate: 0
          }, {
            x: 2,
            y: 4,
            type: 'plus-1',
            rotate: 0
          }
        ]
      }
    ]);
    It('passes if the correct board is given', function(){
      var ref$, pass, message, blocks, clocks;
      ref$ = validateSubmission({
        stage: 'wire01',
        board: [
          {
            x: 1,
            y: 0,
            type: 'wireI',
            rotate: 0
          }, {
            x: 1,
            y: 1,
            type: 'wireI',
            rotate: 0
          }, {
            x: 1,
            y: 2,
            type: 'wireI',
            rotate: 0
          }
        ]
      }), pass = ref$.pass, message = ref$.message, blocks = ref$.blocks, clocks = ref$.clocks;
      expect(pass).to.be['true'];
      expect(message).to.be.undefined;
      expect(blocks).to.equal(3);
      expect(clocks).to.equal(3);
      ref$ = validateSubmission({
        stage: 'calc01',
        board: [
          {
            x: 1,
            y: 0,
            type: 'wireI',
            rotate: 0
          }, {
            x: 1,
            y: 1,
            type: 'times-2',
            rotate: 0
          }, {
            x: 1,
            y: 2,
            type: 'wireI',
            rotate: 0
          }
        ]
      }), pass = ref$.pass, message = ref$.message, blocks = ref$.blocks, clocks = ref$.clocks;
      expect(pass).to.be['true'];
      expect(message).to.be.undefined;
      expect(blocks).to.equal(4);
      return expect(clocks).to.equal(3);
    });
    return It('supports dynamically generated test cases', function(){
      var ref$, pass, message, blocks, clocks;
      ref$ = validateSubmission({
        stage: 'calc03',
        board: [
          {
            x: 2,
            y: 0,
            type: 'wireI',
            rotate: 0
          }, {
            x: 2,
            y: 1,
            type: 'times-2',
            rotate: 0
          }, {
            x: 2,
            y: 2,
            type: 'wireI',
            rotate: 0
          }, {
            x: 2,
            y: 3,
            type: 'times-3',
            rotate: 0
          }, {
            x: 2,
            y: 4,
            type: 'wireI',
            rotate: 0
          }
        ]
      }), pass = ref$.pass, message = ref$.message, blocks = ref$.blocks, clocks = ref$.clocks;
      expect(pass).to.be['true'];
      expect(message).to.be.undefined;
      expect(blocks).to.equal(7);
      return expect(clocks).to.equal(5);
    });
  });
});
//# sourceMappingURL=/home/travis/build/tsg-ut/mnemo/node_modules/livescript-loader/index.js!/home/travis/build/tsg-ut/mnemo/test/unit/validator.ls.map


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1ide81xho3 = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/lib/validator.js',
	    hash = 'd130b9c61f929780bbf55c06ac717060ccd2e42f',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/lib/validator.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 15
				},
				end: {
					line: 1,
					column: 32
				}
			},
			'1': {
				start: {
					line: 2,
					column: 21
				},
				end: {
					line: 2,
					column: 47
				}
			},
			'2': {
				start: {
					line: 3,
					column: 15
				},
				end: {
					line: 3,
					column: 35
				}
			},
			'3': {
				start: {
					line: 4,
					column: 14
				},
				end: {
					line: 4,
					column: 32
				}
			},
			'4': {
				start: {
					line: 5,
					column: 27
				},
				end: {
					line: 5,
					column: 44
				}
			},
			'5': {
				start: {
					line: 7,
					column: 19
				},
				end: {
					line: 7,
					column: 44
				}
			},
			'6': {
				start: {
					line: 10,
					column: 0
				},
				end: {
					line: 17,
					column: 2
				}
			},
			'7': {
				start: {
					line: 11,
					column: 48
				},
				end: {
					line: 11,
					column: 53
				}
			},
			'8': {
				start: {
					line: 13,
					column: 13
				},
				end: {
					line: 13,
					column: 91
				}
			},
			'9': {
				start: {
					line: 14,
					column: 13
				},
				end: {
					line: 14,
					column: 87
				}
			},
			'10': {
				start: {
					line: 16,
					column: 1
				},
				end: {
					line: 16,
					column: 18
				}
			},
			'11': {
				start: {
					line: 19,
					column: 0
				},
				end: {
					line: 169,
					column: 2
				}
			},
			'12': {
				start: {
					line: 20,
					column: 1
				},
				end: {
					line: 22,
					column: 2
				}
			},
			'13': {
				start: {
					line: 21,
					column: 2
				},
				end: {
					line: 21,
					column: 57
				}
			},
			'14': {
				start: {
					line: 24,
					column: 15
				},
				end: {
					line: 24,
					column: 62
				}
			},
			'15': {
				start: {
					line: 24,
					column: 34
				},
				end: {
					line: 24,
					column: 61
				}
			},
			'16': {
				start: {
					line: 26,
					column: 1
				},
				end: {
					line: 28,
					column: 2
				}
			},
			'17': {
				start: {
					line: 27,
					column: 2
				},
				end: {
					line: 27,
					column: 57
				}
			},
			'18': {
				start: {
					line: 30,
					column: 1
				},
				end: {
					line: 32,
					column: 2
				}
			},
			'19': {
				start: {
					line: 31,
					column: 2
				},
				end: {
					line: 31,
					column: 60
				}
			},
			'20': {
				start: {
					line: 34,
					column: 1
				},
				end: {
					line: 36,
					column: 2
				}
			},
			'21': {
				start: {
					line: 35,
					column: 2
				},
				end: {
					line: 35,
					column: 70
				}
			},
			'22': {
				start: {
					line: 38,
					column: 13
				},
				end: {
					line: 38,
					column: 17
				}
			},
			'23': {
				start: {
					line: 40,
					column: 1
				},
				end: {
					line: 84,
					column: 4
				}
			},
			'24': {
				start: {
					line: 41,
					column: 18
				},
				end: {
					line: 79,
					column: 6
				}
			},
			'25': {
				start: {
					line: 42,
					column: 3
				},
				end: {
					line: 44,
					column: 4
				}
			},
			'26': {
				start: {
					line: 43,
					column: 4
				},
				end: {
					line: 43,
					column: 48
				}
			},
			'27': {
				start: {
					line: 46,
					column: 3
				},
				end: {
					line: 48,
					column: 4
				}
			},
			'28': {
				start: {
					line: 47,
					column: 4
				},
				end: {
					line: 47,
					column: 63
				}
			},
			'29': {
				start: {
					line: 50,
					column: 3
				},
				end: {
					line: 52,
					column: 4
				}
			},
			'30': {
				start: {
					line: 51,
					column: 4
				},
				end: {
					line: 51,
					column: 65
				}
			},
			'31': {
				start: {
					line: 54,
					column: 3
				},
				end: {
					line: 56,
					column: 4
				}
			},
			'32': {
				start: {
					line: 55,
					column: 4
				},
				end: {
					line: 55,
					column: 63
				}
			},
			'33': {
				start: {
					line: 58,
					column: 3
				},
				end: {
					line: 60,
					column: 4
				}
			},
			'34': {
				start: {
					line: 59,
					column: 4
				},
				end: {
					line: 59,
					column: 65
				}
			},
			'35': {
				start: {
					line: 62,
					column: 3
				},
				end: {
					line: 64,
					column: 4
				}
			},
			'36': {
				start: {
					line: 63,
					column: 4
				},
				end: {
					line: 63,
					column: 55
				}
			},
			'37': {
				start: {
					line: 66,
					column: 3
				},
				end: {
					line: 68,
					column: 4
				}
			},
			'38': {
				start: {
					line: 67,
					column: 4
				},
				end: {
					line: 67,
					column: 47
				}
			},
			'39': {
				start: {
					line: 70,
					column: 3
				},
				end: {
					line: 72,
					column: 4
				}
			},
			'40': {
				start: {
					line: 71,
					column: 4
				},
				end: {
					line: 71,
					column: 61
				}
			},
			'41': {
				start: {
					line: 74,
					column: 3
				},
				end: {
					line: 76,
					column: 4
				}
			},
			'42': {
				start: {
					line: 75,
					column: 4
				},
				end: {
					line: 75,
					column: 51
				}
			},
			'43': {
				start: {
					line: 78,
					column: 3
				},
				end: {
					line: 78,
					column: 15
				}
			},
			'44': {
				start: {
					line: 81,
					column: 2
				},
				end: {
					line: 83,
					column: 3
				}
			},
			'45': {
				start: {
					line: 82,
					column: 3
				},
				end: {
					line: 82,
					column: 19
				}
			},
			'46': {
				start: {
					line: 86,
					column: 1
				},
				end: {
					line: 88,
					column: 2
				}
			},
			'47': {
				start: {
					line: 87,
					column: 2
				},
				end: {
					line: 87,
					column: 39
				}
			},
			'48': {
				start: {
					line: 91,
					column: 19
				},
				end: {
					line: 91,
					column: 28
				}
			},
			'49': {
				start: {
					line: 92,
					column: 1
				},
				end: {
					line: 95,
					column: 4
				}
			},
			'50': {
				start: {
					line: 93,
					column: 16
				},
				end: {
					line: 93,
					column: 47
				}
			},
			'51': {
				start: {
					line: 94,
					column: 2
				},
				end: {
					line: 94,
					column: 23
				}
			},
			'52': {
				start: {
					line: 97,
					column: 1
				},
				end: {
					line: 99,
					column: 2
				}
			},
			'53': {
				start: {
					line: 98,
					column: 2
				},
				end: {
					line: 98,
					column: 70
				}
			},
			'54': {
				start: {
					line: 102,
					column: 21
				},
				end: {
					line: 102,
					column: 30
				}
			},
			'55': {
				start: {
					line: 103,
					column: 1
				},
				end: {
					line: 109,
					column: 4
				}
			},
			'56': {
				start: {
					line: 104,
					column: 2
				},
				end: {
					line: 108,
					column: 3
				}
			},
			'57': {
				start: {
					line: 105,
					column: 3
				},
				end: {
					line: 105,
					column: 64
				}
			},
			'58': {
				start: {
					line: 107,
					column: 3
				},
				end: {
					line: 107,
					column: 34
				}
			},
			'59': {
				start: {
					line: 111,
					column: 1
				},
				end: {
					line: 121,
					column: 2
				}
			},
			'60': {
				start: {
					line: 112,
					column: 2
				},
				end: {
					line: 114,
					column: 3
				}
			},
			'61': {
				start: {
					line: 113,
					column: 3
				},
				end: {
					line: 113,
					column: 78
				}
			},
			'62': {
				start: {
					line: 116,
					column: 23
				},
				end: {
					line: 116,
					column: 40
				}
			},
			'63': {
				start: {
					line: 118,
					column: 2
				},
				end: {
					line: 120,
					column: 3
				}
			},
			'64': {
				start: {
					line: 119,
					column: 3
				},
				end: {
					line: 119,
					column: 78
				}
			},
			'65': {
				start: {
					line: 125,
					column: 15
				},
				end: {
					line: 131,
					column: 3
				}
			},
			'66': {
				start: {
					line: 133,
					column: 1
				},
				end: {
					line: 135,
					column: 4
				}
			},
			'67': {
				start: {
					line: 134,
					column: 2
				},
				end: {
					line: 134,
					column: 26
				}
			},
			'68': {
				start: {
					line: 137,
					column: 16
				},
				end: {
					line: 137,
					column: 17
				}
			},
			'69': {
				start: {
					line: 139,
					column: 27
				},
				end: {
					line: 156,
					column: 5
				}
			},
			'70': {
				start: {
					line: 140,
					column: 2
				},
				end: {
					line: 150,
					column: 3
				}
			},
			'71': {
				start: {
					line: 141,
					column: 18
				},
				end: {
					line: 141,
					column: 41
				}
			},
			'72': {
				start: {
					line: 142,
					column: 27
				},
				end: {
					line: 142,
					column: 52
				}
			},
			'73': {
				start: {
					line: 143,
					column: 3
				},
				end: {
					line: 143,
					column: 32
				}
			},
			'74': {
				start: {
					line: 144,
					column: 3
				},
				end: {
					line: 144,
					column: 33
				}
			},
			'75': {
				start: {
					line: 146,
					column: 3
				},
				end: {
					line: 149,
					column: 5
				}
			},
			'76': {
				start: {
					line: 152,
					column: 2
				},
				end: {
					line: 155,
					column: 4
				}
			},
			'77': {
				start: {
					line: 158,
					column: 1
				},
				end: {
					line: 166,
					column: 2
				}
			},
			'78': {
				start: {
					line: 159,
					column: 2
				},
				end: {
					line: 159,
					column: 19
				}
			},
			'79': {
				start: {
					line: 161,
					column: 2
				},
				end: {
					line: 163,
					column: 3
				}
			},
			'80': {
				start: {
					line: 162,
					column: 3
				},
				end: {
					line: 162,
					column: 69
				}
			},
			'81': {
				start: {
					line: 165,
					column: 2
				},
				end: {
					line: 165,
					column: 45
				}
			},
			'82': {
				start: {
					line: 168,
					column: 1
				},
				end: {
					line: 168,
					column: 72
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 10,
						column: 32
					},
					end: {
						line: 10,
						column: 33
					}
				},
				loc: {
					start: {
						line: 10,
						column: 67
					},
					end: {
						line: 17,
						column: 1
					}
				},
				line: 10
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 19,
						column: 36
					},
					end: {
						line: 19,
						column: 37
					}
				},
				loc: {
					start: {
						line: 19,
						column: 52
					},
					end: {
						line: 169,
						column: 1
					}
				},
				line: 19
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 24,
						column: 27
					},
					end: {
						line: 24,
						column: 28
					}
				},
				loc: {
					start: {
						line: 24,
						column: 34
					},
					end: {
						line: 24,
						column: 61
					}
				},
				line: 24
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 40,
						column: 26
					},
					end: {
						line: 40,
						column: 27
					}
				},
				loc: {
					start: {
						line: 40,
						column: 44
					},
					end: {
						line: 84,
						column: 2
					}
				},
				line: 40
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 41,
						column: 19
					},
					end: {
						line: 41,
						column: 20
					}
				},
				loc: {
					start: {
						line: 41,
						column: 25
					},
					end: {
						line: 79,
						column: 3
					}
				},
				line: 41
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 92,
						column: 26
					},
					end: {
						line: 92,
						column: 27
					}
				},
				loc: {
					start: {
						line: 92,
						column: 37
					},
					end: {
						line: 95,
						column: 2
					}
				},
				line: 92
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 103,
						column: 26
					},
					end: {
						line: 103,
						column: 27
					}
				},
				loc: {
					start: {
						line: 103,
						column: 37
					},
					end: {
						line: 109,
						column: 2
					}
				},
				line: 103
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 133,
						column: 26
					},
					end: {
						line: 133,
						column: 27
					}
				},
				loc: {
					start: {
						line: 133,
						column: 37
					},
					end: {
						line: 135,
						column: 2
					}
				},
				line: 133
			},
			'8': {
				name: '(anonymous_8)',
				decl: {
					start: {
						line: 139,
						column: 28
					},
					end: {
						line: 139,
						column: 29
					}
				},
				loc: {
					start: {
						line: 139,
						column: 34
					},
					end: {
						line: 156,
						column: 2
					}
				},
				line: 139
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 20,
						column: 1
					},
					end: {
						line: 22,
						column: 2
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 20,
						column: 1
					},
					end: {
						line: 22,
						column: 2
					}
				}, {
					start: {
						line: 20,
						column: 1
					},
					end: {
						line: 22,
						column: 2
					}
				}],
				line: 20
			},
			'1': {
				loc: {
					start: {
						line: 26,
						column: 1
					},
					end: {
						line: 28,
						column: 2
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 26,
						column: 1
					},
					end: {
						line: 28,
						column: 2
					}
				}, {
					start: {
						line: 26,
						column: 1
					},
					end: {
						line: 28,
						column: 2
					}
				}],
				line: 26
			},
			'2': {
				loc: {
					start: {
						line: 30,
						column: 1
					},
					end: {
						line: 32,
						column: 2
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 30,
						column: 1
					},
					end: {
						line: 32,
						column: 2
					}
				}, {
					start: {
						line: 30,
						column: 1
					},
					end: {
						line: 32,
						column: 2
					}
				}],
				line: 30
			},
			'3': {
				loc: {
					start: {
						line: 34,
						column: 1
					},
					end: {
						line: 36,
						column: 2
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 34,
						column: 1
					},
					end: {
						line: 36,
						column: 2
					}
				}, {
					start: {
						line: 34,
						column: 1
					},
					end: {
						line: 36,
						column: 2
					}
				}],
				line: 34
			},
			'4': {
				loc: {
					start: {
						line: 42,
						column: 3
					},
					end: {
						line: 44,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 42,
						column: 3
					},
					end: {
						line: 44,
						column: 4
					}
				}, {
					start: {
						line: 42,
						column: 3
					},
					end: {
						line: 44,
						column: 4
					}
				}],
				line: 42
			},
			'5': {
				loc: {
					start: {
						line: 46,
						column: 3
					},
					end: {
						line: 48,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 46,
						column: 3
					},
					end: {
						line: 48,
						column: 4
					}
				}, {
					start: {
						line: 46,
						column: 3
					},
					end: {
						line: 48,
						column: 4
					}
				}],
				line: 46
			},
			'6': {
				loc: {
					start: {
						line: 50,
						column: 3
					},
					end: {
						line: 52,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 50,
						column: 3
					},
					end: {
						line: 52,
						column: 4
					}
				}, {
					start: {
						line: 50,
						column: 3
					},
					end: {
						line: 52,
						column: 4
					}
				}],
				line: 50
			},
			'7': {
				loc: {
					start: {
						line: 50,
						column: 7
					},
					end: {
						line: 50,
						column: 44
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 50,
						column: 7
					},
					end: {
						line: 50,
						column: 18
					}
				}, {
					start: {
						line: 50,
						column: 22
					},
					end: {
						line: 50,
						column: 44
					}
				}],
				line: 50
			},
			'8': {
				loc: {
					start: {
						line: 54,
						column: 3
					},
					end: {
						line: 56,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 54,
						column: 3
					},
					end: {
						line: 56,
						column: 4
					}
				}, {
					start: {
						line: 54,
						column: 3
					},
					end: {
						line: 56,
						column: 4
					}
				}],
				line: 54
			},
			'9': {
				loc: {
					start: {
						line: 58,
						column: 3
					},
					end: {
						line: 60,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 58,
						column: 3
					},
					end: {
						line: 60,
						column: 4
					}
				}, {
					start: {
						line: 58,
						column: 3
					},
					end: {
						line: 60,
						column: 4
					}
				}],
				line: 58
			},
			'10': {
				loc: {
					start: {
						line: 58,
						column: 7
					},
					end: {
						line: 58,
						column: 45
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 58,
						column: 7
					},
					end: {
						line: 58,
						column: 18
					}
				}, {
					start: {
						line: 58,
						column: 22
					},
					end: {
						line: 58,
						column: 45
					}
				}],
				line: 58
			},
			'11': {
				loc: {
					start: {
						line: 62,
						column: 3
					},
					end: {
						line: 64,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 62,
						column: 3
					},
					end: {
						line: 64,
						column: 4
					}
				}, {
					start: {
						line: 62,
						column: 3
					},
					end: {
						line: 64,
						column: 4
					}
				}],
				line: 62
			},
			'12': {
				loc: {
					start: {
						line: 66,
						column: 3
					},
					end: {
						line: 68,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 66,
						column: 3
					},
					end: {
						line: 68,
						column: 4
					}
				}, {
					start: {
						line: 66,
						column: 3
					},
					end: {
						line: 68,
						column: 4
					}
				}],
				line: 66
			},
			'13': {
				loc: {
					start: {
						line: 70,
						column: 3
					},
					end: {
						line: 72,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 70,
						column: 3
					},
					end: {
						line: 72,
						column: 4
					}
				}, {
					start: {
						line: 70,
						column: 3
					},
					end: {
						line: 72,
						column: 4
					}
				}],
				line: 70
			},
			'14': {
				loc: {
					start: {
						line: 74,
						column: 3
					},
					end: {
						line: 76,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 74,
						column: 3
					},
					end: {
						line: 76,
						column: 4
					}
				}, {
					start: {
						line: 74,
						column: 3
					},
					end: {
						line: 76,
						column: 4
					}
				}],
				line: 74
			},
			'15': {
				loc: {
					start: {
						line: 74,
						column: 7
					},
					end: {
						line: 74,
						column: 44
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 74,
						column: 7
					},
					end: {
						line: 74,
						column: 23
					}
				}, {
					start: {
						line: 74,
						column: 27
					},
					end: {
						line: 74,
						column: 44
					}
				}],
				line: 74
			},
			'16': {
				loc: {
					start: {
						line: 81,
						column: 2
					},
					end: {
						line: 83,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 81,
						column: 2
					},
					end: {
						line: 83,
						column: 3
					}
				}, {
					start: {
						line: 81,
						column: 2
					},
					end: {
						line: 83,
						column: 3
					}
				}],
				line: 81
			},
			'17': {
				loc: {
					start: {
						line: 86,
						column: 1
					},
					end: {
						line: 88,
						column: 2
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 86,
						column: 1
					},
					end: {
						line: 88,
						column: 2
					}
				}, {
					start: {
						line: 86,
						column: 1
					},
					end: {
						line: 88,
						column: 2
					}
				}],
				line: 86
			},
			'18': {
				loc: {
					start: {
						line: 97,
						column: 1
					},
					end: {
						line: 99,
						column: 2
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 97,
						column: 1
					},
					end: {
						line: 99,
						column: 2
					}
				}, {
					start: {
						line: 97,
						column: 1
					},
					end: {
						line: 99,
						column: 2
					}
				}],
				line: 97
			},
			'19': {
				loc: {
					start: {
						line: 104,
						column: 2
					},
					end: {
						line: 108,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 104,
						column: 2
					},
					end: {
						line: 108,
						column: 3
					}
				}, {
					start: {
						line: 104,
						column: 2
					},
					end: {
						line: 108,
						column: 3
					}
				}],
				line: 104
			},
			'20': {
				loc: {
					start: {
						line: 112,
						column: 2
					},
					end: {
						line: 114,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 112,
						column: 2
					},
					end: {
						line: 114,
						column: 3
					}
				}, {
					start: {
						line: 112,
						column: 2
					},
					end: {
						line: 114,
						column: 3
					}
				}],
				line: 112
			},
			'21': {
				loc: {
					start: {
						line: 118,
						column: 2
					},
					end: {
						line: 120,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 118,
						column: 2
					},
					end: {
						line: 120,
						column: 3
					}
				}, {
					start: {
						line: 118,
						column: 2
					},
					end: {
						line: 120,
						column: 3
					}
				}],
				line: 118
			},
			'22': {
				loc: {
					start: {
						line: 118,
						column: 6
					},
					end: {
						line: 118,
						column: 51
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 118,
						column: 6
					},
					end: {
						line: 118,
						column: 27
					}
				}, {
					start: {
						line: 118,
						column: 31
					},
					end: {
						line: 118,
						column: 51
					}
				}],
				line: 118
			},
			'23': {
				loc: {
					start: {
						line: 140,
						column: 2
					},
					end: {
						line: 150,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 140,
						column: 2
					},
					end: {
						line: 150,
						column: 3
					}
				}, {
					start: {
						line: 140,
						column: 2
					},
					end: {
						line: 150,
						column: 3
					}
				}],
				line: 140
			},
			'24': {
				loc: {
					start: {
						line: 161,
						column: 2
					},
					end: {
						line: 163,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 161,
						column: 2
					},
					end: {
						line: 163,
						column: 3
					}
				}, {
					start: {
						line: 161,
						column: 2
					},
					end: {
						line: 163,
						column: 3
					}
				}],
				line: 161
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0,
			'33': 0,
			'34': 0,
			'35': 0,
			'36': 0,
			'37': 0,
			'38': 0,
			'39': 0,
			'40': 0,
			'41': 0,
			'42': 0,
			'43': 0,
			'44': 0,
			'45': 0,
			'46': 0,
			'47': 0,
			'48': 0,
			'49': 0,
			'50': 0,
			'51': 0,
			'52': 0,
			'53': 0,
			'54': 0,
			'55': 0,
			'56': 0,
			'57': 0,
			'58': 0,
			'59': 0,
			'60': 0,
			'61': 0,
			'62': 0,
			'63': 0,
			'64': 0,
			'65': 0,
			'66': 0,
			'67': 0,
			'68': 0,
			'69': 0,
			'70': 0,
			'71': 0,
			'72': 0,
			'73': 0,
			'74': 0,
			'75': 0,
			'76': 0,
			'77': 0,
			'78': 0,
			'79': 0,
			'80': 0,
			'81': 0,
			'82': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0],
			'4': [0, 0],
			'5': [0, 0],
			'6': [0, 0],
			'7': [0, 0],
			'8': [0, 0],
			'9': [0, 0],
			'10': [0, 0],
			'11': [0, 0],
			'12': [0, 0],
			'13': [0, 0],
			'14': [0, 0],
			'15': [0, 0],
			'16': [0, 0],
			'17': [0, 0],
			'18': [0, 0],
			'19': [0, 0],
			'20': [0, 0],
			'21': [0, 0],
			'22': [0, 0],
			'23': [0, 0],
			'24': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

const assert = (cov_1ide81xho3.s[0]++, __webpack_require__(4));
const blockConfigs = (cov_1ide81xho3.s[1]++, __webpack_require__(15));
const stages = (cov_1ide81xho3.s[2]++, __webpack_require__(63));
const Board = (cov_1ide81xho3.s[3]++, __webpack_require__(5));
const { arrayEquals, zip } = (cov_1ide81xho3.s[4]++, __webpack_require__(0));

const blockNames = (cov_1ide81xho3.s[5]++, Object.keys(blockConfigs));

// https://github.com/tsg-ut/mnemo/wiki/%E3%82%B9%E3%82%B3%E3%82%A2%E3%81%AE%E4%BB%95%E6%A7%98#%E8%A8%88%E7%AE%97%E5%BC%8F
cov_1ide81xho3.s[6]++;
module.exports.calculateScore = ({ clocks: C, blocks: B, stage }) => {
	cov_1ide81xho3.f[0]++;

	const { clockLimit: C_L, width: W, height: H } = (cov_1ide81xho3.s[7]++, stage);

	const P_C = (cov_1ide81xho3.s[8]++, Math.floor(500 * Math.exp(2 * (H - C) / (C_L - 2 * H) * Math.log(5 / 2))) * 10);
	const P_B = (cov_1ide81xho3.s[9]++, Math.floor(500 * Math.exp((H - B) / (H * (W - 1)) * Math.log(5 / 2))) * 10);

	cov_1ide81xho3.s[10]++;
	return P_C + P_B;
};

cov_1ide81xho3.s[11]++;
module.exports.validateSubmission = submission => {
	cov_1ide81xho3.f[1]++;
	cov_1ide81xho3.s[12]++;

	if (typeof submission.stage !== 'string') {
		cov_1ide81xho3.b[0][0]++;
		cov_1ide81xho3.s[13]++;

		return { pass: false, message: 'stage data is missing' };
	} else {
		cov_1ide81xho3.b[0][1]++;
	}

	const stage = (cov_1ide81xho3.s[14]++, stages.find(s => {
		cov_1ide81xho3.f[2]++;
		cov_1ide81xho3.s[15]++;
		return s.name === submission.stage;
	}));

	cov_1ide81xho3.s[16]++;
	if (typeof stage !== 'object') {
		cov_1ide81xho3.b[1][0]++;
		cov_1ide81xho3.s[17]++;

		return { pass: false, message: 'stage data is invalid' };
	} else {
		cov_1ide81xho3.b[1][1]++;
	}

	cov_1ide81xho3.s[18]++;
	if (!Array.isArray(submission.board)) {
		cov_1ide81xho3.b[2][0]++;
		cov_1ide81xho3.s[19]++;

		return { pass: false, message: 'board should be an array' };
	} else {
		cov_1ide81xho3.b[2][1]++;
	}

	cov_1ide81xho3.s[20]++;
	if (submission.board.length === 0) {
		cov_1ide81xho3.b[3][0]++;
		cov_1ide81xho3.s[21]++;

		return { pass: false, message: 'board must at least have one block' };
	} else {
		cov_1ide81xho3.b[3][1]++;
	}

	let error = (cov_1ide81xho3.s[22]++, null);

	cov_1ide81xho3.s[23]++;
	submission.board.forEach((block, index) => {
		cov_1ide81xho3.f[3]++;

		const message = (cov_1ide81xho3.s[24]++, (() => {
			cov_1ide81xho3.f[4]++;
			cov_1ide81xho3.s[25]++;

			if (!arrayEquals(Object.keys(block), ['x', 'y', 'type', 'rotate'])) {
				cov_1ide81xho3.b[4][0]++;
				cov_1ide81xho3.s[26]++;

				return `keys of block ${index} are invalid`;
			} else {
				cov_1ide81xho3.b[4][1]++;
			}

			cov_1ide81xho3.s[27]++;
			if (!Number.isInteger(block.x)) {
				cov_1ide81xho3.b[5][0]++;
				cov_1ide81xho3.s[28]++;

				return `x position of block ${index} should be an integer`;
			} else {
				cov_1ide81xho3.b[5][1]++;
			}

			cov_1ide81xho3.s[29]++;
			if ((cov_1ide81xho3.b[7][0]++, block.x < 0) || (cov_1ide81xho3.b[7][1]++, stage.width <= block.x)) {
				cov_1ide81xho3.b[6][0]++;
				cov_1ide81xho3.s[30]++;

				return `x position of block ${index} exceeds the board size`;
			} else {
				cov_1ide81xho3.b[6][1]++;
			}

			cov_1ide81xho3.s[31]++;
			if (!Number.isInteger(block.y)) {
				cov_1ide81xho3.b[8][0]++;
				cov_1ide81xho3.s[32]++;

				return `y position of block ${index} should be an integer`;
			} else {
				cov_1ide81xho3.b[8][1]++;
			}

			cov_1ide81xho3.s[33]++;
			if ((cov_1ide81xho3.b[10][0]++, block.y < 0) || (cov_1ide81xho3.b[10][1]++, stage.height <= block.y)) {
				cov_1ide81xho3.b[9][0]++;
				cov_1ide81xho3.s[34]++;

				return `y position of block ${index} exceeds the board size`;
			} else {
				cov_1ide81xho3.b[9][1]++;
			}

			cov_1ide81xho3.s[35]++;
			if (typeof block.type !== 'string') {
				cov_1ide81xho3.b[11][0]++;
				cov_1ide81xho3.s[36]++;

				return `type of block ${index} should be a string`;
			} else {
				cov_1ide81xho3.b[11][1]++;
			}

			cov_1ide81xho3.s[37]++;
			if (!blockNames.includes(block.type)) {
				cov_1ide81xho3.b[12][0]++;
				cov_1ide81xho3.s[38]++;

				return `type of block ${index} is unknown`;
			} else {
				cov_1ide81xho3.b[12][1]++;
			}

			cov_1ide81xho3.s[39]++;
			if (!Number.isInteger(block.rotate)) {
				cov_1ide81xho3.b[13][0]++;
				cov_1ide81xho3.s[40]++;

				return `rotation of block ${index} should be an integer`;
			} else {
				cov_1ide81xho3.b[13][1]++;
			}

			cov_1ide81xho3.s[41]++;
			if ((cov_1ide81xho3.b[15][0]++, block.rotate < 0) || (cov_1ide81xho3.b[15][1]++, 4 <= block.rotate)) {
				cov_1ide81xho3.b[14][0]++;
				cov_1ide81xho3.s[42]++;

				return `rotation of block ${index} is invalid`;
			} else {
				cov_1ide81xho3.b[14][1]++;
			}

			cov_1ide81xho3.s[43]++;
			return null;
		})());

		cov_1ide81xho3.s[44]++;
		if (message !== null) {
			cov_1ide81xho3.b[16][0]++;
			cov_1ide81xho3.s[45]++;

			error = message;
		} else {
			cov_1ide81xho3.b[16][1]++;
		}
	});

	cov_1ide81xho3.s[46]++;
	if (error) {
		cov_1ide81xho3.b[17][0]++;
		cov_1ide81xho3.s[47]++;

		return { pass: false, message: error };
	} else {
		cov_1ide81xho3.b[17][1]++;
	}

	// Validate uniqueness of the block positions
	const positions = (cov_1ide81xho3.s[48]++, new Set());
	cov_1ide81xho3.s[49]++;
	submission.board.forEach(block => {
		cov_1ide81xho3.f[5]++;

		const index = (cov_1ide81xho3.s[50]++, block.y * stage.width + block.x);
		cov_1ide81xho3.s[51]++;
		positions.add(index);
	});

	cov_1ide81xho3.s[52]++;
	if (positions.size !== submission.board.length) {
		cov_1ide81xho3.b[18][0]++;
		cov_1ide81xho3.s[53]++;

		return { pass: false, message: 'positions of blocks are not unique' };
	} else {
		cov_1ide81xho3.b[18][1]++;
	}

	// Validate if the only usable blocks are used
	const blockCounts = (cov_1ide81xho3.s[54]++, new Map());
	cov_1ide81xho3.s[55]++;
	submission.board.forEach(block => {
		cov_1ide81xho3.f[6]++;
		cov_1ide81xho3.s[56]++;

		if (blockCounts.has(block.type)) {
			cov_1ide81xho3.b[19][0]++;
			cov_1ide81xho3.s[57]++;

			blockCounts.set(block.type, blockCounts.get(block.type) + 1);
		} else {
			cov_1ide81xho3.b[19][1]++;
			cov_1ide81xho3.s[58]++;

			blockCounts.set(block.type, 1);
		}
	});

	cov_1ide81xho3.s[59]++;
	for (const [type, count] of blockCounts.entries()) {
		cov_1ide81xho3.s[60]++;

		if (!{}.hasOwnProperty.call(stage.parts, type)) {
			cov_1ide81xho3.b[20][0]++;
			cov_1ide81xho3.s[61]++;

			return { pass: false, message: 'used blocks are not matching to the stage' };
		} else {
			cov_1ide81xho3.b[20][1]++;
		}

		const allowedCount = (cov_1ide81xho3.s[62]++, stage.parts[type]);

		cov_1ide81xho3.s[63]++;
		if ((cov_1ide81xho3.b[22][0]++, allowedCount !== null) && (cov_1ide81xho3.b[22][1]++, count > allowedCount)) {
			cov_1ide81xho3.b[21][0]++;
			cov_1ide81xho3.s[64]++;

			return { pass: false, message: 'used blocks are not matching to the stage' };
		} else {
			cov_1ide81xho3.b[21][1]++;
		}
	}

	// Validate if this passes test cases

	const board = (cov_1ide81xho3.s[65]++, new Board({
		width: stage.width,
		height: stage.height,
		inputX: stage.inputX,
		outputX: stage.outputX,
		clockLimit: stage.clockLimit
	}));

	cov_1ide81xho3.s[66]++;
	submission.board.forEach(block => {
		cov_1ide81xho3.f[7]++;
		cov_1ide81xho3.s[67]++;

		board.placeBlock(block);
	});

	let maxClock = (cov_1ide81xho3.s[68]++, 0);

	const { inputs, outputs } = (cov_1ide81xho3.s[69]++, (() => {
		cov_1ide81xho3.f[8]++;
		cov_1ide81xho3.s[70]++;

		if (stage.ioGenerator) {
			cov_1ide81xho3.b[23][0]++;

			const random = (cov_1ide81xho3.s[71]++, board.getSeededRandom());
			const { input, output } = (cov_1ide81xho3.s[72]++, stage.ioGenerator(random));
			cov_1ide81xho3.s[73]++;
			assert(Array.isArray(input));
			cov_1ide81xho3.s[74]++;
			assert(Array.isArray(output));

			cov_1ide81xho3.s[75]++;
			return {
				inputs: input,
				outputs: output
			};
		} else {
			cov_1ide81xho3.b[23][1]++;
		}

		cov_1ide81xho3.s[76]++;
		return {
			inputs: stage.input,
			outputs: stage.output
		};
	})());

	cov_1ide81xho3.s[77]++;
	for (const [input, output] of zip(inputs, outputs)) {
		cov_1ide81xho3.s[78]++;

		board.run(input);

		cov_1ide81xho3.s[79]++;
		if (board.outputValue !== output) {
			cov_1ide81xho3.b[24][0]++;
			cov_1ide81xho3.s[80]++;

			return { pass: false, message: 'the board cannot clear the stage' };
		} else {
			cov_1ide81xho3.b[24][1]++;
		}

		cov_1ide81xho3.s[81]++;
		maxClock = Math.max(maxClock, board.clock);
	}

	cov_1ide81xho3.s[82]++;
	return { pass: true, clocks: maxClock, blocks: board.weighedBlockCount };
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1uza411nc3 = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/index.js',
	    hash = 'a6243b43e962cb8cc3f4dfb420f7537a8696dadf',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/index.js',
		statementMap: {
			'0': {
				start: {
					line: 3,
					column: 30
				},
				end: {
					line: 3,
					column: 52
				}
			},
			'1': {
				start: {
					line: 5,
					column: 15
				},
				end: {
					line: 56,
					column: 1
				}
			},
			'2': {
				start: {
					line: 59,
					column: 0
				},
				end: {
					line: 67,
					column: 3
				}
			},
			'3': {
				start: {
					line: 60,
					column: 1
				},
				end: {
					line: 62,
					column: 2
				}
			},
			'4': {
				start: {
					line: 61,
					column: 2
				},
				end: {
					line: 61,
					column: 32
				}
			},
			'5': {
				start: {
					line: 64,
					column: 1
				},
				end: {
					line: 64,
					column: 48
				}
			},
			'6': {
				start: {
					line: 66,
					column: 1
				},
				end: {
					line: 66,
					column: 14
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 59,
						column: 28
					},
					end: {
						line: 59,
						column: 29
					}
				},
				loc: {
					start: {
						line: 59,
						column: 39
					},
					end: {
						line: 67,
						column: 1
					}
				},
				line: 59
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 60,
						column: 1
					},
					end: {
						line: 62,
						column: 2
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 60,
						column: 1
					},
					end: {
						line: 62,
						column: 2
					}
				}, {
					start: {
						line: 60,
						column: 1
					},
					end: {
						line: 62,
						column: 2
					}
				}],
				line: 60
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0
		},
		f: {
			'0': 0
		},
		b: {
			'0': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

/* eslint global-require: 'off' */

const { normalizeStageInput } = (cov_1uza411nc3.s[0]++, __webpack_require__(0));

const stages = (cov_1uza411nc3.s[1]++, [__webpack_require__(64), __webpack_require__(65), __webpack_require__(66), __webpack_require__(17), __webpack_require__(67), __webpack_require__(68), __webpack_require__(69), __webpack_require__(70), __webpack_require__(71), __webpack_require__(72), __webpack_require__(73), __webpack_require__(74), __webpack_require__(18), __webpack_require__(19), __webpack_require__(20), __webpack_require__(21), __webpack_require__(22), __webpack_require__(23), __webpack_require__(75), __webpack_require__(76), __webpack_require__(24), __webpack_require__(77), __webpack_require__(25), __webpack_require__(26), __webpack_require__(78), __webpack_require__(79), __webpack_require__(27), __webpack_require__(28), __webpack_require__(80), __webpack_require__(81), __webpack_require__(82), __webpack_require__(83), __webpack_require__(29), __webpack_require__(30), __webpack_require__(84), __webpack_require__(85), __webpack_require__(86), __webpack_require__(31), __webpack_require__(87), __webpack_require__(88), __webpack_require__(89), __webpack_require__(90), __webpack_require__(91), __webpack_require__(92), __webpack_require__(32), __webpack_require__(33), __webpack_require__(34), __webpack_require__(35), __webpack_require__(93), __webpack_require__(36)]);

// Normalize stage data
cov_1uza411nc3.s[2]++;
module.exports = stages.map(stage => {
	cov_1uza411nc3.f[0]++;
	cov_1uza411nc3.s[3]++;

	if (!Array.isArray(stage.inputX)) {
		cov_1uza411nc3.b[0][0]++;
		cov_1uza411nc3.s[4]++;

		stage.inputX = [stage.inputX];
	} else {
		cov_1uza411nc3.b[0][1]++;
	}

	cov_1uza411nc3.s[5]++;
	stage.input = normalizeStageInput(stage.input);

	cov_1uza411nc3.s[6]++;
	return stage;
});

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_12umgttovn = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/wire01.js',
	    hash = 'ef86ef55f2137f1835a8f0bb7a0447d3b49dc0cf',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/wire01.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 21,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_12umgttovn.s[0]++;
module.exports = {
	name: 'wire01',
	version: 4,
	parts: {
		wireI: null
	},
	inputX: 1,
	outputX: 1,
	input: [10],
	output: [10],
	width: 3,
	height: 3,
	clockLimit: 10,
	statement: '入り口と出口をつなげてみよう!',
	title: '練習',
	modal: '01'
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_klnqdnvu1 = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/calc01.js',
	    hash = '6ebf9ff4c6deecac793223fc46ba0b4553c3559a',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/calc01.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 32,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_klnqdnvu1.s[0]++;
module.exports = {
	name: 'calc01',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		'times-2': null,
		'times-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-2': null
	},
	inputX: 1,
	outputX: 1,
	input: [8, 3, 9],
	output: [16, 6, 18],
	width: 3,
	height: 3,
	clockLimit: 10,
	statement: '数を2倍してみよう!',
	title: '四則演算 -基本- 1',
	modal: '02'
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_cpueqa5kc = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/calc02.js',
	    hash = '24a947f20921a43c1ffcfac3fc683f90df0c1f0a',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/calc02.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 29,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_cpueqa5kc.s[0]++;
module.exports = {
	name: 'calc02',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		'plus-1': null,
		'minus-2': null
	},
	inputX: 2,
	outputX: 2,
	input: [8, 15, 10],
	output: [5, 12, 7],
	width: 5,
	height: 5,
	clockLimit: 25,
	statement: '数を3引いてみよう!',
	title: '四則演算 -基本- 2',
	modal: '03'
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_14eviprf84 = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/calc04.js',
	    hash = 'e4465e50623a0e1f683e68160102fe811a2a994b',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/calc04.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 29,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_14eviprf84.s[0]++;
module.exports = {
	name: 'calc04',
	version: 3,
	parts: {
		wireI: null,
		'times-2': null,
		'times-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-2': null
	},
	inputX: 2,
	outputX: 2,
	input: [8, 3, 9],
	output: [19, 9, 21],
	width: 5,
	height: 5,
	clockLimit: 25,
	statement: '数を2倍して、3足してみよう!',
	title: '四則演算 -基本- 4'
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_m0flp0l1e = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/calc05.js',
	    hash = 'ccea92c4d053f6d9b877d6cbcebe77dab5665095',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/calc05.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 26,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_m0flp0l1e.s[0]++;
module.exports = {
	name: 'calc05',
	version: 3,
	parts: {
		wireI: null,
		'times-2': 1,
		'plus-1': 1
	},
	inputX: 2,
	outputX: 2,
	input: [8, 5, 3],
	output: [18, 12, 8],
	width: 5,
	height: 5,
	clockLimit: 25,
	statement: '数を2倍して、2足してみよう!',
	title: '四則演算 -基本- 5'
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2idxozgyc = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/calc06.js',
	    hash = '2c2883d0aae2ca97926f56cf4c90305fcded32ed',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/calc06.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 28,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_2idxozgyc.s[0]++;
module.exports = {
	name: 'calc06',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		add: null
	},
	inputX: 1,
	outputX: 1,
	input: [8, 3, 9],
	output: [16, 6, 18],
	width: 3,
	height: 2,
	clockLimit: 10,
	statement: '数を2倍してみよう!',
	title: '四則演算 -基本- 6',
	modal: '04'
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2o4gxgiftx = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/make-minus-one-easy.js',
	    hash = '62cfe94c9e6c49e614ab88e39e5fa76681258e3e',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/make-minus-one-easy.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 36,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_2o4gxgiftx.s[0]++;
module.exports = {
	name: 'make-minus-one-easy',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		'times-2': null,
		'times-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		add: null,
		sub: null,
		div: null,
		mul: null
	},
	inputX: 2,
	outputX: 2,
	input: [6, 28, 496],
	output: [-1, -1, -1],
	width: 5,
	height: 5,
	clockLimit: 25,
	statement: '四則演算を組み合わせてどの入力に対しても、-1を出力するような回路を作ってみよう',
	title: '-1を作ろう -easy-'
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2kzntuudvu = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/division-easy.js',
	    hash = '6dbaa5fc1832c42aecb19c8c058279655b8304ad',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/division-easy.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 36,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_2kzntuudvu.s[0]++;
module.exports = {
	name: 'division-easy',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		'times-2': null,
		'times-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		add: null,
		sub: null,
		div: null,
		mul: null
	},
	inputX: 2,
	outputX: 2,
	input: [8, 18, 6],
	output: [4, 9, 3],
	width: 5,
	height: 5,
	clockLimit: 25,
	statement: '➗ブロックをうまく使って、数を2で割ってみよう!',
	title: '割り算 -easy-'
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_18vxx4z1yc = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/sixth-power.js',
	    hash = 'e3f73a0cbf9f7896d0112d06b48ee36b649cd263',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/sixth-power.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 36,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_18vxx4z1yc.s[0]++;
module.exports = {
	name: 'sixth-power',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		'times-2': null,
		'times-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		add: null,
		sub: null,
		div: null,
		mul: null
	},
	inputX: 2,
	outputX: 2,
	input: [2, 3, 5],
	output: [64, 729, 15625],
	width: 5,
	height: 5,
	clockLimit: 25,
	statement: '✖️ブロックをうまく配置して、6乗を計算してみよう!',
	title: '6乗'
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2hps3u8q9p = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/remainder.js',
	    hash = 'd5dc0b91450e54298187ae576bcffb15529ced5b',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/remainder.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 36,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_2hps3u8q9p.s[0]++;
module.exports = {
	name: 'remainder',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		'times-2': null,
		'times-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		add: null,
		sub: null,
		div: null,
		mul: null
	},
	inputX: 2,
	outputX: 2,
	input: [8, 13, 39],
	output: [8, 3, 9],
	width: 5,
	height: 10,
	clockLimit: 50,
	statement: '10で割った余りを求めてみよう!',
	title: '余りの計算'
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_238r8wzuy7 = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/plus-32.js',
	    hash = '802df3a1a8a2e3c319b1a71cb6c59f12db588fb3',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/plus-32.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 36,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_238r8wzuy7.s[0]++;
module.exports = {
	name: 'plus-32',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		'times-2': null,
		'times-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		add: null,
		sub: null,
		div: null,
		mul: null
	},
	inputX: 2,
	outputX: 2,
	input: [6, 28, 496],
	output: [38, 60, 528],
	width: 5,
	height: 8,
	clockLimit: 50,
	statement: '演算子をうまく配置して、32を足してみよう!',
	title: '32を足してみよう'
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_b9e7dsgs3 = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/bivariation01.js',
	    hash = 'c64382959c4880e081ac4e7a0df1e3df9491756a',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/bivariation01.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 52,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_b9e7dsgs3.s[0]++;
module.exports = {
	name: 'bivariation01',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		'times-2': null,
		'times-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-2': null,
		equal: null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		'c-contact': null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: [1, 3],
	outputX: 2,
	input: [[3, 2], [13, 21], [9, 4]],
	output: [5, 34, 13],
	width: 5,
	height: 5,
	clockLimit: 25,
	statement: '2つの数字が与えられるのでそれらを足しあわせた結果を出力してみよう!',
	title: '2変数 -基本-'
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1quzrp044e = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/power-easy.js',
	    hash = '97d6db9c040fcf8fd5f5f4487625e819b536ce26',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/power-easy.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 60,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_1quzrp044e.s[0]++;
module.exports = {
	name: 'power-easy',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'times-2': null,
		'times-3': null,
		'div-2': null,
		'div-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		equal: null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		mod: null,
		'c-contact': null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: [3, 5],
	outputX: 4,
	input: [[3, 2], [4, 4], [-7, 5]],
	output: [9, 256, -16807],
	width: 9,
	height: 9,
	clockLimit: 200,
	statement: '1つ目に与えられた数を2つ目に与えられた数乗してみよう!',
	title: '累乗 -easy-'
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_140iedwnrg = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/division-hard.js',
	    hash = '8af380474920f5e254c0a74ac5a9ccafc988b451',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/division-hard.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 42,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_140iedwnrg.s[0]++;
module.exports = {
	name: 'division-hard',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		add: null,
		sub: null,
		div: null,
		mul: null
	},
	inputX: [1, 3],
	outputX: 2,
	input: [[3, 6], [71, 7597], [-13, 117]],
	output: [2, 107, -9],
	width: 5,
	height: 5,
	clockLimit: 25,
	statement: '右の数を左の数で割ってみよう!',
	title: '割り算 -hard-'
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_4stdjky1n = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/make-minus-one-med.js',
	    hash = '69a169948ba4fe24fa7d6aa1262036c95c51e7e4',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/make-minus-one-med.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 33,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_4stdjky1n.s[0]++;
module.exports = {
	name: 'make-minus-one-med',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		'times-2': null,
		'times-3': null,
		'plus-1': null,
		'plus-2': null,
		equal: null,
		add: null,
		mul: null
	},
	inputX: 2,
	outputX: 2,
	input: [-1, -2, -3],
	output: [-1, -1, -1],
	width: 5,
	height: 10,
	clockLimit: 50,
	statement: 'より少ない演算子で入力全てを-1に出力する回路を作ろう（一般的でなく、入力全てさえ正解すれば良い）',
	title: '-1を作ろう -med-'
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2j5gm6u5fl = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/make-minus-one-hard.js',
	    hash = '96c9fad4fc76593733a2c36c60cf97b1ff13d503',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/make-minus-one-hard.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 34,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_2j5gm6u5fl.s[0]++;
module.exports = {
	name: 'make-minus-one-hard',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'plus-1': null,
		equal: null,
		add: null,
		'c-contact': null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: 3,
	outputX: 3,
	input: [3, 5, 2],
	output: [2, 4, 1],
	width: 7,
	height: 9,
	clockLimit: 500,
	statement: '入力の値から1引いた値を出力してみよう!',
	title: '-1を作ろう -hard-'
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2d89ubgmcx = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/complement-of-2.js',
	    hash = 'c16b133cf31f57389fac240615fc6fdf92e9f21b',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/complement-of-2.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 59,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_2d89ubgmcx.s[0]++;
module.exports = {
	name: 'complement-of-2',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'times-2': null,
		'times-3': null,
		'div-2': null,
		'div-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		mod: null,
		pow: null,
		'bitshift-left': null,
		'bitshift-right': null,
		'bitwise-and': null,
		'bitwise-or': null,
		'bitwise-xor': null,
		equal: null,
		neq: null,
		gt: null,
		geqq: null,
		lt: null,
		leqq: null,
		'c-contact': null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: 3,
	outputX: 3,
	input: [1, 64, 127],
	output: [255, 192, 129],
	width: 7,
	height: 7,
	clockLimit: 50,
	statement: '8bitの2の補数を計算してみよう!',
	title: '2の補数'
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2f7v9ew9ao = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/binarian-easy.js',
	    hash = '09e82177b075bcb8baeea8c40b3d4a476e6072f3',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/binarian-easy.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 59,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_2f7v9ew9ao.s[0]++;
module.exports = {
	name: 'binarian-easy',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'times-2': null,
		'times-3': null,
		'div-2': null,
		'div-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		mod: null,
		pow: null,
		'bitshift-left': null,
		'bitshift-right': null,
		'bitwise-and': null,
		'bitwise-or': null,
		'bitwise-xor': null,
		equal: null,
		neq: null,
		gt: null,
		geqq: null,
		lt: null,
		leqq: null,
		'c-contact': null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: 7,
	outputX: 7,
	input: [3, 2016, 65535],
	output: [11, 11111100000, 1111111111111111],
	width: 15,
	height: 15,
	clockLimit: 500,
	statement: '数をバイナリ表記にしてみよう!',
	title: 'バイナリアン -easy-'
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_wur5txvdu = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/perfect-number.js',
	    hash = 'd560c6569f8545f960fa20efec6c5cf3cc0f2fa6',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/perfect-number.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 59,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_wur5txvdu.s[0]++;
module.exports = {
	name: 'perfect-number',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'times-2': null,
		'times-3': null,
		'div-2': null,
		'div-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		mod: null,
		pow: null,
		'bitshift-left': null,
		'bitshift-right': null,
		'bitwise-and': null,
		'bitwise-or': null,
		'bitwise-xor': null,
		equal: null,
		neq: null,
		gt: null,
		geqq: null,
		lt: null,
		leqq: null,
		'c-contact': null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: 2,
	outputX: 2,
	input: [3, 31, 8191],
	output: [6, 496, 33550336],
	width: 5,
	height: 5,
	clockLimit: 100,
	statement: 'メルセンヌ素数と完全数の関係を考えてみよう!',
	title: '完全数'
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1x1bcvw9ri = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/reversal.js',
	    hash = '6b5b4c35b616b0b90ed81c8fe04aa755b7152eb2',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/reversal.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 59,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_1x1bcvw9ri.s[0]++;
module.exports = {
	name: 'reversal',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'times-2': null,
		'times-3': null,
		'div-2': null,
		'div-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		mod: null,
		pow: null,
		'bitshift-left': null,
		'bitshift-right': null,
		'bitwise-and': null,
		'bitwise-or': null,
		'bitwise-xor': null,
		equal: null,
		neq: null,
		gt: null,
		geqq: null,
		lt: null,
		leqq: null,
		'c-contact': null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: 7,
	outputX: 7,
	input: [2016, 111111, 123456789],
	output: [6102, 111111, 987654321],
	width: 15,
	height: 15,
	clockLimit: 500,
	statement: '数を反転してみよう!',
	title: '反転'
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_10qn030blw = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/seq01.js',
	    hash = '398d7bfd2660a829fd1833650565c1e9a067b002',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/seq01.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 107,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_10qn030blw.s[0]++;
module.exports = {
	name: 'seq01',
	version: 1,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'const-0': null,
		'minus-1': null,
		add: null,
		equal: null,
		neq: null,
		gt: null,
		geqq: null,
		lt: null,
		leqq: null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: [4, 6],
	outputX: 5,
	input: [[3, [1, 2, 3]], [4, [3, 2, 1, 3]], [10, [68, 11, 85, 53, 14, 96, 88, 61, 21, 57]], [30, [26, 23, 43, 48, 2, 7, 16, 69, 16, 3, 41, 3, 17, 39, 98, 65, 77, 52, 89, 31, 37, 49, 15, 46, 2, 53, 74, 83, 8, 93]]],
	output: [6, 9, 554, 1225],
	width: 11,
	height: 11,
	clockLimit: 500,
	statement: '配列の値を全て足してみよう',
	title: '配列 -基本- 1'
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_o24lrekon = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/seq02.js',
	    hash = '39b4b7cb09f093d38db92d38b6421b63eecf9f12',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/seq02.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 107,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_o24lrekon.s[0]++;
module.exports = {
	name: 'seq02',
	version: 1,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'const-0': null,
		'minus-1': null,
		equal: null,
		neq: null,
		gt: null,
		geqq: null,
		lt: null,
		leqq: null,
		'c-contact': null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: [4, 6],
	outputX: 5,
	input: [[3, [1, 2, 3]], [4, [3, 2, 1, 3]], [10, [68, 11, 85, 53, 14, 96, 88, 61, 21, 57]], [30, [26, 23, 43, 48, 2, 7, 16, 69, 16, 3, 41, 3, 17, 39, 98, 65, 77, 52, 89, 31, 37, 49, 15, 46, 2, 53, 74, 83, 8, 93]]],
	output: [3, 3, 57, 93],
	width: 11,
	height: 11,
	clockLimit: 500,
	statement: '配列の一番最後の値を取り出してみよう!',
	title: '配列 -基本- 2'
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_quas8j5p9 = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/max.js',
	    hash = '1cfab18361751ada8ad3e4d82d60ef456cfdd002',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/max.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 107,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_quas8j5p9.s[0]++;
module.exports = {
	name: 'max',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'const-0': null,
		'minus-1': null,
		equal: null,
		neq: null,
		gt: null,
		geqq: null,
		lt: null,
		leqq: null,
		'c-contact': null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: [4, 6],
	outputX: 5,
	input: [[3, [1, 2, 3]], [4, [3, 2, 1, 3]], [10, [68, 11, 85, 53, 14, 96, 88, 61, 21, 57]], [30, [26, 23, 43, 48, 2, 7, 16, 69, 16, 3, 41, 3, 17, 39, 98, 65, 77, 52, 89, 31, 37, 49, 15, 46, 2, 53, 74, 83, 8, 93]]],
	output: [3, 3, 96, 98],
	width: 11,
	height: 11,
	clockLimit: 500,
	statement: '与えられた配列の最大値を求めてみよう',
	title: '最大値'
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_4vvqodiv8 = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/100.js',
	    hash = '45f7bf76dd3b39e17bf31e6d9348f0208f489314',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/100.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 28,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_4vvqodiv8.s[0]++;
module.exports = {
	name: '100',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		equal: null,
		add: null
	},
	inputX: 4,
	outputX: 4,
	input: [10, 0, -1],
	output: [100, 100, 100],
	width: 9,
	height: 8,
	clockLimit: 100,
	statement: '100を作ろう!',
	title: '100'
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_24yfjphz2h = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/100-again.js',
	    hash = 'b95aadc7a56c324b1d873e5da2932c647d2771de',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/100-again.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 31,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_24yfjphz2h.s[0]++;
module.exports = {
	name: '100-again',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		'times-2': null,
		'const-1': null,
		add: null,
		sub: null,
		mul: null
	},
	inputX: 2,
	outputX: 2,
	input: [-1, 10, 1],
	output: [100, 100, 100],
	width: 5,
	height: 5,
	clockLimit: 25,
	statement: '100を作ろう!',
	title: '100再び'
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_114bz4l7d5 = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/1000.js',
	    hash = '5d9594223d4cbef98f55f71193b26e2af500b4f0',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/1000.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 31,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_114bz4l7d5.s[0]++;
module.exports = {
	name: '1000',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		'times-2': null,
		'const-1': null,
		add: null,
		sub: null,
		mul: null
	},
	inputX: 2,
	outputX: 2,
	input: [-1, 10, 1],
	output: [1000, 1000, 1000],
	width: 5,
	height: 5,
	clockLimit: 25,
	statement: '1000を作ろう!',
	title: '1000'
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2a0imki9bq = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/plus-32-hard.js',
	    hash = '09c19f2d65302fd932d85c952f865fb04dec3f27',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/plus-32-hard.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 34,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_2a0imki9bq.s[0]++;
module.exports = {
	name: 'plus-32-hard',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		'times-2': null,
		'times-3': null,
		'plus-1': null,
		'plus-2': null,
		add: null,
		sub: null,
		div: null,
		mul: null
	},
	inputX: 1,
	outputX: 1,
	input: [6, 28, 496],
	output: [38, 60, 528],
	width: 3,
	height: 6,
	clockLimit: 50,
	statement: '演算子をうまく配置して、32を足してみよう!',
	title: '32を足してみよう-hard-'
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2ej8700sp3 = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/xor.js',
	    hash = 'f2376c038bca891d2ecbd4a81041931020c6d169',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/xor.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 46,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_2ej8700sp3.s[0]++;
module.exports = {
	name: 'xor',
	version: 2,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		wireXdot: null,
		nand: null
	},
	inputX: [1, 3],
	outputX: 2,
	input: [[0, 0], [0, 1], [1, 0], [1, 1]],
	output: [0, 1, 1, 0],
	width: 5,
	height: 5,
	clockLimit: 25,
	statement: 'XORを作ろう!',
	title: 'XOR'
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_16asdszbhq = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/2017.js',
	    hash = 'b063c60b158b8497913db5954b730a764dddc4f2',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/2017.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 27,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_16asdszbhq.s[0]++;
module.exports = {
	name: '2017',
	version: 2,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		wireXdot: null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		add: null,
		sub: null,
		mul: null,
		div: null
	},
	inputX: 4,
	outputX: 4,
	input: [2, 0, 1, 7],
	output: [2017, 2017, 2017, 2017],
	width: 9,
	height: 9,
	clockLimit: 50,
	statement: '2017を作ろう!',
	title: '2017'
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1qfnbzznti = function () {
	var path = '/home/travis/build/tsg-ut/mnemo/stages/addition-med.js',
	    hash = '5946012b822e627e8cde6a28702df265105bd5ff',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/travis/build/tsg-ut/mnemo/stages/addition-med.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 46,
					column: 2
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_1qfnbzznti.s[0]++;
module.exports = {
	name: 'addition-med',
	version: 1,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		wireXdot: null,
		'times-2': null,
		'times-3': null,
		'div-2': null,
		'div-3': null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		'const-3': null,
		equal: null,
		gt: null,
		lt: null,
		div: null,
		mul: null,
		pow: null,
		log: null,
		conditional: null,
		transistor: null,
		diode: null
	},
	inputX: [2, 4],
	outputX: 3,
	input: [[1, 2], [8, 3], [33, 4]],
	output: [3, 11, 37],
	width: 7,
	height: 7,
	clockLimit: 100,
	statement: '2つの正の数を足しあわせてみよう！',
	title: '足し算 -med-'
};

/***/ })
/******/ ]);
//# sourceMappingURL=fb899a75c53811cdcbb0f88a6a440fd6-output.js.map