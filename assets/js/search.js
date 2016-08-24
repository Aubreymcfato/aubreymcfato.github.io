$('#search_results').tapir({
  'token': '570e9e6314ad6644b943ab78'
});

// watch for creation of an element which satisfies the selector ".test-elem"
$(document).arrive(".post-content a", function() {
    // 'this' refers to the newly created element
    // var $newElem = $(this);
    $(this).each(function(){
          var newUrl = this.href.replace('/feed.xml/', '');
          newUrl = newUrl.replace('/rss.xml/', '');
          $(this).attr('href', newUrl);
        });
});
