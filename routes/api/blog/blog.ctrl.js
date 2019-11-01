const { blog } = require('../../../models');

const list = (req,res) => {
    req.query.limit = req.query.limit || 10;
    const limit = parseInt(req.query.limit,10);

    if(Number.isNaN(limit)){
        res.status(400).end();
    }else {
        blog.findAll({
            order: [['id', 'DESC']]
        }).then(result => {
            if(result){
                res.json({
                    result: "success",
                    data:result
                });
            }
        })
    }
};

const create = (req,res) => {
    var name = req.body.name;
    var content = req.body.content;
    if(!name || !content){
        res.json({
            result: 'fail',
            err: 'data 정보가 없습니다.'
        });
    }else{
        blog.create({
            name, content
        }).then(result => {
            res.json({
                result: 'success'
            });
        }).error(err => {
            res.json({
                result: 'fail',
                err: '등록에 실패하였습니다'
            })
        })
    }
};

const update = (req,res) =>{
    var id = req.body.id;
    var name = req.body.name;
    var content = req.body.content;
    var date_time = req.body.date_time;

    if(!id || !name || !content || !date_time){
        res.json({
            result: 'fail',
            err: '정보 입력이 잘못 되었습니다.'
        });
    }else{
        blog.update({
            id, name, content,date_time
        }).then(result => {
            res.json({
                result: 'success'
            });
        }).error(err => {
            res.json({
                result: 'fail',
                err: '수정에 실패하였습니다.'
            })
        })
    }
};

const remove = (req,res) =>{
    const id = parseInt(req.params.id,10)

    if(!id){
        res.json({
            result: 'fail',
            err: '정보 입력이 정확하지 않습니다.'
        });
    }else{
        blog.destroy({
            where: {
                id: id
            }
        }).then(result => {
            res.json({
                result: 'success'
            });
        }).error(err => {
            res.json({
                result: 'fail',
                err: '내용 삭제에 실패하였습니다.'
            })
        })
    }
};
const show = (req,res) =>{
    const id = parseInt(req.params.id,10)
    if (!id) {
        res.json({
            result: 'fail',
            err: 'id가 존재하지 않습니다.'
        })
    } else {
        blog.findOne({
            where: {id: id}
        }).then(result =>{
            res.json({
                result:'success',
                data: result
            })
        })
    }
}

module.exports = {
    list,
    create,
    update,
    remove,
    show
}