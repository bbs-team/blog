var getBlog = () => {
  return callApi('GET','/blog',{}).data;
};
<!--alert(JSON.stringify(data));-->
$(document).ready ( function () {
    var data = getBlog();
    for(var i in data) {
      var tmp = '<li>'+data[i].name+'</li>'
      $("#test_tmp").append(tmp); //id 를 선택하기 위한 선택자 #이 필요.
    }
  }
);
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

  if (res.result == 'success') {
    location.href = '/blog';
  }
}