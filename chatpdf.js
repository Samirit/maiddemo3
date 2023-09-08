document.addEventListener('DOMContentLoaded', function () {
    const queryInput = document.getElementById('queryInput');
    const submitQuery = document.getElementById('submitQuery');
    const responseFrame = document.getElementById('responseFrame');

    submitQuery.addEventListener('click', function () {
        const userQuery = queryInput.value;

        // Send the user query to ChatPDF API and update the responseFrame
        const url = 'https://api.chatpdf.com/v1/chats/message';
        const headers = {
            'x-api-key': 'sec_ejO1KiIHZXOSmOKyYjKpyWocMEZuRKhp', // Replace with your API key
            'Content-Type': 'application/json',
        };
        const data = {
            'sourceId': 'cha_QTYGYfpjZGqIEduEFmAWf', // Replace with your source ID
            'messages': [
                {
                    'role': 'user',
                    'content': userQuery,
                }
            ]
        };

        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(result => {
            // Update the responseFrame with ChatPDF responses
            const responseSection = responseFrame.contentDocument.getElementById('responseSection');
            responseSection.innerHTML = result.content;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
