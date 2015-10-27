#!/usr/bin/env node
var pretty = require('./index.js');
var tester = {
	id: 123,
	name: "rainy",
	verylongkeyword: [1,2,3,4],
	posts: [
		{
			pid: 456,
			title: "very long title!",
		},
		{
			pid: 789,
			title: "json pretty",
		}
	],
	content: {
		name: {
			1: "OK",
			2: "ERROR",
		}
	}
}
console.log(pretty.render(tester));
