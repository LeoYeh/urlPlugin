class UrlPlugin {
	e:string; entireUrl:string;
	f:string; fileName:string;
	r:string; root:string;
	sec:string[];
	params:{key:string,val:string};
	hashs:{key:string,val:string};
    constructor() { 
        this.entireUrl = location.href;
        this.sec = this.entireUrl.split("//")[1].split("?")[0].split("#")[0].split("/");
        this.fileName = this.entireUrl.split("/").pop().split('?')[0].split('#')[0];
        this.params = this.getParams(location.search);
        this.hashs = this.getParams(location.hash,";");
        location['sec'] = this.sec;
        location['fileName'] = this.fileName;
        location['params'] = this.params;
        location['hashs'] = this.hashs;
    }
    public getParams(path:string, character:string ="&"):{key:string,val:string}{
	    path = path.slice( 1, path.length );
	    let list:string[] = path.split(character);
	    let rows:any = [];
	    for( var i in list ){ rows.push( list[i] );  }
	    let obj:any = {};
	    for( var i in rows ){
	        var ar = rows[i].split("=");
	        var key = ar[0];
	        var val = ar[1];
	        obj[key] = val;
	    }
	    return obj;
    }
};

new UrlPlugin();