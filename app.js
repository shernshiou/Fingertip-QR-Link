function onContextClick(info, tab) {
  chrome.tabs.create({
    url: tab.url,
    //url: 'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=' + tab.url + '&chld=L|1&choe=UTF-8'
  }, function(tab){
    chrome.tabs.executeScript(tab.id, {file: 'lib/jquery.js'}, function(){
      chrome.tabs.executeScript(tab.id, {file: 'effect.js', runAt: 'document_end'});
    });
  });
}

chrome.contextMenus.create({'title': 'Change to QR', 'onclick': onContextClick});