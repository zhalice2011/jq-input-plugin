var fs  = require('fs'); 
var jsp = require("./uglify-js").parser;
var pro = require("./uglify-js").uglify;

// 读取一个文件，压缩之
function buildOne(flieIn, fileOut) {
	var origCode = fs.readFileSync(flieIn, 'utf8');
	var ast = jsp.parse(origCode); 
		ast = pro.ast_mangle(ast); 
		ast = pro.ast_squeeze(ast);
		
	var finalCode = pro.gen_code(ast);
	
	fs.writeFileSync(fileOut, finalCode, 'utf8');
}

//buildOne('ajax-1.0.js', 'ajax-min.js');
//buildOne('jquery.autocomplete.common.js', 'jquery.autocomplete.common..min.js');

buildOne('all.js', 'all.min.js');

buildOne('all.compatible.js', 'all.compatible.min.js');

