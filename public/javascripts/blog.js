var getBlog = () => {
  return callApi('GET','/blog',{}).data;
};
<!--alert(JSON.stringify(data));-->
$(document).ready ( function () {
    var data = getBlog();
  var tmp = '<tbody>'
    for(var i in data) {
      tmp += '<tr><td>'+data[i].id+'</td><td>'+data[i].name+'</td><td>'+data[i].createdAt+'</td></tr>'
    }
    tmp += '</tbody>'
  $("#test_tmp").append(tmp); //id 를 선택하기 위한 선택자 #이 필요.
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