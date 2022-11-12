import Webamp from 'webamp'

const startWebamp = () => {
    if (Webamp.browserIsSupported()) {
        const webamp = new Webamp({
            initialTracks: [{
                metaData: {
                    artist: "竹内 まりや Mariya Takeuchi",
                    title: "Plastic Love"
                },
                url: `${process.env.PUBLIC_URL}/Plastic Love - 竹内 まりや Mariya Takeuchi.mp3`,
                duration: 453
            }]
        });
        webamp.onClose(() => {
            webamp.dispose();
        })

        webamp.renderWhenReady(document.getElementById('winamp-container'));
        
    }
}

export { startWebamp } 