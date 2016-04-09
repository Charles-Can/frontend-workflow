import Index from './index';

it('Tests the index js file', ()=>{
  let value = 'I\'m testing...';
  let index = new Index( value );

  expect( index._val ).toEqual( value );
});
