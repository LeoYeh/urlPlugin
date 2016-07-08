var UrlPlugin = (function () {
    function UrlPlugin() {
        this.entireUrl = location.href;
        this.sec = this.entireUrl.split("//")[1].split("?")[0].split("#")[0].split("/");
        this.fileName = this.entireUrl.split("/").pop().split('?')[0].split('#')[0];
        this.params = this.getParams(location.search);
        this.hashs = this.getParams(location.hash, ";");
        location['sec'] = this.sec;
        location['fileName'] = this.fileName;
        location['params'] = this.params;
        location['hashs'] = this.hashs;
    }
    UrlPlugin.prototype.getParams = function (path, character) {
        if (character === void 0) { character = "&"; }
        path = path.slice(1, path.length);
        var list = path.split(character);
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
    return UrlPlugin;
}());
;
new UrlPlugin();
