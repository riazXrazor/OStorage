;(function(window,document,undefined){

  function OStorage(name){
      this.storageKey = name || Date.now();
      this.LS = window.localStorage;
      this.json = window.JSON;
      this.dataItem = null;

      if(this.exists())
      {
        this.dataItem = this.get();
      }


  }

  OStorage.prototype.exists = function(name){
    return !! this.LS.getItem(name || this.storageKey);
  };

  OStorage.prototype.toObj = function(data){
    var data = data || this.dataItem;
    if(typeof data === "string")
    {
      try{
        data = this.json.parse(data);
      }catch(e){
          console.error("Not a Valid JSON string");
      }
    }
    else {
      console.error("Not a JSON string");
    }

    return data;
  };



  OStorage.prototype.get = function(key){
    var key = key || this.storageKey;
    data = this.LS.getItem(key);
    return !!data ? this.toObj(data) : data;
  };

  OStorage.prototype.create = function(data){
    var data = data || this.dataItem;
    this.LS.setItem(this.storageKey,this.json.stringify(data));
    return this.get();
  };

  OStorage.prototype.update = function(data){
    var data = data || this.dataItem;
    if(data === this.dataItem) {
      this.LS.setItem(this.storageKey,this.json.stringify(this.dataItem));
    }
    else {
      this.LS.setItem(this.storageKey,this.json.stringify(data));
    }
  };

  OStorage.prototype.remove = function(){
    this.LS.removeItem(this.storageKey);
  }

  OStorage.prototype.removeAll = function(){
    this.LS.clear();
  }

  OStorage.prototype.getAllAsArray = function(){
    var arr = [];
      for (var key in this.LS) {
          arr.push(new OStorage(key));
      }
      return arr;
  };

  OStorage.prototype.getAllAsObject = function(){
    var obj = {};
      for (var key in this.LS) {
          obj[key] = new OStorage(key);
      }
      return obj;
  };

window.OStorage = OStorage;
}(window,document));
