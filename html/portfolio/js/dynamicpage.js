function getContent1()
{
   $.ajax({

     type: "GET",
     url: 'wif/wif1.html',
     data: "id=" + id, // appears as $_GET['id'] @ your backend side
     success: function(data) {
           // data is ur summary
          $('#content').html(data);
     }

   });

}

function getContent2()
{
   $.ajax({

     type: "GET",
     url: 'wif/wif2.html',
     data: "id=" + id, // appears as $_GET['id'] @ your backend side
     success: function(data) {
           // data is ur summary
          $('#content').html(data);
     }

   });

}

function getContent3()
{
   $.ajax({

     type: "GET",
     url: 'wif/wif3.html',
     data: "id=" + id, // appears as $_GET['id'] @ your backend side
     success: function(data) {
           // data is ur summary
          $('#content').html(data);
     }

   });

}