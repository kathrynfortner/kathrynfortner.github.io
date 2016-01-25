function getContent(id)
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