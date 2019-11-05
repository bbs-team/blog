var getBlog = (id) => {
  return callApi('GET','/blog/' + id,{ id }).data;
};

$(document).ready ( function () {
  var data=getBlog(id);

  $("#show_Content").append("<li>"+data.content+"</li>");
});

function deleteBlog() {
  var method = 'delete';
  var url = '/blog/' + id;
  res = callApi(method, url, id);
  if (res.result == 'fail') {
    alert(res.err);
    return;
  }

  location.href = '/';
}
