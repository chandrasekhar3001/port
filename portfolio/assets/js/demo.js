$('#modal-dialog').on('show', function() {
    alert("yes")
    var link = $(this).data('link'),
        confirmBtn = $(this).find('.confirm');
  })
  
  
  $('#btnYes').click(function() {
  
    // handle form processing here
    
    alert('submit form');
    $('form').submit();
  
  });