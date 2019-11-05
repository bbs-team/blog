function join() {
  var form = $('#joinForm');
  var method = form.attr('method');
  var url = form.attr('action');
  var data = form.serialize();

  res = callApi(method, url, data);
  if (res.result == 'fail') {
    alert(res.err);
    return;
  }

  if (res.result == 'success') {
    location.href = '/';
  }
}

function login(){
  var form = $('#loginForm');
  var method = form.attr('method');
  var url = form.attr('action');
  var data = form.serialize();

  res = callApi(method, url, data);
  if(res.result == 'fail'){
    alert(res.err);
    return;
  }else{
    location.href = '/';
  }
}
