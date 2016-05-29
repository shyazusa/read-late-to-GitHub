var tabs = require('sdk/tabs');
var github = require('./github.json');
var Request = require("sdk/request").Request;
var buttons = require('sdk/ui/button/action');

var button = buttons.ActionButton({
  id: 'create-issue-for-gitgub',
  label: 'Create issue',
  icon: {
    '16': './icon-16.png',
    '32': './icon-32.png',
    '64': './icon-64.png'
  },
  onClick: handleClick
});

function handleClick(state) {
  var user = github.user;
  var repo = github.repo;
  var token = github.token;
  var title = tabs.activeTab.title;
  var body = '[' + title + ']' + '(' + tabs.activeTab.url + ')';
  var query = JSON.stringify({
    'title': title,
    'body': body,
    'labels': ['readlate', 'memo']
  });
  var url = 'https://api.github.com/repos/' + user +'/' + repo + '/issues?access_token=' + token;
  Request({
    url: url,
    content: query
  }).post();
}
