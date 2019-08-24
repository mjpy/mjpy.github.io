    function computeMRZ()  {
         //Obtain user input
         var strMRZ = document.getElementById("mrz").value;
         strMRZ = strMRZ.toUpperCase();
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
            if (i % 3 == 0) {
                sum += tab[i]*7;   
            }
            else if ((i % 2 == 0 && i != 4 && (i-1)%6 != 0) || (i == 5 || (i-5)%6 == 0)) {
                sum += tab[i];   
            }
            else {
                sum += tab[i]*3;
            }
        }
        
        result = sum%10
      
        
         //Display result
        document.getElementById("output").innerHTML = result;   
    }

    function returnNumeric(strMRZ, pos) {
        return strMRZ.charCodeAt(pos-1)-55;
    }

    function isNumeric(strMRZ, pos) {
        return (Number.isInteger(Number(strMRZ.charAt(pos-1))));
    }
