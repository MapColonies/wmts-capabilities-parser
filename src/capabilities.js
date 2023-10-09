export class Capabilities {
  requestUrl;
  content;
  lastUpdatedTime;

  constructor(requestUrl, content, lastUpdatedTime) {
    if (requestUrl && content) {
      this.requestUrl = requestUrl;
      this.content = content;
      if (lastUpdatedTime) {
        this.lastUpdatedTime = lastUpdatedTime;
      } else {
        this.lastUpdatedTime = new Date();
      }
    }
  }

  isLatest() {
    if (this.lastUpdatedTime) {
      return diff_minutes(new Date(), this.lastUpdatedTime) < 5;
    } else {
      return false;
    }
  }
}

function diff_minutes(secondDate, firstDate) {
  var diff = (new Date(secondDate).getTime() - new Date(firstDate).getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
}
