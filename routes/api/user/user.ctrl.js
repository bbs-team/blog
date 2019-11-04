const { user } =  require('../../../models');

const login = (req,res) => {
  const user_id = req.body.user_id || req.query.id;
  const pw = req.body.pw || req.query.password;
  if (!user_id) {
    res.json({
      result: 'fail',
      err: '아이디를 입력해주세요'
    });
  } else {
    if (!pw) {
      res.json({
        result: 'fail',
        err: '비밀번호를 입력해주세요'
      });
    } else {
      console.log('find one')
      user.findOne({
        where: {
          user_id,
          pw
        }
      }).then(result => {
        if (result) {
          res.cookie('user_id', user_id);
          res.json({
            result: 'success'
          });
        } else {
          res.json({
            result: 'fail',
            err: '계정 정보가 일치하지 않습니다.'
          });
        }
      });
    }
  }
};

const logout = (req, res) => {
  res.clearCookie('user_id');
  res.redirect('/blog');
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
  join,
  logout
}