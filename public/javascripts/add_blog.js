function insertBlog() {
  var form = $('#addBlogForm');
  var method = form.attr('method');
  var url = form.attr('action');
  var data = form.serialize();

  res = callApi(method, url, data);
  if (res.result == 'fail') {
    alert(res.err);
    return;
  }

  location.href = '/';
}
