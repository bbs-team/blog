const { user } =  require('../../../models');

const login = (req,res) => {
  var user_id = req.body.user_id;
  var pw = req.body.pw;

  if(!user_id || !pw){
    res.json({
      result: 'fail',
      err: '아이디 또는 비밀번호 입력이 잘못되었습니다.'
    })
  }else {
    user.findOne({
      where:{
        user_id: user_id,
        pw: pw
      }
    }).then(result => {

      if(result){
        res.cookie('user_id',user_id)
        res.json({
          result: "success",
          data:result
        });
      }
    })
  }
};

const join = (req,res) =>{
  var user_id = req.body.user_id;
  var pw = req.body.pw;
  var name = req.body.name;
  if(!user_id || !pw || !name){
    res.json({
      result: 'fail',
      err: '입력하신 정보가 잘못되었습니다.'
    })
  }else{
    user.create({
      user_id: user_id,
      pw: pw,
      name: name,
    }).then(result =>{
      res.json({
        result: 'success'
      })
    }).error(err =>{
      res.json({
        result:'fail',
        err:'회원가입에 실패하였습니다.'
      })
    })
  }
};

module.exports = {
  login,
  join
}