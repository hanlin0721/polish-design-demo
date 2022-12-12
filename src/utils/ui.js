export function secsToDhms(s) {
  let secs = Number(s);
  var d = Math.floor(secs / (60 * 60 * 24));
  var h = Math.floor((secs % (60 * 60 * 24)) / (60 * 60));
  var m = Math.floor(((secs % (60 * 60 * 24)) % (60 * 60)) / 60);
  var s = Math.floor(((secs % (60 * 60 * 24)) % (60 * 60)) % 60);

  var dDisplay = d > 0 ? d + " 天 " : "";
  var hDisplay = h > 0 ? h + " 小時 " : "";
  var mDisplay = m > 0 ? m + " 分鐘 " : "";
  var sDisplay = s > 0 ? s + " 秒" : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}