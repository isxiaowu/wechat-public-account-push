export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx9154eca86f7fcfa1",
    // 公众号appSecret
    appSecret: "6a648f73aaf9f1c4329dcfedba00ef04",
    // 模板消息id
    templateId: "1fOTZLD2gM3cKW5yYtdxPsOjZYo51L9t7cA_wwS3hJQ",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["oyTgI6OFIrkRVcsCeTaaAnxLz0ck","oyTgI6Kno-bjd8tEDHaOUHJheiPk"],
     
    // 信息配置
    ewai: "   ",
    // 所在省份
    province: "内蒙古",
    // 所在城市
    city: "乌兰察布",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "小李", "year": "1996", "date": "10-18", "type": 'new'},
      {"name": "小乌", "year": "1997", "date": "11-08", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2021-09-15",
    // 结婚纪念日
    
    }

 //{{date.DATA}}  
//城市：{{city.DATA}}  
//天气：{{weather.DATA}}  
//最低气温: {{min_temperature.DATA}}  
//最高气温: {{max_temperature.DATA}}  
//今天是我们恋爱的第{{love_day.DATA}}天
// 
 //{{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
