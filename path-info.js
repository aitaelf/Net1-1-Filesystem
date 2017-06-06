const fs = require('fs');
const conf = { enconing: 'utf8' };

module.exports = (path, callback) => {
	
	fs.readdir(path, (err, files) => {
		
		if(err) {
		
			fs.readFile(path, conf, (err, content) => {
				if(err) throw err;
				callback(null, {
					path: path,
					type: 'file',
					content: content.toString()
				});
			});
		
		} else {
			
			callback(null, {
				path: path,
				type: 'directory', 
				childs: files
			});
			
		}
	});
}

function isFile(path, callback) {
	fs.readFile(path, conf, (err, content) => {
		if(err) {
			console.error(err);
			callback(err);
		} else {
			console.log('isFile');
			callback(null, {
				type: 'file',
				content: content
			});
		}
	});
}

function isDir(path, callback) {
	fs.readdir(path, (err, files) => {
		if(err) return err;
		return {
			type: 'directory',
			childs: files
		}
	});
}

function isError() {
	console.log('Error');
	return {
		type: undefined,
		content: undefined,
		childs: undefined
	};
}