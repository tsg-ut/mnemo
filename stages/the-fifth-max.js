module.exports = {
	"name": "the-fifth-max",
	"version": 2,
	"parts": {
		"wireI": null,
		"wireL": null,
		"wireT": null,
		"wireX": null,
		"times-2": null,
		"times-3": null,
		"times-10": null,
		"div-2": null,
		"div-3": null,
		"div-10": null,
		"plus-1": null,
		"plus-2": null,
		"minus-1": null,
		"minus-2": null,
		"log10": null,
		"log2": null,
		"const-0": null,
		"const-1": null,
		"const-2": null,
		"const-3": null,
		"const-10": null,
		"add": null,
		"sub": null,
		"div": null,
		"mul": null,
		"mod": null,
		"pow": null,
		"log": null,
		"bitshift-left": null,
		"bitshift-right": null,
		"bitwise-and": null,
		"bitwise-or": null,
		"bitwise-xor": null,
		"equal": null,
		"neq": null,
		"gt": null,
		"geqq": null,
		"lt": null,
		"leqq": null,
		"c-contact": null,
		"conditional": null,
		"transistor": null,
		"diode": null
	},
	"inputX": [
		14,
		16
	],
	"outputX": 15,
	"input": [
		[
			5,
			[
				1,
				2,
				3,
				4,
				5
			]
		],
		[
			5,
			[
				0,
				1,
				-1,
				2,
				-2
			]
		],
		[
			7,
			[
				51,
				90,
				20,
				30,
				1,
				60,
				81
			]
		],
		[
			7,
			[
				67,
				90,
				46,
				99,
				59,
				23,
				66
			]
		],
		[
			7,
			[
				22,
				89,
				48,
				20,
				88,
				39,
				22
			]
		]
	],
	"output": [
		3,
		0,
		51,
		66,
		39
	],
	"width": 31,
	"height": 31,
	"clockLimit": 2000,
	"statement": "与えられた配列の中央値を求めてみよう。ただし、配列の大きさは奇数であり、また中央値はただ一つであることが保証されている。",
	"title": "中央値"
};