function downloadForPlatform(platform) {
    if (platform === 'windows') {
        window.location.href = window.location.origin + '/files/LighTouch_Setup.exe';
    } else if (platform === 'linux') {
        // Currently disabled
        alert('La version Linux est en cours de développement. Restez à l\'écoute !');
    } else {
        alert('Plateforme non supportée.');
    }
}
