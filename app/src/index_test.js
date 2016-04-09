import IndexTest from './index';

it('Tests the index js file', ()=>{
  let value = 'I\'m testing...';
  let index = new IndexTest( value );

  expect( index._val ).toEqual( value );
});
