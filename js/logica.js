
var cesar = cesar || (function(){
  
    var doStaff = function(txt, desp, action){
        
        var regul = /[0-9\d]/;
        
        if (!regul.test(desp)) {
            alert("Error de formato en el número de salto");
            return "";
        }
        var shift = parseInt(desp, 10);
        if (shift>26) {
            alert("El número de salto no puede ser mayor a 26");
            return "";
        }

        var replace = (function(){
           
            var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',  'v', 'w', 'x',
        'y', 'z'];
            
            var le = abc.length;
            var shift = parseInt(desp, 10);
            

            return function(c){
                
                var i = abc.indexOf(c.toLowerCase());
                //console.log("Index: "+i);
            
                //console.log("AHHHHH PTM: " + abc.indexOf(c.toLowerCase()));
                /*for (let i2 = 0; i2 < le; i2++) {
                    console.log("Qué está pasando: " + abc[(pos + shift) % le]);
                  }
                */
               
                if(i != -1){
                    
                    var pos = i;
                    
                    if(action){
                        
                        pos = (pos + shift) % le;                      
                        //console.log("AVR: " + pos);
                    }else{
                        
                        pos = (pos - shift) % le;
                        if(pos<0){
                            i = le - shift + i;
                            pos = i;
                        }
                    }
                    return abc[pos];
                }
                return c;
            };
        })();
        
        var re = (/([a-z])/ig);
        return String(txt).replace(re, function(match){
            return replace(match);
        });

        
    }
        return{
            encode : function(txt, desp){
                return doStaff(txt, desp, true);
            },
            decode : function(txt, desp){
                return doStaff(txt, desp, false);
            }
        };
})();


function codificar(){
    document.getElementById('resultado').innerHTML = cesar.encode(
        document.getElementById('cadena').value, document.getElementById('shift').value
    );
}

function decodificar(){
    document.getElementById('resultado').innerHTML = cesar.decode(
        document.getElementById('cadena').value, document.getElementById('shift').value
    );
}
