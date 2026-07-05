const fs = require('fs');
const file = 'public/assets/css/bootstrap.min.css';
let css = fs.readFileSync(file, 'utf8');

const classes = ['com', 'dropdown-toggle', 'valid-tooltip', 'valid-feedback', 'invalid-tooltip', 'invalid-feedback', 'nav', 'breadcrumb', 'border-white'];

classes.forEach(c => {
    // This simple regex matches .classname followed by anything except { or } up to { ... }
    const regex = new RegExp(`\\.${c}[\\s,:>][^{}]*\\{[^{}]*\\}|\\.${c}\\{[^{}]*\\}`, 'g');
    css = css.replace(regex, '');
});

fs.writeFileSync(file, css);
console.log('Cleaned up remaining unused bootstrap classes');
