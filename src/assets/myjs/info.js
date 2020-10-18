
function area_rhom(){
    var p = document.getElementById("diag1").value;
    var q = document.getElementById("diag2").value;
    area_r=(p*q)/2;
    res28 = document.getElementById("res28");
    res28.innerHTML = "The area of Rhombus :  " + area_r;
    alert("The area of Rhombus :  "+area_r);
}
function peri_rhom(){
    var rs = document.getElementById("side").value;
    peri_r=4*rs;
    res27 = document.getElementById("res27");
    res27.innerHTML = "The perimeter of Rhombus :  " + peri_r;
    alert("The perimeter of Rhombus :  "+peri_r);
}
function PRIME()
{
    var num=document.getElementById("num").value;
    var each;
    var fla=0;	
    if(num == 1 || num == 0)
    {
        re1 = document.getElementById("re1");
            re1.innerHTML = "Your number "+num+ " is not a prime number. ";
			window.alert("Your number "+num+ " is not a prime number. ");
    }
    else{

    
		for(each=2; each <= num/2; each++)
		{
			if(num%each == 0)
			{
				fla = 1;
				break;
			}
		}
		if(fla == 0)
		{
            re1 = document.getElementById("re1");
            re1.innerHTML = "Your number "+num+ " is  a prime number. ";
			window.alert("Your number "+num+ " is  a prime number. ");
		}
		else
		{
            re1 = document.getElementById("re1");
            re1.innerHTML = "Your number "+num+ " is not a prime number. ";
			window.alert("Your number "+num+ " is not a prime number. ");
		}
    }
   
   
}


function area_par(){
    var pb = document.getElementById("bas").value;
    var phei = document.getElementById("phei").value;
    var ans=pb*phei;
    res24 = document.getElementById("res24");
    res24.innerHTML = "The area of Parallelogram :  " + ans;
    alert("The area of Parallelogram :  "+ans);
}
function peri_par(){
    var bas2 = document.getElementById("bas2").value;
    var phei2= document.getElementById("phei2").value;
    var ans=2*bas2 + 2*phei2;
    res25 = document.getElementById("res25");
    res25.innerHTML = "The perimeter of Parallelogram :  " + ans;
    alert("The perimeter of Parallelogram :  "+ans);
}
function sufarea_cone()
{
    var cra = document.getElementById("conr").value;
    var che = document.getElementById("conh").value;
    var ar=(Math.PI*cra*cra )+ (Math.PI*cra*( Math.sqrt((che*che)+(cra*cra))));
    res20 = document.getElementById("res20");
    res20.innerHTML = "The Surface area of RC cone :  " + ar.toFixed(2);
    alert("The Surface area of RC cone :  "+ar.toFixed(2));
}
function latarea_cone()
{
    var cra1 = document.getElementById("conr1").value;
    var che1 = document.getElementById("conh1").value;
    var ar=(Math.PI*cra1*( Math.sqrt((che1*che1)+(cra1*cra1))));
    res21 = document.getElementById("res21");
    res21.innerHTML = "The Lateral area of RC cone :  " + ar.toFixed(2);
    alert("The Lateral area of RC cone :  "+ar.toFixed(2));
}
function basearea_cone()
{
    var crad2 = document.getElementById("conr2").value;
    var ar=(Math.PI * crad2*crad2);
    res22 = document.getElementById("res22");
    res22.innerHTML = "The Base area of RC Cone :  " + ar.toFixed(2);
    alert("The Base area of RC Cone :  "+ar.toFixed(2));
}
function vol_cone()
{
    var crad3 = document.getElementById("conr3").value;
    var chei3 = document.getElementById("conh3").value;
    var ar=(Math.PI*crad3*crad3*chei3 )/3;
    res23 = document.getElementById("res23");
    res23.innerHTML = "The Volume of RC Cone :  " + ar.toFixed(2);
    alert("The Volume of RC Cone :  "+ar.toFixed(2));
}

function sufarea_cy()
{
    var crad = document.getElementById("cr").value;
    var chei = document.getElementById("ch").value;
    var ar=(2*Math.PI*crad*chei )+ (2* Math.PI * crad*crad);
    res16 = document.getElementById("res16");
    res16.innerHTML = "The Surface area of Cube :  " + ar.toFixed(2);
    alert("The Surface area of Cube :  "+ar.toFixed(2));
}
function latarea_cy()
{
    var crad1 = document.getElementById("cr1").value;
    var chei1 = document.getElementById("ch1").value;
    var ar=(2*Math.PI*crad1*chei1 )
    res17 = document.getElementById("res17");
    res17.innerHTML = "The Lateral area of Cube :  " + ar.toFixed(2);
    alert("The Lateral area of Cube :  "+ar.toFixed(2));
}
function basearea_cy()
{
    var crad2 = document.getElementById("cr2").value;
    var ar=(Math.PI * crad2*crad2);
    res18 = document.getElementById("res18");
    res18.innerHTML = "The Base area of Cube :  " + ar.toFixed(2);
    alert("The Base area of Cube :  "+ar.toFixed(2));
}
function vol_cy()
{
    var crad3 = document.getElementById("cr3").value;
    var chei3 = document.getElementById("ch3").value;
    var ar=(Math.PI*crad3*crad3*chei3 )
    res19 = document.getElementById("res19");
    res19.innerHTML = "The Volume of Cube :  " + ar.toFixed(2);
    alert("The Volume of Cube :  "+ar.toFixed(2));
}

