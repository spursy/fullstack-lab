/**
 * Created by yang yang at 2017-12-15
 */
'use strict'
/**
 * Created by huping on 2017/9/12.
 */
'use strict'
var dateFormat = require('dateformat');
module.exports = function(sequelize,DataTypes){
    var User = sequelize.define('user',{
        teacherid:{
            type:DataTypes.UUID,
            primaryKey:true,
            allowNull:false,
            defaultValue:DataTypes.UUIDV1
        },
        name:{
            type:DataTypes.STRING,
            defaultValue : ''
        },
        age: {
            type:DataTypes.INTEGER,
            defaultValue : 0
        },
        location:{
            type:DataTypes.JSON
        },
        students: {
            type: DataTypes.JSON
        },
        created_by: {
            type:DataTypes.STRING,
            defaultValue : ''
        },
        updated_by: {
            type:DataTypes.STRING,
            defaultValue : ''
        }
    },{
        //freezeTableName: true,//freezeTableName: true  这个选项表示，数据库中的表明与程序中的保持一致，否则数据库中的表名会以复数的形式命名
        //tableName: 'user',
        timestamps: true,
        getterMethods   : {
            created_at_format : function()  {
                if(this.created_at){
                    return dateFormat(this.created_at,'yyyy-mm-dd HH:MM:ss')
                }else{
                    return ""
                }
            },
            updated_at_format : function()  {
                if(this.updated_dt){
                    return dateFormat(this.updated_dt,'yyyy-mm-dd HH:MM:ss')
                }else{
                    return ""
                }
            },
        },
    });
    return User;
};