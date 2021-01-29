function convert(x) {
switch(typeof x) {
case 'number':
return x.toString(16);
case 'strig':
return '"' + X + '"';
default:
return string(x);
}
}
convert(x);

