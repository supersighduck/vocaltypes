let soprano = "This voice is characterized by impressive high notes (hence the name, which comes from the Italian “sopra” or “above”) and a timbre that usually sounds brighter or more sparkling than the other voice types. Sopranos are often capable of immense depth and richness of tone."
let mezzoSoprano = "Mezzo-sopranos get their name from the Italian prefix “mezzo,” meaning “half.” Although the category translates as “half-soprano,” there is nothing “halfhearted” about the warm but sturdy voices that make up this group. In fact, mezzos often sing just as high as their soprano counterparts. What sets mezzos apart are their strong middle voices, their smoldering lower registers, and their lush tone quality. If a mezzo and a soprano were to sing the exact same pitch, the mezzo's note would most likely sound a little bit fuller, darker, or heavier (imagine a clarinet playing the same note as a flute)."
let contralto = "Contraltos are arguably the rarest of female voice types and they possess a tone so dark they often give the men a run for their money. If mezzos are like clarinets, contraltos are more like bass clarinets. The lower register is the key feature of this category, and contraltos know better than anyone how to make the most of their low “chest” tones. This doesn't mean contraltos skimp on the high notes, though- operas often feature a coloratura contralto that can reach pretty far up into the vocal stratosphere with lightning speed."
let tenor = "Tenors are the highest male voice and, like sopranos, they are capable of delivering thrilling high notes and often have a brilliant shining timbre. Think of them as the trumpet of the vocal orchestra. These singers get their name from the Italian “tenere,” which means “to hold” because, in very early music, it was their job to hold down the melody and drive the song."
let baritone = "The most common of all male voices, this category occupies the wide range of vocal timbres between the tenor and the bass. Interestingly, this voice type wasn't officially acknowledged until the 19th century when, as Miller puts it, composers caught wise to the fact that using vocal variety and “contrast” made for much more exciting music than simply dividing parts between the guys who could sing high and the guys who could sing low. As a result, the baritone voice, recognizable by its glorious middle register, came into fashion and was championed in many 19th-century operas, particularly those of Verdi."
let bass = "The name says it all. These men make up the bottom of the musical staff, and their incredibly deep tones are a rare but essential part of music making. Basses do for low notes what sopranos do for high notes. Yet what makes basses so special isn't so much the depth of their notes, but the volume and strength with which they can sing them. Pitches at the bottom of the scale are notoriously difficult for the ear to pick up, so think of the skill involved in making a magnificent low note sound loud enough to be heard over an entire orchestra."

// document.getElementById('soprano').addEventListener('click', message1)

$('#soprano').on('click', message1)
$('#mezzoSoprano').on('click', message2)
$('#contralto').on('click', message3)
$('#tenor').on('click', message4)
$('#baritone').on('click', message5)
$('#bass').on('click', message6)

function message1 (){
    //document.getElementById('hInfo1').innerText = soprano
    //document.getElementById('hInfo1').classList.toggle('hidden')

    //msg1
    $('#hInfo1').text(soprano)
    $('#hInfo1').toggleClass('hidden')
    //msg2
    $('#hInfo2').text(mezzoSoprano)
    $('#hInfo2').addClass('hidden')
    //msg3
    $('#hInfo3').text(contralto)
    $('#hInfo3').addClass('hidden')
    //msg4
    $('#hInfo4').text(tenor)
    $('#hInfo4').addClass('hidden')

    //msg5
    $('#hInfo5').text(baritone)
    $('#hInfo5').addClass('hidden')
    //msg6
    $('#hInfo6').text(bass)
    $('#hInfo6').addClass('hidden')
}

function message2 (){
     //msg1
     $('#hInfo1').text(soprano)
     $('#hInfo1').addClass('hidden')
     //msg2
     $('#hInfo2').text(mezzoSoprano)
     $('#hInfo2').toggleClass('hidden')
     //msg3
     $('#hInfo3').text(contralto)
     $('#hInfo3').addClass('hidden')
     //msg4
     $('#hInfo4').text(tenor)
     $('#hInfo4').addClass('hidden')
 
     //msg5
     $('#hInfo5').text(baritone)
     $('#hInfo5').addClass('hidden')
     //msg6
     $('#hInfo6').text(bass)
     $('#hInfo6').addClass('hidden')

}

function message3 (){
     //msg1
     $('#hInfo1').text(soprano)
     $('#hInfo1').addClass('hidden')
     //msg2
     $('#hInfo2').text(mezzoSoprano)
     $('#hInfo2').addClass('hidden')
     //msg3
     $('#hInfo3').text(contralto)
     $('#hInfo3').toggleClass('hidden')
     //msg4
     $('#hInfo4').text(tenor)
     $('#hInfo4').addClass('hidden')
     //msg5
     $('#hInfo5').text(baritone)
     $('#hInfo5').addClass('hidden')
     //msg6
     $('#hInfo6').text(bass)
     $('#hInfo6').addClass('hidden')
}

function message4 (){

    //msg1
    $('#hInfo1').text(soprano)
    $('#hInfo1').addClass('hidden')
    //msg2
    $('#hInfo2').text(mezzoSoprano)
    $('#hInfo2').addClass('hidden')
    //msg3
    $('#hInfo3').text(contralto)
    $('#hInfo3').addClass('hidden')
    //msg4
    $('#hInfo4').text(tenor)
    $('#hInfo4').toggleClass('hidden')
    //msg5
    $('#hInfo5').text(baritone)
    $('#hInfo5').addClass('hidden')
    //msg6
    $('#hInfo6').text(bass)
    $('#hInfo6').addClass('hidden')

}

function message5 (){

     //msg1
     $('#hInfo1').text(soprano)
     $('#hInfo1').addClass('hidden')
     //msg2
     $('#hInfo2').text(mezzoSoprano)
     $('#hInfo2').addClass('hidden')
     //msg3
     $('#hInfo3').text(contralto)
     $('#hInfo3').addClass('hidden')
     //msg4
     $('#hInfo4').text(tenor)
     $('#hInfo4').addClass('hidden')
 
     //msg5
     $('#hInfo5').text(baritone)
     $('#hInfo5').toggleClass('hidden')
     //msg6
     $('#hInfo6').text(bass)
     $('#hInfo6').addClass('hidden')
}

function message6 (){

     //msg1
     $('#hInfo1').text(soprano)
     $('#hInfo1').addClass('hidden')
     //msg2
     $('#hInfo2').text(mezzoSoprano)
     $('#hInfo2').addClass('hidden')
     //msg3
     $('#hInfo3').text(contralto)
     $('#hInfo3').addClass('hidden')
     //msg4
     $('#hInfo4').text(tenor)
     $('#hInfo4').addClass('hidden')
 
     //msg5
     $('#hInfo5').text(baritone)
     $('#hInfo5').addClass('hidden')
     //msg6
     $('#hInfo6').text(bass)
     $('#hInfo6').toggleClass('hidden')
}