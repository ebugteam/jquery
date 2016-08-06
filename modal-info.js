$(document).ready(function() { 
    $('#demo13').click(function() { 
        $.blockUI({ 
            theme: true, 
            title: 'Your title here', 
            message: '<p>This the message spot.</p>', 
            timeout: 5000 
        }); 
    });    
}); 
