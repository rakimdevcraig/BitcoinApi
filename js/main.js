var apiURL = 'https://blockchain.info/ticker';
var apiURL2 = 'https://api.coinmarketcap.com/v2/ticker/';
//var apiKey = 'fZIebfEkrMUVnMG9jcziQmLNYMhDwZ';
var currency = 0;
var invest = 0;
var price = 0;
var value = 0;
var usd = 0;

function bitcoin(){
  value = invest / price
  console.log(value)
};
$('#convert').on('click', function(){
  currency = $('select').val();
  invest = $('#money').val();
  $('span').remove()
  $.ajax({
    url: apiURL,
    success: function(res){
      console.log(res);
      price = res[currency].buy
      bitcoin();
      options( value * res['USD'].sell )
      console.log( value * res['USD'].sell )
    },
    error: function(er){
      console.log(er);
    },
  });
});

function options(usd){
  $.ajax({
    url: apiURL2,
    success: function(r){
      console.log(r);
      console.log(r.data[1].quotes.USD.price)
      var btc = usd / r.data[1].quotes.USD.price
      $('.BTC').append('<span>' + btc + '</span>')
      var xrp = usd / r.data[52].quotes.USD.price
      $('.XRP').append('<span>' + xrp + '</span>')
      var ltc = usd / r.data[2].quotes.USD.price
      $('.LTC').append('<span>' + ltc + '</span>')
      var eth = usd / r.data[1027].quotes.USD.price
      $('.ETH').append('<span>' + eth + '</span>')
      console.log(btc)
      console.log(xrp)
      console.log(ltc)
      console.log(eth)
    },
    error: function(err){
      console.log(err)
    },
  });
};
