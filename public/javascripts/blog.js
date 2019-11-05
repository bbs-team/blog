var getBlogList = () => {
  return callApi('GET','/blog',{}).data;
};
<!--alert(JSON.stringify(data));-->
$(document).ready ( function () {
  var data = getBlogList();
  var tbody = $('<tbody></tbody>');
  for(var i in data) {
    var tr = $('<tr></tr>');
      tr.append('<td>' + data[i].id + '</td>');
      tr.append('<td onClick="location.href=\'/' + data[i].id + '\'">' + data[i].name + '</td>');
      tr.append('<td>'+data[i].createdAt+'</td>');
      tbody.append(tr);
  }
  $("#test_tmp").append(tbody); //id 를 선택하기 위한 선택자 #이 필요.
});
