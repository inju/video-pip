const HLS_DEMO_URL = "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8";
//const _OGV_DEMO_URL = "https://test-videos.co.uk/vids/bigbuckbunny/webm/vp8/360/Big_Buck_Bunny_360_10s_2MB.webm";
const OGV_DEMO_URL = "./Big_Buck_Bunny_360_10s_2MB.webm";

export const init = () => {
    const hls = new Hls({
        autoStartLoad: true
    });
    const hlsPlayer = document.getElementById("hlsPlayer");
    hls.loadSource(HLS_DEMO_URL);
    hls.attachMedia(hlsPlayer);

    const ogvPlayer = new OGVPlayer();
    document.getElementById("pipPlayer").appendChild(ogvPlayer);
    ogvPlayer.src = OGV_DEMO_URL;

    const startBtn = document.getElementById("startBtn");
    startBtn.addEventListener("click", () => start(startBtn, hlsPlayer, ogvPlayer));

    ogvPlayer.addEventListener("ended", () => ogvPlayer.play())
};


const start = async (startBtn, hlsPlayer, pipPlayer) => {

    [startBtn, hlsPlayer].forEach( e => e.classList.toggle("hidden"));
    pipPlayer.parentElement.classList.toggle("hidden");

    await hlsPlayer.play();
    pipPlayer.play();

    // Start now also MKV player play
};