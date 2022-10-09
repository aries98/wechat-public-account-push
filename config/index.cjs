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
        ['08:00-09:35 高等数学，09:50-11:25 高等物理'],
        ['08:00-09:35 高等数学，09:50-11:25 高等物理'],
        ['今天没课哦'],
        ['08:00-09:35 高等数学，09:50-11:25 高等物理'],
        ['08:00-09:35 高等数学，09:50-11:25 高等物理'],
        ['今天没课哦'],
        ['今天没课哦'],
      ],
    },
    {
      name: '亲爱的炸鸡宝贝',
      id: 'oplc560lfACW6yepbYv7R5zGIEfg',
      useTemplateId: 'SLO-LCeMstDSZUR0tmKHhsoVAO_OLAcWaY1Oxh1fFA4',
      horoscopeDate: '08-06',
      horoscopeDateType: '今日',
      openUrl: ' '
    },
  ],

  CALLBACK_TEMPLATE_ID: 'kCS9jRHrohM4RhEim4JofoXuTcM5KovYM8SzKsaaqPY',
  CALLBACK_USERS: [
    {
      name: '自己',
      id: 'oplc568_mIKrWB9N5r2T7Li_ukuQ',
    }
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
    }
  ],
}

module.exports = USER_CONFIG

