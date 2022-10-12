/* eslint-disable */

const USER_CONFIG = {
  APP_ID: '',
  APP_SECRET: '',
  // true加载字体颜色，false加载emoji表情
  IS_SHOW_COLOR: true,
  
  PROVINCE: '',
  CITY: '澳门',
  
  // 功能开关
  SWITCH: {
    /** 每日天气 */
    weather: true,
    /** 节假日 */
    // 下一休息日综合提醒
    holidaytts: true,
    // 金山每日一句
    CIBA: false,
    // 每日一言
    oneTalk: true,
    // 土味情话(彩虹屁)
    earthyLoveWords: true,
    // 朋友圈文案
    momentCopyrighting: false,
    // 毒鸡汤
    poisonChickenSoup: false,
    // 古诗古文
    poetry: false,
    /** 星座运势 */
    horoscope: true,
    /** 生日消息和节日消息 */
    birthdayMessage: false,
    // 学生课表
    courseSchedule: true,
  },

  USERS: [
    {
      name: '炸鸡',
      id: 'oplc56y_6rAnmyjRBE2pPsU_v_RQ',
      useTemplateId: '4Zp2W8mSNRSxRjUIGxLjMlSdblbFkKpAV2I2i9g8BGc',
      openUrl: ' ',
      festivals: [
        {
          type: '*生日', name: '宝贝', year: '2002', date: '08-06',
        },
      ],
      customizedDateList: [
        { keyword: 'love_day', date: '2021-03-02' },
      ],
      courseSchedule: [
        ['09:00-12:00 大学英语C3'],
        ['12:15-15:15 旅游服务管理'],
        ['今天没课哦'],
        ['12:15-15:15 专业英语'],
        ['15:30-18:30 旅游市场，19:00-22:00 西方文化概论'],
        ['今天没课哦'],
        ['今天没课哦'],
      ],
    },
    {
      name: '亲爱的炸鸡宝贝',
      id: 'oplc56y_6rAnmyjRBE2pPsU_v_RQ',
      useTemplateId: 'SLO-LCeMstDSZUR0tmKHhsoVAO_OLAcWaY1Oxh1fFA4',
      horoscopeDate: '08-06',
      horoscopeDateType: '今日',
      openUrl: ' '
    },
    {
      name: '炸鸡作业',
      id: 'oplc56y_6rAnmyjRBE2pPsU_v_RQ',
      useTemplateId: '9saVkqGFAl9VwP7PT59t-Guvb30PSB3rAF3ZjphL6yw',
      openUrl: ' '
    },
    {
      name: '自己测试',
      id: 'oplc560lfACW6yepbYv7R5zGIEfg',
      useTemplateId: '4Zp2W8mSNRSxRjUIGxLjMlSdblbFkKpAV2I2i9g8BGc',
      openUrl: ' ',
      festivals: [
        {
          type: '*生日', name: '宝贝', year: '2002', date: '08-06',
        },
      ],
      customizedDateList: [
        { keyword: 'love_day', date: '2021-03-02' },
      ],
      courseSchedule: [
        ['09:00-12:00 大学英语C3'],
        ['12:15-15:15 旅游服务管理'],
        ['今天没课哦'],
        ['12:15-15:15 专业英语'],
        ['15:30-18:30 旅游市场，19:00-22:00 西方文化概论'],
        ['今天没课哦'],
        ['今天没课哦'],
      ],
    },
    {
      name: '自己测试',
      id: 'oplc560lfACW6yepbYv7R5zGIEfg',
      useTemplateId: 'SLO-LCeMstDSZUR0tmKHhsoVAO_OLAcWaY1Oxh1fFA4',
      horoscopeDate: '08-06',
      horoscopeDateType: '今日',
      openUrl: ' '
    },
    {
      name: '自己测试',
      id: 'oplc560lfACW6yepbYv7R5zGIEfg',
      useTemplateId: '9saVkqGFAl9VwP7PT59t-Guvb30PSB3rAF3ZjphL6yw',
      openUrl: ' '
    }
  ],

  CALLBACK_TEMPLATE_ID: 'kCS9jRHrohM4RhEim4JofoXuTcM5KovYM8SzKsaaqPY',
  CALLBACK_USERS: [
    {
      name: '自己',
      id: 'oplc568_mIKrWB9N5r2T7Li_ukuQ',
    },
  ],
  
  SLOT_LIST: [
    {
      keyword: 'lover_prattle',
      contents: [
        '因为太喜欢你，所以看谁都像是情敌。',
        '申请成为你爱里的永久居民。',
        '你很傻，你很笨，可我还是很羡慕你，因为你有我',
        '遇见你，就好像捡到了100斤的运气'
      ],
    },
    { keyword: 'home_work', contents: '1、西方文化概论的ppt和资料（10.15/10.21)\n2、中国服贸会(10.18)\n3、英语ppt（日本精神健康）(10.24)\n4、维也纳swot和总结\n5、海底捞\n6、专业英语ppt'},
  ],
}

module.exports = USER_CONFIG

