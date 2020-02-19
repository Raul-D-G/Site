const http = require('http');
const fs = require('fs');
const json = require('./data.json');
var file;


// var arr = decodeURIComponent(data).replace('[{"name":"first_name","value"', '').replace('}', '')
// 				.replace('{"name":"mail","value"', '').replace('}', '').replace('{"name":"mesg","value"', '').replace('}', '').replace(']', '').split(',');


const server = http.createServer(function (req, res) {
	let file
	if (req.method === 'POST') {
		req.on('data', (data) => {
			//console.log(JSON.parse(decodeURIComponent(data)));
			var arr = JSON.parse(decodeURIComponent(data));
			var node = json.head;
			var next;

			while (node) {
				next = node.head;

				if (node.head == null) {
					node.head = { name: arr[0], email: arr[1], message: arr[2], head: null };

					/**********WRITES THE NEW JSON TO THE JSON FILE****************/
					fs.writeFile('./form.json', JSON.stringify(json, null, 2), (err) => {
						if (err) {
							throw err;
						}
					});
					break;
				}
				else {
					node = next;
				}
			}

		});
	}

res.writeHead(200, { 'content-type': 'text/html' });
res.write('asas');
res.end();

}).listen(7000, () => { console.log('Server running on 7000'); });