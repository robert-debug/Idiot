let lyrics = document.querySelectorAll('span.ReferentFragment__Highlight-oqvzi6-1.eZruqd')
lyrics = Array.from(lyrics)
lyrics = lyrics.map(ele=> ele.outerText)
newLyrics = []
for (let i = 0; i < lyrics.length; i++){
    if(lyrics[i].includes('\n')){
        console.log()
        let fragments = lyrics[i].split('\n')
        fragments.forEach(element => {
            newLyrics.push(element)
        });
    } else {
        newLyrics.push(lyrics[i])
    }
}
let lyricsString = ''
// newLyrics = newLyrics.map((ele, index) => {
//     return {ordernum: index, linetext: ele, trackId: 1, createdAt: new Date(), updatedAt: new Date() }
// })
newLyrics.forEach((ele, index) => {
    lyricsString = lyricsString + `{ordernum: ${index}, linetext:"${ele}", trackId: 1, createdAt: "${new Date()}", updatedAt:"${new Date()}"},`
})

console.log(lyricsString)
