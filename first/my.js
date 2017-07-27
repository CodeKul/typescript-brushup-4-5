var name = 'android';
console.log(name);

var mobiles = [
    'Android',
    'iOS',
    'Samsung',
    'Windows'
];

for (i = 0; i < mobiles.length; i++) {
    console.log(mobiles[i]);
}

function myCall() {
    console.log('My Call Called');
}

myCall();

var jsObj = {
    name: 'Android',
    age: 7,
    apps : function() {
        console.log('apps called');
    }
};

console.log('Name is '+jsObj.name);
console.log('Age is '+jsObj.age);
jsObj.apps();