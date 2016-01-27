'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cssVendor = require('css-vendor');

var cssVendor = _interopRequireWildcard(_cssVendor);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jsprefix = function jsprefix(x) {
  return '' + cssVendor.prefix.js + x;
};

var Tip = _react2.default.createClass({
  displayName: 'tip',
  render: function render() {
    var direction = this.props.direction;

    var size = this.props.size || 24;
    var isPortrait = direction === 'up' || direction === 'down';
    var mainLength = size;
    var crossLength = size * 2;
    var points = direction === 'up' ? '0,' + mainLength + ' ' + mainLength + ',0, ' + crossLength + ',' + mainLength : direction === 'down' ? '0,0 ' + mainLength + ',' + mainLength + ', ' + crossLength + ',0' : direction === 'left' ? mainLength + ',0 0,' + mainLength + ', ' + mainLength + ',' + crossLength : '0,0 ' + mainLength + ',' + mainLength + ', 0,' + crossLength;

    var styles = {
      width: isPortrait ? crossLength : mainLength,
      height: isPortrait ? mainLength : crossLength,
      overflow: 'hidden',
      top: direction === 'up' ? '1px' : direction === 'down' ? '-1px' : 'initial',
      left: direction === 'left' ? '1px' : direction === 'right' ? '-1px' : 'initial',
      position: 'relative'
    };

    var shapeStyle = {
      width: styles.width,
      height: styles.height,
      transform: 'rotate(45deg)'
    };

    shapeStyle[jsprefix('Transform')] = shapeStyle.transform;

    return React.createElement(
      'div',
      { className: 'Popover-tip', style: styles },
      React.createElement('div', { className: 'Popover-tipShape', style: shapeStyle })
    );
  }
});

exports.default = Tip;