function genQr()
{
var gapi="https://api.qrserver.com/v1/create-qr-code/?size= "
var myimg=document.querySelector("#img")
var mytext=document.querySelector("#qrtext").value
var mysize=document.querySelector("#size").value

if(mytext!=="" && mysize=="100")
{
    myimg.src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data="+mytext;
   // https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=hello
}
else if(mytext!==""&& mysize==150)
{
    myimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+mytext;
    // myimg.src=gapi+"150x150"+"&data="+mytext;

}
else if(mytext!==""&& mysize==200)
    {
        myimg.src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+mytext;
    
    }
else if(mytext!==""&& mysize==250)
    {
        myimg.src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="+mytext;
        
    }
else if(mytext!==""&& mysize==300)
    {
        myimg.src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data="+mytext;
            
    }
else
{
    alert("invalid")
}
}

