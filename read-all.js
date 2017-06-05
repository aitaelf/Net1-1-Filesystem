const fs = require('fs');
const conf = { enconing: 'utf8' };

module.exports = (path) => {
	return new Promise((done, fail) => {
		fs.readdir(path, (err, files) => {
			if(err) {
				fail(err);
			} else {
				let result = [];
				files.forEach(file => {
					result.push(readFile(path + file));
				});
				done(Promise.all(result));
			}
		});
	});
}

function readFile(file) {
	return new Promise((done, fail) => {
		fs.readFile(file, conf, (err, content) => {
			if (err) {
				fail(err);
			} else {
				done( { name: file, content: content.toString()} );
			}
		});
	});
}