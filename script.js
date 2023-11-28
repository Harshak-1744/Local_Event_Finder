document.getElementById('load-events').addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'events.json', true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            const events = JSON.parse(xhr.responseText);
            const container = document.getElementById('events-container');
            container.innerHTML = '';
            events.forEach(function(event) {
                const eventDiv = document.createElement('div');
                eventDiv.className = 'event';
                const eventTitle = document.createElement('h2');
                eventTitle.textContent = event.title;
                const eventDate = document.createElement('p');
                eventDate.textContent = 'Date: ' + event.date;
                const eventLocation = document.createElement('p');
                eventLocation.textContent = 'Location: ' + event.location;
                const eventDescription = document.createElement('p');
                eventDescription.textContent = event.description;
                eventDiv.appendChild(eventTitle);
                eventDiv.appendChild(eventDate);
                eventDiv.appendChild(eventLocation);
                eventDiv.appendChild(eventDescription);
                container.appendChild(eventDiv);
            });
        } else {
            document.getElementById('events-container').innerHTML = 'Error loading profiles';
        }
    };

    xhr.onerror = function() {
        document.getElementById('events-container').innerHTML = 'Network Error';
    };

    xhr.send();
});
