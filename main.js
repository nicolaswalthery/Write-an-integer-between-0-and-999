//Pick by the user.
var encodedNum = 0;
// Arrays
var specialUniteArray = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize'];
var decadeArray = ['zero', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'septante', 'quartevingt', 'nonante'];
var hundredArray = ['zero', 'cent'];
// Bool
var hundredBool = false;
var decadeBool = false;
var uniteBool = false;

//Of what the encoded number is made of...

if (encodedNum >= 100 && encodedNum <= 999) //Hendred ?
    hundredBool = true;
if (encodedNum%100 != 0 && encodedNum%100 >= 10) // Decade ?
    decadeBool = true;
if (encodedNum%10 != 0) // Unite ?
    uniteBool = true;

/*do
{
    encodedNum = prompt('Enter an integer between 0 and 999: ');
}while(encodeNum < 0 || encodeNum > 999)*/

console.log(encodedNum);


if(hundredBool === true && decadeBool === false && uniteBool === false)  //Centaines uniquement
{
    if(encodedNum === 100)                                                                  //cent
        console.log(hundredArray[encodedNum/100]);
    else
        console.log(specialUniteArray[encodedNum/100]+'-'+decadeArray[encodedNum/100]);     //deux-cent, trois-cent, quatre-cent, etc
}
else
{
    if(hundredBool === false && decadeBool === true && uniteBool === false) // Dizaines uniquement
    {
        console.log(decadeArray[encodedNum/10]);
    }
    else
    {
        if(hundredBool === true && decadeBool === true && uniteBool === false) //Centaines + dizaines
        {
            if(encodedNum >= 110 && encodedNum <= 190)
                console.log('cent-'+decadeArray[(encodedNum-100)/10]);
            else
                console.log(specialUniteArray[Math.round(encodedNum/100-0.5)]+'-cents-'+decadeArray[encodedNum%100/10]);
        }
        else
        {
            if(hundredBool === false && decadeBool === false && uniteBool === true) // Unité uniquement
            {
                console.log(specialUniteArray[encodedNum]);
            }
            else
            {
                if(hundredBool === false && decadeBool === true && uniteBool === true) //Dizaines + unités
                {
                    if(encodedNum > 10 && encodedNum > 17)
                        console.log(specialUniteArray[encodedNum])
                    else
                    {
                        if(encodedNum > 10 && encodedNum < 17)
                            console.log(specialUniteArray[encodedNum]);
                        else
                        {
                            if(encodedNum%10 === 1)
                                console.log(decadeArray[Math.round(encodedNum/10-0.5)]+'-et-un');
                            else
                                console.log(decadeArray[Math.round(encodedNum/10-0.5)]+'-'+specialUniteArray[encodedNum%10]);
                        }
                    }
                }
                else
                {
                    if(hundredBool === true && decadeBool === false && uniteBool === true) // Centaines + Unités
                    {
                        if(encodedNum > 100 && encodedNum < 200)
                            console.log('cent-'+specialUniteArray[encodedNum%10]);
                        else
                            console.log(specialUniteArray[Math.round(encodedNum/100-0.5)]+'-cents-'+specialUniteArray[encodedNum%10]);
                    }
                    else
                    {
                        if(hundredBool === true && decadeBool === true && uniteBool === true) // La totale
                        {
                            
                            if(encodedNum > 100 && encodedNum < 200 )
                            {
                                if(encodedNum%10 === 1 && encodedNum%100 != 11)
                                    console.log('cent-'+decadeArray[Math.round(encodedNum%100/10-0.5)]+'-et-un');
                                else
                                {
                                    if(encodedNum%100 > 10 && encodedNum%100 <= 16)
                                        console.log('cent-'+specialUniteArray[encodedNum%100]);
                                    else
                                        console.log('cent-'+decadeArray[Math.round(encodedNum%100/10-0.5)]+'-'+specialUniteArray[encodedNum%10]);
                                }
                            }
                            else
                            {
                                if(encodedNum%10 === 1)
                                    console.log(specialUniteArray[Math.round(encodedNum/100-0.5)]+'-cents-'+decadeArray[Math.round(encodedNum%100/10-0.5)]+'-et-un');
                                else
                                {
                                    if(encodedNum%100 > 10 && encodedNum%100 < 16)
                                        console.log(specialUniteArray[Math.round(encodedNum/100-0.5)]+'-cents-'+specialUniteArray[encodedNum%100]);
                                    else
                                        console.log(specialUniteArray[Math.round(encodedNum/100-0.5)]+'-cents-'+decadeArray[Math.round(encodedNum%100/10-0.5)]+'-'+specialUniteArray[encodedNum%10]);
                                }
                                    
                            }

                        }
                        else
                        {
                            if(hundredBool === false && decadeBool === false && uniteBool === false) //zero
                                console.log('zero');
                        }
                    }
                }
            }
        }
    }
}



