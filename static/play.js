
$(document).ready( function() {

    var cNote = document.getElementById('cAudio');

    $('#c').mouseover(function(){
        cNote.currentTime = 0;
        cNote.play();
    });


    var dNote = document.getElementById('dAudio');
    
    $('#d').mouseover(function(){
        dNote.currentTime = 0;
        dNote.play();
    });
    
    
    
    var eNote = document.getElementById('eAudio');
    
    $('#e').mouseover(function(){
        eNote.currentTime = 0;
        eNote.play();
    });
 
    
    var fNote = document.getElementById('fAudio');
    
    $('#f').mouseover(function(){
        fNote.currentTime = 0;
        fNote.play();
    });
  
    
    var gNote = document.getElementById('gAudio');
    
    $('#g').mouseover(function(){
        gNote.currentTime = 0;
        gNote.play();
    });
    
   
    
    var aNote = document.getElementById('aAudio');
    
    $('#a').mouseover(function(){
        aNote.currentTime = 0;
        aNote.play();
    });
    
  
    
    var bNote = document.getElementById('bAudio');
    
    $('#b').mouseover(function(){
        bNote.currentTime = 0;
        bNote.play();
    });
    
});