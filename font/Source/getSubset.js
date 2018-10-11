// Generate subset codes to be used with https://github.com/briangonzalez/fontprep
var
	getSubset = function(text) {
		var
			ret = [],
			code,
			i, iMax;
		for(i = 0, iMax = text.length; i< iMax; i++) {
			if(text[i].charCodeAt(0) < 33) {
				continue;
			}
			code = "0x" + text[i].charCodeAt(0).toString(16);
			if(ret.indexOf(code) === -1) {
				ret.push(code);
			}
		}
		return ret.join(", ");
	};
getSubset("Hi there, I’m Stefano Peloso. You can get in touch at hello@stefano.io. Trust me, I’m a panda.™");
getSubset("I solve problems by combining technical knowledge with creative thinking. I’m a passionate and quick learner, always looking for the next challenge and for something new to create. As a little boy I used to figure my future self as a mad scientist, but I then discovered that creating web stuff is much more fun than building death rays. I live mainly in northern Italy and in my spare time I like to write, learn things, and do panda stuff.");