(function(){

  if( process.env.hasOwnProperty('PROD') && process.env.PROD === 'true' ){
    console.log( 'Running in production mode...' );
  }else{
    process.env.PROD = false;
    console.log( 'Running in developement mode...' );
  }

})();
