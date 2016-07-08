var UrlParser = (function () {
    function UrlParser() {
        this.entireUrl = location.href;
        this.sec = this.entireUrl.split("//")[1].split("/");
        this.fileName = this.entireUrl.split("/").pop().split('?')[0].split('#')[0];
        this.params = this.getParams();
        location['sec'] = this.sec;
        location['fileName'] = this.fileName;
        location['params'] = this.params;
    }
    UrlParser.prototype.getParams = function () {
        var path = location.search;
        path = path.slice(1, path.length);
        var list = path.split("&");
        var rows = [];
        for (var i in list) {
            rows.push(list[i]);
        }
        var obj = {};
        for (var i in rows) {
            var ar = rows[i].split("=");
            var key = ar[0];
            var val = ar[1];
            obj[key] = val;
        }
        return obj;
    };
    return UrlParser;
}());
;
new UrlParser();
