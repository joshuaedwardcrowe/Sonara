const Program = require('./modules/Program');
const myProgram = new Program();

myProgram.createParent({
    width: 1500,
    height: 1000,
    backgroundColor: '#FFFFFF'
})
.then(parentWindow => {

    parentWindow.loadURL(`file://${__dirname}/public/index.html`)

});