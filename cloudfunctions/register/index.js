
const cloudbase = require("@cloudbase/node-sdk");
const moment = require("moment")
const app = cloudbase.init({
  env:cloudbase.SYMBOL_CURRENT_ENV
});

const db = app.database();

exports.main = async (event, context) => {
  const { user = 'cherryzxzhu_test', ds = '20210520' } = event;
  const res = await db.collection("goodtime")
    .add({
      user,
      ds,
    });
  const loveTime = moment().diff(moment(ds, 'YYYYMMDD'), 'days');
  return {
    love_time: loveTime
  }
};

