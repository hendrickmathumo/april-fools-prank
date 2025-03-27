function sharePrank() {
    let prankText = "🚨 Someone just checked your name in our Couple Cheating Records! 😱 Find out who and why!";
    let url = "https://www.slash.co.bw/april-fools-prank?utm_source=whatsapp";
    let fullUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(prankText + " " + url)}`;
    window.open(fullUrl, '_blank');
}
