timer=0;
function s()
{
    document.getElementById("bb").style.display="inline-block";
    setInterval(function(){
        if(timer<5)
            {
                timer=timer+1;
                document.getElementById("timer").innerHTML=timer;
            }
    },1000)

}
click=0;
function c()
{
    if(timer==5)
        {
            document.getElementById("bb").style.display="none";
            if(click>30)
                {
                    document.getElementById("img").src="usain.gif";
                    document.getElementById("h5").innerHTML="fast enough";
                }
                if(click>15&&click<=30)
                    {
                        document.getElementById("img").src="baby.gif";
                        document.getElementById("h5").innerHTML="not too slow no too fast";
                    }
                    if(click<=15)
                     {
                            document.getElementById("img").src="turtle.gif";
                            document.getElementById("h5").innerHTML="too slow";
                        }

        }
        else{
            click=click+1;
            document.getElementById("click").innerHTML=click;
        }
}