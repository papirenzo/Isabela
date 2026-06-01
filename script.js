let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Mostrar el gif inicial
document.getElementById('gifContainer').style.display = 'block';

document.getElementById('siBtn').addEventListener('click', function() {
    // Ocultar el gif triste y mostrar el gif feliz
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';

    // Ocultar los botones "Pregunta Sí" y "No "
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    // Mostrar el mensaje específico
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = '¡Tienes que presionar el boton rojo ';

    // Mostrar otro gif después de 3 segundos
    setTimeout(function() {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
    }, 1000);

    setTimeout(function() {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
    }, 2000);
    setTimeout(function() {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
    }, 3000);
  
});


document.getElementById('noBtn').addEventListener('click', function() {
    switch (noButtonState) {
        case 0:
            // Primera vez haciendo clic en "No"
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'block';

            // Modificar el botón "No"
            document.getElementById('noBtn').innerHTML = 'Porqueee...?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
          
            
            document.getElementById('noBtn').style.fontSize = '40px';
            document.getElementById('noBtn').style.padding = '20px 40px';
       
            
           

        
            noButtonClickCount++;
            noButtonState++;
            break;

        case 1:
            // Segunda vez haciendo clic en "No"

            document.getElementById('noBtn').innerHTML = '¡Tu forma en como percibes las cosas !';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('noBtn').style.fontSize = '50px';
            document.getElementById('noBtn').style.padding = '30px 50px';
        
            noButtonState++;
            break;

        case 2:
           
            document.getElementById('noBtn').innerHTML = 'Tu bonita personalidad divertida y sonriente';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('noBtn').style.fontSize = '60px';
            document.getElementById('noBtn').style.padding = '40px 60px';
        
            noButtonState++;
            break;
        
        case 3:
           
            document.getElementById('noBtn').innerHTML = 'Tu preocupacion por las personas que aprecias';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('noBtn').style.fontSize = '70px';
            document.getElementById('noBtn').style.padding = '50px 70px';
        
            noButtonState++;
            break;
        case 4:
           
            document.getElementById('noBtn').innerHTML = 'Las ganas de seguir avanzando a pesar de lo dificil';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('noBtn').style.fontSize = '80px';
            document.getElementById('noBtn').style.padding = '60px 80px';
         
            noButtonState++;
            break;
        case 5:
           
            document.getElementById('siBtn').innerHTML = 'Y sobretodo a pesar de cualquier circuntacia';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('noBtn').style.fontSize = '90px';
            document.getElementById('noBtn').style.padding = '70px 90px';

            noButtonState++;
            break;
        case 6:
           
            document.getElementById('noBtn').innerHTML = 'Siempre tratas de ver el lado positivo a las cosas';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('noBtn').style.fontSize = '100px';
            document.getElementById('noBtn').style.padding = '80px 100px';
            
            noButtonState++;
            break;
        case 7:
           
            document.getElementById('noBtn').innerHTML = 'Y agradezco a Diosito por cruzarme en tu camino';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('noBtn').style.fontSize = '120px';
            document.getElementById('noBtn').style.padding = '90px 120px';
  
            noButtonState++;
            break;
        case 8:
           
            document.getElementById('noBtn').innerHTML = 'Sobretodas las cosas estare para ti';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('noBtn').style.fontSize = '140px';
            document.getElementById('noBtn').style.padding = '100px 140px';
       
            noButtonState++;
            break;

        case 9:
           
            document.getElementById('noBtn').innerHTML = 'en los mejores y dificiles momentos ';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('noBtn').style.fontSize = '160px';
            document.getElementById('noBtn').style.padding = '110px 160px';
          
            noButtonState++;
            break;

        case 10:
           
            document.getElementById('noBtn').innerHTML = 'A pesar de todo la lealtad y el respeto siempre sera importante para mi';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

         
            document.getElementById('noBtn').style.fontSize = '180px';
            document.getElementById('noBtn').style.padding = '120px 180px';
    
            noButtonState++;
            break;
        case 11:
           
            document.getElementById('noBtn').innerHTML = 'Ya que no mereces ser comprendida , si no amada';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('noBtn').style.fontSize = '200px';
            document.getElementById('noBtn').style.padding = '130px 200px';
            
            noButtonState++;
            break;
        
        case 12:
           
            document.getElementById('noBtn').innerHTML = 'Si llegaste hasta aqui.';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('noBtn').style.fontSize = '220px';
            document.getElementById('noBtn').style.padding = '140px 220px';
    
            noButtonState++;
            break;
        
        case 13:
           
            document.getElementById('noBtn').innerHTML = 'Gracias por tomarte tu tiempo';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('noBtn').style.fontSize = '240px';
            document.getElementById('noBtn').style.padding = '150px 240px';
         
            noButtonState++;
            break;
        
        case 14:
           
            document.getElementById('noBtn').innerHTML = 'Espero te guste este bonito detalle';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('noBtn').style.fontSize = '260px';
            document.getElementById('noBtn').style.padding = '160px 260px';
            
            noButtonState++;
            break;
        
        case 15:
           
            document.getElementById('noBtn').innerHTML = 'A si virtual aunque sea ';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('noBtn').style.fontSize = '280px';
            document.getElementById('noBtn').style.padding = '170px 280px';
          
            noButtonState++;
            break;
        
     
        case 16:
                document.getElementById('noBtn').innerHTML = 'Te quiero <3 ';
                document.getElementById('noBtn').style.backgroundColor = '#F1330A';
              
                document.getElementById('sadGifContainer').style.display = 'none';
                document.getElementById('sadGifContainer1').style.display = 'none';
                document.getElementById('sadGifContainer2').style.display = 'none';
                document.getElementById('gifContainer').style.display = 'block';
                document.getElementById('happyGifContainer').style.display = 'none';
                // Vuelve al estado 0
                noButtonState = 0;
                break;
        

        default:
            // Por si acaso, maneja cualquier otro caso aquí
            break;
    }
});


