function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 10.2674, lng: 123.9488 }, // Map center
        zoom: 8.5 // Zoom level
    });

    var markers = []; // Array to hold marker references

    // Marker positions and related data
    var locations = [
        { position: { lat: 10.2674, lng: 123.9488 }, condition: '10000_roses', buttonId: 'btn1' },
        { position: { lat: 10.2622, lng: 123.9490 }, condition: 'water_fall', buttonId: 'btn2' },
        { position: { lat: 10.2676, lng: 123.9492 }, condition: 'nexceed', buttonId: 'btn3' },
        { position: { lat: 10.3298, lng: 123.9015 }, condition: 'the_pad', buttonId: 'btn4' },
        { position: { lat: 10.2678, lng: 123.9496 }, condition: 'mactan', buttonId: 'btn5' },
        { position: { lat: 10.2679, lng: 123.9498 }, condition: 'mactan_hotel', buttonId: 'btn6' },
        { position: { lat: 10.2680, lng: 123.9500 }, condition: 'whale_shark', buttonId: 'btn7' },
        {  condition: 'another', buttonId: 'btn8' },
        { position: { lat: 10.3283, lng: 123.9070 }, condition: 'nightclub', buttonId: 'btn9' },
        { position: { lat: 10.2910, lng: 123.9056  }, condition: 'Museum', buttonId: 'btn10' },
        { position: { lat: 10.3281, lng: 123.9048  }, condition: 'Civet cafe', buttonId: 'btn11' }
    ];

    locations.forEach(function(location, index) {
        var marker = new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.condition
        });
        markers.push(marker);

        // Add click listener to markers
        marker.addListener('click', function() {
            window.location.href = location.condition + '.html';
        });

        // Add mouseover event listener to simulate button click
        marker.addListener('mouseover', function() {
            document.getElementById(location.buttonId).click();
        });
    });

    // Button click event to center the map on the respective marker
    document.querySelectorAll('.btnchangeline').forEach(function(button, index) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            map.setCenter(markers[index].getPosition());
            map.setZoom(15); // Adjust zoom level if needed
        });
    });
}

// タブの動き
document.querySelectorAll('.btnchangeline').forEach(function(button) {
    button.addEventListener('mouseover', function() {
        var rect = button.getBoundingClientRect();

        // 画面の右端にはみ出す場合
        if (rect.right > window.innerWidth) {
            button.classList.add('adjust-position');
        } else {
            button.classList.remove('adjust-position');
        }
    });
});

