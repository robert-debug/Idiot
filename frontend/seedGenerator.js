let lyrics = document.querySelectorAll('span.ReferentFragment__Highlight-oqvzi6-1.eZruqd')
lyrics = Array.from(lyrics)
lyrics = lyrics.map(ele=> ele.outerText)
newLyrics = []
for (let i = 0; i < lyrics.length; i++){
    if(lyrics[i].includes('\n')){
        let fragments = lyrics[i].split('\n')
        fragments.forEach(element => {
            newLyrics.push(element)
        });
    } else {
        newLyrics.push(lyrics[i])
    }
}
let lyricsString = ''

newLyrics.forEach((ele, index) => {
    lyricsString = lyricsString + `{ordernum: ${index}, linetext:"${ele}", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, `
})

console.log(lyricsString)
//Or use this
let lyrics = `Maybe in another life<br>I could find you there<br>Pulled away before your time<br>I can't deal, it's so unfair<br><br>[Chorus]<br>And it feels, and it feels like<br>Heaven is so far away<br>And it feels, yeah, it feels like<br>The world has grown cold<br>Now that you've gone away<br><br>[Verse 2]<br>Leaving flowers on your grave<br>Show that I still care<br>Black roses and "Hail Mary's"<br>Can't bring back what's taken from me<br><br>[Pre-Chorus]<br>I reach to the sky and call out your name<br>And if I could trade, I would<br><br>[Chorus]<br>And it feels, and it feels like<br>Heaven is so far away<br>And it stings, yeah, it stings, now<br>The world is so cold<br>Now that you've gone away<br>`
lyrics = lyrics.split('<br>')

let lyricsString = ''

lyricsyrics.forEach((ele, index) => {
    lyricsString = lyricsString + `{ordernum: ${index}, linetext:"${ele}", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, `
})

