let lyrics = document.querySelectorAll('span.ReferentFragment__Highlight-oqvzi6-1.eZruqd')
lyrics = Array.from(lyrics)
lyrics = lyrics.map(ele=> ele.outerText)
newLyrics = []
for (let i = 0; i < lyrics.length; i++){
    if(lyrics[i].includes(/\r?\n/)){
        lyrics.split(/\r?\n/)
    }
}