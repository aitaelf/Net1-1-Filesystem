const fs = require('fs');
const conf = { enconing: 'utf8' };

let read = (file) => {
	return new Promise((done, fail) => {
		fs.readFile(file, conf, (err, content) => {
			if(err) {
				fail(err);
			} else {
				done(content.toString());
			}
		})	
	})
	
}

let write = (file, data) => {
	return new Promise((done, fail) => {
		fs.writeFile(file, data, err => {
			if (err) {
				fail(err);
			} else {
				done(file);
			}
		})	
	})
	
}

module.exports = {
	read,
	write
}