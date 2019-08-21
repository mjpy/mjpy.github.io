    function computeDOB() {
          //Obtain user input
         var strDOB = document.getElementById("dob").value;
         
         //Perform calculation         
         if (strDOB.length != 6) {
            var result = "Wrong Format!";
         }
         else {
             var digits = dobCheckSum(strDOB);              
                if (strDOB.charAt(0) == "0") {
                    if (strDOB.charAt(1) == "0") {
                        if (strDOB.charAt(2) == "0") {
                            if (strDOB.charAt(3) == "0") {
                                if (strDOB.charAt(4) == "0") {
                                    if (strDOB.charAt(5) == "0") {
                                    result = 0;
                                }
                                else {
                                    var result = (0+0+0+0+0+digits[5])%10; 
                                }
                                }
                                else {
                                    var result = (0+0+0+0+digits[4]+digits[5])%10; 
                                }
                            }
                            else {
                                var result = (0+0+0+digits[3]+digits[4]+digits[5])%10; 
                            }
                        }
                        else {
                            var result = (0+0+digits[2]+digits[3]+digits[4]+digits[5])%10; 
                        }  
                    }
                    else {
                        var result = (0+digits[1]+digits[2]+digits[3]+digits[4]+digits[5])%10; 
                    }
                }
                else {   
                    var result = (digits[0]+digits[1]+digits[2]+digits[3]+digits[4]+digits[5])%10; 
                }
         }
         //Display result
        document.getElementById("output").innerHTML = result;   
     }
            
     function dobCheckSum(strDOB) {
         var dob = Number(strDOB);
         var first = (~~(dob/100000)*7)%10;
         var second = ((~~(dob/10000)%10)*3)%10;
         var third = ((~~(dob/1000)%100)*1)%10;
         var fourth = ((~~(dob/100)%1000)*7)%10;
         var fifth = ((~~(dob/10)%10000)*3)%10;
         var sixth = (~~(dob%100000)*1)%10;
        
         return [first, second, third, fourth, fifth, sixth];
     }


//Whole MRZ check


    function computeMRZ()  {
         //Obtain user input
         var strMRZ = document.getElementById("mrz").value;
        
         //Perform calculation
        var tab = new Array;
        for (var i = 1; i <= strMRZ.length; i++) {
            if (isNumeric(strMRZ, i)) {
                tab[i-1] = Number(strMRZ.charAt(i-1));
            }
            else {
                tab[i-1] = returnNumeric(strMRZ, i);
            }
        }
        
        var sum = 0;
        for (var i = 0; i<tab.length; i++) {
            if (i == 0 || i == 3 || i == 6 || i == 9) {
                sum += tab[i]*7;   
            }
            else if (i == 1 || i == 4 || i == 7 || i == 10) {
                sum += tab[i]*3;   
            }
            else {
                sum += tab[i];
            }
        }
        
        result = sum%10;
        
      
        
         //Display result
        document.getElementById("output2").innerHTML = result;   
    }

    function returnNumeric(strMRZ, pos) {
        return strMRZ.charCodeAt(pos-1)-55;
    }

    function isNumeric(strMRZ, pos) {
        return (Number.isInteger(Number(strMRZ.charAt(pos-1))));
    }