function area_cube()
{
    var a = document.getElementById("cubs").value;
    var ar=6* a*a;
    res13 = document.getElementById("res13");
    res13.innerHTML = "The area of Cube :  " + ar.toFixed(2);
    alert("The area of Cube :  "+ar.toFixed(2));

}
function vol_cube()
{
    var a1 = document.getElementById("scub").value;
    var ar= a1*a1*a1;
    res14 = document.getElementById("res14");
    res14.innerHTML = "The Volume of Cube :  " + ar.toFixed(2);
    alert("The Volume of Cube :  "+ar.toFixed(2));

}
function dia_cube()
{
    var a = document.getElementById("cubs1").value;
    var ar=Math.sqrt(3)*a;
    res15 = document.getElementById("res15");
    res15.innerHTML = "The diagonal of Cube :  " + ar.toFixed(2);
    alert("The diagonal of Cube :  "+ar.toFixed(2));

}


function area_sp()
{
    var r = document.getElementById("srad").value;
    
    var ar=4*Math.PI * r*r;
    res11 = document.getElementById("res11");
    res11.innerHTML = "The area of Sphere :  " + ar.toFixed(2);
    alert("The area of Sphere :  "+ar.toFixed(2));

}
function vol_sp()
{
    var r = document.getElementById("srad1").value;
    
    var ar=(4*Math.PI * r*r*r)/3;
    res12 = document.getElementById("res12");
    res12.innerHTML = "The area of Sphere :  " + ar.toFixed(2);
    alert("The area of Sphere :  "+ar.toFixed(2));

}

function area_cir()
{
    var r = document.getElementById("rad").value;
    
    var ar=Math.PI * r*r;
    res9 = document.getElementById("res9");
    res9.innerHTML = "The area of triangle :  " + ar.toFixed(2);
    alert("The area of triangle :  "+ar.toFixed(2));

}
function circum_cir()
{
    var r = document.getElementById("rad1").value;
    var cum=2* Math.PI * r;
    res10 = document.getElementById("res10");
    res10.innerHTML = "The area of triangle :  " + cum.toFixed(2);
    alert("The area of triangle :  "+cum.toFixed(2));

}

function area_tri(){
    var br1 = document.getElementById("br1").value;
    var s1 = document.getElementById("s1").value;
    var ar=(br1*s1)/2;
    res7 = document.getElementById("res7");
    res7.innerHTML = "The area of triangle :  " + ar.toFixed(2);
    alert("The area of triangle :  "+ar.toFixed(2));
}
function peri_tri(){
    var br2 = Number(document.getElementById("br2").value);
    var s2= Number(document.getElementById("s2").value);
    var s3 = Number(document.getElementById("s3").value);
    if((s3+s2) > br2)
    {
    pe=(s3+s2+br2);
    res8 = document.getElementById("res8");
    res8.innerHTML = "The perimeter of triangle :  " + pe;
    alert("The perimeter of triangle :  "+pe);
    }   
    else{   
        alert("The invalid input : Input must be  base side < (1st side + 2nd side) ");
    }
}
function area_rec(){
    var l = document.getElementById("l1").value;
    var b = document.getElementById("b1").value;
    var ans=l*b;
    res4 = document.getElementById("res4");
    res4.innerHTML = "The area of Rectangle :  " + ans;
    alert("The area of Rectangle :  "+ans);
}
function peri_rec(){
    var l2 = document.getElementById("l2").value;
    var b2= document.getElementById("b2").value;
    var ans=2*l2+ 2*b2;
    res5 = document.getElementById("res5");
    res5.innerHTML = "The perimeter of Rectangle :  " + ans;
    alert("The perimeter of Rectangle :  "+ans);
}
function dia_rec(){
    var l3 = document.getElementById("l3").value;
    var b3 = document.getElementById("b3").value;
    var ans=Math.sqrt(((l3*l3) + (b3*b3)));
    res6 = document.getElementById("res6");
    res6.innerHTML = "The diagonal of Rectangle :  " + ans.toFixed(2);
    alert("The diagonal of Rectangle :  "+ans.toFixed(2));
}
function area_sq(){
    var s = document.getElementById("sid1").value;
    var ans=s*s;
    res1 = document.getElementById("res1");
    res1.innerHTML = "The area of Square :  " + ans;
    alert("The area of Square :  "+ans);
}
function peri_sq(){
    var s2 = document.getElementById("sid2").value;
    var peri_squ=4*s2;
    res2 = document.getElementById("res2");
    res2.innerHTML = "The perimeter of Square :  " + peri_squ;
    alert("The perimeter of Square :  "+peri_squ);
}
function dia_sq(){
    var s3 = document.getElementById("sid3").value;
    var dia_squ=(Math.sqrt(2)*(s3));
    res3 = document.getElementById("res3");
    res3.innerHTML = "The diagonal of Square :  " + dia_squ.toFixed(2);
    alert("The perimeter of Square :  "+dia_squ.toFixed(2));
}

