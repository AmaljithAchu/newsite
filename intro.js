document.getElementById('introVideo').addEventListener('ended', function() {
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
});