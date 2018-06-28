module.exports = {
  	
	//获取所有数据
  getAllData:function(tableName,callBack,errorBacl) {
    var tableName = Bmob.Object.extend(tableName);
    var query = new Bmob.Query(tableName);
    // 查询所有数据
    query.find({
      success: function(res) {
        callBack(res)
      },
      error: function(error) {
        errorBacl(error)
      }
    });
  },

  //根据id获取对应数据
  getIdData:function(id,tableName,callBack,errorBacl) {
    var GameScore = Bmob.Object.extend(tableName);
    var query = new Bmob.Query(GameScore);
    query.get(id, {
      success: function(res) {
        callBack(res)
      },
      error: function(object, error) {
        errorBacl(error)
      }
    });
  }
}