'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

console.log('运行成功==================');


var actionMap = {
  init: {
    description: 'generate a new project from a template',
    usage: ['hl init templateName projectName'],
    alias: 'inita'
  }
};
Object.keys(actionMap).forEach(function (action) {
  _commander2.default.command(action).description(actionMap[action].description).alias(actionMap[action].alias).action(function () {
    switch (action) {
      case 'init':
        _index2.default.apply(undefined, [action].concat(_toConsumableArray(process.argv.slice(3))));
        break;

      default:
        console.log('暂时还没有这个指令');
        break;
    }
  });
});

// program.command('init') // 命令名称
//   .description('创建一个新的项目来自一个模板文件') // 命令描述
//   .alias('initialization') // 命令别名 
//   .action(() => {   // 命令具体干的事
//     console.log(...process.avgv.slice(3))
//   })

// program.usage('<command> [options]')


if (_commander2.default.all) {
  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa');
}

_commander2.default.on('-h', _util2.default.help);
_commander2.default.on('--help', _util2.default.help);

_commander2.default.version('0.0.1')
// .option('-a, --all', '这是说明')
.parse(process.argv);