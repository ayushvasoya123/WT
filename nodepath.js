const path = require("path");

const normalize = path.normalize("C:\\Program Files\\Android\\Android Studio\\bin\\lldb\\helpers\\renderers")
console.log(normalize);

const dirName = path.dirname("C:\\Program Files\\Android\\Android Studio\\bin\\lldb\\helpers\\renderers");
console.log(dirName);

const basename = path.basename("C:\\Program Files\\Android\\Android Studio\\bin\\lldb\\helpers\\renderers")
console.log(basename);

const extname = path.extname("C:\\Program Files\\Android\\Android Studio\\bin\\lldb\\helpers\\renderers\\nodepath.js")
console.log(extname);

// const delimiter = path.delimiter("C:\\Program Files\\Android\\Android Studio\\bin\\lldb\\helpers\\renderers")
// console.log(delimiter);



const joinpath = path.join("C:\\Program Files\\Android\\Android Studio\\bin\\lldb\\helpers\\renderers","abc.pdf");
console.log(joinpath);

const parthformate =path.format({
  root: '/ignored',
  dir: '/home/user/dir',
  base: 'file.txt',
});
console.log(parthformate);


const relative = path.relative("C:\\Program Files\\Android\\Android Studio\\bin\\lldb\\helpers\\renderers","file:\\C:/Users\\student\\Downloads\\bin\\lldb\\helpers\\renderers")
console.log(relative);

const relative1 = path.relative('/abc/pqr','abc/xyz');
console.log(relative1);
