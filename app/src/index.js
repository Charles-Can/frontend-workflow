export default class IndexTest {

  constructor( val ){
    this._val = val;
    this.runTest();
  }

  runTest(){
    console.log( this._val );
  }

}

new IndexTest('Webpack is working!');
