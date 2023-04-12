import { schedule_reset_count, schedule_remove_exprie } from './schedule'
var schedule = require('node-schedule');

function scheduleCron() {
    schedule.scheduleJob('0 0 0 * * *', function () {
        console.log('定时任务-重置指纹次数:' + new Date());
        schedule_reset_count()
    });

    schedule.scheduleJob('0 0 0/1 * * *', function () {
        console.log('定时任务-删除过期数据:' + new Date());
        schedule_remove_exprie()
    });
}

export { scheduleCron }