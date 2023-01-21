$(document).ready(function(){
  $('#getToken').click(() => {
    $.ajax({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      url: 'http://127.0.0.1:8000/auth/google',
      type: 'GET',
      dataType: 'JSON',
      cache: false,
      success(response) {
        if (response) {
          console.log(response);
          $('#token').text(response);
        } else {
          console.log('some error occurred try again');
        }
      },
      error(response) {
        console.log(response);
      },
    });
  })
});