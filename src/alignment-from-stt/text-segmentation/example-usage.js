"use strict";
const fs = require('fs');
var textSegmentation = require('./index.js');
// var sampleText  =`Hi there, my name is Mr. Ian police - are recording this video to talk about mercury for the folks at a tech daily conference in New York. Sorry, I can't be there in person, so we are building a prototype funded in part by Google DNI of a web-based computer, assisted transcription and translation tool with some video editing features. It does speech to text and then automated consistent translation and then text to speech generate synthetic voices at time codes that line up with the original original audio.`;
const sampleText = fs.readFileSync('./sample-data/human-transcription-on-one-line.txt').toString();


// var expectedOutput = `Hi there, my name is Mr. Ian police - are recording this video to talk about mercury for the folks at a tech daily conference in New York.
// Sorry, I can't be there in person, so we are building a prototype funded in part by Google DNI of a web-based computer, assisted transcription and translation tool with some video editing features.
// It does speech to text and then automated consistent translation and then text to speech generate synthetic voices at time codes that line up with the original original audio.`;

var optionalHonorificsSample = "Mr";

// test('add line break between sentences', () => {
	var result = textSegmentation(sampleText);
  	// expect(result).toBe(expectedOutput);
// });

console.log(result);


// test('add line break between sentences,with optional honorifics', () => {
	// var result = textSegmentation(sampleText, optionalHonorificsSample);
  	// expect(result).toBe(expectedOutput);
// });
