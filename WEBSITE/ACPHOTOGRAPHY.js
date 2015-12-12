
//clock//
function Time()
{

	var date=new Date();

  var hours=date.getHours();
	var minutes=date.getMinutes();
	var seconds=date.getSeconds();

	minutes=addZero(minutes);
	seconds=addZero(seconds);

	document.getElementById('clock').innerHTML=hours+":"+minutes+":"+seconds;

	clock=setTimeout(function(){Time()},500);
}


function addZero(digit)
{

	if (digit<=9)
	  {

		digit="0" + digit;
	  }

	return digit;
}
//end clock//