function SI()
            {
                var p = document.getElementById("p").value;
                var n = document.getElementById("no").value;
                var r = document.getElementById("r").value;
                var ans=(p*n*r)/100;
                res = document.getElementById("res");
                res.innerHTML = "The Interest amount is " + ans;
                alert("The interest for your given amount  "+p+"  for your "+n+ "  years"
                 + " is =" +ans);
            }
            function CI()
            {
                var p = document.getElementById("p").value;
                var c = document.getElementById("c").value; // number of compounding/years
                var t = document.getElementById("no").value; // nummber of years
                var r = document.getElementById("r").value;
                var ans = document.getElementById("ans");

                // The equation is Amount = pri * [[1 + (rate/no)] ^ no*time]
                var Amo = (p* Math.pow((1 + (r/(c*100))), (c*t)));
                var f=Amo.toFixed(3);
                resu = document.getElementById("resu");
                resu.innerHTML = "The Interest amount is " +  (f - p).toFixed(3);
                alert(" Total amount is : " + f + " \n The interest is :" + (f - p).toFixed(3));
                
            }

         function Sq()
            {
                var i=document.getElementById("i").value;
                calc.display.value=i*i;
            }
        function cub()
            {
                var i=document.getElementById("i").value;
                calc.display.value=i*i*i;
            }
        function sin()
        {
            var i=document.getElementById("i").value;
            calc.display.value=Math.sin(i);
        }
        function cos()
        {
            var i=document.getElementById("i").value;
            calc.display.value=Math.cos(i);
        }
        function tan()
        {
            var i=document.getElementById("i").value;
            calc.display.value=Math.tan(i);
        }
        function sqrt()
        {
            var i=document.getElementById("i").value;
            calc.display.value=Math.sqrt(i);
        }
        function Square()
        {
            var n=document.getElementById("j").value;
            cal.display.value=n*n;
        }

        function Pow()
        {
            var num = Number(prompt("Please Enter The Exponent value ..", "1"));
            if (num >=0 ) {
            var i=document.getElementById("i").value;   
            calc.display.value=  Math.pow(i,num);
            }
            else
                alert("Please enter the exponent value correctly..")
        }
        function pi()
        {
            var i=document.getElementById("i").value;
            calc.display.value=Math.PI(i);
        }
        function ln()
        {
            var i=document.getElementById("i").value;
            calc.display.value=Math.log(i);
        }
        function cube()
        {
            var i=document.getElementById("i").value;
            calc.display.value=Math.cbrt(i);
        }
        
        function Exp()
        {
            var i=document.getElementById("i").value;
            calc.display.value=Math.exp(i);
        }
        function log10()
        {
            var i=document.getElementById("i").value;
            calc.display.value=Math.log10(i);
        }

        function BMI()
        {
            var w=document.getElementById("w").value;
		    var h=document.getElementById("h").value;

            var bmi=w/(h/100*h/100);
            re = document.getElementById("re");
            re.innerHTML = "Your BMI range is : " + bmi.toFixed(2);
		    window.alert("Your BMI range is : "+bmi.toFixed(2));
        }
        
        function backspace(calc) {                                              
            size = calc.display.value.length; 
            calc.display.value = calc.display.value.substring(0, size-1); 
        }
        
          
        /* Creating function to calculate factorial of element */ 
        function calculate(calc) { 
              
            /* Check if function include ! character then 
            calculate factorial of number */ 
            if(calc.display.value.includes("!")) { 
                  
                size = calc.display.value.length; 
                n = Number(calc.display.value.substring(0, size-1)); 
                f = 1; 
                  
                for(i = 2; i <= n; i++) 
                    f = f*i; 
                calc.display.value = f; 
            } 
              
            /* If function include % character then calculate 
            the % of number */ 
            else if(calc.display.value.includes("%")) { 
                  
                size = calc.display.value.length; 
                n = Number(calc.display.value.substring(0, size-1)); 
                calc.display.value = n/100; 
            } 
                   
            
            /* Otherwise evalute and execute output */
            else  
              {
                   calc.display.value = eval(calc.display.value);
              } 
                
                 
        }
